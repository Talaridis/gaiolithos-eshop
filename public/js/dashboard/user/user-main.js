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

eval("$(\"#user-main-datatable\").DataTable({\n  processing: true,\n  serverSide: true,\n  ajax: \"/user-main/datatable\",\n  columns: [{\n    data: 'first_name',\n    name: 'first_name'\n  }, {\n    data: 'last_name',\n    name: 'last_name'\n  }, {\n    data: 'email',\n    name: 'email'\n  }, {\n    data: 'phone',\n    name: 'phone'\n  }, {\n    data: 'status',\n    name: 'email'\n  }, {\n    data: 'created_at',\n    name: 'created_at'\n  }, {\n    data: 'updated_at',\n    name: 'updated_at'\n  }]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkL3VzZXIvdXNlci1tYWluLmpzP2Y3MjQiXSwibmFtZXMiOlsiJCIsIkRhdGFUYWJsZSIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiYWpheCIsImNvbHVtbnMiLCJkYXRhIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQ0FBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxTQUExQixDQUFvQztBQUNoQ0MsWUFBVSxFQUFFLElBRG9CO0FBRWhDQyxZQUFVLEVBQUUsSUFGb0I7QUFHaENDLE1BQUksRUFBRSxzQkFIMEI7QUFJaENDLFNBQU8sRUFBRSxDQUNMO0FBQUNDLFFBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FESyxFQUVMO0FBQUNELFFBQUksRUFBRSxXQUFQO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FGSyxFQUdMO0FBQUNELFFBQUksRUFBRSxPQUFQO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FISyxFQUlMO0FBQUNELFFBQUksRUFBRSxPQUFQO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FKSyxFQUtMO0FBQUNELFFBQUksRUFBRSxRQUFQO0FBQWlCQyxRQUFJLEVBQUU7QUFBdkIsR0FMSyxFQU1MO0FBQUNELFFBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FOSyxFQU9MO0FBQUNELFFBQUksRUFBRSxZQUFQO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FQSztBQUp1QixDQUFwQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kYXNoYm9hcmQvdXNlci91c2VyLW1haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoXCIjdXNlci1tYWluLWRhdGF0YWJsZVwiKS5EYXRhVGFibGUoe1xuICAgIHByb2Nlc3Npbmc6IHRydWUsXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICBhamF4OiBcIi91c2VyLW1haW4vZGF0YXRhYmxlXCIgLFxuICAgIGNvbHVtbnM6IFtcbiAgICAgICAge2RhdGE6ICdmaXJzdF9uYW1lJywgbmFtZTogJ2ZpcnN0X25hbWUnfSxcbiAgICAgICAge2RhdGE6ICdsYXN0X25hbWUnLCBuYW1lOiAnbGFzdF9uYW1lJ30sXG4gICAgICAgIHtkYXRhOiAnZW1haWwnLCBuYW1lOiAnZW1haWwnfSxcbiAgICAgICAge2RhdGE6ICdwaG9uZScsIG5hbWU6ICdwaG9uZSd9LFxuICAgICAgICB7ZGF0YTogJ3N0YXR1cycsIG5hbWU6ICdlbWFpbCd9LFxuICAgICAgICB7ZGF0YTogJ2NyZWF0ZWRfYXQnLCBuYW1lOiAnY3JlYXRlZF9hdCd9LFxuICAgICAgICB7ZGF0YTogJ3VwZGF0ZWRfYXQnLCBuYW1lOiAndXBkYXRlZF9hdCd9XG4gICAgXVxuXG5cbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/dashboard/user/user-main.js\n");

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