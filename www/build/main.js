webpackJsonp([7],{

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		421,
		6
	],
	"../pages/courses/courses.module": [
		422,
		5
	],
	"../pages/enroll-now/enroll-now.module": [
		423,
		4
	],
	"../pages/home/home.module": [
		424,
		3
	],
	"../pages/my-program/my-program.module": [
		425,
		2
	],
	"../pages/personal-details/personal-details.module": [
		426,
		1
	],
	"../pages/program-calender/program-calender.module": [
		427,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    RegisterPage.prototype.Register = function () {
        //// check to confirm the username, email, telephone and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.email.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Email field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.mobile.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Mobile number field is empty",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else if (this.password.value == "") {
            var alert_4 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_4.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://127.0.0.1:8080/ionicphp/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successfull") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_5.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" name="fullname" #username></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="email" placeholder="Email" name="email" #email></ion-input>\n    </ion-item>\n  \n      <ion-item>\n      <ion-input type="number" placeholder="Mobile Number" name="mobile" #mobile></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n  \n  </ion-list>\n \n  <div padding>\n  <button ion-button  round outline block (click)="Register()">Register</button>\n  </div>\n  \n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.signIn = function () {
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.username.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Username field is empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.password.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATTENTION",
                subTitle: "Password field is empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://localhost:8080/ionicphp/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your Login success") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], data_1);
                    }
                    else if (res == "Your Login success as Admin") {
                        var alert_4 = _this.alertCtrl.create({
                            title: "CONGRATS",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_4.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */], data_1);
                    }
                    else if (res == "Your Account is on hold") {
                        var alert_5 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Account is on Hold",
                            buttons: ['OK']
                        });
                        alert_5.present();
                    }
                    else {
                        var alert_6 = _this.alertCtrl.create({
                            title: "ERROR",
                            subTitle: "Your Login Username or Password is invalid",
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("role"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "role", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-title>\n     Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-item  >\n      <ion-input  round type="text" placeholder="Username" name="username" #username></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" name="password" #password></ion-input>\n    </ion-item>\n\n    <button ion-button round block (click)="signIn()">Sign In</button>\n    <button ion-button round outline block (click)="signUp()">Register</button>\n  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = /** @class */ (function () {
    function CoursesPage(navCtrl, alertCtrl, http, loading, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.enrollement();
    }
    CoursesPage_1 = CoursesPage;
    CoursesPage.prototype.CoursesPage = function () {
        this.navCtrl.push(CoursesPage_1);
    };
    CoursesPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    CoursesPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    CoursesPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    CoursesPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    CoursesPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-3');
    };
    CoursesPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-3');
    };
    CoursesPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-3');
    };
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    CoursesPage.prototype.enrollement = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        this.program_name = this.navParams.get('program_name');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
            program_name: this.program_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/student_audit.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    CoursesPage = CoursesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-courses',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\courses\courses.html"*/'<!--\n  Generated template for the CoursesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content4" side="left" id="filters-4">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="hideFilters()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="EnrollNowPage()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content4>\n  <h3> Course Audit </h3>\n  <div *ngFor = "let item of items" >\n  <div class="row header" >\n    <div class="col col-1">Course code:</div>\n    <div class="col">{{item.course}}</div>\n  </div>\n  <div class="row header" >\n    <div class="col">Course Name:</div>\n    <div class="col">{{item.name}}</div>\n</div>\n<div class="row header" >\n    <div class="col">Course Status:</div>\n    <div class="col">{{item.status}}</div>\n  </div>\n</div> \n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\courses\courses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], CoursesPage);
    return CoursesPage;
    var CoursesPage_1;
}());

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollNowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EnrollNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnrollNowPage = /** @class */ (function () {
    function EnrollNowPage(navCtrl, alertCtrl, loading, navParams, http, menuCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.enrollement();
    }
    EnrollNowPage_1 = EnrollNowPage;
    EnrollNowPage.prototype.enrollement = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        this.program_name = this.navParams.get('program_name');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
            program_name: this.program_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/course.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    EnrollNowPage.prototype.Register_course = function (course_code, course_name) {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: this.username,
            course_code: course_code,
            course_name: course_name
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/course_register.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                if (res == "Successfully Enrolled") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Updated",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.push(EnrollNowPage_1);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        });
    };
    EnrollNowPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    EnrollNowPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    EnrollNowPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(EnrollNowPage_1);
    };
    EnrollNowPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    EnrollNowPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    EnrollNowPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    EnrollNowPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-3');
    };
    EnrollNowPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-3');
    };
    EnrollNowPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-3');
    };
    EnrollNowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnrollNowPage');
    };
    EnrollNowPage = EnrollNowPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enroll-now',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\enroll-now\enroll-now.html"*/'<!--\n  Generated template for the EnrollNowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="100px" width="180px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content4" side="left" id="filters-4">\n  Menu\n  <ion-item>\n    <button  ion-button (click)="HomePage()">\n      Home\n    </button>\n  </ion-item>\n  <ion-item>\n      <button  ion-button (click)="CoursesPage()">\n        Program Audit\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Enroll Now\n        </button>\n      </ion-item>\n      <ion-item>\n        <button  ion-button (click)="PersonalDetailsPage()">\n          My Details\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="LoginPage()">\n            Logout\n          </button>\n        </ion-item>\n</ion-menu>\n\n<ion-content padding #content4>\n    <h2> Enrollment  </h2>\n    <div *ngFor = "let item of items" >\n    <div class="row header" >\n      <div class="col">Course code:</div>\n      <div class="col">{{item.course_code}}</div>\n    </div>\n    <div class="row header" >\n      <div class="col">Course Name:</div>\n      <div class="col">{{item.course_name}}</div>\n  </div>\n  <div class="row header" >\n      <div class="col">Semester Offered:</div>\n      <div class="col">{{item.sem_offered}}</div>\n    </div>\n    <div class="row header">\n        <a href="#" class="card-link" (click)="Register_course(item.course_code,item.course_name)">Enroll</a>\n    </div>\n  </div>\n  \n   \n    <!-- <div padding>\n        \n   <button ion-button  round outline block (click)="Register_course(item.course_code)">Enroll</button>\n    </div> --> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\enroll-now\enroll-now.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], EnrollNowPage);
    return EnrollNowPage;
    var EnrollNowPage_1;
}());

//# sourceMappingURL=enroll-now.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalDetailsPage = /** @class */ (function () {
    function PersonalDetailsPage(navCtrl, http, loading, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.csvData = [];
        this.headerRow = [];
    }
    PersonalDetailsPage_1 = PersonalDetailsPage;
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetailsPage');
    };
    PersonalDetailsPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-4');
    };
    PersonalDetailsPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    PersonalDetailsPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    PersonalDetailsPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    PersonalDetailsPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    PersonalDetailsPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(PersonalDetailsPage_1);
    };
    PersonalDetailsPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    PersonalDetailsPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-4');
    };
    PersonalDetailsPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-4');
    };
    PersonalDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/users_details.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    PersonalDetailsPage = PersonalDetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-details',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\personal-details\personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n  <ion-buttons end>\n    <button ion-button icon-only (click)="showFilters()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-menu [content]="content4" side="right" id="filters-4">\n    Menu\n    <ion-item>\n      <button  ion-button (click)="HomePage()">\n        Home\n      </button>\n    </ion-item>\n    <ion-item>\n        <button  ion-button (click)="CoursesPage()">\n          Program Audit\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="EnrollNowPage()">\n            Enroll Now\n          </button>\n        </ion-item>\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            My Details\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="LoginPage()">\n              Logout\n            </button>\n          </ion-item>\n  </ion-menu>\n  \n  <ion-content padding #content4>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Student ID</div>\n        <div class="col">{{item.username}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n        <div class="col">Name :</div>\n        <div class="col">{{item.name}}</div>\n    </div>\n    <div class="row header" *ngFor = "let item of items">\n        <div class="col">Email Address :</div>\n        <div class="col">{{item.email}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Role :</div>\n          <div class="col">{{item.role}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">DOB :</div>\n          <div class="col">{{item.DOB}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Gender :</div>\n          <div class="col">{{item.gender}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Citizenship :</div>\n          <div class="col">{{item.citizenship}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Campus :</div>\n          <div class="col">{{item.campus}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Program Enrolled In </div>\n          <div class="col">{{item.program_name}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Year You Started Your Program :</div>\n          <div class="col">{{item.year_joined}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Type :</div>\n          <div class="col">{{item.major_type}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major One :</div>\n          <div class="col">{{item.major_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Major Two :</div>\n          <div class="col">{{item.major_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor One :</div>\n          <div class="col">{{item.minor_one}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Minor Two :</div>\n          <div class="col">{{item.minor_two}}</div>\n      </div>\n      <div class="row header" *ngFor = "let item of items">\n          <div class="col">Your Account Status :</div>\n          <div class="col">{{item.status}}</div>\n      </div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
    var PersonalDetailsPage_1;
}());

//# sourceMappingURL=personal-details.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProgramCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var ProgramCalenderPage = /** @class */ (function () {
    /**
     * Creates an instance of program calender page.
     * @param navCtrl
     * @param loadingCtrl
     * @param toastCtrl
     * @param http
     * @param navParams
     * @param menuCtrl
     * @param transfer
     */
    function ProgramCalenderPage(navCtrl, loadingCtrl, toastCtrl, http, navParams, menuCtrl, transfer) {
        // this.writeCsvData();
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.transfer = transfer;
        this.csvData = [];
        this.headerRow = [];
    }
    ProgramCalenderPage_1 = ProgramCalenderPage;
    /**
     * Csvuploads program calender page
     */
    ProgramCalenderPage.prototype.CSVUpload = function () {
        window.location.href = 'http://127.0.0.1:8080/csv/';
    };
    /* writeCsvData() {
      
      
        let data = this.extractData;
  
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
    
     
        this.http.post('http://127.0.0.1:8080/ionicphp/program_calender.php',data, options)
        .map(res => res.json())
        .subscribe(
    
        );
  }
    
  
    extractData(res){
      let csvData = res['_body'] || '';
      let parsedData = papa.parse(csvData).data;
  
      this.headerRow = parsedData[0];
      
      parsedData.splice(0, 1);
      this.csvData = parsedData;
  
    } */
    /**
     * Courses page
     */
    ProgramCalenderPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__courses_courses__["a" /* CoursesPage */]);
    };
    /**
     * Programs calender page
     */
    ProgramCalenderPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(ProgramCalenderPage_1);
    };
    /**
     * Enrolls now page
     */
    ProgramCalenderPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    /**
     * Homes page
     */
    ProgramCalenderPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    ProgramCalenderPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    /**
     * Logins page
     */
    ProgramCalenderPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    /**
     * Ions view did enter
     */
    ProgramCalenderPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-5');
    };
    /**
     * Shows filters
     */
    ProgramCalenderPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-5');
    };
    /**
     * Hides filters
     */
    ProgramCalenderPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-5');
    };
    /**
     * Ions view did load
     */
    ProgramCalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    ProgramCalenderPage = ProgramCalenderPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-program-calender',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\program-calender\program-calender.html"*/'<ion-header>\n\n    <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n    <ion-menu [content]="content1" side="left" id="filters-5">\n        Menu\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            Home\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="CoursesPage()">\n              Program Audit\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="EnrollNowPage()">\n                Enroll Now\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="hideFilters()">\n                My Details\n              </button>\n            </ion-item>\n                <ion-item>\n                    <button  ion-button (click)="ProgramCalenderPage()">\n                      Program Calender\n                    </button>\n                  </ion-item>\n                  <ion-item>\n                <button  ion-button (click)="LoginPage()">\n                  Logout\n                </button>\n              </ion-item>\n      </ion-menu>\n  \n    <ion-content padding #content1>\n      <ion-item *ngFor = "let item of items">\n  \n      <h2> {{item.username}}  </h2>\n    </ion-item>\n<!-- \n    <label class="myFakeUploadButton" for="writeCsvData">Upload</label>\n    <input type="file" id="myFileInput"> -->\n    \n    <button  ion-button (click)="CSVUpload()">\n        Upload CSV\n      </button>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\program-calender\program-calender.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */]) === "function" && _g || Object])
    ], ProgramCalenderPage);
    return ProgramCalenderPage;
    var ProgramCalenderPage_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=program-calender.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_program_calender_program_calender__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer_ngx__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(420);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__["a" /* MyProgramPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enroll-now/enroll-now.module#EnrollNowPageModule', name: 'EnrollNowPage', segment: 'enroll-now', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-program/my-program.module#MyProgramPageModule', name: 'MyProgramPage', segment: 'my-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsPageModule', name: 'PersonalDetailsPage', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program-calender/program-calender.module#ProgramCalenderPageModule', name: 'ProgramCalenderPage', segment: 'program-calender', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enroll_now_enroll_now__["a" /* EnrollNowPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_details_personal_details__["a" /* PersonalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_program_calender_program_calender__["a" /* ProgramCalenderPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_program_my_program__["a" /* MyProgramPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bm": 179,
	"./bm.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-SG": 194,
	"./en-SG.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-nz": 200,
	"./en-nz.js": 200,
	"./eo": 201,
	"./eo.js": 201,
	"./es": 202,
	"./es-do": 203,
	"./es-do.js": 203,
	"./es-us": 204,
	"./es-us.js": 204,
	"./es.js": 202,
	"./et": 205,
	"./et.js": 205,
	"./eu": 206,
	"./eu.js": 206,
	"./fa": 207,
	"./fa.js": 207,
	"./fi": 208,
	"./fi.js": 208,
	"./fo": 209,
	"./fo.js": 209,
	"./fr": 210,
	"./fr-ca": 211,
	"./fr-ca.js": 211,
	"./fr-ch": 212,
	"./fr-ch.js": 212,
	"./fr.js": 210,
	"./fy": 213,
	"./fy.js": 213,
	"./ga": 214,
	"./ga.js": 214,
	"./gd": 215,
	"./gd.js": 215,
	"./gl": 216,
	"./gl.js": 216,
	"./gom-latn": 217,
	"./gom-latn.js": 217,
	"./gu": 218,
	"./gu.js": 218,
	"./he": 219,
	"./he.js": 219,
	"./hi": 220,
	"./hi.js": 220,
	"./hr": 221,
	"./hr.js": 221,
	"./hu": 222,
	"./hu.js": 222,
	"./hy-am": 223,
	"./hy-am.js": 223,
	"./id": 224,
	"./id.js": 224,
	"./is": 225,
	"./is.js": 225,
	"./it": 226,
	"./it-ch": 227,
	"./it-ch.js": 227,
	"./it.js": 226,
	"./ja": 228,
	"./ja.js": 228,
	"./jv": 229,
	"./jv.js": 229,
	"./ka": 230,
	"./ka.js": 230,
	"./kk": 231,
	"./kk.js": 231,
	"./km": 232,
	"./km.js": 232,
	"./kn": 233,
	"./kn.js": 233,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 235,
	"./ku.js": 235,
	"./ky": 236,
	"./ky.js": 236,
	"./lb": 237,
	"./lb.js": 237,
	"./lo": 238,
	"./lo.js": 238,
	"./lt": 239,
	"./lt.js": 239,
	"./lv": 240,
	"./lv.js": 240,
	"./me": 241,
	"./me.js": 241,
	"./mi": 242,
	"./mi.js": 242,
	"./mk": 243,
	"./mk.js": 243,
	"./ml": 244,
	"./ml.js": 244,
	"./mn": 245,
	"./mn.js": 245,
	"./mr": 246,
	"./mr.js": 246,
	"./ms": 247,
	"./ms-my": 248,
	"./ms-my.js": 248,
	"./ms.js": 247,
	"./mt": 249,
	"./mt.js": 249,
	"./my": 250,
	"./my.js": 250,
	"./nb": 251,
	"./nb.js": 251,
	"./ne": 252,
	"./ne.js": 252,
	"./nl": 253,
	"./nl-be": 254,
	"./nl-be.js": 254,
	"./nl.js": 253,
	"./nn": 255,
	"./nn.js": 255,
	"./pa-in": 256,
	"./pa-in.js": 256,
	"./pl": 257,
	"./pl.js": 257,
	"./pt": 258,
	"./pt-br": 259,
	"./pt-br.js": 259,
	"./pt.js": 258,
	"./ro": 260,
	"./ro.js": 260,
	"./ru": 261,
	"./ru.js": 261,
	"./sd": 262,
	"./sd.js": 262,
	"./se": 263,
	"./se.js": 263,
	"./si": 264,
	"./si.js": 264,
	"./sk": 265,
	"./sk.js": 265,
	"./sl": 266,
	"./sl.js": 266,
	"./sq": 267,
	"./sq.js": 267,
	"./sr": 268,
	"./sr-cyrl": 269,
	"./sr-cyrl.js": 269,
	"./sr.js": 268,
	"./ss": 270,
	"./ss.js": 270,
	"./sv": 271,
	"./sv.js": 271,
	"./sw": 272,
	"./sw.js": 272,
	"./ta": 273,
	"./ta.js": 273,
	"./te": 274,
	"./te.js": 274,
	"./tet": 275,
	"./tet.js": 275,
	"./tg": 276,
	"./tg.js": 276,
	"./th": 277,
	"./th.js": 277,
	"./tl-ph": 278,
	"./tl-ph.js": 278,
	"./tlh": 279,
	"./tlh.js": 279,
	"./tr": 280,
	"./tr.js": 280,
	"./tzl": 281,
	"./tzl.js": 281,
	"./tzm": 282,
	"./tzm-latn": 283,
	"./tzm-latn.js": 283,
	"./tzm.js": 282,
	"./ug-cn": 284,
	"./ug-cn.js": 284,
	"./uk": 285,
	"./uk.js": 285,
	"./ur": 286,
	"./ur.js": 286,
	"./uz": 287,
	"./uz-latn": 288,
	"./uz-latn.js": 288,
	"./uz.js": 287,
	"./vi": 289,
	"./vi.js": 289,
	"./x-pseudo": 290,
	"./x-pseudo.js": 290,
	"./yo": 291,
	"./yo.js": 291,
	"./zh-cn": 292,
	"./zh-cn.js": 292,
	"./zh-hk": 293,
	"./zh-hk.js": 293,
	"./zh-tw": 294,
	"./zh-tw.js": 294
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 393;

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app, menu) {
        this.app = app;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.logout = function () {
        //Api Token Logout 
        var _this = this;
        localStorage.clear();
        this.menu.enable(false);
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_program_my_program__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Component
 */
var TabsPage = /** @class */ (function () {
    /**
     * Creates an instance of tabs page.
     */
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__courses_courses__["a" /* CoursesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__enroll_now_enroll_now__["a" /* EnrollNowPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__personal_details_personal_details__["a" /* PersonalDetailsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__program_calender_program_calender__["a" /* ProgramCalenderPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__my_program_my_program__["a" /* MyProgramPage */];
        this.tab7Root = __WEBPACK_IMPORTED_MODULE_7__admin_admin__["a" /* AdminPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Courses" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Enroll Now" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Personal Details" tabIcon="details"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Program Calender" tabIcon="Calender"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="My Program" tabIcon="Program"></ion-tab>\n  <ion-tab [root]="tab7Root" tabTitle="Admin" tabIcon="Admin"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__program_calender_program_calender__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    AdminPage.prototype.CSVUpload = function () {
        window.location.href = 'http://127.0.0.1:8080/csv/';
    };
    AdminPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-7');
    };
    AdminPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    AdminPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AdminPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-7');
    };
    AdminPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-7');
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AdminPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content7" side="left" id="filters-7">\n    Menu\n        <ion-item>\n            <button  ion-button (click)="ProgramCalenderPage()">\n              Program Calender\n            </button>\n          </ion-item>\n        <ion-item>\n            <button  ion-button (click)="LoginPage()">\n              Logout\n            </button>\n          </ion-item>\n  </ion-menu>\n\n<ion-content padding #content7>\n    <h2>Welcome to Admin Page </h2>\n    <button  ion-button (click)="CSVUpload()">\n      Upload CSV\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_program_my_program__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Ionic page
 */
var HomePage = /** @class */ (function () {
    /**
     * Creates an instance of home page.
     * @param navCtrl
     * @param navParams
     * @param http
     * @param loading
     * @param menuCtrl
     */
    function HomePage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    /**
     * Ions view did enter
     */
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-1');
    };
    /**
     * Courses page
     */
    HomePage.prototype.CoursesPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */], data);
    };
    /**
     * Programs calender page
     */
    HomePage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    /**
     * program page
     */
    HomePage.prototype.MyProgramPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_program_my_program__["a" /* MyProgramPage */], data);
    };
    /**
     * Enrolls now page
     */
    HomePage.prototype.EnrollNowPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */], data);
    };
    /**
     * Homes page
     */
    HomePage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    /**
     * Personals details page
     */
    HomePage.prototype.PersonalDetailsPage = function () {
        var data = {
            username: this.username
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */], data);
    };
    /**
     * Logins page
     */
    HomePage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    /**
     * Shows filters
     */
    HomePage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-1');
    };
    /**
     * Hides filters
     */
    HomePage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-1');
    };
    /**
     * Ions view did load
     */
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    /**
     * Backs to welcome
     */
    HomePage.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    /**
     * Logouts home page
     */
    HomePage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    /**
     * on init
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\home\home.html"*/'<!--\n  Generated template for HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showFilters()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-menu [content]="content1" side="right" id="filters-1">\n      Menu\n      <ion-item>\n        <button  ion-button (click)="hideFilters()">\n          Home\n        </button>\n      </ion-item>\n      <ion-item>\n          <button  ion-button (click)="CoursesPage()">\n            Program Audit\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="EnrollNowPage()">\n              Enroll Now\n            </button>\n          </ion-item>\n          <ion-item>\n            <button  ion-button (click)="PersonalDetailsPage()">\n              My Details\n            </button>\n          </ion-item>\n              <ion-item>\n                  <button  ion-button (click)="MyProgramPage()">\n                    My Program\n                  </button>\n                </ion-item>\n              <ion-item>\n              <button  ion-button (click)="LoginPage()">\n                Logout\n              </button>\n            </ion-item>\n    </ion-menu>\n\n  <ion-content padding #content1>\n    <ion-item *ngFor = "let item of items">\n\n    <h2>Welcome {{item.username}}  </h2>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_courses__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MyProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProgramPage = /** @class */ (function () {
    function MyProgramPage(navCtrl, navParams, http, loading, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.menuCtrl = menuCtrl;
    }
    MyProgramPage_1 = MyProgramPage;
    MyProgramPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true, 'filters-6');
    };
    MyProgramPage.prototype.CoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__courses_courses__["a" /* CoursesPage */]);
    };
    MyProgramPage.prototype.ProgramCalenderPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__program_calender_program_calender__["a" /* ProgramCalenderPage */]);
    };
    MyProgramPage.prototype.MyProgramPage = function () {
        this.navCtrl.push(MyProgramPage_1);
    };
    MyProgramPage.prototype.EnrollNowPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enroll_now_enroll_now__["a" /* EnrollNowPage */]);
    };
    MyProgramPage.prototype.HomePage = function () {
        this.navCtrl.popToRoot();
    };
    MyProgramPage.prototype.PersonalDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__personal_details_personal_details__["a" /* PersonalDetailsPage */]);
    };
    MyProgramPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    MyProgramPage.prototype.showFilters = function () {
        this.menuCtrl.open('filters-6');
    };
    MyProgramPage.prototype.hideFilters = function () {
        this.menuCtrl.close('filters-6');
    };
    MyProgramPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyProgramPage');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            username: this.username,
        };
        var loader = this.loading.create({
            content: 'Processing please wait…',
        });
        loader.present().then(function () {
            _this.http.post('http://127.0.0.1:8080/ionicphp/fetch_data_programs.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                _this.var_x = _this.items.map(function (item) { return item.course_code; });
                _this.var_y = _this.items.map(function (item) { return item.course_code; });
                _this.var_z = _this.items.map(function (item) { return item.prereq; });
                _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                    type: 'doughnut',
                    data: {
                        labels: _this.var_x,
                        datasets: [{
                                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                                backgroundColor: [
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    'rgb(255,0,0)',
                                    "rgb(255,0,0)",
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(0,0,255)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgb(255,165,0)',
                                    'rgba(0,100,0)',
                                    'rgba(0,100,0)',
                                    'rgba(0,100,0)',
                                ],
                                hoverBackgroundColor: [
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "rgb(255,0,0)",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "#36A2EB",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgb(255,165,0)",
                                    "rgba(0,100,0)",
                                    "rgb(0,100,0)",
                                    "rgba(0,100,0)",
                                ]
                            }]
                    }
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], MyProgramPage.prototype, "doughnutCanvas", void 0);
    MyProgramPage = MyProgramPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-program',template:/*ion-inline-start:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\my-program\my-program.html"*/'<ion-header>\n\n    <ion-navbar>\n      <img src="assets/imgs/USP_logo.jpg" width="40px" style="display:inline-block" height="80px" width="150px"/>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="showFilters()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n    <ion-menu [content]="content6" side="right" id="filters-6">\n        Menu\n        <ion-item>\n          <button  ion-button (click)="hideFilters()">\n            Home\n          </button>\n        </ion-item>\n        <ion-item>\n            <button  ion-button (click)="CoursesPage()">\n              Program Audit\n            </button>\n          </ion-item>\n          <ion-item>\n              <button  ion-button (click)="EnrollNowPage()">\n                Enroll Now\n              </button>\n            </ion-item>\n            <ion-item>\n              <button  ion-button (click)="PersonalDetailsPage()">\n                My Details\n              </button>\n            </ion-item>\n                <ion-item>\n                    <button  ion-button (click)="MyProgramPage()">\n                      My Program\n                    </button>\n                  </ion-item>\n                <ion-item>\n                <button  ion-button (click)="LoginPage()">\n                  Logout\n                </button>\n              </ion-item>\n      </ion-menu>\n  \n    <ion-content padding #content6 >\n      <h2>Welcome to My Program Guide</h2>\n        <canvas height="500" #doughnutCanvas ></canvas>       \n    \n    </ion-content>'/*ion-inline-end:"C:\Users\anish\Desktop\USP_ES-v7\src\pages\my-program\my-program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyProgramPage);
    return MyProgramPage;
    var MyProgramPage_1;
}());

//# sourceMappingURL=my-program.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map