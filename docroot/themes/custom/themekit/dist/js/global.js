/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./global/js/src/global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global/js/src/global.js":
/*!*********************************!*\
  !*** ./global/js/src/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * theme.js
 * Entry point for all theme related js.
 */
__webpack_require__(/*! ./skip-link */ "./global/js/src/skip-link.js");
/** used to add a '+/-' button for all accordion items sitewide.* */


var accordItems = document.querySelectorAll('.field--name-field-item-header');

var _loop = function _loop() {
  var btn = document.createElement('button');
  btn.innerHTML = '+';
  accordItems[i].prepend(btn);
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.parentElement.classList.toggle('active');

    if (btn.innerHTML === '+') {
      btn.innerHTML = '-';
    } else {
      btn.innerHTML = '+';
    }
  });
};

for (i = 0; i < accordItems.length; i += 1) {
  _loop();
}
/** appends the '>' character to the 'Get Details' link in each accordion item.* */


var linkItems = document.querySelectorAll('.field__item>a');

for (i = 0; i < accordItems.length; i += 1) {
  var text = linkItems[i].textContent;
  linkItems[i].innerHTML = '';
  var spn1 = document.createElement('span');
  spn1.innerHTML = text;
  var spn2 = document.createElement('span');
  spn2.innerHTML = '&nbsp >';
  linkItems[i].append(spn1);
  linkItems[i].append(spn2);
}

/***/ }),

/***/ "./global/js/src/skip-link.js":
/*!************************************!*\
  !*** ./global/js/src/skip-link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @file
 * Skip link for accessibility.
 */
var skipLinkHolder = document.getElementById('skip-to-content');
var skipLink = skipLinkHolder.querySelector('.skip-to-content-link');
skipLink.addEventListener('click', function (e) {
  e.preventDefault();
  var target = document.querySelector(e.target.getAttribute('href'));
  target.setAttribute('tabindex', '-1');
  target.focus();
  target.addEventListener('blur focusout', function (event) {
    event.target.removeAttribute('tabindex');
  });
});

/***/ })

/******/ });
//# sourceMappingURL=global.js.map