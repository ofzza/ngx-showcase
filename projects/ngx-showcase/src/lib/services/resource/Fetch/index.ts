// Fetch service, fetches a resource respecting the base[href]
// ----------------------------------------------------------------------------

// Import dependencies
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Fetch service, fetches a resource respecting the base[href]
 */
@Injectable()
export class FetchService {
  constructor(private _http: HttpClient) {}

  /**
   * Fetches a resource respecting the base[href]
   * @param path Path tot he resource
   * @returns Fetched resource blob
   */
  public async fetch(path: string): Promise<Blob> {
    const processedPath = !path.startsWith('/')
      ? path
      : `${(typeof document !== 'undefined' && document.head.querySelector('base[href]')?.getAttribute('href')) || ''}${path}`;
    return await lastValueFrom(this._http.get(processedPath, { responseType: 'blob' }));
  }
}
