# NgxShowcase

<!--intro.start-->

`ngx-showcase` is an Angular library meant for quickly building a showcase web application for your own libraries. `ngx-showcase` provides tools for:

- Quickly setting up menu and routing of your showcase application
- Loading markdown and code resources and rendering them inside your showcase application, so you can:
  - Both link to your markdown documentation files directly from your project's README.md file.
  - At the same time use your code example files as live and executable tests, resources linked from README.md and other markdown documentation files and render them with full syntax highlighting in your showcase application.
- Demo-ing functionality in an interactive way using the `ngx-showcase` component which will set up an interactive playground for your code.

<!--intro.end-->

All documentation is also available in a more user-friendly form on GitHub pages here: https://ofzza.github.io/ngx-showcase/

# Getting started

<!--gettingstarted.start-->

To use `ngx-showcase` in your project, simply install it from NPM by running the following in your terminal:

```sh
$ npm install @ofzza/ngx-showcase --save
```

... and import either library module into your angular project.

```ts
import { ShowcaseModule, ShowcaseAppModule } from '@ofzza/ngx-showcase';

@NgModule({
  /* ... */
  imports: [ShowcaseModule, ShowcaseAppModule],
  /* ... */
})
export class MyApplicationModule {}
```

The `ShowcaseModule` module exports all the unitily functions, while the `ShowcaseAppModule` module additionally exports components and routing definition utilities for qucky setting up a default looking showcasing application for your own project.

## Using showcasing utilities in your own application

Having imported the `ShowcaseModule` you can now import and use all the utilities available in the library.

## Setting up a default looking showcasing application

If your project is a library you might want to:

- TODO: Describe multi project setup with showcase project and library, and consider building a CLI to create it

- TODO: Explain how to generate routes for pages defined through `ngx-showcase`:

  - `./projects/showcase/src/app/app-routing.module.ts`:
    ```ts
    // Routes definition
    const routes: Routes = [
      // ...
      // Generated component pages' routes
      ...ShowcaseBasedRouting.generateRoutingModuleRoutes([
        /* ... */
      ]),
      // Redirect to default
      { path: '**', redirectTo: '/' },
    ];
    // ...
    RouterModule.forRoot(routes);
    // ...
    ```

- TODO: Explain how to include optional worker files into your project:

  - `./projects/showcase/tsconfig.worker.json`:

    ```json
    /* To learn more about this file see: https://angular.io/config/tsconfig. */
    {
      "extends": "../../tsconfig.json",
      "compilerOptions": {
        "outDir": "../../out-tsc/worker",
        "lib": ["es2019"],
        "types": []
      },
      "include": ["../../node_modules/highlight.js/types/*.d.ts", "src/**/*.worker.ts"]
    }
    ```

  - `./projects/showcase/src/app/app.component.ts`:
    ```ts
    import { MarkdownService, HighlightService } from '@ofzza/ngx-showcase/src/public-api';
    // Register markdown web-worker
    MarkdownService.registerWorker(() => {
      return new Worker(new URL('../workers/markdown.worker', import.meta.url), {
        type: 'module',
      });
    });
    // Register highlighting web-worker
    HighlightService.registerWorker(() => {
      return new Worker(new URL('../workers/highlight.worker', import.meta.url), {
        type: 'module',
      });
    });
    ```

<!--gettingstarted.end-->

# Utilities

## Services

### Runtime compilation

<!---compilationservice.start-->

TODO: Runtime compilation

<!---compilationservice.end-->

### Resource services

#### Fetch resource

<!---fetchservice.start-->

The `FetchService` is used to fetch a URL resource as a Blob, similar to how the native Angular `HttpClient.get` would work, but respecting a `<base href="..." />` configuration for relative paths.

> Also see: `fetchAsync` pipe

---

Usage:

```ts
import { FetchService } from '@ofzza/ngx-showcase';

class {
  constructor(private _fetch: FetchService) {
    // Fetch a resource as a blob (will fetch from url '/README.md',
    // unless there is a <base href="/some-base-path/" /> set on the page in which case it will fetch from '/some-base-path/README.md')
    const blob = await this._fetch.fetch('/README.md');
    // Process blob resource as ...
    const text = await blob.text();
    const json = await blob.json();
  }
}
```

<!---fetchservice.end-->

#### String manipulation

<!---stringservice.start-->

The `StringService` exposes some frequenty used string manipulation methods.

> Also see: `string` pipe

The service exposes the following string manipulation methods:

##### Trim

```ts
.trim(str?: string | null): string
```

Trims the provided text from both sides. Works the same way as Javascript's native String.prototype.trim() function.

##### Extract

```ts
.extract(str?: string | null, from?: string, to?: string): string
```

Extracts a section of provided text between the two specified sections. If only `from` is provided, everything after the `from` value will be returned. If only `to` is provided, everythign up to the `to` value will be returned. If both `from` and `to` are provided the text in between will be returned.

---

Usage:

```ts
import { StringService } from '@ofzza/ngx-showcase';

class {
  constructor(private _string: StringService) {
    let text = 'This is some text with ** weird ** formatting!';
    // Extracts text between two provided text inserts
    text = this._string.extract(text, '**', '**'); // ' weird '
    // Trimms string, works same as JS string.trim()
    text = this._string.trim(text); // 'weird'
  }
}
```

<!---stringservice.end-->

### Syntax services

TODO: ...

#### Syntax rendering

<!---highlightservice.start-->

TODO: Syntax rendering

<!---highlightservice.end-->

#### Markdown rendering

<!---markdownservice.start-->

TODO: Markdown rendering

<!---markdownservice.end-->

## Pipes

### Resource pipes

TODO: ...

#### Fetch resource

<!---fetchpipe.start-->

The `fetchAsync` pipe is used to asynchronously fetch a text URL resource directly into a component template.

> Also see: `FetchService` service

---

Usage:

> Template:
>
> ```html
> <div [innerHTML]="'/README.md' | fetchAsync | async"></div>
> ```
>
> Will render HTML:
>
> ```html
> <div>Content loaded from /README.md file</div>
> ```

<!---fetchpipe.end-->

#### String manipulation

<!---stringpipe.start-->

The `string` pipe is used to perform frequenty used string manipulation on text directly in a component template.

> Also see: `StringService` service

The pipe takes a single argument, an array of operations and operation arguments. The supported operations are the same as exposed methods of `StringService` service.

> Template:
>
> ```html
> <div>{{ 'some text' | string:args }}</div>
> ```
>
> Will render HTML:
>
> ```ts
> typeof args == (keyof StringService | Partial<Record<keyof StringService, any[]>>)[];
> ```

Defined operations will be executed in order they are specified. Requested operation and operation arguments are passed as a single-key object where the key is equal to the name of the operation and the value is equal to an array of arguments (in addition to the value being piped) to be passed to the coresponding `StringService` method.

> Template:
>
> ```html
> <div>{{ 'This is some text with ** weird ** formatting!' | string:[{ 'extract':['**','**']}] }}</div>
> ```
>
> Will render HTML:
>
> ```html
> <div>weird</div>
> ```

If the operation being requested requires no additional arguments, instead of a single-key object you can just pass a single string equaling the name of the coresponding `StringService` method.

> Template:
>
> ```html
> <div>{{ ' trim me ' | string:['trim'] }}</div>
> ```
>
> Will render HTML:
>
> ```html
> <div>trim me</div>
> ```

---

Usage:

> Template:
>
> ```html
> <div>{{ 'This is some text with ** weird ** formatting!' | string:[{ 'extract':['**','**']}, 'trim'] }}</div>
> ```
>
> Will render HTML:
>
> ```html
> <div>weird</div>
> ```

<!---stringpipe.end-->

### Syntax pipes

TODO: ...

#### Syntax extraction

<!---extractpipe.start-->

TODO: Syntax extraction

<!---extractpipe.end-->

#### Syntax rendering

<!---highlightpipe.start-->

TODO: Syntax rendering

<!---highlightpipe.end-->

#### Markdown rendering

<!---markdownpipe.start-->

TODO: Markdown rendering

<!---markdownpipe.end-->

## Components and Directives

### Syntax processing

#### Syntaxarea

<!---syntaxareacomponent.start-->

TODO: &lt;ngx-syntaxarea /&gt;

<!---syntaxareacomponent.end-->

#### Syntaxedit

<!---syntaxeditcomponent.start-->

TODO: &lt;ngx-syntaxedit /&gt;

<!---syntaxeditcomponent.end-->

### Demoing / Showcasing

#### Showcase

<!---showcasecomponent.start-->

TODO: &lt;ngx-showcase /&gt;

<!---showcasecomponent.end-->

# Contrubuting

## Reporting Issues

When reporting issues, please keep to provided templates.

Before reporting issues, please read: [GitHub Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/github.md)

## Contributing Code

For work-flow and general etiquette when contributing, please see:

- [Git Source-Control Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/git.md)
- [GitHub Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/github.md)

Please accompany any work, fix or feature with their own issue, in it's own branch (see [Git Source-Control Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/git.md) for branch naming conventions), and once done, request merge via pull request.

When creating issues and PRs, please keep to provided templates.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Running locally

After cloning the repository, run:

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
