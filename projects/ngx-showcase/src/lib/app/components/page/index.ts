// Application page shell component, Creates a page shell with fully router menu
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input, OnInit } from '@angular/core';
import { Route, FetchService } from '../../../services';

/**
 * Application page shell component, Creates a menu from routes
 */
@Component({
  selector: 'ngx-showcase-app-page',
  templateUrl: './index.html',
  styleUrls: ['../../../styles.scss', './style.scss'],
})
export class AppPageComponent implements OnInit {
  /**
   * Holds page group's pages structure and definitions
   */
  @Input()
  public routes: Route[] = [];

  /**
   * Holds page group's title
   */
  @Input()
  public title = 'Showcase';

  /**
   * Holds data read from package.json if file found
   */
  public _packageJson: any;

  /**
   * Holds data read from LICENCE if file found
   */
  public _license!: string;

  constructor(private _fetch: FetchService) {}

  ngOnInit() {
    // Try fetching package.json resource
    this._tryFetchPackageJsonFile();
    this._tryFetchLicenceFile();
  }

  /**
   * Attempts to read /package.json
   */
  private async _tryFetchPackageJsonFile() {
    this._packageJson = JSON.parse(await (await this._fetch.fetch('/package.json')).text());
  }

  /**
   * Attempts to read /LICENSE
   */
  private async _tryFetchLicenceFile() {
    this._license = await (await this._fetch.fetch('/LICENSE')).text();
  }
}
