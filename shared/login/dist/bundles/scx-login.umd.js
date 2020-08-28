(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@scx/login', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.scx = global.scx || {}, global.scx.login = {}), global.ng.core, global.rxjs));
}(this, (function (exports, i0, rxjs) { 'use strict';

    var Customer = /** @class */ (function () {
        function Customer() {
        }
        return Customer;
    }());
    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        MyLibService.prototype.load = function () {
            return rxjs.of([]);
        };
        return MyLibService;
    }());
    MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
    MyLibService.ɵprov = i0.ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], null, null);
    })();

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () { };
        return MyLibComponent;
    }());
    MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
    MyLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "my-lib works on live reload!");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-my-lib',
                        template: " <p>my-lib works on live reload!</p> ",
                        styles: [],
                    }]
            }], function () { return []; }, null);
    })();

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyLibModule });
    MyLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MyLibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [MyLibComponent],
                        imports: [],
                        exports: [MyLibComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of my-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Customer = Customer;
    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scx-login.umd.js.map
