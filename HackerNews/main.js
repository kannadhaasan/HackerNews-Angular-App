(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HackerNews';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hackerService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hackerService */ "./src/app/hackerService.ts");
/* harmony import */ var _dtos_story__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dtos/story */ "./src/app/dtos/story.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_11__["TimeAgoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]
            ],
            providers: [_hackerService__WEBPACK_IMPORTED_MODULE_8__["HackerService"], _dtos_story__WEBPACK_IMPORTED_MODULE_9__["Story"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dtos/story.ts":
/*!*******************************!*\
  !*** ./src/app/dtos/story.ts ***!
  \*******************************/
/*! exports provided: Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
var Story = /** @class */ (function () {
    function Story() {
    }
    return Story;
}());



/***/ }),

/***/ "./src/app/hackerService.ts":
/*!**********************************!*\
  !*** ./src/app/hackerService.ts ***!
  \**********************************/
/*! exports provided: HackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerService", function() { return HackerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HackerService = /** @class */ (function () {
    function HackerService(http) {
        this.http = http;
    }
    HackerService.prototype.getIds = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        var httpOptions = {
            headers: headers
        };
        httpOptions.headers.append('Content-Type', 'application/json');
        var url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        var res = this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cre) { return _this.log("added employee w/ Success=" + cre.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error in login')));
        return res;
    };
    HackerService.prototype.getStoryById = function (id) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var httpOptions = {
            headers: headers
        };
        var url = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json?print=pretty';
        var res = this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cre) { return _this.log("added employee w/ Success=" + cre.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Error in login')));
        return res;
    };
    HackerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    HackerService.prototype.log = function (message) {
        //
    };
    HackerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HackerService);
    return HackerService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  \n      <ul >\n            <li class=\"link\" (click)=\"setAgian()\">Stories</li>\n          \n              <li ><strong>Hacker  </strong> <strong>News</strong></li>\n          \n          \n              <li class=\"link\" (click)=\"newUpdate()\">New</li>\n          \n        </ul>\n\n        &nbsp;&nbsp;\n  \n  <body>\n  \n    <div class=\"container\">\n      \n      <div class=\"row\" style=\"margin-bottom: 10px;\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"input-group\" style=\"border-radius: 20px\">\n              <input class=\"form-control\" style=\" border-radius: 20px;font-family: 'Lora', serif;\" name=\"query\" id=\"query\" [(ngModel)]=\"query\" placeholder=\"Search news...\">\n              <button class=\"input-group-addon btn btn-warning\" (click)=\"search()\" style=\"border-radius: 20px;font-family: 'Lora', serif;\">Search</button>\n          </div>\n          <br>\n          <h3 style=\"text-align: center\" *ngIf=\"!stories.length\">No Result Found</h3>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-3\" style=\"margin-bottom: 5px\"   *ngFor=\"let item of stories | paginate: { itemsPerPage: 20, currentPage: p }\" >\n            \n            <div class=\"item-box\">\n                <p style=\"color:white; font-weight: bold\">{{item.time*1000 | date:'MMM d, y' }}</p>\n                <a href=\"{{item.url}}\" target=\"_blank\" class=\"box-title\"><h5 class=\"box-title\">{{item.title}}</h5></a>\n                <i>{{item.time*1000 |timeAgo}}</i>\n                <br>\n                <i style=\"color: black;margin-bottom: 0;padding-bottom: 0;\">({{item.site}})</i>\n                <p style=\"color: black;margin-top: 0;padding-top: 0;\">{{item.score}} points by {{item.by}}</p>\n              </div>\n            </div>\n          \n      </div>\n      &nbsp;\n      <div style=\"text-align: center\">\n          <pagination-controls (pageChange)=\"p = $event\" style=\"color:#4cb69f;font-size: 15px;font-family: 'Lora', serif;\"></pagination-controls>\n      </div>\n\n    </div>\n  </body>  \n\n</html>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: 'Lora', serif;\n  background-color: white;\n  min-height: 640px;\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  text-align: center;\n  background-color: #4cb69f; }\n\nli {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 12px 16px;\n  text-decoration: none; }\n\n.link {\n  margin-top: 15px;\n  text-transform: initial;\n  color: white; }\n\n.link:hover {\n  color: #e6e6e6;\n  cursor: pointer; }\n\n.item-box {\n  height: 230px;\n  border-top: #FF4293 solid 5px;\n  background-color: #FFCD24;\n  color: #33393d;\n  border-radius: 8px;\n  padding: 10px; }\n\n.box-title {\n  color: black;\n  font-weight: bold;\n  font-size: 16px;\n  text-transform: initial; }\n\n.box-title:hover {\n  color: red;\n  text-decoration: none; }\n\n.story-label {\n  margin-top: 15px;\n  text-transform: initial;\n  float: right;\n  color: #33CAFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcQW5ndWxhclxcTmV3IGZvbGRlclxcSGFja2VyIE5ld3Mvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMEI7RUFDMUIsd0JBQXVCO0VBQ3ZCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ2xCOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFFRSxzQkFBcUI7RUFDckIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsc0JBQXFCLEVBQ3RCOztBQUlHO0VBQ0ksaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZix3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogNjQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2I2OWY7XHJcbiAgICB9XHJcbiAgICBsaSAge1xyXG4gICAgICBcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuICAgIFxyXG4gICAgICAgIC5saW5re1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1ib3h7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICNGRjQyOTMgc29saWQgNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRDI0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzkzZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC10aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDsgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC10aXRsZTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6IHJlZCA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdG9yeS1sYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6ICMzM0NBRkY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hackerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hackerService */ "./src/app/hackerService.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(hackerService) {
        this.hackerService = hackerService;
        this.query = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stories = new Array();
        this.orgStories = new Array();
        this.hackerService.getIds().subscribe(function (res) {
            if (res != null) {
                _this.Ids = res;
                _this.getData();
            }
        });
    };
    HomeComponent.prototype.newUpdate = function () {
        this.stories.sort(function (a1, a2) {
            return a2.time - a1.time;
        });
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        if (this.query == "") {
            this.stories = this.orgStories;
            return;
        }
        this.stories = this.orgStories.filter(function (s) {
            if (s.title != null) {
                if (s.title.includes(_this.query)) {
                    return true;
                }
            }
            if (s.url != null) {
                if (s.url.includes(_this.query)) {
                    return true;
                }
            }
            if (s.by != null) {
                if (s.by.includes(_this.query)) {
                    return true;
                }
            }
            return false;
        });
    };
    HomeComponent.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.Ids.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.hackerService.getStoryById(this.Ids[i]).toPromise()];
                    case 2:
                        res = _a.sent();
                        if (res != null) {
                            if (res.url != null) {
                                res.site = res.url.split('/')[2];
                            }
                            if (this.query == "") {
                                this.stories.push(res);
                            }
                            else {
                                if (res.title.includes(this.query)) {
                                    this.stories.push(res);
                                }
                                else if (res.by.includes(this.query)) {
                                    this.stories.push(res);
                                }
                                else if (res.url.includes(this.query)) {
                                    this.stories.push(res);
                                }
                            }
                            this.orgStories.push(res);
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.setAgian = function () {
        this.stories = this.orgStories;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hackerService__WEBPACK_IMPORTED_MODULE_2__["HackerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\New folder\Hacker News\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map