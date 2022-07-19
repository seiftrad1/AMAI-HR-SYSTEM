module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/*! exports provided: AuthProvider, useAuthDispatch, useAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthDispatch", function() { return useAuthDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthState", function() { return useAuthState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_persisted_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-persisted-state */ "use-persisted-state");
/* harmony import */ var use_persisted_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_persisted_state__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\msdtt\\OneDrive\\Documents\\amai_hr_next_js_hasura\\amai-hr\\context\\auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const AuthDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const usePersistedAuthState = use_persisted_state__WEBPACK_IMPORTED_MODULE_1___default()("AMAI_AUTH");
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  save_last_seen: false
};

function reducer(state, {
  payload,
  type
}) {
  switch (type) {
    case LOGIN_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
        isAuthenticated: true
      });

    case UPDATE_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), payload)
      });

    case LOGOUT:
      return initialState;

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}

function AuthProvider({
  children
}) {
  const [savedAuthState, saveAuthState] = usePersistedAuthState(initialState);
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, savedAuthState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    saveAuthState(state);
  }, [state, saveAuthState]);

  const login = async ({
    email,
    password,
    save_last_seen
  }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json === null || json === void 0 ? void 0 : json.message);

    const {
      token
    } = json,
          user = _objectWithoutProperties(json, ["token"]);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
        save_last_seen
      }
    });
  };

  const register = async ({
    name,
    last_name,
    email,
    domain,
    phone_number,
    password,
    created_at,
    File,
    manager_id,
    Role
  }) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        last_name,
        email,
        domain,
        phone_number,
        password,
        created_at,
        File,
        manager_id,
        Role
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }); // const json = await res.json();
    // if (!res.ok) throw new Error(json?.message);
    // const { token, ...user } = json;
    // dispatch({ type: LOGIN_SUCCESS, payload: { token, user, save_last_seen } });
  };

  const updateUser = payload => dispatch({
    type: UPDATE_USER,
    payload
  });

  const logout = () => dispatch({
    type: LOGOUT
  });

  return __jsx(AuthDispatchContext.Provider, {
    value: {
      login,
      register,
      updateUser,
      logout
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(AuthStateContext.Provider, {
    value: state,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, children));
}

function useAuthDispatch() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthDispatchContext);
  if (context === undefined) throw new Error("useAuthDispatch must be used within an AuthProvider");
  return context;
}

function useAuthState() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthStateContext);
  if (context === undefined) throw new Error("useAuthState must be used within an AuthProvider");
  return context;
}



/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/auth */ "./context/auth.js");
var _jsxFileName = "C:\\Users\\msdtt\\OneDrive\\Documents\\amai_hr_next_js_hasura\\amai-hr\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function RegisterPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    isAuthenticated,
    user
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])();
  const {
    login
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthDispatch"])();
  const {
    handleSubmit,
    register,
    errors,
    formState: {
      isSubmitting
    },
    setError
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    defaultValues: {
      save_last_seen: true
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAuthenticated) {
      if (user.Role === "Admin") {
        location.replace("/");
      } else {
        location.replace(`/Profile/${user.id}`);
      }
    }
  }, [isAuthenticated]);
  if (isAuthenticated) return null;

  const onSubmit = async ({
    email,
    password,
    save_last_seen
  }) => {
    try {
      await login({
        email,
        password,
        save_last_seen
      });
    } catch ({
      message
    }) {
      setError("email", {
        type: "manual",
        message
      });
    }
  };

  return (// <div className="page-content-wrapper">
    //   <div className="page-content" style={{ minHeight: 1500 }}>
    //     <img
    //       src="../assets/pages/img/AMAI-AI-Experts-white.inline.svg"
    //       style={{ height: 17 }}
    //       alt=""
    //     />{" "}
    //     <h3 class="form-title font-green">Sign In</h3>
    //     <div class="alert alert-danger display-hide">
    //       <button class="close" data-close="alert"></button>
    //       <span> Enter any username and password. </span>
    //     </div>
    //     <form onSubmit={handleSubmit(onSubmit)} class="login-form">
    //       <div class="form-group">
    //         <input
    //           class="form-control form-control-solid placeholder-no-fix"
    //           type="email"
    //           name="email"
    //           id="email"
    //           ref={register({
    //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //             required: "You must provide a email.",
    //           })}
    //           placeholder="Your email"
    //         />
    //         {errors.email && <span>{errors.email.message}</span>}
    //       </div>
    //       <div>
    //         <label class="control-label visible-ie8 visible-ie9">
    //           Password
    //         </label>
    //         <input
    //           class="form-control placeholder-no-fix"
    //           type="password"
    //           name="password"
    //           id="password"
    //           ref={register({
    //             required: "You must provide a password.",
    //           })}
    //           placeholder="Enter your password"
    //         />
    //         {errors.password && <span>{errors.password.message}</span>}
    //       </div>
    //       <div class="form-actions">
    //         <button
    //           id="save_last_seen"
    //           name="save_last_seen"
    //           ref={register}
    //           class="btn green uppercase"
    //           type="submit"
    //           disabled={isSubmitting}
    //         >
    //           Login
    //         </button>{" "}
    //         {/* <label
    //           htmlFor="save_last_seen"
    //           class="rememberme check mt-checkbox mt-checkbox-outline"
    //         >
    //           <input
    //             type="checkbox"
    //             id="save_last_seen"
    //             name="save_last_seen"
    //             ref={register}
    //           />
    //           Show as online to other users <span></span>
    //         </label> */}
    //       </div>
    //     </form>
    //   </div>
    // </div>
    __jsx("div", {
      class: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }
    }, __jsx("div", {
      class: "user-login-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }
    }, __jsx("div", {
      class: "row bs-reset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, __jsx("div", {
      class: "col-md-6 login-container bs-reset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, " ", __jsx("div", {
      style: {
        marginTop: "10%",
        marginLeft: "8%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../svg/AMAI.svg",
      alt: "logo",
      className: "logo-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }), " "), __jsx("div", {
      class: "login-content",
      style: {
        marginTop: "10%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, " ", "Welcome To AMAI internal system, please login first to access the plateform"), " ", __jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      class: "login-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, __jsx("div", {
      class: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, "Email:"), __jsx("input", {
      class: "form-control form-control-solid placeholder-no-fix",
      type: "email",
      name: "email",
      id: "email",
      ref: register({
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        required: "You must provide a email."
      }),
      placeholder: "Your email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }), " ", errors.email && __jsx("span", {
      class: "alert alert-danger fade in",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, errors.email.message)), " ", __jsx("div", {
      class: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, "Password:"), __jsx("input", {
      class: "form-control placeholder-no-fix",
      type: "password",
      name: "password",
      id: "password",
      ref: register({
        required: "You must provide a password."
      }),
      placeholder: "Enter your password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }), errors.password && __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 39
      }
    }, errors.password.message)), __jsx("div", {
      class: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }
    }, __jsx("button", {
      id: "save_last_seen",
      name: "save_last_seen",
      ref: register,
      class: "btn green uppercase",
      type: "submit",
      disabled: isSubmitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 19
      }
    }, "Login"), " ")))), __jsx("div", {
      class: "col-md-6 bs-reset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: "login-bg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, " ", __jsx("img", {
      src: "../assets/pages/img/login/bg1.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    }))))))
  );
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "use-persisted-state":
/*!**************************************!*\
  !*** external "use-persisted-state" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-persisted-state");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwidXNlUGVyc2lzdGVkQXV0aFN0YXRlIiwiY3JlYXRlUGVyc2lzdGVkU3RhdGUiLCJMT0dJTl9TVUNDRVNTIiwiVVBEQVRFX1VTRVIiLCJMT0dPVVQiLCJpbml0aWFsU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidG9rZW4iLCJzYXZlX2xhc3Rfc2VlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNhdmVkQXV0aFN0YXRlIiwic2F2ZUF1dGhTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibmFtZSIsImxhc3RfbmFtZSIsImRvbWFpbiIsInBob25lX251bWJlciIsImNyZWF0ZWRfYXQiLCJGaWxlIiwibWFuYWdlcl9pZCIsIlJvbGUiLCJ1cGRhdGVVc2VyIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJSZWdpc3RlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJzZXRFcnJvciIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiaWQiLCJvblN1Ym1pdCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ2YWx1ZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQywyREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0QsMkRBQWEsRUFBdEM7QUFFQSxNQUFNRSxxQkFBcUIsR0FBR0MsMERB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dWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3JlYXRlUGVyc2lzdGVkU3RhdGUgZnJvbSBcInVzZS1wZXJzaXN0ZWQtc3RhdGVcIjtcblxuY29uc3QgQXV0aERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IEF1dGhTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IHVzZVBlcnNpc3RlZEF1dGhTdGF0ZSA9IGNyZWF0ZVBlcnNpc3RlZFN0YXRlKFwiQU1BSV9BVVRIXCIpO1xuXG5jb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCI7XG5jb25zdCBVUERBVEVfVVNFUiA9IFwiVVBEQVRFX1VTRVJcIjtcbmNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgdXNlcjogbnVsbCxcbiAgdG9rZW46IG51bGwsXG4gIHNhdmVfbGFzdF9zZWVuOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZSAke3R5cGV9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2F2ZWRBdXRoU3RhdGUsIHNhdmVBdXRoU3RhdGVdID0gdXNlUGVyc2lzdGVkQXV0aFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBzYXZlZEF1dGhTdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlQXV0aFN0YXRlKHN0YXRlKTtcbiAgfSwgW3N0YXRlLCBzYXZlQXV0aFN0YXRlXSk7XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQsIHNhdmVfbGFzdF9zZWVuIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvbG9naW5cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoanNvbj8ubWVzc2FnZSk7XG5cbiAgICBjb25zdCB7IHRva2VuLCAuLi51c2VyIH0gPSBqc29uO1xuXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOiB7IHRva2VuLCB1c2VyLCBzYXZlX2xhc3Rfc2VlbiB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHtcbiAgICBuYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBkb21haW4sXG4gICAgcGhvbmVfbnVtYmVyLFxuICAgIHBhc3N3b3JkLFxuICAgIGNyZWF0ZWRfYXQsXG4gICAgRmlsZSxcbiAgICBtYW5hZ2VyX2lkLFxuICAgIFJvbGUsXG4gIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgZG9tYWluLFxuICAgICAgICBwaG9uZV9udW1iZXIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBjcmVhdGVkX2F0LFxuICAgICAgICBGaWxlLFxuICAgICAgICBtYW5hZ2VyX2lkLFxuICAgICAgICBSb2xlLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgLy8gaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcblxuICAgIC8vIGNvbnN0IHsgdG9rZW4sIC4uLnVzZXIgfSA9IGpzb247XG5cbiAgICAvLyBkaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHsgdG9rZW4sIHVzZXIsIHNhdmVfbGFzdF9zZWVuIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IChwYXlsb2FkKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFVQREFURV9VU0VSLCBwYXlsb2FkIH0pO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTE9HT1VUIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGxvZ2luLCByZWdpc3RlciwgdXBkYXRlVXNlciwgbG9nb3V0IH19XG4gICAgPlxuICAgICAgPEF1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlQXV0aERpc3BhdGNoKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoRGlzcGF0Y2hDb250ZXh0KTtcblxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhEaXNwYXRjaCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gdXNlQXV0aFN0YXRlKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcblxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSwgdXNlQXV0aERpc3BhdGNoIH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCB1c2VyIH0gPSB1c2VBdXRoU3RhdGUoKTtcclxuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoRGlzcGF0Y2goKTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGVycm9ycyxcclxuICAgIGZvcm1TdGF0ZTogeyBpc1N1Ym1pdHRpbmcgfSxcclxuICAgIHNldEVycm9yLFxyXG4gIH0gPSB1c2VGb3JtKHsgZGVmYXVsdFZhbHVlczogeyBzYXZlX2xhc3Rfc2VlbjogdHJ1ZSB9IH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICBpZiAodXNlci5Sb2xlID09PSBcIkFkbWluXCIpIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKGAvUHJvZmlsZS8ke3VzZXIuaWR9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgc2F2ZV9sYXN0X3NlZW4gfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbG9naW4oeyBlbWFpbCwgcGFzc3dvcmQsIHNhdmVfbGFzdF9zZWVuIH0pO1xyXG4gICAgfSBjYXRjaCAoeyBtZXNzYWdlIH0pIHtcclxuICAgICAgc2V0RXJyb3IoXCJlbWFpbFwiLCB7XHJcbiAgICAgICAgdHlwZTogXCJtYW51YWxcIixcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiIHN0eWxlPXt7IG1pbkhlaWdodDogMTUwMCB9fT5cclxuICAgIC8vICAgICA8aW1nXHJcbiAgICAvLyAgICAgICBzcmM9XCIuLi9hc3NldHMvcGFnZXMvaW1nL0FNQUktQUktRXhwZXJ0cy13aGl0ZS5pbmxpbmUuc3ZnXCJcclxuICAgIC8vICAgICAgIHN0eWxlPXt7IGhlaWdodDogMTcgfX1cclxuICAgIC8vICAgICAgIGFsdD1cIlwiXHJcbiAgICAvLyAgICAgLz57XCIgXCJ9XHJcbiAgICAvLyAgICAgPGgzIGNsYXNzPVwiZm9ybS10aXRsZSBmb250LWdyZWVuXCI+U2lnbiBJbjwvaDM+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBkaXNwbGF5LWhpZGVcIj5cclxuICAgIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZVwiIGRhdGEtY2xvc2U9XCJhbGVydFwiPjwvYnV0dG9uPlxyXG4gICAgLy8gICAgICAgPHNwYW4+IEVudGVyIGFueSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuIDwvc3Bhbj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3M9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgLy8gICAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc29saWQgcGxhY2Vob2xkZXItbm8tZml4XCJcclxuICAgIC8vICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgLy8gICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAvLyAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAvLyAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAvLyAgICAgICAgICAgICB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaSxcclxuICAgIC8vICAgICAgICAgICAgIHJlcXVpcmVkOiBcIllvdSBtdXN0IHByb3ZpZGUgYSBlbWFpbC5cIixcclxuICAgIC8vICAgICAgICAgICB9KX1cclxuICAgIC8vICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgLy8gICAgICAgICAvPlxyXG4gICAgLy8gICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxzcGFuPntlcnJvcnMuZW1haWwubWVzc2FnZX08L3NwYW4+fVxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICA8ZGl2PlxyXG4gICAgLy8gICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsIHZpc2libGUtaWU4IHZpc2libGUtaWU5XCI+XHJcbiAgICAvLyAgICAgICAgICAgUGFzc3dvcmRcclxuICAgIC8vICAgICAgICAgPC9sYWJlbD5cclxuICAgIC8vICAgICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcGxhY2Vob2xkZXItbm8tZml4XCJcclxuICAgIC8vICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgLy8gICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAvLyAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAvLyAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAvLyAgICAgICAgICAgICByZXF1aXJlZDogXCJZb3UgbXVzdCBwcm92aWRlIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAvLyAgICAgICAgICAgfSl9XHJcbiAgICAvLyAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCJcclxuICAgIC8vICAgICAgICAgLz5cclxuICAgIC8vICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiA8c3Bhbj57ZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9PC9zcGFuPn1cclxuICAgIC8vICAgICAgIDwvZGl2PlxyXG5cclxuICAgIC8vICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cclxuICAgIC8vICAgICAgICAgPGJ1dHRvblxyXG4gICAgLy8gICAgICAgICAgIGlkPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgLy8gICAgICAgICAgIG5hbWU9XCJzYXZlX2xhc3Rfc2VlblwiXHJcbiAgICAvLyAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgIC8vICAgICAgICAgICBjbGFzcz1cImJ0biBncmVlbiB1cHBlcmNhc2VcIlxyXG4gICAgLy8gICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgLy8gICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAvLyAgICAgICAgID5cclxuICAgIC8vICAgICAgICAgICBMb2dpblxyXG4gICAgLy8gICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XHJcbiAgICAvLyAgICAgICAgIHsvKiA8bGFiZWxcclxuICAgIC8vICAgICAgICAgICBodG1sRm9yPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgLy8gICAgICAgICAgIGNsYXNzPVwicmVtZW1iZXJtZSBjaGVjayBtdC1jaGVja2JveCBtdC1jaGVja2JveC1vdXRsaW5lXCJcclxuICAgIC8vICAgICAgICAgPlxyXG4gICAgLy8gICAgICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgIC8vICAgICAgICAgICAgIGlkPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgLy8gICAgICAgICAgICAgbmFtZT1cInNhdmVfbGFzdF9zZWVuXCJcclxuICAgIC8vICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAvLyAgICAgICAgICAgLz5cclxuICAgIC8vICAgICAgICAgICBTaG93IGFzIG9ubGluZSB0byBvdGhlciB1c2VycyA8c3Bhbj48L3NwYW4+XHJcbiAgICAvLyAgICAgICAgIDwvbGFiZWw+ICovfVxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9mb3JtPlxyXG4gICAgLy8gICA8L2Rpdj5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWxvZ2luLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGJzLXJlc2V0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgbG9naW4tY29udGFpbmVyIGJzLXJlc2V0XCI+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTAlXCIsIG1hcmdpbkxlZnQ6IFwiOCVcIiB9fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N2Zy9BTUFJLnN2Z1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2dvLWRlZmF1bHRcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1jb250ZW50XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwJVwiIH19PlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgVG8gQU1BSSBpbnRlcm5hbCBzeXN0ZW0sIHBsZWFzZSBsb2dpbiBmaXJzdCB0byBhY2Nlc3NcclxuICAgICAgICAgICAgICAgIHRoZSBwbGF0ZWZvcm1cclxuICAgICAgICAgICAgICA8L2gxPntcIiBcIn1cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3M9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNvbGlkIHBsYWNlaG9sZGVyLW5vLWZpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJZb3UgbXVzdCBwcm92aWRlIGEgZW1haWwuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGZhZGUgaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHBsYWNlaG9sZGVyLW5vLWZpeFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiWW91IG11c3QgcHJvdmlkZSBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPHNwYW4+e2Vycm9ycy5wYXNzd29yZC5tZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzYXZlX2xhc3Rfc2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBncmVlbiB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVtZW1iZXJtZSBjaGVjayBtdC1jaGVja2JveCBtdC1jaGVja2JveC1vdXRsaW5lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2F2ZV9sYXN0X3NlZW5cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNhdmVfbGFzdF9zZWVuXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICBTaG93IGFzIG9ubGluZSB0byBvdGhlciB1c2VycyA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGJzLXJlc2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1iZ1wiPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9wYWdlcy9pbWcvbG9naW4vYmcxLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS1wZXJzaXN0ZWQtc3RhdGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==