webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_main_main_component__ = __webpack_require__("./src/app/component/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_product_product_component__ = __webpack_require__("./src/app/component/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_main_main_component__["a" /* MainComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_3__component_product_product_component__["a" /* ProductComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\n    background-color: rgb(251, 251, 251);\n    height: 100vh;\n    padding: 30px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <toolbar></toolbar>\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_main_main_component__ = __webpack_require__("./src/app/component/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_toolbar_toolbar_component__ = __webpack_require__("./src/app/component/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_toolbar_searchbar_component__ = __webpack_require__("./src/app/component/toolbar/searchbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_toolbar_category_select_component__ = __webpack_require__("./src/app/component/toolbar/category-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_card_card_component__ = __webpack_require__("./src/app/component/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_sidebar_sidebar_component__ = __webpack_require__("./src/app/component/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_product_product_component__ = __webpack_require__("./src/app/component/product/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_toolbar_searchbar_component__["a" /* SearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_toolbar_category_select_component__["a" /* CategorySelectComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_product_product_component__["a" /* ProductComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                //Material
                __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12\">\n    <mat-card [class.mat-elevation-z6]=\"isHover\" (mouseenter)=\"hover()\" (mouseleave)=\"hover()\">\n        <img mat-card-image src=\"https://www.jakartanotebook.com/images/products/103/63/29403/3/279/saklar-lampu-86-type-1-switch-yt18-white-1.jpg\">\n        <mat-card-title>Saklar Lampu</mat-card-title>\n        <mat-card-content>\n            <del>Rp. 85.000</del>\n            <p>Rp. 69.000</p>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/component/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.isHover = false;
    }
    CardComponent.prototype.hover = function () {
        this.isHover = !this.isHover;
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card',
            template: __webpack_require__("./src/app/component/card/card.component.html"),
            styles: [__webpack_require__("./src/app/component/card/card.component.css")]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/component/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar-width{\n    width: 400px;\n}"

/***/ }),

/***/ "./src/app/component/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"flex\">\n    <sidebar class=\"sidebar-width margin-sm-right\"></sidebar>\n    <card routerLink='/product' class=\"full-width\"></card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/component/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main',
            template: __webpack_require__("./src/app/component/main/main.component.html"),
            styles: [__webpack_require__("./src/app/component/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/component/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>{{title}}</h3>\n    <div class=\"margin-lg-top flex\">\n        <div>\n            <img width=\"300\" src=\"https://www.jakartanotebook.com/images/products/103/63/29403/3/279/saklar-lampu-86-type-1-switch-yt18-white-1.jpg\"\n            />\n            <mat-card class=\"margin-sm-top\">\n                <div class=\"text-center\">\n                    <del>{{price}}</del>\n                    <p>{{priceNew}}</p>\n                </div>\n                <button [class.mat-elevation-z6]=\"isHover\" (mouseenter)=\"hover()\" (mouseleave)=\"hover()\" mat-raised-button color=\"accent\"\n                    class=\"full-width\">ADD TO CART</button>\n            </mat-card>\n        </div>\n        <div class=\"margin-lg-left\">\n            <p>{{description}}</p>\n\n            <div>\n                <h5>Review</h5>\n                <mat-list>\n                    <mat-list-item *ngFor=\"let review of reviews\">\n                        <mat-icon mat-list-icon>person</mat-icon>\n                        <h4 mat-line>{{review.name}}</h4>\n                        <p mat-line class=\"grey\">Posted on {{review.postedDate}}</p>\n                        <p mat-line>{{review.comment}}</p>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.isHover = false;
        this.reviews = [
            { name: 'Surya Pratama', postedDate: '8 January 2018', comment: 'Barang sangat bagus' },
            { name: 'Budi Utomo', postedDate: '3 January 2018', comment: 'Barang sangat berguna' },
            { name: 'Soekarno', postedDate: '2 January 2018', comment: 'Packing bagus dan rapi' },
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.title = "Saklar Lampu";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi lorem, porta vitae ex vitae, dapibus ornare metus. Fusce sed purus ac metus ultrices laoreet vel a orci. Donec viverra lacus a ex vestibulum pellentesque. Proin consequat, dui ornare tincidunt dapibus, massa lorem venenatis ligula, eu consectetur orci diam ac ex. Pellentesque eget odio nisl. Nulla interdum vitae arcu nec hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur et fringilla est. Phasellus dictum, massa id dignissim semper, massa mauris tempus urna, in vehicula lorem lacus sit amet justo. Fusce eget dui pharetra, sodales mauris non, efficitur turpis. Sed eget auctor dui. Ut scelerisque erat sit amet nibh finibus scelerisque. Morbi convallis elementum dictum. Vestibulum ac ullamcorper lorem. Maecenas feugiat suscipit tincidunt. Sed posuere pretium purus, sit amet aliquam nisi molestie ut. Sed id nibh vel dolor varius semper et sed ex. In sed nisl aliquet, condimentum est eget, luctus ante.";
        this.price = "Rp. 85.000";
        this.priceNew = "Rp. 69.000";
    };
    ProductComponent.prototype.hover = function () {
        this.isHover = !this.isHover;
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: __webpack_require__("./src/app/component/product/product.component.html"),
            styles: [__webpack_require__("./src/app/component/product/product.component.css")]
        })
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/component/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-img{\n    width: 50px;\n    height: 50px;\n}"

/***/ }),

/***/ "./src/app/component/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-card>\n        <div class=\"flex\">\n            <div>\n                <img class=\"profile-img\" src=\"http://doylesguide.com/directory/photos/2244/file/1310?size=large\" />\n            </div>\n            <div class=\"margin-md-left\">\n                <p>Budi</p>\n                <p>2.000 loyalty points</p>\n            </div>\n        </div>\n        <b>Dompet</b>\n        <p>Rp. 200.000</p>\n        <b>Saldo Cashback</b>\n        <p>Rp. 15.000</p>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/component/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar',
            template: __webpack_require__("./src/app/component/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/component/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/component/toolbar/category-select.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/toolbar/category-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button mat-button>\n        <span>Category</span>\n        <mat-icon>arrow_drop_down</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/component/toolbar/category-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorySelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategorySelectComponent = /** @class */ (function () {
    function CategorySelectComponent() {
    }
    CategorySelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'category-select',
            template: __webpack_require__("./src/app/component/toolbar/category-select.component.html"),
            styles: [__webpack_require__("./src/app/component/toolbar/category-select.component.css")]
        })
    ], CategorySelectComponent);
    return CategorySelectComponent;
}());



/***/ }),

/***/ "./src/app/component/toolbar/searchbar.component.css":
/***/ (function(module, exports) {

module.exports = ".box{\n    width: 100%;\n    height: 40px;\n}\n\n.container-box{\n    overflow: hidden;\n    width: 100%;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.container-box input#search{\n    width: 100%;\n    height: 40px;\n    background: #fff;\n    border: none;\n    font-size: 10pt;\n    float: left;\n    color: #4f5b66;\n    padding-left: 15px;\n    border-radius: 5px;\n}\n\n.container-box input#search::-webkit-input-placeholder {\n    color: #4f5b66;\n}\n\n.container-box input#search:-moz-placeholder { /* Firefox 18- */\n    color: #4f5b66;  \n}\n\n.container-box input#search::-moz-placeholder {  /* Firefox 19+ */\n    color: #4f5b66;  \n}\n\n.container-box input#search:-ms-input-placeholder {  \n    color: #4f5b66;  \n}\n\n.container-box button.icon{\n    -webkit-border-top-right-radius: 5px;\n    -webkit-border-bottom-right-radius: 5px;\n    -moz-border-radius-topright: 5px;\n    -moz-border-radius-bottomright: 5px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n   \n    border: none;\n    background: #ddd;\n    height: 40px;\n    width: 50px;\n    color: #4f5b66;\n    opacity: 0;\n    font-size: 10pt;\n   \n    -webkit-transition: all .55s ease;\n    transition: all .55s ease;\n}\n\n.container-box:hover button.icon, .container-box:active button.icon, .container-box:focus button.icon{\n    outline: none;\n    opacity: 1;\n    margin-left: -50px;\n}\n\n.container-box:hover button.icon:hover{\n    background: #BBB;\n}"

/***/ }),

/***/ "./src/app/component/toolbar/searchbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n    <div class=\"container-box\">\n        <input type=\"search\" id=\"search\" placeholder=\"Search...\" />\n        <button class=\"icon\">\n            <i class=\"fa fa-search\"></i>\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/toolbar/searchbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'searchbar',
            template: __webpack_require__("./src/app/component/toolbar/searchbar.component.html"),
            styles: [__webpack_require__("./src/app/component/toolbar/searchbar.component.css")]
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.css":
/***/ (function(module, exports) {

module.exports = "input{\n    border: none;\n    padding: 10px;\n    margin: 10px;\n    height: 20px;\n    width: 500px;\n    border:1px solid #eaeaea;\n    outline:none;\n}\ninput:hover{\n    border-color: #a0a0a0 #b9b9b9 #b9b9b9 #b9b9b9;\n}\ninput:focus{\n    border-color:#4d90fe;\n}\ninput[type=\"submit\"] {\n    border-radius: 2px;\n    background: #f2f2f2;\n    border: 1px solid #f2f2f2;\n    color: #757575;\n    cursor: default;\n    font-size: 14px;\n    font-weight: bold;\n    width: 100px;\n    padding: 0 16px;\n    height:36px;\n}\ninput[type=\"submit\"]:hover {\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n            box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    background: #f8f8f8;\n    border: 1px solid #c6c6c6;\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    color: #222;\n}"

/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar color=\"primary\">\n        <span style=\"margin: 0px 60px;\" routerLink=\"/\">ELEKTRA</span>\n        <category-select></category-select>\n        <searchbar class=\"full-width\" style=\"margin: 0 20px;\"></searchbar>\n        <div style=\"margin: 0px 20px;\">\n            <button mat-icon-button matTooltip=\"Cart\">\n                <mat-icon>shopping_cart</mat-icon>\n            </button>\n            <button mat-icon-button matTooltip=\"Notification\">\n                <mat-icon>notifications</mat-icon>\n            </button>\n            <button mat-icon-button matTooltip=\"Profile\">\n                <mat-icon>person</mat-icon>\n            </button>\n        </div>\n    </mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/component/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toolbar',
            template: __webpack_require__("./src/app/component/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("./src/app/component/toolbar/toolbar.component.css")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapMaterialModules */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function mapMaterialModules() {
    return Object.keys(__WEBPACK_IMPORTED_MODULE_1__angular_material__).filter(function (k) {
        var asset = __WEBPACK_IMPORTED_MODULE_1__angular_material__[k];
        return typeof asset == 'function'
            && asset.name.startsWith('Mat')
            && asset.name.includes('Module');
    }).map(function (k) { return __WEBPACK_IMPORTED_MODULE_1__angular_material__[k]; });
}
var modules = mapMaterialModules();
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map