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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[p1]/[id].js");
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

/***/ "./lib/hasura-user-client.js":
/*!***********************************!*\
  !*** ./lib/hasura-user-client.js ***!
  \***********************************/
/*! exports provided: gql, hasuraUserClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasuraUserClient", function() { return hasuraUserClient; });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_request__WEBPACK_IMPORTED_MODULE_0__["gql"]; });



const hasuraUserClient = () => {
  return new graphql_request__WEBPACK_IMPORTED_MODULE_0__["GraphQLClient"]("https://immortal-monkfish-39.hasura.app/v1/graphql", {
    headers: {
      "X-Hasura-Admin-Secret": "IM3DA5b4JAkmBeQA5owPKk8H9ckptKkkIMIBHUPVwQKoq2d5RKY2i7e3hJD8cUjp"
    }
  });
};

/***/ }),

/***/ "./node_modules/@fullcalendar/common/main.css":
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/main.css":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@fullcalendar/list/main.css":
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/main.css":
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/[p1]/[id].js":
/*!****************************!*\
  !*** ./pages/[p1]/[id].js ***!
  \****************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leaveupdate; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/react */ "@fullcalendar/react");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/daygrid */ "@fullcalendar/daygrid");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/common/main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../context/auth */ "./context/auth.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/interaction */ "@fullcalendar/interaction");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/timegrid */ "@fullcalendar/timegrid");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/list */ "@fullcalendar/list");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../lib/hasura-user-client */ "./lib/hasura-user-client.js");
var _jsxFileName = "C:\\Users\\msdtt\\OneDrive\\Documents\\amai_hr_next_js_hasura\\amai-hr\\pages\\[p1]\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // must go before plugins












const mindate = new Date().toISOString().substring(0, 10);

const GetUsersId = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  {
    leave {
      id
      user_id
    }
  }
`;
const getLeave = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query MyQuery($id: Int!) {
    leave(where: { user_id: { _eq: $id } }) {
      id
      reason
      start_date
      end_date
      count_d
      status
    }
  }
`;
const count = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query MyQuery {
    leave_aggregate {
      aggregate {
        count
      }
    }
  }
`;
const UpdateLeave = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation update_leave_by_pk(
    $id: Int!
    $reason: String!
    $start_date: timestamp!
    $end_date: timestamp!
    $count_d: Int!
  ) {
    update_leave_by_pk(
      pk_columns: { id: $id }
      _set: {
        reason: $reason
        start_date: $start_date
        end_date: $end_date
        count_d: $count_d
      }
    ) {
      id
      reason
      start_date
      end_date
      count_d
      status
    }
  }
`;
const leavebyID = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query MyQuery($id: Int = 10) {
    leave_by_pk(id: $id) {
      count_d
      end_date
      file
      id
      reason
      start_date
      status
      user_id
    }
  }
`;
const sumLeave = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query MyQuery($id: Int!) {
    leave_aggregate(where: { user_id: { _eq: $id } }) {
      aggregate {
        sum {
          count_d
        }
      }
    }
  }
`;
const getAdminIDs = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query MyQuery {
    User(where: { Role: { _eq: "Admin" } }) {
      id
    }
  }
`;
const AddNotification = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation MyMutation($objects: [notification_insert_input!]!) {
    insert_notification(objects: $objects) {
      affected_rows
    }
  }
`;
const getStaticPaths = async () => {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_18__["hasuraUserClient"])();
  const {
    leave
  } = await hasura.request(GetUsersId);
  return {
    paths: leave.map(({
      id,
      user_id
    }) => ({
      params: {
        id: id.toString(),
        p1: user_id.toString()
      }
    })),
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_18__["hasuraUserClient"])();
  const {
    id
  } = params;
  const {
    p1
  } = params;
  console.log(id);
  console.log(p1);
  const initialData = await hasura.request(getLeave, {
    id
  });
  const DataCount = await hasura.request(sumLeave, {
    id: p1
  });
  const Count = await hasura.request(count);
  const leave = await hasura.request(leavebyID, {
    id
  });
  const Admins = await hasura.request(getAdminIDs);
  return {
    props: {
      initialData,
      DataCount,
      id,
      Count,
      leave,
      p1,
      Admins
    },
    revalidate: 1
  };
};
function leaveupdate({
  initialData,
  id,
  p1,
  DataCount,
  Count,
  leave,
  Admins
}) {
  const {
    isAuthenticated,
    user
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_14__["useAuthState"])();
  console.log(p1);
  const sumLeave = DataCount.leave_aggregate.aggregate.sum.count_d;
  const {
    0: hide,
    1: sethide
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  const {
    0: hidef,
    1: sethidef
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  console.log(sumLeave);

  function toggle() {
    sethide(!hide);
  }

  function togglefile() {
    sethidef(true);
  }

  const {
    handleSubmit,
    register,
    control,
    errors,
    formState: {
      isSubmitting
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_18__["hasuraUserClient"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(getLeave, query => hasura.request(query), {
    initialData,
    revalidateOnMount: true
  });
  const t = data.leave.map(({
    id,
    reason,
    start_date,
    end_date
  }) => {
    const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(start_date), "yyyy-MM-dd");
    return start;
  });
  const e = data.leave.map(({
    id,
    reason,
    start_date,
    end_date
  }) => {
    const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(end_date), "yyyy-MM-dd");
    return end;
  });
  const startdate = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(leave.leave_by_pk.start_date), "yyyy-MM-dd");
  const endate = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(leave.leave_by_pk.end_date), "yyyy-MM-dd");

  const onSubmit = async ({
    reason,
    start_date,
    end_date
  }) => {
    try {
      const count_d = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["differenceInDays"])(Date.parse(end_date), Date.parse(start_date));

      if (count_d < 1) {
        alert("please enter a valid period");
      } else if (t.includes(start_date) || e.includes(end_date)) {
        alert("you already signed for those days , please try again or contact the admin");
      } else {
        const idt = leave.leave_by_pk.id;
        const t = Admins.User.map(({
          id
        }) => {
          return {
            name: "Leave request update",
            description: "Leave request updated",
            user_id: id,
            seen: false
          };
        });
        const {
          update_leave_by_pk
        } = await hasura.request(UpdateLeave, {
          id: idt,
          reason,
          start_date,
          count_d,
          end_date
        });
        const {
          insert_notification
        } = await hasura.request(AddNotification, {
          objects: t
        });
        alert("your leave request  has been updated, please wait until we review it");
        const pathname = `/leave/${p1}`;
        location.replace(pathname);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cancelrequest = async id => {
    const Delete = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
      mutation MyMutation($id: Int!) {
        delete_leave(where: { id: { _eq: $id } }) {
          affected_rows
        }
      }
    `;

    if (confirm("are you sure you want to cancel this request ")) {
      try {
        await hasura.request(Delete, {
          id
        });
        Object(swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else return null;
  };

  const handleDateClick = arg => {
    // bind with an arrow function
    alert(`date ${arg.dateStr} marked`); // alert("Coordinates: " + arg.jsEvent.pageX + "," + arg.jsEvent.pageY);
    // alert("Current view: " + arg.view.type);
    // change the day's background color just for fun

    arg.dayEl.style.backgroundColor = "#FF5C5C";
  };

  return __jsx("div", {
    className: "page-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "page-content",
    style: {
      minHeight: 1500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "portlet light portlet-fit bordered calendar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "portlet-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: " icon-layers font-green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "caption-subject font-green sbold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }, "Holidays"))), __jsx("div", {
    className: "portlet-body ",
    style: {
      paddingTop: 45
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: hide ? "block" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "alert alert-warning alert-dismissible fade in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, " ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, "Warning!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 23
    }
  }, " ", "you have ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 34
    }
  }, 20 - sumLeave, " "), "days remaing in this year , please feel free to contact us if you got an urgent situation for leave. have a nice day!", " "), __jsx("span", {
    style: {
      cursor: "pointer"
    },
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 23
    }
  }, " ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, "Close ")), " "), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  })), " ", __jsx("div", {
    id: "external-events",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 19
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }, " ", __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }, "Reason:"), __jsx("input", {
    type: "textarea",
    name: "reason",
    className: "form-control",
    defaultValue: leave.leave_by_pk.reason,
    placeholder: "Reason?...",
    id: "reason",
    ref: register({
      required: "You must provide a reason in order to move forward"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 25
    }
  }), errors.reason && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 43
    }
  }, errors.reason.message)), " ", __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, "Medical Issue?", " ", __jsx("span", {
    style: {
      cursor: "pointer"
    },
    onClick: togglefile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, " ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 27
    }
  }, "add proof ")), " "), __jsx("div", {
    className: "form-group",
    style: {
      display: hidef ? "block" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, __jsx("input", {
    type: "file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  }, "start day"), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 50
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 25
    }
  }), " ", __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
    id: "start_date",
    name: "start_date",
    type: "date",
    defaultValue: startdate,
    inputRef: register,
    InputLabelProps: {
      shrink: true
    },
    inputProps: {
      min: `${mindate}`
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 27
    }
  }), " "), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 27
    }
  }, "end day"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 27
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 27
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
    id: "end_date",
    name: "end_date",
    type: "date",
    defaultValue: endate,
    inputRef: register,
    InputLabelProps: {
      shrink: true
    },
    inputProps: {
      min: `${mindate}`
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 23
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn green",
    disabled: isSubmitting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 25
    }
  }, " ", "update demand", " "))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 21
    }
  }, " ", __jsx("table", {
    className: "table table-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 23
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 27
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 29
    }
  }, " Color"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 29
    }
  }, "Status"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 27
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 29
    }
  }, " ", __jsx("div", {
    style: {
      width: 50,
      height: 50,
      objectFit: "cover",
      backgroundColor: "#58D68D"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 31
    }
  })), " ", __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  }, "accepted"), " "), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 27
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 29
    }
  }, " ", __jsx("div", {
    style: {
      width: 50,
      height: 50,
      objectFit: "cover",
      backgroundColor: "#F39C12"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 31
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 29
    }
  }, " pending")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 27
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 29
    }
  }, " ", __jsx("div", {
    style: {
      width: 50,
      height: 50,
      objectFit: "cover",
      backgroundColor: "#E74C3C"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 31
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 29
    }
  }, "rejected"))))), __jsx("hr", {
    className: "visible-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 21
    }
  }), " "))), __jsx("div", {
    className: "col-md-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 15
    }
  }, __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_8___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_16___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_17___default.a],
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
    },
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekNumbers: true,
    themeSystem: "bootstrap",
    events: data.leave.map(({
      id,
      reason,
      start_date,
      end_date,
      status
    }) => {
      const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(end_date), "yyyy-MM-dd");
      const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["parseISO"])(start_date), "yyyy-MM-dd");

      if (status === 1) {
        return {
          id: id,
          start: start,
          end: end,
          backgroundColor: "#58D68D",
          display: "background"
        };
      } else if (status === 0) {
        return {
          id: id,
          start: start,
          end: end,
          backgroundColor: "#F39C12",
          display: "background"
        };
      } else {
        return {
          id: id,
          start: start,
          end: end,
          backgroundColor: "#E74C3C",
          display: "background"
        };
      }
    }),
    dateClick: handleDateClick // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
    // select={this.handleDateSelect}
    // eventContent={renderEventContent} // custom render function
    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

    /* you can update a remote database when these fire:
    eventAdd={function(){}}
    eventChange={function(){}}
    // */
    //       validRange={{
    //         start: "2021-08-03",
    //         end: "2021-08-07",
    //       }}
    ,
    weekends: false // select={color}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 17
    }
  })))))));
}

/***/ }),

/***/ "@fullcalendar/daygrid":
/*!****************************************!*\
  !*** external "@fullcalendar/daygrid" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullcalendar/daygrid");

/***/ }),

/***/ "@fullcalendar/interaction":
/*!********************************************!*\
  !*** external "@fullcalendar/interaction" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullcalendar/interaction");

/***/ }),

/***/ "@fullcalendar/list":
/*!*************************************!*\
  !*** external "@fullcalendar/list" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullcalendar/list");

/***/ }),

/***/ "@fullcalendar/react":
/*!**************************************!*\
  !*** external "@fullcalendar/react" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullcalendar/react");

/***/ }),

/***/ "@fullcalendar/timegrid":
/*!*****************************************!*\
  !*** external "@fullcalendar/timegrid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullcalendar/timegrid");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9oYXN1cmEtdXNlci1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW3AxXS8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmdWxsY2FsZW5kYXIvbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVzZS1wZXJzaXN0ZWQtc3RhdGVcIiJdLCJuYW1lcyI6WyJBdXRoRGlzcGF0Y2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhTdGF0ZUNvbnRleHQiLCJ1c2VQZXJzaXN0ZWRBdXRoU3RhdGUiLCJjcmVhdGVQZXJzaXN0ZWRTdGF0ZSIsIkxPR0lOX1NVQ0NFU1MiLCJVUERBVEVfVVNFUiIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ0b2tlbiIsInNhdmVfbGFzdF9zZWVuIiwicmVkdWNlciIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2F2ZWRBdXRoU3RhdGUiLCJzYXZlQXV0aFN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwib2siLCJtZXNzYWdlIiwicmVnaXN0ZXIiLCJuYW1lIiwibGFzdF9uYW1lIiwiZG9tYWluIiwicGhvbmVfbnVtYmVyIiwiY3JlYXRlZF9hdCIsIkZpbGUiLCJtYW5hZ2VyX2lkIiwiUm9sZSIsInVwZGF0ZVVzZXIiLCJsb2dvdXQiLCJ1c2VBdXRoRGlzcGF0Y2giLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUF1dGhTdGF0ZSIsImhhc3VyYVVzZXJDbGllbnQiLCJHcmFwaFFMQ2xpZW50IiwicHJvY2VzcyIsIm1pbmRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJHZXRVc2Vyc0lkIiwiZ3FsIiwiZ2V0TGVhdmUiLCJjb3VudCIsIlVwZGF0ZUxlYXZlIiwibGVhdmVieUlEIiwic3VtTGVhdmUiLCJnZXRBZG1pbklEcyIsIkFkZE5vdGlmaWNhdGlvbiIsImdldFN0YXRpY1BhdGhzIiwiaGFzdXJhIiwibGVhdmUiLCJyZXF1ZXN0IiwicGF0aHMiLCJtYXAiLCJpZCIsInVzZXJfaWQiLCJwYXJhbXMiLCJ0b1N0cmluZyIsInAxIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsRGF0YSIsIkRhdGFDb3VudCIsIkNvdW50IiwiQWRtaW5zIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwibGVhdmV1cGRhdGUiLCJsZWF2ZV9hZ2dyZWdhdGUiLCJhZ2dyZWdhdGUiLCJzdW0iLCJjb3VudF9kIiwiaGlkZSIsInNldGhpZGUiLCJ1c2VTdGF0ZSIsImhpZGVmIiwic2V0aGlkZWYiLCJ0b2dnbGUiLCJ0b2dnbGVmaWxlIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImlzU3VibWl0dGluZyIsInVzZUZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwidXNlU1dSIiwicXVlcnkiLCJyZXZhbGlkYXRlT25Nb3VudCIsInQiLCJyZWFzb24iLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJzdGFydCIsImZvcm1hdCIsInBhcnNlSVNPIiwiZSIsImVuZCIsInN0YXJ0ZGF0ZSIsImxlYXZlX2J5X3BrIiwiZW5kYXRlIiwib25TdWJtaXQiLCJkaWZmZXJlbmNlSW5EYXlzIiwicGFyc2UiLCJhbGVydCIsImluY2x1ZGVzIiwiaWR0IiwiVXNlciIsImRlc2NyaXB0aW9uIiwic2VlbiIsInVwZGF0ZV9sZWF2ZV9ieV9wayIsImluc2VydF9ub3RpZmljYXRpb24iLCJvYmplY3RzIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlcnIiLCJjYW5jZWxyZXF1ZXN0IiwiRGVsZXRlIiwiY29uZmlybSIsIm11dGF0ZSIsIndpbmRvdyIsInJlbG9hZCIsImVycm9yIiwiaGFuZGxlRGF0ZUNsaWNrIiwiYXJnIiwiZGF0ZVN0ciIsImRheUVsIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImN1cnNvciIsInJlcXVpcmVkIiwic2hyaW5rIiwibWluIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJkYXlHcmlkUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsImxpc3RQbHVnaW4iLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7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QUFRLEVBQUUsS0EvRFosQ0FnRUU7QUFoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakxGLENBREYsQ0FURixDQUhGLENBREYsQ0FERjtBQTBRRCxDOzs7Ozs7Ozs7OztBQ2ppQkQsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvW3AxXS9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9bcDFdL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjcmVhdGVQZXJzaXN0ZWRTdGF0ZSBmcm9tIFwidXNlLXBlcnNpc3RlZC1zdGF0ZVwiO1xuXG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgdXNlUGVyc2lzdGVkQXV0aFN0YXRlID0gY3JlYXRlUGVyc2lzdGVkU3RhdGUoXCJBTUFJX0FVVEhcIik7XG5cbmNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcIkxPR0lOX1NVQ0NFU1NcIjtcbmNvbnN0IFVQREFURV9VU0VSID0gXCJVUERBVEVfVVNFUlwiO1xuY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICB1c2VyOiBudWxsLFxuICB0b2tlbjogbnVsbCxcbiAgc2F2ZV9sYXN0X3NlZW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcbiAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzYXZlZEF1dGhTdGF0ZSwgc2F2ZUF1dGhTdGF0ZV0gPSB1c2VQZXJzaXN0ZWRBdXRoU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHNhdmVkQXV0aFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVBdXRoU3RhdGUoc3RhdGUpO1xuICB9LCBbc3RhdGUsIHNhdmVBdXRoU3RhdGVdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgc2F2ZV9sYXN0X3NlZW4gfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcblxuICAgIGNvbnN0IHsgdG9rZW4sIC4uLnVzZXIgfSA9IGpzb247XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHsgdG9rZW4sIHVzZXIsIHNhdmVfbGFzdF9zZWVuIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoe1xuICAgIG5hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIGRvbWFpbixcbiAgICBwaG9uZV9udW1iZXIsXG4gICAgcGFzc3dvcmQsXG4gICAgY3JlYXRlZF9hdCxcbiAgICBGaWxlLFxuICAgIG1hbmFnZXJfaWQsXG4gICAgUm9sZSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yZWdpc3RlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBkb21haW4sXG4gICAgICAgIHBob25lX251bWJlcixcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgIEZpbGUsXG4gICAgICAgIG1hbmFnZXJfaWQsXG4gICAgICAgIFJvbGUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvLyBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGpzb24/Lm1lc3NhZ2UpO1xuXG4gICAgLy8gY29uc3QgeyB0b2tlbiwgLi4udXNlciB9ID0ganNvbjtcblxuICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogTE9HSU5fU1VDQ0VTUywgcGF5bG9hZDogeyB0b2tlbiwgdXNlciwgc2F2ZV9sYXN0X3NlZW4gfSB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVVc2VyID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX1VTRVIsIHBheWxvYWQgfSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMT0dPVVQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgbG9naW4sIHJlZ2lzdGVyLCB1cGRhdGVVc2VyLCBsb2dvdXQgfX1cbiAgICA+XG4gICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhEaXNwYXRjaENvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aERpc3BhdGNoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhTdGF0ZUNvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGhEaXNwYXRjaCwgdXNlQXV0aFN0YXRlIH07XG4iLCJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuZXhwb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgaGFzdXJhVXNlckNsaWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9BUElfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtSGFzdXJhLUFkbWluLVNlY3JldFwiOlxuICAgICAgICBcIklNM0RBNWI0SkFrbUJlUUE1b3dQS2s4SDlja3B0S2trSU1JQkhVUFZ3UUtvcTJkNVJLWTJpN2UzaEpEOGNVanBcIixcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTywgc2V0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIjsgLy8gbXVzdCBnbyBiZWZvcmUgcGx1Z2luc1xyXG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvY29tbW9uL21haW4uY3NzXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkL21haW4uY3NzXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvbGlzdC9tYWluLmNzc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aFwiO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkXCI7XHJcbmltcG9ydCBsaXN0UGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2xpc3RcIjtcclxuaW1wb3J0IHsgaGFzdXJhVXNlckNsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvaGFzdXJhLXVzZXItY2xpZW50XCI7XHJcbmNvbnN0IG1pbmRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcclxuaW1wb3J0IHsgZGlmZmVyZW5jZUluRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY29uc3QgR2V0VXNlcnNJZCA9IGdxbGBcclxuICB7XHJcbiAgICBsZWF2ZSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHVzZXJfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGdldExlYXZlID0gZ3FsYFxyXG4gIHF1ZXJ5IE15UXVlcnkoJGlkOiBJbnQhKSB7XHJcbiAgICBsZWF2ZSh3aGVyZTogeyB1c2VyX2lkOiB7IF9lcTogJGlkIH0gfSkge1xyXG4gICAgICBpZFxyXG4gICAgICByZWFzb25cclxuICAgICAgc3RhcnRfZGF0ZVxyXG4gICAgICBlbmRfZGF0ZVxyXG4gICAgICBjb3VudF9kXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgY291bnQgPSBncWxgXHJcbiAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICBsZWF2ZV9hZ2dyZWdhdGUge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIGNvdW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVcGRhdGVMZWF2ZSA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVfbGVhdmVfYnlfcGsoXHJcbiAgICAkaWQ6IEludCFcclxuICAgICRyZWFzb246IFN0cmluZyFcclxuICAgICRzdGFydF9kYXRlOiB0aW1lc3RhbXAhXHJcbiAgICAkZW5kX2RhdGU6IHRpbWVzdGFtcCFcclxuICAgICRjb3VudF9kOiBJbnQhXHJcbiAgKSB7XHJcbiAgICB1cGRhdGVfbGVhdmVfYnlfcGsoXHJcbiAgICAgIHBrX2NvbHVtbnM6IHsgaWQ6ICRpZCB9XHJcbiAgICAgIF9zZXQ6IHtcclxuICAgICAgICByZWFzb246ICRyZWFzb25cclxuICAgICAgICBzdGFydF9kYXRlOiAkc3RhcnRfZGF0ZVxyXG4gICAgICAgIGVuZF9kYXRlOiAkZW5kX2RhdGVcclxuICAgICAgICBjb3VudF9kOiAkY291bnRfZFxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgcmVhc29uXHJcbiAgICAgIHN0YXJ0X2RhdGVcclxuICAgICAgZW5kX2RhdGVcclxuICAgICAgY291bnRfZFxyXG4gICAgICBzdGF0dXNcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IGxlYXZlYnlJRCA9IGdxbGBcclxuICBxdWVyeSBNeVF1ZXJ5KCRpZDogSW50ID0gMTApIHtcclxuICAgIGxlYXZlX2J5X3BrKGlkOiAkaWQpIHtcclxuICAgICAgY291bnRfZFxyXG4gICAgICBlbmRfZGF0ZVxyXG4gICAgICBmaWxlXHJcbiAgICAgIGlkXHJcbiAgICAgIHJlYXNvblxyXG4gICAgICBzdGFydF9kYXRlXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICB1c2VyX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3VtTGVhdmUgPSBncWxgXHJcbiAgcXVlcnkgTXlRdWVyeSgkaWQ6IEludCEpIHtcclxuICAgIGxlYXZlX2FnZ3JlZ2F0ZSh3aGVyZTogeyB1c2VyX2lkOiB7IF9lcTogJGlkIH0gfSkge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIHN1bSB7XHJcbiAgICAgICAgICBjb3VudF9kXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRBZG1pbklEcyA9IGdxbGBcclxuICBxdWVyeSBNeVF1ZXJ5IHtcclxuICAgIFVzZXIod2hlcmU6IHsgUm9sZTogeyBfZXE6IFwiQWRtaW5cIiB9IH0pIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEFkZE5vdGlmaWNhdGlvbiA9IGdxbGBcclxuICBtdXRhdGlvbiBNeU11dGF0aW9uKCRvYmplY3RzOiBbbm90aWZpY2F0aW9uX2luc2VydF9pbnB1dCFdISkge1xyXG4gICAgaW5zZXJ0X25vdGlmaWNhdGlvbihvYmplY3RzOiAkb2JqZWN0cykge1xyXG4gICAgICBhZmZlY3RlZF9yb3dzXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgaGFzdXJhID0gaGFzdXJhVXNlckNsaWVudCgpO1xyXG5cclxuICBjb25zdCB7IGxlYXZlIH0gPSBhd2FpdCBoYXN1cmEucmVxdWVzdChHZXRVc2Vyc0lkKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBsZWF2ZS5tYXAoKHsgaWQsIHVzZXJfaWQgfSkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IGlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgcDE6IHVzZXJfaWQudG9TdHJpbmcoKSxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgaGFzdXJhID0gaGFzdXJhVXNlckNsaWVudCgpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuICBjb25zdCB7IHAxIH0gPSBwYXJhbXM7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIGNvbnNvbGUubG9nKHAxKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChnZXRMZWF2ZSwgeyBpZCB9KTtcclxuICBjb25zdCBEYXRhQ291bnQgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChzdW1MZWF2ZSwgeyBpZDogcDEgfSk7XHJcbiAgY29uc3QgQ291bnQgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChjb3VudCk7XHJcbiAgY29uc3QgbGVhdmUgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChsZWF2ZWJ5SUQsIHsgaWQgfSk7XHJcbiAgY29uc3QgQWRtaW5zID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoZ2V0QWRtaW5JRHMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbERhdGEsXHJcbiAgICAgIERhdGFDb3VudCxcclxuICAgICAgaWQsXHJcbiAgICAgIENvdW50LFxyXG4gICAgICBsZWF2ZSxcclxuICAgICAgcDEsXHJcbiAgICAgIEFkbWlucyxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlYXZldXBkYXRlKHtcclxuICBpbml0aWFsRGF0YSxcclxuICBpZCxcclxuICBwMSxcclxuICBEYXRhQ291bnQsXHJcbiAgQ291bnQsXHJcbiAgbGVhdmUsXHJcbiAgQWRtaW5zLFxyXG59KSB7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZUF1dGhTdGF0ZSgpO1xyXG4gIGNvbnNvbGUubG9nKHAxKTtcclxuICBjb25zdCBzdW1MZWF2ZSA9IERhdGFDb3VudC5sZWF2ZV9hZ2dyZWdhdGUuYWdncmVnYXRlLnN1bS5jb3VudF9kO1xyXG4gIGNvbnN0IFtoaWRlLCBzZXRoaWRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtoaWRlZiwgc2V0aGlkZWZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnNvbGUubG9nKHN1bUxlYXZlKTtcclxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICBzZXRoaWRlKCFoaWRlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG9nZ2xlZmlsZSgpIHtcclxuICAgIHNldGhpZGVmKHRydWUpO1xyXG4gIH1cclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGNvbnRyb2wsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCBoYXN1cmEgPSBoYXN1cmFVc2VyQ2xpZW50KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoZ2V0TGVhdmUsIChxdWVyeSkgPT4gaGFzdXJhLnJlcXVlc3QocXVlcnkpLCB7XHJcbiAgICBpbml0aWFsRGF0YSxcclxuICAgIHJldmFsaWRhdGVPbk1vdW50OiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHQgPSBkYXRhLmxlYXZlLm1hcCgoeyBpZCwgcmVhc29uLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IGZvcm1hdChwYXJzZUlTTyhzdGFydF9kYXRlKSwgXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgcmV0dXJuIHN0YXJ0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGUgPSBkYXRhLmxlYXZlLm1hcCgoeyBpZCwgcmVhc29uLCBzdGFydF9kYXRlLCBlbmRfZGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBlbmQgPSBmb3JtYXQocGFyc2VJU08oZW5kX2RhdGUpLCBcInl5eXktTU0tZGRcIik7XHJcbiAgICByZXR1cm4gZW5kO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHN0YXJ0ZGF0ZSA9IGZvcm1hdChcclxuICAgIHBhcnNlSVNPKGxlYXZlLmxlYXZlX2J5X3BrLnN0YXJ0X2RhdGUpLFxyXG4gICAgXCJ5eXl5LU1NLWRkXCJcclxuICApO1xyXG4gIGNvbnN0IGVuZGF0ZSA9IGZvcm1hdChwYXJzZUlTTyhsZWF2ZS5sZWF2ZV9ieV9way5lbmRfZGF0ZSksIFwieXl5eS1NTS1kZFwiKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoeyByZWFzb24sIHN0YXJ0X2RhdGUsIGVuZF9kYXRlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvdW50X2QgPSBkaWZmZXJlbmNlSW5EYXlzKFxyXG4gICAgICAgIERhdGUucGFyc2UoZW5kX2RhdGUpLFxyXG4gICAgICAgIERhdGUucGFyc2Uoc3RhcnRfZGF0ZSlcclxuICAgICAgKTtcclxuICAgICAgaWYgKGNvdW50X2QgPCAxKSB7XHJcbiAgICAgICAgYWxlcnQoXCJwbGVhc2UgZW50ZXIgYSB2YWxpZCBwZXJpb2RcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAodC5pbmNsdWRlcyhzdGFydF9kYXRlKSB8fCBlLmluY2x1ZGVzKGVuZF9kYXRlKSkge1xyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgXCJ5b3UgYWxyZWFkeSBzaWduZWQgZm9yIHRob3NlIGRheXMgLCBwbGVhc2UgdHJ5IGFnYWluIG9yIGNvbnRhY3QgdGhlIGFkbWluXCJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGlkdCA9IGxlYXZlLmxlYXZlX2J5X3BrLmlkO1xyXG4gICAgICAgIGNvbnN0IHQgPSBBZG1pbnMuVXNlci5tYXAoKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMZWF2ZSByZXF1ZXN0IHVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMZWF2ZSByZXF1ZXN0IHVwZGF0ZWRcIixcclxuICAgICAgICAgICAgdXNlcl9pZDogaWQsXHJcbiAgICAgICAgICAgIHNlZW46IGZhbHNlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IHVwZGF0ZV9sZWF2ZV9ieV9wayB9ID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoVXBkYXRlTGVhdmUsIHtcclxuICAgICAgICAgIGlkOiBpZHQsXHJcbiAgICAgICAgICByZWFzb24sXHJcbiAgICAgICAgICBzdGFydF9kYXRlLFxyXG4gICAgICAgICAgY291bnRfZCxcclxuICAgICAgICAgIGVuZF9kYXRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgaW5zZXJ0X25vdGlmaWNhdGlvbiB9ID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoQWRkTm90aWZpY2F0aW9uLCB7XHJcbiAgICAgICAgICBvYmplY3RzOiB0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgXCJ5b3VyIGxlYXZlIHJlcXVlc3QgIGhhcyBiZWVuIHVwZGF0ZWQsIHBsZWFzZSB3YWl0IHVudGlsIHdlIHJldmlldyBpdFwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBwYXRobmFtZSA9IGAvbGVhdmUvJHtwMX1gO1xyXG5cclxuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGhuYW1lKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VscmVxdWVzdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgRGVsZXRlID0gZ3FsYFxyXG4gICAgICBtdXRhdGlvbiBNeU11dGF0aW9uKCRpZDogSW50ISkge1xyXG4gICAgICAgIGRlbGV0ZV9sZWF2ZSh3aGVyZTogeyBpZDogeyBfZXE6ICRpZCB9IH0pIHtcclxuICAgICAgICAgIGFmZmVjdGVkX3Jvd3NcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGA7XHJcbiAgICBpZiAoY29uZmlybShcImFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhpcyByZXF1ZXN0IFwiKSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGhhc3VyYS5yZXF1ZXN0KERlbGV0ZSwgeyBpZCB9KTtcclxuICAgICAgICBtdXRhdGUoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURhdGVDbGljayA9IChhcmcpID0+IHtcclxuICAgIC8vIGJpbmQgd2l0aCBhbiBhcnJvdyBmdW5jdGlvblxyXG4gICAgYWxlcnQoYGRhdGUgJHthcmcuZGF0ZVN0cn0gbWFya2VkYCk7XHJcbiAgICAvLyBhbGVydChcIkNvb3JkaW5hdGVzOiBcIiArIGFyZy5qc0V2ZW50LnBhZ2VYICsgXCIsXCIgKyBhcmcuanNFdmVudC5wYWdlWSk7XHJcbiAgICAvLyBhbGVydChcIkN1cnJlbnQgdmlldzogXCIgKyBhcmcudmlldy50eXBlKTtcclxuICAgIC8vIGNoYW5nZSB0aGUgZGF5J3MgYmFja2dyb3VuZCBjb2xvciBqdXN0IGZvciBmdW5cclxuICAgIGFyZy5kYXlFbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGRjVDNUNcIjtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxNTAwIH19PlxyXG4gICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPiBDYWxlbmRhcjwvaDE+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgcG9ydGxldC1maXQgYm9yZGVyZWQgY2FsZW5kYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC10aXRsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCIgaWNvbi1sYXllcnMgZm9udC1ncmVlblwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXB0aW9uLXN1YmplY3QgZm9udC1ncmVlbiBzYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIEhvbGlkYXlzXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LWJvZHkgXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogNDUgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaGlkZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmcgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XYXJuaW5nITwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91IGhhdmUgPHN0cm9uZz57MjAgLSBzdW1MZWF2ZX0gPC9zdHJvbmc+ZGF5cyByZW1haW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoaXMgeWVhciAsIHBsZWFzZSBmZWVsIGZyZWUgdG8gY29udGFjdCB1cyBpZiB5b3UgZ290XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuIHVyZ2VudCBzaXR1YXRpb24gZm9yIGxlYXZlLiBoYXZlIGEgbmljZSBkYXkhe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DbG9zZSA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJleHRlcm5hbC1ldmVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5SZWFzb246PC9zdHJvbmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtsZWF2ZS5sZWF2ZV9ieV9way5yZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWFzb24/Li4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgbXVzdCBwcm92aWRlIGEgcmVhc29uIGluIG9yZGVyIHRvIG1vdmUgZm9yd2FyZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnJlYXNvbiAmJiA8c3Bhbj57ZXJyb3JzLnJlYXNvbi5tZXNzYWdlfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNhbCBJc3N1ZT97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVmaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+YWRkIHByb29mIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGhpZGVmID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+c3RhcnQgZGF5PC9sYWJlbD4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFydF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c3RhcnRkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogYCR7bWluZGF0ZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+ZW5kIGRheTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtlbmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbWluOiBgJHttaW5kYXRlfWAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBkZW1hbmR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gQ29sb3I8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNThENjhEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPmFjY2VwdGVkPC90ZD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0YzOUMxMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiBwZW5kaW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRTc0QzNDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+cmVqZWN0ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ2aXNpYmxlLXhzXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgICAgICAgPEZ1bGxDYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgICBwbHVnaW5zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5R3JpZFBsdWdpbixcclxuICAgICAgICAgICAgICAgICAgICB0aW1lR3JpZFBsdWdpbixcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblBsdWdpbixcclxuICAgICAgICAgICAgICAgICAgICBsaXN0UGx1Z2luLFxyXG4gICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJUb29sYmFyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCJwcmV2LG5leHQgdG9kYXlcIixcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFwidGl0bGVcIixcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogXCJkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5LGxpc3RXZWVrXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWaWV3PVwiZGF5R3JpZE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdE1pcnJvcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgZGF5TWF4RXZlbnRzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB3ZWVrTnVtYmVycz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdGhlbWVTeXN0ZW09XCJib290c3RyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBldmVudHM9e2RhdGEubGVhdmUubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICh7IGlkLCByZWFzb24sIHN0YXJ0X2RhdGUsIGVuZF9kYXRlLCBzdGF0dXMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gZm9ybWF0KHBhcnNlSVNPKGVuZF9kYXRlKSwgXCJ5eXl5LU1NLWRkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBmb3JtYXQocGFyc2VJU08oc3RhcnRfZGF0ZSksIFwieXl5eS1NTS1kZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNThENjhEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBlbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGMzlDMTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJhY2tncm91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0U3NEMzQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUNsaWNrPXtoYW5kbGVEYXRlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWxFdmVudHM9e0lOSVRJQUxfRVZFTlRTfSAvLyBhbHRlcm5hdGl2ZWx5LCB1c2UgdGhlIGBldmVudHNgIHNldHRpbmcgdG8gZmV0Y2ggZnJvbSBhIGZlZWRcclxuICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0PXt0aGlzLmhhbmRsZURhdGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGV2ZW50Q29udGVudD17cmVuZGVyRXZlbnRDb250ZW50fSAvLyBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIGV2ZW50c1NldD17dGhpcy5oYW5kbGVFdmVudHN9IC8vIGNhbGxlZCBhZnRlciBldmVudHMgYXJlIGluaXRpYWxpemVkL2FkZGVkL2NoYW5nZWQvcmVtb3ZlZFxyXG4gICAgICAgICAgICAgICAgICAvKiB5b3UgY2FuIHVwZGF0ZSBhIHJlbW90ZSBkYXRhYmFzZSB3aGVuIHRoZXNlIGZpcmU6XHJcbiAgICAgICAgICAgICAgZXZlbnRBZGQ9e2Z1bmN0aW9uKCl7fX1cclxuICAgICAgICAgICAgICBldmVudENoYW5nZT17ZnVuY3Rpb24oKXt9fVxyXG4gICAgICAgICAgICAgIC8vICovXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIHZhbGlkUmFuZ2U9e3tcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGFydDogXCIyMDIxLTA4LTAzXCIsXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZW5kOiBcIjIwMjEtMDgtMDdcIixcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgd2Vla2VuZHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvLyBzZWxlY3Q9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvbGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZnVsbGNhbGVuZGFyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvdGltZWdyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC1yZXF1ZXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXBlcnNpc3RlZC1zdGF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9