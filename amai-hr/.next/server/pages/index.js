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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hasura-user-client */ "./lib/hasura-user-client.js");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/react */ "@fullcalendar/react");
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid */ "@fullcalendar/daygrid");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/common/main.css */ "./node_modules/@fullcalendar/common/main.css");
/* harmony import */ var _fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_common_main_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/daygrid/main.css */ "./node_modules/@fullcalendar/daygrid/main.css");
/* harmony import */ var _fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid_main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/timegrid/main.css */ "./node_modules/@fullcalendar/timegrid/main.css");
/* harmony import */ var _fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid_main_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/list/main.css */ "./node_modules/@fullcalendar/list/main.css");
/* harmony import */ var _fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list_main_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/interaction */ "@fullcalendar/interaction");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/timegrid */ "@fullcalendar/timegrid");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/list */ "@fullcalendar/list");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_list__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context/auth */ "./context/auth.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var date_fns_formatRelative__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns/formatRelative */ "date-fns/formatRelative");
/* harmony import */ var date_fns_formatRelative__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(date_fns_formatRelative__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/differenceInMinutes */ "date-fns/differenceInMinutes");
/* harmony import */ var date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "C:\\Users\\msdtt\\OneDrive\\Documents\\amai_hr_next_js_hasura\\amai-hr\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // must go before plugins




















const today = new Date();
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_15___default.a.span`
  background-color: #4cd137;
  position: absolute;

  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: -20px;
  margin-left: 55px;
`;
const DotAway = styled_components__WEBPACK_IMPORTED_MODULE_15___default.a.span`
  background-color: #f5c71a;
  position: absolute;

  height: 20px;
  width: 20px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: -20px;
  margin-left: 55px;
`;
const Users = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query MyQuery {
    User_aggregate {
      aggregate {
        count
      }
    }
  }
`;
const GetEvents = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query MyQuery {
    Event {
      id
      Title
      description
      start_date
    }
  }
`;
const Projects = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query Query {
    Project_aggregate {
      aggregate {
        count
      }
    }
  }
`;
const Candidats = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 0 } }) {
      aggregate {
        count
      }
    }
  }
`;
const CandidatsA = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 1 } }) {
      aggregate {
        count
      }
    }
  }
`;
const CandidatsR = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query Query {
    Candidate_aggregate(where: { Status: { _eq: 2 } }) {
      aggregate {
        count
      }
    }
  }
`;
const GetUsers = graphql_request__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  {
    User(order_by: { created_at: asc }) {
      id
      Name
      created_at
      last_seen
      Avatar
      last_seen_url
    }
  }
`;
const getStaticProps = async () => {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_4__["hasuraUserClient"])();
  const initialData = await hasura.request(Users);
  const ProjectData = await hasura.request(Projects);
  const CandidatsData = await hasura.request(Candidats);
  const CandidatsDataA = await hasura.request(CandidatsA);
  const CandidatsDataR = await hasura.request(CandidatsR);
  const Events = await hasura.request(GetEvents);
  const users = await hasura.request(GetUsers);
  return {
    props: {
      initialData,
      ProjectData,
      CandidatsData,
      Events,
      users,
      CandidatsDataA,
      CandidatsDataR
    },
    revalidate: 1
  };
};
function Home({
  initialData,
  ProjectData,
  CandidatsData,
  CandidatsDataR,
  CandidatsDataA,
  Events,
  users
}) {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_4__["hasuraUserClient"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    isAuthenticated
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_14__["useAuthState"])();
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hide,
    1: sethide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); ///////////////////////////
  ///////redirectifnotloggedin

  function toggle() {
    sethide(true);
  }

  function hidet() {
    sethide(false);
  }

  function mouseEnter() {
    setShow(false);
  }

  function mouseLeave() {
    setShow(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setLoaded(true);
    }
  }, []); ////

  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(Users, query => hasura.request(query), {
    initialData,
    revalidateOnMount: true
  });
  const {
    datay
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(GetUsers, query => hasura.request(query), {
    users,
    revalidateOnMount: true
  });
  const {
    dataEvents
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(GetEvents, query => hasura.request(query), {
    Events,
    revalidateOnMount: true
  });

  if (!loaded) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 12
      }
    }); //show nothing or a loader
  }

  const datasta = {
    labels: ["Users", "projects", "Candidates"],
    datasets: [{
      label: "Statistics",
      data: [data.User_aggregate.aggregate.count, ProjectData.Project_aggregate.aggregate.count, CandidatsData.Candidate_aggregate.aggregate.count],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1
    }]
  };
  const dataCand = {
    labels: ["Approved Candidates", "Rejected Candidates", "Pending Candidates"],
    datasets: [{
      label: "Statistics",
      data: [CandidatsDataA.Candidate_aggregate.aggregate.count, CandidatsDataR.Candidate_aggregate.aggregate.count, CandidatsData.Candidate_aggregate.aggregate.count],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1
    }]
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "page-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "page-content",
    style: {
      minHeight: 1500
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, " ", __jsx("div", {
    className: "portlet light bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "page-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 15
    }
  }, " Admin Dashboard"), __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }, "statistics, charts, recent events and reports"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "dashboard-stat dashboard-stat-v2 blue",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "visual",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-comments",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 23
    }
  }, __jsx("span", {
    "data-counter": "counterup",
    "data-value": "1349",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, data.User_aggregate.aggregate.count)), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 23
    }
  }, " Users ")))), __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "dashboard-stat dashboard-stat-v2 red",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "visual",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-bar-chart-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx("span", {
    "data-counter": "counterup",
    "data-value": "12,5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 25
    }
  }), ProjectData.Project_aggregate.aggregate.count), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 23
    }
  }, " Projects ")))), __jsx("div", {
    className: "col-lg-3 col-md-3 col-sm-6 col-xs-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "dashboard-stat dashboard-stat-v2 green",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "visual",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 23
    }
  }, __jsx("span", {
    "data-counter": "counterup",
    "data-value": "549",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, CandidatsData.Candidate_aggregate.aggregate.count)), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 23
    }
  }, " Pending Candidats "))))), " ", __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }), hide ? __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "portlet light bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "portlet-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "icon-bubble font-dark hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  })), users.User.map(({
    created_at,
    id,
    last_seen,
    Name,
    Avatar,
    last_seen_url
  }) => {
    const formattedJoinedAt = date_fns_formatRelative__WEBPACK_IMPORTED_MODULE_16___default()(Date.parse(created_at), today, {
      weekStartsOn: 1
    });
    const formattedLastSeen = date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_17___default()(today, Date.parse(last_seen));
    const formattedLastSeeninHours = Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["differenceInHours"])(today, Date.parse(last_seen));
    const formattedLastSeenindays = Object(date_fns__WEBPACK_IMPORTED_MODULE_19__["differenceInDays"])(today, Date.parse(last_seen));
    const isUserOnline = 2 >= formattedLastSeen;
    return __jsx("div", {
      className: "col-md-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "mt-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 31
      }
    }, Avatar ? __jsx("div", {
      className: "profile-userpic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 35
      }
    }, " ", __jsx("img", {
      style: {
        display: "inline",
        width: 75,
        height: 75,
        objectFit: "cover"
      },
      src: `../${Avatar}`,
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 37
      }
    }), " ") : __jsx("div", {
      className: "profile-userpic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 35
      }
    }, __jsx("img", {
      style: {
        display: "inline",
        width: 75,
        height: 75,
        objectFit: "cover"
      },
      src: `../profile.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 37
      }
    }), " "), " ", isUserOnline ? __jsx(Dot, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 35
      }
    }) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 35
      }
    }, __jsx(DotAway, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 37
      }
    }), !show ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 39
      }
    }, formattedLastSeen, " min ago") : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 39
      }
    }))), __jsx("h3", {
      className: "mt-username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 31
      }
    }, Name));
  }), " ", __jsx("span", {
    style: {
      cursor: "pointer",
      marginLeft: 820
    },
    onClick: hidet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 23
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, "hide list")))), " ") : __jsx("span", {
    style: {
      cursor: "pointer"
    },
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, "show online users ")), __jsx(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_12___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_11___default.a, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_13___default.a],
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
    eventRemove: true,
    events: Events.Event.map(({
      id,
      Title,
      start_date
    }) => {
      return {
        title: Title,
        date: start_date
      };
    }),
    eventColor: "#378006" // weekends={this.state.weekendsVisible}
    // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
    // select={this.handleDateSelect}
    // eventContent={renderEventContent} // custom render function
    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed

    /* you can update a remote database when these fire:
    eventAdd={function(){}}
    eventChange={function(){}}
    */
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 15
    }
  }))), " ", __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 11
    }
  }, " ", __jsx("div", {
    className: "portlet light bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 13
    }
  }, " ", __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_18__["Bar"], {
    data: datasta,
    width: 400,
    height: 200,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "portlet light bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_18__["Doughnut"], {
    data: datasta,
    width: 400,
    height: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "portlet light bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 13
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_18__["Pie"], {
    data: dataCand,
    width: 400,
    height: 400,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 15
    }
  }))))));
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

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/differenceInMinutes":
/*!***********************************************!*\
  !*** external "date-fns/differenceInMinutes" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/differenceInMinutes");

/***/ }),

/***/ "date-fns/formatRelative":
/*!******************************************!*\
  !*** external "date-fns/formatRelative" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/formatRelative");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9oYXN1cmEtdXNlci1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmdWxsY2FsZW5kYXIvbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9kaWZmZXJlbmNlSW5NaW51dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0UmVsYXRpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwidXNlUGVyc2lzdGVkQXV0aFN0YXRlIiwiY3JlYXRlUGVyc2lzdGVkU3RhdGUiLCJMT0dJTl9TVUNDRVNTIiwiVVBEQVRFX1VTRVIiLCJMT0dPVVQiLCJpbml0aWFsU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidG9rZW4iLCJzYXZlX2xhc3Rfc2VlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNhdmVkQXV0aFN0YXRlIiwic2F2ZUF1dGhTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibmFtZSIsImxhc3RfbmFtZSIsImRvbWFpbiIsInBob25lX251bWJlciIsImNyZWF0ZWRfYXQiLCJGaWxlIiwibWFuYWdlcl9pZCIsIlJvbGUiLCJ1cGRhdGVVc2VyIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJoYXN1cmFVc2VyQ2xpZW50IiwiR3JhcGhRTENsaWVudCIsInByb2Nlc3MiLCJ0b2RheSIsIkRhdGUiLCJEb3QiLCJzdHlsZWQiLCJzcGFuIiwiRG90QXdheSIsIlVzZXJzIiwiZ3FsIiwiR2V0RXZlbnRzIiwiUHJvamVjdHMiLCJDYW5kaWRhdHMiLCJDYW5kaWRhdHNBIiwiQ2FuZGlkYXRzUiIsIkdldFVzZXJzIiwiZ2V0U3RhdGljUHJvcHMiLCJoYXN1cmEiLCJpbml0aWFsRGF0YSIsInJlcXVlc3QiLCJQcm9qZWN0RGF0YSIsIkNhbmRpZGF0c0RhdGEiLCJDYW5kaWRhdHNEYXRhQSIsIkNhbmRpZGF0c0RhdGFSIiwiRXZlbnRzIiwidXNlcnMiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9hZGVkIiwic2V0TG9hZGVkIiwidXNlU3RhdGUiLCJoaWRlIiwic2V0aGlkZSIsInNob3ciLCJzZXRTaG93IiwidG9nZ2xlIiwiaGlkZXQiLCJtb3VzZUVudGVyIiwibW91c2VMZWF2ZSIsInB1c2giLCJkYXRhIiwidXNlU1dSIiwicXVlcnkiLCJyZXZhbGlkYXRlT25Nb3VudCIsImRhdGF5IiwiZGF0YUV2ZW50cyIsImRhdGFzdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiVXNlcl9hZ2dyZWdhdGUiLCJhZ2dyZWdhdGUiLCJjb3VudCIsIlByb2plY3RfYWdncmVnYXRlIiwiQ2FuZGlkYXRlX2FnZ3JlZ2F0ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJkYXRhQ2FuZCIsIm1pbkhlaWdodCIsIlVzZXIiLCJtYXAiLCJpZCIsImxhc3Rfc2VlbiIsIk5hbWUiLCJBdmF0YXIiLCJsYXN0X3NlZW5fdXJsIiwiZm9ybWF0dGVkSm9pbmVkQXQiLCJmb3JtYXRSZWxhdGl2ZSIsInBhcnNlIiwid2Vla1N0YXJ0c09uIiwiZm9ybWF0dGVkTGFzdFNlZW4iLCJkaWZmZXJlbmNlSW5NaW51dGVzIiwiZm9ybWF0dGVkTGFzdFNlZW5pbkhvdXJzIiwiZGlmZmVyZW5jZUluSG91cnMiLCJmb3JtYXR0ZWRMYXN0U2VlbmluZGF5cyIsImRpZmZlcmVuY2VJbkRheXMiLCJpc1VzZXJPbmxpbmUiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJjdXJzb3IiLCJtYXJnaW5MZWZ0IiwiZGF5R3JpZFBsdWdpbiIsInRpbWVHcmlkUGx1Z2luIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJsaXN0UGx1Z2luIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiRXZlbnQiLCJUaXRsZSIsInN0YXJ0X2RhdGUiLCJ0aXRsZSIsImRhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBSyxRQUFJLEVBQUVZLFFBQVg7QUFBcUIsU0FBSyxFQUFFLEdBQTVCO0FBQWlDLFVBQU0sRUFBRSxHQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixDQTNNRixDQURGLENBREYsQ0FERjtBQStORCxDOzs7Ozs7Ozs7OztBQ3plRCxrRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjcmVhdGVQZXJzaXN0ZWRTdGF0ZSBmcm9tIFwidXNlLXBlcnNpc3RlZC1zdGF0ZVwiO1xuXG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgdXNlUGVyc2lzdGVkQXV0aFN0YXRlID0gY3JlYXRlUGVyc2lzdGVkU3RhdGUoXCJBTUFJX0FVVEhcIik7XG5cbmNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcIkxPR0lOX1NVQ0NFU1NcIjtcbmNvbnN0IFVQREFURV9VU0VSID0gXCJVUERBVEVfVVNFUlwiO1xuY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICB1c2VyOiBudWxsLFxuICB0b2tlbjogbnVsbCxcbiAgc2F2ZV9sYXN0X3NlZW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBVUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcbiAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzYXZlZEF1dGhTdGF0ZSwgc2F2ZUF1dGhTdGF0ZV0gPSB1c2VQZXJzaXN0ZWRBdXRoU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHNhdmVkQXV0aFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNhdmVBdXRoU3RhdGUoc3RhdGUpO1xuICB9LCBbc3RhdGUsIHNhdmVBdXRoU3RhdGVdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgc2F2ZV9sYXN0X3NlZW4gfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcblxuICAgIGNvbnN0IHsgdG9rZW4sIC4uLnVzZXIgfSA9IGpzb247XG5cbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHsgdG9rZW4sIHVzZXIsIHNhdmVfbGFzdF9zZWVuIH0gfSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoe1xuICAgIG5hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIGRvbWFpbixcbiAgICBwaG9uZV9udW1iZXIsXG4gICAgcGFzc3dvcmQsXG4gICAgY3JlYXRlZF9hdCxcbiAgICBGaWxlLFxuICAgIG1hbmFnZXJfaWQsXG4gICAgUm9sZSxcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yZWdpc3RlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBkb21haW4sXG4gICAgICAgIHBob25lX251bWJlcixcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGNyZWF0ZWRfYXQsXG4gICAgICAgIEZpbGUsXG4gICAgICAgIG1hbmFnZXJfaWQsXG4gICAgICAgIFJvbGUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvLyBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGpzb24/Lm1lc3NhZ2UpO1xuXG4gICAgLy8gY29uc3QgeyB0b2tlbiwgLi4udXNlciB9ID0ganNvbjtcblxuICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogTE9HSU5fU1VDQ0VTUywgcGF5bG9hZDogeyB0b2tlbiwgdXNlciwgc2F2ZV9sYXN0X3NlZW4gfSB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVVc2VyID0gKHBheWxvYWQpID0+IGRpc3BhdGNoKHsgdHlwZTogVVBEQVRFX1VTRVIsIHBheWxvYWQgfSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMT0dPVVQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgbG9naW4sIHJlZ2lzdGVyLCB1cGRhdGVVc2VyLCBsb2dvdXQgfX1cbiAgICA+XG4gICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhEaXNwYXRjaENvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aERpc3BhdGNoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhTdGF0ZUNvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIsIHVzZUF1dGhEaXNwYXRjaCwgdXNlQXV0aFN0YXRlIH07XG4iLCJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuZXhwb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgaGFzdXJhVXNlckNsaWVudCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBHcmFwaFFMQ2xpZW50KHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0hBU1VSQV9BUElfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlgtSGFzdXJhLUFkbWluLVNlY3JldFwiOlxuICAgICAgICBcIklNM0RBNWI0SkFrbUJlUUE1b3dQS2s4SDlja3B0S2trSU1JQkhVUFZ3UUtvcTJkNVJLWTJpN2UzaEpEOGNVanBcIixcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgaGFzdXJhVXNlckNsaWVudCB9IGZyb20gXCIuLi9saWIvaGFzdXJhLXVzZXItY2xpZW50XCI7XHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIkBmdWxsY2FsZW5kYXIvcmVhY3RcIjsgLy8gbXVzdCBnbyBiZWZvcmUgcGx1Z2luc1xyXG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tIFwiQGZ1bGxjYWxlbmRhci9kYXlncmlkXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvY29tbW9uL21haW4uY3NzXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZC9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkL21haW4uY3NzXCI7XHJcbmltcG9ydCBcIkBmdWxsY2FsZW5kYXIvbGlzdC9tYWluLmNzc1wiO1xyXG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSBcIkBmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL3RpbWVncmlkXCI7XHJcbmltcG9ydCBsaXN0UGx1Z2luIGZyb20gXCJAZnVsbGNhbGVuZGFyL2xpc3RcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlLCB1c2VBdXRoRGlzcGF0Y2ggfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFJlbGF0aXZlXCI7XHJcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gXCJkYXRlLWZucy9kaWZmZXJlbmNlSW5NaW51dGVzXCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IFBpZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuXHJcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkhvdXJzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnN0IERvdCA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2QxMzc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG5gO1xyXG5cclxuY29uc3QgRG90QXdheSA9IHN0eWxlZC5zcGFuYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWM3MWE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG5gO1xyXG5jb25zdCBVc2VycyA9IGdxbGBcclxuICBxdWVyeSBNeVF1ZXJ5IHtcclxuICAgIFVzZXJfYWdncmVnYXRlIHtcclxuICAgICAgYWdncmVnYXRlIHtcclxuICAgICAgICBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBHZXRFdmVudHMgPSBncWxgXHJcbiAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICBFdmVudCB7XHJcbiAgICAgIGlkXHJcbiAgICAgIFRpdGxlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHN0YXJ0X2RhdGVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFByb2plY3RzID0gZ3FsYFxyXG4gIHF1ZXJ5IFF1ZXJ5IHtcclxuICAgIFByb2plY3RfYWdncmVnYXRlIHtcclxuICAgICAgYWdncmVnYXRlIHtcclxuICAgICAgICBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDYW5kaWRhdHMgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkge1xyXG4gICAgQ2FuZGlkYXRlX2FnZ3JlZ2F0ZSh3aGVyZTogeyBTdGF0dXM6IHsgX2VxOiAwIH0gfSkge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIGNvdW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IENhbmRpZGF0c0EgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkge1xyXG4gICAgQ2FuZGlkYXRlX2FnZ3JlZ2F0ZSh3aGVyZTogeyBTdGF0dXM6IHsgX2VxOiAxIH0gfSkge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIGNvdW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IENhbmRpZGF0c1IgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkge1xyXG4gICAgQ2FuZGlkYXRlX2FnZ3JlZ2F0ZSh3aGVyZTogeyBTdGF0dXM6IHsgX2VxOiAyIH0gfSkge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIGNvdW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHZXRVc2VycyA9IGdxbGBcclxuICB7XHJcbiAgICBVc2VyKG9yZGVyX2J5OiB7IGNyZWF0ZWRfYXQ6IGFzYyB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIE5hbWVcclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICBsYXN0X3NlZW5cclxuICAgICAgQXZhdGFyXHJcbiAgICAgIGxhc3Rfc2Vlbl91cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgaGFzdXJhID0gaGFzdXJhVXNlckNsaWVudCgpO1xyXG5cclxuICBjb25zdCBpbml0aWFsRGF0YSA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KFVzZXJzKTtcclxuICBjb25zdCBQcm9qZWN0RGF0YSA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KFByb2plY3RzKTtcclxuICBjb25zdCBDYW5kaWRhdHNEYXRhID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoQ2FuZGlkYXRzKTtcclxuICBjb25zdCBDYW5kaWRhdHNEYXRhQSA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KENhbmRpZGF0c0EpO1xyXG4gIGNvbnN0IENhbmRpZGF0c0RhdGFSID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoQ2FuZGlkYXRzUik7XHJcblxyXG4gIGNvbnN0IEV2ZW50cyA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KEdldEV2ZW50cyk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChHZXRVc2Vycyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbml0aWFsRGF0YSxcclxuICAgICAgUHJvamVjdERhdGEsXHJcbiAgICAgIENhbmRpZGF0c0RhdGEsXHJcbiAgICAgIEV2ZW50cyxcclxuICAgICAgdXNlcnMsXHJcbiAgICAgIENhbmRpZGF0c0RhdGFBLFxyXG4gICAgICBDYW5kaWRhdHNEYXRhUixcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtcclxuICBpbml0aWFsRGF0YSxcclxuICBQcm9qZWN0RGF0YSxcclxuICBDYW5kaWRhdHNEYXRhLFxyXG4gIENhbmRpZGF0c0RhdGFSLFxyXG4gIENhbmRpZGF0c0RhdGFBLFxyXG4gIEV2ZW50cyxcclxuICB1c2VycyxcclxufSkge1xyXG4gIGNvbnN0IGhhc3VyYSA9IGhhc3VyYVVzZXJDbGllbnQoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aFN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGlkZSwgc2V0aGlkZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy8vLy8vL3JlZGlyZWN0aWZub3Rsb2dnZWRpblxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICBzZXRoaWRlKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoaWRldCgpIHtcclxuICAgIHNldGhpZGUoZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtb3VzZUVudGVyKCkge1xyXG4gICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3VzZUxlYXZlKCkge1xyXG4gICAgc2V0U2hvdyh0cnVlKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8vL1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFVzZXJzLCAocXVlcnkpID0+IGhhc3VyYS5yZXF1ZXN0KHF1ZXJ5KSwge1xyXG4gICAgaW5pdGlhbERhdGEsXHJcbiAgICByZXZhbGlkYXRlT25Nb3VudDogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCB7IGRhdGF5IH0gPSB1c2VTV1IoR2V0VXNlcnMsIChxdWVyeSkgPT4gaGFzdXJhLnJlcXVlc3QocXVlcnkpLCB7XHJcbiAgICB1c2VycyxcclxuICAgIHJldmFsaWRhdGVPbk1vdW50OiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgZGF0YUV2ZW50cyB9ID0gdXNlU1dSKEdldEV2ZW50cywgKHF1ZXJ5KSA9PiBoYXN1cmEucmVxdWVzdChxdWVyeSksIHtcclxuICAgIEV2ZW50cyxcclxuICAgIHJldmFsaWRhdGVPbk1vdW50OiB0cnVlLFxyXG4gIH0pO1xyXG4gIGlmICghbG9hZGVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj48L2Rpdj47IC8vc2hvdyBub3RoaW5nIG9yIGEgbG9hZGVyXHJcbiAgfVxyXG4gIGNvbnN0IGRhdGFzdGEgPSB7XHJcbiAgICBsYWJlbHM6IFtcIlVzZXJzXCIsIFwicHJvamVjdHNcIiwgXCJDYW5kaWRhdGVzXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIlN0YXRpc3RpY3NcIixcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICBkYXRhLlVzZXJfYWdncmVnYXRlLmFnZ3JlZ2F0ZS5jb3VudCxcclxuICAgICAgICAgIFByb2plY3REYXRhLlByb2plY3RfYWdncmVnYXRlLmFnZ3JlZ2F0ZS5jb3VudCxcclxuICAgICAgICAgIENhbmRpZGF0c0RhdGEuQ2FuZGlkYXRlX2FnZ3JlZ2F0ZS5hZ2dyZWdhdGUuY291bnQsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcclxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcclxuICAgICAgICAgIFwicmdiYSgyNTUsIDIwNiwgODYsIDAuMilcIixcclxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcclxuICAgICAgICAgIFwicmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpXCIsXHJcbiAgICAgICAgICBcInJnYmEoMjU1LCAxNTksIDY0LCAwLjIpXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgOTksIDEzMiwgMSlcIixcclxuICAgICAgICAgIFwicmdiYSg1NCwgMTYyLCAyMzUsIDEpXCIsXHJcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAxKVwiLFxyXG4gICAgICAgICAgXCJyZ2JhKDc1LCAxOTIsIDE5MiwgMSlcIixcclxuICAgICAgICAgIFwicmdiYSgxNTMsIDEwMiwgMjU1LCAxKVwiLFxyXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMSlcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGNvbnN0IGRhdGFDYW5kID0ge1xyXG4gICAgbGFiZWxzOiBbXHJcbiAgICAgIFwiQXBwcm92ZWQgQ2FuZGlkYXRlc1wiLFxyXG4gICAgICBcIlJlamVjdGVkIENhbmRpZGF0ZXNcIixcclxuICAgICAgXCJQZW5kaW5nIENhbmRpZGF0ZXNcIixcclxuICAgIF0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiU3RhdGlzdGljc1wiLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIENhbmRpZGF0c0RhdGFBLkNhbmRpZGF0ZV9hZ2dyZWdhdGUuYWdncmVnYXRlLmNvdW50LFxyXG4gICAgICAgICAgQ2FuZGlkYXRzRGF0YVIuQ2FuZGlkYXRlX2FnZ3JlZ2F0ZS5hZ2dyZWdhdGUuY291bnQsXHJcbiAgICAgICAgICBDYW5kaWRhdHNEYXRhLkNhbmRpZGF0ZV9hZ2dyZWdhdGUuYWdncmVnYXRlLmNvdW50LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXHJcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAwLjIpXCIsXHJcbiAgICAgICAgICBcInJnYmEoMjU1LCAyMDYsIDg2LCAwLjIpXCIsXHJcbiAgICAgICAgICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXHJcbiAgICAgICAgICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKVwiLFxyXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgIFwicmdiYSgyNTUsIDk5LCAxMzIsIDEpXCIsXHJcbiAgICAgICAgICBcInJnYmEoNTQsIDE2MiwgMjM1LCAxKVwiLFxyXG4gICAgICAgICAgXCJyZ2JhKDI1NSwgMjA2LCA4NiwgMSlcIixcclxuICAgICAgICAgIFwicmdiYSg3NSwgMTkyLCAxOTIsIDEpXCIsXHJcbiAgICAgICAgICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMSlcIixcclxuICAgICAgICAgIFwicmdiYSgyNTUsIDE1OSwgNjQsIDEpXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+IEFkbWluIERhc2hib2FyZDwvaDE+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPnN0YXRpc3RpY3MsIGNoYXJ0cywgcmVjZW50IGV2ZW50cyBhbmQgcmVwb3J0czwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTYgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRhc2hib2FyZC1zdGF0IGRhc2hib2FyZC1zdGF0LXYyIGJsdWVcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY291bnRlcj1cImNvdW50ZXJ1cFwiIGRhdGEtdmFsdWU9XCIxMzQ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuVXNlcl9hZ2dyZWdhdGUuYWdncmVnYXRlLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY1wiPiBVc2VycyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS02IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc3RhdCBkYXNoYm9hcmQtc3RhdC12MiByZWRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXItY2hhcnQtb1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtY291bnRlcj1cImNvdW50ZXJ1cFwiIGRhdGEtdmFsdWU9XCIxMiw1XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7UHJvamVjdERhdGEuUHJvamVjdF9hZ2dyZWdhdGUuYWdncmVnYXRlLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NcIj4gUHJvamVjdHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc3RhdCBkYXNoYm9hcmQtc3RhdC12MiBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWNvdW50ZXI9XCJjb3VudGVydXBcIiBkYXRhLXZhbHVlPVwiNTQ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge0NhbmRpZGF0c0RhdGEuQ2FuZGlkYXRlX2FnZ3JlZ2F0ZS5hZ2dyZWdhdGUuY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjXCI+IFBlbmRpbmcgQ2FuZGlkYXRzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAge2hpZGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJ1YmJsZSBmb250LWRhcmsgaGlkZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3VzZXJzLlVzZXIubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9zZWVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Rfc2Vlbl91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRKb2luZWRBdCA9IGZvcm1hdFJlbGF0aXZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5wYXJzZShjcmVhdGVkX2F0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrU3RhcnRzT246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTGFzdFNlZW4gPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlLnBhcnNlKGxhc3Rfc2VlbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMYXN0U2VlbmluSG91cnMgPSBkaWZmZXJlbmNlSW5Ib3VycyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZS5wYXJzZShsYXN0X3NlZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRMYXN0U2VlbmluZGF5cyA9IGRpZmZlcmVuY2VJbkRheXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGUucGFyc2UobGFzdF9zZWVuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNVc2VyT25saW5lID0gMiA+PSBmb3JtYXR0ZWRMYXN0U2VlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXZhdGFyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJwaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi8ke0F2YXRhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17bW91c2VFbnRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VycGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3Byb2ZpbGUucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNVc2VyT25saW5lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG90QXdheSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXNob3cgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0dGVkTGFzdFNlZW59IG1pbiBhZ288L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtdXNlcm5hbWVcIj57TmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogODIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRldH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5oaWRlIGxpc3Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPnNob3cgb25saW5lIHVzZXJzIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPEZ1bGxDYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgcGx1Z2lucz17W1xyXG4gICAgICAgICAgICAgICAgICBkYXlHcmlkUGx1Z2luLFxyXG4gICAgICAgICAgICAgICAgICB0aW1lR3JpZFBsdWdpbixcclxuICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25QbHVnaW4sXHJcbiAgICAgICAgICAgICAgICAgIGxpc3RQbHVnaW4sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyVG9vbGJhcj17e1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcInByZXYsbmV4dCB0b2RheVwiLFxyXG4gICAgICAgICAgICAgICAgICBjZW50ZXI6IFwidGl0bGVcIixcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSxsaXN0V2Vla1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxWaWV3PVwiZGF5R3JpZE1vbnRoXCJcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdE1pcnJvcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRheU1heEV2ZW50cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGV2ZW50UmVtb3ZlXHJcbiAgICAgICAgICAgICAgICBldmVudHM9e0V2ZW50cy5FdmVudC5tYXAoKHsgaWQsIFRpdGxlLCBzdGFydF9kYXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGU6IFRpdGxlLCBkYXRlOiBzdGFydF9kYXRlIH07XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIGV2ZW50Q29sb3I9XCIjMzc4MDA2XCJcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZWVrZW5kcz17dGhpcy5zdGF0ZS53ZWVrZW5kc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsRXZlbnRzPXtJTklUSUFMX0VWRU5UU30gLy8gYWx0ZXJuYXRpdmVseSwgdXNlIHRoZSBgZXZlbnRzYCBzZXR0aW5nIHRvIGZldGNoIGZyb20gYSBmZWVkXHJcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3Q9e3RoaXMuaGFuZGxlRGF0ZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgIC8vIGV2ZW50Q29udGVudD17cmVuZGVyRXZlbnRDb250ZW50fSAvLyBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBldmVudHNTZXQ9e3RoaXMuaGFuZGxlRXZlbnRzfSAvLyBjYWxsZWQgYWZ0ZXIgZXZlbnRzIGFyZSBpbml0aWFsaXplZC9hZGRlZC9jaGFuZ2VkL3JlbW92ZWRcclxuICAgICAgICAgICAgICAgIC8qIHlvdSBjYW4gdXBkYXRlIGEgcmVtb3RlIGRhdGFiYXNlIHdoZW4gdGhlc2UgZmlyZTpcclxuICAgICAgICAgICAgICAgIGV2ZW50QWRkPXtmdW5jdGlvbigpe319XHJcbiAgICAgICAgICAgICAgICBldmVudENoYW5nZT17ZnVuY3Rpb24oKXt9fVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0IGxpZ2h0IGJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxCYXIgZGF0YT17ZGF0YXN0YX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXsyMDB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICA8RG91Z2hudXQgZGF0YT17ZGF0YXN0YX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICA8UGllIGRhdGE9e2RhdGFDYW5kfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvZGF5Z3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvbGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZnVsbGNhbGVuZGFyL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxsY2FsZW5kYXIvdGltZWdyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvZGlmZmVyZW5jZUluTWludXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXRSZWxhdGl2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=