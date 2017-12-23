webpackJsonp([2,5],{

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 186;


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(209);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(417),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, ga) {
        var _this = this;
        this.router = router;
        this.ga = ga;
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.onNavigationEnd(evt);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onNavigationEnd = function (evt) {
        this.ga.sendPageView(evt.urlAfterRedirects);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(418),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formspree_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getform_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_analytics_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_vacancy_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__careers_benefits_careers_benefits_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__careers_opportunities_careers_opportunities_component__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__careers_opportunity_careers_opportunity_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gallery_hero_gallery_hero_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__header_header_component__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';













var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_16__gallery_hero_gallery_hero_component__["a" /* GalleryHeroComponent */]
    },
    {
        path: 'benefits',
        component: __WEBPACK_IMPORTED_MODULE_11__careers_benefits_careers_benefits_component__["a" /* CareersBenefitsComponent */]
    },
    {
        path: 'careers',
        component: __WEBPACK_IMPORTED_MODULE_12__careers_opportunities_careers_opportunities_component__["a" /* CareersOpportunitiesComponent */]
    },
    {
        path: 'careers/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__careers_opportunity_careers_opportunity_component__["a" /* CareersOpportunityComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__gallery_hero_gallery_hero_component__["a" /* GalleryHeroComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__careers_opportunity_careers_opportunity_component__["a" /* CareersOpportunityComponent */],
            __WEBPACK_IMPORTED_MODULE_11__careers_benefits_careers_benefits_component__["a" /* CareersBenefitsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__careers_opportunities_careers_opportunities_component__["a" /* CareersOpportunitiesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            // InMemoryWebApiModule.forRoot(InMemoryDataService, {
            //   passThruUnknownUrl: true
            // }),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes, {
                useHash: true
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__getform_service__["a" /* GetformService */],
            __WEBPACK_IMPORTED_MODULE_5__formspree_service__["a" /* FormspreeService */],
            __WEBPACK_IMPORTED_MODULE_7__google_analytics_service__["a" /* GoogleAnalyticsService */],
            __WEBPACK_IMPORTED_MODULE_8__job_vacancy_service__["a" /* JobVacancyService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersBenefitsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareersBenefitsComponent = (function () {
    function CareersBenefitsComponent() {
    }
    CareersBenefitsComponent.prototype.ngOnInit = function () {
    };
    return CareersBenefitsComponent;
}());
CareersBenefitsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-careers-benefits',
        template: __webpack_require__(419),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [])
], CareersBenefitsComponent);

//# sourceMappingURL=careers-benefits.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_vacancy_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersOpportunitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CareersOpportunitiesComponent = (function () {
    function CareersOpportunitiesComponent(jobVacancyService, router) {
        this.jobVacancyService = jobVacancyService;
        this.router = router;
        this.vacancies = [];
    }
    CareersOpportunitiesComponent.prototype.ngOnInit = function () {
        this.getVacancies();
    };
    CareersOpportunitiesComponent.prototype.getVacancies = function () {
        var _this = this;
        this.jobVacancyService.getVacancies().then(function (vacancies) {
            vacancies.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            });
            _this.vacancies = vacancies;
        });
    };
    return CareersOpportunitiesComponent;
}());
CareersOpportunitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-careers-opportunities',
        template: __webpack_require__(420),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__job_vacancy_service__["a" /* JobVacancyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__job_vacancy_service__["a" /* JobVacancyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CareersOpportunitiesComponent);

var _a, _b;
//# sourceMappingURL=careers-opportunities.component.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getform_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formspree_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__google_analytics_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_vacancy_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersOpportunityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var CareersOpportunityComponent = (function () {
    function CareersOpportunityComponent(getform, formspree, ga, jobVacancyService, route, location) {
        this.getform = getform;
        this.formspree = formspree;
        this.ga = ga;
        this.jobVacancyService = jobVacancyService;
        this.route = route;
        this.location = location;
        this.window = window; // for embedding the url to the vacancy
        this.referFromName = '';
        this.hasFromNameErrors = false;
        this.referFromEmail = '';
        this.hasFromEmailErrors = false;
        this.referToName = '';
        this.hasToNameErrors = false;
        this.referToEmail = '';
        this.hasToEmailErrors = false;
        this.isReferring = false;
        this.applyName = '';
        this.hasApplyNameErrors = false;
        this.applyEmail = '';
        this.hasApplyEmailErrors = false;
        this.applyResume = null;
        this.hasApplyResumeErrors = true;
        this.isApplying = false;
    }
    CareersOpportunityComponent.prototype.ngOnInit = function () {
        this.getVacancy();
    };
    CareersOpportunityComponent.prototype.getVacancy = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.jobVacancyService.getVacancy(params['id']);
        }).subscribe(function (vacancy) {
            return _this.vacancy = vacancy;
        });
    };
    CareersOpportunityComponent.prototype.goBack = function () {
        this.location.back();
    };
    CareersOpportunityComponent.prototype.print = function () {
        this.ga.sendInteractiveEvent('Job Vacancy', 'print', this.vacancy.id);
        window.print();
    };
    CareersOpportunityComponent.prototype.email = function () {
        this.ga.sendInteractiveEvent('Job Vacancy', 'email', this.vacancy.id);
        var url = "mailto:?subject=[TTG Solutions, Inc.] " + this.vacancy.title;
        url = url + "&body=" + this.vacancy.title + "%0D%0A%0D%0A" + window.location.href;
        window.location.href = url;
    };
    CareersOpportunityComponent.prototype.referStart = function () {
        this.isReferring = true;
    };
    CareersOpportunityComponent.prototype.referFinish = function () {
        var _this = this;
        if (!this.referValidate()) {
            return;
        }
        this.getform.send(__WEBPACK_IMPORTED_MODULE_4__getform_service__["a" /* GetformService */].REFER_FORM_ID, {
            fromName: this.referFromName,
            fromEmail: this.referFromEmail,
            toName: this.referToName,
            toEmail: this.referToEmail,
            jobId: this.vacancy.id,
            jobTitle: this.vacancy.title,
            jobLocation: this.vacancy.location
        }).then(function (response) { }).catch(function (reason) {
            // getform.org doesn't allow custom redirects
            // and xhr does not allow redirect (because CORS)
            // so this will always throw an exception
            // and there isn't enough detail in the exception
            // to detect this single case,
            // so we must treat every error like a successful submission
            _this.ga.sendInteractiveEvent('Job Vacancy', 'refer', _this.vacancy.id);
            _this.referClear(true);
        });
    };
    CareersOpportunityComponent.prototype.referClear = function (close) {
        if (close === void 0) { close = false; }
        this.referFromName = this.referFromEmail = this.referToName = this.referToEmail = '';
        this.hasFromNameErrors = this.hasFromEmailErrors = this.hasToNameErrors = this.hasToEmailErrors = false;
        if (close) {
            this.isReferring = false;
        }
    };
    CareersOpportunityComponent.prototype.referValidate = function () {
        this.hasFromNameErrors = this.referFromName.length === 0;
        this.hasFromEmailErrors = !this.validateEmail(this.referFromEmail);
        this.hasToNameErrors = this.referToName.length === 0;
        this.hasToEmailErrors = !this.validateEmail(this.referToEmail);
        return !(this.hasFromNameErrors || this.hasFromEmailErrors || this.hasToNameErrors || this.hasToEmailErrors);
    };
    CareersOpportunityComponent.prototype.applyStart = function () {
        this.isApplying = true;
    };
    CareersOpportunityComponent.prototype.applyFinish = function () {
        var _this = this;
        if (!this.applyValidate()) {
            return;
        }
        this.getform.send(__WEBPACK_IMPORTED_MODULE_4__getform_service__["a" /* GetformService */].APPLY_FORM_ID, {
            name: this.applyName,
            email: this.applyEmail,
            file: this.applyResume,
            jobId: this.vacancy.id,
            jobTitle: this.vacancy.title,
            jobLocation: this.vacancy.location
        }, true).then(function (response) { }).catch(function (reason) {
            // getform.org doesn't allow custom redirects
            // and xhr does not allow redirect (because CORS)
            // so this will always throw an exception
            // and there isn't enough detail in the exception
            // to detect this single case,
            // so we must treat every error like a successful submission
            _this.ga.sendInteractiveEvent('Job Vacancy', 'apply', _this.vacancy.id);
            _this.applyClear(true);
        });
    };
    CareersOpportunityComponent.prototype.applyClear = function (close) {
        if (close === void 0) { close = false; }
        this.hasApplyNameErrors = this.hasApplyEmailErrors = false;
        this.hasApplyResumeErrors = true;
        if (close) {
            this.isApplying = false;
        }
    };
    CareersOpportunityComponent.prototype.applyValidate = function () {
        this.hasApplyNameErrors = this.applyName.length === 0;
        this.hasApplyEmailErrors = !this.validateEmail(this.applyEmail);
        return !(this.hasApplyNameErrors || this.hasApplyEmailErrors || this.hasApplyResumeErrors);
    };
    CareersOpportunityComponent.prototype.onApplyFile = function (event) {
        console.log(event);
        var files = event.srcElement.files;
        if (!files || files.length == 0) {
            this.hasApplyResumeErrors = true;
        }
        else {
            this.applyResume = files[0];
            this.hasApplyResumeErrors = false;
        }
    };
    CareersOpportunityComponent.prototype.validateEmail = function (email) {
        if (email === void 0) { email = ''; }
        return email.length > 5 && EMAIL_REGEXP.test(email);
    };
    return CareersOpportunityComponent;
}());
CareersOpportunityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-careers-opportunity',
        template: __webpack_require__(421),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__getform_service__["a" /* GetformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__getform_service__["a" /* GetformService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__formspree_service__["a" /* FormspreeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__formspree_service__["a" /* FormspreeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__job_vacancy_service__["a" /* JobVacancyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__job_vacancy_service__["a" /* JobVacancyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _f || Object])
], CareersOpportunityComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=careers-opportunity.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getform_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var ContactComponent = (function () {
    function ContactComponent(ga, getform) {
        this.ga = ga;
        this.getform = getform;
        this.name = '';
        this.hasNameErrors = false;
        this.email = '';
        this.hasEmailErrors = false;
        this.subject = '';
        this.hasSubjectErrors = false;
        this.message = '';
        this.messageMax = 450;
        this.messageRemaining = 450;
        this.busy = false;
        this.submitted = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        if (!this.validate()) {
            return;
        }
        this.busy = true;
        this.getform.send(__WEBPACK_IMPORTED_MODULE_1__getform_service__["a" /* GetformService */].CONTACT_FORM_ID, {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message
        }).then(function (response) {
            _this.busy = false;
            _this.submitted = true;
            _this.clear();
        })
            .catch(function (error) {
            _this.ga.sendInteractiveEvent('Contact', 'error', error.message);
            _this.busy = false;
        });
    };
    ContactComponent.prototype.validate = function () {
        this.hasNameErrors = this.name.length === 0;
        this.hasEmailErrors = !this.validateEmail(this.email);
        this.hasSubjectErrors = this.subject.length === 0;
        return !(this.hasNameErrors || this.hasEmailErrors || this.hasSubjectErrors);
    };
    ContactComponent.prototype.clear = function () {
        this.name = this.email = this.subject = this.message = '';
        this.hasNameErrors = this.hasEmailErrors = this.hasSubjectErrors = false;
    };
    ContactComponent.prototype.onMessageTyping = function () {
        this.messageRemaining = this.messageMax - this.message.length;
    };
    ContactComponent.prototype.validateEmail = function (email) {
        return email.length > 5 && EMAIL_REGEXP.test(email);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(422),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__getform_service__["a" /* GetformService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__getform_service__["a" /* GetformService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.currentYear = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(423),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryHeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryHeroComponent = (function () {
    function GalleryHeroComponent() {
    }
    GalleryHeroComponent.prototype.ngOnInit = function () {
    };
    return GalleryHeroComponent;
}());
GalleryHeroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gallery-hero',
        template: __webpack_require__(424),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [])
], GalleryHeroComponent);

//# sourceMappingURL=gallery-hero.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderComponent = (function () {
    function HeaderComponent(isHome, router) {
        this.isHome = isHome;
        this.router = router;
        this.isScrolledTop = true;
        this.isMenuShowing = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (value) {
            if (value instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.hideMenu();
            }
        });
    };
    HeaderComponent.prototype.hideMenu = function () {
        this.isMenuShowing = false;
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isMenuShowing = !this.isMenuShowing;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(425),
        styles: [__webpack_require__(375)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Attribute */])('isHome')),
    __metadata("design:paramtypes", [Boolean, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".icon {\n  background-color: #f5f5f5;\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  margin: 1.5rem 0;\n  transition: all 250ms linear;\n}\n\n.icon:hover {\n  background-color: #E84855 !important;\n  color: white;\n}\n\n@media print {\n  .icon {\n    height: auto;\n    width: auto;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".content h1 {\n  font-family: \"Georgia\", serif;\n  font-weight: bold;\n  font-style: oblique;\n  font-size: 1.5rem;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".animate-height {\n  max-height: 2rem;\n  transition: max-height 2.5s ease-in;\n  overflow: hidden;\n}\n\n.animate-height.expanded {\n  max-height: 1000vh;\n}\n\ndiv.table {\n  display: table;\n  font-size: 1rem;\n}\n\ndiv.table > .body {\n  display: table-row-group;\n}\n\ndiv.table > .body > .row {\n  display: table-row;\n}\n\ndiv.table > .body > .row > * {\n  display: table-cell;\n  padding: 0.25em 0.5em;\n}\n\ndiv.table > .body > .row + .row > * {\n  border-top: 1px solid #dbdbdb;\n}\n\ndiv.table > .body > .row > *:last-child {\n  min-width: 95px;\n}\n\n.table > .body > .row:hover {\n  cursor: default;\n}\n\n.table > .body > .row:hover,\n.table > .body > .row:hover strong {\n  background: transparent;\n  color: #E84855;\n  cursor: pointer;\n  transition: color 80ms linear;\n}\n\n.tags .tag {\n  margin-left: 0.75em;\n}\n\n@media screen and (max-width: 768px) {\n  .is-mobile-hidden,\n  .is-mobile-hidden > * {\n    display: none;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".root {\n  max-width: 8in;\n  margin: 0 auto;\n}\n\n.animate-height {\n  max-height: 0px;\n  transition: max-height 2.5s ease-in;\n  overflow: hidden;\n}\n\n.animate-height.expanded {\n  max-height: 1000vh;\n}\n\n.content .level {\n  margin-bottom: 0;\n}\n\n.level-item > a + a {\n  margin-left: 0.5rem;\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2, \nh3,\nh4,\nh5, \nh6 {\n  font-family: Raleway, sans-serif !important;\n}\n\nul {\n  margin-bottom: 1em;\n}\n\n.input:focus, .input.is-focused, .input:active, .input.is-active, .textarea:focus, .textarea.is-focused, .textarea:active, .textarea.is-active {\n  border-color: #959595;\n}\n\n@media screen and (max-width: 768px) {\n  .tags {\n    text-align: center;\n  }\n}\n\n.tags {\n  margin: 0.75em 0 !important;\n}\n\n.tags + h3 {\n  margin-top: 0.75em;\n}\n\n.tags .tag + .tag {\n  margin-left: 0.75em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".contact-form {\n  max-width: 6.5in;\n  margin: 0 auto 1.5rem auto;\n  position: relative;\n}\n\n.hidden {\n  display: none;\n}\n\n.button {\n  text-transform: uppercase;\n  font-family: Raleway, sans-serif !important;\n  font-size: 1rem;\n  font-weight: bold;\n  letter-spacing: 0.1rem;\n}\n\n.button.is-link {\n  text-decoration: none;\n}\n\n.input:focus, .input.is-focused, .input:active, .input.is-active, .textarea:focus, .textarea.is-focused, .textarea:active, .textarea.is-active {\n  border-color: #959595;\n}\n\n.busy {\n  position: absolute;\n  top: 0; right: 0; bottom: 0; left: 0;\n  background-color: rgba(255, 255, 255, 0.75);\n  z-index: 99;\n  text-align: center;\n}\n\n.busy .icon {\n  margin: calc(25% - 1.5rem) 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".content.brand {\n  font-size: 1.25rem;\n}\n\n.content.brand img {\n  display: inline-block;\n}\n\n@media print {\n\n  /*.columns {\n    margin: 0 auto;\n  }*/\n\n  p.content {\n    font-size: 0.8em;\n    opacity: 0.75;\n    text-align: center;\n    display: block;\n    margin: 0;\n    /*width: 50%;*/\n    /*padding-left: 25%;*/\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".hero {\n  background-size: cover;\n  background-position: center center;\n}\n\n.hero .title, .hero .title > * {\n  font-weight: normal !important;\n}\n\n.hero .crossfade {\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n}\n\n.hero .crossfade > div {\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background-size: cover;\n  background-position: center center;\n  color: transparent;\n  opacity: 0;\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-animation: imageAnimation 18s linear infinite 0s;\n  animation: imageAnimation 18s linear infinite 0s; \n}\n\n.hero .crossfade > div:nth-child(2)  { \n  -webkit-animation-delay: 6s;\n  animation-delay: 6s; \n}\n\n.hero .crossfade > div:nth-child(3) { \n  -webkit-animation-delay: 12s;\n  animation-delay: 12s; \n}\n\n@-webkit-keyframes imageAnimation { \n  0% { opacity: 0; }\n  17% { opacity: 1; }\n  25% { opacity: 1; }\n  92% { opacity: 0; }\n  100% { opacity: 0; }\n}\n\n@keyframes imageAnimation { \n  0% { opacity: 0; }\n  17% { opacity: 1; }\n  25% { opacity: 1; }\n  92% { opacity: 0; }\n  100% { opacity: 0; }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".nav.is-home {\n  background-color: transparent;\n  position: fixed;\n  top: 0; right: 0; left: 0;\n}\n\n.nav.is-home .brand {\n  color: white;\n}\n\n.nav.is-home a.nav-item:hover {\n  color: white;\n}\n\n.nav {\n  transition: all 250ms linear;\n}\n\n.brand {\n  font-size: 1.5rem;\n  font-family: 'Montserrat', sans-serif !important;\n  text-transform: uppercase;\n  color: #333;\n}\n\n.nav.is-home .nav-toggle span {\n  background-color: #aaa;\n}\n\n.nav.is-home .nav-toggle:hover {\n  background: inherit;\n}\n\n.nav.is-home .nav-menu.is-active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.nav.is-home .nav-menu.is-active a.nav-item {\n  color: #333;\n}\n\n@media print {\n  .nav-right {\n    display: none;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight has-text-centered\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        About Us\n      </h1>\n      <h2 class=\"subtitle\">\n        More than capable to meet your needs\n      </h2>\n      <div class=\"columns\">\n        <div class=\"column is-one-quarter\"></div>\n        <div class=\"column is-half\">\n          <p class=\"content\">\n            TTG Solutions, Inc. is an Innovative, Agile Software Development Solution provider. We are a Service-Disabled \n            Veteran-Owned Small Business (SDVOSB) founded in 2015, headquartered in Warrenton, Virginia.\n          </p>\n        </div>\n        <div class=\"column is-one-quarter\"></div>\n      </div>\n      <div class=\"columns\">\n        <div class=\"column is-one-quarter\">\n          <div class=\"icon is-large\">\n            <i class=\"fa flaticon-paper40\"></i>\n          </div>\n          <h3 class=\"title is-4\">Geospatial</h3>\n          <p class=\"content\">\n            We have the background and skills to visualize your data in a way that makes it second-nature to discover the \n            &lsquo;who,&rsquo; &lsquo;what,&rsquo; and &lsquo;why,&rsquo; from the &lsquo;where,&rsquo; and &lsquo;when.&rsquo;\n          </p>\n        </div>\n        <div class=\"column is-one-quarter\">\n          <div class=\"icon is-large\">\n            <i class=\"fa flaticon-stats54\"></i>\n          </div>\n          <h3 class=\"title is-4\">Analysis</h3>\n          <p class=\"content\">\n            Let our staff augment your analytical capabilities using our combined experience of over 40 years working within \n            the Department of Defense and Intelligence Community.\n          </p>\n        </div>\n        <div class=\"column is-one-quarter\">\n          <div class=\"icon is-large\">\n            <i class=\"fa flaticon-scientific3\"></i>\n          </div>\n          <h3 class=\"title is-4\">Development</h3>\n          <p class=\"content\">\n            The engineering team specializes in providing rich and immersive user experiences with the latest developments \n            in maintainable technology stacks.\n          </p>\n        </div>\n        <div class=\"column is-one-quarter\">\n          <div class=\"icon is-large\">\n            <i class=\"fa flaticon-profile5\"></i>\n          </div>\n          <h3 class=\"title is-4\">Services</h3>\n          <p class=\"content\">\n            Knowledge of the customer’s environment, technology, and community processes enables TTG Solutions to provide robust best-value solutions that are specific to your needs.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight has-text-centered\">\n  <div class=\"hero-head\">\n    <app-header></app-header>\n  </div>\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Employee Benefits\n      </h1>\n      <h2 class=\"subtitle\">\n        Investing in our most valuable assets\n      </h2>\n      <div class=\"columns\">\n        <div class=\"column is-2 no-print\"></div>\n        <div class=\"column\">\n          <div class=\"content has-text-justified\">\n            <h1>Leading by Example</h1>\n            <p>\n              At <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span>, Inc.</span>, the management team isn't &ldquo;tucked away&rdquo; in\n              an office, riding on the tails of your efforts. Our entire management team is composed of\n              technical staff who also work at the customer site, producing high-quality deliverables and services.\n            </p>\n            <h1>Solving Tomorrow's Problems, Today</h1>\n            <p>\n              Our work in the IC is some of the most rewarding work you may ever do. Using uniquely-tailored approaches\n              to system design and software development, we solve our customer's problems, both big and small, using\n              the best of today's technology in ways that prepare analysts and decision makers for tomrrow.\n            </p>\n            <h1>Flexible Work Schedule</h1>\n            <p>\n              As experienced professionals, we know that punching a clock from 9 to 5 isn't the most effective\n              way to produce results. Our customers are aware of (and respect) this, too. We don't mandate \n              &ldquo;core hours&rdquo; for this exact reason. Work when you are most productive (as customer \n              engagements permit), and manage your own time as just that &mdash; yours; maintain a healthy\n              work-life balance, and bring your professional &ldquo;A-game&rdquo; where it is needed.\n            </p>\n            <h1>Equipped for Success</h1>\n            <p>\n              We offer a wide array of comprehensive benefits, including:\n            </p>\n            <ul>\n              <li>Health Care Plan (PPO) with optional Health Savings Account (HSA)</li>\n              <li>Dental Plan</li>\n              <li>Vision Plan</li>\n              <li>Life Insurance</li>\n              <li>Short- and Long-term Disability Insurance</li>\n              <li>Accidental Death &amp; Dismemberment (AD&amp;D) Insurance</li>\n              <li>Cell phone &amp; Internet Stipend</li>\n            </ul>\n            <h1>Retirement &amp; Profit Sharing Plan</h1>\n            <p>\n              We believe in rewarding quality work and sharing the success of the company with\n              those responsible. In addition to your individual 401k contributions, we contribute \n              a generous percentage of your salaried income to an non-matching profit sharing plan,\n              paid annually.\n            </p>\n            <h1>Section 125 Cafeteria Plan</h1>\n            <p>\n              In addition to profit sharing, we contribute a percentage of your salary to an\n              individual benefit account (IBA). This fully funds your medical, dental, vision, \n              and other insurance expenses. At the end of the year, unused funds are disbursed \n              to you as a additional income, or an unmatched 401k employee contribution.\n            </p>\n          </div>\n        </div>\n        <div class=\"column is-2 no-print\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight has-text-centered\">\n  <div class=\"hero-head\">\n    <app-header></app-header>\n  </div>\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Career Opportunities\n      </h1>\n      <h2 class=\"subtitle\">\n        Join our mission and enhance your career\n      </h2>\n      <div class=\"columns has-text-centered\">\n        <div class=\"column is-2 no-print\"></div>\n        <div class=\"column content\">\n          <p>\n            We are currently seeking candidates for the following positions:\n          </p>\n          <div class=\"animate-height\" [class.expanded]=\"vacancies.length > 0\">\n            <div class=\"table has-text-left\" style=\"display: table;\">\n              <div class=\"body\">\n                <div class=\"row\" *ngIf=\"vacancies.length == 0\">\n                  <span>\n                    <span class=\"icon is-small\">\n                      <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n                    </span>\n                    <small>&nbsp;Loading...</small>\n                  </span>\n                  <span></span>\n                </div>\n                <div class=\"row\" *ngFor=\"let vacancy of vacancies\" routerLink=\"./{{vacancy.id}}\">\n                  <span><small><strong>{{vacancy.title}}</strong></small></span>\n                  <span class=\"is-mobile-hidden\">\n                    <span class=\"tags\" *ngIf=\"vacancy.focus && vacancy.focus.length > 0\">\n                      <span class=\"tag\" *ngFor=\"let item of vacancy.focus\">{{item}}</span>\n                    </span>\n                  </span>\n                  <span class=\"is-mobile-hidden\"><small>{{vacancy.level}}</small></span>\n                  <span class=\"has-text-right\"><small>{{vacancy.location}}</small></span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <p class=\"no-print\">\n            Don't see what you're looking for?<br>\n            Submit your résumé\n            <a class=\"out-link\" href=\"mailto:careers@ttg-solutions.com?subject=Please%20consider%20the%20attached%20résumé\">\n              via email\n            </a>\n            for future consideration.\n          </p>\n        </div>\n        <div class=\"column is-2 no-print\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight has-text-centered\">\n  <div class=\"hero-head\">\n    <app-header></app-header>\n  </div>\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <div class=\"root\">\n        <div class=\"level no-print\">\n          <div class=\"level-left\">\n            <span class=\"level-item\">\n              <a (click)=\"goBack()\" title=\"Back\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-arrow-left\"></i>\n                </span>\n              </a>\n              <a (click)=\"print()\" title=\"Print\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-print\"></i>\n                </span>\n              </a>\n              <a (click)=\"email()\" title=\"Email\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-envelope-o\"></i>\n                </span>\n              </a>\n            </span>\n          </div>\n          <div class=\"level-right\">\n            <a class=\"level-item button is-link\" (click)=\"referStart()\">\n              <span class=\"ttg-red\">Refer this Position</span>\n            </a>\n            <a class=\"level-item button is-primary\" (click)=\"applyStart()\">\n              <span>Apply for this Position</span>\n            </a>\n          </div>\n        </div>\n        <hr class=\"no-print\">\n        <div class=\"content has-text-justified animate-height\" [class.expanded]=\"!!vacancy\">\n          <div *ngIf=\"vacancy\">\n            <h1 class=\"has-text-centered\">{{vacancy.title}} - {{vacancy.level}}</h1>\n            <div class=\"level\">\n              <div class=\"level-left\">\n                <span class=\"level-item\"><small>TTG Vacancy ID: {{vacancy.id}}</small></span>\n              </div>\n              <div class=\"level-right\">\n                <span class=\"level-item\"><small>Location: {{vacancy.location}}</small></span>\n              </div>\n            </div>\n            <p class=\"tags\">\n              <span *ngIf=\"vacancy.focus && vacancy.focus.length > 0\">\n                <span class=\"tag\" *ngFor=\"let item of vacancy.focus\">{{item}}</span>\n              </span>\n            </p>\n            <h3>Overview</h3>\n            <p>\n              <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span>, Inc.</span> is looking for a {{vacancy.title}} to join our\n              team in {{vacancy.location}}. If you\n              are interested in learning more about this role and its associated compensation plan, please apply online or\n              <a class=\"ttg-red\" (click)=\"email()\">send us an email</a>.\n            </p>\n            <div *ngIf=\"vacancy.responsibilities && vacancy.responsibilities.length > 0\">\n              <h3>Responsibilities</h3>\n              <ul>\n                <li *ngFor=\"let item of vacancy.responsibilities\" [innerHTML]=\"item\"></li>\n              </ul>\n            </div>\n            <div *ngIf=\"vacancy.qualifications && vacancy.qualifications.length > 0\">\n              <h3>Qualifications</h3>\n              <ul>\n                <li *ngFor=\"let item of vacancy.qualifications\" [innerHTML]=\"item\"></li>\n              </ul>\n            </div>\n            <div *ngIf=\"vacancy.requirements && vacancy.requirements.length > 0\">\n              <h3>Requirements</h3>\n              <ul>\n                <li *ngFor=\"let item of vacancy.requirements\" [innerHTML]=\"item\"></li>\n              </ul>\n            </div>\n            <p>\n              <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span>, Inc.</span> is a small tech company that directly supports the IC. Our management team\n              works in the same customer space providing solutions that our customers appreciate. When you come\n              onboard, you're joining a team of developers who work together to ensure that you have all the resources\n              necessary to be successful. Our compensation plan is based on similar &ldquo;boutique&rdquo; companies,\n              being composed of a company-paid Profit Sharing Plan for retirement purposes, and a Section 125\n              Cafeteria Plan covering selected medical, dental, life, short &amp; long-term disability insurance,\n              vacation, and sick leave. Both plans are funded up to 25% annual base salary. Unused Cafeteria Plan funds\n              are provided directly to the employee for use as additional salary or an unmatched 401k employee contribution.\n            </p>\n            <p>\n              <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span> Inc.</span> is an Equal Opportunity Employer.\n            </p>\n            <p class=\"print-only\">\n              careers@ttg-solutions.com\n            </p>\n            <p class=\"print-only\">\n              {{window.location.href}}\n            </p>\n          </div>\n        </div>\n        <hr class=\"no-print\">\n        <div class=\"level no-print\">\n          <div class=\"level-left\">\n            <span class=\"level-item\">\n              <a (click)=\"goBack()\" title=\"Back\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-arrow-left\"></i>\n                </span>\n              </a>\n              <a (click)=\"print()\" title=\"Print\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-print\"></i>\n                </span>\n              </a>\n              <a (click)=\"email()\" title=\"Email\">\n                <span class=\"icon ttg-red\">\n                  <i class=\"fa fa-envelope-o\"></i>\n                </span>\n              </a>\n            </span>\n          </div>\n          <div class=\"level-right\">\n            <a class=\"level-item button is-link\" (click)=\"referStart()\">\n              <span class=\"ttg-red\">Refer this Position</span>\n            </a>\n            <a class=\"level-item button is-primary\" (click)=\"applyStart()\">\n              <span>Apply for this Position</span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <!-- referral form -->\n      <div class=\"modal has-text-left no-print\" [class.is-active]=\"isReferring\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-content\">\n          <div class=\"refer-form box\">\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\"></div>\n              <div class=\"field-body content\">\n                <h3>Refer this Position</h3>\n              </div>\n            </div>\n            <!-- name -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\">\n                <label class=\"label\">From</label>\n              </div>\n              <div class=\"field-body\">\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasFromNameErrors\"\n                            type=\"text\"\n                            [(ngModel)]=\"referFromName\"\n                            placeholder=\"Name\"\n                            (blur)=\"hasFromNameErrors = referFromName.length == 0\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-user\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasFromNameErrors\">Name is required</p>\n                </div>\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasFromEmailErrors\"\n                            type=\"email\"\n                            [(ngModel)]=\"referFromEmail\"\n                            placeholder=\"Email\"\n                            [value]=\"email\"\n                            (blur)=\"hasFromEmailErrors = !validateEmail(referFromEmail)\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-envelope\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasFromEmailErrors\">Valid email is required</p>\n                </div>\n              </div>\n            </div>\n            <!-- name -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\">\n                <label class=\"label\">To</label>\n              </div>\n              <div class=\"field-body\">\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasToNameErrors\"\n                            type=\"text\"\n                            [(ngModel)]=\"referToName\"\n                            placeholder=\"Name\"\n                            (blur)=\"hasToNameErrors = referToName.length == 0\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-user\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasToNameErrors\">Name is required</p>\n                </div>\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasToEmailErrors\"\n                            type=\"email\"\n                            [(ngModel)]=\"referToEmail\"\n                            placeholder=\"Email\"\n                            [value]=\"email\"\n                            (blur)=\"hasToEmailErrors = !validateEmail(referToEmail)\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-envelope\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasToEmailErrors\">Valid email is required</p>\n                </div>\n              </div>\n            </div>\n            <!-- submit/clear -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\"></div>\n              <div class=\"field-body\">\n                <p class=\"control\">\n                  <button class=\"button is-primary\"\n                          [disabled]=\"hasFromNameErrors || hasFromEmailErrors || hasToNameErrors || hasToEmailErrors\"\n                          (click)=\"referFinish()\">Refer</button>\n                  <button class=\"button is-link ttg-red\" (click)=\"referClear(true)\">Cancel</button>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- apply form -->\n      <div class=\"modal has-text-left no-print\" [class.is-active]=\"isApplying\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-content\">\n          <div class=\"apply-form box\">\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\"></div>\n              <div class=\"field-body content\">\n                <h3>Apply for this Position</h3>\n              </div>\n            </div>\n            <!-- name -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\">\n                <label class=\"label\">Applicant</label>\n              </div>\n              <div class=\"field-body\">\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasApplyNameErrors\"\n                            type=\"text\"\n                            [(ngModel)]=\"applyName\"\n                            placeholder=\"Name\"\n                            (blur)=\"hasApplyNameErrors = applyName.length == 0\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-user\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasApplyNameErrors\">Name is required</p>\n                </div>\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasApplyEmailErrors\"\n                            type=\"email\"\n                            [(ngModel)]=\"applyEmail\"\n                            placeholder=\"Email\"\n                            [value]=\"email\"\n                            (blur)=\"hasApplyEmailErrors = !validateEmail(applyEmail)\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-envelope\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasApplyEmailErrors\">Valid email is required</p>\n                </div>\n              </div>\n            </div>\n            <!-- resume -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\">\n                <label class=\"label\">Résumé</label>\n              </div>\n              <div class=\"field-body\">\n                <div class=\"field\">\n                  <p class=\"control is-expanded has-icons-left\">\n                    <input class=\"input\"\n                            [class.is-danger]=\"hasFromNameErrors\"\n                            type=\"file\"\n                            (change)=\"onApplyFile($event)\">\n                    <span class=\"icon is-small is-left\">\n                      <i class=\"fa fa-file\"></i>\n                    </span>\n                  </p>\n                  <p class=\"help is-danger\" [class.hidden]=\"!hasFromNameErrors\">Name is required</p>\n                </div>\n              </div>\n            </div>\n\n            <!-- submit/clear -->\n            <div class=\"field is-horizontal\">\n              <div class=\"field-label is-normal\"></div>\n              <div class=\"field-body\">\n                <p class=\"control\">\n                  <button class=\"button is-primary\"\n                          [disabled]=\"hasApplyNameErrors || hasApplyEmailErrors || hasApplyResumeErrors\"\n                          (click)=\"applyFinish()\">Apply</button>\n                  <button class=\"button is-link ttg-red\" (click)=\"applyClear(true)\">Cancel</button>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight has-text-centered\">\n  <div class=\"hero-head\">\n    <app-header></app-header>\n  </div>\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Contact Us\n      </h1>\n      <h2 class=\"subtitle\">\n        See what we can do together\n      </h2>\n      <div class=\"box contact-form has-text-left\">\n        <div class=\"busy\" [class.hidden]=\"!busy\">\n          <span class=\"icon is-large ttg-red\">\n            <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n          </span>\n        </div>\n        <article class=\"message is-success\" [class.hidden]=\"!submitted\">\n          <div class=\"message-body has-text-centered\">\n            Thank you! We'll be in touch shortly.\n          </div>\n        </article>\n        <!-- name -->\n        <div class=\"field is-horizontal\">\n          <div class=\"field-label is-normal\">\n            <label class=\"label\">From</label>\n          </div>\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <p class=\"control is-expanded has-icons-left\">\n                <input class=\"input\" \n                       [class.is-danger]=\"hasNameErrors\" \n                       type=\"text\" \n                       [(ngModel)]=\"name\" \n                       placeholder=\"Name\"\n                       (blur)=\"hasNameErrors = name.length == 0\">\n                <span class=\"icon is-small is-left\">\n                  <i class=\"fa fa-user\"></i>\n                </span>\n              </p>\n              <p class=\"help is-danger\" [class.hidden]=\"!hasNameErrors\">Name is required</p>\n            </div>\n            <div class=\"field\">\n              <p class=\"control is-expanded has-icons-left\">\n                <input class=\"input\" \n                       [class.is-danger]=\"hasEmailErrors\" \n                       type=\"email\" \n                       [(ngModel)]=\"email\" \n                       placeholder=\"Email\" \n                       [value]=\"email\"\n                       (blur)=\"hasEmailErrors = !validateEmail(email)\">\n                <span class=\"icon is-small is-left\">\n                  <i class=\"fa fa-envelope\"></i>\n                </span>\n              </p>\n              <p class=\"help is-danger\" [class.hidden]=\"!hasEmailErrors\">Valid email is required</p>\n            </div>\n          </div>\n        </div>\n        <!-- email -->\n        <div class=\"field is-horizontal\">\n          <div class=\"field-label is-normal\">\n            <label class=\"label\">Subject</label>\n          </div>\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <input class=\"input\" \n                       [class.is-danger]=\"hasSubjectErrors\" \n                       type=\"text\" \n                       [(ngModel)]=\"subject\"\n                       placeholder=\"e.g. Partnership opportunity\"\n                       (blur)=\"hasSubjectErrors = subject.length == 0\">\n              </div>\n              <p class=\"help is-danger\" [class.hidden]=\"!hasSubjectErrors\">\n                Subject is required\n              </p>\n            </div>\n          </div>\n        </div>\n        <!-- message -->\n        <div class=\"field is-horizontal\">\n          <div class=\"field-label is-normal\">\n            <label class=\"label\">Message</label>\n          </div>\n          <div class=\"field-body\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <textarea class=\"textarea\" placeholder=\"Explain how we can help you\" [(ngModel)]=\"message\" (keypress)=\"onMessageTyping()\"></textarea>\n              </div>\n              <p class=\"help\">\n                {{messageRemaining}} / {{messageMax}} characters remaining\n              </p>\n            </div>\n          </div>\n        </div>\n        <!-- submit/clear -->\n        <div class=\"field is-horizontal\">\n          <div class=\"field-label is-normal\"></div>\n          <div class=\"field-body\">\n            <p class=\"control\">\n              <button class=\"button is-primary\" \n                      [disabled]=\"hasNameErrors || hasEmailErrors || hasSubjectErrors\"\n                      (click)=\"submit()\">Submit</button>\n              <button class=\"button is-link ttg-red\" (click)=\"clear()\">Clear</button>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"columns\">\n        <div class=\"column is-half is-offset-one-quarter content\">\n          <p class=\"has-text-centered\">\n            <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span>, Inc.</span> | <strong>Headquarters</strong><br>\n            4652 Spring Run Rd<br>\n            Warrenton, VA&nbsp;&nbsp;20187<br>\n            (703) 310-6703 main<br>\n            (703) 955-3510 fax<br>\n            <a class=\"out-link\" href=\"mailto:info@ttg-solutions.com\">info@ttg-solutions.com</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"columns no-print\">\n      <div class=\"column is-one-quarter\"></div>\n      <div class=\"column is-one-half\">\n        <div class=\"content brand\">\n          <img class=\"image is-16x16\" src=\"../../assets/TTG-black-64.png\">\n          TTG <span class=\"ttg-red\">Solutions</span>, Inc.\n        </div>\n      </div>\n      <div class=\"column is-one-quarter\"></div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column is-one-quarter no-print\"></div>\n      <div class=\"column\">\n        <p class=\"content is-small no-print\">\n          4652 Spring Run Rd<br>\n          Warrenton, VA&nbsp;&nbsp;20187<br>\n        </p>\n        <p class=\"content is-small\">\n          <span class=\"print-only\">www.ttg-solutions.com<br><br></span>      \n          (703) 310-6703 main<br>\n          (703) 955-3510 fax\n        </p>\n      </div>\n      <div class=\"column is-one-quarter no-print\">\n        <p class=\"content is-small\">\n          NAICS Codes: 511210, 518210, 541360, 541370, 541511\n        </p>\n        <p class=\"content is-small\">\n          DUNS: 079940317<br>\n          CAGE: 7G4J3\n        </p>\n      </div>\n      <div class=\"column is-one-quarter no-print\"></div>\n    </div>\n    <hr class=\"no-print\">\n    <div class=\"content is-small has-text-centered\">\n      &copy;{{currentYear}} <span class=\"brand\">TTG <span class=\"ttg-red\">Solutions</span>, Inc.</span> All rights reserved.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight is-dark\">\n  <div class=\"hero-head\">\n    <app-header isHome=\"true\"></app-header>\n  </div>\n  <div class=\"hero-body has-text-centered\">\n    <div class=\"crossfade\">\n      <div style=\"background-image: url('../../assets/hero-bg3.jpg')\"></div>\n      <div style=\"background-image: url('../../assets/hero-bg2.jpg')\"></div>\n      <div style=\"background-image: url('../../assets/hero-bg1.jpg')\"></div>\n    </div>\n    <div class=\"container\">\n      <h1 class=\"title brand\">\n        A <span class=\"ttg-red\">trusted</span> technology group\n      </h1>\n    </div>\n  </div>\n</section>\n<app-about></app-about>"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<header class=\"nav\">\n  <div class=\"container\">\n    <div class=\"nav-left\">\n      <a class=\"nav-item brand\" routerLink=\"/\">\n        <img class=\"image is-24x24\" [class.not-displayed]=\"!isHome\" src=\"../../assets/TTG-white-64.png\">\n        <img class=\"image is-24x24\" [class.not-displayed]=\"isHome\" src=\"../../assets/TTG-black-64.png\">\n        &nbsp;TTG&nbsp;<span class=\"ttg-red\">Solutions</span>\n      </a>\n    </div>\n    <!-- mobile menu -->\n    <span class=\"nav-toggle\" (click)=\"toggleMenu()\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n    <div class=\"nav-right nav-menu\" [class.is-active]=\"isMenuShowing\">\n      <a class=\"nav-item\" routerLink=\"/\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      <a class=\"nav-item\" routerLink=\"/benefits\" routerLinkActive=\"is-active\">Benefits</a>\n      <a class=\"nav-item\" routerLink=\"/careers\" routerLinkActive=\"is-active\">Careers</a>\n      <a class=\"nav-item\" routerLink=\"/contact\" routerLinkActive=\"is-active\">Contact</a>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService() {
        this.ga = window.hasOwnProperty('ga') ? window['ga'] : null;
    }
    GoogleAnalyticsService.prototype.sendInteractiveEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        try {
            this.ga('send', {
                hitType: 'event',
                eventCategory: eventCategory,
                eventAction: eventAction,
                eventLabel: eventLabel
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    GoogleAnalyticsService.prototype.sendPageView = function (page) {
        if (!page.startsWith('/')) {
            page = '/' + page;
        }
        try {
            this.ga('send', {
                hitType: 'pageView',
                page: page
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GoogleAnalyticsService);

//# sourceMappingURL=google-analytics.service.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetformService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetformService = (function () {
    function GetformService(http) {
        this.http = http;
    }
    GetformService.prototype.send = function (formId, params, hasFile) {
        if (hasFile === void 0) { hasFile = false; }
        var data = hasFile ? new FormData() : new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var param in params) {
            if (params.hasOwnProperty(param)) {
                data.append(param, params[param]);
            }
        }
        var pathChoice = hasFile ? 'u' : 'f';
        return this.http.post("https://getform.org/" + pathChoice + "/" + formId, data).toPromise();
    };
    return GetformService;
}());
GetformService.REFER_FORM_ID = 'e22513c0-f09f-4ea7-964b-c0de1fc05f2e';
GetformService.APPLY_FORM_ID = 'addcca17-a306-490c-9936-e90d9e95db55';
GetformService.CONTACT_FORM_ID = '6cd816a1-fc60-49bc-9a8b-795f63a5c834';
GetformService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetformService);

var _a;
//# sourceMappingURL=getform.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobVacancyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobVacancyService = (function () {
    function JobVacancyService(http) {
        this.http = http;
        this.vacanciesUrl = 'jobs/billets.json';
    }
    JobVacancyService.prototype.getVacancies = function () {
        return this.http.get(this.vacanciesUrl)
            .toPromise()
            .then(function (response) { return response.json().jobs; })
            .catch(this.handleError);
    };
    JobVacancyService.prototype.getVacancy = function (id) {
        return this.getVacancies()
            .then(function (vacancies) {
            for (var _i = 0, vacancies_1 = vacancies; _i < vacancies_1.length; _i++) {
                var vacancy = vacancies_1[_i];
                if (vacancy.id == id) {
                    return vacancy;
                }
            }
            return null;
        })
            .catch(this.handleError);
        // const url = `${this.vacanciesUrl}/${id}`;
        // return this.http.get(url)
        //   .toPromise()
        //   .then(response => response.json() as JobVacancy)
        //   .catch(this.handleError);
    };
    JobVacancyService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return JobVacancyService;
}());
JobVacancyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], JobVacancyService);

var _a;
//# sourceMappingURL=job-vacancy.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormspreeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormspreeService = (function () {
    function FormspreeService(http) {
        this.http = http;
    }
    FormspreeService.prototype.send = function (to, params) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var param in params) {
            if (params.hasOwnProperty(param)) {
                data.append(param, params[param]);
            }
        }
        return this.http.post("https://formspree.io/" + to, data).toPromise();
    };
    return FormspreeService;
}());
FormspreeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FormspreeService);

var _a;
//# sourceMappingURL=formspree.service.js.map

/***/ })

},[563]);
//# sourceMappingURL=main.bundle.js.map