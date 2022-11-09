// String manipulation service, provides functionality for string processing
// ----------------------------------------------------------------------------

// Import dependencies
import { Injectable } from '@angular/core';

/**
 * String manipulation service, provides functionality for string processing
 */
@Injectable()
export class StringService {
  /**
   * Trims a string by removing whitespace on both start and end. using `String.trim()` JS function.
   * @param str String to trim
   * @returns Trimmer string
   */
  public trim(str?: string | null): string {
    return str ? str.trim() : '';
  }

  /**
   *
   * @param str
   * @param from
   * @param to
   * @returns
   */
  public extract(str?: string | null, from?: string, to?: string): string {
    // Check if
    if (!str) {
      return '';
    }
    // Initialize result
    let processed = str;
    // Extract required section "from" string
    if (from) {
      // Find "from" section
      const index = processed.indexOf(from);
      // Extract string after the "from" section
      if (index !== -1) {
        processed = processed.substring(index + from.length);
      }
    }
    // Extract required section "to" string
    if (to) {
      // Find "to" section
      const index = processed.indexOf(to);
      // Extract string after the "to" section
      if (index !== -1) {
        processed = processed.substring(0, index);
      }
    }
    // Return result
    return processed;
  }
}
