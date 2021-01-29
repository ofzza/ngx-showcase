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
