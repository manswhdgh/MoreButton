(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 404:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Assert = void 0;
var Assert = /** @class */ (function () {
    function Assert() {
    }
    Assert.IsNotNull = function (object) {
        console.assert(object != null);
        if (object == null) {
            var message = "null" + this.exceptionMessage;
            alert(message);
            throw message;
        }
    };
    Assert.IsTrue = function (condition) {
        console.assert(condition);
        if (condition === false) {
            this.errorMessage(condition);
        }
    };
    Assert.IsNumber = function (condition) {
        if (typeof condition == "number") {
            return;
        }
        else {
            this.errorMessage(condition);
        }
    };
    Assert.errorMessage = function (errorData) {
        var message = typeof errorData + this.exceptionMessage;
        alert(message);
        throw message;
    };
    Assert.exceptionMessage = " exception occured!";
    return Assert;
}());
exports.Assert = Assert;


/***/ }),

/***/ 822:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HtmlElements = void 0;
var Assert_js_1 = __webpack_require__(404);
function getElementWithNullCheck(object) {
    if (object != null) {
        return object;
    }
    else {
        Assert_js_1.Assert.IsNotNull(object);
        return false;
    }
}
var HtmlElements = /** @class */ (function () {
    function HtmlElements() {
    }
    HtmlElements.GetByID = function (id) {
        var object = document.getElementById(id);
        return getElementWithNullCheck(object);
    };
    HtmlElements.GetByClassName = function (name) {
        var object = document.getElementsByClassName(name);
        return getElementWithNullCheck(object);
    };
    HtmlElements.GetByName = function (name) {
        var object = document.getElementsByName(name);
        return getElementWithNullCheck(object);
    };
    HtmlElements.GetByQuery = function (element, query) {
        var object = element.querySelector(query);
        return getElementWithNullCheck(object);
    };
    HtmlElements.GetByQuerys = function (element, query) {
        var object = element.querySelectorAll(query);
        return getElementWithNullCheck(object);
    };
    return HtmlElements;
}());
exports.HtmlElements = HtmlElements;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoreButton = void 0;
var HtmlElements_js_1 = __webpack_require__(822);
var MoreButton = /** @class */ (function () {
    function MoreButton(itemsPerPage, rootElementId) {
        this.itemsPerPage = itemsPerPage;
        this.rootElement = HtmlElements_js_1.HtmlElements.GetByID(rootElementId);
    }
    MoreButton.prototype.initializeMoreAndMore = function () {
        var _a;
        var _this = this;
        this.rootElement.innerHTML = "";
        var button = document.createElement("button");
        (_a = button.classList).add.apply(_a, ["w-100", "btn", "btn-pink", "py-3"]);
        button.id = "moreButton";
        button.innerHTML = "<i class=\"bi bi-plus\"></i> \uB354\uBCF4\uAE30";
        this.rootElement.append(button);
        Array.from(document.querySelectorAll(".moreAndMore")).slice(0, this.itemsPerPage).forEach(function (element) {
            element.classList.remove("moreAndMore");
        });
        if (document.querySelectorAll(".moreAndMore").length == 0) {
            HtmlElements_js_1.HtmlElements.GetByID("moreButton").classList.add("d-none");
        }
        HtmlElements_js_1.HtmlElements.GetByID("moreButton").onclick = function () {
            Array.from(document.querySelectorAll(".moreAndMore")).slice(0, _this.itemsPerPage).forEach(function (element) {
                element.classList.remove("moreAndMore");
            });
            if (document.querySelectorAll(".moreAndMore").length == 0) {
                HtmlElements_js_1.HtmlElements.GetByID("moreButton").classList.add("d-none");
            }
        };
    };
    MoreButton.prototype.initializeMoreAndMoreSurgery = function () {
        var _a;
        var _this = this;
        this.rootElement.innerHTML = "";
        var button = document.createElement("button");
        (_a = button.classList).add.apply(_a, ["w-100", "btn", "btn-pink", "py-3"]);
        button.id = this.rootElement.id + "_moreButton";
        button.innerHTML = "<i class=\"bi bi-plus\"></i> \uB354\uBCF4\uAE30";
        this.rootElement.append(button);
        Array.from(document.querySelectorAll(".moreAndMore")).slice(0, this.itemsPerPage).forEach(function (element) {
            element.classList.remove("moreAndMore");
        });
        if (document.querySelectorAll(".moreAndMore").length == 0) {
            HtmlElements_js_1.HtmlElements.GetByID(button.id).classList.add("d-none");
        }
        HtmlElements_js_1.HtmlElements.GetByID(button.id).onclick = function () {
            Array.from(document.querySelectorAll(".moreAndMore")).slice(0, _this.itemsPerPage).forEach(function (element) {
                element.classList.remove("moreAndMore");
            });
            if (document.querySelectorAll(".moreAndMore").length == 0) {
                HtmlElements_js_1.HtmlElements.GetByID(button.id).classList.add("d-none");
            }
        };
    };
    return MoreButton;
}());
exports.MoreButton = MoreButton;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});