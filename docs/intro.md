### To make services use web-workers and offload the main thread, the application consuming the library needs to:

- Update such that the application will build web-workers: `ng generate web-worker app` (see: https://angular.io/guide/web-worker#background-processing-using-web-workers)

- Edit it's tsconfig.ts to reference each web-worker implementation individually:

```json
"paths": {
  "@ofzza/ngx-showcase": ["node_modules/@ofzza/ngx-showcase/ngx-showcase", "dist/ngx-showcase"],
  "@ofzza/ngx-showcase/workers/highlight": ["node_modules/@ofzza/ngx-showcase/ngx-showcase/workers/highlight", "dist/ngx-showcase/workers/highlight"],
  "@ofzza/ngx-showcase/workers/markdown": ["node_modules/@ofzza/ngx-showcase/ngx-showcase/workers/markdown", "dist/ngx-showcase/workers/markdown"],
  ...
}
```

- Implement and register each web-worker:

  - workers/highlight.worker.ts

  ```ts
  // Highlight service's web-worker
  // ----------------------------------------------------------------------------

  // Import dependencies
  import { initializeHighlightServiceWebWorker } from '@ofzza/ngx-showcase';

  // Import highlight.js languages
  import * as xml from 'highlight.js/lib/languages/xml';
  import * as javascript from 'highlight.js/lib/languages/javascript';

  // Initialize Highlight service's web-worker
  const registerLanguage = initializeHighlightServiceWebWorker();
  // ... and register languages
  registerLanguage('xml', xml);
  registerLanguage(['js', 'javascript'], javascript);
  ```
