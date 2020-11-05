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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/dashboard/user/user-main.js":
/*!**************************************************!*\
  !*** ./resources/js/dashboard/user/user-main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"work\");\n$(\"#user-main-datatable\").DataTable({\n  processing: true,\n  serverSide: true,\n  ajax: \"/test\",\n  columns: [{\n    data: 'id',\n    name: 'id'\n  }, {\n    data: 'name',\n    name: 'name'\n  }, {\n    data: 'email',\n    name: 'email'\n  }, {\n    data: 'created_at',\n    name: 'created_at'\n  }, {\n    data: 'updated_at',\n    name: 'updated_at'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkL3VzZXIvdXNlci1tYWluLmpzP2Y3MjQiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIiQiLCJEYXRhVGFibGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImFqYXgiLCJjb2x1bW5zIiwiZGF0YSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBR0FDLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxTQUExQixDQUFvQztBQUNoQ0MsWUFBVSxFQUFFLElBRG9CO0FBRWhDQyxZQUFVLEVBQUUsSUFGb0I7QUFHaENDLE1BQUksRUFBRSxPQUgwQjtBQUloQ0MsU0FBTyxFQUFFLENBQ0w7QUFBQ0MsUUFBSSxFQUFFLElBQVA7QUFBYUMsUUFBSSxFQUFFO0FBQW5CLEdBREssRUFFTDtBQUFDRCxRQUFJLEVBQUUsTUFBUDtBQUFlQyxRQUFJLEVBQUU7QUFBckIsR0FGSyxFQUdMO0FBQUNELFFBQUksRUFBRSxPQUFQO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FISyxFQUlMO0FBQUNELFFBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FKSyxFQUtMO0FBQUNELFFBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FMSztBQUp1QixDQUFwQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kYXNoYm9hcmQvdXNlci91c2VyLW1haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIndvcmtcIilcblxuXG4kKFwiI3VzZXItbWFpbi1kYXRhdGFibGVcIikuRGF0YVRhYmxlKHtcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxuICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgYWpheDogXCIvdGVzdFwiICxcbiAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtkYXRhOiAnaWQnLCBuYW1lOiAnaWQnfSxcbiAgICAgICAge2RhdGE6ICduYW1lJywgbmFtZTogJ25hbWUnfSxcbiAgICAgICAge2RhdGE6ICdlbWFpbCcsIG5hbWU6ICdlbWFpbCd9LFxuICAgICAgICB7ZGF0YTogJ2NyZWF0ZWRfYXQnLCBuYW1lOiAnY3JlYXRlZF9hdCd9LFxuICAgICAgICB7ZGF0YTogJ3VwZGF0ZWRfYXQnLCBuYW1lOiAndXBkYXRlZF9hdCd9XG4gICAgXVxuXG5cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/dashboard/user/user-main.js\n");

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** multi ./resources/js/dashboard/user/user-main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arxi-\OneDrive\Υπολογιστής\gaiolithos\resources\js\dashboard\user\user-main.js */"./resources/js/dashboard/user/user-main.js");


/***/ })

/******/ });