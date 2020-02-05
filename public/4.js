(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Personal/Products.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Personal/Products.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Products; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Products() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    columns: [{
      title: 'Name',
      field: 'name'
    }, {
      title: 'Surname',
      field: 'surname'
    }, {
      title: 'Birth Year',
      field: 'birthYear',
      type: 'numeric'
    }, {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: {
        34: 'İstanbul',
        63: 'Şanlıurfa'
      }
    }],
    data: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/v1/products?csrf_token=" + window.csrf_token + "&api_token=" + window.api_token).then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    if (err.response && err.response.data && err.response.data.errors) {}
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "Editable Example",
    columns: state.columns,
    data: state.data,
    editable: {
      onRowAdd: function onRowAdd(newData) {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve();
            setState(function (prevState) {
              var data = _toConsumableArray(prevState.data);

              data.push(newData);
              return _objectSpread({}, prevState, {
                data: data
              });
            });
          }, 600);
        });
      },
      onRowUpdate: function onRowUpdate(newData, oldData) {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve();

            if (oldData) {
              setState(function (prevState) {
                var data = _toConsumableArray(prevState.data);

                data[data.indexOf(oldData)] = newData;
                return _objectSpread({}, prevState, {
                  data: data
                });
              });
            }
          }, 600);
        });
      },
      onRowDelete: function onRowDelete(oldData) {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve();
            setState(function (prevState) {
              var data = _toConsumableArray(prevState.data);

              data.splice(data.indexOf(oldData), 1);
              return _objectSpread({}, prevState, {
                data: data
              });
            });
          }, 600);
        });
      }
    }
  });
}

/***/ })

}]);