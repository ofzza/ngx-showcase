# NgxShowcase

<!--intro.start-->

`ngx-showcase` is an Angular library meant for quickly building a showcase web application for your own libraries. `ngx-showcase` provides tools for:

- Quickly setting up menu and routing of your showcase application
- Loading markdown and code resources and rendering them inside your showcase application, so you can:
  - Both link to your markdown documentation files directly from your project's README.md file.
  - At the same time use your code example files as live and executable tests, resources linked from README.md and other markdown documentation files and render them with full syntax highlighting in your showcase application.
- Demo-ing functionality in an interactive way using the `ngx-showcase` component which will set up an interactive playground for your code.

All documentation is more also available in a more user-friendly form on GitHub pages here: https://ofzza.github.io/ngx-showcase/

<!--intro.end-->

# Getting started

<!--gettingstarted.start-->

To use `ngx-showcase` in your project, simply install it from NPM by running the following in your terminal:

```sh
$ npm install @ofzza/ngx-showcase --save
```

... and import the library into your angular project.

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

TODO: ...

## Services

TODO: ...

### Runtime compilation

<!---compilationservice.start-->

TODO: Runtime compilation

<!---compilationservice.end-->

### Resource services

TODO: ...

#### Fetch resource

<!---fetchservice.start-->

TODO: Fetch resource

<!---fetchservice.end-->

#### String manipulation

<!---stringservice.start-->

TODO: String manipulation

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

TODO: ...

### Resource pipes

TODO: ...

#### Fetch resource

<!---fetchpipe.start-->

TODO: Fetch resource

<!---fetchpipe.end-->

#### String manipulation

<!---stringpipe.start-->

TODO: String manipulation

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
