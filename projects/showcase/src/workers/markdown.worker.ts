// Markdown service's web-worker
// ----------------------------------------------------------------------------

// Import dependencies
import { initializeMarkdownServiceWebWorker, HighlightService } from '@ofzza/ngx-showcase';

// Import highlight.js languages
import * as xml from 'highlight.js/lib/languages/xml';
import * as javascript from 'highlight.js/lib/languages/javascript';

// Instantiate highlighting service
const highlight = new HighlightService();
highlight.registerLanguage('xml', xml);
highlight.registerLanguage(['js', 'javascript'], javascript);

// Initialize Markdown service's web-worker
initializeMarkdownServiceWebWorker(highlight);
