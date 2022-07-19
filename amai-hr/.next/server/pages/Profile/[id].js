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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Profile/[id].js");
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

/***/ "./pages/Profile/[id].js":
/*!*******************************!*\
  !*** ./pages/Profile/[id].js ***!
  \*******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivatePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hasura-user-client */ "./lib/hasura-user-client.js");
/* harmony import */ var _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/hasura-admin-client */ "./lib/hasura-admin-client.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/auth */ "./context/auth.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\msdtt\\OneDrive\\Documents\\amai_hr_next_js_hasura\\amai-hr\\pages\\Profile\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const GetUsersId = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  {
    User {
      id
      Last_Name
      Name
      Avatar
      email
      Role
      Phone_Number
      Domain
      password
      File
    }
  }
`;
const GetUserById = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query GetUserById($id: Int!) {
    User_by_pk(id: $id) {
      id
      Name
      Avatar
      email
      Role
      Phone_Number
      Last_Name
      Domain
      password
      File
      Tasks_aggregate {
        aggregate {
          count
        }
      }
      LinkedIn
      Github
      Site
      User {
        Avatar
        email
        Name
        Last_Name
        Phone_Number
        Role
      }
    }
  }
`;
const GetTasks = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query MyQuery($id: Int!) {
    Task(where: { user_id: { _eq: $id } }) {
      id
      name
      user_id
      Description
      completed
      Project {
        Title
        id
        status
      }
    }
    Task_aggregate(
      where: { user_id: { _eq: $id }, completed: { _eq: false } }
    ) {
      aggregate {
        count
      }
    }
  }
`; //tobedone
//Countprojects

const Countprojects = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query MyQuery($id: Int!) {
    Project_aggregate(where: { Tasks: { user_id: { _eq: $id } } }) {
      aggregate {
        count
      }
    }
  }
`;
const getLeave = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query MyQuery($id: Int!) {
    leave(where: { user_id: { _eq: $id } }) {
      id
      reason
      start_date
      end_date
      count_d
      status
      user_id
    }
  }
`;
const Employees = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query MyQuery($id: Int!) {
    User(where: { manager_id: { _eq: $id } }) {
      Avatar
      email
      Name
      Last_Name
    }
  }
`;
const getStaticPaths = async () => {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_2__["hasuraUserClient"])();
  const {
    User
  } = await hasura.request(GetUsersId);
  return {
    paths: User.map(({
      id
    }) => ({
      params: {
        id: id.toString()
      }
    })),
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_2__["hasuraUserClient"])();
  const {
    id
  } = params;
  const initialData = await hasura.request(GetUserById, {
    id
  });
  const Countp = await hasura.request(Countprojects, {
    id
  });
  const tasks = await hasura.request(GetTasks, {
    id
  });
  const leave = await hasura.request(getLeave, {
    id
  });
  const Employee = await hasura.request(Employees, {
    id
  });
  return {
    props: {
      initialData,
      Countp,
      tasks,
      leave,
      Employee
    },
    revalidate: 1
  };
};
const UpdateUser = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  mutation update_User_by_pk(
    $id: Int!
    $Name: String!
    $Last_Name: String!
    $email: String!
    $Phone_Number: String!
    $LinkedIn: String!
    $Github: String!
    $Site: String!
  ) {
    update_User_by_pk(
      pk_columns: { id: $id }
      _set: {
        Name: $Name
        Last_Name: $Last_Name
        email: $email
        Phone_Number: $Phone_Number
        LinkedIn: $LinkedIn
        Github: $Github
        Site: $Site
      }
    ) {
      id
      Name
      Last_Name
      email
      Phone_Number
      LinkedIn
      Github
      Site
    }
  }
`;
const UpdatePassword = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  mutation update_User_by_pk($id: Int!, $password: String!) {
    update_User_by_pk(pk_columns: { id: $id }, _set: { password: $password }) {
      id
    }
  }
`;
function PrivatePage({
  initialData,
  Countp,
  tasks,
  leave,
  Employee
}) {
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: File,
    1: setFile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    updateUser
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthDispatch"])();
  const hasura = Object(_lib_hasura_user_client__WEBPACK_IMPORTED_MODULE_2__["hasuraUserClient"])();
  const {
    0: createObjectURL,
    1: setCreateObjectURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    isAuthenticated
  } = Object(_context_auth__WEBPACK_IMPORTED_MODULE_5__["useAuthState"])();
  const {
    0: acc,
    1: setAcc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])(),
        {
    handleSubmit,
    register,
    control,
    errors,
    formState: {
      isSubmitting
    }
  } = _useForm,
        defaultValues = Object.assign({}, _useForm.defaultValues);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const uploadToClient = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const Account = () => {
    setAcc(false);
  };

  const view = () => {
    setAcc(true);
  };

  const removefile = () => {
    setImage(null);
  };

  const uploadFileToClient = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setFile(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const {
    register: register2,
    errors: errors2,
    handleSubmit: handleSubmit2
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])();

  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file/", {
      method: "POST",
      body
    });
    const UploadImage = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
      mutation MyMutation($Avatar: String!, $id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { Avatar: $Avatar }) {
          Avatar
          Name
        }
      }
    `;

    try {
      const {
        update_User_by_pk
      } = await hasura.request(UploadImage, {
        id,
        Avatar: image.name
      });
      updateUser(update_User_by_pk);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }

    return;
  };

  const uploadFileToServer = async () => {
    const body = new FormData();
    body.append("file", File);
    const response = await fetch("/api/file/", {
      method: "POST",
      body
    });
    const UploadFile = _lib_hasura_admin_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
      mutation MyMutation($File: String!, $id: Int!) {
        update_User_by_pk(pk_columns: { id: $id }, _set: { File: $File }) {
          File
        }
      }
    `;

    try {
      const {
        update_User_by_pk
      } = await hasura.request(UploadFile, {
        id,
        File: File.name
      });
      updateUser(update_User_by_pk);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }

    return;
  };

  const {
    data,
    mutate
  } = swr__WEBPACK_IMPORTED_MODULE_4___default()([GetUserById, id], (query, id) => hasura.request(query, {
    id
  }), {
    initialData,
    revalidateOnMount: true
  });

  const ChangePassword = async ({
    password,
    confirmpassword
  }) => {
    try {
      const id = data.User_by_pk.id;
      const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_7___default.a.genSalt();

      if (password == confirmpassword) {
        const {
          update_User_by_pk
        } = await hasura.request(UpdatePassword, {
          id,
          password: await bcryptjs__WEBPACK_IMPORTED_MODULE_7___default.a.hash(password, salt)
        });
        mutate(_objectSpread(_objectSpread({}, data), update_User_by_pk));
        window.location.reload();
      } else {
        alert("Passwords don't match");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateUserB = async ({
    Name,
    Last_Name,
    email,
    Phone_Number,
    LinkedIn,
    Github,
    Site
  }) => {
    try {
      const id = data.User_by_pk.id;
      const {
        update_User_by_pk
      } = await hasura.request(UpdateUser, {
        id,
        Name,
        Last_Name,
        email,
        Phone_Number,
        LinkedIn,
        Github,
        Site
      });
      mutate(_objectSpread(_objectSpread({}, data), update_User_by_pk));
      updateUser(update_User_by_pk);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const submit = () => {
    const pathname = `/Task/${id}`;
    location.replace(pathname);
  };

  return __jsx("div", {
    className: "page-content-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
      lineNumber: 381,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "profile-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "portlet light profile-sidebar-portlet ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "profile-userpic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, data.User_by_pk.Avatar ? __jsx("img", {
    style: {
      display: "block",
      objectFit: "cover",
      width: 225,
      height: 225
    },
    src: `../../${data.User_by_pk.Avatar}`,
    className: "img-responsive",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }) : __jsx("img", {
    style: {
      display: "block",
      objectFit: "cover",
      width: 225,
      height: 225
    },
    src: `../../profile.png`,
    className: "img-responsive",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 21
    }
  })), " ", __jsx("div", {
    className: "profile-usertitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "profile-usertitle-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 19
    }
  }, " ", data.User_by_pk.Name, " ", data.User_by_pk.Last_Name, " "), __jsx("div", {
    className: "profile-usertitle-job",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 19
    }
  }, " ", data.User_by_pk.Domain, " "), " ", __jsx("div", {
    className: "profile-usermenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, acc ? __jsx("ul", {
    className: "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 23
    }
  }, " ", __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: view,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "icon-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 29
    }
  }), " Overview", " ")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: Account,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "icon-settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
    }
  }), " Account Settings", " "))) : __jsx("ul", {
    className: "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: view,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "icon-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 29
    }
  }), " Overview", " ")), __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 25
    }
  }, __jsx("a", {
    onClick: Account,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "icon-settings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }), " Account Settings", " "))))), " "), __jsx("div", {
    className: "portlet light ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row list-separated profile-stat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-4 col-sm-4 col-xs-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "uppercase profile-stat-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, Countp.Project_aggregate.aggregate.count), __jsx("div", {
    className: "uppercase profile-stat-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 21
    }
  }, " ", "Live Projects", " ")), __jsx("div", {
    className: "col-md-4 col-sm-4 col-xs-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "uppercase profile-stat-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 21
    }
  }, " ", data.User_by_pk.Tasks_aggregate.aggregate.count), __jsx("div", {
    className: "uppercase profile-stat-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 21
    }
  }, " Tasks "))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "profile-desc-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 19
    }
  }, "About ", data.User_by_pk.Name), __jsx("div", {
    className: "margin-top-20 profile-desc-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 19
    }
  }, " ", __jsx("i", {
    className: "fa fa-linkedin-square",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 21
    }
  }), __jsx("a", {
    href: data.User_by_pk.LinkedIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 21
    }
  }, data.User_by_pk.LinkedIn)), __jsx("div", {
    className: "margin-top-20 profile-desc-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-github-square",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 21
    }
  }), __jsx("a", {
    href: data.User_by_pk.Github,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, data.User_by_pk.Github)), __jsx("div", {
    className: "margin-top-20 profile-desc-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-globe",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 21
    }
  }), __jsx("a", {
    href: data.User_by_pk.Site,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 21
    }
  }, data.User_by_pk.Site)), " ", __jsx("div", {
    id: "myModal",
    className: "modal fade",
    role: "dialog",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "modal-dialog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "javascript:;",
    className: "close",
    "data-dismiss": "modal",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 27
    }
  }), __jsx("h4", {
    className: "modal-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 27
    }
  }, "Pdf file")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }, " ", __jsx("embed", {
    src: `../../${data.User_by_pk.File}`,
    type: "application/pdf",
    width: "570",
    height: "800",
    frameborder: "0",
    allowfullscreen: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "javascript:;",
    className: "btn grey-salsa btn-outline",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 27
    }
  }, "Close")))))))), acc ? __jsx("div", {
    className: "profile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, " ", __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "portlet light ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "portlet-title tabbable-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "caption caption-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-globe theme-font hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 27
    }
  }), __jsx("span", {
    className: "caption-subject font-blue-madison bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 27
    }
  }, "Overview"))), __jsx("div", {
    className: "portlet-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "tab-pane active",
    id: "tab_1_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 27
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(UpdateUserB),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 33
    }
  }, "First Name : ", data.User_by_pk.Name, " ")), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 33
    }
  }, "Last Name : ", data.User_by_pk.Last_Name, " ")), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 33
    }
  }, "Mobile Number : ", data.User_by_pk.Phone_Number, " ")), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 33
    }
  }, "Email : ", data.User_by_pk.email, " ")), __jsx("div", {
    className: "margin-top-20 profile-desc-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 31
    }
  }, "Resume : ", __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 42
    }
  }, data.User_by_pk.File), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 33
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 33
    }
  }), __jsx("a", {
    href: "#myModal",
    role: "button",
    className: "btn red btn-outline",
    "data-toggle": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 33
    }
  }, " ", "View CV", " "), " ", __jsx("a", {
    href: `../../${data.User_by_pk.File}`,
    className: "fa fa-download",
    download: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 33
    }
  }, "download", " ")))))))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "portlet light bordered tasks-widget",
    style: {
      height: 342
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "portlet-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "caption caption-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-bar-chart theme-font hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 27
    }
  }), __jsx("span", {
    className: "caption-subject font-blue-madison bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 27
    }
  }, "Tasks"), __jsx("span", {
    className: "caption-helper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 27
    }
  }, " ", data.User_by_pk.Tasks_aggregate.aggregate.count, "pending"))), __jsx("div", {
    className: "portlet-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "task-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "slimScrollDiv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "scroller",
    "data-always-visible": "1",
    "data-rail-visible1": "0",
    "data-handle-color": "#D7DCE2",
    "data-initialized": "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "task-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 31
    }
  }, tasks.Task.map(({
    id,
    completed,
    name,
    Description,
    Project
  }) => {
    return __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 39
      }
    }, __jsx("div", {
      className: "task-checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 41
      }
    }, __jsx("input", {
      type: "hidden",
      value: "1",
      name: "test",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 43
      }
    })), __jsx("div", {
      className: "task-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "task-title-sp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 43
      }
    }, " ", Description), __jsx("span", {
      className: "task-bell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 43
      }
    }, __jsx("i", {
      className: "fa fa-bell-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 45
      }
    }))));
  }))), __jsx("div", {
    className: "slimScrollBar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "slimScrollRail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "task-footer",
    style: {
      marginTop: 195
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "btn-arrow-link pull-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 27
    }
  }, __jsx("a", {
    onClick: () => submit(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 29
    }
  }, "See All Tasks"))))))), __jsx("div", {
    className: "profile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 19
    }
  }, " ", __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "portlet light ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "portlet-title tabbable-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "caption caption-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "icon-globe theme-font hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "caption-subject font-blue-madison bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 29
    }
  }, "Pending leave requests"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 25
    }
  }, " ", __jsx("table", {
    className: "table table-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 27
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 31
    }
  }, " ", __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 33
    }
  }, " reason"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 33
    }
  }, "start date"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 33
    }
  }, "end date"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 33
    }
  }, "Status"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 29
    }
  }, leave.leave.map(({
    id,
    reason,
    start_date,
    end_date,
    status,
    user_id
  }) => {
    const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["parseISO"])(end_date), "yyyy-MM-dd");
    const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["parseISO"])(start_date), "yyyy-MM-dd");
    return __jsx("tr", {
      key: id,
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 37
      }
    }, " ", __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 39
      }
    }, reason), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 39
      }
    }, start_date), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 39
      }
    }, end_date), " ", __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 39
      }
    }, status === 1 ? __jsx("span", {
      className: "label label-sm label-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 731,
        columnNumber: 43
      }
    }, " ", "Approved", " ") : status === 2 ? __jsx("span", {
      className: "label label-sm label-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 43
      }
    }, " ", "Declined", " ") : __jsx("button", {
      className: " btn-sm btn-warning",
      onClick: () => cancelrequest(id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 43
      }
    }, "Cancel")));
  })))))), data.User_by_pk.Role == "Employee" ? __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "portlet light bordered tasks-widget",
    style: {
      height: 342
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "portlet-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "task-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "slimScrollDiv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "portlet-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mt-element-card mt-element-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 35
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "mt-card-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 39
    }
  }, __jsx("div", {
    className: "mt-card-avatar mt-overlay-1 mt-scroll-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: `../../${data.User_by_pk.User.Avatar}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 43
    }
  }), __jsx("div", {
    className: "mt-overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 43
    }
  }, __jsx("ul", {
    className: "mt-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: "mt-card-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 41
    }
  }, __jsx("h3", {
    className: "mt-card-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 43
    }
  }, data.User_by_pk.User.Name, " ", data.User_by_pk.User.Last_Name), __jsx("p", {
    className: "mt-card-desc font-grey-mint",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784,
      columnNumber: 43
    }
  }, "Manager")))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 37
    }
  }, "Name : ", data.User_by_pk.User.Name, " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791,
      columnNumber: 74
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 39
    }
  }), "Last Name :", data.User_by_pk.User.Last_Name, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 39
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 46
    }
  }), "Email : ", data.User_by_pk.User.email, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 39
    }
  }), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 46
    }
  }), "Mobile Number :", " ", data.User_by_pk.User.Phone_Number)))))))) : __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "portlet light bordered tasks-widget",
    style: {
      height: 342
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 25
    }
  }, " ", __jsx("div", {
    className: "portlet-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "caption caption-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "icon-bar-chart theme-font hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 31
    }
  }), __jsx("span", {
    className: "caption-subject font-blue-madison bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 31
    }
  }, "My employees"))), __jsx("table", {
    className: "table table-hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 27
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 29
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 31
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
      columnNumber: 33
    }
  }, " User "), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 33
    }
  }, " Name "), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 33
    }
  }, " Last name "), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 33
    }
  }, " Email "))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 29
    }
  }, Employee.User.map(({
    id,
    name,
    email,
    Avatar,
    Last_Name
  }) => {
    return __jsx("tr", {
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837,
        columnNumber: 39
      }
    }, Avatar ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 839,
        columnNumber: 43
      }
    }, __jsx("img", {
      src: `../../${Avatar}`,
      style: {
        display: "inline",
        width: 38,
        height: 38,
        objectFit: "cover",
        borderRadius: "50%"
      },
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 840,
        columnNumber: 45
      }
    })) : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 43
      }
    }, __jsx("img", {
      src: `../profile.png`,
      style: {
        display: "inline",
        width: 38,
        height: 38,
        borderRadius: "50%",
        objectFit: "cover"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 45
      }
    }), " ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 39
      }
    }, " ", name), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 39
      }
    }, Last_Name), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 39
      }
    }, email));
  })))))))) : __jsx("div", {
    className: "profile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 15
    }
  }, " ", __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "portlet light ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "portlet-title tabbable-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "caption caption-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-globe theme-font hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 27
    }
  }), __jsx("span", {
    className: "caption-subject font-blue-madison bold uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 27
    }
  }, "Account settings")), __jsx("ul", {
    className: "nav nav-tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#tab_1_1",
    "data-toggle": "tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 29
    }
  }, "Personal Info")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#tab_1_2",
    "data-toggle": "tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 904,
      columnNumber: 29
    }
  }, "Change Avatar")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#tab_1_3",
    "data-toggle": "tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 29
    }
  }, "Change Password")), " ", __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "#tab_1_4",
    "data-toggle": "tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 29
    }
  }, "Update CV")))), __jsx("div", {
    className: "portlet-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "tab-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "tab-pane active",
    id: "tab_1_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
      columnNumber: 27
    }
  }, __jsx("form", {
    onSubmit: handleSubmit(UpdateUserB),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 33
    }
  }, "First Name"), __jsx("input", {
    defaultValue: data.User_by_pk.Name,
    name: "Name",
    id: "Name",
    type: "text",
    placeholder: "Name",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 939,
      columnNumber: 33
    }
  }, "Last Name"), __jsx("input", {
    defaultValue: data.User_by_pk.Last_Name,
    name: "Last_Name",
    type: "text",
    placeholder: "Last Name",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 33
    }
  }, "Mobile Number"), __jsx("input", {
    defaultValue: data.User_by_pk.Phone_Number,
    type: "text",
    name: "Phone_Number",
    placeholder: "+1 646 580 DEMO (6284)",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 33
    }
  }, "Email"), __jsx("div", {
    className: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "input-group-addon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 35
    }
  }, __jsx("i", {
    className: "fa fa-envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 37
    }
  })), __jsx("input", {
    defaultValue: data.User_by_pk.email,
    type: "text",
    name: "email",
    placeholder: "Email",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 35
    }
  }))), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 33
    }
  }, "LinkedIN"), __jsx("input", {
    defaultValue: data.User_by_pk.LinkedIn,
    name: "LinkedIn",
    id: "LinkedIn",
    type: "text",
    placeholder: "LinkedIn",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 33
    }
  })), " ", __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 33
    }
  }, "Github"), __jsx("input", {
    defaultValue: data.User_by_pk.Github,
    name: "Github",
    id: "Github",
    type: "text",
    placeholder: "Github",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 33
    }
  })), " ", __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 33
    }
  }, "Site"), __jsx("input", {
    defaultValue: data.User_by_pk.Site,
    name: "Site",
    id: "Site",
    type: "text",
    placeholder: "Site",
    className: "form-control",
    ref: register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 33
    }
  }, "Occupation"), __jsx("input", {
    defaultValue: data.User_by_pk.Domain,
    type: "text",
    placeholder: "Web Developer",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 31
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn green",
    disabled: isSubmitting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 33
    }
  }, "Save Changes", " ")))), __jsx("div", {
    className: "tab-pane",
    id: "tab_1_2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 27
    }
  }, __jsx("form", {
    action: "#",
    role: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1041,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "fileinput fileinput-new",
    "data-provides": "fileinput",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 33
    }
  }, image ? __jsx("div", {
    className: "fileinput-new thumbnail",
    style: {
      width: 200,
      height: 220,
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: createObjectURL,
    alt: "",
    style: {
      width: 200,
      height: 200,
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 39
    }
  })) : __jsx("div", {
    className: "fileinput-new thumbnail",
    style: {
      width: 200,
      height: 155,
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: "http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 39
    }
  })), " "), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 33
    }
  }, image ? __jsx("span", {
    className: "fileinput-exists",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 37
    }
  }, " ", "Change", __jsx("input", {
    type: "file",
    name: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 39
    }
  }), __jsx("a", {
    href: "javascript:;",
    className: "btn default fileinput-exists",
    "data-dismiss": "fileinput",
    onClick: removefile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 39
    }
  }, "Remove")) : __jsx("span", {
    className: "btn default btn-file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "file",
    name: "myImage",
    onChange: uploadToClient,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 39
    }
  })))), image ? __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 33
    }
  }, __jsx("a", {
    onClick: uploadToServer,
    className: "btn green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 35
    }
  }, " ", "Submit", " ")) : __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 33
    }
  }, __jsx("a", {
    onClick: uploadToServer,
    className: "btn green",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120,
      columnNumber: 35
    }
  }, " ", "Submit", " ")))), __jsx("div", {
    className: "tab-pane",
    id: "tab_1_3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 27
    }
  }, __jsx("form", {
    onSubmit: handleSubmit2(ChangePassword),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 33
    }
  }, "Current Password"), __jsx("input", {
    defaultValue: data.User_by_pk.password,
    type: "password",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 33
    }
  }, "New Password"), __jsx("input", {
    name: "password",
    ref: register2({
      required: "You must provide a password.",
      minLength: {
        message: "Your password must be at least 6 characters",
        value: 6
      }
    }),
    type: "password",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 31
    }
  }, __jsx("label", {
    className: "control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 33
    }
  }, "Re-type New Password"), __jsx("input", {
    name: "confirmpassword",
    type: "password",
    className: "form-control",
    ref: register2({
      required: "You must provide a password.",
      minLength: {
        message: "Your password must be at least 6 characters",
        value: 6
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 31
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn green",
    disabled: isSubmitting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 33
    }
  }, "Change Password", " ")))), " ", __jsx("div", {
    className: "tab-pane ",
    id: "tab_1_4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191,
      columnNumber: 27
    }
  }, __jsx("form", {
    action: "#",
    role: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "fileinput fileinput-new",
    "data-provides": "fileinput",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: "../../assets/global/img/pdf.png",
    href: "#myModal",
    style: {
      maxWidth: 35
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198,
      columnNumber: 35
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "btn default btn-file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "file",
    name: "File",
    onChange: uploadFileToClient,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 39
    }
  }))))), File ? __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1216,
      columnNumber: 33
    }
  }, __jsx("a", {
    onClick: uploadFileToServer,
    className: "btn green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217,
      columnNumber: 35
    }
  }, " ", "Submit", " ")) : __jsx("div", {
    className: "margin-top-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226,
      columnNumber: 33
    }
  }, __jsx("a", {
    onClick: uploadFileToServer,
    className: "btn green",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1227,
      columnNumber: 35
    }
  }, " ", "Submit", " "))))))))))))));
}

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi9oYXN1cmEtYWRtaW4tY2xpZW50LmpzIiwid2VicGFjazovLy8uL2xpYi9oYXN1cmEtdXNlci1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUHJvZmlsZS8uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtcmVxdWVzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwidXNlUGVyc2lzdGVkQXV0aFN0YXRlIiwiY3JlYXRlUGVyc2lzdGVkU3RhdGUiLCJMT0dJTl9TVUNDRVNTIiwiVVBEQVRFX1VTRVIiLCJMT0dPVVQiLCJpbml0aWFsU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidG9rZW4iLCJzYXZlX2xhc3Rfc2VlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNhdmVkQXV0aFN0YXRlIiwic2F2ZUF1dGhTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibmFtZSIsImxhc3RfbmFtZSIsImRvbWFpbiIsInBob25lX251bWJlciIsImNyZWF0ZWRfYXQiLCJGaWxlIiwibWFuYWdlcl9pZCIsIlJvbGUiLCJ1cGRhdGVVc2VyIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJoYXN1cmFBZG1pbkNsaWVudCIsIkdyYXBoUUxDbGllbnQiLCJwcm9jZXNzIiwiaGFzdXJhVXNlckNsaWVudCIsIkdldFVzZXJzSWQiLCJncWwiLCJHZXRVc2VyQnlJZCIsIkdldFRhc2tzIiwiQ291bnRwcm9qZWN0cyIsImdldExlYXZlIiwiRW1wbG95ZWVzIiwiZ2V0U3RhdGljUGF0aHMiLCJoYXN1cmEiLCJVc2VyIiwicmVxdWVzdCIsInBhdGhzIiwibWFwIiwiaWQiLCJwYXJhbXMiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJpbml0aWFsRGF0YSIsIkNvdW50cCIsInRhc2tzIiwibGVhdmUiLCJFbXBsb3llZSIsInByb3BzIiwicmV2YWxpZGF0ZSIsIlVwZGF0ZVVzZXIiLCJVcGRhdGVQYXNzd29yZCIsIlByaXZhdGVQYWdlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic2V0RmlsZSIsImNyZWF0ZU9iamVjdFVSTCIsInNldENyZWF0ZU9iamVjdFVSTCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiYWNjIiwic2V0QWNjIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJpc1N1Ym1pdHRpbmciLCJkZWZhdWx0VmFsdWVzIiwicHVzaCIsInVwbG9hZFRvQ2xpZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImkiLCJVUkwiLCJBY2NvdW50IiwidmlldyIsInJlbW92ZWZpbGUiLCJ1cGxvYWRGaWxlVG9DbGllbnQiLCJyZWdpc3RlcjIiLCJlcnJvcnMyIiwiaGFuZGxlU3VibWl0MiIsInVwbG9hZFRvU2VydmVyIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXNwb25zZSIsIlVwbG9hZEltYWdlIiwidXBkYXRlX1VzZXJfYnlfcGsiLCJBdmF0YXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiY29uc29sZSIsInVwbG9hZEZpbGVUb1NlcnZlciIsIlVwbG9hZEZpbGUiLCJkYXRhIiwibXV0YXRlIiwidXNlU1dSIiwicmV2YWxpZGF0ZU9uTW91bnQiLCJDaGFuZ2VQYXNzd29yZCIsImNvbmZpcm1wYXNzd29yZCIsIlVzZXJfYnlfcGsiLCJzYWx0IiwiYmNyeXB0IiwiZ2VuU2FsdCIsImhhc2giLCJhbGVydCIsImVyciIsImxvZyIsIlVwZGF0ZVVzZXJCIiwiTmFtZSIsIkxhc3RfTmFtZSIsIlBob25lX051bWJlciIsIkxpbmtlZEluIiwiR2l0aHViIiwiU2l0ZSIsInN1Ym1pdCIsInBhdGhuYW1lIiwicmVwbGFjZSIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsIkRvbWFpbiIsIlByb2plY3RfYWdncmVnYXRlIiwiYWdncmVnYXRlIiwiY291bnQiLCJUYXNrc19hZ2dyZWdhdGUiLCJUYXNrIiwiY29tcGxldGVkIiwiRGVzY3JpcHRpb24iLCJQcm9qZWN0IiwibWFyZ2luVG9wIiwicmVhc29uIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwic3RhdHVzIiwidXNlcl9pZCIsImVuZCIsImZvcm1hdCIsInBhcnNlSVNPIiwic3RhcnQiLCJjYW5jZWxyZXF1ZXN0IiwiYm9yZGVyUmFkaXVzIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJ2YWx1ZSIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsV0FBTyxFQUFFc0Ysa0JBRFg7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUcsR0FKSCxZQUtTLEdBTFQsQ0FERixDQURHLEdBV0g7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxXQUFPLEVBQUVBLGtCQURYO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxZQUFRLE1BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHLEdBTEgsWUFNUyxHQU5ULENBREYsQ0FsQ0osQ0FERixDQTlRRixDQURGLENBL0JGLENBREYsQ0FERixDQUZGLENBdGZKLENBREYsQ0FERixDQURGLENBREY7QUF3MkJELEM7Ozs7Ozs7Ozs7O0FDbHVDRCxxQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9Qcm9maWxlL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1Byb2ZpbGUvW2lkXS5qc1wiKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNyZWF0ZVBlcnNpc3RlZFN0YXRlIGZyb20gXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCI7XG5cbmNvbnN0IEF1dGhEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCB1c2VQZXJzaXN0ZWRBdXRoU3RhdGUgPSBjcmVhdGVQZXJzaXN0ZWRTdGF0ZShcIkFNQUlfQVVUSFwiKTtcblxuY29uc3QgTE9HSU5fU1VDQ0VTUyA9IFwiTE9HSU5fU1VDQ0VTU1wiO1xuY29uc3QgVVBEQVRFX1VTRVIgPSBcIlVQREFURV9VU0VSXCI7XG5jb25zdCBMT0dPVVQgPSBcIkxPR09VVFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHVzZXI6IG51bGwsXG4gIHRva2VuOiBudWxsLFxuICBzYXZlX2xhc3Rfc2VlbjogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHBheWxvYWQsIHR5cGUgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIFVQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxuICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGUgJHt0eXBlfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3NhdmVkQXV0aFN0YXRlLCBzYXZlQXV0aFN0YXRlXSA9IHVzZVBlcnNpc3RlZEF1dGhTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgc2F2ZWRBdXRoU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZUF1dGhTdGF0ZShzdGF0ZSk7XG4gIH0sIFtzdGF0ZSwgc2F2ZUF1dGhTdGF0ZV0pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCBzYXZlX2xhc3Rfc2VlbiB9KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGpzb24/Lm1lc3NhZ2UpO1xuXG4gICAgY29uc3QgeyB0b2tlbiwgLi4udXNlciB9ID0ganNvbjtcblxuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9HSU5fU1VDQ0VTUywgcGF5bG9hZDogeyB0b2tlbiwgdXNlciwgc2F2ZV9sYXN0X3NlZW4gfSB9KTtcbiAgfTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7XG4gICAgbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgZG9tYWluLFxuICAgIHBob25lX251bWJlcixcbiAgICBwYXNzd29yZCxcbiAgICBjcmVhdGVkX2F0LFxuICAgIEZpbGUsXG4gICAgbWFuYWdlcl9pZCxcbiAgICBSb2xlLFxuICB9KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JlZ2lzdGVyXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGRvbWFpbixcbiAgICAgICAgcGhvbmVfbnVtYmVyLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgY3JlYXRlZF9hdCxcbiAgICAgICAgRmlsZSxcbiAgICAgICAgbWFuYWdlcl9pZCxcbiAgICAgICAgUm9sZSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIC8vIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoanNvbj8ubWVzc2FnZSk7XG5cbiAgICAvLyBjb25zdCB7IHRva2VuLCAuLi51c2VyIH0gPSBqc29uO1xuXG4gICAgLy8gZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOiB7IHRva2VuLCB1c2VyLCBzYXZlX2xhc3Rfc2VlbiB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBVUERBVEVfVVNFUiwgcGF5bG9hZCB9KTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExPR09VVCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBsb2dpbiwgcmVnaXN0ZXIsIHVwZGF0ZVVzZXIsIGxvZ291dCB9fVxuICAgID5cbiAgICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZUF1dGhEaXNwYXRjaCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoU3RhdGUgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTtcbiIsImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5leHBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5cbmV4cG9ydCBjb25zdCBoYXN1cmFBZG1pbkNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KFxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNVUkFfQVBJX0VORFBPSU5ULFxuICB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJYLUhhc3VyYS1BZG1pbi1TZWNyZXRcIjpcbiAgICAgICAgXCJJTTNEQTViNEpBa21CZVFBNW93UEtrOEg5Y2twdEtra0lNSUJIVVBWd1FLb3EyZDVSS1kyaTdlM2hKRDhjVWpwXCIsXG4gICAgfSxcbiAgfVxuKTtcbiIsImltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5leHBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XG5cbmV4cG9ydCBjb25zdCBoYXN1cmFVc2VyQ2xpZW50ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IEdyYXBoUUxDbGllbnQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEFTVVJBX0FQSV9FTkRQT0lOVCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiWC1IYXN1cmEtQWRtaW4tU2VjcmV0XCI6XG4gICAgICAgIFwiSU0zREE1YjRKQWttQmVRQTVvd1BLazhIOWNrcHRLa2tJTUlCSFVQVndRS29xMmQ1UktZMmk3ZTNoSkQ4Y1VqcFwiLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBoYXN1cmFVc2VyQ2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9oYXN1cmEtdXNlci1jbGllbnRcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIi4uLy4uL2xpYi9oYXN1cmEtYWRtaW4tY2xpZW50XCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2F1dGhcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IEdldFVzZXJzSWQgPSBncWxgXHJcbiAge1xyXG4gICAgVXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIExhc3RfTmFtZVxyXG4gICAgICBOYW1lXHJcbiAgICAgIEF2YXRhclxyXG4gICAgICBlbWFpbFxyXG4gICAgICBSb2xlXHJcbiAgICAgIFBob25lX051bWJlclxyXG4gICAgICBEb21haW5cclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgRmlsZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdldFVzZXJCeUlkID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldFVzZXJCeUlkKCRpZDogSW50ISkge1xyXG4gICAgVXNlcl9ieV9wayhpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIE5hbWVcclxuICAgICAgQXZhdGFyXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIFJvbGVcclxuICAgICAgUGhvbmVfTnVtYmVyXHJcbiAgICAgIExhc3RfTmFtZVxyXG4gICAgICBEb21haW5cclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgRmlsZVxyXG4gICAgICBUYXNrc19hZ2dyZWdhdGUge1xyXG4gICAgICAgIGFnZ3JlZ2F0ZSB7XHJcbiAgICAgICAgICBjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBMaW5rZWRJblxyXG4gICAgICBHaXRodWJcclxuICAgICAgU2l0ZVxyXG4gICAgICBVc2VyIHtcclxuICAgICAgICBBdmF0YXJcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIE5hbWVcclxuICAgICAgICBMYXN0X05hbWVcclxuICAgICAgICBQaG9uZV9OdW1iZXJcclxuICAgICAgICBSb2xlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IEdldFRhc2tzID0gZ3FsYFxyXG4gIHF1ZXJ5IE15UXVlcnkoJGlkOiBJbnQhKSB7XHJcbiAgICBUYXNrKHdoZXJlOiB7IHVzZXJfaWQ6IHsgX2VxOiAkaWQgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgdXNlcl9pZFxyXG4gICAgICBEZXNjcmlwdGlvblxyXG4gICAgICBjb21wbGV0ZWRcclxuICAgICAgUHJvamVjdCB7XHJcbiAgICAgICAgVGl0bGVcclxuICAgICAgICBpZFxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBUYXNrX2FnZ3JlZ2F0ZShcclxuICAgICAgd2hlcmU6IHsgdXNlcl9pZDogeyBfZXE6ICRpZCB9LCBjb21wbGV0ZWQ6IHsgX2VxOiBmYWxzZSB9IH1cclxuICAgICkge1xyXG4gICAgICBhZ2dyZWdhdGUge1xyXG4gICAgICAgIGNvdW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vdG9iZWRvbmVcclxuLy9Db3VudHByb2plY3RzXHJcbmNvbnN0IENvdW50cHJvamVjdHMgPSBncWxgXHJcbiAgcXVlcnkgTXlRdWVyeSgkaWQ6IEludCEpIHtcclxuICAgIFByb2plY3RfYWdncmVnYXRlKHdoZXJlOiB7IFRhc2tzOiB7IHVzZXJfaWQ6IHsgX2VxOiAkaWQgfSB9IH0pIHtcclxuICAgICAgYWdncmVnYXRlIHtcclxuICAgICAgICBjb3VudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBnZXRMZWF2ZSA9IGdxbGBcclxuICBxdWVyeSBNeVF1ZXJ5KCRpZDogSW50ISkge1xyXG4gICAgbGVhdmUod2hlcmU6IHsgdXNlcl9pZDogeyBfZXE6ICRpZCB9IH0pIHtcclxuICAgICAgaWRcclxuICAgICAgcmVhc29uXHJcbiAgICAgIHN0YXJ0X2RhdGVcclxuICAgICAgZW5kX2RhdGVcclxuICAgICAgY291bnRfZFxyXG4gICAgICBzdGF0dXNcclxuICAgICAgdXNlcl9pZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgRW1wbG95ZWVzID0gZ3FsYFxyXG4gIHF1ZXJ5IE15UXVlcnkoJGlkOiBJbnQhKSB7XHJcbiAgICBVc2VyKHdoZXJlOiB7IG1hbmFnZXJfaWQ6IHsgX2VxOiAkaWQgfSB9KSB7XHJcbiAgICAgIEF2YXRhclxyXG4gICAgICBlbWFpbFxyXG4gICAgICBOYW1lXHJcbiAgICAgIExhc3RfTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGhhc3VyYSA9IGhhc3VyYVVzZXJDbGllbnQoKTtcclxuXHJcbiAgY29uc3QgeyBVc2VyIH0gPSBhd2FpdCBoYXN1cmEucmVxdWVzdChHZXRVc2Vyc0lkKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBVc2VyLm1hcCgoeyBpZCB9KSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogaWQudG9TdHJpbmcoKSxcclxuICAgICAgfSxcclxuICAgIH0pKSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBoYXN1cmEgPSBoYXN1cmFVc2VyQ2xpZW50KCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoR2V0VXNlckJ5SWQsIHsgaWQgfSk7XHJcbiAgY29uc3QgQ291bnRwID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoQ291bnRwcm9qZWN0cywgeyBpZCB9KTtcclxuICBjb25zdCB0YXNrcyA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KEdldFRhc2tzLCB7IGlkIH0pO1xyXG4gIGNvbnN0IGxlYXZlID0gYXdhaXQgaGFzdXJhLnJlcXVlc3QoZ2V0TGVhdmUsIHsgaWQgfSk7XHJcbiAgY29uc3QgRW1wbG95ZWUgPSBhd2FpdCBoYXN1cmEucmVxdWVzdChFbXBsb3llZXMsIHsgaWQgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpbml0aWFsRGF0YSxcclxuICAgICAgQ291bnRwLFxyXG4gICAgICB0YXNrcyxcclxuICAgICAgbGVhdmUsXHJcbiAgICAgIEVtcGxveWVlLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufTtcclxuY29uc3QgVXBkYXRlVXNlciA9IGdxbGBcclxuICBtdXRhdGlvbiB1cGRhdGVfVXNlcl9ieV9wayhcclxuICAgICRpZDogSW50IVxyXG4gICAgJE5hbWU6IFN0cmluZyFcclxuICAgICRMYXN0X05hbWU6IFN0cmluZyFcclxuICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgJFBob25lX051bWJlcjogU3RyaW5nIVxyXG4gICAgJExpbmtlZEluOiBTdHJpbmchXHJcbiAgICAkR2l0aHViOiBTdHJpbmchXHJcbiAgICAkU2l0ZTogU3RyaW5nIVxyXG4gICkge1xyXG4gICAgdXBkYXRlX1VzZXJfYnlfcGsoXHJcbiAgICAgIHBrX2NvbHVtbnM6IHsgaWQ6ICRpZCB9XHJcbiAgICAgIF9zZXQ6IHtcclxuICAgICAgICBOYW1lOiAkTmFtZVxyXG4gICAgICAgIExhc3RfTmFtZTogJExhc3RfTmFtZVxyXG4gICAgICAgIGVtYWlsOiAkZW1haWxcclxuICAgICAgICBQaG9uZV9OdW1iZXI6ICRQaG9uZV9OdW1iZXJcclxuICAgICAgICBMaW5rZWRJbjogJExpbmtlZEluXHJcbiAgICAgICAgR2l0aHViOiAkR2l0aHViXHJcbiAgICAgICAgU2l0ZTogJFNpdGVcclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIE5hbWVcclxuICAgICAgTGFzdF9OYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIFBob25lX051bWJlclxyXG4gICAgICBMaW5rZWRJblxyXG4gICAgICBHaXRodWJcclxuICAgICAgU2l0ZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVwZGF0ZVBhc3N3b3JkID0gZ3FsYFxyXG4gIG11dGF0aW9uIHVwZGF0ZV9Vc2VyX2J5X3BrKCRpZDogSW50ISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XHJcbiAgICB1cGRhdGVfVXNlcl9ieV9wayhwa19jb2x1bW5zOiB7IGlkOiAkaWQgfSwgX3NldDogeyBwYXNzd29yZDogJHBhc3N3b3JkIH0pIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXZhdGVQYWdlKHtcclxuICBpbml0aWFsRGF0YSxcclxuICBDb3VudHAsXHJcbiAgdGFza3MsXHJcbiAgbGVhdmUsXHJcbiAgRW1wbG95ZWUsXHJcbn0pIHtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtGaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHVwZGF0ZVVzZXIgfSA9IHVzZUF1dGhEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhc3VyYSA9IGhhc3VyYVVzZXJDbGllbnQoKTtcclxuXHJcbiAgY29uc3QgW2NyZWF0ZU9iamVjdFVSTCwgc2V0Q3JlYXRlT2JqZWN0VVJMXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aFN0YXRlKCk7XHJcbiAgY29uc3QgW2FjYywgc2V0QWNjXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICByZWdpc3RlcixcclxuICAgIGNvbnRyb2wsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBmb3JtU3RhdGU6IHsgaXNTdWJtaXR0aW5nIH0sXHJcbiAgICBkZWZhdWx0VmFsdWVzOiB7IC4uLmRlZmF1bHRWYWx1ZXMgfSxcclxuICB9ID0gdXNlRm9ybSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkVG9DbGllbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIHNldEltYWdlKGkpO1xyXG4gICAgICBzZXRDcmVhdGVPYmplY3RVUkwoVVJMLmNyZWF0ZU9iamVjdFVSTChpKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBBY2NvdW50ID0gKCkgPT4ge1xyXG4gICAgc2V0QWNjKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IHZpZXcgPSAoKSA9PiB7XHJcbiAgICBzZXRBY2ModHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmVmaWxlID0gKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCB1cGxvYWRGaWxlVG9DbGllbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMgJiYgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIHNldEZpbGUoaSk7XHJcbiAgICAgIHNldENyZWF0ZU9iamVjdFVSTChVUkwuY3JlYXRlT2JqZWN0VVJMKGkpKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHtcclxuICAgIHJlZ2lzdGVyOiByZWdpc3RlcjIsXHJcbiAgICBlcnJvcnM6IGVycm9yczIsXHJcbiAgICBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdDIsXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkVG9TZXJ2ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBib2R5LmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZmlsZS9cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgVXBsb2FkSW1hZ2UgPSBncWxgXHJcbiAgICAgIG11dGF0aW9uIE15TXV0YXRpb24oJEF2YXRhcjogU3RyaW5nISwgJGlkOiBJbnQhKSB7XHJcbiAgICAgICAgdXBkYXRlX1VzZXJfYnlfcGsocGtfY29sdW1uczogeyBpZDogJGlkIH0sIF9zZXQ6IHsgQXZhdGFyOiAkQXZhdGFyIH0pIHtcclxuICAgICAgICAgIEF2YXRhclxyXG4gICAgICAgICAgTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdXBkYXRlX1VzZXJfYnlfcGsgfSA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KFVwbG9hZEltYWdlLCB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgQXZhdGFyOiBpbWFnZS5uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgdXBkYXRlVXNlcih1cGRhdGVfVXNlcl9ieV9wayk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgY29uc3QgdXBsb2FkRmlsZVRvU2VydmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgYm9keS5hcHBlbmQoXCJmaWxlXCIsIEZpbGUpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZmlsZS9cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgVXBsb2FkRmlsZSA9IGdxbGBcclxuICAgICAgbXV0YXRpb24gTXlNdXRhdGlvbigkRmlsZTogU3RyaW5nISwgJGlkOiBJbnQhKSB7XHJcbiAgICAgICAgdXBkYXRlX1VzZXJfYnlfcGsocGtfY29sdW1uczogeyBpZDogJGlkIH0sIF9zZXQ6IHsgRmlsZTogJEZpbGUgfSkge1xyXG4gICAgICAgICAgRmlsZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdXBkYXRlX1VzZXJfYnlfcGsgfSA9IGF3YWl0IGhhc3VyYS5yZXF1ZXN0KFVwbG9hZEZpbGUsIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBGaWxlOiBGaWxlLm5hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICB1cGRhdGVVc2VyKHVwZGF0ZV9Vc2VyX2J5X3BrKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlU1dSKFxyXG4gICAgW0dldFVzZXJCeUlkLCBpZF0sXHJcbiAgICAocXVlcnksIGlkKSA9PiBoYXN1cmEucmVxdWVzdChxdWVyeSwgeyBpZCB9KSxcclxuICAgIHtcclxuICAgICAgaW5pdGlhbERhdGEsXHJcbiAgICAgIHJldmFsaWRhdGVPbk1vdW50OiB0cnVlLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAoeyBwYXNzd29yZCwgY29uZmlybXBhc3N3b3JkIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGlkID0gZGF0YS5Vc2VyX2J5X3BrLmlkO1xyXG5cclxuICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KCk7XHJcbiAgICAgIGlmIChwYXNzd29yZCA9PSBjb25maXJtcGFzc3dvcmQpIHtcclxuICAgICAgICBjb25zdCB7IHVwZGF0ZV9Vc2VyX2J5X3BrIH0gPSBhd2FpdCBoYXN1cmEucmVxdWVzdChVcGRhdGVQYXNzd29yZCwge1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBwYXNzd29yZDogYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtdXRhdGUoe1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIC4uLnVwZGF0ZV9Vc2VyX2J5X3BrLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBVcGRhdGVVc2VyQiA9IGFzeW5jICh7XHJcbiAgICBOYW1lLFxyXG4gICAgTGFzdF9OYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBQaG9uZV9OdW1iZXIsXHJcbiAgICBMaW5rZWRJbixcclxuICAgIEdpdGh1YixcclxuICAgIFNpdGUsXHJcbiAgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBkYXRhLlVzZXJfYnlfcGsuaWQ7XHJcblxyXG4gICAgICBjb25zdCB7IHVwZGF0ZV9Vc2VyX2J5X3BrIH0gPSBhd2FpdCBoYXN1cmEucmVxdWVzdChVcGRhdGVVc2VyLCB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgTmFtZSxcclxuICAgICAgICBMYXN0X05hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgUGhvbmVfTnVtYmVyLFxyXG4gICAgICAgIExpbmtlZEluLFxyXG4gICAgICAgIEdpdGh1YixcclxuICAgICAgICBTaXRlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG11dGF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAuLi51cGRhdGVfVXNlcl9ieV9wayxcclxuICAgICAgfSk7XHJcbiAgICAgIHVwZGF0ZVVzZXIodXBkYXRlX1VzZXJfYnlfcGspO1xyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXRobmFtZSA9IGAvVGFzay8ke2lkfWA7XHJcbiAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGhuYW1lKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxNTAwIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBwcm9maWxlLXNpZGViYXItcG9ydGxldCBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VycGljXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuQXZhdGFyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uLyR7ZGF0YS5Vc2VyX2J5X3BrLkF2YXRhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uL3Byb2ZpbGUucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuTmFtZX0ge2RhdGEuVXNlcl9ieV9way5MYXN0X05hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZS1qb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuVXNlcl9ieV9way5Eb21haW59e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VybWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY2MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3ZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1ob21lXCI+PC9pPiBPdmVydmlld3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtBY2NvdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tc2V0dGluZ3NcIj48L2k+IEFjY291bnQgU2V0dGluZ3N7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhvbWVcIj48L2k+IE92ZXJ2aWV3e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e0FjY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zZXR0aW5nc1wiPjwvaT4gQWNjb3VudCBTZXR0aW5nc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGxpc3Qtc2VwYXJhdGVkIHByb2ZpbGUtc3RhdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00IGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgcHJvZmlsZS1zdGF0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Q291bnRwLlByb2plY3RfYWdncmVnYXRlLmFnZ3JlZ2F0ZS5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBwcm9maWxlLXN0YXQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgTGl2ZSBQcm9qZWN0c3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTQgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBwcm9maWxlLXN0YXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuVGFza3NfYWdncmVnYXRlLmFnZ3JlZ2F0ZS5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyY2FzZSBwcm9maWxlLXN0YXQtdGV4dFwiPiBUYXNrcyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9maWxlLWRlc2MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dCB7ZGF0YS5Vc2VyX2J5X3BrLk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luLXRvcC0yMCBwcm9maWxlLWRlc2MtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5Vc2VyX2J5X3BrLkxpbmtlZElufT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuTGlua2VkSW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tdG9wLTIwIHByb2ZpbGUtZGVzYy1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLlVzZXJfYnlfcGsuR2l0aHVifT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuR2l0aHVifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luLXRvcC0yMCBwcm9maWxlLWRlc2MtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuVXNlcl9ieV9way5TaXRlfT57ZGF0YS5Vc2VyX2J5X3BrLlNpdGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm15TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPlBkZiBmaWxlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW1iZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uLyR7ZGF0YS5Vc2VyX2J5X3BrLkZpbGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9wZGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1NzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZ3JleS1zYWxzYSBidG4tb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YWNjID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtdGl0bGUgdGFiYmFibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24gY2FwdGlvbi1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZ2xvYmUgdGhlbWUtZm9udCBoaWRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcHRpb24tc3ViamVjdCBmb250LWJsdWUtbWFkaXNvbiBib2xkIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3ZlcnZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInRhYl8xXzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoVXBkYXRlVXNlckIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOiB7ZGF0YS5Vc2VyX2J5X3BrLk5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDoge2RhdGEuVXNlcl9ieV9way5MYXN0X05hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIE51bWJlciA6IHtkYXRhLlVzZXJfYnlfcGsuUGhvbmVfTnVtYmVyfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIDoge2RhdGEuVXNlcl9ieV9way5lbWFpbH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi10b3AtMjAgcHJvZmlsZS1kZXNjLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXN1bWUgOiA8bGFiZWw+e2RhdGEuVXNlcl9ieV9way5GaWxlfTwvbGFiZWw+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI215TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gcmVkIGJ0bi1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgQ1Z7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC4uLy4uLyR7ZGF0YS5Vc2VyX2J5X3BrLkZpbGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0bGV0IGxpZ2h0IGJvcmRlcmVkIHRhc2tzLXdpZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDM0MiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24gY2FwdGlvbi1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYmFyLWNoYXJ0IHRoZW1lLWZvbnQgaGlkZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXB0aW9uLXN1YmplY3QgZm9udC1ibHVlLW1hZGlzb24gYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcHRpb24taGVscGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5Vc2VyX2J5X3BrLlRhc2tzX2FnZ3JlZ2F0ZS5hZ2dyZWdhdGUuY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaW1TY3JvbGxEaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFsd2F5cy12aXNpYmxlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmFpbC12aXNpYmxlMT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhhbmRsZS1jb2xvcj1cIiNEN0RDRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWluaXRpYWxpemVkPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YXNrLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFza3MuVGFzay5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YXNrLXRpdGxlLXNwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFzay1iZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmVsbC1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpbVNjcm9sbEJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGltU2Nyb2xsUmFpbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWZvb3RlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogMTk1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWFycm93LWxpbmsgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gc3VibWl0KCl9PlNlZSBBbGwgVGFza3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LXRpdGxlIHRhYmJhYmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb24gY2FwdGlvbi1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nbG9iZSB0aGVtZS1mb250IGhpZGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXB0aW9uLXN1YmplY3QgZm9udC1ibHVlLW1hZGlzb24gYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVuZGluZyBsZWF2ZSByZXF1ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiByZWFzb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5zdGFydCBkYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ZW5kIGRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xlYXZlLmxlYXZlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydF9kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kX2RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJU08oZW5kX2RhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInl5eXktTU0tZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUlTTyhzdGFydF9kYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5eXl5LU1NLWRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpZH0gY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3JlYXNvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhcnRfZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZW5kX2RhdGV9PC90ZD57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtc20gbGFiZWwtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHByb3ZlZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN0YXR1cyA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtc20gbGFiZWwtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlY2xpbmVke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJ0bi1zbSBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VscmVxdWVzdChpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5Vc2VyX2J5X3BrLlJvbGUgPT0gXCJFbXBsb3llZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBib3JkZXJlZCB0YXNrcy13aWRnZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzQyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGltU2Nyb2xsRGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtZWxlbWVudC1jYXJkIG10LWVsZW1lbnQtb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1jYXJkLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtY2FyZC1hdmF0YXIgbXQtb3ZlcmxheS0xIG10LXNjcm9sbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi8uLi8ke2RhdGEuVXNlcl9ieV9way5Vc2VyLkF2YXRhcn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtaW5mb1wiPjwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtY2FyZC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuVXNlcl9ieV9way5Vc2VyLk5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuVXNlci5MYXN0X05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LWNhcmQtZGVzYyBmb250LWdyZXktbWludFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSA6IHtkYXRhLlVzZXJfYnlfcGsuVXNlci5OYW1lfSA8YnIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5Vc2VyX2J5X3BrLlVzZXIuTGFzdF9OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCA6IHtkYXRhLlVzZXJfYnlfcGsuVXNlci5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIE51bWJlciA6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlVzZXJfYnlfcGsuVXNlci5QaG9uZV9OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcnRsZXQgbGlnaHQgYm9yZGVyZWQgdGFza3Mtd2lkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDM0MiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uIGNhcHRpb24tbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1iYXItY2hhcnQgdGhlbWUtZm9udCBoaWRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXB0aW9uLXN1YmplY3QgZm9udC1ibHVlLW1hZGlzb24gYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBlbXBsb3llZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IFVzZXIgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IE5hbWUgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IExhc3QgbmFtZSA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gRW1haWwgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFbXBsb3llZS5Vc2VyLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeyBpZCwgbmFtZSwgZW1haWwsIEF2YXRhciwgTGFzdF9OYW1lIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXZhdGFyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uLy4uLyR7QXZhdGFyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi4vcHJvZmlsZS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ge25hbWV9PC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntMYXN0X05hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldCBsaWdodCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC10aXRsZSB0YWJiYWJsZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FwdGlvbiBjYXB0aW9uLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1nbG9iZSB0aGVtZS1mb250IGhpZGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FwdGlvbi1zdWJqZWN0IGZvbnQtYmx1ZS1tYWRpc29uIGJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50IHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGFiXzFfMVwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcnNvbmFsIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGFiXzFfMlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZSBBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGFiXzFfM1wiIGRhdGEtdG9nZ2xlPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGFiXzFfNFwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBDVlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwidGFiXzFfMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChVcGRhdGVVc2VyQil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5MYXN0X05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTGFzdF9OYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIE51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5QaG9uZV9OdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUGhvbmVfTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzEgNjQ2IDU4MCBERU1PICg2Mjg0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5Vc2VyX2J5X3BrLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRJTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5MaW5rZWRJbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJMaW5rZWRJblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkxpbmtlZEluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlua2VkSW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPkdpdGh1YjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5HaXRodWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiR2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiR2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR2l0aHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5TaXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5Vc2VyX2J5X3BrLlNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2NjdXBhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5Eb21haW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldlYiBEZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luLXRvcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2Vze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJ0YWJfMV8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgcm9sZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZWlucHV0IGZpbGVpbnB1dC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcm92aWRlcz1cImZpbGVpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZWlucHV0LW5ldyB0aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcmVhdGVPYmplY3RVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlaW5wdXQtbmV3IHRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwOi8vd3d3LnBsYWNlaG9sZC5pdC8yMDB4MTUwL0VGRUZFRi9BQUFBQUEmYW1wO3RleHQ9bm8raW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGVpbnB1dC1leGlzdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGRlZmF1bHQgZmlsZWlucHV0LWV4aXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJmaWxlaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0biBkZWZhdWx0IGJ0bi1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibXlJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkVG9DbGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi10b3AtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZFRvU2VydmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi10b3AtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZFRvU2VydmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJ0YWJfMV8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0MihDaGFuZ2VQYXNzd29yZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuVXNlcl9ieV9way5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcjIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJZb3UgbXVzdCBwcm92aWRlIGEgcGFzc3dvcmQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmUtdHlwZSBOZXcgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiWW91IG11c3QgcHJvdmlkZSBhIHBhc3N3b3JkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luLXRvcC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3Jke1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBcIiBpZD1cInRhYl8xXzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiByb2xlPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlaW5wdXQgZmlsZWlucHV0LW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByb3ZpZGVzPVwiZmlsZWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2Fzc2V0cy9nbG9iYWwvaW1nL3BkZi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI215TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGRlZmF1bHQgYnRuLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRGaWxlVG9DbGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RmlsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpbi10b3AtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZEZpbGVUb1NlcnZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW4tdG9wLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGxvYWRGaWxlVG9TZXJ2ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXJlcXVlc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=