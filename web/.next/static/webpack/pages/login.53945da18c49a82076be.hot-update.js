webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_keki_dev_websites_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_keki_dev_websites_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/button */ \"./node_modules/@chakra-ui/button/dist/esm/index.js\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/keki/dev/websites/lireddit/web/src/components/Navbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function Navbar(_ref) {\n  _s();\n\n  Object(_Users_keki_dev_websites_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useMeQuery\"])(),\n      _useMeQuery2 = Object(_Users_keki_dev_websites_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMeQuery, 1),\n      _useMeQuery2$ = _useMeQuery2[0],\n      data = _useMeQuery2$.data,\n      fetching = _useMeQuery2$.fetching;\n\n  var body = null; // Data is loading\n\n  if (fetching) {// user not logged in\n  } else if (!(data !== null && data !== void 0 && data.me)) {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n          variant: \"outline\",\n          colorScheme: \"teal\",\n          mr: 2,\n          children: \"\\uB85C\\uADF8\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"register\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n          variant: \"outline\",\n          colorScheme: \"teal\",\n          children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true); // user is logged in\n  } else {\n    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      children: data.me.username\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      bgGradient: \"#1A202C\",\n      p: 4,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        ml: \"auto\",\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n            variant: \"outline\",\n            colorScheme: \"teal\",\n            mr: 2,\n            children: \"\\uD648\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), body]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Navbar, \"8DQvut1eX6vBh4GVSiANs/7NvU8=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_7__[\"useMeQuery\"]];\n});\n\n_c = Navbar;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeD84MDVmIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZU1lUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJib2R5IiwibWUiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxNQUE2QixHQUFHLFNBQWhDQSxNQUFnQyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ3RCQyxxRUFBVSxFQURZO0FBQUE7QUFBQTtBQUFBLE1BQzFDQyxJQUQwQyxpQkFDMUNBLElBRDBDO0FBQUEsTUFDcENDLFFBRG9DLGlCQUNwQ0EsUUFEb0M7O0FBRW5ELE1BQUlDLElBQUksR0FBRyxJQUFYLENBRm1ELENBSW5EOztBQUNBLE1BQUlELFFBQUosRUFBYyxDQUNaO0FBQ0QsR0FGRCxNQUVPLElBQUksRUFBQ0QsSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FBRUcsRUFBUCxDQUFKLEVBQWU7QUFDcEJELFFBQUksZ0JBQ0Y7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxPQUFmO0FBQUEsK0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLHFCQUFXLEVBQUMsTUFBdEM7QUFBNkMsWUFBRSxFQUFFLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUUscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsVUFBZjtBQUFBLCtCQUNFLHFFQUFDLHdEQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixxQkFBVyxFQUFDLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUEsb0JBREYsQ0FEb0IsQ0FlcEI7QUFDRCxHQWhCTSxNQWdCQTtBQUNMQSxRQUFJLGdCQUFHLHFFQUFDLHFEQUFEO0FBQUEsZ0JBQU1GLElBQUksQ0FBQ0csRUFBTCxDQUFRQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxnQkFBVSxFQUFDLFNBQWpCO0FBQTJCLE9BQUMsRUFBRSxDQUE5QjtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQUssVUFBRSxFQUFFLE1BQVQ7QUFBQSxtQkFDRyxHQURILGVBRUUscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsR0FBZjtBQUFBLGlDQUNFLHFFQUFDLHdEQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUEwQix1QkFBVyxFQUFDLE1BQXRDO0FBQTZDLGNBQUUsRUFBRSxDQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFPR0YsSUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFlRCxDQTFDTTs7R0FBTUosTTtVQUNrQkMsNkQ7OztLQURsQkQsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXggfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9idXR0b25cIjtcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuaW50ZXJmYWNlIE5hdmJhclByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBOYXZiYXI6IFJlYWN0LkZDPE5hdmJhclByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbeyBkYXRhLCBmZXRjaGluZyB9XSA9IHVzZU1lUXVlcnkoKTtcbiAgbGV0IGJvZHkgPSBudWxsO1xuXG4gIC8vIERhdGEgaXMgbG9hZGluZ1xuICBpZiAoZmV0Y2hpbmcpIHtcbiAgICAvLyB1c2VyIG5vdCBsb2dnZWQgaW5cbiAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcbiAgICBib2R5ID0gKFxuICAgICAgPD5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCJsb2dpblwiPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBtcj17Mn0+XG4gICAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCJyZWdpc3RlclwiPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjb2xvclNjaGVtZT1cInRlYWxcIj5cbiAgICAgICAgICAgIO2ajOybkOqwgOyehVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC8+XG4gICAgKTtcbiAgICAvLyB1c2VyIGlzIGxvZ2dlZCBpblxuICB9IGVsc2Uge1xuICAgIGJvZHkgPSA8Qm94PntkYXRhLm1lLnVzZXJuYW1lfTwvQm94PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGbGV4IGJnR3JhZGllbnQ9XCIjMUEyMDJDXCIgcD17NH0+XG4gICAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY29sb3JTY2hlbWU9XCJ0ZWFsXCIgbXI9ezJ9PlxuICAgICAgICAgICAgICDtmYhcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAge2JvZHl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ })

})