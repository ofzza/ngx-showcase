// Syntax edit component, used to edit code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SyntaxAreaComponent, SyntaxAreaChange } from '../SyntaxArea';

// (Re)export showcase component
export * from './_showcase';

/**
 * Syntax area component, used to display code/syntax
 */
@Component({
  selector: 'ngx-syntaxedit',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxEditComponent implements OnChanges {
  /**
   * Syntax to display
   */
  @Input()
  public syntax?: string | null;
  /**
   * Triggered on editing syntax changed
   */
  @Output()
  public input = new EventEmitter<string>();
  /**
   * Triggered on editing syntax changed
   */
  @Output()
  public syntaxChange = new EventEmitter<string>();

  /**
   * Highlighting language
   */
  @Input()
  public language?: string;

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
   * Holds syntax being edited
   */
  public _editingSyntax = '';

  public ngOnChanges(changes: SimpleChanges) {
    // Update editing syntax
    if (changes.syntax && (!this._editingSyntax || changes.syntax.previousValue === this._editingSyntax)) {
      this._editingSyntax = changes.syntax.currentValue;
    }
  }

  /**
   * Updates syntax being edited
   * @param syntax Updated syntax
   */
  public _updateSyntax(change: SyntaxAreaChange) {
    // // Get cursor position
    // const position = this._syntaxarea?._getCursorPosition();
    // // Update editing syntax
    // const editingSyntaxLines = this._editingSyntax.split('\n');
    // editingSyntaxLines.splice(change.startLine, change.endLine - change.startLine + 1, ...change.content.split('\n'));
    // this._editingSyntax = editingSyntaxLines.join('\n');
    // // Trigger event emitter(s)
    // this.input.emit(this._editingSyntax);
    // this.syntaxChange.emit(this._editingSyntax);
    // // (Re)set cursor position
    // if (position !== undefined) {
    //   setTimeout(() => {
    //     this._syntaxarea?._setCursorPosition(position);
    //   });
    // }
  }
}
