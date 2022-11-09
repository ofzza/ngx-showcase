// Syntax edit component, used to edit code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, OnChanges, AfterViewChecked, SimpleChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SyntaxAreaComponent } from '../SyntaxArea';
import { HighlightService } from '../../../services';

/**
 * Syntax area component, used to display code/syntax
 */
@Component({
  selector: 'ngx-syntaxedit',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxEditComponent implements OnChanges, AfterViewChecked {
  /**
   * Syntax to display
   */
  @Input()
  public syntax: string | null = '';
  /**
   * Triggered on editing syntax changed
   */
  @Output()
  public syntaxChange = new EventEmitter<string>();

  /**
   * Highlighting language to use
   */
  @Input()
  public highlight?: string;

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
   * Syntaxarea component
   */
  @ViewChild('syntaxarea')
  private _syntaxarea?: SyntaxAreaComponent;

  /**
   * Holds editing syntax
   */
  public _editingSyntax = '';

  /**
   * Holds caret position to return to after (re)render
   */
  private _previousCaretPosition = 0;

  constructor(private _highlight: HighlightService) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.syntax) {
      this.ingestSyntax(changes.syntax.currentValue);
    }
  }

  private ingestSyntax(syntax?: string | null) {
    // Handle empty syntax
    if (!syntax) {
      this._editingSyntax = '';
      return;
    }
    // Compose updated (highlighted) syntax
    const highlightedSyntax = this.highlight ? this._highlight.render(syntax, this.highlight) : syntax;
    // Check for changes
    if (true || this._syntaxarea?._getEditingSyntaxContainerElement().innerHTML !== highlightedSyntax) {
      // Store cursor position
      const element = this._syntaxarea?._getEditingSyntaxContainerElement();
      this._previousCaretPosition = _getCaretPosition(element);
      // Set updated syntax
      this._editingSyntax = highlightedSyntax;
    }
  }

  public ngAfterViewChecked() {
    // Preserve cursor position
    if (this._previousCaretPosition > 0) {
      const element = this._syntaxarea?._getEditingSyntaxContainerElement();
      if (document.activeElement === element) {
        _setCaretPosition(element, this._previousCaretPosition);
      }
    }
  }

  /**
   * Triggered on syntax being edited
   * @param e Input event
   */
  public _onSyntaxChange(e: Event) {
    // Emit change event
    this.syntaxChange.emit((e.target as HTMLElement).innerText);
    // (Re)ingest and highlight updated syntax
    if (this.highlight) {
      this.ingestSyntax((e.target as any)?.innerText);
    }
  }
}

/**
 * Gets caret position within the target element
 * @param element Element to look for caret index in
 */
function _getCaretPosition(element: HTMLElement): number {
  // Get caret index
  if (window.getSelection !== undefined) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount !== 0) {
      const range = window.getSelection()?.getRangeAt(0);
      if (range) {
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        return preCaretRange.toString().length;
      }
    }
  }
  // No index found
  return 0;
}

function _setCaretPosition(element: HTMLElement, position: number) {
  if (position >= 0) {
    const selection = window.getSelection(),
      range = createRange(element, { position });

    if (range) {
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }
}

function createRange(element: ChildNode, options: { position: number }, range?: Range): Range {
  if (!range) {
    range = document.createRange();
    range.selectNode(element);
    range.setStart(element, 0);
  }

  if (options.position === 0) {
    range.setEnd(element, options.position);
  } else if (element && options.position > 0) {
    if (element.nodeType === Node.TEXT_NODE && element.textContent) {
      if (element.textContent.length < options.position) {
        options.position -= element.textContent.length;
      } else {
        range.setEnd(element, options.position);
        options.position = 0;
      }
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < element.childNodes.length; i++) {
        range = createRange(element.childNodes[i] as ChildNode, options, range);
        if (options.position === 0) {
          break;
        }
      }
    }
  }

  return range;
}
