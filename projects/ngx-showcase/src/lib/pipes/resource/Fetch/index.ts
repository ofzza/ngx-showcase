// Fetch resource pipe, Fetches a remote resource from a URL
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// (Re)export showcase component
export * from './_showcase';

/**
 * Fetch resource pipe, Fetches a remote resource from a URL
 */
@Pipe({ name: 'fetchAsync' })
export class FetchPipe {
  constructor(private _http: HttpClient) {}

  /**
   * Fetches a remote resource from a URL
   * @param url URL of the requested resource
   */
  public transform(url: string, pendingContent?: string): Observable<string> {
    return new Observable<string>(subscriber => {
      // Set initial value if set
      subscriber.next(pendingContent);
      // Fetch resource
      this._http.get(url, { responseType: 'blob' }).subscribe(res => {
        res.text().then(
          data => {
            subscriber.next(data);
            subscriber.complete();
          },
          err => {
            subscriber.error(err);
          },
        );
      });
    });
  }
}
