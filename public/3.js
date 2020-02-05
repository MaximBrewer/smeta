(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/RegisterPage.js":
/*!*************************************************!*\
  !*** ./resources/js/components/RegisterPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterPage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Layouts_Copyright__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layouts/Copyright */ "./resources/js/components/Layouts/Copyright.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["makeStyles"])(function (theme) {
  return {
    root: {
      height: "100vh"
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.type === "dark" ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
function RegisterPage() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: {
      value: null,
      errors: null
    },
    last_name: {
      value: null,
      errors: null
    },
    email: {
      value: null,
      errors: null
    },
    password_confirmation: {
      value: null,
      errors: null
    },
    password: {
      value: null,
      errors: null
    },
    errors: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      register = _useState2[0],
      setRegisterState = _useState2[1];

  function handleChange(event) {
    setRegisterState({
      name: event.target.name != "name" ? {
        value: register.name.value,
        errors: register.name.errors
      } : {
        value: event.target.value,
        errors: !event.target.value ? ["Field is required!"] : null
      },
      last_name: event.target.name != "last_name" ? {
        value: register.last_name.value,
        errors: register.last_name.errors
      } : {
        value: event.target.value,
        errors: !event.target.value ? ["Field is required!"] : null
      },
      email: event.target.name != "email" ? {
        value: register.email.value,
        errors: register.email.errors
      } : {
        value: event.target.value,
        errors: !event.target.value ? ["Field is required!"] : null
      },
      password: event.target.name != "password" ? {
        value: register.password.value,
        errors: register.password.errors
      } : {
        value: event.target.value,
        errors: !event.target.value ? ["Field is required!"] : null
      },
      password_confirmation: event.target.name != "password_confirmation" ? {
        value: register.password_confirmation.value,
        errors: register.password_confirmation.errors
      } : {
        value: event.target.value,
        errors: !event.target.value ? ["Field is required!"] : null
      },
      errors: null
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRegisterState({
      name: {
        value: register.name.value,
        errors: !register.name.value ? ["Field is required!"] : register.name.errors
      },
      last_name: {
        value: register.last_name.value,
        errors: !register.last_name.value ? ["Field is required!"] : register.last_name.errors
      },
      email: {
        value: register.email.value,
        errors: !register.email.value ? ["Field is required!"] : register.email.errors
      },
      password: {
        value: register.password.value,
        errors: !register.password.value ? ["Field is required!"] : register.password.errors
      },
      password_confirmation: {
        value: register.password_confirmation.value,
        errors: !register.password_confirmation.value ? ["Field is required!"] : register.password_confirmation.errors
      },
      errors: register.errors
    });

    if (register.name.value && register.email.value && register.password.value && register.password_confirmation.value) {
      console.log(register);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/register", {
        name: register.name.value,
        last_name: register.last_name.value,
        email: register.email.value,
        password: register.password.value,
        password_confirmation: register.password_confirmation.value
      }).then(function (res) {
        if (res.data && res.data.redirectTo) location.href = res.data.redirectTo;
      })["catch"](function (err) {
        if (err.response && err.response.data && err.response.data.errors) setRegisterState({
          name: {
            value: register.name.value,
            errors: err.response.data.errors.name
          },
          last_name: {
            value: register.last_name.value,
            errors: err.response.data.errors.last_name
          },
          email: {
            value: register.email.value,
            errors: err.response.data.errors.email
          },
          password: {
            value: register.password.value,
            errors: err.response.data.errors.password
          },
          password_confirmation: {
            value: register.password_confirmation.value,
            errors: err.response.data.errors.password_confirmation
          },
          errors: [err.response.data.message]
        });
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    component: "main",
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: false,
    sm: 4,
    md: 7,
    className: classes.image
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    md: 5,
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"],
    elevation: 6,
    square: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    component: "h1",
    variant: "h5"
  }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "name",
    error: !!register.name.errors && !!register.name.errors.length,
    helperText: !!register.name.errors && !!register.name.errors.length ? register.name.errors.join(", ") : "",
    label: "Name",
    name: "name",
    autoComplete: "name",
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "lastName",
    error: !!register.last_name.errors && !!register.last_name.errors.length,
    helperText: !!register.last_name.errors && !!register.last_name.errors.length ? register.last_name.errors.join(", ") : "",
    label: "Last Name",
    name: "last_name",
    autoComplete: "lname",
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    error: !!register.email.errors && !!register.email.errors.length,
    helperText: !!register.email.errors && !!register.email.errors.length ? register.email.errors.join(", ") : "",
    autoComplete: "email",
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    name: "password",
    error: !!register.password.errors && !!register.password.errors.length,
    helperText: !!register.password.errors && !!register.password.errors.length ? register.password.errors.join(", ") : "",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "new-password",
    onChange: handleChange
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "outlined",
    required: true,
    fullWidth: true,
    error: !!register.password_confirmation.errors && !!register.password_confirmation.errors.length,
    helperText: !!register.password_confirmation.errors && !!register.password_confirmation.errors.length ? register.password_confirmation.errors.join(", ") : "",
    name: "password_confirmation",
    label: "Confirm password",
    type: "password",
    id: "passwordConfirm",
    autoComplete: "new-password",
    onChange: handleChange
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    justify: "flex-end"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"],
    to: "/login",
    href: "javascript:void(0)",
    variant: "body2"
  }, "Already have an account? Sign in"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_13__["default"], {
    mt: 5
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layouts_Copyright__WEBPACK_IMPORTED_MODULE_17__["default"], null))))));
}

/***/ })

}]);