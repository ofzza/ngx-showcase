// Showcase component, used to showcase live code
// ----------------------------------------------------------------------------

// Import dependencies
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, ComponentRef, ViewContainerRef } from '@angular/core';
import { ModuleWithProviders, NgModule, Compiler, Injector, NgModuleRef, ChangeDetectorRef } from '@angular/core';

// (Re)export showcase component
export * from './_showcase';

/**
 * Syntax area component, used to display code/syntax
 */
@Component({
  selector: 'ngx-showcase',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class ShowcaseComponent implements OnInit, OnChanges {
  /**
   * Holds reference to the parent module
   */
  private static _parentModuleRef?: ModuleWithProviders<{}>;
  /**
   * Registers a reference to the parent module
   * @param parentModule reference to the parent module
   */
  public static _registerParentModule(parentModule: any) {
    this._parentModuleRef = parentModule as ModuleWithProviders<{}>;
  }

  /**
   * Modules that need to be included to render the component
   */
  @Input()
  public modules: (new () => any)[] = [];

  /**
   * Debounce interval between detecting syntax changes and (re)rendering
   */
  @Input()
  public debounce = 1000;

  /**
   * Initial HTML syntax to render
   */
  @Input()
  public html?: string | null;
  /**
   * Initial Javascript controller syntax to render
   */
  @Input()
  public controller?: string | null;
  /**
   * Initial style syntax to render
   */
  @Input()
  public style?: string | null;

  /**
   * Holds reference to the output host element for (dynamically created) playground example component
   */
  @ViewChild('renderHost', { read: ViewContainerRef, static: true })
  private _exampleHostEl?: ViewContainerRef;

  /**
   * Holds HTML syntax being edited
   */
  public _editingHtmlSyntax = '';
  /**
   * Holds controller syntax being edited
   */
  public _editingControllerSyntax = '';
  /**
   * Holds style syntax being edited
   */
  public _editingStyleSyntax = '';

  /**
   * Holds HTML syntax error caught while compiling syntax
   */
  public _editingHtmlSyntaxError?: Error;
  /**
   * Holds controller syntax error caught while compiling syntax
   */
  public _editingControllerSyntaxError?: Error;
  /**
   * Holds style syntax error caught while compiling syntax
   */
  public _editingStyleSyntaxError?: Error;

  /**
   * Holds reference to (dynamically created) playground example component
   */
  private _exampleComponent?: ComponentRef<any>;

  /**
   * Handles HTML editing syntax change
   * @param e Event descriptor
   */
  public _updateEditingHtmlSyntax(e: Event | string) {
    // Update from input element event
    if (e instanceof Event) {
      this._editingHtmlSyntax = (e.target as HTMLInputElement).value;
    }
    // Update from direct value
    else {
      this._editingHtmlSyntax = e;
    }

    // Render editing syntax
    this._render();
  }
  /**
   * Handles controller editing syntax change
   * @param e Event descriptor
   */
  public _updateEditingControllerSyntax(e: Event | string) {
    // Update from input element event
    if (e instanceof Event) {
      this._editingControllerSyntax = (e.target as HTMLInputElement).value;
    }
    // Update from direct value
    else {
      this._editingControllerSyntax = e;
    }

    // Render editing syntax
    this._render();
  }
  /**
   * Handles style editing syntax change
   * @param e Event descriptor
   */
  public _updateEditingStyleSyntax(e: Event | string) {
    // Update from input element event
    if (e instanceof Event) {
      this._editingStyleSyntax = (e.target as HTMLInputElement).value;
    }
    // Update from direct value
    else {
      this._editingStyleSyntax = e;
    }

    // Render editing syntax
    this._render();
  }

  /**
   * Resets editing syntax to initial value
   */
  public _resetEditingSyntax() {
    // Reset all syntax
    this._editingHtmlSyntax = this.html || '';
    this._editingControllerSyntax = this.controller || '';
    this._editingStyleSyntax = this.style || '';

    // Render editing syntax
    this._render();
  }

  /**
   * Subject used for debounce-ing the render (on detected changes) procedure
   */
  private _debouncedRenderSubject?: Subject<any>;

  constructor(private _compiler: Compiler, private _injector: Injector, private _module: NgModuleRef<any>, private _cd: ChangeDetectorRef) {}

  public ngOnInit() {
    // Set initial editing syntax
    this._resetEditingSyntax();
  }

  public ngOnChanges(changes: SimpleChanges) {
    // Update editing syntax if not previously edited
    if (changes.html && changes.html.previousValue === this._editingHtmlSyntax) {
      this._updateEditingHtmlSyntax(changes.html.currentValue);
    }
    if (changes.controller && changes.controller.previousValue === this._editingControllerSyntax) {
      this._updateEditingControllerSyntax(changes.controller.currentValue);
    }
    if (changes.style && changes.style.previousValue === this._editingStyleSyntax) {
      this._updateEditingStyleSyntax(changes.style.currentValue);
    }
  }

  /**
   * Schedules a debounced rendering of editing syntax into the render preview host element
   */
  private _render() {
    // In debounced subject not initialized, initialize subject and trigger render
    if (!this._debouncedRenderSubject) {
      // Initialize debounced subject
      this._debouncedRenderSubject = new Subject<any>();
      this._debouncedRenderSubject.pipe(debounceTime(this.debounce)).subscribe(() => {
        this._doRender();
      });
      // Trigger the first render right away
      this._doRender();

      // If debounced subject already in use, schedule a debounced render request
    } else {
      // Schedule a debounced render
      this._debouncedRenderSubject.next();
    }
  }
  /**
   * Renders editing syntax into the render preview host element
   */
  private _doRender() {
    // Reset errors
    this._editingHtmlSyntaxError = undefined;
    this._editingControllerSyntaxError = undefined;
    this._editingStyleSyntaxError = undefined;

    // Create a dynamic component
    const base = this;
    const dynamicComponentClass = Component({
      template: this._editingHtmlSyntax,
      styles: [this._editingStyleSyntax],
    })(
      class {
        constructor() {
          // Try evaluating the controller
          try {
            new Function(base._editingControllerSyntax).bind(this)();
          } catch (err) {
            base._editingControllerSyntaxError = err;
          }
        }
      },
    );

    // Create dynamic module
    const dynamicModuleClass = NgModule({
      imports: [...(ShowcaseComponent._parentModuleRef ? [ShowcaseComponent._parentModuleRef] : []), ...this.modules],
      declarations: [dynamicComponentClass],
    })(class {});

    // Attempt rendering component
    try {
      // Create and inject dynamically created component
      this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass).then(moduleWithFactories => {
        if (this._exampleHostEl) {
          try {
            // Ready component for injection
            const moduleRef = moduleWithFactories.ngModuleFactory.create(this._injector),
              factory = moduleWithFactories.componentFactories[0],
              component = factory.create(moduleRef.injector, [], null, this._module);

            // Destroy previously dynamically added components
            if (this._exampleComponent) {
              this._exampleComponent.destroy();
            }

            // Inject component
            this._exampleComponent = component;
            this._exampleHostEl.clear();
            this._exampleHostEl.insert(this._exampleComponent.hostView);

            // Trigger change detection
            // this._triggerDynamicComponentsChangeDetection();
          } catch (err) {
            this._editingHtmlSyntaxError = err;
          }
        }
      });
    } catch (err) {
      this._editingHtmlSyntaxError = err;
    }

    // Trigger change detection
    this._cd.detectChanges();
  }
}
