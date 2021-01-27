// Syntax area component showcase
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';

// Ready large amount of text
const data = {
  syntax: Array.from({ length: 100_000 }, (_, i) => {
    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return (i + 1).toString() + ' -> ' + lorem.substr(0, Math.ceil((0.2 + 0.8 * Math.random()) * lorem.length)) + '|';
  }).join('\n'),
};

/**
 * Syntax area component showcase
 */
@Component({
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class SyntaxAreaComponentShowcase {
  public get data() {
    return data;
  }
}
