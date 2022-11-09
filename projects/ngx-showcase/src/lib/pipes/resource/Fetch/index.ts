// Fetch resource pipe, Fetches a remote resource from a URL
// ----------------------------------------------------------------------------

// TODO:
// - [] Cache already loaded resources and resources already in process of
//   being loaded
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { FetchService } from '../../../services';

// (Re)export showcase component
export * from './_showcase';

/**
 * Fetch resource pipe, Fetches a remote resource from a URL
 */
@Pipe({ name: 'fetchAsync' })
export class FetchPipe {
  constructor(private _fetch: FetchService) {}

  /**
   * Fetches a remote resource from a URL
   * @param url URL of the requested resource
   */
  public transform(url: string): Observable<string> {
    return new Observable<string>(subscriber => {
      (async () => {
        // Fetch resource
        try {
          subscriber.next(await (await this._fetch.fetch(url)).text());
          subscriber.complete();
        } catch (err) {
          subscriber.error(err);
        }
      })();
    });
  }
}
