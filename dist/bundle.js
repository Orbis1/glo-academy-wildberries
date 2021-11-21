/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_getGoods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getGoods.js */ \"./src/modules/getGoods.js\");\n/* harmony import */ var _modules_viewAll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/viewAll.js */ \"./src/modules/viewAll.js\");\n\n\n\n\n\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__.searchCart)();\n(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_1__.search)();\n(0,_modules_getGoods_js__WEBPACK_IMPORTED_MODULE_2__.getGoods)();\n(0,_modules_viewAll_js__WEBPACK_IMPORTED_MODULE_3__.viewAll)();\n\n\n//# sourceURL=webpack://glo-academy-wildberries/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchCart\": () => (/* binding */ searchCart)\n/* harmony export */ });\nconst searchCart = () => {\n    const cart = document.querySelector(\"button.button-cart\");\n    const btnModalClose = document.querySelector(\"button.modal-close\");\n    const modal = document.querySelector(\"#modal-cart\");\n\n    const showCart = () => {\n        modal.style.display = \"flex\";\n    };\n\n    const hideCart = () => {\n        modal.style.display = \"\";\n    };\n\n    cart.addEventListener(\"click\", showCart);\n    btnModalClose.addEventListener(\"click\", hideCart);\n\n    modal.addEventListener(\"click\", event => {\n        const isModal = event.target.closest(\".modal\");\n        if (!isModal) hideCart();\n    });\n\n    window.addEventListener(\"keydown\", event => {\n        const { key } = event;\n        if (key === \"Escape\") hideCart();\n    });\n};\n\n\n//# sourceURL=webpack://glo-academy-wildberries/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderGoods\": () => (/* binding */ renderGoods),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getGoods\": () => (/* binding */ getGoods)\n/* harmony export */ });\nconst renderGoods = goods => {\n    const goodsContainer = document.querySelector(\".long-goods-list\");\n    goodsContainer.innerHTML = \"\";\n\n    goods.forEach(g => {\n        const goodBlock = document.createElement(\"div\");\n\n        goodBlock.classList.add(\"col-lg-3\");\n        goodBlock.classList.add(\"col-sm-6\");\n\n        goodBlock.innerHTML = `\n        <div class=\"goods-card\">\n            <span class=\"label ${g.label ? null : 'd-none'}\">${g.label}</span>\n            <img src=\"db/${g.img}\" alt=\"image: Hoodie\" class=\"goods-image\">\n            <h3 class=\"goods-title\">${g.name}</h3>\n            <p class=\"goods-description\">${g.description}</p>\n            <button class=\"button goods-card-btn add-to-cart\" data-id=\"${g.id}\">\n                <span class=\"button-price\">$${g.price}</span>\n            </button>\n        </div>\n        `;\n\n        goodsContainer.append(goodBlock);\n        console.log(g);\n    });\n};\n\nconst getData = (value, category) => {\n    fetch(\"https://glo-acadamy-wildberries-default-rtdb.firebaseio.com/db.json\")\n        .then(res => res.json())\n        .then(data => {\n            const array = category ? data.filter(g => g[category] === value) : data;\n            localStorage.setItem(\"goods\", JSON.stringify(array));\n            if (window.location.pathname !== \"/goods.html\") {\n                window.location.href = \"/goods.html\";\n            } else {\n                renderGoods(array);\n            }\n        });\n};\n\n\nconst getGoods = () => {\n    const links = document.querySelectorAll(\".navigation-link\");\n    const navigation = document.querySelector(\"ul.navigation\");\n    // navigation.addEventListener(\"click\", event => console.dir(event.target.innerText));\n\n    links.forEach(link =>\n        link.addEventListener(\"click\", event => {\n            event.preventDefault();\n            const {\n                text: value,\n                dataset: { field },\n            } = event.target;\n\n            getData(value, field);\n        })\n    );\n\n    if (localStorage.getItem(\"goods\") && window.location.pathname === \"/goods.html\") {\n        renderGoods(JSON.parse(localStorage.getItem(\"goods\")));\n    }\n};\n\n\n\n//# sourceURL=webpack://glo-academy-wildberries/./src/modules/getGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _getGoods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGoods.js */ \"./src/modules/getGoods.js\");\n\n\nconst getData = (value, category) => {\n    fetch(\"https://glo-acadamy-wildberries-default-rtdb.firebaseio.com/db.json\")\n        .then(res => res.json())\n        .then(data => {\n            const array = data.filter(g => g.name.toLowerCase().includes(value.toLowerCase()));\n\n            localStorage.setItem(\"goods\", JSON.stringify(array));\n\n            if (window.location.pathname !== \"/goods.html\") {\n                window.location.href = \"/goods.html\";\n            } else {\n                (0,_getGoods_js__WEBPACK_IMPORTED_MODULE_0__.renderGoods)(array);\n            }\n        });\n};\n\nconst search = () => {\n    const input = document.querySelector(\".form-control > input\");\n    const search = document.querySelector(\"#button-addon2\");\n\n    search.addEventListener(\"click\", () => {\n        console.dir(input.value);\n        getData(input.value)\n    });\n};\n\n\n//# sourceURL=webpack://glo-academy-wildberries/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/viewAll.js":
/*!********************************!*\
  !*** ./src/modules/viewAll.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"viewAll\": () => (/* binding */ viewAll)\n/* harmony export */ });\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ \"./src/modules/search.js\");\n\n\nconst viewAll = () => {\n    if (window.location.pathname !== \"/index.html\") return;\n    const btn = document.querySelector(\".more\");\n    btn.addEventListener(\"click\", event => {\n        event.preventDefault();\n        window.location.href = \"/goods.html\";\n        (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.getData)(\"\");\n    });\n};\n\n\n//# sourceURL=webpack://glo-academy-wildberries/./src/modules/viewAll.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;