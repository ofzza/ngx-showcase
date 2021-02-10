// Compilation service, provides mechanisms for compiling angular entities during runtime
// ----------------------------------------------------------------------------

// Import dependencies
import { Injectable, ModuleWithProviders, NgModule, Component, Compiler, Injector, NgModuleRef, ViewContainerRef, ComponentRef } from '@angular/core';

// (Re)export showcase component
export * from './_showcase';

/**
 * Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
 */
@Injectable()
export class CompileService {
  /**
   * Holds reference to the parent module
   */
  public static _parentModuleRef?: ModuleWithProviders<{}>;
  /**
   * Registers a reference to the parent module
   * @param parentModule reference to the parent module
   */
  public static _registerParentModule(parentModule: any) {
    this._parentModuleRef = parentModule as ModuleWithProviders<{}>;
  }

  constructor(private _compiler: Compiler, private _injector: Injector, private _module: NgModuleRef<any>) {}

  /**
   * Creates a component compiler instance bound to a host view container
   * @param host View container to render into
   */
  public component(hostEl: ViewContainerRef) {
    return new ComponentCompiler(hostEl, this._compiler, this._injector, this._module);
  }
}

/**
 * Component compiler bound to host view container
 */
export class ComponentCompiler {
  /**
   * Holds reference to (dynamically created) playground example component
   */
  private _compiledComponent?: ComponentRef<any>;

  constructor(private _hostEl: ViewContainerRef, private _compiler: Compiler, private _injector: Injector, private _module: NgModuleRef<any>) {}

  /**
   * Renders editing syntax into the render preview host element
   */
  public async compile(html: string, controller: string, style: string, modules: (new () => any)[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Create a dynamic component
      const dynamicComponentClass = Component({
        template: html,
        styles: [style],
      })(
        class {
          constructor() {
            // Try evaluating the controller
            try {
              new Function(controller).bind(this)();
            } catch (err) {
              reject(new ComponentCompilerControllerError(err));
            }
          }
        },
      );

      // Create dynamic module
      const dynamicModuleClass = NgModule({
        imports: [...(CompileService._parentModuleRef ? [CompileService._parentModuleRef] : []), ...modules],
        declarations: [dynamicComponentClass],
      })(class {});

      // Attempt rendering component
      try {
        // Create and inject dynamically created component
        this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass).then(moduleWithFactories => {
          if (this._hostEl) {
            try {
              // Ready component for injection
              const moduleRef = moduleWithFactories.ngModuleFactory.create(this._injector),
                factory = moduleWithFactories.componentFactories[0],
                component = factory.create(moduleRef.injector, [], null, this._module);

              // Destroy previously dynamically added components
              if (this._compiledComponent) {
                this._compiledComponent.destroy();
              }

              // Inject component
              this._compiledComponent = component;
              this._hostEl.clear();
              this._hostEl.insert(this._compiledComponent.hostView);

              // Resolve compilation done
              resolve();
            } catch (err) {
              reject(new ComponentCompilerHtmlError(err));
            }
          }
        });
      } catch (err) {
        reject(new ComponentCompilerHtmlError(err));
      }
    });
  }
}

/**
 * Component HTML compilation error
 */
export class ComponentCompilerHtmlError extends Error {}
/**
 * Component Controller compilation error
 */
export class ComponentCompilerControllerError extends Error {}
/**
 * Component Style compilation error
 */
export class ComponentCompilerStyleError extends Error {}
