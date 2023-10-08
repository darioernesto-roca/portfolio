"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Layouts.js":
/*!********************************!*\
  !*** ./src/layouts/Layouts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_colorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/colorContext */ \"./src/context/colorContext.js\");\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\n/* harmony import */ var _BackMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BackMobile */ \"./src/layouts/BackMobile.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ \"./src/layouts/Header.js\");\n/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Switcher */ \"./src/layouts/Switcher.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layouts = function(param) {\n    var children = param.children, bodyCls = param.bodyCls, extraPage = param.extraPage, light = param.light;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.querySelector(\"body\").classList = bodyCls ? bodyCls : \"dark fullscreendark\";\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), changeMobileMenu = ref.changeMobileMenu, mobileMenu = ref.mobileMenu;\n    var color = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_colorContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).color;\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().width;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (width > 1025) {\n            changeMobileMenu(false);\n        }\n    }, [\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        type: \"text/css\",\n                        media: \"all\",\n                        href: \"css/skins/\".concat(color, \".css\"),\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dario Ernesto Roca - Web Developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"img/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: \"Your Website Title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: \"Description of your website\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 37,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: \"https://darioernestoroca.com/path-to-your-image.jpg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 38,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: \"https://darioernestoroca.com/\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 39,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"twitter:card\",\n                        content: \"summary_large_image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 40,\n                        columnNumber: 3\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page animated\",\n                style: {\n                    animationDuration: \"500ms\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Switcher__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    !extraPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        light: light\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 47,\n                        columnNumber: 24\n                    }, _this),\n                    \" \",\n                    extraPage ? children : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        id: \"main\",\n                        className: \"\".concat(width < 1025 ? mobileMenu ? \"open\" : \"\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackMobile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                changeMobileMenu: changeMobileMenu,\n                                mobileMenu: mobileMenu\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this),\n                            children\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Documents\\\\projects\\\\portfolio\\\\src\\\\layouts\\\\Layouts.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layouts, \"1ZMkSxEHkY53pQ3y4/+WLVzPea0=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Layouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);\nvar _c;\n$RefreshReg$(_c, \"Layouts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDMkI7QUFDTDtBQUNKO0FBQ0Y7QUFDUDtBQUNSO0FBQ0k7O0FBRWxDLElBQU1VLE9BQU8sR0FBRyxnQkFBNkM7UUFBMUNDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7SUFDcERYLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsU0FBUyxHQUFHTCxPQUFPLEdBQzlDQSxPQUFPLEdBQ1AscUJBQXFCLENBQUM7S0FDM0IsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLElBQXlDVixHQUFzQixHQUF0QkEsaURBQVUsQ0FBQ0csMkRBQVUsQ0FBQyxFQUF2RGEsZ0JBQWdCLEdBQWlCaEIsR0FBc0IsQ0FBdkRnQixnQkFBZ0IsRUFBRUMsVUFBVSxHQUFLakIsR0FBc0IsQ0FBckNpQixVQUFVO0lBQ3BDLElBQU0sS0FBTyxHQUFLakIsaURBQVUsQ0FBQ0UsNkRBQVksQ0FBQyxDQUFsQ2dCLEtBQUs7SUFDYixJQUFNLEtBQU8sR0FBS2QsMERBQWEsRUFBRSxDQUF6QmUsS0FBSztJQUNibEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWtCLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDaEJILGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0tBQ0YsRUFBRTtRQUFDRyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBQ1oscUJBQ0UsOERBQUNwQiwyQ0FBUTs7MEJBQ1AsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ3NCLE1BQUk7d0JBQ0hDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxLQUFLLEVBQUMsS0FBSzt3QkFDWEMsSUFBSSxFQUFFLFlBQVcsQ0FBUSxNQUFJLENBQVZMLEtBQUssRUFBQyxNQUFJLENBQUM7d0JBQzlCTSxHQUFHLEVBQUMsWUFBWTs7Ozs7NkJBQ2hCO29CQUFDLEdBQUc7a0NBQ04sOERBQUNDLE9BQUs7a0NBQUMsb0NBQWtDOzs7Ozs2QkFBUTtrQ0FDakQsOERBQUNMLE1BQUk7d0JBQUNJLEdBQUcsRUFBQyxNQUFNO3dCQUFDRCxJQUFJLEVBQUMsaUJBQWlCOzs7Ozs2QkFBRztrQ0FFMUMsOERBQUNHLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsb0JBQW9COzs7Ozs2QkFBRztrQ0FDL0QsOERBQUNGLE1BQUk7d0JBQUNDLFFBQVEsRUFBQyxnQkFBZ0I7d0JBQUNDLE9BQU8sRUFBQyw2QkFBNkI7Ozs7OzZCQUFHO2tDQUN4RSw4REFBQ0YsTUFBSTt3QkFBQ0MsUUFBUSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBQyxxREFBcUQ7Ozs7OzZCQUFHO2tDQUMxRiw4REFBQ0YsTUFBSTt3QkFBQ0MsUUFBUSxFQUFDLFFBQVE7d0JBQUNDLE9BQU8sRUFBQywrQkFBK0I7Ozs7OzZCQUFHO2tDQUNsRSw4REFBQ0YsTUFBSTt3QkFBQ0csSUFBSSxFQUFDLGNBQWM7d0JBQUNELE9BQU8sRUFBQyxxQkFBcUI7Ozs7OzZCQUFHOzs7Ozs7cUJBRy9DOzBCQUNQLDhEQUFDRSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxpQkFBaUIsRUFBRSxPQUFPO2lCQUFFOztrQ0FDbEUsOERBQUMxQixpREFBUTs7Ozs2QkFBRztvQkFFWCxDQUFDSSxTQUFTLGtCQUFJLDhEQUFDTCwrQ0FBTTt3QkFBQ00sS0FBSyxFQUFFQSxLQUFLOzs7Ozs2QkFBSTtvQkFDWCxHQUFHO29CQUM5QkQsU0FBUyxHQUNSRixRQUFRLGlCQUVSLDhEQUFDeUIsTUFBSTt3QkFDSEMsRUFBRSxFQUFDLE1BQU07d0JBQ1RKLFNBQVMsRUFBRSxFQUFDLENBQWlELE9BQS9DWixLQUFLLEdBQUcsSUFBSSxHQUFJRixVQUFVLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBSSxFQUFFLENBQUU7OzBDQUc5RCw4REFBQ1osbURBQVU7Z0NBQ1RXLGdCQUFnQixFQUFFQSxnQkFBZ0I7Z0NBQ2xDQyxVQUFVLEVBQUVBLFVBQVU7Ozs7O3FDQUN0Qjs0QkFDRFIsUUFBUTs7Ozs7OzZCQUNKOzs7Ozs7cUJBRUw7WUFBQyxHQUFHOzs7Ozs7YUFDRCxDQUNYO0NBQ0g7R0F6REtELE9BQU87O1FBUU9KLHNEQUFhOzs7QUFSM0JJLEtBQUFBLE9BQU87QUEwRGIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzPzZiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb2xvckNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvY29sb3JDb250ZXh0XCI7XHJcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L25hdkNvbnRleHRcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSBcIi4uL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IEJhY2tNb2JpbGUgZnJvbSBcIi4vQmFja01vYmlsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSBcIi4vU3dpdGNoZXJcIjtcclxuXHJcbmNvbnN0IExheW91dHMgPSAoeyBjaGlsZHJlbiwgYm9keUNscywgZXh0cmFQYWdlLCBsaWdodCB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdCA9IGJvZHlDbHNcclxuICAgICAgPyBib2R5Q2xzXHJcbiAgICAgIDogXCJkYXJrIGZ1bGxzY3JlZW5kYXJrXCI7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHsgY2hhbmdlTW9iaWxlTWVudSwgbW9iaWxlTWVudSB9ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcclxuICBjb25zdCB7IGNvbG9yIH0gPSB1c2VDb250ZXh0KENvbG9yQ29udGV4dCk7XHJcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAod2lkdGggPiAxMDI1KSB7XHJcbiAgICAgIGNoYW5nZU1vYmlsZU1lbnUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFt3aWR0aF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgbWVkaWE9XCJhbGxcIlxyXG4gICAgICAgICAgaHJlZj17YGNzcy9za2lucy8ke2NvbG9yfS5jc3NgfVxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgPHRpdGxlPkRhcmlvIEVybmVzdG8gUm9jYSAtIFdlYiBEZXZlbG9wZXI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiaW1nL2Zhdmljb24uaWNvXCIgLz5cclxuXHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJZb3VyIFdlYnNpdGUgVGl0bGVcIiAvPlxyXG4gIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRGVzY3JpcHRpb24gb2YgeW91ciB3ZWJzaXRlXCIgLz5cclxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZGFyaW9lcm5lc3Rvcm9jYS5jb20vcGF0aC10by15b3VyLWltYWdlLmpwZ1wiIC8+XHJcbiAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9kYXJpb2VybmVzdG9yb2NhLmNvbS9cIiAvPlxyXG4gIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcblxyXG5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UgYW5pbWF0ZWRcIiBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogXCI1MDBtc1wiIH19PlxyXG4gICAgICAgIDxTd2l0Y2hlciAvPlxyXG4gICAgICAgIHsvKiBIZWFkZXIgU3RhcnRzICovfVxyXG4gICAgICAgIHshZXh0cmFQYWdlICYmIDxIZWFkZXIgbGlnaHQ9e2xpZ2h0fSAvPn1cclxuICAgICAgICB7LyogTWFpbiBDb250ZW50IFN0YXJ0cyAqL317XCIgXCJ9XHJcbiAgICAgICAge2V4dHJhUGFnZSA/IChcclxuICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxtYWluXHJcbiAgICAgICAgICAgIGlkPVwibWFpblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7d2lkdGggPCAxMDI1ID8gKG1vYmlsZU1lbnUgPyBcIm9wZW5cIiA6IFwiXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogQmFjayBUbyBIb21lIFN0YXJ0cyBbT05MWSBNT0JJTEVdICovfVxyXG4gICAgICAgICAgICA8QmFja01vYmlsZVxyXG4gICAgICAgICAgICAgIGNoYW5nZU1vYmlsZU1lbnU9e2NoYW5nZU1vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgbW9iaWxlTWVudT17bW9iaWxlTWVudX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0cztcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJGcmFnbWVudCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb2xvckNvbnRleHQiLCJOYXZDb250ZXh0IiwidXNlV2luZG93U2l6ZSIsIkJhY2tNb2JpbGUiLCJIZWFkZXIiLCJTd2l0Y2hlciIsIkxheW91dHMiLCJjaGlsZHJlbiIsImJvZHlDbHMiLCJleHRyYVBhZ2UiLCJsaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImNoYW5nZU1vYmlsZU1lbnUiLCJtb2JpbGVNZW51IiwiY29sb3IiLCJ3aWR0aCIsImxpbmsiLCJ0eXBlIiwibWVkaWEiLCJocmVmIiwicmVsIiwidGl0bGUiLCJtZXRhIiwicHJvcGVydHkiLCJjb250ZW50IiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJtYWluIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Layouts.js\n"));

/***/ })

});