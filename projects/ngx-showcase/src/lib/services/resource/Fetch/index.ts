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
   * Caches already fetched or currently fetching resources
   */
  private _cache: Record<string, Promise<Blob>> = {};

  /**
   * Fetches a resource respecting the base[href]
   * @param path Path tot he resource
   * @returns Fetched resource blob
   */
  public async fetch(path: string): Promise<Blob> {
    // Process path to take base[href] into account
    const processedPath = !path.startsWith('/')
      ? path
      : `${(typeof document !== 'undefined' && document.head.querySelector('base[href]')?.getAttribute('href')) || ''}${path}`;
    // Try returning cached resource
    if (!!this._cache[processedPath]) {
      return await this._cache[processedPath];
    }
    // Fetchm cache and return resource
    else {
      this._cache[processedPath] = lastValueFrom(this._http.get(processedPath, { responseType: 'blob' }));
      return await this._cache[processedPath];
    }
  }
}
