module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth-cookies.js":
/*!*****************************!*\
  !*** ./lib/auth-cookies.js ***!
  \*****************************/
/*! exports provided: setTokenCookie, removeTokenCookie, parseCookies, getTokenCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTokenCookie", function() { return setTokenCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTokenCookie", function() { return removeTokenCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenCookie", function() { return getTokenCookie; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

const TOKEN_NAME = 'token';
const MAX_AGE = 60 * 60 * 8; // 8 hours

function setTokenCookie(res, token) {
  const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"])(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: false,
    path: '/',
    sameSite: 'lax'
  });
  res.setHeader('Set-Cookie', cookie);
}
function removeTokenCookie(res) {
  const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"])(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/'
  });
  res.setHeader('Set-Cookie', cookie);
}
function parseCookies(req) {
  var _req$headers;

  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies; // For pages we do need to parse the cookies.

  const cookie = (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.cookie;
  return Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(cookie || '');
}
function getTokenCookie(req) {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}

/***/ }),

/***/ "./lib/iron.js":
/*!*********************!*\
  !*** ./lib/iron.js ***!
  \*********************/
/*! exports provided: encryptSession, getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptSession", function() { return encryptSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ "@hapi/iron");
/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-cookies */ "./lib/auth-cookies.js");

 // Use an environment variable here instead of a hardcoded value for production

const TOKEN_SECRET = 'this-is-a-secret-value-with-at-least-32-characters';
function encryptSession(session) {
  return _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default.a.seal(session, TOKEN_SECRET, _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default.a.defaults);
}
async function getSession(req) {
  const token = Object(_auth_cookies__WEBPACK_IMPORTED_MODULE_1__["getTokenCookie"])(req);
  return token && _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default.a.unseal(token, TOKEN_SECRET, _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default.a.defaults);
}

/***/ }),

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
/* harmony import */ var _lib_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/iron */ "./lib/iron.js");

async function user(req, res) {
  const session = await Object(_lib_iron__WEBPACK_IMPORTED_MODULE_0__["getSession"])(req); // After getting the session you may want to fetch for the user instead
  // of sending the session's payload directly, this example doesn't have a DB
  // so it won't matter in this case

  res.status(200).json({
    user: session || null
  });
}

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/api/user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidgabeau/Desktop/glo/nextjs-blog/with-magic-app/pages/api/user.js */"./pages/api/user.js");


/***/ }),

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/iron");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ })

/******/ });
//# sourceMappingURL=user.js.map