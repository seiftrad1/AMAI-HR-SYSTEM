module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/hasura-admin-client.js":
/*!************************************!*\
  !*** ./lib/hasura-admin-client.js ***!
  \************************************/
/*! exports provided: gql, hasuraAdminClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasuraAdminClient", function() { return hasuraAdminClient; });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_request__WEBPACK_IMPORTED_MODULE_0__["gql"]; });



const hasuraAdminClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__["GraphQLClient"]("https://immortal-monkfish-39.hasura.app/v1/graphql", {
  headers: {
    "X-Hasura-Admin-Secret": "IM3DA5b4JAkmBeQA5owPKk8H9ckptKkkIMIBHUPVwQKoq2d5RKY2i7e3hJD8cUjp"
  }
});

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hasura-admin-client */ "./lib/hasura-admin-client.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const GetUserByEmail = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query GetUserByEmail($email: String!) {
    User(where: { email: { _eq: $email } }) {
      id
      Name
      email
      password
      last_seen
      Avatar
      Role
      status
      notifications_aggregate(where: { seen: { _eq: false } }) {
        aggregate {
          count
        }
      }
      notifications(where: { seen: { _eq: false } }) {
        id
        description
      }
    }
  }
`;
const getNotifications = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query MyQuery {
    notification(where: { user_id: { _is_null: true } }) {
      description
      name
      seen
    }
    notification_aggregate(where: { user_id: { _is_null: true } }) {
      aggregate {
        count
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    email,
    password: rawPassword
  } = req.body;
  const {
    User: [foundUser],
    Notification
  } = await _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_2__["hasuraAdminClient"].request(GetUserByEmail, {
    email
  }, await _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_2__["hasuraAdminClient"].request(getNotifications));
  if (!foundUser) return res.status(401).json({
    message: "Invalid email/password."
  });

  if (foundUser.status === false) {
    return res.status(401).json({
      message: "Account locked"
    });
  }

  const {
    password
  } = foundUser,
        user = _objectWithoutProperties(foundUser, ["password"]);

  const passwordsMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(rawPassword, password);
  if (!passwordsMatch) return res.status(401).json({
    message: "Invalid password."
  });
  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["guest", "user"],
      "x-hasura-default-role": "user",
      "x-hasura-user-id": user.id
    }
  }, "7675F456A49B42FEC8DB59B3A51A172E57E95B3BF7765CACD1F56D2CD1", {
    subject: user.Name
  });
  res.status(200).json(_objectSpread({
    token
  }, user));
});

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2hhc3VyYS1hZG1pbi1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xvZ2luLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC1yZXF1ZXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiXSwibmFtZXMiOlsiaGFzdXJhQWRtaW5DbGllbnQiLCJHcmFwaFFMQ2xpZW50IiwicHJvY2VzcyIsImhlYWRlcnMiLCJHZXRVc2VyQnlFbWFpbCIsImdxbCIsImdldE5vdGlmaWNhdGlvbnMiLCJyZXEiLCJyZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwicmF3UGFzc3dvcmQiLCJib2R5IiwiVXNlciIsImZvdW5kVXNlciIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInVzZXIiLCJwYXNzd29yZHNNYXRjaCIsImJjcnlwdCIsImNvbXBhcmUiLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJpZCIsInN1YmplY3QiLCJOYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcbmV4cG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuZXhwb3J0IGNvbnN0IGhhc3VyYUFkbWluQ2xpZW50ID0gbmV3IEdyYXBoUUxDbGllbnQoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9BUElfRU5EUE9JTlQsXG4gIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtSGFzdXJhLUFkbWluLVNlY3JldFwiOlxuICAgICAgICBcIklNM0RBNWI0SkFrbUJlUUE1b3dQS2s4SDlja3B0S2trSU1JQkhVUFZ3UUtvcTJkNVJLWTJpN2UzaEpEOGNVanBcIixcbiAgICB9LFxuICB9XG4pO1xuIiwiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5pbXBvcnQgeyBoYXN1cmFBZG1pbkNsaWVudCwgZ3FsIH0gZnJvbSBcIi4uLy4uL2xpYi9oYXN1cmEtYWRtaW4tY2xpZW50XCI7XHJcblxyXG5jb25zdCBHZXRVc2VyQnlFbWFpbCA9IGdxbGBcclxuICBxdWVyeSBHZXRVc2VyQnlFbWFpbCgkZW1haWw6IFN0cmluZyEpIHtcclxuICAgIFVzZXIod2hlcmU6IHsgZW1haWw6IHsgX2VxOiAkZW1haWwgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgbGFzdF9zZWVuXHJcbiAgICAgIEF2YXRhclxyXG4gICAgICBSb2xlXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBub3RpZmljYXRpb25zX2FnZ3JlZ2F0ZSh3aGVyZTogeyBzZWVuOiB7IF9lcTogZmFsc2UgfSB9KSB7XHJcbiAgICAgICAgYWdncmVnYXRlIHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5vdGlmaWNhdGlvbnMod2hlcmU6IHsgc2VlbjogeyBfZXE6IGZhbHNlIH0gfSkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9IGdxbGBcclxuICBxdWVyeSBNeVF1ZXJ5IHtcclxuICAgIG5vdGlmaWNhdGlvbih3aGVyZTogeyB1c2VyX2lkOiB7IF9pc19udWxsOiB0cnVlIH0gfSkge1xyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBuYW1lXHJcbiAgICAgIHNlZW5cclxuICAgIH1cclxuICAgIG5vdGlmaWNhdGlvbl9hZ2dyZWdhdGUod2hlcmU6IHsgdXNlcl9pZDogeyBfaXNfbnVsbDogdHJ1ZSB9IH0pIHtcclxuICAgICAgYWdncmVnYXRlIHtcclxuICAgICAgICBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQ6IHJhd1Bhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgVXNlcjogW2ZvdW5kVXNlcl0sXHJcbiAgICBOb3RpZmljYXRpb24sXHJcbiAgfSA9IGF3YWl0IGhhc3VyYUFkbWluQ2xpZW50LnJlcXVlc3QoXHJcbiAgICBHZXRVc2VyQnlFbWFpbCxcclxuICAgIHtcclxuICAgICAgZW1haWwsXHJcbiAgICB9LFxyXG4gICAgYXdhaXQgaGFzdXJhQWRtaW5DbGllbnQucmVxdWVzdChnZXROb3RpZmljYXRpb25zKVxyXG4gICk7XHJcblxyXG4gIGlmICghZm91bmRVc2VyKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsL3Bhc3N3b3JkLlwiLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZm91bmRVc2VyLnN0YXR1cyA9PT0gZmFsc2UpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkFjY291bnQgbG9ja2VkXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnVzZXIgfSA9IGZvdW5kVXNlcjtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShyYXdQYXNzd29yZCwgcGFzc3dvcmQpO1xyXG5cclxuICBpZiAoIXBhc3N3b3Jkc01hdGNoKVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHBhc3N3b3JkLlwiLFxyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICB7XHJcbiAgICAgIFwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltc1wiOiB7XHJcbiAgICAgICAgXCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzXCI6IFtcImd1ZXN0XCIsIFwidXNlclwiXSxcclxuICAgICAgICBcIngtaGFzdXJhLWRlZmF1bHQtcm9sZVwiOiBcInVzZXJcIixcclxuICAgICAgICBcIngtaGFzdXJhLXVzZXItaWRcIjogdXNlci5pZCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIjc2NzVGNDU2QTQ5QjQyRkVDOERCNTlCM0E1MUExNzJFNTdFOTVCM0JGNzc2NUNBQ0QxRjU2RDJDRDFcIixcclxuICAgIHtcclxuICAgICAgc3ViamVjdDogdXNlci5OYW1lLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdG9rZW4sIC4uLnVzZXIgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==