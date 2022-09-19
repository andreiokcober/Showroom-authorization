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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://authorization/./src/styles.css?");

/***/ }),

/***/ "./src/developer/Validators.js":
/*!*************************************!*\
  !*** ./src/developer/Validators.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Validators\": () => (/* binding */ Validators)\n/* harmony export */ });\nclass Validators {\r\n    static required(value = ''){\r\n        return value && value.trim()\r\n    }\r\n    static minLength(length){\r\n        return value =>{\r\n            return value.length >=length\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://authorization/./src/developer/Validators.js?");

/***/ }),

/***/ "./src/developer/createForm.js":
/*!*************************************!*\
  !*** ./src/developer/createForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"linkBtnClose\": () => (/* binding */ linkBtnClose),\n/* harmony export */   \"linkSaveForm\": () => (/* binding */ linkSaveForm),\n/* harmony export */   \"linkSignUp\": () => (/* binding */ linkSignUp)\n/* harmony export */ });\n/* harmony import */ var _Validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validators */ \"./src/developer/Validators.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/developer/form.js\");\n\r\n\r\nconst SignUP = document.querySelector('#SignUP')\r\nconst formSignUp = document.querySelector('.form-SignUp')\r\nconst body = document.querySelector('body')\r\nconst closeBtn = document.querySelector('.close-form')\r\nconst inputSubmitSignUp = document.querySelector('#input-submit-signUp')\r\nconst createPerson = document.querySelector('#create-person')\r\n\r\nSignUP.addEventListener('click',linkSignUp)\r\ncloseBtn.addEventListener('click',linkBtnClose)\r\ninputSubmitSignUp.addEventListener('click',linkSaveForm)\r\n\r\n\r\nfunction linkSignUp(event){\r\n  event.preventDefault()\r\n  formSignUp.style.display='flex'\r\n  body.style.overflow = 'hidden'\r\n \r\n}\r\nfunction linkBtnClose(event){\r\n    event.preventDefault()  \r\n   if(event.target.tagName.toLowerCase() === \"path\") {\r\n    formSignUp.style.display='none'\r\n    body.style.overflow = ''\r\n   }\r\n}\r\n\r\nfunction linkSaveForm(event){\r\n    event.preventDefault()\r\n    // const name = createPerson.name.value\r\n    // const familyName = createPerson.family.value \r\n    // const password = createPerson.password.value\r\n    const person = new _form__WEBPACK_IMPORTED_MODULE_1__.Form (createPerson, {\r\n        name:[_Validators__WEBPACK_IMPORTED_MODULE_0__.Validators.required],\r\n        family:[_Validators__WEBPACK_IMPORTED_MODULE_0__.Validators.required],\r\n        password:[_Validators__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8)]\r\n    })\r\n    if(person.isValid()) {\r\n        console.log('form is valid')\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://authorization/./src/developer/createForm.js?");

/***/ }),

/***/ "./src/developer/form.js":
/*!*******************************!*\
  !*** ./src/developer/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form {\r\n    constructor(form,controls){\r\n        this.form = form\r\n        this.controls = controls\r\n    }\r\n    value(){\r\n      const value  = {}\r\n      Object.keys(this.controls).forEach((control)=>{\r\n        value[control] = this.form[control].value\r\n      })\r\n      return value\r\n    }\r\n\r\n    isValid(){\r\n        let isFormValid = true\r\n\r\n        Object.keys(this.controls).forEach((control)=>{\r\n            const validators = this.controls[control]\r\n            let isValid = true\r\n                validators.forEach(validator=>{\r\n                    isValid = validator(this.form[control].value) && isValid\r\n                   \r\n                })\r\n                if(isValid){\r\n                    clearFormControl(this.form[control])\r\n                }\r\n                else{\r\n                    \r\n                }\r\n                isFormValid = isFormValid && isValid\r\n        })\r\n        return isFormValid\r\n    }\r\n}\r\n\r\nfunction clearFormControl($control){\r\n    $control.value = ''\r\n}   \n\n//# sourceURL=webpack://authorization/./src/developer/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _developer_createForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./developer/createForm */ \"./src/developer/createForm.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://authorization/./src/index.js?");

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