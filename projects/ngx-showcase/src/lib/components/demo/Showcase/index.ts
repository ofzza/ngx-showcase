// Showcase component, used to showcase live code
// ----------------------------------------------------------------------------

// Import dependencies
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, Input, ViewChild, ChangeDetectorRef, ViewContainerRef } from '@angular/core';
import {
  CompileService,
  ComponentCompiler,
  ComponentCompilerHtmlError,
  ComponentCompilerControllerError,
  ComponentCompilerStyleError,
} from '../../../services';

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
export class ShowcaseComponent implements OnInit, AfterViewInit, OnChanges {
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
   * Holds bound component compiler
   */
  private _componentCompiler?: ComponentCompiler;

  /**
   * Subject used for debounce-ing the render (on detected changes) procedure
   */
  private _debouncedRenderSubject?: Subject<any>;

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

  constructor(private _compile: CompileService, private _cd: ChangeDetectorRef) {}

  public ngOnInit() {
    // Set initial editing syntax
    this._resetEditingSyntax();
  }

  public ngAfterViewInit() {
    // Instantiate a bound compiler service
    if (this._exampleHostEl) {
      this._componentCompiler = this._compile.component(this._exampleHostEl);
    }
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

    // Render into host component
    this._componentCompiler?.compile(this._editingHtmlSyntax, this._editingControllerSyntax, this._editingStyleSyntax, this.modules).catch(err => {
      if (err instanceof ComponentCompilerHtmlError) {
        this._editingHtmlSyntaxError = err;
      }
      if (err instanceof ComponentCompilerControllerError) {
        this._editingControllerSyntaxError = err;
      }
      if (err instanceof ComponentCompilerStyleError) {
        this._editingStyleSyntaxError = err;
      }
    });

    // Trigger change detection
    this._cd.detectChanges();
  }
}
