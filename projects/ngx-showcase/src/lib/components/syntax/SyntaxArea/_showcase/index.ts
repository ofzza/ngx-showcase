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
  public _view = 3;
  public setCount(value: string) {
    this._count = parseInt(value, 10) || 0;
  }
  public _multiply(str: null | string, n: number): string {
    if (!str) return '';
    if (this._n === n && this._str === str && this._multiplied) {
      return this._multiplied as string;
    } else {
      return (this._multiplied = Array.from({ length: (this._n = n) + 1 }, _ => '').join((this._str = str))) as string;
    }
  }
  public _monitor(res: any) {
    console.log(`> Streaming:`, res.streaming ? `${res.streaming[0]}/${res.streaming[1]}` : 'Done!');
  }
}
