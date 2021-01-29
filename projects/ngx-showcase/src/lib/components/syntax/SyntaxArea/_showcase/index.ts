// Syntax area component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

/**
 * Syntax area component showcase
 */
@Component({
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxAreaComponentShowcase {
  private _n = 1;
  private _str?: string;
  public _count = 1;
  private _multiplied?: string;
  public _view = 1;
  public setCount(e: Event) {
    this._count = parseInt((e.target as HTMLInputElement).value, 10) || 0;
  }
  public _multiply(str: null | string, n: number): string {
    if (!str) return '';
    if (this._n === n && this._str === str && this._multiplied) {
      return this._multiplied as string;
    } else {
      return (this._multiplied = Array.from({ length: (this._n = n) + 1 }, _ => '').join((this._str = str))) as string;
    }
  }
}
