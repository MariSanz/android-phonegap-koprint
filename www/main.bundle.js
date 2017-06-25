webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 147;


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercadeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcercadeComponent = (function () {
    function AcercadeComponent() {
    }
    AcercadeComponent.prototype.ngOnInit = function () {
    };
    return AcercadeComponent;
}());
AcercadeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-acercade',
        template: __webpack_require__(323),
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [])
], AcercadeComponent);

//# sourceMappingURL=acercade.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_status_service__ = __webpack_require__(48);
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
    function AppComponent(parametrosStore, router, statusService) {
        this.parametrosStore = parametrosStore;
        this.router = router;
        this.statusService = statusService;
        document.addEventListener('deviceready', this.dispositivoIniciado.bind(this), false);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        componentHandler.upgradeDom();
    };
    AppComponent.prototype.dispositivoIniciado = function () {
        var _this = this;
        this.parametrosStore.get('accessToken')
            .then(function (accessToken) {
            if (accessToken == null) {
                _this.statusService.logged.next(false);
                _this.router.navigate(['login'], { replaceUrl: true });
            }
            else {
                _this.statusService.logged.next(true);
                _this.router.navigate(['home'], { replaceUrl: true });
            }
        })
            .catch(function (err) { return console.error(err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(324),
        styles: [__webpack_require__(316)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__["a" /* ParametrosStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__["a" /* ParametrosStore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_status_service__["a" /* StatusService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gallery_photos_gallery_photos_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_almacen_parametros_store__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_almacen_pedido_store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_form_order_form_order_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__acercade_acercade_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_status_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_10__gallery_photos_gallery_photos_component__["a" /* GalleryPhotosComponent */] },
    { path: 'form-order', component: __WEBPACK_IMPORTED_MODULE_14_app_form_order_form_order_component__["a" /* FormOrderComponent */] },
    { path: 'acercaDe', component: __WEBPACK_IMPORTED_MODULE_15__acercade_acercade_component__["a" /* AcercadeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__gallery_photos_gallery_photos_component__["a" /* GalleryPhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14_app_form_order_form_order_component__["a" /* FormOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__acercade_acercade_component__["a" /* AcercadeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_11_app_almacen_parametros_store__["a" /* ParametrosStore */],
            __WEBPACK_IMPORTED_MODULE_13_app_almacen_pedido_store__["a" /* PedidoStore */],
            __WEBPACK_IMPORTED_MODULE_16_app_status_service__["a" /* StatusService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_users_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_order__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormOrderComponent = (function () {
    function FormOrderComponent(ngZone, usersService, pedidoStore, router) {
        this.ngZone = ngZone;
        this.usersService = usersService;
        this.pedidoStore = pedidoStore;
        this.router = router;
    }
    FormOrderComponent.prototype.ngOnInit = function () {
    };
    FormOrderComponent.prototype.seleccionar = function () {
        var _this = this;
        HybridBridge.obtenerTienda(function (tienda) {
            _this.ngZone.run(function () {
                _this.tienda = tienda;
            });
        });
    };
    FormOrderComponent.prototype.enviar = function (fecha, nombre) {
        var _this = this;
        console.log(fecha);
        console.log(nombre);
        console.log(this.tienda);
        var order = new __WEBPACK_IMPORTED_MODULE_3_app_order__["a" /* Order */]();
        order.codPedido = (Math.random() * (100000 - 1) + 1).toString();
        order.codTienda = nombre + (Math.random() * (1000 - 1) + 1).toString();
        var fechaEntrega = new Date(fecha);
        order.fechaEntrega = fechaEntrega;
        order.imagenes = this.pedidoStore.imagenes.join('|');
        order.total = this.pedidoStore.imagenes.length * 0.20;
        debugger;
        console.log(this.usersService.order(order)
            .then(function (result) {
            debugger;
            alert("Pedido realizado con éxito");
            _this.router.navigateByUrl('home', { replaceUrl: true });
        })
            .catch(function (e) {
            debugger;
            console.log(e);
        }));
    };
    return FormOrderComponent;
}());
FormOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-form-order',
        template: __webpack_require__(325),
        styles: [__webpack_require__(317)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__["a" /* PedidoStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__["a" /* PedidoStore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], FormOrderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-order.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPhotosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Imagen = (function () {
    function Imagen(uri) {
        this._uri = uri;
        this._seleccionada = false;
    }
    Object.defineProperty(Imagen.prototype, "seleccionada", {
        get: function () {
            return this._seleccionada;
        },
        set: function (valor) {
            this._seleccionada = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Imagen.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    return Imagen;
}());
var GalleryPhotosComponent = (function () {
    function GalleryPhotosComponent(ngZone, pedidoStore, router) {
        var _this = this;
        this.ngZone = ngZone;
        this.pedidoStore = pedidoStore;
        this.router = router;
        this.imagenes = [];
        console.log('ngOnInit');
        window.plugins.contentproviderplugin.query({
            contentUri: "content://media/external/images/media",
            projection: ["_data"],
            selection: null,
            selectionArgs: null,
            sortOrder: null
        }, function (datos) {
            console.log('Datos resultado');
            console.log(datos);
            _this.ngZone.run(function () {
                _this.imagenes = datos.map(function (dato) { return new Imagen(dato._data); });
            });
        }, function (err) {
            console.log("error query");
        });
    }
    GalleryPhotosComponent.prototype.ngOnInit = function () {
        /*
        cordova.plugins.ThumbnailGenerator.generate((uris) => {
            //zone: para respuestas con retraso, para que angular actualice la interfaz, angular inspecciona que cambias los atributos
            this.ngZone.run(() => {
                this.imagenes = uris.map(uri => new Imagen(uri));
            });
        });
        */
    };
    GalleryPhotosComponent.prototype.seleccionar = function (imagen) {
        imagen.seleccionada = !imagen.seleccionada;
    };
    GalleryPhotosComponent.prototype.irAFormularioDatos = function () {
        var _this = this;
        //Array de promesas, espero a que acaben todas las imagenes de generarse el data url
        debugger;
        var seleccionadas = this.imagenes
            .filter(function (imagen) { return imagen.seleccionada; })
            .map(function (seleccionada) { return _this.generarDataURL(seleccionada.uri); });
        Promise.all(seleccionadas)
            .then(function (dataURLs) {
            _this.pedidoStore.imagenes = dataURLs;
            _this.router.navigate(['/form-order']);
        })
            .catch(function (e) {
            console.log(e);
        });
        ;
    };
    GalleryPhotosComponent.prototype.generarDataURL = function (fichero) {
        return new Promise(function (resolv, reject) {
            var url = 'file://' + fichero;
            window.resolveLocalFileSystemURL(url, function (entrada) {
                //fileEntry
                entrada.file(function (fichero) {
                    var lector = new FileReader();
                    lector.onloadend = function () {
                        resolv(lector.result);
                    };
                    lector.readAsDataURL(fichero);
                });
            });
        });
    };
    return GalleryPhotosComponent;
}());
GalleryPhotosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gallery-photos',
        template: __webpack_require__(326),
        styles: [__webpack_require__(318)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__["a" /* PedidoStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_almacen_pedido_store__["a" /* PedidoStore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], GalleryPhotosComponent);

var _a, _b, _c;
//# sourceMappingURL=gallery-photos.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_status_service__ = __webpack_require__(48);
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




var HeaderComponent = (function () {
    function HeaderComponent(router, parametrosStore, statusService) {
        var _this = this;
        this.router = router;
        this.parametrosStore = parametrosStore;
        this.statusService = statusService;
        this.logged = false;
        this.title = 'Koprint';
        this.statusService.logged.subscribe(function (logged) { return _this.logged = logged; });
        this.statusService.title.subscribe(function (title) { return _this.title = title; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.statusService.logged.next(false);
        this.parametrosStore.set('accessToken', null);
        this.router.navigate(['login'], { replaceUrl: true });
        this.mdlLayout.nativeElement.MaterialLayout.toggleDrawer();
    };
    HeaderComponent.prototype.irAcercaDe = function () {
        this.router.navigate(['acercaDe']);
        this.mdlLayout.nativeElement.MaterialLayout.toggleDrawer();
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('mdlLayout'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "mdlLayout", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(327),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__["a" /* ParametrosStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_almacen_parametros_store__["a" /* ParametrosStore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_status_service__["a" /* StatusService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        //var sdCard: DirectoryEntry = cordova.file.externalRootDirectory;
        //sdCard.  
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.createOrder = function () {
        var _this = this;
        var permissions = cordova.plugins.permissions;
        permissions.checkPermission(permissions.READ_EXTERNAL_STORAGE, function (status) {
            function error() {
                alert('Sin permiso de acceso a ficheros no se pueden recuperar las fotos');
            }
            if (status.hasPermission) {
                _this.router.navigateByUrl('gallery');
            }
            else {
                permissions.requestPermission(permissions.READ_EXTERNAL_STORAGE, function (status) {
                    if (!status.hasPermission)
                        error();
                    else
                        _this.router.navigateByUrl('gallery');
                }, error);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(328),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_status_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(usersService, parametrosStore, router, statusService) {
        this.usersService = usersService;
        this.parametrosStore = parametrosStore;
        this.router = router;
        this.statusService = statusService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    }
    LoginComponent.prototype.login = function (nombre, clave) {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.user.email = nombre;
        this.user.clave = clave;
        this.usersService.login(this.user)
            .then(function (result) {
            if (result.status == 200) {
                var valor = result.json();
                var accessToken = valor.access_token;
                return _this.parametrosStore.set('accessToken', accessToken);
            }
            else {
                throw new Error('Servicio retorno estado de error: ' + result.status);
            }
        })
            .then(function () {
            console.log('Inserto token en BD');
            _this.statusService.logged.next(true);
            _this.router.navigateByUrl('home');
        })
            .catch(function (e) { return console.log(e); });
    };
    LoginComponent.prototype.irARegistro = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(329),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__["a" /* ParametrosStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__["a" /* ParametrosStore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_status_service__["a" /* StatusService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_status_service__["a" /* StatusService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order() {
    }
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(usersService) {
        this.usersService = usersService;
        this.email = '';
        this.clave = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (email, clave) {
        var user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        user.email = email;
        user.clave = clave;
        this.usersService.register(user);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(330),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 163:
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = (function () {
    function Settings() {
    }
    Object.defineProperty(Settings, "WS_URL", {
        get: function () {
            //return 'http://localhost:3000/';
            return 'http://156.35.98.20:3000/';
            //return 'http://192.168.1.34:3000/';
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "h2 {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".imagen {\r\n    width: 50%;\r\n    border-width: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.imagen img.foto {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.oculta {\r\n    display: none;\r\n}\r\n\r\n.marca {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    z-index: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".btn-grande {\r\n    position: fixed;\r\n    width: 100%;\r\n    text-align: center;\r\n    top: 50%;\r\n    margin-top: -20px;\r\n}\r\n\r\n.btn-grande input {\r\n    font-size: 20pt;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".registrarse {\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Proyecto evaluación Desarrollo de Software para Dispositivos Móviles\r\n</h2>\r\n \r\n<p>\r\n  Aplicación piloto para pedidos online de impresión de fotos.\r\n  El usuario de la aplicación seleccionará las fotos que desee desde su dispositivo móvil y las enviará como un pedido de\r\n  a la tienda fotográfica más cercana a su posición en el mapa.\r\n</p>\r\n<h2>Especificación técnica</h2>\r\n<ul>\r\n  <li>Base de datos: MongoDB</li>\r\n  <li>Servidor: NodeJS</li>\r\n  <li>FrondEnd: Angular2, PhoneGap y Android</li>\r\n</ul>\r\n<h2>Autor</h2>\r\n<p>María José Sánchez Doria - UO232334</p>"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<!--\r\n  <div *ngIf=\"showLogin\">\r\n    <header class=\"mdl-layout__header\">\r\n      <div class=\"mdl-layout__header-row\">\r\n        <span class=\"mdl-layout-title\">KoPrint</span>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n        </nav>\r\n      </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer\">\r\n      <span class=\"mdl-layout-title\">Title</span>\r\n      <nav class=\"mdl-navigation\">\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n        <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n-->\r\n  <div class=\"page-content\">\r\n    <router-outlet>\r\n    </router-outlet>\r\n  </div>\r\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "  \r\n  <form class=\"form-completa\" novalidate #form=\"ngForm\">\r\n\r\n    <h1>Datos del cliente</h1>\r\n\r\n    <div>\r\n      <input type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"seleccionar()\" value=\"Seleccionar tienda\"/>\r\n      <div>{{tienda}}</div>\r\n    </div>\r\n    \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputFecha class=\"mdl-textfield__input\" type=\"date\" id=\"date\" [(ngModel)]=\"date\" name=\"date\"  required />\r\n      <label class=\"mdl-textfield__label\" for=\"user-email\">Fecha de entrega...</label>\r\n    </div>\r\n   \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputName class=\"mdl-textfield__input\" type=\"text\" id=\"name\" [(ngModel)]=\"name\" name=\"name\"/>\r\n      <label class=\"mdl-textfield__label\" for=\"name\">¿Quien recoge el pedido?</label>\r\n    </div>\r\n\r\n    <div class=\"btn-grande\">\r\n      <input type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\" value=\"Enviar\"\r\n        (click)=\"enviar(inputFecha.value, inputName.value)\">\r\n    </div>\r\n\r\n  </form>\r\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<h1>Galería</h1>\r\n\r\n<div *ngFor=\"let imagen of imagenes\" class=\"imagen\" (click)=\"seleccionar(imagen)\">\r\n  <div class=\"marca\">\r\n    <img [class.oculta]=\"!imagen.seleccionada\" src=\"assets/images/check.png\"/>\r\n    <img [class.oculta]=\"imagen.seleccionada\" src=\"assets/images/uncheck.png\"/>\r\n  </div>\r\n  <img class=\"foto\" src=\"{{imagen.uri}}\"/>\r\n</div>\r\n\r\n<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" (click)=\"irAFormularioDatos()\">\r\n  <i class=\"material-icons\">forward</i>\r\n</button>"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "\r\n  <div #mdlLayout class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n\r\n    <header class=\"mdl-layout__header\">\r\n      <div class=\"mdl-layout__header-row\">\r\n        <!-- Title -->\r\n        <span class=\"mdl-layout-title\">{{title}}</span>\r\n        <!-- Add spacer, to align navigation to the right -->\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <!-- Navigation. We hide it in small screens. -->\r\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\">Link</a>\r\n        </nav>\r\n      </div>\r\n    </header>\r\n    <div class=\"mdl-layout__drawer\">\r\n      <span class=\"mdl-layout-title\">Opciones</span>\r\n      <nav class=\"mdl-navigation\">\r\n        <a *ngIf=\"logged\" class=\"mdl-navigation__link\" (click)=\"logout()\">Logout</a>\r\n        <a class=\"mdl-navigation__link\" (click)=\"irAcercaDe()\">Acerca de</a>\r\n      </nav>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-grande\">\r\n  <input type=\"button\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" value=\"Crear pedido\" (click)=\"createOrder()\">\r\n</div>\r\n"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "  \r\n  <img class=\"logo\" src=\"assets/images/KoPrint.png\"/>\r\n\r\n  <form class=\"form-completa\" novalidate #form=\"ngForm\">\r\n\r\n    <h1>Iniciar Sesión</h1>\r\n    \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputName class=\"mdl-textfield__input\" type=\"text\" id=\"user-email\" [(ngModel)]=\"user.email\" name=\"email\"  required\r\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\r\n      <label class=\"mdl-textfield__label\" for=\"user-email\">Tu e-mail...</label>\r\n    </div>\r\n   \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputClave class=\"mdl-textfield__input\" type=\"password\" id=\"user-clave\" [(ngModel)]=\"user.clave\" name=\"clave\"/>\r\n      <label class=\"mdl-textfield__label\" for=\"user-clave\">Tu clave...</label>\r\n    </div>\r\n\r\n    <div class=\"btn-grande\">\r\n      <input [disabled]=\"form.invalid\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\" value=\"Enviar\" (click)=\"login(inputName.value, inputClave.value)\">\r\n    </div>\r\n\r\n    <div class=\"registrarse\">\r\n      <button type=\"button\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\" (click)=\"irARegistro()\">\r\n        Registrarse\r\n      </button>\r\n    </div>\r\n\r\n  </form>\r\n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "  \r\n  <img class=\"logo\" src=\"assets/images/KoPrint.png\"/>\r\n\r\n  <form class=\"form-completa\" novalidate #form=\"ngForm\">\r\n\r\n    <h1>Crear usuario</h1>\r\n    \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputEmail class=\"mdl-textfield__input\" type=\"text\" id=\"user-email\" [(ngModel)]=\"email\" name=\"email\"  required\r\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\r\n      <label class=\"mdl-textfield__label\" for=\"user-email\">Tu e-mail...</label>\r\n    </div>\r\n   \r\n    <div class=\"mdl-textfield mdl-js-textfield\">\r\n      <input #inputPassword class=\"mdl-textfield__input\" type=\"password\" id=\"user-clave\" [(ngModel)]=\"clave\" name=\"clave\"/>\r\n      <label class=\"mdl-textfield__label\" for=\"user-clave\">Tu clave...</label>\r\n    </div>\r\n\r\n    <div class=\"btn-grande\">\r\n      <input [disabled]=\"form.invalid\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\" value=\"Registro\" (click)=\"register(inputEmail.value, inputPassword.value)\">\r\n    </div>\r\n\r\n  </form>"

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametrosStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function execSql(tr, sql, parametros) {
    if (parametros === void 0) { parametros = []; }
    return new Promise(function (resolv, reject) {
        function error(err) {
            console.error('Error al ejecutar "' + sql + "' con paramtros [" + parametros.join(',') + "]");
            reject(err);
        }
        tr.executeSql(sql, parametros, function (tx, result) {
            if (result)
                resolv(result);
            else
                resolv(tx);
        }, error);
    });
}
var ParametrosStore = (function () {
    function ParametrosStore() {
    }
    ParametrosStore.prototype.inicializarBD = function (tr) {
        var s1 = execSql(tr, 'CREATE TABLE IF NOT EXISTS parametros (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'nombre VARCHAR(50),' +
            'valor VARCHAR(250), ' +
            'UNIQUE(nombre) )');
        var s2 = execSql(tr, 'INSERT OR IGNORE INTO parametros (nombre, valor) VALUES (?,?)', ['accessToken', null]);
        return Promise.all([s1, s2]);
    };
    ParametrosStore.prototype.set = function (nombre, valor) {
        var _this = this;
        return new Promise(function (resolv, reject) {
            var db = window.sqlitePlugin.openDatabase({ name: 'koprint.db', location: 'default' });
            db.transaction(function (tr) {
                var s1 = _this.inicializarBD(tr);
                var s2 = execSql(tr, 'UPDATE parametros SET valor = ? WHERE nombre = ?', [valor, nombre]);
                Promise.all([s1, s2])
                    .then(resolv)
                    .catch(reject);
            });
        });
    };
    ParametrosStore.prototype.get = function (nombre) {
        var _this = this;
        return new Promise(function (resolv, reject) {
            var db = window.sqlitePlugin.openDatabase({ name: 'koprint.db', location: 'default' });
            db.transaction(function (tr) {
                var s1 = _this.inicializarBD(tr);
                var s2 = execSql(tr, 'SELECT valor FROM parametros WHERE nombre = ?', [nombre]);
                Promise.all([s1, s2])
                    .then(function (r) {
                    var resultado = r[1];
                    if (resultado.rows.length != 1) {
                        throw new Error('Se esperaba 1 elemento (' + resultado.rows.length + ' obtenidos)');
                    }
                    resolv(resultado.rows.item(0).valor);
                })
                    .catch(reject);
            });
        });
    };
    return ParametrosStore;
}());
ParametrosStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ParametrosStore);

//# sourceMappingURL=parametros.store.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StatusService = (function () {
    function StatusService() {
        this.logged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.title = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    return StatusService;
}());
StatusService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], StatusService);

//# sourceMappingURL=status.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function () {
    function UsersService(http, parametrosStore) {
        this.http = http;
        this.parametrosStore = parametrosStore;
    }
    UsersService.prototype.register = function (user) {
        console.log(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].WS_URL + 'koprint/users', user)
            .toPromise();
    };
    UsersService.prototype.order = function (order) {
        var _this = this;
        return this.parametrosStore.get('accessToken')
            .then(function (result) {
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                    'Authorization': 'Bearer ' + result
                })
            });
            console.log(result);
            console.log(order);
            return _this.http.post(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].WS_URL + 'koprint/orders', order, options)
                .toPromise();
        });
    };
    UsersService.prototype.findAllUsers = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Authorization': 'Bearer 96ad7aae0b1a531d04eb806ecb2adb2d3a83de3f'
            })
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].WS_URL + 'users', options)
            .toPromise();
    };
    UsersService.prototype.login = function (user) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Authorization': 'Basic Q2xpZW50ZS1Db3Jkb3ZhOkNsaWVudGUtQ29yZG92YQ==',
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].WS_URL + 'oauth/token', 'grant_type=password&username=' + user.email + '&password=' + user.clave, options)
            .toPromise();
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__["a" /* ParametrosStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_almacen_parametros_store__["a" /* ParametrosStore */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(94)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function execSql(tr, sql, parametros) {
    if (parametros === void 0) { parametros = []; }
    return new Promise(function (resolv, reject) {
        function error(err) {
            console.error('Error al ejecutar "' + sql + "' con paramtros [" + parametros.join(',') + "]");
            reject(err);
        }
        tr.executeSql(sql, parametros, function (tx, result) {
            if (result)
                resolv(result);
            else
                resolv(tx);
        }, error);
    });
}
var PedidoStore = (function () {
    function PedidoStore() {
    }
    Object.defineProperty(PedidoStore.prototype, "imagenes", {
        get: function () {
            return this._imagenes;
        },
        set: function (imagenes) {
            this._imagenes = imagenes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PedidoStore.prototype, "fechaEntrega", {
        set: function (fecha) {
            this._fechaEntrega = fecha;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PedidoStore.prototype, "nombre", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PedidoStore.prototype, "tienda", {
        set: function (tienda) {
            this._tienda = tienda;
        },
        enumerable: true,
        configurable: true
    });
    PedidoStore.prototype.enviar = function () {
    };
    return PedidoStore;
}());
PedidoStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PedidoStore);

//# sourceMappingURL=pedido.store.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.i(__webpack_require__(84), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n/** CABECERA **/\r\n\r\n.logo {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    font-size: 15pt;\r\n}\r\n\r\n/** FORMULARIOS **/\r\n\r\n.form-completa {\r\n    text-align: center;\r\n}\r\n\r\n.btn-grande .mdl-button {\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.demo-layout-waterfall .mdl-layout__header-row .mdl-navigation__link:last-of-type  {\r\n  padding-right: 0;\r\n}\r\n\r\n/** CONTENIDO **/\r\n\r\nbody {\r\n    background-color: #75D8E4;\r\n}\r\n\r\nmain {\r\n    padding-top: 60px;\r\n}\r\n\r\n/** Boton FAB **/\r\n\r\n.mdl-button--fab {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 1;\r\n}\r\n\r\n/** Barra superior (correccciones) **/\r\n\r\n.mdl-layout__obfuscator,\r\nheader,\r\n.mdl-layout__drawer {\r\n    position: fixed;\r\n}", ""]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.bundle.js.map