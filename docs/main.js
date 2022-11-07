"use strict";
(self["webpackChunkshowcase"] = self["webpackChunkshowcase"] || []).push([["main"],{

/***/ 9470:
/*!***************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/app/components/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 3844);
// Aggregates and (re)exports all showcase app components
// ----------------------------------------------------------------------------



/***/ }),

/***/ 3844:
/*!********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/app/components/menu/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 1755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function AppMenuComponent_h5_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = function () { return ["menu-tree-node-expanded"]; };
const _c1 = function () { return ["menu-tree-node-collapsed"]; };
function AppMenuComponent_cdk_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5)(1, "a", 6)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1._tree.isExpanded(node_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", node_r3.info.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", node_r3.component ? node_r3.path : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-tree-invisible", !ctx_r1._tree.isExpanded(node_r3));
} }
function AppMenuComponent_cdk_nested_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-nested-tree-node", 8)(1, "a", 9)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", node_r4.info.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", node_r4.fullPath.join("/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r4.title, " ");
} }
/**
 * Application menu component, Creates a menu from routes
 */
class AppMenuComponent {
    constructor(_router) {
        this._router = _router;
        /**
         * Holds page group's pages structure and definitions
         */
        this.routes = [];
        /**
         * Holds page group's title
         */
        this.title = '';
        /**
         * Main menu links tree control
         */
        this._tree = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.NestedTreeControl(node => node.childRoutes);
        /**
         * Checks if route has children
         */
        this._treeHasChildren = (_, route) => route.childRoutes !== undefined && !!route.childRoutes.length;
        // On route change
        this._router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                // Flatten all pages
                const routes = flattenRoutes(this.routes);
                // (Un)mark all routes
                routes.forEach(route => (route.info.active = false));
                // Expand and mark active route
                let selected = routes.find(route => `/${route.fullPath.join('/')}` === e.url);
                while (selected?.parentRoute) {
                    selected.info.active = selected.parentRoute.info.active = true;
                    this._tree.expand((selected = selected.parentRoute));
                }
            }
        });
    }
    /**
     * Main menu links tree data source
     */
    get _treeDataSource() {
        return new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.ArrayDataSource(this.routes);
    }
}
AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) { return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppMenuComponent, selectors: [["ngx-showcase-app-menu"]], inputs: { routes: "routes", title: "title" }, decls: 4, vars: 4, consts: [["class", "nav-link disabled", 4, "ngIf"], [3, "dataSource", "treeControl"], ["class", "menu-tree-node menu-tree-node-group", 3, "ngClass", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["class", "menu-tree-node", 4, "cdkTreeNodeDef"], [1, "nav-link", "disabled"], [1, "menu-tree-node", "menu-tree-node-group", 3, "ngClass"], ["cdkTreeNodeToggle", "", 3, "routerLink"], ["cdkTreeNodeOutlet", ""], [1, "menu-tree-node"], [3, "routerLink"]], template: function AppMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppMenuComponent_h5_0_Template, 2, 1, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-tree", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppMenuComponent_cdk_nested_tree_node_2_Template, 6, 9, "cdk-nested-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppMenuComponent_cdk_nested_tree_node_3_Template, 4, 4, "cdk-nested-tree-node", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx._treeDataSource)("treeControl", ctx._tree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx._treeHasChildren);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkNestedTreeNode, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeToggle, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["h5[_ngcontent-%COMP%] {\n  color: white;\n  white-space: nowrap;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 4px 16px;\n  white-space: nowrap;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\na.active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\na[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n\n.menu-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-tree-node[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: white;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: -10px;\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-expanded[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[-]\";\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-collapsed[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[+]\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUFFO0VBRUUsZUFBQTtBQUNKOztBQUNFO0VBQ0UsMEJBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0Usc0JBQUE7QUFDTjs7QUFBTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFFUjs7QUFDSTtFQUNFLGNBQUE7QUFDTjs7QUFDSTtFQUNFLGNBQUE7QUFDTiIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWVudSBjb250ZW50c1xuaDUge1xuICBjb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5hIHtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJixcbiAgJiA+ICoge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLm1lbnUtdHJlZS1pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS10cmVlLW5vZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gICYubWVudS10cmVlLW5vZGUtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAmID4gYSB7XG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgJiA+IHNwYW46OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5tZW51LXRyZWUtbm9kZS1leHBhbmRlZCA+IGEgPiBzcGFuOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1stXSc7XG4gICAgfVxuICAgICYubWVudS10cmVlLW5vZGUtY29sbGFwc2VkID4gYSA+IHNwYW46OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnWytdJztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/**
 * Converts array of routes and their children into a flat array of routes
 * @param routes Routes to flatten
 */
function flattenRoutes(routes) {
    // Initialize flattened routes
    const flatRoutes = [];
    // Flatten routes
    routes.forEach(route => {
        // Register route
        flatRoutes.push(route);
        // Register route's children
        if (route.childRoutes) {
            flatRoutes.push(...flattenRoutes(route.childRoutes));
        }
    });
    // Return flattened routes
    return flatRoutes;
}


/***/ }),

/***/ 8674:
/*!**********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/app/ngx-showcase-app.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent),
/* harmony export */   "ShowcaseAppModule": () => (/* binding */ ShowcaseAppModule),
/* harmony export */   "routes": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_4__.routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _ngx_showcase_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngx-showcase.module */ 2923);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 9470);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ 2595);


// Import main showcase library module as dependency



const modules = [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeModule, _ngx_showcase_module__WEBPACK_IMPORTED_MODULE_0__.ShowcaseModule];
// (Re)export routes

// Import and (re)export components

const components = [_components__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent];
/**
 * Showcasing application module
 */
class ShowcaseAppModule {
}
ShowcaseAppModule.ɵfac = function ShowcaseAppModule_Factory(t) { return new (t || ShowcaseAppModule)(); };
ShowcaseAppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ShowcaseAppModule });
ShowcaseAppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [modules, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeModule, _ngx_showcase_module__WEBPACK_IMPORTED_MODULE_0__.ShowcaseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ShowcaseAppModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeModule, _ngx_showcase_module__WEBPACK_IMPORTED_MODULE_0__.ShowcaseModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeModule, _ngx_showcase_module__WEBPACK_IMPORTED_MODULE_0__.ShowcaseModule, _components__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent] }); })();


/***/ }),

/***/ 2595:
/*!*****************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/app/routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 9415);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes */ 165);
// Register of all showcasing pages' routes
// ----------------------------------------------------------------------------
// Import dependencies

// Import pipes








/**
 * Showcase pages' routes
 */
const routes = [
    // Components and directives
    // new Route('Components and Directives', 'components', undefined, {}, undefined, [
    //   // Syntax processing pipes
    //   new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
    //     // Syntax area component
    //     ShowcaseBasedRouting.createRouteFromArtifact(SyntaxAreaComponent, ShowcaseArtifactTypes.Component, SyntaxAreaComponentShowcase),
    //     // Syntax edit component
    //     ShowcaseBasedRouting.createRouteFromArtifact(SyntaxEditComponent, ShowcaseArtifactTypes.Component, SyntaxEditComponentShowcase),
    //   ]),
    //   // Syntax processing pipes
    //   new Route('Demoing', 'demo', undefined, {}, undefined, [
    //     // Showcase component
    //     ShowcaseBasedRouting.createRouteFromArtifact(ShowcaseComponent, ShowcaseArtifactTypes.Component, ShowcaseComponentShowcase),
    //   ]),
    // ]),
    // Pipes
    new _services__WEBPACK_IMPORTED_MODULE_0__.Route('Pipes', 'pipes', undefined, {}, undefined, [
        // Syntax processing pipes
        new _services__WEBPACK_IMPORTED_MODULE_0__.Route('Syntax processing', 'syntax', undefined, {}, undefined, [
            // Extract inner syntax pipe
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipeShowcase),
            // Fetch resource pipe
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipeShowcase),
            // String manipulation pipe
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipeShowcase),
            // Markdown pipe
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase),
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase),
            // Highlight pipe
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Pipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
        ]),
    ]),
    // Services
    new _services__WEBPACK_IMPORTED_MODULE_0__.Route('Services', 'services', undefined, {}, undefined, [
        // Syntax processing services
        // new Route('Runtime compilation', 'compilation', undefined, {}, undefined, [
        //   // Compile service
        //   ShowcaseBasedRouting.createRouteFromArtifact(CompileService, ShowcaseArtifactTypes.Service, CompileServiceShowcase),
        // ]),
        // Syntax processing services
        new _services__WEBPACK_IMPORTED_MODULE_0__.Route('Resource processing', 'resource', undefined, {}, undefined, [
            // String manipulation service
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_services__WEBPACK_IMPORTED_MODULE_0__.StringService, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Service, _services__WEBPACK_IMPORTED_MODULE_0__.StringServiceShowcase),
        ]),
        // Syntax processing services
        new _services__WEBPACK_IMPORTED_MODULE_0__.Route('Syntax processing', 'syntax', undefined, {}, undefined, [
            // Markdown service
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_services__WEBPACK_IMPORTED_MODULE_0__.MarkdownService, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Service, _services__WEBPACK_IMPORTED_MODULE_0__.MarkdownServiceShowcase),
            // Highlight service
            _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.createRouteFromArtifact(_services__WEBPACK_IMPORTED_MODULE_0__.HighlightService, _services__WEBPACK_IMPORTED_MODULE_0__.ShowcaseArtifactTypes.Service, _services__WEBPACK_IMPORTED_MODULE_0__.HighlightServiceShowcase),
        ]),
    ]),
];


/***/ }),

/***/ 4620:
/*!***********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/demo/Showcase/_showcase/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponentShowcase": () => (/* binding */ ShowcaseComponentShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Syntax area component showcase
 */
class ShowcaseComponentShowcase {}
ShowcaseComponentShowcase.ɵfac = function ShowcaseComponentShowcase_Factory(t) {
  return new (t || ShowcaseComponentShowcase)();
};
ShowcaseComponentShowcase.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShowcaseComponentShowcase,
  selectors: [["ng-component"]],
  decls: 15,
  vars: 25,
  consts: [[3, "innerHTML"], [3, "html", "controller"]],
  template: function ShowcaseComponentShowcase_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "markdownAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-showcase", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "docs/example.md")))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, "docs/example/style.css")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("html", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 19, "docs/example/index.html")))("controller", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, "docs/example/index.js")));
    }
  },
  styles: [".showcase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.showcase[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.showcase[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  color: red;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex-grow: 1;\n  display: block;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%]   .syntax[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%]   .syntax[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  overflow: auto;\n}\n.animation-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 300px;\n  height: 10px;\n  padding-top: 2px;\n}\n.animation-container[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  display: block;\n  width: 10px;\n  height: 10px;\n  border: 1px solid red;\n  border-radius: 50%;\n  animation: is-live ease 2000ms;\n  animation-iteration-count: infinite;\n}\n@keyframes is-live {\n  0% {\n    transform: translateX(0px);\n  }\n  50% {\n    transform: translateX(288px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n  .ngx-syntaxarea {\n  background: #eee;\n}\n  .ngx-syntaxarea-linenums {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDUjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUNBQUE7QUFISjtBQU1FO0VBQ0U7SUFDRSwwQkFBQTtFQUpKO0VBTUU7SUFDRSw0QkFBQTtFQUpKO0VBTUU7SUFDRSwwQkFBQTtFQUpKO0FBQ0Y7QUFTRTtFQUNFLGdCQUFBO0FBTko7QUFRRTtFQUNFLFdBQUE7QUFOSiIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxuICBidXR0b24uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLnN5bnRheC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAuc3ludGF4IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcblxuICAgICAgJiA+ICoge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYW5pbWF0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDJweDtcblxuICAuYW5pbWF0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgIGFuaW1hdGlvbjogaXMtbGl2ZSBlYXNlIDIwMDBtcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgaXMtbGl2ZSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjg4cHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgfVxufVxuXG46Om5nLWRlZXAge1xuICAubmd4LXN5bnRheGFyZWEge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbiAgLm5neC1zeW50YXhhcmVhLWxpbmVudW1zIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAubmd4LXN5bnRheGFyZWEtc3ludGF4IHtcbiAgICAvLyBjb2xvcjogbGltZWdyZWVuO1xuICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 2376:
/*!*************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/demo/Showcase/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* binding */ ShowcaseComponent),
/* harmony export */   "ShowcaseComponentShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_2__.ShowcaseComponentShowcase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 9415);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _syntax_SyntaxEdit_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../syntax/SyntaxEdit/index */ 8516);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_showcase */ 4620);
// Showcase component, used to showcase live code
// ----------------------------------------------------------------------------
// Import dependencies








const _c0 = ["renderHost"];
const _c1 = function (a0) { return { error: a0 }; };
// (Re)export showcase component

/**
 * Syntax area component, used to display code/syntax
 */
class ShowcaseComponent {
    constructor(_compile, _cd) {
        this._compile = _compile;
        this._cd = _cd;
        /**
         * Modules that need to be included to render the component
         */
        this.modules = [];
        /**
         * Debounce interval between detecting syntax changes and (re)rendering
         */
        this.debounce = 1000;
        /**
         * Holds HTML syntax being edited
         */
        this._editingHtmlSyntax = '';
        /**
         * Holds controller syntax being edited
         */
        this._editingControllerSyntax = '';
        /**
         * Holds style syntax being edited
         */
        this._editingStyleSyntax = '';
    }
    /**
     * Handles HTML editing syntax change
     * @param e Event descriptor
     */
    _updateEditingHtmlSyntax(e) {
        // Update from input element event
        if (e instanceof Event) {
            this._editingHtmlSyntax = e.target.value;
        }
        // Update from direct value
        else {
            this._editingHtmlSyntax = e;
        }
        // Render editing syntax
        this._render();
    }
    /**
     * Handles controller editing syntax change
     * @param e Event descriptor
     */
    _updateEditingControllerSyntax(e) {
        // Update from input element event
        if (e instanceof Event) {
            this._editingControllerSyntax = e.target.value;
        }
        // Update from direct value
        else {
            this._editingControllerSyntax = e;
        }
        // Render editing syntax
        this._render();
    }
    /**
     * Handles style editing syntax change
     * @param e Event descriptor
     */
    _updateEditingStyleSyntax(e) {
        // Update from input element event
        if (e instanceof Event) {
            this._editingStyleSyntax = e.target.value;
        }
        // Update from direct value
        else {
            this._editingStyleSyntax = e;
        }
        // Render editing syntax
        this._render();
    }
    /**
     * Resets editing syntax to initial value
     */
    _resetEditingSyntax() {
        // Reset all syntax
        this._editingHtmlSyntax = this.html || '';
        this._editingControllerSyntax = this.controller || '';
        this._editingStyleSyntax = this.style || '';
        // Render editing syntax
        this._render();
    }
    ngOnInit() {
        // Set initial editing syntax
        this._resetEditingSyntax();
    }
    ngAfterViewInit() {
        // Instantiate a bound compiler service
        if (this._exampleHostEl) {
            this._componentCompiler = this._compile.component(this._exampleHostEl);
        }
    }
    ngOnChanges(changes) {
        // Update editing syntax if not previously edited
        if (changes.html && changes.html.previousValue !== this._editingHtmlSyntax) {
            this._updateEditingHtmlSyntax(changes.html.currentValue);
        }
        if (changes.controller && changes.controller.previousValue !== this._editingControllerSyntax) {
            this._updateEditingControllerSyntax(changes.controller.currentValue);
        }
        if (changes.style && changes.style.previousValue !== this._editingStyleSyntax) {
            this._updateEditingStyleSyntax(changes.style.currentValue);
        }
    }
    /**
     * Schedules a debounced rendering of editing syntax into the render preview host element
     */
    _render() {
        // In debounced subject not initialized, initialize subject and trigger render
        if (!this._debouncedRenderSubject) {
            // Initialize debounced subject
            this._debouncedRenderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            this._debouncedRenderSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)).subscribe(() => {
                this._doRender();
            });
            // Trigger the first render right away
            this._doRender();
            // If debounced subject already in use, schedule a debounced render request
        }
        else {
            // Schedule a debounced render
            this._debouncedRenderSubject.next();
        }
    }
    /**
     * Renders editing syntax into the render preview host element
     */
    _doRender() {
        // Reset errors
        this._editingHtmlSyntaxError = undefined;
        this._editingControllerSyntaxError = undefined;
        this._editingStyleSyntaxError = undefined;
        // Render into host component
        this._componentCompiler?.compile(this._editingHtmlSyntax, this._editingControllerSyntax, this._editingStyleSyntax, this.modules).catch(err => {
            if (err instanceof _services__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerHtmlError) {
                this._editingHtmlSyntaxError = err;
            }
            if (err instanceof _services__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerControllerError) {
                this._editingControllerSyntaxError = err;
            }
            if (err instanceof _services__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerStyleError) {
                this._editingStyleSyntaxError = err;
            }
        });
        // Trigger change detection
        this._cd.detectChanges();
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.CompileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
ShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["ngx-showcase"]], viewQuery: function ShowcaseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._exampleHostEl = _t.first);
    } }, inputs: { modules: "modules", debounce: "debounce", html: "html", controller: "controller", style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 21, consts: [["renderHost", ""], [3, "ngClass", "syntax", "highlight", "wrap", "numbers", "syntaxChange"], [3, "click"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ngx-syntaxedit", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("syntaxChange", function ShowcaseComponent_Template_ngx_syntaxedit_syntaxChange_2_listener($event) { return ctx._updateEditingHtmlSyntax($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ngx-syntaxedit", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("syntaxChange", function ShowcaseComponent_Template_ngx_syntaxedit_syntaxChange_3_listener($event) { return ctx._updateEditingControllerSyntax($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ngx-syntaxedit", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("syntaxChange", function ShowcaseComponent_Template_ngx_syntaxedit_syntaxChange_4_listener($event) { return ctx._updateEditingStyleSyntax($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ShowcaseComponent_Template_button_click_5_listener() { return ctx._resetEditingSyntax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, ctx._editingHtmlSyntaxError))("syntax", ctx._editingHtmlSyntax)("highlight", "html")("wrap", false)("numbers", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx._editingControllerSyntaxError))("syntax", ctx._editingControllerSyntax)("highlight", "js")("wrap", false)("numbers", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c1, ctx._editingStyleSyntaxError))("syntax", ctx._editingStyleSyntax)("highlight", "css")("wrap", false)("numbers", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _syntax_SyntaxEdit_index__WEBPACK_IMPORTED_MODULE_1__.SyntaxEditComponent], styles: ["ngx-syntaxedit[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 240px;\n  margin-bottom: 10px;\n}\nngx-syntaxedit.error[_ngcontent-%COMP%] {\n  border-color: red;\n  outline-color: red;\n}\nngx-syntaxedit.error[_ngcontent-%COMP%]:focus {\n  border-color: red;\n  outline-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFTiIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LXN5bnRheGVkaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgJi5lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgb3V0bGluZS1jb2xvcjogcmVkO1xuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICBvdXRsaW5lLWNvbG9yOiByZWQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4730:
/*!****************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/demo/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _Showcase__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent),
/* harmony export */   "ShowcaseComponentShowcase": () => (/* reexport safe */ _Showcase__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase)
/* harmony export */ });
/* harmony import */ var _Showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Showcase */ 2376);
// Aggregates and (re)exports all demoing components
// ----------------------------------------------------------------------------



/***/ }),

/***/ 7464:
/*!***********************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _demo__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponent),
/* harmony export */   "ShowcaseComponentShowcase": () => (/* reexport safe */ _demo__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponentShowcase),
/* harmony export */   "SyntaxAreaComponent": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent),
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase),
/* harmony export */   "SyntaxEditComponent": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent),
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase)
/* harmony export */ });
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syntax */ 2317);
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo */ 4730);
// Aggregates and (re)exports all components
// ----------------------------------------------------------------------------




/***/ }),

/***/ 4533:
/*!***************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/syntax/SyntaxArea/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* binding */ SyntaxAreaComponentShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

function SyntaxAreaComponentShowcase_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "fetchAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1._multiply(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "docs/syntax.js")), ctx_r1._count));
  }
}
function SyntaxAreaComponentShowcase_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7)(2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "highlightAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "fetchAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, ctx_r2._multiply(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "docs/syntax.js")), ctx_r2._count), "js")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = function (a0, a4) {
  return [a0, "js", 10000, 100, a4];
};
function SyntaxAreaComponentShowcase_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-syntaxarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "highlightAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "fetchAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("syntax", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx_r3._multiply(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "docs/syntax.js")), ctx_r3._count), ctx_r3._monitor)))("wrap", false)("numbers", true);
  }
}
function SyntaxAreaComponentShowcase_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-syntaxarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "highlightAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "fetchAsync");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("syntax", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBindV"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx_r4._multiply(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "docs/syntax.js")), ctx_r4._count), ctx_r4._monitor)))("wrap", true)("numbers", true);
  }
}
const _c1 = function () {
  return {};
};
/**
 * Syntax area component showcase
 */
class SyntaxAreaComponentShowcase {
  constructor() {
    this._n = 1;
    this._count = 1;
    this._view = 3;
  }
  setCount(value) {
    this._count = parseInt(value, 10) || 0;
  }
  _multiply(str, n) {
    if (!str) return '';
    if (this._n === n && this._str === str && this._multiplied) {
      return this._multiplied;
    } else {
      return this._multiplied = Array.from({
        length: (this._n = n) + 1
      }, _ => '').join(this._str = str);
    }
  }
  _monitor(res) {
    console.log(`> Streaming:`, res.streaming ? `${res.streaming[0]}/${res.streaming[1]}` : 'Done!');
  }
}
SyntaxAreaComponentShowcase.ɵfac = function SyntaxAreaComponentShowcase_Factory(t) {
  return new (t || SyntaxAreaComponentShowcase)();
};
SyntaxAreaComponentShowcase.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SyntaxAreaComponentShowcase,
  selectors: [["ng-component"]],
  decls: 27,
  vars: 25,
  consts: [[1, "showcase"], [1, "description", 3, "innerHTML"], [3, "click"], ["type", "number", "min", "1", "max", "1000", 3, "step", "value"], ["count", ""], [1, "syntax-container"], [4, "ngIf"], [1, "syntax"], [3, "value"], [3, "innerHTML"], [3, "syntax", "wrap", "numbers"]],
  template: function SyntaxAreaComponentShowcase_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Exposes classes: .ngx-syntaxarea, .ngx-syntaxarea-linenums, .ngx-syntaxarea-syntax ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "markdownAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyntaxAreaComponentShowcase_Template_button_click_9_listener() {
        return ctx._view = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyntaxAreaComponentShowcase_Template_button_click_11_listener() {
        return ctx._view = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Plain div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyntaxAreaComponentShowcase_Template_button_click_13_listener() {
        return ctx._view = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Syntaxarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyntaxAreaComponentShowcase_Template_button_click_15_listener() {
        return ctx._view = 4;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Syntaxarea (wrapped)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ::: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SyntaxAreaComponentShowcase_Template_button_click_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.setCount(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "(Re)Generate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SyntaxAreaComponentShowcase_ng_container_23_Template, 5, 5, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SyntaxAreaComponentShowcase_ng_container_24_Template, 11, 10, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SyntaxAreaComponentShowcase_ng_container_25_Template, 6, 16, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SyntaxAreaComponentShowcase_ng_container_26_Template, 6, 16, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 22, "docs/example.md")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx._view === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx._view === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx._view === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx._view === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 1)("value", ctx._count);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._view === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._view === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._view === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._view === 4);
    }
  },
  styles: [".showcase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.showcase[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.showcase[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  color: red;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex-grow: 1;\n  display: block;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%]   .syntax[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.showcase[_ngcontent-%COMP%]   .syntax-container[_ngcontent-%COMP%]   .syntax[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  overflow: auto;\n}\n  ngx-syntaxarea {\n  position: relative;\n  padding: 4pt;\n  border: 1px solid black;\n  background: #eee;\n}\n  ngx-syntaxarea.loading::before {\n  content: \"LOADING ...\";\n  position: absolute;\n  top: 8px;\n  right: 28px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDUjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBS0k7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSE4iLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93Y2FzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIH1cbiAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIC5zeW50YXgtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgLnN5bnRheCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG5cbiAgICAgICYgPiAqIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgbmd4LXN5bnRheGFyZWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA0cHQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcblxuICAgICYubG9hZGluZzo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdMT0FESU5HIC4uLic7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9302:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/syntax/SyntaxArea/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxAreaComponent": () => (/* binding */ SyntaxAreaComponent),
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showcase */ 4533);
// Syntax area component, used to display code/syntax
// ----------------------------------------------------------------------------
// Import dependencies





const _c0 = ["syntaxarea"];
const _c1 = function (a0) { return [a0]; };
// (Re)export showcase component

/**
 * Syntax area component, used to display code/syntax
 */
class SyntaxAreaComponent {
    constructor(_cd) {
        this._cd = _cd;
        /**
         * Syntax to display
         */
        this.syntax = '';
        /**
         * If displayed syntax should be wrapped
         */
        this.wrap = false;
        /**
         * If line-numbers should be displayed
         */
        this.numbers = false;
        /**
         * Loading status
         */
        this._loading = false;
        /**
         * Private property, used to make syntaxarea component editable
         */
        this._contentEditable = false;
        /**
         * Private property, used to make syntaxarea component editable
         */
        this._syntaxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Queued render request's lines to render
         */
        this._queuedRenderLines = [];
        /**
         * Queued render request's clear status
         */
        this._queuedRenderClear = false;
        /**
         * Holds references to all rendered lines' HTML elements
         */
        this._linesElementsAll = [];
        /**
         * Holds references to visible rendered lines' HTML elements
         */
        this._linesElementsVisible = [];
    }
    ngAfterViewInit() {
        // Validate all elements loaded
        if (!this._syntaxareaEl) {
            throw new Error('Missing syntaxarea syntax hosting element!');
        }
        // Subscribe to scroll events
        this._syntaxareaEl.nativeElement.parentNode.addEventListener('scroll', () => {
            this._updateViewVisibility();
        });
    }
    ngOnChanges(changes) {
        // Handle changes to syntax
        if (changes.syntax) {
            // Ingest syntax passed directly
            if (typeof changes.syntax.currentValue === 'string') {
                // Store syntax
                const lines = changes.syntax.currentValue.split('\n');
                // Render
                this._renderSyntax(lines, true);
            }
            // Ingest syntax streaming over observable instance
            else if (changes.syntax.currentValue instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable) {
                // Set loading status
                this._loading = true;
                this._cd.detectChanges();
                // Reset syntax
                let syntaxBuffer = undefined;
                this._renderSyntax(undefined, true);
                // Stream and process syntax
                this._syntaxSubscription?.unsubscribe();
                this._syntaxSubscription = changes.syntax.currentValue.subscribe((syntaxPacket) => {
                    // Split syntax into lines
                    const lines = syntaxPacket.split('\n');
                    // Prepend syntax buffer
                    if (syntaxBuffer) {
                        if (lines.length) {
                            lines[0] = `${syntaxBuffer}${lines[0]}`;
                        }
                        else {
                            lines.push(syntaxBuffer);
                        }
                        syntaxBuffer = undefined;
                    }
                    // Store last (potentially incomplete) line into syntax buffer
                    syntaxBuffer = lines.length ? lines.splice(lines.length - 1, 1)[0] : undefined;
                    // Render
                    this._renderSyntax(lines, false);
                }, (error) => { }, () => {
                    // Append buffered line into rendered output
                    if (syntaxBuffer) {
                        this._renderSyntax([syntaxBuffer], false);
                        syntaxBuffer = undefined;
                    }
                    // Reset loading status
                    this._loading = false;
                    this._syntaxSubscription?.unsubscribe();
                    this._cd.detectChanges();
                });
            }
        }
    }
    ngOnDestroy() {
        // Unsubscribe from any further streaming syntax
        this._syntaxSubscription?.unsubscribe();
    }
    /**
     * (Debounced) Outputs syntax into view
     */
    _renderSyntax(lines, clear = true) {
        // Initialize debouncing
        if (!this._renderDebouncedSubject) {
            this._renderDebouncedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            this._renderDebouncedSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(10)).subscribe(renderReq => {
                this._doRenderSyntax();
            });
        }
        // Store lines and clear status
        if (clear) {
            this._queuedRenderLines = lines;
            this._queuedRenderClear = true;
        }
        else {
            if (lines) {
                (this._queuedRenderLines = this._queuedRenderLines || []).push(...lines);
            }
            this._queuedRenderClear = this._queuedRenderClear || clear;
        }
        // Schedule debounced visibility update
        this._renderDebouncedSubject.next();
    }
    /**
     * Outputs syntax into view
     */
    _doRenderSyntax() {
        // Validate all elements loaded
        if (!this._syntaxareaEl) {
            throw new Error('Missing syntaxarea syntax hosting element!');
        }
        // If requested, clear previous syntax
        if (this._queuedRenderClear) {
            this._syntaxareaEl.nativeElement.innerHTML = '';
            this._linesElementsAll = [];
            this._linesElementsVisible = [];
        }
        // If no syntax, done
        if (!this._queuedRenderLines) {
            return;
        }
        // Render syntax into host element
        const refs = this._queuedRenderLines.map((line, i) => {
            // Initialize elements
            const lineEl = document.createElement('div'), syntaxEl = document.createElement('span');
            // Set elements' contents and append line
            syntaxEl.className = 'ngx-syntax-line-syntax';
            syntaxEl.innerHTML = line.trimEnd() || '&nbsp;';
            let numEl = undefined;
            if (this.numbers) {
                numEl = document.createElement('span');
                numEl.className = 'ngx-syntax-line-number';
                numEl.innerHTML = (this._linesElementsAll.length + i + 1).toString();
                lineEl.append(numEl, syntaxEl);
            }
            else {
                lineEl.append(syntaxEl);
            }
            const lineRefs = { numEl, syntaxEl, lineEl };
            // Update line visibility
            this._setLineVisibility(lineRefs, false);
            // Return composed line
            return lineRefs;
        });
        this._syntaxareaEl.nativeElement.append(...refs.map(ref => ref.lineEl));
        // Update lines' elements and count
        const isFirstLines = this._linesElementsAll.length === 0;
        this._linesElementsAll.push(...refs);
        // Detect changes
        this._cd.detectChanges();
        // If view (re)rendered, update view visibility
        this._updateViewVisibility();
        // Clear render queue
        this._queuedRenderLines = [];
        this._queuedRenderClear = false;
    }
    /**
     * (Debounced) Updates visibility of rows being currently displayed
     */
    _updateViewVisibility() {
        // Initialize debouncing
        if (!this._visibilityDebouncedSubject) {
            this._visibilityDebouncedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
            this._visibilityDebouncedSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(50)).subscribe(() => {
                this._doUpdateViewVisibility();
            });
        }
        // Schedule debounced visibility update
        this._visibilityDebouncedSubject.next();
    }
    /**
     * Updates visibility of rows being currently displayed
     */
    _doUpdateViewVisibility() {
        // Calculate visible lines
        const hostEl = this._syntaxareaEl?.nativeElement.parentNode, viewHeight = hostEl.clientHeight, lineHeight = hostEl.scrollHeight / this._linesElementsAll.length, viewFirstLineIndex = Math.floor(hostEl.scrollTop / lineHeight), viewNumberOfDisplayedLines = Math.ceil(viewHeight / lineHeight);
        // Hide already visible lines
        for (const lineEl of this._linesElementsVisible) {
            this._setLineVisibility(lineEl, false);
        }
        this._linesElementsVisible = [];
        // Show visible lines
        for (let i = 0, index = viewFirstLineIndex + i; i < viewNumberOfDisplayedLines && this._linesElementsAll.length > index; i++, index++) {
            this._setLineVisibility(this._linesElementsAll[index], true);
            this._linesElementsVisible.push(this._linesElementsAll[index]);
        }
    }
    /**
     * Updates line's visibility
     * @param lineRefs Line element to update
     * @param visible Visibility
     */
    _setLineVisibility(lineRefs, visible) {
        // Hide line-numbers on non-showing rows
        if (lineRefs.numEl) {
            lineRefs.numEl.classList[visible ? 'remove' : 'add']('offview');
        }
        // Hide syntax content on non-showing rows
        lineRefs.syntaxEl.classList[visible ? 'remove' : 'add']('offview');
    }
    /**
     * Triggered on syntax being edited (only when used with private [_contentEditable] property set to true)
     * @param e Input event
     */
    _onInput(e) {
        // Forward event
        this._syntaxChange.emit(e);
    }
    /**
     * Gets current HTML state of syntax being edited
     */
    _getEditingSyntaxContainerElement() {
        return this._syntaxareaEl?.nativeElement;
    }
}
SyntaxAreaComponent.ɵfac = function SyntaxAreaComponent_Factory(t) { return new (t || SyntaxAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
SyntaxAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SyntaxAreaComponent, selectors: [["ngx-syntaxarea"]], viewQuery: function SyntaxAreaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._syntaxareaEl = _t.first);
    } }, hostVars: 2, hostBindings: function SyntaxAreaComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loading", ctx._loading);
    } }, inputs: { syntax: "syntax", wrap: "wrap", numbers: "numbers", _contentEditable: "_contentEditable" }, outputs: { _syntaxChange: "_syntaxChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[1, "content", 3, "ngClass"], [1, "content-line-numbers"], [1, "content-syntax", 3, "contentEditable", "input"], ["syntaxarea", ""]], template: function SyntaxAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SyntaxAreaComponent_Template_div_input_3_listener($event) { return ctx._onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx.wrap ? "wrapped" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._linesElementsAll.length.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("contentEditable", ctx._contentEditable);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n}\n[_nghost-%COMP%]:focus-within {\n  outline-offset: 2px;\n  outline: 1px solid black;\n  outline: 1px auto -webkit-focus-ring-color;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: text;\n          user-select: text;\n}\n[_nghost-%COMP%]    > div.content.wrapped[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  white-space: normal;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]:not(.wrapped) {\n  overflow-x: auto;\n  overflow-y: auto;\n  white-space: pre;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-line-numbers[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  height: 100%;\n  padding-right: 4pt;\n  color: transparent;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]     > div > span {\n  display: inline-block;\n  will-change: scroll-position;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]     > div > span.ngx-syntax-line-number {\n  position: absolute;\n  left: 0;\n  padding-right: 4pt;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]     > div > span.ngx-syntax-line-number.offview {\n  display: none;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]     > div > span.ngx-syntax-line-syntax {\n  display: inline-block;\n  height: 19px;\n}\n[_nghost-%COMP%]    > div.content[_ngcontent-%COMP%]    > .content-syntax[_ngcontent-%COMP%]     > div > span.ngx-syntax-line-syntax.offview {\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMENBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUZOO0FBSU07RUFDRSxhQUFBO0FBRlI7QUFPVTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUFMWjtBQU1ZO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBSmQ7QUFLYztFQUNFLGFBQUE7QUFIaEI7QUFNWTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUpkO0FBS2M7RUFDRSxRQUFBO0FBSGhCIiwiZmlsZSI6InN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gICAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgJiA+IGRpdi5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcblxuICAgICYud3JhcHBlZCB7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gICAgJjpub3QoLndyYXBwZWQpIHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICB9XG5cbiAgICAmID4gLmNvbnRlbnQtbGluZS1udW1iZXJzIHtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRwdDtcblxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgJiA+IC5jb250ZW50LXN5bnRheCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAmID4gc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgICAgICAgICAgJi5uZ3gtc3ludGF4LWxpbmUtbnVtYmVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHQ7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAmLm9mZnZpZXcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubmd4LXN5bnRheC1saW5lLXN5bnRheCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgICAmLm9mZnZpZXcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8782:
/*!***************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/syntax/SyntaxEdit/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* binding */ SyntaxEditComponentShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Syntax edit component showcase
 */
class SyntaxEditComponentShowcase {
  handleChange(syntax) {
    console.log(syntax);
  }
}
SyntaxEditComponentShowcase.ɵfac = function SyntaxEditComponentShowcase_Factory(t) {
  return new (t || SyntaxEditComponentShowcase)();
};
SyntaxEditComponentShowcase.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SyntaxEditComponentShowcase,
  selectors: [["ng-component"]],
  decls: 3,
  vars: 8,
  consts: [[3, "syntax", "highlight", "wrap", "numbers", "syntaxChange"]],
  template: function SyntaxEditComponentShowcase_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-syntaxedit", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("syntaxChange", function SyntaxEditComponentShowcase_Template_ngx_syntaxedit_syntaxChange_0_listener($event) {
        return ctx.handleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("syntax", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "docs/example/index.js")))("highlight", "js")("wrap", false)("numbers", false);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"]
});

/***/ }),

/***/ 8516:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/syntax/SyntaxEdit/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxEditComponent": () => (/* binding */ SyntaxEditComponent),
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_2__.SyntaxEditComponentShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 9415);
/* harmony import */ var _SyntaxArea_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SyntaxArea/index */ 9302);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_showcase */ 8782);
// Syntax edit component, used to edit code/syntax
// ----------------------------------------------------------------------------
// Import dependencies




const _c0 = ["syntaxarea"];
// (Re)export showcase component

/**
 * Syntax area component, used to display code/syntax
 */
class SyntaxEditComponent {
    constructor(_highlight) {
        this._highlight = _highlight;
        /**
         * Syntax to display
         */
        this.syntax = '';
        /**
         * Triggered on editing syntax changed
         */
        this.syntaxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /**
         * If displayed syntax should be wrapped
         */
        this.wrap = false;
        /**
         * If line-numbers should be displayed
         */
        this.numbers = false;
        /**
         * Holds editing syntax
         */
        this._editingSyntax = '';
        /**
         * Holds caret position to return to after (re)render
         */
        this._previousCaretPosition = 0;
    }
    ngOnChanges(changes) {
        if (changes.syntax) {
            this.ingestSyntax(changes.syntax.currentValue);
        }
    }
    ingestSyntax(syntax) {
        // Handle empty syntax
        if (!syntax) {
            this._editingSyntax = '';
            return;
        }
        // Compose updated (highlighted) syntax
        const highlightedSyntax = this.highlight ? this._highlight.render(syntax, this.highlight) : syntax;
        // Check for changes
        if (true) {
            // Store cursor position
            const element = this._syntaxarea?._getEditingSyntaxContainerElement();
            this._previousCaretPosition = _getCaretPosition(element);
            // Set updated syntax
            this._editingSyntax = highlightedSyntax;
        }
    }
    ngAfterViewChecked() {
        // Preserve cursor position
        if (this._previousCaretPosition > 0) {
            const element = this._syntaxarea?._getEditingSyntaxContainerElement();
            if (document.activeElement === element) {
                _setCaretPosition(element, this._previousCaretPosition);
            }
        }
    }
    /**
     * Triggered on syntax being edited
     * @param e Input event
     */
    _onSyntaxChange(e) {
        // Emit change event
        this.syntaxChange.emit(e.target.innerText);
        // (Re)ingest and highlight updated syntax
        if (this.highlight) {
            this.ingestSyntax(e.target?.innerText);
        }
    }
}
SyntaxEditComponent.ɵfac = function SyntaxEditComponent_Factory(t) { return new (t || SyntaxEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.HighlightService)); };
SyntaxEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SyntaxEditComponent, selectors: [["ngx-syntaxedit"]], viewQuery: function SyntaxEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._syntaxarea = _t.first);
    } }, inputs: { syntax: "syntax", highlight: "highlight", wrap: "wrap", numbers: "numbers" }, outputs: { syntaxChange: "syntaxChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [[1, "ngx-syntaxedit-container"], [3, "_contentEditable", "syntax", "wrap", "numbers", "_syntaxChange"], ["syntaxarea", ""]], template: function SyntaxEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "ngx-syntaxarea", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("_syntaxChange", function SyntaxEditComponent_Template_ngx_syntaxarea__syntaxChange_1_listener($event) { return ctx._onSyntaxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("_contentEditable", true)("syntax", ctx._editingSyntax || "")("wrap", ctx.wrap)("numbers", ctx.numbers);
    } }, dependencies: [_SyntaxArea_index__WEBPACK_IMPORTED_MODULE_1__.SyntaxAreaComponent], styles: [".ngx-syntaxedit-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtc3ludGF4ZWRpdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmd4LXN5bnRheGFyZWEge1xuICB9XG59XG4iXX0= */"] });
/**
 * Gets caret position within the target element
 * @param element Element to look for caret index in
 */
function _getCaretPosition(element) {
    // Get caret index
    if (window.getSelection !== undefined) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount !== 0) {
            const range = window.getSelection()?.getRangeAt(0);
            if (range) {
                const preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                return preCaretRange.toString().length;
            }
        }
    }
    // No index found
    return 0;
}
function _setCaretPosition(element, position) {
    if (position >= 0) {
        const selection = window.getSelection(), range = createRange(element, { position });
        if (range) {
            range.collapse(false);
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    }
}
function createRange(element, options, range) {
    if (!range) {
        range = document.createRange();
        range.selectNode(element);
        range.setStart(element, 0);
    }
    if (options.position === 0) {
        range.setEnd(element, options.position);
    }
    else if (element && options.position > 0) {
        if (element.nodeType === Node.TEXT_NODE && element.textContent) {
            if (element.textContent.length < options.position) {
                options.position -= element.textContent.length;
            }
            else {
                range.setEnd(element, options.position);
                options.position = 0;
            }
        }
        else {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < element.childNodes.length; i++) {
                range = createRange(element.childNodes[i], options, range);
                if (options.position === 0) {
                    break;
                }
            }
        }
    }
    return range;
}


/***/ }),

/***/ 2317:
/*!******************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/components/syntax/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxAreaComponent": () => (/* reexport safe */ _SyntaxArea__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent),
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* reexport safe */ _SyntaxArea__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase),
/* harmony export */   "SyntaxEditComponent": () => (/* reexport safe */ _SyntaxEdit__WEBPACK_IMPORTED_MODULE_1__.SyntaxEditComponent),
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* reexport safe */ _SyntaxEdit__WEBPACK_IMPORTED_MODULE_1__.SyntaxEditComponentShowcase)
/* harmony export */ });
/* harmony import */ var _SyntaxArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SyntaxArea */ 9302);
/* harmony import */ var _SyntaxEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyntaxEdit */ 8516);
// Aggregates and (re)exports all syntax processing components
// ----------------------------------------------------------------------------




/***/ }),

/***/ 2923:
/*!**************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/ngx-showcase.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.CompileService),
/* harmony export */   "CompileServiceShowcase": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.CompileServiceShowcase),
/* harmony export */   "ComponentCompiler": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ComponentCompiler),
/* harmony export */   "ComponentCompilerControllerError": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ComponentCompilerControllerError),
/* harmony export */   "ComponentCompilerHtmlError": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ComponentCompilerHtmlError),
/* harmony export */   "ComponentCompilerStyleError": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ComponentCompilerStyleError),
/* harmony export */   "ExtractInnerSyntaxPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe),
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipeShowcase),
/* harmony export */   "FetchPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe),
/* harmony export */   "FetchPipeShowcase": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipeShowcase),
/* harmony export */   "HighlightAsyncPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe),
/* harmony export */   "HighlightPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe),
/* harmony export */   "HighlightPipeShowcase": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
/* harmony export */   "HighlightService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.HighlightService),
/* harmony export */   "HighlightServiceShowcase": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.HighlightServiceShowcase),
/* harmony export */   "MarkdownAsyncPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe),
/* harmony export */   "MarkdownPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe),
/* harmony export */   "MarkdownPipeShowcase": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase),
/* harmony export */   "MarkdownService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.MarkdownService),
/* harmony export */   "MarkdownServiceShowcase": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.MarkdownServiceShowcase),
/* harmony export */   "Route": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.Route),
/* harmony export */   "ShowcaseArtifactTypes": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ShowcaseArtifactTypes),
/* harmony export */   "ShowcaseBasedRouting": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ShowcaseBasedRouting),
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent),
/* harmony export */   "ShowcaseComponentShowcase": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase),
/* harmony export */   "ShowcaseModule": () => (/* binding */ ShowcaseModule),
/* harmony export */   "StringPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipe),
/* harmony export */   "StringPipeShowcase": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipeShowcase),
/* harmony export */   "StringService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.StringService),
/* harmony export */   "StringServiceShowcase": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.StringServiceShowcase),
/* harmony export */   "SyntaxAreaComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent),
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase),
/* harmony export */   "SyntaxEditComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent),
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase),
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.initializeHighlightServiceWebWorker),
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.initializeMarkdownServiceWebWorker)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7464);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes */ 165);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ 9415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
















const modules = [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule];
// Import and (re)export child components

const components = [
    _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase,
    _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase,
    _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent,
    _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase,
];
// Import and (re)export pipes

const pipes = [_pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe];
// Import and (re)export injectables

const injectables = [_services__WEBPACK_IMPORTED_MODULE_2__.CompileService, _services__WEBPACK_IMPORTED_MODULE_2__.StringService, _services__WEBPACK_IMPORTED_MODULE_2__.MarkdownService, _services__WEBPACK_IMPORTED_MODULE_2__.HighlightService];
/**
 * Main ngx-showcase library module
 */
class ShowcaseModule {
}
ShowcaseModule.ɵfac = function ShowcaseModule_Factory(t) { return new (t || ShowcaseModule)(); };
ShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ShowcaseModule });
ShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [...injectables], imports: [modules, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ShowcaseModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase,
        _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase, _pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase,
        _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase, _pipes__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.StringPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponentShowcase, [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components__WEBPACK_IMPORTED_MODULE_0__.SyntaxAreaComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponentShowcase, [_components__WEBPACK_IMPORTED_MODULE_0__.SyntaxEditComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponentShowcase, [_components__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.FetchPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe]);
// Register parent module with showcase service
_services__WEBPACK_IMPORTED_MODULE_2__.CompileService._registerParentModule(ShowcaseModule);


/***/ }),

/***/ 165:
/*!******************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractInnerSyntaxPipe": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe),
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipeShowcase),
/* harmony export */   "FetchPipe": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_0__.FetchPipe),
/* harmony export */   "FetchPipeShowcase": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_0__.FetchPipeShowcase),
/* harmony export */   "HighlightAsyncPipe": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe),
/* harmony export */   "HighlightPipe": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe),
/* harmony export */   "HighlightPipeShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
/* harmony export */   "MarkdownAsyncPipe": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe),
/* harmony export */   "MarkdownPipe": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe),
/* harmony export */   "MarkdownPipeShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase),
/* harmony export */   "StringPipe": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_0__.StringPipe),
/* harmony export */   "StringPipeShowcase": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_0__.StringPipeShowcase)
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ 7650);
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntax */ 5762);
// Aggregates and (re)exports all pipes
// ----------------------------------------------------------------------------




/***/ }),

/***/ 6479:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/resource/Fetch/_showcase/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchPipeShowcase": () => (/* binding */ FetchPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Fetch resource pipe showcase
 */
class FetchPipeShowcase {
}
FetchPipeShowcase.ɵfac = function FetchPipeShowcase_Factory(t) { return new (t || FetchPipeShowcase)(); };
FetchPipeShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FetchPipeShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function FetchPipeShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Fetch resource Pipe\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 9351:
/*!*********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/resource/Fetch/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchPipe": () => (/* binding */ FetchPipe),
/* harmony export */   "FetchPipeShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_0__.FetchPipeShowcase)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showcase */ 6479);
// Fetch resource pipe, Fetches a remote resource from a URL
// ----------------------------------------------------------------------------
// TODO:
// - [] Cache already loaded resources and resources already in process of
//   being loaded
// ----------------------------------------------------------------------------
// Import dependencies



// (Re)export showcase component

/**
 * Fetch resource pipe, Fetches a remote resource from a URL
 */
class FetchPipe {
    constructor(_http) {
        this._http = _http;
    }
    /**
     * Fetches a remote resource from a URL
     * @param url URL of the requested resource
     */
    transform(url) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
            // Fetch resource
            this._http.get(url, { responseType: 'blob' }).subscribe(res => {
                res.text().then(data => {
                    subscriber.next(data);
                    subscriber.complete();
                }, err => {
                    subscriber.error(err);
                });
            });
        });
    }
}
FetchPipe.ɵfac = function FetchPipe_Factory(t) { return new (t || FetchPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, 16)); };
FetchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "fetchAsync", type: FetchPipe, pure: true });


/***/ }),

/***/ 490:
/*!********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/resource/String/_showcase/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringPipeShowcase": () => (/* binding */ StringPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * String manipulation pipe showcase
 */
class StringPipeShowcase {
}
StringPipeShowcase.ɵfac = function StringPipeShowcase_Factory(t) { return new (t || StringPipeShowcase)(); };
StringPipeShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StringPipeShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function StringPipeShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: String manipulation Pipe\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5978:
/*!**********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/resource/String/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringPipe": () => (/* binding */ StringPipe),
/* harmony export */   "StringPipeShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_1__.StringPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 9415);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_showcase */ 490);


// (Re)export showcase component

/**
 * Fetch resource pipe, Fetches a remote resource from a URL
 */
class StringPipe {
    constructor(_string) {
        this._string = _string;
    }
    /**
     * Processes a string via a list of string manipulation commands
     * For example:
     * ```ts
     * 'Hello, my name is # Alice #!' | string:[{ 'extract': ['#', '#'] }, 'trim']
     * - Results in: 'Alice'
     * ```
     * @param str String value to be manipulated
     * @param commands Array of definitions of commands to execute. Each command definition is one of:
     * - A string equaling the name of the string manipulation to perform (also a name of a method on the `StringService` service)
     * - A single property object where:
     *   - The name of the property is the name of the string manipulation to perform (also a name of a method on the `StringService` service)
     *   - The value of the property is an array of arguments to be passed to the manipulation (see arguments for method of same name on the `StringService` service)
     */
    transform(str, commands = []) {
        return processByRunningCommands(this._string, str, commands);
    }
}
StringPipe.ɵfac = function StringPipe_Factory(t) { return new (t || StringPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.StringService, 16)); };
StringPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "string", type: StringPipe, pure: true });
/**
 * Processes a string via a list of string manipulation commands
 * @param _string StringService instance
 * @param str String to run commands on
 * @param commands Array of definitions of commands to execute. Each command definition is one of
 */
function processByRunningCommands(_string, str, commands = []) {
    // Initialize processing result
    let processed = str || '';
    // Execure requested commands
    for (const command of commands) {
        // Process command
        let commandName = '';
        let commandArguments = [];
        // Process string command definition
        if (typeof command === 'string') {
            // Select command
            commandName = command;
        }
        // Process object command definition
        else if (command instanceof Object) {
            // Verify command definition
            if (Object.keys(command).length !== 1) {
                throw new Error(`StringPipe ('' | string) does not support command "${JSON.stringify(command)}" not supported! Each command definitions is only allowed a single property`);
            }
            // Select command
            commandName = Object.keys(command)[0];
            commandArguments = command[commandName] || [];
        }
        // Verify the command is supported
        if (!commandName || !_string[commandName]) {
            throw new Error(`StringPipe ('' | string) does not support command "${command}" not supported!`);
        }
        // Run command
        processed = _string[commandName](processed, ...commandArguments);
    }
    // Return processing result
    return processed;
}


/***/ }),

/***/ 7650:
/*!***************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/resource/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchPipe": () => (/* reexport safe */ _Fetch__WEBPACK_IMPORTED_MODULE_0__.FetchPipe),
/* harmony export */   "FetchPipeShowcase": () => (/* reexport safe */ _Fetch__WEBPACK_IMPORTED_MODULE_0__.FetchPipeShowcase),
/* harmony export */   "StringPipe": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_1__.StringPipe),
/* harmony export */   "StringPipeShowcase": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_1__.StringPipeShowcase)
/* harmony export */ });
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fetch */ 9351);
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./String */ 5978);
// Aggregates and (re)exports all resource processing pipes
// ----------------------------------------------------------------------------




/***/ }),

/***/ 4821:
/*!******************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/ExtractInnerSyntax/_showcase/index.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* binding */ ExtractInnerSyntaxPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * ExtractInnerSyntax pipe showcase
 */
class ExtractInnerSyntaxPipeShowcase {
}
ExtractInnerSyntaxPipeShowcase.ɵfac = function ExtractInnerSyntaxPipeShowcase_Factory(t) { return new (t || ExtractInnerSyntaxPipeShowcase)(); };
ExtractInnerSyntaxPipeShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtractInnerSyntaxPipeShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function ExtractInnerSyntaxPipeShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: ExtractInnerSyntax Pipe\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 232:
/*!********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/ExtractInnerSyntax/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractInnerSyntaxPipe": () => (/* binding */ ExtractInnerSyntaxPipe),
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_0__.ExtractInnerSyntaxPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showcase */ 4821);
// Extract inner syntax pipe
// Extracts unprocessed syntax contained inside an HTML element, ngTemplate, or raw string
// ----------------------------------------------------------------------------
// Import dependencies


// (Re)export showcase component

/**
 * Extract inner syntax pipe
 * Extracts unprocessed syntax contained inside an HTML element, ngTemplate, or raw string
 */
class ExtractInnerSyntaxPipe {
    /**
     * Extracts unprocessed syntax contained inside the target
     * @param target Target to extract unprocessed syntax from
     */
    transform(target) {
        // Extract from <textarea /> element (used because <textarea /> element's aren't preprocessed when used in templates)
        if (target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement) {
            return target.value;
        }
        // Extract from HTML element
        else if (target instanceof HTMLElement) {
            return target.innerHTML;
        }
        // Extract from <ng-template />
        else if (target instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef) {
            // TODO: Implement extraction from <ng-template /> by dynamically creating a component consuming and projecting
            // the template (@angular/compiler), then fetching projected content
            throw new Error('Extracting syntax from TemplateRef not implemented yet!');
        }
        // Consider already extracted
        else {
            return target;
        }
    }
}
ExtractInnerSyntaxPipe.ɵfac = function ExtractInnerSyntaxPipe_Factory(t) { return new (t || ExtractInnerSyntaxPipe)(); };
ExtractInnerSyntaxPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "inner", type: ExtractInnerSyntaxPipe, pure: true });


/***/ }),

/***/ 3950:
/*!*********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/Highlight/_showcase/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownPipeShowcase": () => (/* binding */ MarkdownPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Markdown pipe showcase
 */
class MarkdownPipeShowcase {
}
MarkdownPipeShowcase.ɵfac = function MarkdownPipeShowcase_Factory(t) { return new (t || MarkdownPipeShowcase)(); };
MarkdownPipeShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownPipeShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function MarkdownPipeShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Markdown Pipe\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6043:
/*!***********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/Highlight/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightAsyncPipe": () => (/* binding */ HighlightAsyncPipe),
/* harmony export */   "HighlightPipe": () => (/* binding */ HighlightPipe),
/* harmony export */   "MarkdownPipeShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 9415);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_showcase */ 3950);



// (Re)export showcase component

/**
 * Highlight pipe, Converts syntax of a known language into HTML
 */
class HighlightPipe {
  constructor(_highlight) {
    this._highlight = _highlight;
  }
  /**
   * Converts syntax of a known language into HTML
   * @param syntax Language code syntax to convert
   */
  transform(syntax, lang) {
    return this._highlight.render(syntax, lang);
  }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
  return new (t || HighlightPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.HighlightService, 16));
};
HighlightPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});
/**
 * Highlight pipe, Converts syntax of a known language into HTML asynchronously using a web-worker
 */
class HighlightAsyncPipe {
  constructor(_highlight) {
    this._highlight = _highlight;
  }
  /**
   * Converts syntax of a known language into HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
   * @param lang (Optional) Language to highlight as
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  transform(syntax, lang, streamPacketSize = 0, streamPacketDelay = 1, streamMonitorCallback) {
    return this._highlight
    // Render
    .renderAsync(syntax || '', lang, streamPacketSize, streamPacketDelay, streamMonitorCallback)
    // Resolve value or error
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data instanceof Error ? '' : data));
  }
}
HighlightAsyncPipe.ɵfac = function HighlightAsyncPipe_Factory(t) {
  return new (t || HighlightAsyncPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.HighlightService, 16));
};
HighlightAsyncPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "highlightAsync",
  type: HighlightAsyncPipe,
  pure: true
});

/***/ }),

/***/ 6069:
/*!********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/Markdown/_showcase/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightPipeShowcase": () => (/* binding */ HighlightPipeShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Highlight pipe showcase
 */
class HighlightPipeShowcase {
}
HighlightPipeShowcase.ɵfac = function HighlightPipeShowcase_Factory(t) { return new (t || HighlightPipeShowcase)(); };
HighlightPipeShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightPipeShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function HighlightPipeShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Highlight Pipe\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 2144:
/*!**********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/Markdown/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightPipeShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
/* harmony export */   "MarkdownAsyncPipe": () => (/* binding */ MarkdownAsyncPipe),
/* harmony export */   "MarkdownPipe": () => (/* binding */ MarkdownPipe)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 9415);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_showcase */ 6069);



// (Re)export showcase component

/**
 * Markdown pipe, Converts markdown syntax into HTML
 */
class MarkdownPipe {
  constructor(_markdown) {
    this._markdown = _markdown;
  }
  /**
   * Converts markdown syntax into HTML
   * @param syntax Markdown syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   */
  transform(syntax, options) {
    return this._markdown.render(syntax, options);
  }
}
MarkdownPipe.ɵfac = function MarkdownPipe_Factory(t) {
  return new (t || MarkdownPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.MarkdownService, 16));
};
MarkdownPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "markdown",
  type: MarkdownPipe,
  pure: true
});
/**
 * Markdown pipe, Converts markdown syntax into HTML asynchronously using a web-worker
 */
class MarkdownAsyncPipe {
  constructor(_markdown) {
    this._markdown = _markdown;
  }
  /**
   * Converts syntax of a known language into HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  transform(syntax, options, streamPacketSize = 0, streamPacketDelay = 1, streamMonitorCallback) {
    return this._markdown
    // Render
    .renderAsync(syntax || '', options, streamPacketSize, streamPacketDelay, streamMonitorCallback)
    // Resolve value or error
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => data instanceof Error ? '' : data));
  }
}
MarkdownAsyncPipe.ɵfac = function MarkdownAsyncPipe_Factory(t) {
  return new (t || MarkdownAsyncPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.MarkdownService, 16));
};
MarkdownAsyncPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
  name: "markdownAsync",
  type: MarkdownAsyncPipe,
  pure: true
});

/***/ }),

/***/ 5762:
/*!*************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/pipes/syntax/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractInnerSyntaxPipe": () => (/* reexport safe */ _ExtractInnerSyntax__WEBPACK_IMPORTED_MODULE_0__.ExtractInnerSyntaxPipe),
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* reexport safe */ _ExtractInnerSyntax__WEBPACK_IMPORTED_MODULE_0__.ExtractInnerSyntaxPipeShowcase),
/* harmony export */   "HighlightAsyncPipe": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightAsyncPipe),
/* harmony export */   "HighlightPipe": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightPipe),
/* harmony export */   "HighlightPipeShowcase": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
/* harmony export */   "MarkdownAsyncPipe": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe),
/* harmony export */   "MarkdownPipe": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe),
/* harmony export */   "MarkdownPipeShowcase": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.MarkdownPipeShowcase)
/* harmony export */ });
/* harmony import */ var _ExtractInnerSyntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtractInnerSyntax */ 232);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown */ 2144);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Highlight */ 6043);
// Aggregates and (re)exports all syntax processing pipes
// ----------------------------------------------------------------------------





/***/ }),

/***/ 933:
/*!***************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/compilation/Compile/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileServiceShowcase": () => (/* binding */ CompileServiceShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Compilation service showcase
 */
class CompileServiceShowcase {
}
CompileServiceShowcase.ɵfac = function CompileServiceShowcase_Factory(t) { return new (t || CompileServiceShowcase)(); };
CompileServiceShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompileServiceShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function CompileServiceShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Compile Service\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 9220:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/compilation/Compile/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileService": () => (/* binding */ CompileService),
/* harmony export */   "CompileServiceShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_1__.CompileServiceShowcase),
/* harmony export */   "ComponentCompiler": () => (/* binding */ ComponentCompiler),
/* harmony export */   "ComponentCompilerControllerError": () => (/* binding */ ComponentCompilerControllerError),
/* harmony export */   "ComponentCompilerHtmlError": () => (/* binding */ ComponentCompilerHtmlError),
/* harmony export */   "ComponentCompilerStyleError": () => (/* binding */ ComponentCompilerStyleError)
/* harmony export */ });
/* harmony import */ var _root_projects_ofzza_ngx_showcase_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_showcase */ 933);

// Compilation service, provides mechanisms for compiling angular entities during runtime
// ----------------------------------------------------------------------------
// Import dependencies


// (Re)export showcase component

/**
 * Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
 */
class CompileService {
  constructor(_compiler, _injector, _module) {
    this._compiler = _compiler;
    this._injector = _injector;
    this._module = _module;
  }
  /**
   * Registers a reference to the parent module
   * @param parentModule reference to the parent module
   */
  static _registerParentModule(parentModule) {
    this._parentModuleRef = parentModule;
  }
  /**
   * Creates a component compiler instance bound to a host view container
   * @param host View container to render into
   */
  component(hostEl) {
    return new ComponentCompiler(hostEl, this._compiler, this._injector, this._module);
  }
}
CompileService.ɵfac = function CompileService_Factory(t) {
  return new (t || CompileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Compiler), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModuleRef));
};
CompileService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CompileService,
  factory: CompileService.ɵfac
});
/**
 * Component compiler bound to host view container
 */
class ComponentCompiler {
  constructor(_hostEl, _compiler, _injector, _module) {
    this._hostEl = _hostEl;
    this._compiler = _compiler;
    this._injector = _injector;
    this._module = _module;
  }
  /**
   * Renders editing syntax into the render preview host element
   */
  compile(html, controller, style, modules) {
    var _this = this;
    return (0,_root_projects_ofzza_ngx_showcase_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        // Create a dynamic component
        const dynamicComponentClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
          template: html,
          styles: [style]
        })(class {
          constructor() {
            // Try evaluating the controller
            try {
              new Function(controller).bind(this)();
            } catch (err) {
              reject(new ComponentCompilerControllerError(err));
            }
          }
        });
        // Create dynamic module
        const dynamicModuleClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
          imports: [...(CompileService._parentModuleRef ? [CompileService._parentModuleRef] : []), ...modules],
          declarations: [dynamicComponentClass]
        })(class {});
        // Attempt rendering component
        try {
          // Create and inject dynamically created component
          _this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass).then(moduleWithFactories => {
            if (_this._hostEl) {
              try {
                // Ready component for injection
                const moduleRef = moduleWithFactories.ngModuleFactory.create(_this._injector),
                  factory = moduleWithFactories.componentFactories[0],
                  component = factory.create(moduleRef.injector, [], null, _this._module);
                // Destroy previously dynamically added components
                if (_this._compiledComponent) {
                  _this._compiledComponent.destroy();
                }
                // Inject component
                _this._compiledComponent = component;
                _this._hostEl.clear();
                _this._hostEl.insert(_this._compiledComponent.hostView);
                // Resolve compilation done
                resolve();
              } catch (err) {
                reject(new ComponentCompilerHtmlError(err));
              }
            }
          });
        } catch (err) {
          reject(new ComponentCompilerHtmlError(err));
        }
      });
    })();
  }
}
/**
 * Component HTML compilation error
 */
class ComponentCompilerHtmlError extends Error {}
/**
 * Component Controller compilation error
 */
class ComponentCompilerControllerError extends Error {}
/**
 * Component Style compilation error
 */
class ComponentCompilerStyleError extends Error {}

/***/ }),

/***/ 5572:
/*!*********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/compilation/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileService": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.CompileService),
/* harmony export */   "CompileServiceShowcase": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.CompileServiceShowcase),
/* harmony export */   "ComponentCompiler": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.ComponentCompiler),
/* harmony export */   "ComponentCompilerControllerError": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerControllerError),
/* harmony export */   "ComponentCompilerHtmlError": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerHtmlError),
/* harmony export */   "ComponentCompilerStyleError": () => (/* reexport safe */ _Compile__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerStyleError)
/* harmony export */ });
/* harmony import */ var _Compile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compile */ 9220);
// Aggregates and (re)exports all compilation processing services
// ----------------------------------------------------------------------------



/***/ }),

/***/ 9415:
/*!*********************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileService": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.CompileService),
/* harmony export */   "CompileServiceShowcase": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.CompileServiceShowcase),
/* harmony export */   "ComponentCompiler": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.ComponentCompiler),
/* harmony export */   "ComponentCompilerControllerError": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerControllerError),
/* harmony export */   "ComponentCompilerHtmlError": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerHtmlError),
/* harmony export */   "ComponentCompilerStyleError": () => (/* reexport safe */ _compilation__WEBPACK_IMPORTED_MODULE_0__.ComponentCompilerStyleError),
/* harmony export */   "HighlightService": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.HighlightService),
/* harmony export */   "HighlightServiceShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.HighlightServiceShowcase),
/* harmony export */   "MarkdownService": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.MarkdownService),
/* harmony export */   "MarkdownServiceShowcase": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.MarkdownServiceShowcase),
/* harmony export */   "Route": () => (/* reexport safe */ _routing__WEBPACK_IMPORTED_MODULE_1__.Route),
/* harmony export */   "ShowcaseArtifactTypes": () => (/* reexport safe */ _routing__WEBPACK_IMPORTED_MODULE_1__.ShowcaseArtifactTypes),
/* harmony export */   "ShowcaseBasedRouting": () => (/* reexport safe */ _routing__WEBPACK_IMPORTED_MODULE_1__.ShowcaseBasedRouting),
/* harmony export */   "StringService": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_2__.StringService),
/* harmony export */   "StringServiceShowcase": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_2__.StringServiceShowcase),
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.initializeHighlightServiceWebWorker),
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* reexport safe */ _syntax__WEBPACK_IMPORTED_MODULE_3__.initializeMarkdownServiceWebWorker)
/* harmony export */ });
/* harmony import */ var _compilation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compilation */ 5572);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing */ 762);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource */ 9790);
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./syntax */ 4014);
// Aggregates and (re)exports all services
// ----------------------------------------------------------------------------






/***/ }),

/***/ 3235:
/*!***********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/resource/String/_showcase/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringServiceShowcase": () => (/* binding */ StringServiceShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Highlight service showcase
 */
class StringServiceShowcase {
}
StringServiceShowcase.ɵfac = function StringServiceShowcase_Factory(t) { return new (t || StringServiceShowcase)(); };
StringServiceShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StringServiceShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function StringServiceShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: String Service\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 441:
/*!*************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/resource/String/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringService": () => (/* binding */ StringService),
/* harmony export */   "StringServiceShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_0__.StringServiceShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_showcase */ 3235);

// (Re)export showcase component

/**
 * String manipulation service, provides functionality for string processing
 */
class StringService {
    /**
     * Trims a string by removing whitespace on both start and end. using `String.trim()` JS function.
     * @param str String to trim
     * @returns Trimmer string
     */
    trim(str) {
        return str ? str.trim() : '';
    }
    /**
     *
     * @param str
     * @param from
     * @param to
     * @returns
     */
    extract(str, from, to) {
        // Check if
        if (!str) {
            return '';
        }
        // Initialize result
        let processed = str;
        // Extract required section "from" string
        if (from) {
            // Find "from" section
            const index = processed.indexOf(from);
            // Extract string after the "from" section
            if (index !== -1) {
                processed = processed.substring(index + from.length);
            }
        }
        // Extract required section "to" string
        if (to) {
            // Find "to" section
            const index = processed.indexOf(to);
            // Extract string after the "to" section
            if (index !== -1) {
                processed = processed.substring(0, index);
            }
        }
        // Return result
        return processed;
    }
}
StringService.ɵfac = function StringService_Factory(t) { return new (t || StringService)(); };
StringService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StringService, factory: StringService.ɵfac });


/***/ }),

/***/ 9790:
/*!******************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/resource/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringService": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_0__.StringService),
/* harmony export */   "StringServiceShowcase": () => (/* reexport safe */ _String__WEBPACK_IMPORTED_MODULE_0__.StringServiceShowcase)
/* harmony export */ });
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./String */ 441);
// Aggregates and (re)exports all resource processing services
// ----------------------------------------------------------------------------



/***/ }),

/***/ 8125:
/*!***********************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/routing/Route/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
// Route data-model
// Holds a description of a route, as generated by any of the services in the "routing" namespace
// ----------------------------------------------------------------------------
/**
 * Route definition
 */
class Route {
    /**
     * Instantiates a new Route
     * @param path Route path
     * @param title Route title
     * @param component Route component
     * @param parentRoute (Optional) Parent route
     * @param childRoutes (Optional) Child routes
     */
    constructor(title, relativePath, component, info = {}, parentRoute, childRoutes) {
        this.title = title;
        this.relativePath = relativePath;
        this.component = component;
        this.info = info;
        this.parentRoute = parentRoute;
        this.childRoutes = childRoutes;
        // Set self as parent to child routes
        if (this.childRoutes) {
            this.childRoutes.forEach(route => {
                route.parentRoute = this;
            });
        }
    }
    /**
     * Returns full route path composed from parent route full-path and route's relative path
     */
    get fullPath() {
        return [...(this.parentRoute ? this.parentRoute.fullPath : []), this.relativePath];
    }
}


/***/ }),

/***/ 4269:
/*!**************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/routing/ShowcaseBasedRouting/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseArtifactTypes": () => (/* binding */ ShowcaseArtifactTypes),
/* harmony export */   "ShowcaseBasedRouting": () => (/* binding */ ShowcaseBasedRouting)
/* harmony export */ });
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Route */ 8125);
// ShowcaseBasedRouting service
// Provides mechanisms to quickly generate routing based on components/directives/pipes/services and other artifacts that
// Which need to be represented by generated routes
// ----------------------------------------------------------------------------

/**
 * Types of artifacts which can be represented by routes
 */
var ShowcaseArtifactTypes;
(function (ShowcaseArtifactTypes) {
    ShowcaseArtifactTypes["Module"] = "Module";
    ShowcaseArtifactTypes["Component"] = "Component";
    ShowcaseArtifactTypes["Directive"] = "Directive";
    ShowcaseArtifactTypes["Pipe"] = "Pipe";
    ShowcaseArtifactTypes["Injectable"] = "Injectable";
    ShowcaseArtifactTypes["Service"] = "Service";
    ShowcaseArtifactTypes["Model"] = "Model";
})(ShowcaseArtifactTypes || (ShowcaseArtifactTypes = {}));
/**
 * ShowcaseBasedRouting service
 * Provides mechanisms to quickly generate routing based on components/directives/pipes/services and other artifacts that
 * Which need to be represented by generated routes
 */
class ShowcaseBasedRouting {
    /**
     * Creates a route based of the artifact provided
     * @param artifact Artifact to create a route for
     * @param artifactType Artifact type
     * @param showcaseComponent Component to load when route is hit
     * @param childRoutes Child routes Child routes nested within created route
     */
    static createRouteFromArtifact(artifact, artifactType, showcaseComponent, childRoutes = []) {
        // Extract route title and path from artifact
        let relativePath, title;
        // Extract component path and title
        if (artifactType === ShowcaseArtifactTypes.Component) {
            relativePath = artifact.name.replace(/component/gi, '');
            title = `<${artifact?.ɵcmp?.selectors?.[0]?.[0] || `${relativePath}`} />`;
        }
        // Extract pipe path and title
        else if (artifactType === ShowcaseArtifactTypes.Pipe) {
            relativePath = artifact.name.toLowerCase().replace(/pipe/gi, '');
            title = `| ${artifact?.ɵpipe?.name || artifact.name.replace(/pipe/gi, '')}`;
        }
        // Extract service path and title
        else if (artifactType === ShowcaseArtifactTypes.Service) {
            relativePath = artifact.name.toLowerCase().replace(/service/gi, '');
            title = `${artifact.name.replace(/pipe/gi, '')}`;
        }
        // Artifact type not supported
        else {
            throw new Error(`Artifact type of "${artifactType}" not yet supported!`);
        }
        // Return composed route
        return new _Route__WEBPACK_IMPORTED_MODULE_0__.Route(title, relativePath, showcaseComponent, {}, undefined, childRoutes);
    }
    /**
     * Generates a RouterModule format of routes
     * @param routes Route definitions to generate RouterModule format routes from
     */
    static generateRoutingModuleRoutes(routes) {
        // Initialize router routes
        const routerRoutes = [];
        // Convert routes and their children into router routes
        routes.forEach(route => {
            // Convert route
            if (route.component) {
                routerRoutes.push({ path: route.fullPath.join('/'), component: route.component });
            }
            // Convert route child routes
            if (route.childRoutes) {
                routerRoutes.push(...ShowcaseBasedRouting.generateRoutingModuleRoutes(route.childRoutes));
            }
        });
        // Return router routes
        return routerRoutes;
    }
}


/***/ }),

/***/ 762:
/*!*****************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/routing/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* reexport safe */ _Route__WEBPACK_IMPORTED_MODULE_0__.Route),
/* harmony export */   "ShowcaseArtifactTypes": () => (/* reexport safe */ _ShowcaseBasedRouting__WEBPACK_IMPORTED_MODULE_1__.ShowcaseArtifactTypes),
/* harmony export */   "ShowcaseBasedRouting": () => (/* reexport safe */ _ShowcaseBasedRouting__WEBPACK_IMPORTED_MODULE_1__.ShowcaseBasedRouting)
/* harmony export */ });
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route */ 8125);
/* harmony import */ var _ShowcaseBasedRouting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowcaseBasedRouting */ 4269);
// Aggregates and (re)exports all routing services
// ----------------------------------------------------------------------------




/***/ }),

/***/ 9429:
/*!************************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Highlight/_showcase/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightServiceShowcase": () => (/* binding */ HighlightServiceShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Highlight service showcase
 */
class HighlightServiceShowcase {
}
HighlightServiceShowcase.ɵfac = function HighlightServiceShowcase_Factory(t) { return new (t || HighlightServiceShowcase)(); };
HighlightServiceShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightServiceShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function HighlightServiceShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Compile Service\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 8170:
/*!*********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Highlight/highlight-js.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerLanguage": () => (/* binding */ registerLanguage),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ 7722);
// highlight.js library wrapper
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Registers a highlight.js language syntax
 * @param key Language key
 * @param language Language syntax definition
 */
function registerLanguage(key, language) {
    // Register language under multiple keys
    if (key instanceof Array) {
        key.forEach(k => highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage(k, language));
    }
    // Register language
    else {
        highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage(key, language);
    }
}
/**
 * Converts a language code syntax into highlighted HTML
 * @param syntax Language code syntax to convert
 * @param language Language to convert into
 */
function render(syntax, language) {
    // Convert into explicitly specified language
    if (language) {
        return highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].highlight(language, syntax).value;
    }
    // Auto detect target language
    else {
        return highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAuto(syntax).value;
    }
}


/***/ }),

/***/ 963:
/*!**************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Highlight/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightService": () => (/* binding */ HighlightService),
/* harmony export */   "HighlightServiceShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_2__.HighlightServiceShowcase),
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_1__.initializeHighlightServiceWebWorker)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight-js */ 8170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker */ 4973);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_showcase */ 9429);
// Syntax highlighting service, Highlights syntax of a known language
// ----------------------------------------------------------------------------
// Import dependencies



// (Re)export worker

// (Re)export showcase component

/**
 * Syntax highlighting service, Highlights syntax of a known language
 */
class HighlightService {
  constructor() {
    /**
     * Holds unique ID to be used for next message to web-worker
     */
    this._idNext = 0;
    /**
     * Holds promises awaiting resolution/rejection by their unique message IDs
     */
    this._pendingAsyncQueue = {};
    // If using web-workers, instantiate a web-worker
    if (HighlightService._workerFactory) {
      try {
        this._worker = HighlightService._workerFactory();
        this._worker.addEventListener('message', this.processAsyncResult.bind(this));
      } catch (_) {}
    }
  }
  /**
   * Registers a web-worker factory
   * @param workerFactory Factory callback function used to create a web-worker
   */
  static registerWorker(workerFactory) {
    HighlightService._workerFactory = workerFactory;
  }
  /**
   * Registers a highlight.js language syntax
   * @param key Language key
   * @param language Language syntax definition
   */
  registerLanguage(key, language) {
    // Register language with the local instance of highlight.js
    (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage)(key, language);
  }
  /**
   * Converts a language code syntax into highlighted HTML
   * @param syntax Language code syntax to convert
   * @param language Language to convert into
   */
  render(syntax, language) {
    // If no syntax, return not-rendered
    if (!syntax) {
      return '';
    }
    // Convert into explicitly specified language
    return (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__.render)(syntax, language);
  }
  /**
   * Converts a language code syntax into highlighted HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
   * @param language Language to convert into
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  renderAsync(syntax, language, streamPacketSize = 0, streamPacketDelay = 1, streamMonitorCallback) {
    // If no syntax, return not-rendered
    if (!syntax) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(syntax || '');
    }
    // Convert into a observable to be resolved asynchronously
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => {
      // If using a web-worker, invoke a render using web-worker
      if (this._worker) {
        // Register to pending messages queue
        const id = this._idNext++;
        this._pendingAsyncQueue[id] = {
          subscriber,
          monitor: streamMonitorCallback
        };
        // Post message to web-worker
        const req = {
          id,
          method: 'render',
          args: {
            syntax,
            language
          },
          streamPacketSize,
          streamPacketDelay
        };
        this._worker.postMessage(JSON.stringify(req));
      }
      // If service-worker not available, execute sync render
      else {
        setTimeout(() => {
          try {
            const result = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__.render)(syntax, language);
            subscriber.next(result);
            subscriber.complete();
          } catch (err) {
            subscriber.error(err);
          }
        });
      }
    });
  }
  /**
   * Processes response messages from web-worker
   * @param msg Response message
   */
  processAsyncResult(msg) {
    // Parse received data
    const res = JSON.parse(msg.data);
    // Check if message expected
    if (!this._pendingAsyncQueue[res.id]) {
      throw new Error('Received unexpected message from web-worker!');
    }
    // Handle successful execution
    if (res.success) {
      // If streaming, decorate cache string to signify streaming complete or not complete
      const isStreamComplete = !res.streaming || res.streaming[0] === res.streaming[1];
      // Resolve result
      this._pendingAsyncQueue[res.id].subscriber.next(res.result);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(res);
      // Check if finished streaming
      if (isStreamComplete) {
        this._pendingAsyncQueue[res.id].subscriber.complete();
        delete this._pendingAsyncQueue[res.id];
      }
    }
    // Handle failed execution
    else {
      // Throw error to subscriber
      const err = new Error(res.result);
      this._pendingAsyncQueue[res.id].subscriber.error(err);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(err);
    }
  }
}
HighlightService.ɵfac = function HighlightService_Factory(t) {
  return new (t || HighlightService)();
};
HighlightService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: HighlightService,
  factory: HighlightService.ɵfac
});

/***/ }),

/***/ 4973:
/*!***************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Highlight/worker.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* binding */ initializeHighlightServiceWebWorker)
/* harmony export */ });
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight-js */ 8170);
// Syntax highlighting worker, Highlights syntax of a known language
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Initializes highlight service's web-worker
 */
function initializeHighlightServiceWebWorker() {
    // Listen for messages
    addEventListener('message', msg => {
        // Parse received data
        const data = JSON.parse(msg.data);
        // Invoke "render" function and post result bact to main script
        if (data.method === 'render') {
            try {
                // Render
                const result = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__.render)(data.args.syntax, data.args.language), resultTotalSize = result.length;
                // Stream result
                if (data.streamPacketSize > 0) {
                    // tslint:disable-next-line: no-shadowed-variable
                    (function stream(data, result, streamedLength, resultTotalSize) {
                        // Post message
                        const packet = result.substr(0, data.streamPacketSize), res = {
                            id: data.id,
                            success: true,
                            result: packet,
                            streaming: [streamedLength + packet.length, resultTotalSize],
                        };
                        postMessage(JSON.stringify(res));
                        // Remove sent section of result
                        result = result.substr(packet.length);
                        // Schedule next packet
                        if (result.length) {
                            setTimeout(() => {
                                stream(data, result, streamedLength + packet.length, resultTotalSize);
                            }, data.streamPacketDelay);
                        }
                    })(data, result, 0, resultTotalSize);
                }
                // ...or send in one piece
                else {
                    const res = { id: data.id, success: true, result, streaming: false };
                    postMessage(JSON.stringify(res));
                }
            }
            catch (err) {
                const errMessage = err.message.toString(), res = { id: data.id, success: false, result: errMessage, streaming: false };
                postMessage(JSON.stringify(res));
            }
        }
    });
    // Return a way to register languages
    return _highlight_js__WEBPACK_IMPORTED_MODULE_0__.registerLanguage;
}


/***/ }),

/***/ 6015:
/*!***********************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Markdown/_showcase/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownServiceShowcase": () => (/* binding */ MarkdownServiceShowcase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Markdown service showcase
 */
class MarkdownServiceShowcase {
}
MarkdownServiceShowcase.ɵfac = function MarkdownServiceShowcase_Factory(t) { return new (t || MarkdownServiceShowcase)(); };
MarkdownServiceShowcase.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkdownServiceShowcase, selectors: [["ng-component"]], decls: 1, vars: 0, template: function MarkdownServiceShowcase_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "TODO: Markdown Service\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 2417:
/*!*************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Markdown/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownService": () => (/* binding */ MarkdownService),
/* harmony export */   "MarkdownServiceShowcase": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_3__.MarkdownServiceShowcase),
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_2__.initializeMarkdownServiceWebWorker)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-it */ 7194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Highlight */ 963);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker */ 4710);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_showcase */ 6015);
// Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------
// Import dependencies





// (Re)export showcase component

/**
 * Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
 */
class MarkdownService {
  constructor(_highlight) {
    this._highlight = _highlight;
    /**
     * Holds unique ID to be used for next message to web-worker
     */
    this._idNext = 0;
    /**
     * Holds promises awaiting resolution/rejection by their unique message IDs
     */
    this._pendingAsyncQueue = {};
    // If using web-workers, instantiate a web-worker
    if (MarkdownService._workerFactory) {
      try {
        this._worker = MarkdownService._workerFactory();
        this._worker.addEventListener('message', this.processAsyncResult.bind(this));
      } catch (_) {}
    }
  }
  /**
   * Registers a web-worker factory
   * @param workerFactory Factory callback function used to create a web-worker
   */
  static registerWorker(workerFactory) {
    MarkdownService._workerFactory = workerFactory;
  }
  /**
   * Converts markdown syntax into HTML
   * @param syntax Markdown syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   */
  render(syntax, options) {
    // If no syntax, return not-rendered
    if (!syntax) {
      return syntax || '';
    }
    // Convert into HTML representation
    return (0,_markdown_it__WEBPACK_IMPORTED_MODULE_0__.render)(syntax, options, this._highlight);
  }
  /**
   * Converts markdown syntax into HTML asynchronously using a web-worker
   * @param syntax Markdown syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  renderAsync(syntax, options, streamPacketSize = 0, streamPacketDelay = 1, streamMonitorCallback) {
    // If no syntax, return not-rendered
    if (!syntax) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(syntax || '');
    }
    // Convert into a observable to be resolved asynchronously
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
      // If using a web-worker, invoke a render using web-worker
      if (this._worker) {
        // Register to pending messages queue
        const id = this._idNext++;
        this._pendingAsyncQueue[id] = {
          subscriber,
          monitor: streamMonitorCallback
        };
        // Post message to web-worker
        const req = {
          id,
          method: 'render',
          args: {
            syntax,
            options
          },
          streamPacketSize,
          streamPacketDelay
        };
        this._worker.postMessage(JSON.stringify(req));
      }
      // If service-worker not available, execute sync render
      else {
        setTimeout(() => {
          try {
            const result = (0,_markdown_it__WEBPACK_IMPORTED_MODULE_0__.render)(syntax, options, this._highlight);
            subscriber.next(result);
            subscriber.complete();
          } catch (err) {
            subscriber.error(err);
          }
        });
      }
    });
  }
  /**
   * Processes response messages from web-worker
   * @param msg Response message
   */
  processAsyncResult(msg) {
    // Parse received data
    const res = JSON.parse(msg.data);
    // Check if message expected
    if (!this._pendingAsyncQueue[res.id]) {
      throw new Error('Received unexpected message from web-worker!');
    }
    // Handle successful execution
    if (res.success) {
      // If streaming, decorate cache string to signify streaming complete or not complete
      const isStreamComplete = !res.streaming || res.streaming[0] === res.streaming[1];
      // Resolve result
      this._pendingAsyncQueue[res.id].subscriber.next(res.result);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(res);
      // Check if finished streaming
      if (isStreamComplete) {
        this._pendingAsyncQueue[res.id].subscriber.complete();
        delete this._pendingAsyncQueue[res.id];
      }
    }
    // Handle failed execution
    else {
      // Throw error to subscriber
      const err = new Error(res.result);
      this._pendingAsyncQueue[res.id].subscriber.error(err);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(err);
    }
  }
}
MarkdownService.ɵfac = function MarkdownService_Factory(t) {
  return new (t || MarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_Highlight__WEBPACK_IMPORTED_MODULE_1__.HighlightService));
};
MarkdownService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: MarkdownService,
  factory: MarkdownService.ɵfac
});

/***/ }),

/***/ 7194:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Markdown/markdown-it.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ 8462);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
// markdown-it library wrapper
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Default MarkdownIt options
 */
const defaultOptions = {
    trim: true,
    breaks: true,
    linkify: false,
    quotes: undefined,
};
/**
 * Converts markdown syntax into HTML
 * @param syntax Markdown syntax to convert
 * @param options (Optional) Markdown rendering options:
 *  - trim: If syntax should be trimmed before processing
 *  ... trimming will remove whitespace and the start and end of syntax
 *  ... trimming will remove minimum common indentation whitespace from all lines
 *  - breaks: Convert line-breaks into <br /> elements
 *  - linkify: Convert URLs to links
 *  - quotes: Replacement quotes
 * @param highlight (Optional) Instance of the Highlighting service
 */
function render(syntax, options, highlight) {
    const _markdownit = new markdown_it__WEBPACK_IMPORTED_MODULE_0__();
    // Set options
    const margedOptions = {
        // Default options
        ...defaultOptions,
        // User configured options
        ...options,
        // Non exposed options
        ...(highlight
            ? {
                highlight: highlight.render,
            }
            : {}),
    };
    _markdownit.set(margedOptions);
    // Trim
    if (margedOptions.trim) {
        const lines = syntax.replace(/\t/g, '  ').split('\n');
        const indentationDepth = lines.reduce((min, line) => {
            // Test min indentation against a proper line
            if (line && line.trim()) {
                const indentation = line.length - line.trimStart().length;
                return indentation < min ? indentation : min;
            }
            // ... or keepo current indentation for inproper lines
            else {
                return min;
            }
        }, Number.MAX_SAFE_INTEGER);
        syntax = lines.map(line => line.substr(indentationDepth)).join('\n');
    }
    // Render
    return _markdownit.render(syntax);
}


/***/ }),

/***/ 4710:
/*!**************************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/Markdown/worker.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* binding */ initializeMarkdownServiceWebWorker)
/* harmony export */ });
/* harmony import */ var _markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown-it */ 7194);
// Markdown syntax worker, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Initializes highlight service's web-worker
 */
function initializeMarkdownServiceWebWorker(highlight) {
    // Listen for messages
    addEventListener('message', msg => {
        // Parse received data
        const data = JSON.parse(msg.data);
        // Invoke "render" function and post result bact to main script
        if (data.method === 'render') {
            try {
                // Render
                const result = (0,_markdown_it__WEBPACK_IMPORTED_MODULE_0__.render)(data.args.syntax, data.args.options, highlight), resultTotalSize = result.length;
                // Stream result
                if (data.streamPacketSize > 0) {
                    // tslint:disable-next-line: no-shadowed-variable
                    (function stream(data, result, streamedLength, resultTotalSize) {
                        // Post message
                        const packet = result.substr(0, data.streamPacketSize), res = {
                            id: data.id,
                            success: true,
                            result: packet,
                            streaming: [streamedLength + packet.length, resultTotalSize],
                        };
                        postMessage(JSON.stringify(res));
                        // Remove sent section of result
                        result = result.substr(packet.length);
                        // Schedule next packet
                        if (result.length) {
                            setTimeout(() => {
                                stream(data, result, streamedLength + packet.length, resultTotalSize);
                            }, data.streamPacketDelay);
                        }
                    })(data, result, 0, resultTotalSize);
                }
                // ...or send in one piece
                else {
                    const res = { id: data.id, success: true, result, streaming: false };
                    postMessage(JSON.stringify(res));
                }
            }
            catch (err) {
                const errMessage = err.message.toString(), res = { id: data.id, success: false, result: errMessage, streaming: false };
                postMessage(JSON.stringify(res));
            }
        }
    });
}


/***/ }),

/***/ 4014:
/*!****************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightService": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightService),
/* harmony export */   "HighlightServiceShowcase": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.HighlightServiceShowcase),
/* harmony export */   "MarkdownService": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownService),
/* harmony export */   "MarkdownServiceShowcase": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownServiceShowcase),
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* reexport safe */ _Highlight__WEBPACK_IMPORTED_MODULE_2__.initializeHighlightServiceWebWorker),
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* reexport safe */ _Markdown__WEBPACK_IMPORTED_MODULE_1__.initializeMarkdownServiceWebWorker)
/* harmony export */ });
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workers */ 900);
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Markdown */ 2417);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Highlight */ 963);
// Aggregates and (re)exports all syntax processing services
// ----------------------------------------------------------------------------





/***/ }),

/***/ 900:
/*!******************************************************************!*\
  !*** ./projects/ngx-showcase/src/lib/services/syntax/workers.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Worker communication reusable types
// ----------------------------------------------------------------------------



/***/ }),

/***/ 5685:
/*!*************************************************!*\
  !*** ./projects/ngx-showcase/src/public-api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMenuComponent": () => (/* reexport safe */ _lib_app_ngx_showcase_app_module__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent),
/* harmony export */   "CompileService": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.CompileService),
/* harmony export */   "CompileServiceShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.CompileServiceShowcase),
/* harmony export */   "ComponentCompiler": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ComponentCompiler),
/* harmony export */   "ComponentCompilerControllerError": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ComponentCompilerControllerError),
/* harmony export */   "ComponentCompilerHtmlError": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ComponentCompilerHtmlError),
/* harmony export */   "ComponentCompilerStyleError": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ComponentCompilerStyleError),
/* harmony export */   "ExtractInnerSyntaxPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipe),
/* harmony export */   "ExtractInnerSyntaxPipeShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ExtractInnerSyntaxPipeShowcase),
/* harmony export */   "FetchPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.FetchPipe),
/* harmony export */   "FetchPipeShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.FetchPipeShowcase),
/* harmony export */   "HighlightAsyncPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.HighlightAsyncPipe),
/* harmony export */   "HighlightPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.HighlightPipe),
/* harmony export */   "HighlightPipeShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.HighlightPipeShowcase),
/* harmony export */   "HighlightService": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.HighlightService),
/* harmony export */   "HighlightServiceShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.HighlightServiceShowcase),
/* harmony export */   "MarkdownAsyncPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.MarkdownAsyncPipe),
/* harmony export */   "MarkdownPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipe),
/* harmony export */   "MarkdownPipeShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.MarkdownPipeShowcase),
/* harmony export */   "MarkdownService": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.MarkdownService),
/* harmony export */   "MarkdownServiceShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.MarkdownServiceShowcase),
/* harmony export */   "Route": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.Route),
/* harmony export */   "ShowcaseAppModule": () => (/* reexport safe */ _lib_app_ngx_showcase_app_module__WEBPACK_IMPORTED_MODULE_0__.ShowcaseAppModule),
/* harmony export */   "ShowcaseArtifactTypes": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ShowcaseArtifactTypes),
/* harmony export */   "ShowcaseBasedRouting": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ShowcaseBasedRouting),
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponent),
/* harmony export */   "ShowcaseComponentShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponentShowcase),
/* harmony export */   "ShowcaseModule": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.ShowcaseModule),
/* harmony export */   "StringPipe": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.StringPipe),
/* harmony export */   "StringPipeShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.StringPipeShowcase),
/* harmony export */   "StringService": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.StringService),
/* harmony export */   "StringServiceShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.StringServiceShowcase),
/* harmony export */   "SyntaxAreaComponent": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.SyntaxAreaComponent),
/* harmony export */   "SyntaxAreaComponentShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.SyntaxAreaComponentShowcase),
/* harmony export */   "SyntaxEditComponent": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.SyntaxEditComponent),
/* harmony export */   "SyntaxEditComponentShowcase": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.SyntaxEditComponentShowcase),
/* harmony export */   "initializeHighlightServiceWebWorker": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.initializeHighlightServiceWebWorker),
/* harmony export */   "initializeMarkdownServiceWebWorker": () => (/* reexport safe */ _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__.initializeMarkdownServiceWebWorker),
/* harmony export */   "routes": () => (/* reexport safe */ _lib_app_ngx_showcase_app_module__WEBPACK_IMPORTED_MODULE_0__.routes)
/* harmony export */ });
/* harmony import */ var _lib_app_ngx_showcase_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/app/ngx-showcase-app.module */ 8674);
/* harmony import */ var _lib_ngx_showcase_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-showcase.module */ 2923);
/*
 * Public API Surface of ngx-showcase
 */




/***/ }),

/***/ 2355:
/*!*********************************************************!*\
  !*** ./projects/showcase/src/app/app-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ngx-showcase/src/public-api */ 5685);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 1214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);


// Import pages/routes




// Routes definition
const routes = [
    // Frontpage
    { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_1__.FrontpageComponent },
    // Generated component pages' routes
    ..._ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ShowcaseBasedRouting.generateRoutingModuleRoutes(_ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.routes),
    // Redirect to default
    { path: '**', redirectTo: '/' },
];
/**
 * Routing module
 * Defines application routes and registers them with the app
 */
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ShowcaseAppModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ShowcaseAppModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ShowcaseAppModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ShowcaseAppModule] }); })();


/***/ }),

/***/ 9494:
/*!****************************************************!*\
  !*** ./projects/showcase/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ngx-showcase/src/public-api */ 5685);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 526);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ 9633);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/css */ 9009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_showcase_src_lib_app_components_menu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-showcase/src/lib/app/components/menu/index */ 3844);

// Import highlight.js languages







// Register markdown web-worker
_ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.MarkdownService.registerWorker(() => {
    return new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("projects_showcase_src_workers_markdown_worker_ts"), __webpack_require__.b)), {
        type: undefined,
    });
});
// Register highlighting web-worker
_ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.HighlightService.registerWorker(() => {
    return new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("projects_showcase_src_workers_highlight_worker_ts"), __webpack_require__.b)), {
        type: undefined,
    });
});
/**
 * Showcase application main component
 */
class AppComponent {
    constructor(highlight) {
        /**
         * Showcase registered routes
         */
        this._routes = _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.routes;
        // Register highlighting languages
        highlight.registerLanguage(['xml', 'html'], highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__["default"]);
        highlight.registerLanguage(['js', 'javascript'], highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__["default"]);
        highlight.registerLanguage(['css'], highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_0__.HighlightService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", "fixed-top"], [1, "navbar-brand", "mr-1", 3, "routerLink"], [1, "navbar-dark", "bg-dark"], [3, "routes"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "NGX SHOWCASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "content")(4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ngx-showcase-app-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routes", ctx._routes);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ngx_showcase_src_lib_app_components_menu_index__WEBPACK_IMPORTED_MODULE_4__.AppMenuComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 56px !important;\n  padding: 8px 16px !important;\n}\n[_nghost-%COMP%]   content[_ngcontent-%COMP%] {\n  z-index: 0;\n  display: flex;\n  width: 100%;\n  margin-top: 56px;\n}\n[_nghost-%COMP%]   content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding: 8pt;\n}\n[_nghost-%COMP%]   content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]     a {\n  color: white;\n}\n[_nghost-%COMP%]   content[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding: 8pt;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0FBQU47QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUlJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFGTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaGVhZGVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBjb250ZW50IHtcbiAgICB6LWluZGV4OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcblxuICAgIG5hdiB7XG4gICAgICBwYWRkaW5nOiA4cHQ7XG5cbiAgICAgIDo6bmctZGVlcCBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgIHBhZGRpbmc6IDhwdDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 2328:
/*!*************************************************!*\
  !*** ./projects/showcase/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 8781);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 2355);
/* harmony import */ var _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ngx-showcase/src/public-api */ 5685);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 9494);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ 1214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
// Main ngx-showcase app's application module
// ----------------------------------------------------------------------------
// Import modules



// Import ngx-showcase library's showcase application components

// Import main application component



/**
 * Main ngx-showcase app's application module
 */
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ShowcaseAppModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages__WEBPACK_IMPORTED_MODULE_4__.FrontpageComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ngx_showcase_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ShowcaseAppModule] }); })();


/***/ }),

/***/ 9467:
/*!************************************************************!*\
  !*** ./projects/showcase/src/app/pages/frontpage/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrontpageComponent": () => (/* binding */ FrontpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_showcase_src_lib_pipes_resource_Fetch_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ngx-showcase/src/lib/pipes/resource/Fetch/index */ 9351);
/* harmony import */ var _ngx_showcase_src_lib_pipes_resource_String_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ngx-showcase/src/lib/pipes/resource/String/index */ 5978);
/* harmony import */ var _ngx_showcase_src_lib_pipes_syntax_Markdown_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ngx-showcase/src/lib/pipes/syntax/Markdown/index */ 2144);





const _c0 = function () {
  return ["<!--intro.start-->", "<!--intro.end-->"];
};
const _c1 = function (a0) {
  return {
    extract: a0
  };
};
const _c2 = function (a0) {
  return [a0, "trim"];
};
const _c3 = function () {
  return {};
};
const _c4 = function () {
  return ["<!--gettingstarted.start-->", "<!--gettingstarted.end-->"];
};
/**
 * Frontpage page component
 */
class FrontpageComponent {}
FrontpageComponent.ɵfac = function FrontpageComponent_Factory(t) {
  return new (t || FrontpageComponent)();
};
FrontpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FrontpageComponent,
  selectors: [["ng-component"]],
  decls: 13,
  vars: 34,
  consts: [[3, "innerHTML"]],
  template: function FrontpageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "NGX SHOWCASE LIBRARY");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "markdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "string");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "fetchAsync");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "hr")(8, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "markdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "string");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "fetchAsync");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 10, "README.md")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c0)))), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 20, "README.md")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c4)))), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_showcase_src_lib_pipes_resource_Fetch_index__WEBPACK_IMPORTED_MODULE_0__.FetchPipe, _ngx_showcase_src_lib_pipes_resource_String_index__WEBPACK_IMPORTED_MODULE_1__.StringPipe, _ngx_showcase_src_lib_pipes_syntax_Markdown_index__WEBPACK_IMPORTED_MODULE_2__.MarkdownPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"]
});

/***/ }),

/***/ 1214:
/*!**************************************************!*\
  !*** ./projects/showcase/src/app/pages/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrontpageComponent": () => (/* reexport safe */ _frontpage__WEBPACK_IMPORTED_MODULE_0__.FrontpageComponent)
/* harmony export */ });
/* harmony import */ var _frontpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontpage */ 9467);
// Aggregates and (re)exports all pages
// ----------------------------------------------------------------------------



/***/ }),

/***/ 4555:
/*!***********************************************************!*\
  !*** ./projects/showcase/src/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 7183:
/*!***************************************!*\
  !*** ./projects/showcase/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2328);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4555);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7183)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map