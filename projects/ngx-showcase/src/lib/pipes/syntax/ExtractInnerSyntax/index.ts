// Extract inner syntax pipe
// Extracts unprocessed syntax contained inside an HTML element, ngTemplate, or raw string
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe, TemplateRef } from '@angular/core';

// (Re)export showcase component
export * from './_showcase';

/**
 * Extract inner syntax pipe
 * Extracts unprocessed syntax contained inside an HTML element, ngTemplate, or raw string
 */
@Pipe({ name: 'inner' })
export class ExtractInnerSyntaxPipe {
  /**
   * Extracts unprocessed syntax contained inside the target
   * @param target Target to extract unprocessed syntax from
   */
  public transform(target: HTMLTextAreaElement | HTMLInputElement | HTMLElement | TemplateRef<any> | string): string {
    // Extract from <textarea /> element (used because <textarea /> element's aren't preprocessed when used in templates)
    if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
      return target.value;
    }
    // Extract from HTML element
    else if (target instanceof HTMLElement) {
      return target.innerHTML;
    }
    // Extract from <ng-template />
    else if (target instanceof TemplateRef) {
      // TODO: Implement extraction from <ng-template /> by dynamically creating a component consuming and projecting
      // the template (@angular/compiler), then fetching projected content
      throw new Error('Extracting syntax from TemplateRef not implemented yet!');
    }
    // Consider already extracted
    else {
      return target;
    }
  }
}
