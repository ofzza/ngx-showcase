// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import {
  Component,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// (Re)export showcase component
export * from './_showcase';

/**
 * Stores syntax area display content
 */
export interface SyntaxAreaContent {
  startLine: number;
  endLine: number;
}
/**
 * Stores syntax area display content change
 */
export interface SyntaxAreaChange extends SyntaxAreaContent {
  content: string;
}

/**
 * Syntax area component, used to display code/syntax
 */
@Component({
  selector: 'ngx-syntaxarea',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxAreaComponent implements OnChanges, AfterViewInit, OnDestroy {
  /**
   * If content should be editable
   */
  @Input()
  public _editable = false;

  /**
   * Syntax to display
   */
  @Input()
  public syntax?: string | null;

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
   * Event triggering on content edited
   */
  @Output()
  public _change = new EventEmitter<SyntaxAreaChange>();

  /**
   * Syntax line numbers container element
   */
  @ViewChild('numbers')
  private _numbersEl?: ElementRef<HTMLElement>;
  /**
   * Syntax line numbers viewing element
   */
  @ViewChild('numbersView')
  private _numbersViewEl?: ElementRef<HTMLElement>;
  /**
   * Syntax line numbers expansion element (used ensure enough room for all lines' numbers)
   */
  @ViewChild('numbersExpansion')
  private _numbersExpansionEl?: ElementRef<HTMLElement>;
  /**
   * Syntax content container element
   */
  @ViewChild('syntaxarea')
  private _syntaxareaEl?: ElementRef<HTMLElement>;
  /**
   * Syntax content viewing element
   */
  @ViewChild('syntaxareaView')
  private _syntaxareaViewEl?: ElementRef<HTMLElement>;
  /**
   * Syntax content expansion element (used to create overflow and scrollbars)
   */
  @ViewChild('syntaxareaExpansion')
  private _syntaxareaExpansionEl?: ElementRef<HTMLElement>;

  /**
   * Character dimensions detection host element
   */
  @ViewChild('char')
  private _charEl?: ElementRef<HTMLElement>;

  /**
   * Holds numbers to output to view
   */
  public _numbers: string[] = [];
  /**
   * Holds lines to output to view
   */
  public _content?: SafeHtml;
  /**
   * Holds displayed content
   */
  private _displayed?: SyntaxAreaContent;

  /**
   * Resize observer, used to track size changes to the syntaxarea element
   */
  // @ts-ignore
  private _resizeObserver?: ResizeObserver;

  /**
   * Processed syntax
   */
  private _syntaxProcessed: { row: number; index: number; content: string }[] = [];
  /**
   * Processed syntax's number of lines
   */
  private _syntaxProcessedLinesCount = 0;
  /**
   * Processed syntax's longest line
   */
  private _syntaxProcessedLongestLine = '';

  /**
   * Syntaxarea single character width
   */
  private _charWidth = 0;
  /**
   * Syntaxarea single character height
   */
  private _charHeight = 0;
  /**
   * Syntaxarea dimensions, cols count
   */
  private _syntaxareaColsCount = 0;
  /**
   * Syntaxarea dimensions, rows count
   */
  private _syntaxareaRowsCount = 0;

  constructor(private _cd: ChangeDetectorRef, private _sanitizer: DomSanitizer) {}

  public ngOnChanges(changes: SimpleChanges) {
    // (Re)Process syntax
    if (this._syntaxareaColsCount && this._syntaxareaRowsCount) {
      if (this._detectDimensions() || changes.syntax) {
        this._processSyntax(changes.syntax.previousValue);
        this._resizeView();
        this._updateView();
      }
    }
  }

  public ngAfterViewInit() {
    if (this._syntaxareaEl) {
      // Detect syntaxarea dimensions
      if (this._detectDimensions()) {
        this._processSyntax();
        this._resizeView();
      }
      // Track syntaxarea for resize events
      // @ts-ignore
      this._resizeObserver = new ResizeObserver(_ => {
        if (this._detectDimensions()) {
          this._resizeView();
        }
      });
      this._resizeObserver.observe(this._syntaxareaEl.nativeElement);
      // Track syntaxarea scroll events
      this._syntaxareaEl.nativeElement.addEventListener('scroll', _ => {
        this._updateView();
      });
    }
  }

  public ngOnDestroy() {
    this._resizeObserver?.disconnect();
  }

  /**
   * Forces (re)detection of textarea dimensions and displayed syntax formatting
   */
  public refresh() {
    this._detectDimensions();
    this._processSyntax();
    this._resizeView();
  }

  /**
   * Gets editing cursor position
   */
  public _getCursorPosition(): Range {
    const range = document.createRange(),
      caret = window.getSelection()?.getRangeAt(0);
    if (caret) {
      range.setStart(caret.startContainer, caret.startOffset);
      range.setEnd(caret.endContainer, caret.endOffset);
      range.collapse();
    }
    return range;
  }
  /**
   * Sets editing cursor position
   * @param range Range instance describing cursor position
   */
  public _setCursorPosition(range: Range) {
    // Adds a Range to a Selection
    window.getSelection()?.addRange(range);
  }

  /**
   * Detect line lengths and count of output area
   */
  private _detectDimensions(): boolean {
    // Check syntaxarea element
    if (!this._syntaxareaEl) {
      throw new Error('Syntaxarea syntax host element not found!');
    }
    // Check syntaxarea element
    if (!this._syntaxareaViewEl) {
      throw new Error('Syntaxarea syntax view host element not found!');
    }
    // Check char element
    if (!this._charEl) {
      throw new Error('Character dimensions detection host element not found!');
    }

    // Detect character size
    const display = this._charEl.nativeElement.style.display;
    this._charEl.nativeElement.style.display = 'inline-block';
    this._charEl.nativeElement.style.fontFamily = this._syntaxareaEl.nativeElement.style.fontFamily;
    this._charEl.nativeElement.style.fontSize = this._syntaxareaEl.nativeElement.style.fontSize;
    this._charEl.nativeElement.style.lineHeight = this._syntaxareaEl.nativeElement.style.lineHeight;
    this._charEl.nativeElement.innerHTML = 'X';
    this._charWidth = this._charEl.nativeElement.offsetWidth;
    this._charHeight = this._charEl.nativeElement.offsetHeight;
    this._charEl.nativeElement.style.display = display;

    // Calculate syntaxarea line length and lines count
    const colsCount = Math.floor(this._syntaxareaViewEl.nativeElement.clientWidth / this._charWidth),
      rowsCount = Math.floor(this._syntaxareaViewEl.nativeElement.clientHeight / this._charHeight),
      changeDetected = this._syntaxareaColsCount !== colsCount || this._syntaxareaRowsCount !== rowsCount;
    this._syntaxareaColsCount = colsCount;
    this._syntaxareaRowsCount = rowsCount;

    // Return change detection
    return changeDetected;
  }

  /**
   * Parse syntax into displayable, indexed lines
   * @param previousSyntaxValue Previous value of syntax (attempts to reuse previously processed syntax)
   */
  private _processSyntax(previousSyntaxValue?: string) {
    // Check if syntax
    if (!this.syntax) {
      // Set empty processed syntax
      this._syntaxProcessed = [];
      return;
    }

    // Initialize an element to use to strip away HTML syntax when determining line length
    const htmlStrippingEl = document.createElement('div');

    // Initialize syntax for processing
    let lines: string[];
    // If previously processed syntax is start of current syntax, reuse processed info
    if (previousSyntaxValue && previousSyntaxValue.length < this.syntax.length && this.syntax.startsWith(previousSyntaxValue)) {
      // Get previous value except for last line
      const previousSyntaxValueSansLastLineIndex = previousSyntaxValue.lastIndexOf('\n'),
        previousSyntaxValueSansLastLine =
          previousSyntaxValueSansLastLineIndex !== -1 ? `${previousSyntaxValue.substr(0, previousSyntaxValueSansLastLineIndex)}\n` : '';
      // Get additional lines
      lines = this.syntax.substr(previousSyntaxValueSansLastLine.length).split('\n');
      this._syntaxProcessedLinesCount += lines.length;
      // Drop previously processed last line (will be updated)
      if (this._syntaxProcessed.length) {
        this._syntaxProcessed = this._syntaxProcessed.slice(0, this._syntaxProcessed.length - 1);
      }
    }

    // If previously processed syntax is not start of current syntax, reset processed info
    else {
      this._syntaxProcessed = [];
      lines = this.syntax.split('\n');
      this._syntaxProcessedLongestLine = '';
      this._syntaxProcessedLinesCount = lines.length;
    }

    // Process syntax
    lines.forEach(line => {
      // If not wrapped, find longest line
      if (!this.wrap) {
        // Get stripped line
        htmlStrippingEl.innerHTML = line;
        const strippedLine = htmlStrippingEl.innerText;
        // Get longest line
        this._syntaxProcessedLongestLine = strippedLine.length > this._syntaxProcessedLongestLine.length ? strippedLine : this._syntaxProcessedLongestLine;
      }

      // Store processed line
      const previousLine = this._syntaxProcessed.length ? this._syntaxProcessed[this._syntaxProcessed.length - 1] : undefined;
      this._syntaxProcessed.push({
        row: this._syntaxProcessed.length + 1,
        index: previousLine ? previousLine.index + previousLine.content.length : 0,
        content: line,
      });
    });
  }

  /**
   * Resizes elements of the component to refit them to bew dimensions
   */
  private _resizeView() {
    // Check syntaxarea element
    if (!this._syntaxareaEl) {
      throw new Error('Syntaxarea syntax host element not found!');
    }
    // Check syntaxarea view element
    if (!this._syntaxareaViewEl) {
      throw new Error('Syntaxarea syntax view host element not found!');
    }
    // Check syntax expand element
    if (!this._syntaxareaExpansionEl) {
      throw new Error('Syntaxarea expansion element not found!');
    }

    // Update max numbers
    if (this._numbersExpansionEl) {
      this._numbersExpansionEl.nativeElement.innerHTML = `${this._syntaxProcessedLinesCount.toString()}&nbsp;`;
    }

    // Expand syntaxarea to make scrollbars match content
    this._syntaxareaExpansionEl.nativeElement.innerHTML = `_${this._syntaxProcessedLongestLine}_`;
    const expandedHeight = this._syntaxProcessedLinesCount * this._charHeight;
    this._syntaxareaExpansionEl.nativeElement.style.height = `${expandedHeight}px`;
    if (expandedHeight > 33554400) {
      console.warn(`Syntax editor inner height calculated as ${expandedHeight}, while browser only allows maximum height of 33554400!`);
    }
    this._syntaxareaEl.nativeElement.scrollTop =
      expandedHeight < this._syntaxareaEl.nativeElement.scrollHeight
        ? 0
        : expandedHeight < this._syntaxareaEl.nativeElement.scrollTop
        ? expandedHeight
        : this._syntaxareaEl.nativeElement.scrollTop;

    // Update view
    this._updateView();
  }

  /**
   * Updates component view with currently visible syntax
   */
  private _updateView() {
    // Check syntaxarea element
    if (!this._syntaxareaEl) {
      throw new Error('Syntaxarea syntax host element not found!');
    }
    // Check syntax view element
    if (!this._syntaxareaViewEl) {
      throw new Error('Syntaxarea viewing element not found!');
    }

    // Detect scroll offsets
    const offsetCharsTop = Math.floor(this._syntaxareaEl.nativeElement.scrollTop / this._charHeight);

    // Calculate numbers column chars count
    const numbersMaxCharCount = Math.floor(Math.log10(this._syntaxProcessedLinesCount) + 2);

    // Update line-numbers (based on scroll position)
    this._numbers = [];
    for (let i = 0; i < this._syntaxareaRowsCount; i++) {
      if (this._syntaxProcessed.length > offsetCharsTop + i) {
        const num = this._syntaxProcessed[offsetCharsTop + i]?.row?.toString();
        this._numbers.push((num || '').padEnd(numbersMaxCharCount, ' ').replace(/ /g, '&nbsp;'));
      }
    }

    // Update view (based on scroll position)
    const lines: string[] = [];
    const lineOffset = this.numbers && this.wrap ? numbersMaxCharCount * this._charWidth : 0;
    for (let i = 0; i < this._syntaxareaRowsCount; i++) {
      if (this._syntaxProcessed.length > offsetCharsTop + i) {
        // Get line
        const line = this._syntaxProcessed[offsetCharsTop + i];
        // Render line
        lines.push(
          `<div class="syntax-line" style="min-width: 1px; min-height: ${this._charHeight}px">${
            this.numbers && this.wrap
              ? `<span class="syntax-line-index ngx-syntaxarea-linenums" style="left: ${-1 * lineOffset}px">${line.row
                  .toString()
                  .padEnd(numbersMaxCharCount, ' ')
                  .replace(/ /g, '&nbsp;')}</span>`
              : ''
          }<span class="syntax-line-content">${line.content || '&nbsp;'}</span></div>`,
        );
      }
    }
    const renderedContent = lines.join('').replace(/>\n/g, '>');
    this._content = this._sanitizer.bypassSecurityTrustHtml(renderedContent);
    this._syntaxareaViewEl.nativeElement.style.paddingLeft = `${lineOffset}px`;

    // Translate view to account for scrolled offset
    const scrollTop = this._syntaxareaEl.nativeElement.scrollTop;
    this._syntaxareaViewEl.nativeElement.style.transform = `translateY(${scrollTop}px)`;

    // Store currently displayed state
    this._displayed = {
      startLine: offsetCharsTop,
      endLine: offsetCharsTop + this._syntaxareaRowsCount,
    };

    // Trigger change detection
    this._cd.detectChanges();
  }

  /**
   * Handles syntax having been manually edited
   */
  public _syntaxEdited(_: Event) {
    // Trigger change events
    const currentSyntax = this._syntaxareaViewEl?.nativeElement.innerText;
    if (this._displayed && currentSyntax) {
      this._change.emit({ startLine: this._displayed.startLine, endLine: this._displayed.endLine, content: currentSyntax });
    }
  }
}
