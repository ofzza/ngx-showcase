// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, ViewEncapsulation, OnChanges, AfterViewInit, OnDestroy, ViewChild, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class SyntaxAreaComponent implements OnChanges, AfterViewInit, OnDestroy {
  /**
   * Syntax to display
   */
  @Input()
  public syntax?: string;

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
  private _syntaxProcessed: { index?: number; content: string }[] = [];
  /**
   * Processed syntax cols count (counting non-wrapped content as same row cols)
   */
  private _syntaxProcessedColsCount = 0;
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

  /**
   * Calculated offset required to fit largest line-number
   */
  public get _linesNumberOffset(): number {
    return this.numbers ? Math.floor(Math.log10(this._syntaxProcessedLinesCount) + 1) * this._charWidth : 0;
  }

  constructor(private _cd: ChangeDetectorRef, private _sanitizer: DomSanitizer) {}

  public ngOnChanges() {
    // (Re)Process syntax
    if (this._syntaxareaColsCount && this._syntaxareaRowsCount) {
      this._detectDimensions();
      this._processSyntax();
    }
  }

  public ngAfterViewInit() {
    if (this._syntaxareaEl) {
      // Detect syntaxarea dimensions
      this._detectDimensions();
      this._processSyntax();
      this._resizeView();
      // Track syntaxarea for resize events
      // @ts-ignore
      this._resizeObserver = new ResizeObserver(_ => {
        this._detectDimensions();
        this._processSyntax();
        this._resizeView();
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
   * Detect line lengths and count of text-area
   */
  private _detectDimensions() {
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
    this._syntaxareaColsCount = Math.floor(this._syntaxareaViewEl.nativeElement.clientWidth / this._charWidth);
    this._syntaxareaRowsCount = Math.floor(this._syntaxareaViewEl.nativeElement.clientHeight / this._charHeight);
  }

  /**
   * Process syntax to detect line count and wrapped lines
   */
  private _processSyntax() {
    // Check if syntax
    if (!this.syntax) {
      // Set empty processed syntax
      this._syntaxProcessed = [];
      return;
    }

    // Process syntax
    const lines = this.syntax?.split('\n');
    this._syntaxProcessedColsCount = this.wrap ? this._syntaxareaColsCount : 0;
    this._syntaxProcessedRowsCount = 0;
    this._syntaxProcessedLongestLine = this.wrap ? Array.from({ length: this._syntaxareaColsCount }, _ => ' ').join() : '';
    this._syntaxProcessedLinesCount = lines.length;
    this._syntaxProcessed = [];
    lines.forEach((line, i) => {
      // Process not-wrapped row
      if (!this.wrap) {
        // Get columns count
        this._syntaxProcessedColsCount = line.length > this._syntaxProcessedColsCount ? line.length : this._syntaxProcessedColsCount;
        // Get rows count
        this._syntaxProcessedRowsCount += 1;
        // Get longest line
        this._syntaxProcessedLongestLine = line.length > this._syntaxProcessedLongestLine.length ? line : this._syntaxProcessedLongestLine;
        // Return processed line
        this._syntaxProcessed.push({
          index: i + 1,
          content: line,
        });
      }

      // Process wrapped row
      else {
        // Get rows count
        const rowsCount = Math.ceil(line.length / this._syntaxareaColsCount);
        this._syntaxProcessedRowsCount += rowsCount;
        // Return processed line
        this._syntaxProcessed.push(
          // ... content
          {
            index: i + 1,
            content: line,
          },
          // ... additional empty lines to keep array indices predictable
          ...(rowsCount > 1 ? Array.from({ length: rowsCount - 1 }, _ => ({ content: '' })) : []),
        );
      }
    });
  }

  /**
   * Applies view changes due to syntaxarea resizing of properties changes
   */
  private _resizeView() {
    // Check syntaxarea element
    if (!this._syntaxareaViewEl) {
      throw new Error('Syntaxarea syntax view host element not found!');
    }
    // Check syntax expand element
    if (!this._syntaxareaExpansionEl) {
      throw new Error('Syntaxarea expansion element not found!');
    }

    // Update max numbers
    if (this._numbersExpansionEl) {
      this._numbersExpansionEl.nativeElement.innerHTML = this._syntaxProcessedLinesCount.toString();
    }

    // Expand syntaxarea to make scrollbars match content
    this._syntaxareaExpansionEl.nativeElement.innerHTML = `_${this._syntaxProcessedLongestLine}_`;
    const expandedHeight = this._syntaxProcessedRowsCount * this._charHeight;
    this._syntaxareaExpansionEl.nativeElement.style.height = `${expandedHeight}px`;
    if (expandedHeight > 33554400) {
      console.warn(`Syntax editor inner height calculated as ${expandedHeight}, while browser only allows maximum height of 33554400!`);
    }

    // Update view
    this._updateView();
  }

  /**
   * Applies view changes due to syntaxarea resizing of properties changes
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

    // Update view (based on scroll position)
    const lines: string[] = [];
    const lineOffset = this._linesNumberOffset;
    for (let i = 0; i < this._syntaxareaRowsCount; i++) {
      if (this._syntaxProcessed.length > offsetCharsTop + i) {
        const line = this._syntaxProcessed[offsetCharsTop + i];
        if (line?.index) {
          lines.push(`
            <div class="syntax-line">
              ${this.numbers && this.wrap ? `<span class="syntax-line-index" style="left: ${-1 * lineOffset}px">${line.index}</span>` : ''}
              <span class="syntax-line-content">${line.content}</span>
            </div>
          `);
        }
      }
    }
    this._content = this._sanitizer.bypassSecurityTrustHtml(lines.join('\n'));

    // Translate view to account for scrolled offset
    const scrollTop = this._syntaxareaEl.nativeElement.scrollTop;
    this._syntaxareaViewEl.nativeElement.style.transform = `translateY(${scrollTop}px)`;

    // Update line-numbers (based on scroll position)
    this._numbers = [];
    for (let i = 0; i < this._syntaxareaRowsCount; i++) {
      if (this._syntaxProcessed.length > offsetCharsTop + i) {
        const num = this._syntaxProcessed[offsetCharsTop + i]?.index?.toString();
        this._numbers.push(num || '');
      }
    }

    // Trigger change detection
    this._cd.detectChanges();
  }
}
