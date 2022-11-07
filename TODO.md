# DevOps

- [ ] Implement commit hooked check for versioning of main and library package.json files and all the dependencies within them

# Pipes

- [x] Implement an `String` pipe
- [ ] Async pipes (`Fetch`/`Markdown`/`Highlight`)
  - [ ] Unsubscribe on unload
  - [ ] Make sure `fetchAsync` caches loaded and loading resources

# Sysnax view

- [/] Syntax view component
  - [x] Support streaming (accept Observable) input
  - [x] Render all lines to allow for easier editing and selections
  - [x] Optimize shown lines' visibility (for quicker render): visibility, content-visibility, contain-intrinsic-size
  - [ ] Fix wrapped layout

# Synax editing

- [ ] Syntax edit component
  - [ ] Functionality
  - [ ] Fix line numbers not being editable

# Showcasing

- [x] Showcase service (extract component rendering out from component into a service)
- [/] Showcase component
  - [x] Functionality
  - [ ] Use syntax edit components
  - [ ] Styling

# CLI

- [ ] Create CLI script to initialize a multi-project angular setup with showcase application alrady in place

# Documentation

- [ ] Proper documentation and showcases for everything
- [ ] README links to docs -> embedded snippets from docs compilation step for NPM publishing
