// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  Component,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';

// (Re)export showcase component
export * from './_showcase';

/**
 * Render perameters
 */
type TRenderRequest = { lines?: string[]; clear: boolean };
/**
 * Line elements references type
 */
type TLineRefs = { numEl?: HTMLElement; syntaxEl: HTMLElement; lineEl: HTMLElement };

/**
 * Syntax area component, used to display code/syntax
 */
@Component({
  selector: 'ngx-syntaxarea',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxAreaComponent implements AfterViewInit, OnChanges, OnDestroy {
  /**
   * Syntax to display
   */
  @Input()
  public syntax: string | Observable<string> | null = '';

  /**
   * If displayed syntax should be wrapped
   */
  @Input()
  public wrap = false;

  /**
   * If line-numbers should be displayed
   */
  @Input()
  public numbers = false;

  /**
   * Syntax host element
   */
  @ViewChild('syntaxarea', { static: true })
  private _syntaxareaEl?: ElementRef<any>;

  /**
   * Loading status
   */
  @HostBinding('class.loading')
  public _loading = false;

  /**
   * Private property, used to make syntaxarea component editable
   */
  @Input()
  public _contentEditable = false;
  /**
   * Private property, used to make syntaxarea component editable
   */
  @Output()
  public _syntaxChange = new EventEmitter<Event>();

  /**
   * Holds input syntax subscription being processed
   */
  private _syntaxSubscription?: Subscription;

  /**
   * Queued render request's lines to render
   */
  private _queuedRenderLines?: string[] = [];
  /**
   * Queued render request's clear status
   */
  private _queuedRenderClear = false;

  /**
   * Holds references to all rendered lines' HTML elements
   */
  public _linesElementsAll: TLineRefs[] = [];
  /**
   * Holds references to visible rendered lines' HTML elements
   */
  private _linesElementsVisible: TLineRefs[] = [];

  /**
   * Holds Subject instance used to debounce render requests
   */
  private _renderDebouncedSubject?: Subject<void>;
  /**
   * Holds Subject instance used to debounce visibility updating
   */
  private _visibilityDebouncedSubject?: Subject<void>;

  constructor(private _cd: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    // Validate all elements loaded
    if (!this._syntaxareaEl) {
      throw new Error('Missing syntaxarea syntax hosting element!');
    }
    // Subscribe to scroll events
    this._syntaxareaEl.nativeElement.parentNode.addEventListener('scroll', () => {
      this._updateViewVisibility();
    });
  }

  public ngOnChanges(changes: SimpleChanges) {
    // Handle changes to syntax
    if (changes.syntax) {
      // Ingest syntax passed directly
      if (typeof changes.syntax.currentValue === 'string') {
        // Store syntax
        const lines = changes.syntax.currentValue.split('\n');
        // Render
        this._renderSyntax(lines, true);
      }

      // Ingest syntax streaming over observable instance
      else if (changes.syntax.currentValue instanceof Observable) {
        // Set loading status
        this._loading = true;
        this._cd.detectChanges();
        // Reset syntax
        let syntaxBuffer = undefined as string | undefined;
        this._renderSyntax(undefined, true);
        // Stream and process syntax
        this._syntaxSubscription?.unsubscribe();
        this._syntaxSubscription = changes.syntax.currentValue.subscribe(
          (syntaxPacket: string) => {
            // Split syntax into lines
            const lines = syntaxPacket.split('\n');
            // Prepend syntax buffer
            if (syntaxBuffer) {
              if (lines.length) {
                lines[0] = `${syntaxBuffer}${lines[0]}`;
              } else {
                lines.push(syntaxBuffer);
              }
              syntaxBuffer = undefined;
            }
            // Store last (potentially incomplete) line into syntax buffer
            syntaxBuffer = lines.length ? lines.splice(lines.length - 1, 1)[0] : undefined;
            // Render
            this._renderSyntax(lines, false);
          },
          (error: Error) => {},
          () => {
            // Append buffered line into rendered output
            if (syntaxBuffer) {
              this._renderSyntax([syntaxBuffer], false);
              syntaxBuffer = undefined;
            }
            // Reset loading status
            this._loading = false;
            this._syntaxSubscription?.unsubscribe();
            this._cd.detectChanges();
          },
        );
      }
    }
  }

  public ngOnDestroy() {
    // Unsubscribe from any further streaming syntax
    this._syntaxSubscription?.unsubscribe();
  }

  /**
   * (Debounced) Outputs syntax into view
   */
  private _renderSyntax(lines?: string[], clear = true) {
    // Initialize debouncing
    if (!this._renderDebouncedSubject) {
      this._renderDebouncedSubject = new Subject<void>();
      this._renderDebouncedSubject.pipe(debounceTime(10)).subscribe(renderReq => {
        this._doRenderSyntax();
      });
    }
    // Store lines and clear status
    if (clear) {
      this._queuedRenderLines = lines;
      this._queuedRenderClear = true;
    } else {
      if (lines) {
        (this._queuedRenderLines = this._queuedRenderLines || []).push(...lines);
      }
      this._queuedRenderClear = this._queuedRenderClear || clear;
    }
    // Schedule debounced visibility update
    this._renderDebouncedSubject.next();
  }
  /**
   * Outputs syntax into view
   */
  private _doRenderSyntax() {
    // Validate all elements loaded
    if (!this._syntaxareaEl) {
      throw new Error('Missing syntaxarea syntax hosting element!');
    }
    // If requested, clear previous syntax
    if (this._queuedRenderClear) {
      this._syntaxareaEl.nativeElement.innerHTML = '';
      this._linesElementsAll = [];
      this._linesElementsVisible = [];
    }
    // If no syntax, done
    if (!this._queuedRenderLines) {
      return;
    }
    // Render syntax into host element
    const refs = this._queuedRenderLines.map((line, i) => {
      // Initialize elements
      const lineEl = document.createElement('div'),
        syntaxEl = document.createElement('span');
      // Set elements' contents and append line
      syntaxEl.className = 'ngx-syntax-line-syntax';
      syntaxEl.innerHTML = line.trimEnd() || '&nbsp;';
      let numEl = undefined as HTMLElement | undefined;
      if (this.numbers) {
        numEl = document.createElement('span');
        numEl.className = 'ngx-syntax-line-number';
        numEl.innerHTML = (this._linesElementsAll.length + i + 1).toString();
        lineEl.append(numEl, syntaxEl);
      } else {
        lineEl.append(syntaxEl);
      }
      const lineRefs = { numEl, syntaxEl, lineEl } as TLineRefs;
      // Update line visibility
      this._setLineVisibility(lineRefs, false);
      // Return composed line
      return lineRefs;
    });
    this._syntaxareaEl.nativeElement.append(...refs.map(ref => ref.lineEl));
    // Update lines' elements and count
    const isFirstLines = this._linesElementsAll.length === 0;
    this._linesElementsAll.push(...refs);
    // Detect changes
    this._cd.detectChanges();
    // If view (re)rendered, update view visibility
    this._updateViewVisibility();
    // Clear render queue
    this._queuedRenderLines = [];
    this._queuedRenderClear = false;
  }

  /**
   * (Debounced) Updates visibility of rows being currently displayed
   */
  private _updateViewVisibility() {
    // Initialize debouncing
    if (!this._visibilityDebouncedSubject) {
      this._visibilityDebouncedSubject = new Subject<void>();
      this._visibilityDebouncedSubject.pipe(debounceTime(50)).subscribe(() => {
        this._doUpdateViewVisibility();
      });
    }
    // Schedule debounced visibility update
    this._visibilityDebouncedSubject.next();
  }
  /**
   * Updates visibility of rows being currently displayed
   */
  private _doUpdateViewVisibility() {
    // Calculate visible lines
    const hostEl: HTMLElement = this._syntaxareaEl?.nativeElement.parentNode,
      viewHeight = hostEl.clientHeight,
      lineHeight = hostEl.scrollHeight / this._linesElementsAll.length,
      viewFirstLineIndex = Math.floor(hostEl.scrollTop / lineHeight),
      viewNumberOfDisplayedLines = Math.ceil(viewHeight / lineHeight);
    // Hide already visible lines
    for (const lineEl of this._linesElementsVisible) {
      this._setLineVisibility(lineEl, false);
    }
    this._linesElementsVisible = [];
    // Show visible lines
    for (let i = 0, index = viewFirstLineIndex + i; i < viewNumberOfDisplayedLines && this._linesElementsAll.length > index; i++, index++) {
      this._setLineVisibility(this._linesElementsAll[index], true);
      this._linesElementsVisible.push(this._linesElementsAll[index]);
    }
  }

  /**
   * Updates line's visibility
   * @param lineRefs Line element to update
   * @param visible Visibility
   */
  private _setLineVisibility(lineRefs: TLineRefs, visible: boolean) {
    // Hide line-numbers on non-showing rows
    if (lineRefs.numEl) {
      lineRefs.numEl.classList[visible ? 'remove' : 'add']('offview');
    }
    // Hide syntax content on non-showing rows
    lineRefs.syntaxEl.classList[visible ? 'remove' : 'add']('offview');
  }

  /**
   * Triggered on syntax being edited (only when used with private [_contentEditable] property set to true)
   * @param e Input event
   */
  public _onInput(e: Event) {
    // Forward event
    this._syntaxChange.emit(e);
  }

  /**
   * Gets current HTML state of syntax being edited
   */
  public _getEditingSyntaxContainerElement() {
    return this._syntaxareaEl?.nativeElement;
  }
}
