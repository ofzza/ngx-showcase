// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, OnChanges, SimpleChanges, AfterViewInit, OnDestroy, ViewChild, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// (Re)export showcase component
export * from './_showcase';

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
   * Resize observer, used to track size changes to the syntaxarea element
   */
  // @ts-ignore
  private _resizeObserver?: ResizeObserver;

  /**
   * Processed syntax
   */
  private _syntaxProcessed: { index?: number; text?: string; content: string }[] = [];
  /**
   * Processed syntax rows count (counting wrapped content as multiple rows)
   */
  private _syntaxProcessedRowsCount = 0;
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
      lines = this.syntax.substr(previousSyntaxValue.length).split('\n');
      this._syntaxProcessedLinesCount += lines.length;
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
      this._syntaxProcessed.push({
        index: this._syntaxProcessed.length + 1,
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
        const num = this._syntaxProcessed[offsetCharsTop + i]?.index?.toString();
        this._numbers.push((num || '').padEnd(numbersMaxCharCount, ' ').replace(/ /g, '&nbsp;'));
      }
    }

    // Update view (based on scroll position)
    const lines: string[] = [];
    const lineOffset = this.numbers && this.wrap ? numbersMaxCharCount * this._charWidth : 0;
    for (let i = 0; i < this._syntaxareaRowsCount; i++) {
      if (this._syntaxProcessed.length > offsetCharsTop + i) {
        const line = this._syntaxProcessed[offsetCharsTop + i];
        if (line.index) {
          lines.push(`
            <div class="syntax-line" style="min-width: 1px; min-height: ${this._charHeight}px">
              ${
                this.numbers && this.wrap
                  ? `<span class="syntax-line-index ngx-syntaxarea-linenums" style="left: ${-1 * lineOffset}px">${line.index
                      .toString()
                      .padEnd(numbersMaxCharCount, ' ')
                      .replace(/ /g, '&nbsp;')}</span>`
                  : ''
              }
              <span class="syntax-line-content">${line.content}</span>
            </div>
          `);
        }
      }
    }
    this._content = this._sanitizer.bypassSecurityTrustHtml(lines.join('\n'));
    this._syntaxareaViewEl.nativeElement.style.paddingLeft = `${lineOffset}px`;

    // Translate view to account for scrolled offset
    const scrollTop = this._syntaxareaEl.nativeElement.scrollTop;
    this._syntaxareaViewEl.nativeElement.style.transform = `translateY(${scrollTop}px)`;

    // Trigger change detection
    this._cd.detectChanges();
  }
}
