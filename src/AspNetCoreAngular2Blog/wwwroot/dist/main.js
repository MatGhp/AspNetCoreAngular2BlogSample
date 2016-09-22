/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	var platform_browser_dynamic_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(10);
	var router_1 = __webpack_require__(11);
	var http_1 = __webpack_require__(12);
	var app_1 = __webpack_require__(13);
	var routes_1 = __webpack_require__(18);
	platform_browser_dynamic_1.bootstrap(app_1.App, http_1.HTTP_PROVIDERS.concat([
	    common_1.FormBuilder,
	    router_1.provideRouter(routes_1.routes)
	]));
	if (false) {
	    module.hot.accept();
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(415);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = vendor_69b8ab58718b04812502;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(477);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(401);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(447);

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(352);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(21);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(390);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(350);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var ng = __webpack_require__(14);
	var router_1 = __webpack_require__(11);
	var nav_menu_1 = __webpack_require__(15);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        ng.Component({
	            selector: 'app',
	            template: __webpack_require__(17),
	            directives: router_1.ROUTER_DIRECTIVES.concat([nav_menu_1.NavMenu])
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(1);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var ng = __webpack_require__(14);
	var router_1 = __webpack_require__(11);
	var NavMenu = (function () {
	    function NavMenu() {
	    }
	    NavMenu = __decorate([
	        ng.Component({
	            selector: 'nav-menu',
	            template: __webpack_require__(16),
	            directives: router_1.ROUTER_DIRECTIVES.slice()
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavMenu);
	    return NavMenu;
	}());
	exports.NavMenu = NavMenu;


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n        <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">AspNetCoreAngular2Blog</a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n            <ul class='nav navbar-nav'>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/home']\">\n                        <span class='glyphicon glyphicon-home'></span> Home\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/counter']\">\n                        <span class='glyphicon glyphicon-education'></span> Counter\n                    </a>\n                </li>\n                <li [routerLinkActive]=\"['link-active']\">\n                    <a [routerLink]=\"['/fetch-data']\">\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var home_1 = __webpack_require__(19);
	var fetch_data_1 = __webpack_require__(21);
	var counter_1 = __webpack_require__(23);
	exports.routes = [
	    { path: '', redirectTo: 'home', pathMatch: 'full' },
	    { path: 'home', component: home_1.Home },
	    { path: 'counter', component: counter_1.Counter },
	    { path: 'fetch-data', component: fetch_data_1.FetchData },
	    { path: '**', redirectTo: 'home' }
	];


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var ng = __webpack_require__(14);
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        ng.Component({
	            selector: 'home',
	            template: __webpack_require__(20)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Hello, world!</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\n</ul>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var ng = __webpack_require__(14);
	var http_1 = __webpack_require__(12);
	var FetchData = (function () {
	    function FetchData(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    FetchData = __decorate([
	        ng.Component({
	            selector: 'fetch-data',
	            template: __webpack_require__(22)
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], FetchData);
	    return FetchData;
	}());
	exports.FetchData = FetchData;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\n\n<p>This component demonstrates fetching data from the server.</p>\n\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\n\n<table class='table' *ngIf=\"forecasts\">\n    <thead>\n        <tr>\n            <th>Date</th>\n            <th>Temp. (C)</th>\n            <th>Temp. (F)</th>\n            <th>Summary</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let forecast of forecasts\">\n            <td>{{ forecast.dateFormatted }}</td>\n            <td>{{ forecast.temperatureC }}</td>\n            <td>{{ forecast.temperatureF }}</td>\n            <td>{{ forecast.summary }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var ng = __webpack_require__(14);
	var Counter = (function () {
	    function Counter() {
	        this.currentCount = 0;
	    }
	    Counter.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    Counter = __decorate([
	        ng.Component({
	            selector: 'counter',
	            template: __webpack_require__(24)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Counter);
	    return Counter;
	}());
	exports.Counter = Counter;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\n\n<p>This is a simple example of an Angular 2 component.</p>\n\n<p>Current count: <strong>{{ currentCount }}</strong></p>\n\n<button (click)=\"incrementCounter()\">Increment</button>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWY3ZDE0YWMxNzVkODE2OWEzYTkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvZXM2LXNoaW0vZXM2LXNoaW0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDJcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3pvbmUuanMvZGlzdC96b25lLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdHlsZXMvc2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2FwcC9hcHAuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9mZXRjaC1kYXRhL2ZldGNoLWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmV0Y2gtZGF0YS9mZXRjaC1kYXRhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5odG1sIl0sIm5hbWVz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QUM7QUFOWSxnQkFBTyxVQU1uQjs7Ozs7OztBQ1pELGlJQUFnSSxnQkFBZ0IsNkUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWY3ZDE0YWMxNzVkODE2OWEzYTlcbiAqKi8iLCJpbXBvcnQgJ2VzNi1zaGltJztcbnJlcXVpcmUoJ3pvbmUuanMnKTtcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgJy4vc3R5bGVzL3NpdGUuY3NzJztcblxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcblxuYm9vdHN0cmFwKEFwcCwgW1xuICAgIC4uLkhUVFBfUFJPVklERVJTLFxuICAgIEZvcm1CdWlsZGVyLFxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxuXSk7XG5cbi8vIEJhc2ljIGhvdCByZWxvYWRpbmcgc3VwcG9ydC4gQXV0b21hdGljYWxseSByZWxvYWRzIGFuZCByZXN0YXJ0cyB0aGUgQW5ndWxhciAyIGFwcCBlYWNoIHRpbWVcbi8vIHlvdSBtb2RpZnkgc291cmNlIGZpbGVzLiBUaGlzIHdpbGwgbm90IHByZXNlcnZlIGFueSBhcHBsaWNhdGlvbiBzdGF0ZSBvdGhlciB0aGFuIHRoZSBVUkwuXG5kZWNsYXJlIHZhciBtb2R1bGU6IGFueTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2Jvb3QtY2xpZW50LnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNDE1KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9lczYtc2hpbS9lczYtc2hpbS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMlwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNDc3KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoNDAxKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9qcy9ucG0uanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMlxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDQ0Nyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfNjliOGFiNTg3MThiMDQ4MTI1MDJcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvc3R5bGVzL3NpdGUuY3NzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMzUyKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMlxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDIxKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl82OWI4YWI1ODcxOGIwNDgxMjUwMlxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKSgzOTApO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMykpKDM1MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIG5nIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2TWVudSB9IGZyb20gJy4uL25hdi1tZW51L25hdi1tZW51JztcblxuQG5nLkNvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5odG1sJyksXG4gICAgZGlyZWN0aXZlczogWy4uLlJPVVRFUl9ESVJFQ1RJVkVTLCBOYXZNZW51XVxufSlcbmV4cG9ydCBjbGFzcyBBcHAge1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvY29tcG9uZW50cy9hcHAvYXBwLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygzKSkoMSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzY5YjhhYjU4NzE4YjA0ODEyNTAyXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIG5nIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AbmcuQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdi1tZW51Lmh0bWwnKSxcbiAgZGlyZWN0aXZlczogWy4uLlJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZNZW51IHtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyIG5hdmJhci1pbnZlcnNlJz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhci1oZWFkZXInPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+V2ViQXBwbGljYXRpb25CYXNpYzwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IEhvbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY291bnRlciddXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1lZHVjYXRpb24nPjwvc3Bhbj4gQ291bnRlclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9mZXRjaC1kYXRhJ11cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnPjwvc3Bhbj4gRmV0Y2ggZGF0YVxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYXBwL2FwcC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBGZXRjaERhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2gtZGF0YS9mZXRjaC1kYXRhJztcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlciB9LFxuICAgIHsgcGF0aDogJ2ZldGNoLWRhdGEnLCBjb21wb25lbnQ6IEZldGNoRGF0YSB9LFxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbl07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9yb3V0ZXMudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBuZyBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQG5nLkNvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEhvbWUge1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9DbGllbnRBcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxcbjxwPldlbGNvbWUgdG8geW91ciBuZXcgc2luZ2xlLXBhZ2UgYXBwbGljYXRpb24sIGJ1aWx0IHdpdGg6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vZ2V0LmFzcC5uZXQvJz5BU1AuTkVUIENvcmU8L2E+IGFuZCA8YSBocmVmPSdodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5LzY3ZWY4c2JkLmFzcHgnPkMjPC9hPiBmb3IgY3Jvc3MtcGxhdGZvcm0gc2VydmVyLXNpZGUgY29kZTwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwczovL2FuZ3VsYXIuaW8vJz5Bbmd1bGFyIDI8L2E+IGFuZCA8YSBocmVmPSdodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy8nPlR5cGVTY3JpcHQ8L2E+IGZvciBjbGllbnQtc2lkZSBjb2RlPC9saT5cXG4gICAgPGxpPjxhIGhyZWY9J2h0dHBzOi8vd2VicGFjay5naXRodWIuaW8vJz5XZWJwYWNrPC9hPiBmb3IgYnVpbGRpbmcgYW5kIGJ1bmRsaW5nIGNsaWVudC1zaWRlIHJlc291cmNlczwvbGk+XFxuICAgIDxsaT48YSBocmVmPSdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nPkJvb3RzdHJhcDwvYT4gZm9yIGxheW91dCBhbmQgc3R5bGluZzwvbGk+XFxuPC91bD5cXG48cD5UbyBoZWxwIHlvdSBnZXQgc3RhcnRlZCwgd2UndmUgYWxzbyBzZXQgdXA6PC9wPlxcbjx1bD5cXG4gICAgPGxpPjxzdHJvbmc+Q2xpZW50LXNpZGUgbmF2aWdhdGlvbjwvc3Ryb25nPi4gRm9yIGV4YW1wbGUsIGNsaWNrIDxlbT5Db3VudGVyPC9lbT4gdGhlbiA8ZW0+QmFjazwvZW0+IHRvIHJldHVybiBoZXJlLjwvbGk+XFxuICAgIDxsaT48c3Ryb25nPlNlcnZlci1zaWRlIHByZXJlbmRlcmluZzwvc3Ryb25nPi4gRm9yIGZhc3RlciBpbml0aWFsIGxvYWRpbmcgYW5kIGltcHJvdmVkIFNFTywgeW91ciBBbmd1bGFyIDIgYXBwIGlzIHByZXJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuIFRoZSByZXN1bHRpbmcgSFRNTCBpcyB0aGVuIHRyYW5zZmVycmVkIHRvIHRoZSBicm93c2VyIHdoZXJlIGEgY2xpZW50LXNpZGUgY29weSBvZiB0aGUgYXBwIHRha2VzIG92ZXIuPC9saT5cXG4gICAgPGxpPjxzdHJvbmc+V2VicGFjayBkZXYgbWlkZGxld2FyZTwvc3Ryb25nPi4gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdGhlcmUncyBubyBuZWVkIHRvIHJ1biB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbC4gWW91ciBjbGllbnQtc2lkZSByZXNvdXJjZXMgYXJlIGR5bmFtaWNhbGx5IGJ1aWx0IG9uIGRlbWFuZC4gVXBkYXRlcyBhcmUgYXZhaWxhYmxlIGFzIHNvb24gYXMgeW91IG1vZGlmeSBhbnkgZmlsZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5Ib3QgbW9kdWxlIHJlcGxhY2VtZW50PC9zdHJvbmc+LiBJbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgZG9uJ3QgZXZlbiBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZSBhZnRlciBtYWtpbmcgbW9zdCBjaGFuZ2VzLiBXaXRoaW4gc2Vjb25kcyBvZiBzYXZpbmcgY2hhbmdlcyB0byBmaWxlcywgeW91ciBBbmd1bGFyIDIgYXBwIHdpbGwgYmUgcmVidWlsdCBhbmQgYSBuZXcgaW5zdGFuY2UgaW5qZWN0ZWQgaXMgaW50byB0aGUgcGFnZS48L2xpPlxcbiAgICA8bGk+PHN0cm9uZz5FZmZpY2llbnQgcHJvZHVjdGlvbiBidWlsZHM8L3N0cm9uZz4uIEluIHByb2R1Y3Rpb24gbW9kZSwgZGV2ZWxvcG1lbnQtdGltZSBmZWF0dXJlcyBhcmUgZGlzYWJsZWQsIGFuZCB0aGUgPGNvZGU+d2VicGFjazwvY29kZT4gYnVpbGQgdG9vbCBwcm9kdWNlcyBtaW5pZmllZCBzdGF0aWMgQ1NTIGFuZCBKYXZhU2NyaXB0IGZpbGVzLjwvbGk+XFxuPC91bD5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBuZyBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQG5nLkNvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmV0Y2gtZGF0YScsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoLWRhdGEuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YSB7XG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JlY2FzdHMgPSByZXN1bHQuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xuICAgIGRhdGVGb3JtYXR0ZWQ6IHN0cmluZztcbiAgICB0ZW1wZXJhdHVyZUM6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcbiAgICBzdW1tYXJ5OiBzdHJpbmc7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZldGNoLWRhdGEvZmV0Y2gtZGF0YS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+V2VhdGhlciBmb3JlY2FzdDwvaDE+XFxuXFxuPHA+VGhpcyBjb21wb25lbnQgZGVtb25zdHJhdGVzIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLjwvcD5cXG5cXG48cCAqbmdJZj1cXFwiIWZvcmVjYXN0c1xcXCI+PGVtPkxvYWRpbmcuLi48L2VtPjwvcD5cXG5cXG48dGFibGUgY2xhc3M9J3RhYmxlJyAqbmdJZj1cXFwiZm9yZWNhc3RzXFxcIj5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEMpPC90aD5cXG4gICAgICAgICAgICA8dGg+VGVtcC4gKEYpPC90aD5cXG4gICAgICAgICAgICA8dGg+U3VtbWFyeTwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3RoZWFkPlxcbiAgICA8dGJvZHk+XFxuICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZm9yZWNhc3Qgb2YgZm9yZWNhc3RzXFxcIj5cXG4gICAgICAgICAgICA8dGQ+e3sgZm9yZWNhc3QuZGF0ZUZvcm1hdHRlZCB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlQyB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnRlbXBlcmF0dXJlRiB9fTwvdGQ+XFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LnN1bW1hcnkgfX08L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL0NsaWVudEFwcC9jb21wb25lbnRzL2ZldGNoLWRhdGEvZmV0Y2gtZGF0YS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAqIGFzIG5nIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AbmcuQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudGVyJyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5odG1sJylcbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlciB7XG4gICAgcHVibGljIGN1cnJlbnRDb3VudCA9IDA7XG5cbiAgICBwdWJsaWMgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQrKztcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL0NsaWVudEFwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDI+Q291bnRlcjwvaDI+XFxuXFxuPHA+VGhpcyBpcyBhIHNpbXBsZSBleGFtcGxlIG9mIGFuIEFuZ3VsYXIgMiBjb21wb25lbnQuPC9wPlxcblxcbjxwPkN1cnJlbnQgY291bnQ6IDxzdHJvbmc+e3sgY3VycmVudENvdW50IH19PC9zdHJvbmc+PC9wPlxcblxcbjxidXR0b24gKGNsaWNrKT1cXFwiaW5jcmVtZW50Q291bnRlcigpXFxcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9DbGllbnRBcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9