// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input } from '@angular/core';

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
export class SyntaxAreaComponent {
  /**
   * Syntax to display
   */
  @Input()
  public syntax?: string;
}
