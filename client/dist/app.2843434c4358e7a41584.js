(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "+QUN":
/*!************************************************************!*\
  !*** ./src/Components/CheckoutProduct/CheckoutProduct.css ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200899016
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "/66/":
/*!**********************************************************!*\
  !*** ./src/Components/ProductPreview/ProductPreview.css ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898912
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "4kz9":
/*!******************************!*\
  !*** ./src/StateProvider.js ***!
  \******************************/
/*! exports provided: StateContext, StateProvider, useStateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateContext", function() { return StateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateProvider", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStateValue", function() { return useStateValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 //Preparse the dataLayer

var StateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(); //Wrap our app and provide the Data layer

var StateProvider = function StateProvider(_ref) {
  var reducer = _ref.reducer,
      initialState = _ref.initialState,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
}; //Pull information from the data layer

var useStateValue = function useStateValue() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StateContext);
};

/***/ }),

/***/ "5Aq+":
/*!************************************!*\
  !*** ./src/validations/isEmpty.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "cDf5");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmpty);

/***/ }),

/***/ "66C7":
/*!*********************************************!*\
  !*** ./src/Components/Checkout/Checkout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout.css */ "d9Pj");
/* harmony import */ var _Subtotal_Subtotal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subtotal/Subtotal */ "yZPo");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var _CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CheckoutProduct/CheckoutProduct */ "9tt3");







function Checkout() {
  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      basket = _useStateValue2$.basket,
      user = _useStateValue2$.user,
      dispatch = _useStateValue2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkout__left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "checkout__ad",
    src: "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",
    alt: "ad"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkout__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Hello, ", user === null || user === void 0 ? void 0 : user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Your shopping Basket"), basket.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      rating: item.rating
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "chekcout__right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Subtotal_Subtotal__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "7ABn":
/*!*******************************************!*\
  !*** ./src/Components/Payment/Payment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Payment_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Payment.css */ "xZAK");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var _CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CheckoutProduct/CheckoutProduct */ "9tt3");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stripe/react-stripe-js */ "eWwy");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-currency-format */ "Lxlj");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reducer */ "qgLD");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Address_Address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Address/Address */ "R6a0");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "o6Jd");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ "1waj");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _actions_addressAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/addressAction */ "A3wa");
/* harmony import */ var _actions_paymentActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../actions/paymentActions */ "ZRfN");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "DfQ9");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Stepper */ "IOIh");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Step */ "Sw5t");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "aeHk");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/StepContent */ "5R4X");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Button */ "FtsS");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Paper */ "X6bi");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Typography */ "KI6R");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! path */ "33yf");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_27__);





























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  };
});

function Payment(props) {
  //UseDispatch works as passing getAddress to connect
  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_5__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      basket = _useStateValue2$.basket,
      user = _useStateValue2$.user,
      dispatch = _useStateValue2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useElements"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      processing = _useState2[0],
      setProcessing = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      succeeded = _useState4[0],
      setSucceeded = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      disabled = _useState8[0],
      setDisabled = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      clientSecret = _useState10[0],
      setClientSecret = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),
      useAddress = _useState12[0],
      setUserAddress = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState13, 2),
      selectedAddress = _useState14[0],
      setSelectedAddress = _useState14[1]; //Stepper function
  //Use select works as mapStateToProps


  var userStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useSelector"])(function (state) {
    return state.auth;
  });
  var addressStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useSelector"])(function (state) {
    return state.address;
  });
  var dispatchProps = Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["useDispatch"])(); ///HERE THE STEPPERS

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  }; //funciton to load the country list json prefetch
  //function to get the address of the user


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (userStore.user.id) {
              dispatchProps(Object(_actions_addressAction__WEBPACK_IMPORTED_MODULE_15__["getAddress"])(userStore.user.id));
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [userStore]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setUserAddress(addressStore.address);
  }, [addressStore]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //generates the new stripe secret whenever the baseket is updated to send request for updated price
    var getClientSecret = /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default()({
                  method: "post",
                  url: "/api/payments/createPaymentIntent?total=".concat(parseInt(Object(_reducer__WEBPACK_IMPORTED_MODULE_10__["getBasketTotal"])(basket) * 100))
                });

              case 2:
                response = _context2.sent;
                setClientSecret(response.data.clientSecret);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function getClientSecret() {
        return _ref2.apply(this, arguments);
      };
    }();

    getClientSecret();
  }, [basket]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      var payload;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // do the fancy stripe changes
              e.preventDefault();

              if (!selectedAddress) {
                _context3.next = 8;
                break;
              }

              setProcessing(true);
              _context3.next = 5;
              return stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                  card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["CardElement"])
                }
              }).then(function (_ref4) {
                var paymentIntent = _ref4.paymentIntent;
                //after payment confirmation
                var orderInfromation = {
                  user: userStore.user.id,
                  paymentId: paymentIntent.id,
                  paymentAmount: Object(_reducer__WEBPACK_IMPORTED_MODULE_10__["getBasketTotal"])(basket),
                  orders: basket,
                  addressId: selectedAddress,
                  created: new Date()
                };
                dispatchProps(Object(_actions_paymentActions__WEBPACK_IMPORTED_MODULE_16__["createOrders"])(orderInfromation, props.history)); // db.collection("users")
                //   .doc(user?.uid)
                //   .collection("orders")
                //   .doc(clientSecret)
                //   .set({
                //     basket: basket,
                //     amount: getBasketTotal(basket),
                //     created: new Date(),
                //   });

                setSucceeded(true);
                setError(null);
                setProcessing(false);
              });

            case 5:
              payload = _context3.sent;
              _context3.next = 9;
              break;

            case 8:
              setError("Please select an address!");

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    //set the disabled form
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }; //Select address card


  var selectAddressCard = function selectAddressCard(e) {
    setSelectedAddress(e.target.id);
  };

  function getSteps() {
    return ["Select Delivery Address", "Review Cart", "Proceed Payment"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__section"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__title"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, "Delivery Address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__address"
        }, userStore.user.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__address_card"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          className: "payment__link_address",
          to: "/address"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, null)), "Add Address")), useAddress.length > 0 && useAddress.map(function (userAdd) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            className: "payment__address_card_details ".concat(selectedAddress === userAdd._id ? "payment__address_selected_icon" : ""),
            id: userAdd._id,
            onClick: selectAddressCard
          }, selectedAddress === userAdd._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
            src: "https://i.ibb.co/j8yfBDS/check.png",
            className: "payment__selected_check"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "".concat(userAdd.area, ",").concat(userAdd === null || userAdd === void 0 ? void 0 : userAdd.landmark)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "".concat(userAdd.city, ",").concat(userAdd.state, ",").concat(userAdd.country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "".concat(userAdd.phone)));
        })));

      case 1:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__section"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__title"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, "Review items and delivery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__items"
        }, basket.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            rating: item.rating
          });
        })));

      case 2:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__section"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__title"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, "Payment Method")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
          onSubmit: handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["CardElement"], {
          onChange: handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__priceContainer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_9___default.a, {
          renderText: function renderText(value) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Order Total : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, "".concat(value))));
          },
          decimalScale: 2,
          value: Object(_reducer__WEBPACK_IMPORTED_MODULE_10__["getBasketTotal"])(basket),
          displayType: "text",
          thousandSeperator: true,
          prefix: "$"
        }), userStore.user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
          type: "submit",
          disabled: processing || disabled || succeeded
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, processing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Processing") : "Buy Now")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__error"
        }, "Please login to continue!")), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "payment__error"
        }, error))));

      default:
        return "Unknown step";
    }
  }

  console.log("selectedAddress====", selectedAddress);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "payment"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "payment__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "Checkout (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/checkout"
  }, basket === null || basket === void 0 ? void 0 : basket.length, " items"), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_20__["default"], {
    activeStep: activeStep,
    orientation: "vertical"
  }, steps.map(function (label, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_22__["default"], null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__["default"], null, getStepContent(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classes.actionsContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      disabled: activeStep === 0,
      onClick: handleBack,
      className: classes.button
    }, "Back"), activeStep !== steps.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
      variant: "contained",
      color: "primary",
      onClick: handleNext,
      className: "".concat(classes.button, " payment__stepper_button")
    }, "Next")))));
  })), activeStep === steps.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_25__["default"], {
    square: true,
    elevation: 0,
    className: classes.resetContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__["default"], null, "All steps completed - you're finished"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_24__["default"], {
    onClick: handleReset,
    className: classes.button
  }, "Reset")))));
}

Payment.propTypes = {
  getAddress: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Payment));

/***/ }),

/***/ "7Vi5":
/*!***************************************!*\
  !*** ./src/Components/Home/style.css ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898889
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "84ff":
/*!****************************************!*\
  !*** ./src/Components/Cards/Cards.css ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898940
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "9adA":
/*!****************************************!*\
  !*** ./src/Components/Order/Order.css ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200899003
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "9tt3":
/*!***********************************************************!*\
  !*** ./src/Components/CheckoutProduct/CheckoutProduct.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckoutProduct_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckoutProduct.css */ "+QUN");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");





function CheckoutProduct(_ref) {
  var id = _ref.id,
      image = _ref.image,
      title = _ref.title,
      price = _ref.price,
      rating = _ref.rating,
      hidebutton = _ref.hidebutton;

  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  var removeFromBasket = function removeFromBasket() {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkoutProduct"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "checkoutProduct__image",
    src: image,
    alt: "amazon_checkout"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkoutProduct__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "checkoutProduct__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "checkoutProduct__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "checkoutProduct__rating"
  }, Array(rating).fill().map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: i + "rate",
      className: "checkoutProduct__star_gold"
    }, "\uD83C\uDF1F");
  })), !hidebutton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: removeFromBasket
  }, "Remove from basket")));
}

/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

/***/ }),

/***/ "A3wa":
/*!**************************************!*\
  !*** ./src/actions/addressAction.js ***!
  \**************************************/
/*! exports provided: addAddress, getAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAddress", function() { return addAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddress", function() { return getAddress; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //Register user

var addAddress = function addAddress(addressData, history) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      try {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/address/create", addressData).then(function (res) {
          dispatch({
            type: "SET_ADDRESS",
            paylaod: res.data
          });
          history.push("/payment");
          resolve(res.data);
        }).catch(function (error) {
          console.log("error", error);
          dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
          });
          reject(error);
        });
      } catch (error) {
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data
        });
        reject(error);
      }
    });
  };
};
var getAddress = function getAddress(userId) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/address/get", {
        params: {
          userId: userId
        }
      }).then(function (res) {
        dispatch({
          type: "SET_ADDRESS",
          payload: res.data
        });
      }).catch(function (error) {
        console.log("ERROR", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error
        });
      });
    } catch (error) {
      console.log("ERROR", error);
      dispatch({
        type: "GET_ERRORS",
        payload: error
      });
    }
  };
};

/***/ }),

/***/ "AByd":
/*!*********************************************************!*\
  !*** ./src/Components/ProductPreview/ProductPreview.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnify */ "zq+Z");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var _ProductPreview_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductPreview.css */ "/66/");










function ProductPreview(props) {
  var _product$image;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      changeImage = _useState2[0],
      setChangeImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      product = _useState4[0],
      setProduct = _useState4[1]; //Use of context api


  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_7__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  var addToBasket = function addToBasket() {
    var _product$image$;

    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        image: product === null || product === void 0 ? void 0 : (_product$image$ = product.image[0]) === null || _product$image$ === void 0 ? void 0 : _product$image$.src,
        price: product.price,
        rating: product.rating
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/products/getSingleProduct", {
              params: {
                id: props.match.params.id
              }
            });

          case 3:
            response = _context.sent;

            if (response.data === null) {
              props.history.push("/");
            }

            setProduct(response.data);
            setChangeImage(response.data.image[0].src);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            props.history.push("/error");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  })), [props.match.params.id]);

  var handleImageChange = function handleImageChange(e) {
    setChangeImage(e.target.src);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview_imagePreview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "productPreview_image_thumbnail"
  }, (product === null || product === void 0 ? void 0 : (_product$image = product.image) === null || _product$image === void 0 ? void 0 : _product$image.length) > 0 && product.image.map(function (mp, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: "images" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      onClick: handleImageChange,
      src: mp.src,
      alt: "image"
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview_largeImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_image_magnify__WEBPACK_IMPORTED_MODULE_4__["default"], {
    smallImage: {
      alt: "Wristwatch by Ted Baker London",
      // isFluidWidth: true,
      src: changeImage,
      width: 500,
      height: 500
    },
    largeImage: {
      src: changeImage,
      width: 1000,
      height: 1200
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview__details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "productPreview__price"
  }, "Price: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "price"
  }, "$ ", product.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, " ", "Rating:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "gold"
  }, Array(product.rating).fill().map(function (x) {
    return "🌟";
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Store: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text"
  }, product.storeName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Seller:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text"
  }, product.seller)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview__addToBasket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: addToBasket,
    type: "button"
  }, "Add to basket")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "productPreview_offers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "\uD83D\uDCB0 Save Extra"), " with 4 offer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Bank Offer (2):"), " 10% off with Credit Card, Credit EMI and Debit EMI transactionss")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Cashback (2):"), " 5% back with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#"
  }, "Amazon Pay ICIC Bank "), " Creidt Card for Prime-members. % back for everybody")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "No Cost EMI:"), " Avail No Cost EMI on select cards for orders above $300")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, "Partner Offers:"), " Get GST invoice and save up to 28% on business purchases.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#"
  }, "Sign up for free")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ProductPreview));

/***/ }),

/***/ "Aayi":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "7Vi5");
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Product/Product */ "v8u0");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Carousel/Carousel */ "nkAR");
/* harmony import */ var _Cards_FourImageCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cards/FourImageCards */ "sdPo");
/* harmony import */ var _Cards_AdDisplayCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/AdDisplayCard */ "ePCW");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "55Ip");









var fourCardData = {
  firstCard: {
    title: "Amazon Brands & more",
    data: [{
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/1._SY116_CB413570652_.jpg",
      title: "Clothes"
    }, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/MF-372-232/186-116/2._SY116_CB413570652_.jpg",
      title: "Footwear"
    },, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg",
      title: "Clothing Essentials"
    },, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg",
      title: "Daily Essentials"
    }]
  },
  secondCard: {
    title: "Shop by Category",
    data: [{
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
      title: "Video Games"
    }, {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg",
      title: "Computer & Accessories"
    },, {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
      title: "Baby"
    },, {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
      title: "Toys & Games"
    }]
  },
  thirdCard: {
    title: "Up to 30% off | Top mobiles ",
    data: [{
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_2._SY116_CB416674425_.jpg",
      title: "Best Seller"
    }, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_3._SY116_CB416674425_.jpg",
      title: "Top Rated"
    },, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_4._SY116_CB416674425_.jpg",
      title: "Great Offers"
    },, {
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/MSO_Weblab/186_116/186x116_5._SY116_CB416674552_.jpg",
      title: "Accessories"
    }]
  }
};
var adDisplayData = {
  firstCard: {
    type: "text",
    className: "addisplay__Card_text",
    title: "Shop on the amazon app",
    text: "Fast, convenient and secure | Over 17 crore products in your pocket",
    link: "Download the amazon app"
  },
  secondCard: {
    type: "image",
    className: "addisplay__Card_image",
    image: "https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
  }
};

function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/getAllProducts").then(function (response) {
      console.log("HEADER &&&$$$$ IS THE RESPONSE------------------------------------------->", response);

      if (response.data) {
        setProducts(response.data);
      }
    }).catch(function (error) {
      console.log("error", error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cards_FourImageCards__WEBPACK_IMPORTED_MODULE_6__["default"], fourCardData.firstCard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cards_FourImageCards__WEBPACK_IMPORTED_MODULE_6__["default"], fourCardData.secondCard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cards_FourImageCards__WEBPACK_IMPORTED_MODULE_6__["default"], fourCardData.thirdCard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ad_displayCard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cards_AdDisplayCard__WEBPACK_IMPORTED_MODULE_7__["default"], adDisplayData.firstCard), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cards_AdDisplayCard__WEBPACK_IMPORTED_MODULE_7__["default"], adDisplayData.secondCard))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__row home_banner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg",
    className: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "home__row home__products_detail"
  }, products.length > 0 && products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: product._id,
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image[0].src,
      rating: product.rating
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "CCu3":
/*!******************************************!*\
  !*** ./src/Components/Orders/Orders.css ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898902
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "EQnm":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.bind(null, /*! web-vitals */ "w6Sm")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ "EVxr":
/*!**************************************!*\
  !*** ./src/reducers/errorReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_ERRORS":
      return action.payload;

    case "CLEAR_ERRORS":
      return {};

    default:
      return state;
  }
});

/***/ }),

/***/ "G/D/":
/*!************************************!*\
  !*** ./src/actions/authActions.js ***!
  \************************************/
/*! exports provided: registerUser, loginUser, setCurrentUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/setAuthToken */ "ypce");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");


 //This action for auth is called when an actons happen
//Register user

var registerUser = function registerUser(userData, history) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/userAuth/register", userData).then(function (res) {
        document.getElementById("registerMessage").innerHTML = "User Registered Successfully!";
        history.push("/login");
      }).catch(function (error) {
        console.log("error", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data
        });
      });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data
      });
    }
  };
}; //Login - Get the User token and save in the local storage

var loginUser = function loginUser(userData, history) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/userAuth/login", userData).then(function (res) {
        //Save to localStorage
        var token = res.data.token;
        localStorage.setItem("jwtToken", token);
        Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(token); //Decoded the token to get the user data

        var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token); //dispatch to the react context to share user details in full form

        var userDetails = {
          avatar: decoded.avatar,
          id: decoded.id,
          name: decoded.name,
          isSeller: decoded.isSeller
        };
        dispatch({
          type: "SET_USER",
          user: userDetails
        }); //Set the user

        dispatch(setCurrentUser(decoded));
        history.push("/");
      }).catch(function (err) {
        console.log("ERORR", err);
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data
      });
    }
  };
};
var setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  };
};
var logoutUser = function logoutUser() {
  return function (dispatch) {
    //Remove the current user from localstorga
    localStorage.removeItem("jwtToken"); //Remvoe auth header for future requests

    Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(false); //Set current user to {} which will set isAuthenticated to false

    dispatch(setCurrentUser({}));
  };
};

/***/ }),

/***/ "HTK2":
/*!****************************************!*\
  !*** ./src/Components/Login/Login.css ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898896
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "Npej":
/*!**********************************************!*\
  !*** ./src/Components/Register/Register.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898906
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "Q8kY":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898886
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "R6a0":
/*!*******************************************!*\
  !*** ./src/Components/Address/Address.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Address_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Address.css */ "mTEo");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _actions_addressAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/addressAction */ "A3wa");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validator */ "+QwO");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_9__);




 // import csc from "country-state-city";







function Address(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      countries = _useState2[0],
      setCountries = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      country = _useState4[0],
      setCountry = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      states = _useState6[0],
      setStates = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      state = _useState8[0],
      setState = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      cities = _useState10[0],
      setCities = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState11, 2),
      city = _useState12[0],
      setCity = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState13, 2),
      phone = _useState14[0],
      setMobile = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState15, 2),
      area = _useState16[0],
      setArea = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState17, 2),
      landmark = _useState18[0],
      setLandMark = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState19, 2),
      errors = _useState20[0],
      setErrors = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState21, 2),
      csc = _useState22[0],
      setCSC = _useState22[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$import, lists, csccountries;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! country-state-city */ "xjlO", 7));

          case 2:
            _yield$import = _context.sent;
            lists = _yield$import.default;
            _context.next = 6;
            return lists.getAllCountries();

          case 6:
            csccountries = _context.sent;
            setCountries(csccountries);
            setCSC(lists);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var handleCountryChange = function handleCountryChange(e) {
    console.log("CSC----", csc);
    var countryId = e.target.selectedOptions[0].id;
    var statesOfCountry = csc.getStatesOfCountry(countryId);
    setCountry(e.target.value);
    setStates(statesOfCountry);
  };

  var handleStateChange = function handleStateChange(e) {
    var stateId = e.target.selectedOptions[0].id;
    var citiesOfState = csc.getCitiesOfState(stateId);
    setState(e.target.value);
    setCities(citiesOfState);
  }; //function to save the address


  var saveAddress = function saveAddress(e) {
    e.preventDefault();
    var tempErrors = {};

    if (validator__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(country)) {
      tempErrors.country = "Please select a country";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(state)) {
      tempErrors.state = "Please select a state";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(city)) {
      tempErrors.city = "Please select a city";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(phone)) {
      tempErrors.phone = "Please enter mobile number";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(area)) {
      tempErrors.area = "Please enter an area";
    }

    if (Object.keys(tempErrors).length === 0) {
      var sendObj = {
        user: props.auth.user.id,
        country: country,
        state: state,
        city: city,
        phone: phone,
        area: area,
        landmark: landmark
      };
      props.addAddress(sendObj, props.history);
    } else {
      setErrors(tempErrors);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, "Add a new address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Or pick up your packages at your convenience from our self-service locations.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: "address_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__countries"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "countries"
  }, "Country/Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    name: "countries",
    id: "countries",
    onChange: handleCountryChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: "h1",
    value: "",
    id: "first"
  }), countries.map(function (countryDetails) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: countryDetails.name + "h1",
      value: countryDetails.name,
      id: countryDetails.id
    }, countryDetails.name);
  })), errors.country && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "address__validationError"
  }, errors.country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "state"
  }, "State / Province / Region"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    name: "state",
    id: "state",
    onChange: handleStateChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: "h1",
    value: "",
    id: "first"
  }), states.map(function (stateDetails) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: stateDetails.name + "h1",
      value: stateDetails.name,
      id: stateDetails.id
    }, stateDetails.name);
  })), errors.state && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "address__validationError"
  }, errors.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__city"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "city"
  }, "Town/City"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    name: "city",
    id: "city",
    onChange: function onChange(e) {
      return setCity(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    key: "h1",
    value: "",
    id: "first"
  }), cities.map(function (cityDetails) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: cityDetails.name + "h1",
      value: cityDetails.name,
      id: cityDetails.id
    }, cityDetails.name);
  })), errors.city && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "address__validationError"
  }, errors.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__mobileNumber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "state"
  }, "Mobile number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    onChange: function onChange(e) {
      return setMobile(e.target.value);
    }
  }), errors.phone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "address__validationError"
  }, errors.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "state"
  }, "Area, Colony, Street, Sector, Village"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setArea(e.target.value);
    }
  }), errors.area && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "address__validationError"
  }, errors.area)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "address__common address__landMark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    for: "state"
  }, "Landmark"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setLandMark(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "common__address address__saveButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    onClick: saveAddress
  }, "Add Address"))));
}

Address.propTypes = {
  addAddress: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    address: state.address,
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  addAddress: _actions_addressAction__WEBPACK_IMPORTED_MODULE_7__["addAddress"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Address)));

/***/ }),

/***/ "ROKH":
/*!*****************************************!*\
  !*** ./src/Components/Orders/Orders.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Orders_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Orders.css */ "CCu3");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Order/Order */ "zJGt");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _actions_paymentActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/paymentActions */ "ZRfN");








function Orders() {
  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue, 2),
      _useStateValue2$ = _useStateValue2[0],
      basket = _useStateValue2$.basket,
      user = _useStateValue2$.user,
      dispatch = _useStateValue2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      orders = _useState2[0],
      setOrders = _useState2[1]; //redux setup


  var userData = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth;
  });
  var orderData = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.orders;
  });
  var dispatchProps = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userData.user.id) {
      dispatchProps(Object(_actions_paymentActions__WEBPACK_IMPORTED_MODULE_6__["getOrders"])(userData.user.id));
    } else {
      setOrders([]);
    }
  }, [userData.user]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setOrders(orderData.orders);
  }, [orderData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "orders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Your Orders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "orders__order"
  }, (orders === null || orders === void 0 ? void 0 : orders.length) > 0 && (orders === null || orders === void 0 ? void 0 : orders.map(function (order) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Order_Order__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: order._id,
      order: order
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Orders);

/***/ }),

/***/ "Rcb7":
/*!***************************************!*\
  !*** ./src/reducers/ordersReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validations_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validations/isEmpty */ "5Aq+");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  orders: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_ORDERS":
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "YDsE":
/*!***************************************!*\
  !*** ./src/Components/Modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionsModal; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "DfQ9");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "EiL5");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "Uys+");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ "JNCH");






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});
function TransitionsModal(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),
      isChanged = _React$useState4[0],
      setIsChanged = _React$useState4[1];

  var handleClose = function handleClose() {
    setOpen(false);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setIsChanged(props.isParentChanged);
  }, [props.isParentChanged]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-labelledby": "transition-modal-title",
    "aria-describedby": "transition-modal-description",
    className: classes.modal,
    open: props.open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"],
    BackdropProps: {
      timeout: 500
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], {
    in: props.open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.paper
  }, props.children))));
}

/***/ }),

/***/ "ZRfN":
/*!***************************************!*\
  !*** ./src/actions/paymentActions.js ***!
  \***************************************/
/*! exports provided: createOrders, getOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrders", function() { return createOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //Register user

var createOrders = function createOrders(ordersDetails, history) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/payments/createOrders", ordersDetails).then(function (res) {
        dispatch({
          type: "SET_ORDERS",
          paylaod: res.data
        });
        history.replace("/orders");
        dispatch({
          type: "EMPTY_BASKET"
        });
      }).catch(function (error) {
        console.log("error", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data
        });
      });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data
      });
    }
  };
};
var getOrders = function getOrders(userId) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/getOrders", {
        params: {
          userId: userId
        }
      }).then(function (res) {
        dispatch({
          type: "SET_ORDERS",
          payload: res.data
        });
      }).catch(function (error) {
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data
        });
      });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data
      });
    }
  };
};

/***/ }),

/***/ "aoUW":
/*!**************************************!*\
  !*** ./src/reducers/authReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validations_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validations/isEmpty */ "5Aq+");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  isAuthenticated: false,
  user: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_CURRENT_USER":
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthenticated: !Object(_validations_isEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(action.payload),
        user: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "c5OU":
/*!*********************************************!*\
  !*** ./src/Components/Register/Register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/authActions */ "G/D/");
/* harmony import */ var _validations_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validations/isEmpty */ "5Aq+");
/* harmony import */ var _Register_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Register.css */ "Npej");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! validator */ "+QwO");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_8__);











function Register(props) {
  //usestate hooks from the react
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      mobile = _useState4[0],
      setMobile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      password = _useState8[0],
      setPassword = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      isSeller = _useState10[0],
      setSeller = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var tempErrors = {};

    if (validator__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(name)) {
      tempErrors.name = "Please enter name";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(mobile) || !validator__WEBPACK_IMPORTED_MODULE_8___default.a.isInt(mobile)) {
      tempErrors.mobile = "Please enter mobile";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(email) || !validator__WEBPACK_IMPORTED_MODULE_8___default.a.isEmail(email)) {
      tempErrors.email = "Please enter email";
    }

    if (Object(_validations_isEmpty__WEBPACK_IMPORTED_MODULE_6__["default"])(password)) {
      tempErrors.password = "Please enter password";
    }

    if (password && password.split("").length < 6) {
      tempErrors.password = "Password length should be greater than 6";
    }

    if (Object.keys(tempErrors).length === 0) {
      var obj = {
        name: name,
        email: email,
        password: password,
        phone: parseInt(mobile),
        isSeller: isSeller
      };
      props.registerUser(obj, props.history);
    } else {
      setErrors(tempErrors);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "login__logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    alt: "login_logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register__box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " register_format register__name_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "",
    className: "reigster__name_label"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: "register__name_input"
  }), errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "register__validationErrors"
  }, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register_format register__mobile_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "",
    className: "register__mobile_label"
  }, "Mobile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: mobile,
    type: "number",
    onChange: function onChange(e) {
      return setMobile(e.target.value);
    },
    className: "register__mobile_input"
  }), errors.mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "register__validationErrors"
  }, errors.mobile)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register_format register__email_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "",
    className: "register__email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: email,
    type: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "register_formatregister__email_input"
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "register__validationErrors"
  }, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register_format register__password_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "",
    className: "register__password_label"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    value: password,
    type: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "register__password_input"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Password must be greater than 6 digit"), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "register__validationErrors"
  }, errors.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register__seller"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    value: isSeller,
    onClick: function onClick(e) {
      setSeller(e.target.checked);
    },
    className: "register__checkbox"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Register as a seller")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register_format register__confirmation_box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    onClick: onSubmit,
    className: "confirmation__button"
  }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "registerMessage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "register_format register__already"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Already have an account?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login"
  }, "Sign in \u27A4")))));
}

Register.propTypes = {
  registerUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  registerUser: _actions_authActions__WEBPACK_IMPORTED_MODULE_5__["registerUser"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Register)));

/***/ }),

/***/ "cokx":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ "aoUW");
/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorReducer */ "EVxr");
/* harmony import */ var _addressReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addressReducers */ "q+VQ");
/* harmony import */ var _ordersReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordersReducer */ "Rcb7");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  errors: _errorReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  address: _addressReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  orders: _ordersReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "d9Pj":
/*!**********************************************!*\
  !*** ./src/Components/Checkout/Checkout.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898893
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "ePCW":
/*!***********************************************!*\
  !*** ./src/Components/Cards/AdDisplayCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AdDisplayCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "addisplaycard ".concat(props.className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "addisplaycard__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "addisplaycar__content"
  }, props.type === "image" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.image,
    alt: "imagepr"
  }), props.type === "text" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.text)), props.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "addisplaycard__link"
  }, props.link));
}

/* harmony default export */ __webpack_exports__["default"] = (AdDisplayCard);

/***/ }),

/***/ "gAMg":
/*!******************************************!*\
  !*** ./src/Components/Header/Header.css ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898915
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "j9nx":
/*!***************************************!*\
  !*** ./src/Components/Login/Login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login.css */ "HTK2");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "+QwO");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authActions */ "G/D/");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "/MKj");












function Login(props) {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var signIn = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var tempErrors, loginObj;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tempErrors = {};
              e.preventDefault();

              if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(email) || !validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmail(email)) {
                tempErrors.email = "Please enter valid email";
              }

              if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(password)) {
                tempErrors.password = "Please enter password";
              }

              if (!(Object.keys(tempErrors).length === 0)) {
                _context.next = 10;
                break;
              }

              loginObj = {
                email: email,
                password: password
              };
              _context.next = 8;
              return props.loginUser(loginObj, props.history);

            case 8:
              _context.next = 11;
              break;

            case 10:
              setErrors(tempErrors);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signIn(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (Object.keys(props.errors).length > 0) {
      setErrors(props.errors);
    }
  }, [props]);

  var register = function register(e) {
    e.preventDefault();
    history.push("/register");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "login__logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    alt: "login_logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "login__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "Sign-in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", null, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    }
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "login__validationErrors"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
    className: "login__validationErrors"
  }, errors.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "submit",
    onClick: signIn,
    className: "login__signInButton"
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "By signing-in you agree to the AMAZON CLONE ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#"
  }, "Conditions"), " ", "of Use & Sale. Please see our Privacy Notice, our Cookies", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#"
  }, "Notice"), " and our ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "#"
  }, "Interest-Based Ads"), " ", "Notice."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: register,
    className: "login__registerButton"
  }, "Create your Amazon account")));
}

Login.propTypes = {
  loginUser: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  loginUser: _actions_authActions__WEBPACK_IMPORTED_MODULE_7__["loginUser"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Login)));

/***/ }),

/***/ "kb4p":
/*!********************************************!*\
  !*** ./src/Components/Product/Product.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898927
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "lM1r":
/*!*******************************************************!*\
  !*** ./src/Components/CreateProduct/CreateProduct.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Modal */ "YDsE");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _CreateProduct_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateProduct.css */ "zatV");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ "+QwO");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_sellerActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/sellerActions */ "mHLx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "55Ip");










function CreateProduct(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      price = _useState4[0],
      setPrice = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      rating = _useState6[0],
      setRating = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      storeName = _useState8[0],
      setStoreName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      errors = _useState10[0],
      setErrors = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      imageFiles = _useState12[0],
      setImageFiles = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState13, 2),
      sentImageFiles = _useState14[0],
      setSentImageFiles = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState15, 2),
      limit = _useState16[0],
      setLimit = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState17, 2),
      showPreview = _useState18[0],
      setShowPreview = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.open),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState19, 2),
      openModal = _useState20[0],
      setOpenModal = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState21, 2),
      isParentChanged = _useState22[0],
      setIsParentChanged = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState24 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState23, 2),
      keywords = _useState24[0],
      setKeywords = _useState24[1]; //Get the user detail from the store


  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.auth.user;
  });
  var dispatchProps = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOpenModal(props.open);
  }, [props.open]);

  var handleCreateProduct = function handleCreateProduct(e) {
    var tempErrors = {};
    e.preventDefault();

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(title)) {
      tempErrors.title = "Please enter a title";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(price)) {
      tempErrors.price = "Please enter a price";
    }

    if (validator__WEBPACK_IMPORTED_MODULE_6___default.a.isEmpty(storeName)) {
      tempErrors.storeName = "Please enter store name";
    }

    if (imageFiles.length === 0) {
      tempErrors.imageFiles = "Please select a product image";
    }

    if (Object.keys(tempErrors).length === 0) {
      var fd = new FormData();
      fd.append("title", title);
      fd.append("price", price);
      fd.append("storeName", storeName);
      fd.append("seller", user.id);
      fd.append("keywords", keywords);
      fd.append("rating", rating); //Server side don't accept array of formdata so the loop is calling

      for (var i = 0; i < sentImageFiles.length; i++) {
        fd.append("image", sentImageFiles[i][0]);
      }

      dispatchProps(Object(_actions_sellerActions__WEBPACK_IMPORTED_MODULE_7__["createProduct"])(fd, props.history));
    } else {
      setErrors(tempErrors);
    }
  };

  var cancelModal = function cancelModal(e) {
    e.preventDefault();
    e.stopPropagation();
    props.setModalState(false);
  }; //handle image changes


  var _handleImageChange = function _handleImageChange(e) {
    var dataFile = [];
    var rawFiles = [];
    var files = e.target.files;
    var length = files.length;

    if (length < 6) {
      rawFiles.push(files);
      return Promise.all([].map.call(files, function (file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();

          reader.onloadend = function () {
            resolve({
              result: reader.result,
              file: file
            });
          };

          reader.readAsDataURL(file);
        });
      })).then(function (results) {
        results.forEach(function (result) {
          dataFile.push({
            file: result.file,
            imagePreviewUrl: result.result
          });

          if (length === dataFile.length) {
            var newImages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(imageFiles), dataFile);
            var newSentImages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sentImageFiles), [files]);
            setSentImageFiles(newSentImages);
            setImageFiles(newImages);
          }
        });
      });
    } else {
      setLimit(true);
    }
  };

  var removeImages = function removeImages(index) {
    imageFiles.splice(index, 1);
    sentImageFiles.splice(index, 1);
    setImageFiles(imageFiles);
    setSentImageFiles(sentImageFiles);
    setIsParentChanged(!isParentChanged);
  };

  var $imagePreview;

  if (imageFiles.length > 0) {
    $imagePreview = imageFiles.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: index,
        className: "createProduct__previewImage"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "button",
        className: "createProduct__close",
        "aria-label": "Close",
        onClick: function onClick() {
          return removeImages(index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        alt: "",
        className: "img-thumbnail previewSize",
        src: image.imagePreviewUrl
      }));
    });
  } else {
    if (limit) {
      $imagePreview = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "red"
      }, "Image limit exceeds from 6");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: openModal,
    isParentChanged: isParentChanged
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: "header__logo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Add Product to your store ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: "",
    className: "createProduct__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__form_common"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enter Product title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: title,
    accept: "image/png, image/jpeg",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), errors.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__form_common"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enter Product Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "number",
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    }
  }), errors.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__form_common"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enter Product Keywords"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: keywords,
    onChange: function onChange(e) {
      setKeywords(e.target.value);
    }
  }), errors.keywords && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.keywords)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__form_common"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enter initial Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "number",
    value: rating,
    onChange: function onChange(e) {
      return setRating(e.target.value);
    }
  }), errors.rating && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.rating)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__form_common"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enter Store Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    value: storeName,
    onChange: function onChange(e) {
      return setStoreName(e.target.value);
    }
  }), errors.storeName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.storeName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: " createProduct__form_common createProduct__images"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Choose Product Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    name: "",
    multiple: "multiple",
    id: "product_images",
    onChange: _handleImageChange
  })), showPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "imgPreview"
  }, $imagePreview) : null, errors.imageFiles && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "createProduct__validationErrors"
  }, errors.imageFiles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "createProduct__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "createProduct__create",
    onClick: handleCreateProduct
  }, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "createProduct__cancel",
    onClick: function onClick(e) {
      return cancelModal(e);
    }
  }, "Cancel")));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(CreateProduct));

/***/ }),

/***/ "mHLx":
/*!**************************************!*\
  !*** ./src/actions/sellerActions.js ***!
  \**************************************/
/*! exports provided: createProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //Register user

var createProduct = function createProduct(productDetail, history) {
  return function (dispatch) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/products/create", productDetail).then(function (res) {
        history.push("/");
      }).catch(function (error) {
        console.log("error", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data
        });
      });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data
      });
    }
  };
};

/***/ }),

/***/ "mTEo":
/*!********************************************!*\
  !*** ./src/Components/Address/Address.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898909
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "nkAR":
/*!*********************************************!*\
  !*** ./src/Components/Carousel/Carousel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "DfQ9");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ "7VIw");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views-utils */ "7wYf");
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__);





var AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_4__["autoPlay"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a);
var tutorialSteps = [{
  label: "Prime",
  imgPath: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
}, {
  label: "Clothes",
  imgPath: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/GWherotator/GW_pc/8._CB414093065_.jpg"
}, {
  label: "Prime",
  imgPath: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
}, {
  label: "Electronics",
  imgPath: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
}, {
  label: "Christmas",
  imgPath: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Christmas20/GW/new/Christmas-GW-Hero-PC1x._CB413564947_.jpg"
}];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    header: {
      display: "flex",
      alignItems: "center",
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default
    },
    img: {
      display: "block",
      overflow: "hidden",
      width: "100%"
    }
  };
});

function Carousel() {
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var maxSteps = tutorialSteps.length;

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleStepChange = function handleStepChange(step) {
    setActiveStep(step);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AutoPlaySwipeableViews, {
    axis: theme.direction === "rtl" ? "x-reverse" : "x",
    index: activeStep,
    onChangeIndex: handleStepChange,
    enableMouseEvents: true
  }, tutorialSteps.map(function (step, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: step.imgPath
    }, Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "home__image",
      src: step.imgPath,
      alt: step.label
    }) : null);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898882
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "q+VQ":
/*!*****************************************!*\
  !*** ./src/reducers/addressReducers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validations_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validations/isEmpty */ "5Aq+");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  address: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_ADDRESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        address: action.payload
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "qgLD":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! exports provided: initialState, getBasketTotal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasketTotal", function() { return getBasketTotal; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  basket: [],
  user: null
}; //Selector

var getBasketTotal = function getBasketTotal(basket) {
  return basket === null || basket === void 0 ? void 0 : basket.reduce(function (amount, item) {
    return parseFloat(item.price) + amount;
  }, 0);
};

var reducer = function reducer(state, action) {
  console.log("Action", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return _objectSpread(_objectSpread({}, state), {}, {
        basket: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.basket), [action.item])
      });

    case "REMOVE_FROM_BASKET":
      console.log("action,id", action.id, "state.basket", state.basket);
      var index = state.basket.findIndex(function (basketItem) {
        return basketItem.id === action.id;
      });

      var newBasket = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state.basket);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove the product with (id:".concat(action.id, ")"));
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        basket: newBasket
      });

    case "EMPTY_BASKET":
      return _objectSpread(_objectSpread({}, state), {}, {
        basket: []
      });

    case "SET_USER":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.user
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "sdPo":
/*!************************************************!*\
  !*** ./src/Components/Cards/FourImageCards.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.css */ "84ff");



function FourImageCards(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards4image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards4image__images"
  }, props.data.length > 0 && props.data.map(function (dt, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card4image__sections",
      key: "cards" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: dt.link,
      alt: "image__cl"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, dt.title));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (FourImageCards);

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "p2bk");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "vpQ9");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "EQnm");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "qgLD");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StateProvider */ "4kz9");







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StateProvider__WEBPACK_IMPORTED_MODULE_6__["StateProvider"], {
  initialState: _reducer__WEBPACK_IMPORTED_MODULE_5__["initialState"],
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();
/* *************************************************** */

/* Service worker configuration  */

/* *************************************************** */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(function (registration) {
      console.log("SW registered", registration);
    }).catch(function (registrationError) {
      console.log("Service worker registration failed:", registrationError);
    });
  });
}

/***/ }),

/***/ "v8u0":
/*!*******************************************!*\
  !*** ./src/Components/Product/Product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.css */ "kb4p");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");






function Product(_ref) {
  var id = _ref.id,
      title = _ref.title,
      image = _ref.image,
      price = _ref.price,
      rating = _ref.rating;

  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_3__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  var addToBasket = function addToBasket() {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "product"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "product__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, title.length > 100 ? title.slice(0, 100) + "..." : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "product__price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "product__rating"
  }, Array(rating).fill().map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: i + "rate",
      className: "product__star_gold"
    }, "\uD83C\uDF1F");
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/product_preview/".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    alt: "Amazon_src"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: addToBasket
  }, "Add to Basket"));
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "vpQ9":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "ZDp4");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "Q8kY");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Header */ "x6mE");
/* harmony import */ var _Components_Home_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Home/Home */ "Aayi");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _Components_Checkout_Checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Checkout/Checkout */ "66C7");
/* harmony import */ var _Components_Login_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Login/Login */ "j9nx");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StateProvider */ "4kz9");
/* harmony import */ var _Components_Payment_Payment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Payment/Payment */ "7ABn");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stripe/stripe-js */ "v4r+");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @stripe/react-stripe-js */ "eWwy");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_Orders_Orders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Orders/Orders */ "ROKH");
/* harmony import */ var _Components_Register_Register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Register/Register */ "c5OU");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store */ "wNa6");
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/setAuthToken */ "ypce");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions/authActions */ "G/D/");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _Components_Address_Address__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/Address/Address */ "R6a0");
/* harmony import */ var _Components_ProductPreview_ProductPreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/ProductPreview/ProductPreview */ "AByd");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_22__);























var promise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__["loadStripe"])("pk_test_51HxeDPCFRg2ffIwMZSlrnGVUww5BhkvT4Y9mknBi45BqugZySPdBLX557tKk6wpbpS2TBFDgjLd9CmI4mX0AmhMk00GlGDiKY3");

function App() {
  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_9__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useStateValue, 2);

  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue2[0]);

  var dispatch = _useStateValue2[1];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    /* Setting the socket io app */
    var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_22__["io"])("http://localhost:7000/api/socket", {
      transports: ["websocket", "polling", "flashsocket"]
    });
    socket.on("connect", function () {
      console.log("CONNECTION SOCK", socket.id); // x8WIv7-mJelg7on_ALbx
    });
    socket.on("productChange", function (productData) {
      console.log("Product Data----------XXXXXXfff--------->", productData);
    }); //check the authetication of the user

    if (localStorage.jwtToken) {
      Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_17__["default"])(localStorage.jwtToken); //Decode token and get user info and exp

      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_19__["default"])(localStorage.jwtToken); //set user and isAuthenticated

      _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_18__["setCurrentUser"])(decoded)); //dispatch to the react context to share user details in full form

      var userDetails = {
        avatar: decoded.avatar,
        id: decoded.id,
        name: decoded.name
      };
      dispatch({
        type: "SET_USER",
        user: userDetails
      }); //check if the token expired

      var currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        //logout user
        _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch(Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_18__["logoutUser"])()); //Redirect to login

        window.location.href = "/";
      }
    }
  }, []);
  return (
    /*#__PURE__*/
    //BEM convention
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_16__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "app"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/login"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Login_Login__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/register"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Register_Register__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/address"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Address_Address__WEBPACK_IMPORTED_MODULE_20__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/product_preview/:id"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_ProductPreview_ProductPreview__WEBPACK_IMPORTED_MODULE_21__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/checkout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Checkout_Checkout__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/payment"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_12__["Elements"], {
      stripe: promise
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Payment_Payment__WEBPACK_IMPORTED_MODULE_10__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/orders"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Orders_Orders__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
      path: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Home_Home__WEBPACK_IMPORTED_MODULE_5__["default"], null))))))
  );
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "wNa6":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "cokx");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "sINF");



var initialState = {};
var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "x6mE":
/*!****************************************!*\
  !*** ./src/Components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Search */ "bSwy");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingBasket */ "XoTF");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.css */ "gAMg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _CreateProduct_CreateProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../CreateProduct/CreateProduct */ "lM1r");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);














function Header(props) {
  var _userStore$user;

  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_8__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  var userStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.auth;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      autoComplete = _useState4[0],
      setAutoComplete = _useState4[1];

  var isChanged = false; //provide event listenere

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    document.addEventListener("click", function () {
      if (document.getElementById("autocomplete") !== null) {
        document.getElementById("autocomplete").style.display = "none";
      }
    });
    return function () {
      if (document.getElementById("autocomplete") !== null) {
        document.removeEventListener("click", function () {
          document.getElementById("autocomplete").style.display = "none";
        });
      }
    };
  }, []);

  var handleAuthentication = function handleAuthentication() {
    if (userStore.user.id) {
      history.push("/login");
    }
  };

  var setModalState = function setModalState(response) {
    isChanged = false;
    setOpen(response);
  };

  var handleModalOpen = function handleModalOpen(e) {
    isChanged = !isChanged;
    e.preventDefault();
    setOpen(true);
  }; //Handling the seraching of the product and listing in the list style


  var handleSearchProduct = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("/api/products/search", {
                params: {
                  text: e.target.value
                }
              });

            case 2:
              response = _context.sent;
              console.log("HEADER &&&$$$$ IS THE RESPONSE------------------------------------------->", response);

              if (response.data.length > 0) {
                document.getElementById("autocomplete").style.display = "block";
                setAutoComplete(response.data);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearchProduct(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //Handling the auto complete


  var handleAutoComplete = function handleAutoComplete(e) {
    var currentId = e.target.id;
    props.history.push("/product_preview/".concat(currentId));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "header__logo",
    src: "http://pngimg.com/uploads/amazon/amazon_PNG11.png",
    alt: "logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "header__searchInput",
    onChange: handleSearchProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    id: "autocomplete"
  }, autoComplete.length > 0 && autoComplete.map(function (sug) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: sug._id,
      id: sug._id,
      onClick: handleAutoComplete
    }, sug.keywords);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "header__searchIcon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    onClick: handleAuthentication,
    className: "header__option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineOne"
  }, "Hello ", !userStore.user.id ? "Guest" : userStore === null || userStore === void 0 ? void 0 : (_userStore$user = userStore.user) === null || _userStore$user === void 0 ? void 0 : _userStore$user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineTwo"
  }, userStore.user.id ? "Sign Out" : "Sign In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/orders"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineOne"
  }, "Returns"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineTwo"
  }, "& Orders"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineOne"
  }, "Your"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineTwo"
  }, "Prime")), userStore.user.isSeller && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__option"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineOne"
  }, "As Seller"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineTwo header__openModal",
    onClick: function onClick(e) {
      return handleModalOpen(e);
    }
  }, "Add Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CreateProduct_CreateProduct__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isChanged: isChanged,
    open: open,
    setModalState: setModalState
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/checkout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "header__optionBasket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_5___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "header__optionLineTwo header__basketCount"
  }, basket.length)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Header));

/***/ }),

/***/ "xZAK":
/*!********************************************!*\
  !*** ./src/Components/Payment/Payment.css ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898899
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "y40x":
/*!**********************************************!*\
  !*** ./src/Components/Subtotal/Subtotal.css ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200898958
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "yZPo":
/*!*********************************************!*\
  !*** ./src/Components/Subtotal/Subtotal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-format */ "Lxlj");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Subtotal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subtotal.css */ "y40x");
/* harmony import */ var _StateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../StateProvider */ "4kz9");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer */ "qgLD");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "55Ip");








function Subtotal() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();

  var _useStateValue = Object(_StateProvider__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])(),
      _useStateValue2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useStateValue, 2),
      basket = _useStateValue2[0].basket,
      dispatch = _useStateValue2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "subtotal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_2___default.a, {
    renderText: function renderText(value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Subtotal (", basket === null || basket === void 0 ? void 0 : basket.length, " items) : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "".concat(value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "subtotal__gift"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox"
      }), "This order contains a gift"));
    },
    decimalScale: 2,
    value: Object(_reducer__WEBPACK_IMPORTED_MODULE_5__["getBasketTotal"])(basket),
    displayType: "text",
    thousandSeperator: true,
    prefix: "$"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick(e) {
      return history.push("/payment");
    }
  }, "Proceed to Checkout"));
}

/* harmony default export */ __webpack_exports__["default"] = (Subtotal);

/***/ }),

/***/ "ypce":
/*!***********************************!*\
  !*** ./src/utils/setAuthToken.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  if (token) {
    //Apply token to every request
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = token;
  } else {
    //delete the token from the auth headers
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ "zJGt":
/*!***************************************!*\
  !*** ./src/Components/Order/Order.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.css */ "9adA");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckoutProduct/CheckoutProduct */ "9tt3");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-format */ "Lxlj");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_4__);






function Order(_ref) {
  var _order$orders;

  var order = _ref.order;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(order.created).format("MMMM Do YYYY, h:mma")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Delivery"), ": ", order.addressId.area, "(", order.addressId.phone, "),", order.addressId.city, ",", order.addressId.state, ",", order.addressId.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "order__id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, order.paymentId)), (_order$orders = order.orders) === null || _order$orders === void 0 ? void 0 : _order$orders.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckoutProduct_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating: item.rating,
      hidebutton: true
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_currency_format__WEBPACK_IMPORTED_MODULE_4___default.a, {
    renderText: function renderText(value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Order Total : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "".concat(value))));
    },
    decimalScale: 2,
    value: order.paymentAmount,
    displayType: "text",
    thousandSeperator: true,
    prefix: "$"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "zatV":
/*!********************************************************!*\
  !*** ./src/Components/CreateProduct/CreateProduct.css ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1613200899327
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "odzT")(module.i, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},[["tjUo","runtime","vendors","reactdom"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DaGVja291dFByb2R1Y3QvQ2hlY2tvdXRQcm9kdWN0LmNzcz81MTQ5Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RQcmV2aWV3L1Byb2R1Y3RQcmV2aWV3LmNzcz8zM2JmIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YWxpZGF0aW9ucy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1BheW1lbnQvUGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL3N0eWxlLmNzcz8xMzU1Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NhcmRzL0NhcmRzLmNzcz9iYWRiIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL09yZGVyL09yZGVyLmNzcz8wYjQ1Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdC9DaGVja291dFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYWRkcmVzc0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Qcm9kdWN0UHJldmlldy9Qcm9kdWN0UHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ib21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3JkZXJzL09yZGVycy5jc3M/YmM2NSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3J0V2ViVml0YWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTG9naW4vTG9naW4uY3NzPzY3YzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUmVnaXN0ZXIvUmVnaXN0ZXIuY3NzPzZlNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5jc3M/OWI3MiIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BZGRyZXNzL0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3JkZXJzL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvb3JkZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGF5bWVudEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2F1dGhSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9SZWdpc3Rlci9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2hlY2tvdXQvQ2hlY2tvdXQuY3NzPzBhMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2FyZHMvQWREaXNwbGF5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcz84YWM5Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5jc3M/OTcyMyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DcmVhdGVQcm9kdWN0L0NyZWF0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2VsbGVyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BZGRyZXNzL0FkZHJlc3MuY3NzPzBlYTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9hZGRyZXNzUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2FyZHMvRm91ckltYWdlQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUGF5bWVudC9QYXltZW50LmNzcz80ZmIzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1N1YnRvdGFsL1N1YnRvdGFsLmNzcz81NTllIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1N1YnRvdGFsL1N1YnRvdGFsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXRBdXRoVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvT3JkZXIvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdC9DcmVhdGVQcm9kdWN0LmNzcz9lNzYxIl0sIm5hbWVzIjpbIlN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTdGF0ZVByb3ZpZGVyIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsInVzZVN0YXRlVmFsdWUiLCJ1c2VDb250ZXh0IiwiaXNFbXB0eSIsInZhbHVlIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRyaW0iLCJDaGVja291dCIsImJhc2tldCIsInVzZXIiLCJkaXNwYXRjaCIsIm5hbWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJhY3Rpb25zQ29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwicmVzZXRDb250YWluZXIiLCJwYWRkaW5nIiwiUGF5bWVudCIsInByb3BzIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN1Y2NlZWRlZCIsInNldFN1Y2NlZWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwiY2xpZW50U2VjcmV0Iiwic2V0Q2xpZW50U2VjcmV0IiwidXNlQWRkcmVzcyIsInNldFVzZXJBZGRyZXNzIiwic2VsZWN0ZWRBZGRyZXNzIiwic2V0U2VsZWN0ZWRBZGRyZXNzIiwidXNlclN0b3JlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJhZGRyZXNzU3RvcmUiLCJhZGRyZXNzIiwiZGlzcGF0Y2hQcm9wcyIsInVzZURpc3BhdGNoIiwiY2xhc3NlcyIsIlJlYWN0IiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJzdGVwcyIsImdldFN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwidXNlRWZmZWN0IiwiZ2V0QWRkcmVzcyIsImdldENsaWVudFNlY3JldCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwicGFyc2VJbnQiLCJnZXRCYXNrZXRUb3RhbCIsInJlc3BvbnNlIiwiZGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm1DYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInRoZW4iLCJwYXltZW50SW50ZW50Iiwib3JkZXJJbmZyb21hdGlvbiIsInBheW1lbnRJZCIsInBheW1lbnRBbW91bnQiLCJvcmRlcnMiLCJhZGRyZXNzSWQiLCJjcmVhdGVkIiwiRGF0ZSIsImNyZWF0ZU9yZGVycyIsInBheWxvYWQiLCJoYW5kbGVDaGFuZ2UiLCJlbXB0eSIsIm1lc3NhZ2UiLCJzZWxlY3RBZGRyZXNzQ2FyZCIsInRhcmdldCIsImdldFN0ZXBDb250ZW50Iiwic3RlcCIsInVzZXJBZGQiLCJfaWQiLCJhcmVhIiwibGFuZG1hcmsiLCJjaXR5IiwiY291bnRyeSIsInBob25lIiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhSb3V0ZXIiLCJDaGVja291dFByb2R1Y3QiLCJoaWRlYnV0dG9uIiwicmVtb3ZlRnJvbUJhc2tldCIsInR5cGUiLCJBcnJheSIsImZpbGwiLCJfIiwiaSIsImFkZEFkZHJlc3MiLCJhZGRyZXNzRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdCIsInJlcyIsInBheWxhb2QiLCJwdXNoIiwiY2F0Y2giLCJ1c2VySWQiLCJnZXQiLCJwYXJhbXMiLCJQcm9kdWN0UHJldmlldyIsImNoYW5nZUltYWdlIiwic2V0Q2hhbmdlSW1hZ2UiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImFkZFRvQmFza2V0Iiwic3JjIiwibWF0Y2giLCJoYW5kbGVJbWFnZUNoYW5nZSIsIm1wIiwic21hbGxJbWFnZSIsImFsdCIsImhlaWdodCIsImxhcmdlSW1hZ2UiLCJ4Iiwic3RvcmVOYW1lIiwic2VsbGVyIiwiZm91ckNhcmREYXRhIiwiZmlyc3RDYXJkIiwibGluayIsInNlY29uZENhcmQiLCJ0aGlyZENhcmQiLCJhZERpc3BsYXlEYXRhIiwiY2xhc3NOYW1lIiwidGV4dCIsIkhvbWUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwicmVwb3J0V2ViVml0YWxzIiwib25QZXJmRW50cnkiLCJGdW5jdGlvbiIsImdldENMUyIsImdldEZJRCIsImdldEZDUCIsImdldExDUCIsImdldFRURkIiLCJhY3Rpb24iLCJyZWdpc3RlclVzZXIiLCJ1c2VyRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJsb2dpblVzZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRBdXRoVG9rZW4iLCJkZWNvZGVkIiwiand0X2RlY29kZSIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwiaXNTZWxsZXIiLCJzZXRDdXJyZW50VXNlciIsImVyciIsImxvZ291dFVzZXIiLCJyZW1vdmVJdGVtIiwiQWRkcmVzcyIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsInNldENvdW50cnkiLCJzdGF0ZXMiLCJzZXRTdGF0ZXMiLCJzZXRTdGF0ZSIsImNpdGllcyIsInNldENpdGllcyIsInNldENpdHkiLCJzZXRNb2JpbGUiLCJzZXRBcmVhIiwic2V0TGFuZE1hcmsiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjc2MiLCJzZXRDU0MiLCJsaXN0cyIsImRlZmF1bHQiLCJnZXRBbGxDb3VudHJpZXMiLCJjc2Njb3VudHJpZXMiLCJoYW5kbGVDb3VudHJ5Q2hhbmdlIiwiY291bnRyeUlkIiwic2VsZWN0ZWRPcHRpb25zIiwic3RhdGVzT2ZDb3VudHJ5IiwiZ2V0U3RhdGVzT2ZDb3VudHJ5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0ZUlkIiwiY2l0aWVzT2ZTdGF0ZSIsImdldENpdGllc09mU3RhdGUiLCJzYXZlQWRkcmVzcyIsInRlbXBFcnJvcnMiLCJ2YWxpZGF0b3IiLCJzZW5kT2JqIiwiY291bnRyeURldGFpbHMiLCJzdGF0ZURldGFpbHMiLCJjaXR5RGV0YWlscyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJPcmRlcnMiLCJzZXRPcmRlcnMiLCJvcmRlckRhdGEiLCJnZXRPcmRlcnMiLCJvcmRlciIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiVHJhbnNpdGlvbnNNb2RhbCIsIm9wZW4iLCJzZXRPcGVuIiwiaXNDaGFuZ2VkIiwic2V0SXNDaGFuZ2VkIiwiaGFuZGxlQ2xvc2UiLCJpc1BhcmVudENoYW5nZWQiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJvcmRlcnNEZXRhaWxzIiwicmVwbGFjZSIsImlzQXV0aGVudGljYXRlZCIsIlJlZ2lzdGVyIiwic2V0TmFtZSIsIm1vYmlsZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0U2VsbGVyIiwib25TdWJtaXQiLCJpc0ludCIsImlzRW1haWwiLCJzcGxpdCIsIm9iaiIsImNoZWNrZWQiLCJvYmplY3QiLCJjb21iaW5lUmVkdWNlcnMiLCJhdXRoUmVkdWNlcnMiLCJlcnJvclJlZHVjZXJzIiwiYWRkcmVzc1JlZHVjZXJzIiwib3JkZXJzUmVkdWNlcnMiLCJBZERpc3BsYXlDYXJkIiwiTG9naW4iLCJzaWduSW4iLCJsb2dpbk9iaiIsInJlZ2lzdGVyIiwiQ3JlYXRlUHJvZHVjdCIsInNldFRpdGxlIiwic2V0UHJpY2UiLCJzZXRSYXRpbmciLCJzZXRTdG9yZU5hbWUiLCJpbWFnZUZpbGVzIiwic2V0SW1hZ2VGaWxlcyIsInNlbnRJbWFnZUZpbGVzIiwic2V0U2VudEltYWdlRmlsZXMiLCJsaW1pdCIsInNldExpbWl0Iiwic2hvd1ByZXZpZXciLCJzZXRTaG93UHJldmlldyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsInNldElzUGFyZW50Q2hhbmdlZCIsImtleXdvcmRzIiwic2V0S2V5d29yZHMiLCJoYW5kbGVDcmVhdGVQcm9kdWN0IiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNyZWF0ZVByb2R1Y3QiLCJjYW5jZWxNb2RhbCIsInN0b3BQcm9wYWdhdGlvbiIsInNldE1vZGFsU3RhdGUiLCJfaGFuZGxlSW1hZ2VDaGFuZ2UiLCJkYXRhRmlsZSIsInJhd0ZpbGVzIiwiZmlsZXMiLCJhbGwiLCJjYWxsIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzdWx0cyIsImZvckVhY2giLCJpbWFnZVByZXZpZXdVcmwiLCJuZXdJbWFnZXMiLCJuZXdTZW50SW1hZ2VzIiwicmVtb3ZlSW1hZ2VzIiwic3BsaWNlIiwiJGltYWdlUHJldmlldyIsInByb2R1Y3REZXRhaWwiLCJBdXRvUGxheVN3aXBlYWJsZVZpZXdzIiwiYXV0b1BsYXkiLCJTd2lwZWFibGVWaWV3cyIsInR1dG9yaWFsU3RlcHMiLCJpbWdQYXRoIiwiZmxleEdyb3ciLCJoZWFkZXIiLCJwYWRkaW5nTGVmdCIsImltZyIsIm92ZXJmbG93IiwiQ2Fyb3VzZWwiLCJ1c2VUaGVtZSIsIm1heFN0ZXBzIiwiaGFuZGxlU3RlcENoYW5nZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJyZWR1Y2UiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsIm5ld0Jhc2tldCIsIndhcm4iLCJGb3VySW1hZ2VDYXJkcyIsImR0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbkVycm9yIiwiUHJvZHVjdCIsInNsaWNlIiwicHJvbWlzZSIsImxvYWRTdHJpcGUiLCJBcHAiLCJzb2NrZXQiLCJpbyIsInRyYW5zcG9ydHMiLCJvbiIsInByb2R1Y3REYXRhIiwiand0VG9rZW4iLCJzdG9yZSIsImN1cnJlbnRUaW1lIiwibm93IiwiZXhwIiwibG9jYXRpb24iLCJocmVmIiwibWlkZGxld2FyZSIsInRodW5rIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJIZWFkZXIiLCJhdXRvQ29tcGxldGUiLCJzZXRBdXRvQ29tcGxldGUiLCJzdHlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImhhbmRsZU1vZGFsT3BlbiIsImhhbmRsZVNlYXJjaFByb2R1Y3QiLCJoYW5kbGVBdXRvQ29tcGxldGUiLCJjdXJyZW50SWQiLCJzdWciLCJTdWJ0b3RhbCIsIkF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiT3JkZXIiLCJtb21lbnQiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxxRkFBd0ksRUFBRSxRQUFTLEdBQUcsZUFBZTtBQUNuTTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxxRkFBd0ksRUFBRSxRQUFTLEdBQUcsZUFBZTtBQUNuTTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxJQUFNQSxZQUFZLGdCQUFHQywyREFBYSxFQUFsQyxDLENBRVA7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFlBQVosUUFBWUEsWUFBWjtBQUFBLE1BQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxzQkFDM0IsMkRBQUMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QURVO0FBQUEsS0FEZDtBQVFFLGdCQUFZLEVBQUUsQ0FSaEI7QUFTRSxTQUFLLEVBQUVvUCxLQUFLLENBQUN0SixhQVRmO0FBVUUsZUFBVyxFQUFFLE1BVmY7QUFXRSxxQkFBaUIsRUFBRSxJQVhyQjtBQVlFLFVBQU0sRUFBRTtBQVpWLElBdkJGLENBREY7QUF3Q0Q7O0FBRWMrVCxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMscUZBQXdJLEVBQUUsUUFBUyxHQUFHLGVBQWU7QUFDbk07QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC4yODQzNDM0YzQzNThlN2E0MTU4NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTkwMTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4OTEyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuLy9QcmVwYXJzZSB0aGUgZGF0YUxheWVyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG4vL1dyYXAgb3VyIGFwcCBhbmQgcHJvdmlkZSB0aGUgRGF0YSBsYXllclxuZXhwb3J0IGNvbnN0IFN0YXRlUHJvdmlkZXIgPSAoeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNoaWxkcmVuIH0pID0+IChcbiAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuKTtcblxuLy9QdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIGRhdGEgbGF5ZXJcbmV4cG9ydCBjb25zdCB1c2VTdGF0ZVZhbHVlID0gKCkgPT4gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuIiwiY29uc3QgaXNFbXB0eSA9ICh2YWx1ZSkgPT5cbiAgdmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuICB2YWx1ZSA9PT0gbnVsbCB8fFxuICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApIHx8XG4gICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0NoZWNrb3V0LmNzc1wiO1xuaW1wb3J0IFN1YnRvdGFsIGZyb20gXCIuLi9TdWJ0b3RhbC9TdWJ0b3RhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCIuLi8uLi9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gXCIuLi9DaGVja291dFByb2R1Y3QvQ2hlY2tvdXRQcm9kdWN0XCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICBjb25zdCBbeyBiYXNrZXQsIHVzZXIgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xlZnRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0X19hZFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzAyL1VLX0NDTVAvVE0vT0NDX0FtYXpvbjEuX0NCNDIzNDkyNjY4Xy5qcGdcIlxuICAgICAgICAgIGFsdD1cImFkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dF9fdGl0bGVcIj5cbiAgICAgICAgICA8aDM+SGVsbG8sIHt1c2VyPy5uYW1lfTwvaDM+XG4gICAgICAgICAgPGgyPllvdXIgc2hvcHBpbmcgQmFza2V0PC9oMj5cbiAgICAgICAgICB7YmFza2V0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPENoZWNrb3V0UHJvZHVjdFxuICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hla2NvdXRfX3JpZ2h0XCI+XG4gICAgICAgIDxTdWJ0b3RhbCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vUGF5bWVudC5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiLi4vLi4vU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IENoZWNrb3V0UHJvZHVjdCBmcm9tIFwiLi4vQ2hlY2tvdXRQcm9kdWN0L0NoZWNrb3V0UHJvZHVjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IEN1cnJlbmN5Rm9ybWF0IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXRcIjtcbmltcG9ydCB7IGdldEJhc2tldFRvdGFsIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBBZGRyZXNzIGZyb20gXCIuLi9BZGRyZXNzL0FkZHJlc3NcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xuaW1wb3J0IHsgZ2V0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZHJlc3NBY3Rpb25cIjtcbmltcG9ydCB7IGNyZWF0ZU9yZGVycyB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3BheW1lbnRBY3Rpb25zXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IFN0ZXBDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29udGVudFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBhY3Rpb25zQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICByZXNldENvbnRhaW5lcjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIFBheW1lbnQocHJvcHMpIHtcbiAgLy9Vc2VEaXNwYXRjaCB3b3JrcyBhcyBwYXNzaW5nIGdldEFkZHJlc3MgdG8gY29ubmVjdFxuXG4gIGNvbnN0IFt7IGJhc2tldCwgdXNlciB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWNjZWVkZWQsIHNldFN1Y2NlZWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjbGllbnRTZWNyZXQsIHNldENsaWVudFNlY3JldF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZUFkZHJlc3MsIHNldFVzZXJBZGRyZXNzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQWRkcmVzcywgc2V0U2VsZWN0ZWRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vU3RlcHBlciBmdW5jdGlvblxuXG4gIC8vVXNlIHNlbGVjdCB3b3JrcyBhcyBtYXBTdGF0ZVRvUHJvcHNcbiAgY29uc3QgdXNlclN0b3JlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmF1dGg7XG4gIH0pO1xuICBjb25zdCBhZGRyZXNzU3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkZHJlc3MpO1xuICBjb25zdCBkaXNwYXRjaFByb3BzID0gdXNlRGlzcGF0Y2goKTtcblxuICAvLy9IRVJFIFRIRSBTVEVQUEVSU1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoMCk7XG4gIH07XG5cbiAgLy9mdW5jaXRvbiB0byBsb2FkIHRoZSBjb3VudHJ5IGxpc3QganNvbiBwcmVmZXRjaFxuXG4gIC8vZnVuY3Rpb24gdG8gZ2V0IHRoZSBhZGRyZXNzIG9mIHRoZSB1c2VyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgaWYgKHVzZXJTdG9yZS51c2VyLmlkKSB7XG4gICAgICBkaXNwYXRjaFByb3BzKGdldEFkZHJlc3ModXNlclN0b3JlLnVzZXIuaWQpKTtcbiAgICB9XG4gIH0sIFt1c2VyU3RvcmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXJBZGRyZXNzKGFkZHJlc3NTdG9yZS5hZGRyZXNzKTtcbiAgfSwgW2FkZHJlc3NTdG9yZV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vZ2VuZXJhdGVzIHRoZSBuZXcgc3RyaXBlIHNlY3JldCB3aGVuZXZlciB0aGUgYmFzZWtldCBpcyB1cGRhdGVkIHRvIHNlbmQgcmVxdWVzdCBmb3IgdXBkYXRlZCBwcmljZVxuICAgIGNvbnN0IGdldENsaWVudFNlY3JldCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IGAvYXBpL3BheW1lbnRzL2NyZWF0ZVBheW1lbnRJbnRlbnQ/dG90YWw9JHtwYXJzZUludChcbiAgICAgICAgICBnZXRCYXNrZXRUb3RhbChiYXNrZXQpICogMTAwXG4gICAgICAgICl9YCxcbiAgICAgIH0pO1xuICAgICAgc2V0Q2xpZW50U2VjcmV0KHJlc3BvbnNlLmRhdGEuY2xpZW50U2VjcmV0KTtcbiAgICB9O1xuICAgIGdldENsaWVudFNlY3JldCgpO1xuICB9LCBbYmFza2V0XSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgLy8gZG8gdGhlIGZhbmN5IHN0cmlwZSBjaGFuZ2VzXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAgIHNldFByb2Nlc3NpbmcodHJ1ZSk7XG4gICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgc3RyaXBlXG4gICAgICAgIC5jb25maXJtQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCB7XG4gICAgICAgICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAgICAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IHBheW1lbnRJbnRlbnQgfSkgPT4ge1xuICAgICAgICAgIC8vYWZ0ZXIgcGF5bWVudCBjb25maXJtYXRpb25cbiAgICAgICAgICBjb25zdCBvcmRlckluZnJvbWF0aW9uID0ge1xuICAgICAgICAgICAgdXNlcjogdXNlclN0b3JlLnVzZXIuaWQsXG4gICAgICAgICAgICBwYXltZW50SWQ6IHBheW1lbnRJbnRlbnQuaWQsXG4gICAgICAgICAgICBwYXltZW50QW1vdW50OiBnZXRCYXNrZXRUb3RhbChiYXNrZXQpLFxuICAgICAgICAgICAgb3JkZXJzOiBiYXNrZXQsXG4gICAgICAgICAgICBhZGRyZXNzSWQ6IHNlbGVjdGVkQWRkcmVzcyxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBkaXNwYXRjaFByb3BzKGNyZWF0ZU9yZGVycyhvcmRlckluZnJvbWF0aW9uLCBwcm9wcy5oaXN0b3J5KSk7XG4gICAgICAgICAgLy8gZGIuY29sbGVjdGlvbihcInVzZXJzXCIpXG4gICAgICAgICAgLy8gICAuZG9jKHVzZXI/LnVpZClcbiAgICAgICAgICAvLyAgIC5jb2xsZWN0aW9uKFwib3JkZXJzXCIpXG4gICAgICAgICAgLy8gICAuZG9jKGNsaWVudFNlY3JldClcbiAgICAgICAgICAvLyAgIC5zZXQoe1xuICAgICAgICAgIC8vICAgICBiYXNrZXQ6IGJhc2tldCxcbiAgICAgICAgICAvLyAgICAgYW1vdW50OiBnZXRCYXNrZXRUb3RhbChiYXNrZXQpLFxuICAgICAgICAgIC8vICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgc2V0U3VjY2VlZGVkKHRydWUpO1xuICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2Ugc2VsZWN0IGFuIGFkZHJlc3MhXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAvL3NldCB0aGUgZGlzYWJsZWQgZm9ybVxuICAgIHNldERpc2FibGVkKGUuZW1wdHkpO1xuICAgIHNldEVycm9yKGUuZXJyb3IgPyBlLmVycm9yLm1lc3NhZ2UgOiBcIlwiKTtcbiAgfTtcblxuICAvL1NlbGVjdCBhZGRyZXNzIGNhcmRcbiAgY29uc3Qgc2VsZWN0QWRkcmVzc0NhcmQgPSAoZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkQWRkcmVzcyhlLnRhcmdldC5pZCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIFtcIlNlbGVjdCBEZWxpdmVyeSBBZGRyZXNzXCIsIFwiUmV2aWV3IENhcnRcIiwgXCJQcm9jZWVkIFBheW1lbnRcIl07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGVwQ29udGVudChzdGVwKSB7XG4gICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50X19zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgIDxoMz5EZWxpdmVyeSBBZGRyZXNzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50X19hZGRyZXNzXCI+XG4gICAgICAgICAgICAgIHt1c2VyU3RvcmUudXNlci5pZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50X19hZGRyZXNzX2NhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBheW1lbnRfX2xpbmtfYWRkcmVzc1wiIHRvPVwiL2FkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBBZGQgQWRkcmVzc1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dXNlQWRkcmVzcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgdXNlQWRkcmVzcy5tYXAoKHVzZXJBZGQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGF5bWVudF9fYWRkcmVzc19jYXJkX2RldGFpbHMgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFkZHJlc3MgPT09IHVzZXJBZGQuX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwicGF5bWVudF9fYWRkcmVzc19zZWxlY3RlZF9pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e3VzZXJBZGQuX2lkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RBZGRyZXNzQ2FyZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkQWRkcmVzcyA9PT0gdXNlckFkZC5faWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vajh5ZkJEUy9jaGVjay5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5bWVudF9fc2VsZWN0ZWRfY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxwPntgJHt1c2VyQWRkLmFyZWF9LCR7dXNlckFkZD8ubGFuZG1hcmt9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntgJHt1c2VyQWRkLmNpdHl9LCR7dXNlckFkZC5zdGF0ZX0sJHt1c2VyQWRkLmNvdW50cnl9YH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntgJHt1c2VyQWRkLnBob25lfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX3NlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgPGgzPlJldmlldyBpdGVtcyBhbmQgZGVsaXZlcnk8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX2l0ZW1zXCI+XG4gICAgICAgICAgICAgIHtiYXNrZXQubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPENoZWNrb3V0UHJvZHVjdFxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICByYXRpbmc9e2l0ZW0ucmF0aW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50X19zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgIDxoMz5QYXltZW50IE1ldGhvZDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudF9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Q2FyZEVsZW1lbnQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX3ByaWNlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8Q3VycmVuY3lGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVGV4dD17KHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBUb3RhbCA6IDxzdHJvbmc+e2Ake3ZhbHVlfWB9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxTY2FsZT17Mn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2dldEJhc2tldFRvdGFsKGJhc2tldCl9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBlcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeD17XCIkXCJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3VzZXJTdG9yZS51c2VyLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2Nlc3NpbmcgfHwgZGlzYWJsZWQgfHwgc3VjY2VlZGVkfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2Nlc3NpbmcgPyA8cD5Qcm9jZXNzaW5nPC9wPiA6IFwiQnV5IE5vd1wifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX2Vycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlIVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIEVycm9ycyAqL31cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50X19lcnJvclwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiVW5rbm93biBzdGVwXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coXCJzZWxlY3RlZEFkZHJlc3M9PT09XCIsIHNlbGVjdGVkQWRkcmVzcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXltZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnRfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQ2hlY2tvdXQgKDxMaW5rIHRvPVwiL2NoZWNrb3V0XCI+e2Jhc2tldD8ubGVuZ3RofSBpdGVtczwvTGluaz4pXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICA8U3RlcExhYmVsPntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICA8U3RlcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Z2V0U3RlcENvbnRlbnQoaW5kZXgpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwICE9PSBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5idXR0b259IHBheW1lbnRfX3N0ZXBwZXJfYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1N0ZXBDb250ZW50PlxuICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgQWxsIHN0ZXBzIGNvbXBsZXRlZCAtIHlvdSZhcG9zO3JlIGZpbmlzaGVkXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblBheW1lbnQucHJvcFR5cGVzID0ge1xuICBnZXRBZGRyZXNzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYXltZW50KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTg4ODlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4OTQwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMzIwMDg5OTAwM1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9wYXdhbi9EZXNrdG9wL3JlYWN0LXByYWN0aWNlL01FUk5fU1RBQ0svYW1hem9uLWZ1bGwvY2xpZW50L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ2hlY2tvdXRQcm9kdWN0LmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCIuLi8uLi9TdGF0ZVByb3ZpZGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0UHJvZHVjdCh7IGlkLCBpbWFnZSwgdGl0bGUsIHByaWNlLCByYXRpbmcsIGhpZGVidXR0b24gfSkge1xuICBjb25zdCBbeyBiYXNrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuICBjb25zdCByZW1vdmVGcm9tQmFza2V0ID0gKCkgPT4ge1xuICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBmcm9tIHRoZSBiYXNrZXRcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIlJFTU9WRV9GUk9NX0JBU0tFVFwiLFxuICAgICAgaWQ6IGlkLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRQcm9kdWN0XCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0UHJvZHVjdF9faW1hZ2VcIlxuICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICBhbHQ9XCJhbWF6b25fY2hlY2tvdXRcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRQcm9kdWN0X19pbmZvXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNoZWNrb3V0UHJvZHVjdF9fdGl0bGVcIj57dGl0bGV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjaGVja291dFByb2R1Y3RfX3ByaWNlXCI+XG4gICAgICAgICAgPHNtYWxsPiQ8L3NtYWxsPlxuICAgICAgICAgIDxzdHJvbmc+e3ByaWNlfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRQcm9kdWN0X19yYXRpbmdcIj5cbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxuICAgICAgICAgICAgLmZpbGwoKVxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8cCBrZXk9e2kgKyBcInJhdGVcIn0gY2xhc3NOYW1lPVwiY2hlY2tvdXRQcm9kdWN0X19zdGFyX2dvbGRcIj5cbiAgICAgICAgICAgICAgICDwn4yfXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyFoaWRlYnV0dG9uICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUZyb21CYXNrZXR9PlJlbW92ZSBmcm9tIGJhc2tldDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy9SZWdpc3RlciB1c2VyXG5leHBvcnQgY29uc3QgYWRkQWRkcmVzcyA9IChhZGRyZXNzRGF0YSwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL2FwaS9hZGRyZXNzL2NyZWF0ZVwiLCBhZGRyZXNzRGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiU0VUX0FERFJFU1NcIixcbiAgICAgICAgICAgIHBheWxhb2Q6IHJlcy5kYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9wYXltZW50XCIpO1xuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiR0VUX0VSUk9SU1wiLFxuICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgfSk7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWRkcmVzcyA9ICh1c2VySWQpID0+IChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9hZGRyZXNzL2dldFwiLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX0FERFJFU1NcIixcbiAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiR0VUX0VSUk9SU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIiwgZXJyb3IpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiR0VUX0VSUk9SU1wiLFxuICAgICAgcGF5bG9hZDogZXJyb3IsXG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0SW1hZ2VNYWduaWZ5IGZyb20gXCJyZWFjdC1pbWFnZS1tYWduaWZ5XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiLi4vLi4vU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IFwiLi9Qcm9kdWN0UHJldmlldy5jc3NcIjtcblxuZnVuY3Rpb24gUHJvZHVjdFByZXZpZXcocHJvcHMpIHtcbiAgY29uc3QgW2NoYW5nZUltYWdlLCBzZXRDaGFuZ2VJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoe30pO1xuICAvL1VzZSBvZiBjb250ZXh0IGFwaVxuICBjb25zdCBbeyBiYXNrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuICBjb25zdCBhZGRUb0Jhc2tldCA9ICgpID0+IHtcbiAgICAvL2Rpc3BhdGNoIHRoZSBpdGVtIGludG8gdGhlIGRhdGEgbGF5ZXJcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkFERF9UT19CQVNLRVRcIixcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgICBpbWFnZTogcHJvZHVjdD8uaW1hZ2VbMF0/LnNyYyxcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgIHJhdGluZzogcHJvZHVjdC5yYXRpbmcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cy9nZXRTaW5nbGVQcm9kdWN0XCIsIHtcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBwcm9wcy5tYXRjaC5wYXJhbXMuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICAgIHNldFByb2R1Y3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRDaGFuZ2VJbWFnZShyZXNwb25zZS5kYXRhLmltYWdlWzBdLnNyYyk7XG4gICAgfSBjYXRjaCAoZXJvcnIpIHtcbiAgICAgIHByb3BzLmhpc3RvcnkucHVzaChcIi9lcnJvclwiKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5tYXRjaC5wYXJhbXMuaWRdKTtcbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENoYW5nZUltYWdlKGUudGFyZ2V0LnNyYyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJldmlld1wiPlxuICAgICAgey8qIEltYWdlIFByZXZpZXdzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJldmlld19pbWFnZVByZXZpZXdcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RQcmV2aWV3X2ltYWdlX3RodW1ibmFpbFwiPlxuICAgICAgICAgIHtwcm9kdWN0Py5pbWFnZT8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgcHJvZHVjdC5pbWFnZS5tYXAoKG1wLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtcImltYWdlc1wiICsgaW5kZXh9PlxuICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17aGFuZGxlSW1hZ2VDaGFuZ2V9IHNyYz17bXAuc3JjfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIExhcmdlIEltYWdlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJldmlld19sYXJnZUltYWdlXCI+XG4gICAgICAgIDxSZWFjdEltYWdlTWFnbmlmeVxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICBzbWFsbEltYWdlOiB7XG4gICAgICAgICAgICAgIGFsdDogXCJXcmlzdHdhdGNoIGJ5IFRlZCBCYWtlciBMb25kb25cIixcbiAgICAgICAgICAgICAgLy8gaXNGbHVpZFdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICBzcmM6IGNoYW5nZUltYWdlLFxuICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYXJnZUltYWdlOiB7XG4gICAgICAgICAgICAgIHNyYzogY2hhbmdlSW1hZ2UsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDEyMDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHsvKiA8aW1nIHNyYz1cIlwiIGFsdD1cImxhcmdlSW1hZ2VcIiAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIFByb2R1Y3QgZGV0YWlscyBhbmQgYWRkIGJhc2tldCBidXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RQcmV2aWV3X19kZXRhaWxzXCI+XG4gICAgICAgIDxoMz57cHJvZHVjdC50aXRsZX08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0UHJldmlld19fcHJpY2VcIj5cbiAgICAgICAgICBQcmljZTogPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4kIHtwcm9kdWN0LnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgUmF0aW5nOlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdvbGRcIj5cbiAgICAgICAgICAgIHtBcnJheShwcm9kdWN0LnJhdGluZylcbiAgICAgICAgICAgICAgLmZpbGwoKVxuICAgICAgICAgICAgICAubWFwKCh4KSA9PiBcIvCfjJ9cIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFN0b3JlOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e3Byb2R1Y3Quc3RvcmVOYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBTZWxsZXI6PHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntwcm9kdWN0LnNlbGxlcn08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UHJldmlld19fYWRkVG9CYXNrZXRcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvQmFza2V0fSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBBZGQgdG8gYmFza2V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RQcmV2aWV3X29mZmVyc1wiPlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxzcGFuPvCfkrAgU2F2ZSBFeHRyYTwvc3Bhbj4gd2l0aCA0IG9mZmVyXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNwYW4+QmFuayBPZmZlciAoMik6PC9zcGFuPiAxMCUgb2ZmIHdpdGggQ3JlZGl0IENhcmQsIENyZWRpdFxuICAgICAgICAgICAgICAgIEVNSSBhbmQgRGViaXQgRU1JIHRyYW5zYWN0aW9uc3NcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5DYXNoYmFjayAoMik6PC9zcGFuPiA1JSBiYWNrIHdpdGh7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BbWF6b24gUGF5IElDSUMgQmFuayA8L2E+IENyZWlkdCBDYXJkIGZvclxuICAgICAgICAgICAgICAgIFByaW1lLW1lbWJlcnMuICUgYmFjayBmb3IgZXZlcnlib2R5XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tm8gQ29zdCBFTUk6PC9zcGFuPiBBdmFpbCBObyBDb3N0IEVNSSBvbiBzZWxlY3QgY2FyZHMgZm9yXG4gICAgICAgICAgICAgICAgb3JkZXJzIGFib3ZlICQzMDBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QYXJ0bmVyIE9mZmVyczo8L3NwYW4+IEdldCBHU1QgaW52b2ljZSBhbmQgc2F2ZSB1cCB0byAyOCVcbiAgICAgICAgICAgICAgICBvbiBidXNpbmVzcyBwdXJjaGFzZXMuPGEgaHJlZj1cIiNcIj5TaWduIHVwIGZvciBmcmVlPC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2R1Y3RQcmV2aWV3KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL1Byb2R1Y3QvUHJvZHVjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9DYXJvdXNlbC9DYXJvdXNlbFwiO1xuaW1wb3J0IEZvdXJJbWFnZUNhcmRzIGZyb20gXCIuLi9DYXJkcy9Gb3VySW1hZ2VDYXJkc1wiO1xuaW1wb3J0IEFkRGlzcGxheUNhcmQgZnJvbSBcIi4uL0NhcmRzL0FkRGlzcGxheUNhcmRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBmb3VyQ2FyZERhdGEgPSB7XG4gIGZpcnN0Q2FyZDoge1xuICAgIHRpdGxlOiBcIkFtYXpvbiBCcmFuZHMgJiBtb3JlXCIsXG4gICAgZGF0YTogW1xuICAgICAge1xuICAgICAgICBsaW5rOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtZXUuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzMxL2ltZzIwL0Zhc2hpb24vRVZFTlQvV1JTX0RlYy9HVy9CVEYvUEMvTUYtMzcyLTIzMi8xODYtMTE2LzEuX1NZMTE2X0NCNDEzNTcwNjUyXy5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiQ2xvdGhlc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGluazpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9pbWcyMC9GYXNoaW9uL0VWRU5UL1dSU19EZWMvR1cvQlRGL1BDL01GLTM3Mi0yMzIvMTg2LTExNi8yLl9TWTExNl9DQjQxMzU3MDY1Ml8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkZvb3R3ZWFyXCIsXG4gICAgICB9LFxuICAgICAgLFxuICAgICAge1xuICAgICAgICBsaW5rOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtZXUuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzMxL1N5bWJvbC8yMDIwL0dhdGV3YXlOSy9QQy9zcGJfMTg2eDExNi5fU1kxMTZfQ0I0MzM4ODkwNTNfLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJDbG90aGluZyBFc3NlbnRpYWxzXCIsXG4gICAgICB9LFxuICAgICAgLFxuICAgICAge1xuICAgICAgICBsaW5rOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtZXUuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzMxL2ltZzIwL0FtYXpvbkJyYW5kcy9HV1RyYW5zaXRpb24vMi00XzE4NngxMTYuX1NZMTE2X0NCNDMzOTEwNzk1Xy5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiRGFpbHkgRXNzZW50aWFsc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBzZWNvbmRDYXJkOiB7XG4gICAgdGl0bGU6IFwiU2hvcCBieSBDYXRlZ29yeVwiLFxuICAgIGRhdGE6IFtcbiAgICAgIHtcbiAgICAgICAgbGluazpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLW5hLnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8wMS9BbWF6b25FeHBvcnRzL0Z1amkvMjAxOS9BdWd1c3QvRGFzaGJvYXJkQ2FyZC9QUzRfMTIwWC5fU1k4NV9DQjQzODc0OTMxOF8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlZpZGVvIEdhbWVzXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5rOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzAxL0FtYXpvbkV4cG9ydHMvRnVqaS8yMDE5L0ZlYnJ1YXJ5L0Rhc2hib2FyZC9jb21wdXRlcjEyMHguX1NZODVfQ0I0Njg4NTA5NzBfLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJDb21wdXRlciAmIEFjY2Vzc29yaWVzXCIsXG4gICAgICB9LFxuICAgICAgLFxuICAgICAge1xuICAgICAgICBsaW5rOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzAxL0FtYXpvbkV4cG9ydHMvRnVqaS8yMDE5L0ZlYnJ1YXJ5L0Rhc2hib2FyZC9CYWJ5MTIwWC5fU1k4NV9DQjQ2ODg1MDg4Ml8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkJhYnlcIixcbiAgICAgIH0sXG4gICAgICAsXG4gICAgICB7XG4gICAgICAgIGxpbms6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0cvMDEvQW1hem9uRXhwb3J0cy9GdWppLzIwMTkvRmVicnVhcnkvRGFzaGJvYXJkL1RveXMxMjBYLl9TWTg1X0NCNDY4ODUxNjkzXy5qcGdcIixcbiAgICAgICAgdGl0bGU6IFwiVG95cyAmIEdhbWVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHRoaXJkQ2FyZDoge1xuICAgIHRpdGxlOiBcIlVwIHRvIDMwJSBvZmYgfCBUb3AgbW9iaWxlcyBcIixcbiAgICBkYXRhOiBbXG4gICAgICB7XG4gICAgICAgIGxpbms6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlcy1ldS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0cvMzEvV2lyZWxlc3MvTm92MjAyMF9CQVUvTVNPX1dlYmxhYi8xODZfMTE2LzE4NngxMTZfMi5fU1kxMTZfQ0I0MTY2NzQ0MjVfLmpwZ1wiLFxuICAgICAgICB0aXRsZTogXCJCZXN0IFNlbGxlclwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGluazpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9XaXJlbGVzcy9Ob3YyMDIwX0JBVS9NU09fV2VibGFiLzE4Nl8xMTYvMTg2eDExNl8zLl9TWTExNl9DQjQxNjY3NDQyNV8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIlRvcCBSYXRlZFwiLFxuICAgICAgfSxcbiAgICAgICxcbiAgICAgIHtcbiAgICAgICAgbGluazpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9XaXJlbGVzcy9Ob3YyMDIwX0JBVS9NU09fV2VibGFiLzE4Nl8xMTYvMTg2eDExNl80Ll9TWTExNl9DQjQxNjY3NDQyNV8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkdyZWF0IE9mZmVyc1wiLFxuICAgICAgfSxcbiAgICAgICxcbiAgICAgIHtcbiAgICAgICAgbGluazpcbiAgICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9XaXJlbGVzcy9Ob3YyMDIwX0JBVS9NU09fV2VibGFiLzE4Nl8xMTYvMTg2eDExNl81Ll9TWTExNl9DQjQxNjY3NDU1Ml8uanBnXCIsXG4gICAgICAgIHRpdGxlOiBcIkFjY2Vzc29yaWVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuY29uc3QgYWREaXNwbGF5RGF0YSA9IHtcbiAgZmlyc3RDYXJkOiB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgY2xhc3NOYW1lOiBcImFkZGlzcGxheV9fQ2FyZF90ZXh0XCIsXG4gICAgdGl0bGU6IFwiU2hvcCBvbiB0aGUgYW1hem9uIGFwcFwiLFxuICAgIHRleHQ6IFwiRmFzdCwgY29udmVuaWVudCBhbmQgc2VjdXJlIHwgT3ZlciAxNyBjcm9yZSBwcm9kdWN0cyBpbiB5b3VyIHBvY2tldFwiLFxuICAgIGxpbms6IFwiRG93bmxvYWQgdGhlIGFtYXpvbiBhcHBcIixcbiAgfSxcbiAgc2Vjb25kQ2FyZDoge1xuICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICBjbGFzc05hbWU6IFwiYWRkaXNwbGF5X19DYXJkX2ltYWdlXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9HLzMxL2ltZzE5L0FNUy9Ib3VzZWFkcy9MYXB0b3BzLVNlcHQyMDE5Ll9DQjQzNjU5NTkxNV8uanBnXCIsXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiL2FwaS9wcm9kdWN0cy9nZXRBbGxQcm9kdWN0c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIFwiSEVBREVSICYmJiQkJCQgSVMgVEhFIFJFU1BPTlNFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5cIixcbiAgICAgICAgICByZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX2NvbnRhaW5lclwiPlxuICAgICAgICA8Q2Fyb3VzZWwgLz5cbiAgICAgICAgey8qIDxpbWdcbiAgICAgICAgICBhbHQ9XCJob21lX2ltYWdlc1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZV9faW1hZ2VcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8wMi9kaWdpdGFsL3ZpZGVvL21lcmNoMjAxNi9IZXJvL0NvdmlkMTkvR2VuZXJpYy9HV0JsZWVkaW5nSGVyb19FTkdfQ09WSURVUERBVEVfX1hTaXRlXzE1MDB4NjAwX1BWX2VuLUdCLl9DQjQyODY4NDIyMF8uanBnXCJcbiAgICAgICAgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fcm93XCI+XG4gICAgICAgIDxGb3VySW1hZ2VDYXJkcyB7Li4uZm91ckNhcmREYXRhLmZpcnN0Q2FyZH0gLz5cbiAgICAgICAgPEZvdXJJbWFnZUNhcmRzIHsuLi5mb3VyQ2FyZERhdGEuc2Vjb25kQ2FyZH0gLz5cbiAgICAgICAgPEZvdXJJbWFnZUNhcmRzIHsuLi5mb3VyQ2FyZERhdGEudGhpcmRDYXJkfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkX2Rpc3BsYXlDYXJkXCI+XG4gICAgICAgICAgPEFkRGlzcGxheUNhcmQgey4uLmFkRGlzcGxheURhdGEuZmlyc3RDYXJkfSAvPlxuICAgICAgICAgIDxBZERpc3BsYXlDYXJkIHsuLi5hZERpc3BsYXlEYXRhLnNlY29uZENhcmR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX3JvdyBob21lX2Jhbm5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0cvMzEvQU1TL0lOLzk3MFgyNTAtX2Rlc2t0b3BfYmFubmVyLmpwZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgPjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVfX3JvdyBob21lX19wcm9kdWN0c19kZXRhaWxcIj5cbiAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0XG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5faWR9XG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0Ll9pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5pbWFnZVswXS5zcmN9XG4gICAgICAgICAgICAgIHJhdGluZz17cHJvZHVjdC5yYXRpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4OTAyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiY29uc3QgcmVwb3J0V2ViVml0YWxzID0gb25QZXJmRW50cnkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiR0VUX0VSUk9SU1wiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIGNhc2UgXCJDTEVBUl9FUlJPUlNcIjpcbiAgICAgIHJldHVybiB7fTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuLi91dGlscy9zZXRBdXRoVG9rZW5cIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5cbi8vVGhpcyBhY3Rpb24gZm9yIGF1dGggaXMgY2FsbGVkIHdoZW4gYW4gYWN0b25zIGhhcHBlblxuXG4vL1JlZ2lzdGVyIHVzZXJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlckRhdGEsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcIi9hcGkvdXNlckF1dGgvcmVnaXN0ZXJcIiwgdXNlckRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0ZXJNZXNzYWdlXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgXCJVc2VyIFJlZ2lzdGVyZWQgU3VjY2Vzc2Z1bGx5IVwiO1xuICAgICAgICBoaXN0b3J5LnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiR0VUX0VSUk9SU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59O1xuXG4vL0xvZ2luIC0gR2V0IHRoZSBVc2VyIHRva2VuIGFuZCBzYXZlIGluIHRoZSBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHVzZXJEYXRhLCBoaXN0b3J5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJBdXRoL2xvZ2luXCIsIHVzZXJEYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvL1NhdmUgdG8gbG9jYWxTdG9yYWdlXG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlcy5kYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImp3dFRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgc2V0QXV0aFRva2VuKHRva2VuKTtcblxuICAgICAgICAvL0RlY29kZWQgdGhlIHRva2VuIHRvIGdldCB0aGUgdXNlciBkYXRhXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHRva2VuKTtcbiAgICAgICAgLy9kaXNwYXRjaCB0byB0aGUgcmVhY3QgY29udGV4dCB0byBzaGFyZSB1c2VyIGRldGFpbHMgaW4gZnVsbCBmb3JtXG4gICAgICAgIGNvbnN0IHVzZXJEZXRhaWxzID0ge1xuICAgICAgICAgIGF2YXRhcjogZGVjb2RlZC5hdmF0YXIsXG4gICAgICAgICAgaWQ6IGRlY29kZWQuaWQsXG4gICAgICAgICAgbmFtZTogZGVjb2RlZC5uYW1lLFxuICAgICAgICAgIGlzU2VsbGVyOiBkZWNvZGVkLmlzU2VsbGVyLFxuICAgICAgICB9O1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJTRVRfVVNFUlwiLFxuICAgICAgICAgIHVzZXI6IHVzZXJEZXRhaWxzLFxuICAgICAgICB9KTtcblxuICAgICAgICAvL1NldCB0aGUgdXNlclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcihkZWNvZGVkKSk7XG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUk9SUlwiLCBlcnIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICAgICAgcGF5bG9hZDogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSAoZGVjb2RlZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiU0VUX0NVUlJFTlRfVVNFUlwiLFxuICAgIHBheWxvYWQ6IGRlY29kZWQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICAvL1JlbW92ZSB0aGUgY3VycmVudCB1c2VyIGZyb20gbG9jYWxzdG9yZ2FcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RUb2tlblwiKTtcbiAgLy9SZW12b2UgYXV0aCBoZWFkZXIgZm9yIGZ1dHVyZSByZXF1ZXN0c1xuICBzZXRBdXRoVG9rZW4oZmFsc2UpO1xuICAvL1NldCBjdXJyZW50IHVzZXIgdG8ge30gd2hpY2ggd2lsbCBzZXQgaXNBdXRoZW50aWNhdGVkIHRvIGZhbHNlXG4gIGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyKHt9KSk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMzIwMDg5ODg5NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9wYXdhbi9EZXNrdG9wL3JlYWN0LXByYWN0aWNlL01FUk5fU1RBQ0svYW1hem9uLWZ1bGwvY2xpZW50L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTg5MDZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4ODg2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQWRkcmVzcy5jc3NcIjtcbi8vIGltcG9ydCBjc2MgZnJvbSBcImNvdW50cnktc3RhdGUtY2l0eVwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhZGRBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvYWRkcmVzc0FjdGlvblwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5cbmZ1bmN0aW9uIEFkZHJlc3MocHJvcHMpIHtcbiAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0ZXMsIHNldFN0YXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaXRpZXMsIHNldENpdGllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGhvbmUsIHNldE1vYmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FyZWEsIHNldEFyZWFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYW5kbWFyaywgc2V0TGFuZE1hcmtdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtjc2MsIHNldENTQ10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGxpc3RzIH0gPSBhd2FpdCBpbXBvcnQoXCJjb3VudHJ5LXN0YXRlLWNpdHlcIik7XG4gICAgY29uc3QgY3NjY291bnRyaWVzID0gYXdhaXQgbGlzdHMuZ2V0QWxsQ291bnRyaWVzKCk7XG4gICAgc2V0Q291bnRyaWVzKGNzY2NvdW50cmllcyk7XG4gICAgc2V0Q1NDKGxpc3RzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNvdW50cnlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ1NDLS0tLVwiLCBjc2MpO1xuICAgIGNvbnN0IGNvdW50cnlJZCA9IGUudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS5pZDtcbiAgICBjb25zdCBzdGF0ZXNPZkNvdW50cnkgPSBjc2MuZ2V0U3RhdGVzT2ZDb3VudHJ5KGNvdW50cnlJZCk7XG4gICAgc2V0Q291bnRyeShlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0U3RhdGVzKHN0YXRlc09mQ291bnRyeSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzdGF0ZUlkID0gZS50YXJnZXQuc2VsZWN0ZWRPcHRpb25zWzBdLmlkO1xuICAgIGNvbnN0IGNpdGllc09mU3RhdGUgPSBjc2MuZ2V0Q2l0aWVzT2ZTdGF0ZShzdGF0ZUlkKTtcbiAgICBzZXRTdGF0ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0Q2l0aWVzKGNpdGllc09mU3RhdGUpO1xuICB9O1xuXG4gIC8vZnVuY3Rpb24gdG8gc2F2ZSB0aGUgYWRkcmVzc1xuICBjb25zdCBzYXZlQWRkcmVzcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlbXBFcnJvcnMgPSB7fTtcblxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShjb3VudHJ5KSkge1xuICAgICAgdGVtcEVycm9ycy5jb3VudHJ5ID0gXCJQbGVhc2Ugc2VsZWN0IGEgY291bnRyeVwiO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdG9yLmlzRW1wdHkoc3RhdGUpKSB7XG4gICAgICB0ZW1wRXJyb3JzLnN0YXRlID0gXCJQbGVhc2Ugc2VsZWN0IGEgc3RhdGVcIjtcbiAgICB9XG4gICAgaWYgKHZhbGlkYXRvci5pc0VtcHR5KGNpdHkpKSB7XG4gICAgICB0ZW1wRXJyb3JzLmNpdHkgPSBcIlBsZWFzZSBzZWxlY3QgYSBjaXR5XCI7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShwaG9uZSkpIHtcbiAgICAgIHRlbXBFcnJvcnMucGhvbmUgPSBcIlBsZWFzZSBlbnRlciBtb2JpbGUgbnVtYmVyXCI7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShhcmVhKSkge1xuICAgICAgdGVtcEVycm9ycy5hcmVhID0gXCJQbGVhc2UgZW50ZXIgYW4gYXJlYVwiO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModGVtcEVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzZW5kT2JqID0ge1xuICAgICAgICB1c2VyOiBwcm9wcy5hdXRoLnVzZXIuaWQsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBjaXR5LFxuICAgICAgICBwaG9uZSxcbiAgICAgICAgYXJlYSxcbiAgICAgICAgbGFuZG1hcmssXG4gICAgICB9O1xuICAgICAgcHJvcHMuYWRkQWRkcmVzcyhzZW5kT2JqLCBwcm9wcy5oaXN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JzKHRlbXBFcnJvcnMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzX19oZWFkZXJcIj5cbiAgICAgICAgPGgzPkFkZCBhIG5ldyBhZGRyZXNzPC9oMz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3IgcGljayB1cCB5b3VyIHBhY2thZ2VzIGF0IHlvdXIgY29udmVuaWVuY2UgZnJvbSBvdXIgc2VsZi1zZXJ2aWNlXG4gICAgICAgICAgbG9jYXRpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFkZHJlc3NfY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc19fY29tbW9uIGFkZHJlc3NfX2NvdW50cmllc1wiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VudHJpZXNcIj5Db3VudHJ5L1JlZ2lvbjwvbGFiZWw+XG5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY291bnRyaWVzXCJcbiAgICAgICAgICAgIGlkPVwiY291bnRyaWVzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb3VudHJ5Q2hhbmdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtcImgxXCJ9IHZhbHVlPXtcIlwifSBpZD17XCJmaXJzdFwifT48L29wdGlvbj5cbiAgICAgICAgICAgIHtjb3VudHJpZXMubWFwKChjb3VudHJ5RGV0YWlscykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtjb3VudHJ5RGV0YWlscy5uYW1lICsgXCJoMVwifVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5RGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICAgIGlkPXtjb3VudHJ5RGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3VudHJ5RGV0YWlscy5uYW1lfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtlcnJvcnMuY291bnRyeSAmJiAoXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYWRkcmVzc19fdmFsaWRhdGlvbkVycm9yXCI+e2Vycm9ycy5jb3VudHJ5fTwvc21hbGw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc19fY29tbW9uIGFkZHJlc3NfX3N0YXRlXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRlXCI+U3RhdGUgLyBQcm92aW5jZSAvIFJlZ2lvbjwvbGFiZWw+XG5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzdGF0ZVwiIGlkPVwic3RhdGVcIiBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e1wiaDFcIn0gdmFsdWU9e1wiXCJ9IGlkPXtcImZpcnN0XCJ9Pjwvb3B0aW9uPlxuICAgICAgICAgICAge3N0YXRlcy5tYXAoKHN0YXRlRGV0YWlscykgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtzdGF0ZURldGFpbHMubmFtZSArIFwiaDFcIn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGVEZXRhaWxzLm5hbWV9XG4gICAgICAgICAgICAgICAgaWQ9e3N0YXRlRGV0YWlscy5pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZURldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICB7ZXJyb3JzLnN0YXRlICYmIChcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJhZGRyZXNzX192YWxpZGF0aW9uRXJyb3JcIj57ZXJyb3JzLnN0YXRlfTwvc21hbGw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc19fY29tbW9uIGFkZHJlc3NfX2NpdHlcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPlRvd24vQ2l0eTwvbGFiZWw+XG5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT17XCJoMVwifSB2YWx1ZT17XCJcIn0gaWQ9e1wiZmlyc3RcIn0+PC9vcHRpb24+XG4gICAgICAgICAgICB7Y2l0aWVzLm1hcCgoY2l0eURldGFpbHMpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17Y2l0eURldGFpbHMubmFtZSArIFwiaDFcIn1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eURldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgICBpZD17Y2l0eURldGFpbHMuaWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2l0eURldGFpbHMubmFtZX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICB7ZXJyb3JzLmNpdHkgJiYgKFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImFkZHJlc3NfX3ZhbGlkYXRpb25FcnJvclwiPntlcnJvcnMuY2l0eX08L3NtYWxsPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3NfX2NvbW1vbiBhZGRyZXNzX19tb2JpbGVOdW1iZXJcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5Nb2JpbGUgbnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TW9iaWxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICB7ZXJyb3JzLnBob25lICYmIChcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJhZGRyZXNzX192YWxpZGF0aW9uRXJyb3JcIj57ZXJyb3JzLnBob25lfTwvc21hbGw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc19fY29tbW9uIGFkZHJlc3NfX2FyZWFcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5BcmVhLCBDb2xvbnksIFN0cmVldCwgU2VjdG9yLCBWaWxsYWdlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldEFyZWEoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIHtlcnJvcnMuYXJlYSAmJiAoXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYWRkcmVzc19fdmFsaWRhdGlvbkVycm9yXCI+e2Vycm9ycy5hcmVhfTwvc21hbGw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc19fY29tbW9uIGFkZHJlc3NfX2xhbmRNYXJrXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRlXCI+TGFuZG1hcms8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFuZE1hcmsoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tb25fX2FkZHJlc3MgYWRkcmVzc19fc2F2ZUJ1dHRvblwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3NhdmVBZGRyZXNzfT5cbiAgICAgICAgICAgIEFkZCBBZGRyZXNzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5BZGRyZXNzLnByb3BUeXBlcyA9IHtcbiAgYWRkQWRkcmVzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXG4gIGF1dGg6IHN0YXRlLmF1dGgsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgYWRkQWRkcmVzcyB9KSh3aXRoUm91dGVyKEFkZHJlc3MpKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL09yZGVycy5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiLi4vLi4vU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuLi9PcmRlci9PcmRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBnZXRPcmRlcnMgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wYXltZW50QWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBPcmRlcnMoKSB7XG4gIGNvbnN0IFt7IGJhc2tldCwgdXNlciB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy9yZWR1eCBzZXR1cFxuICBjb25zdCB1c2VyRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XG4gIGNvbnN0IG9yZGVyRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUub3JkZXJzKTtcbiAgY29uc3QgZGlzcGF0Y2hQcm9wcyA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJEYXRhLnVzZXIuaWQpIHtcbiAgICAgIGRpc3BhdGNoUHJvcHMoZ2V0T3JkZXJzKHVzZXJEYXRhLnVzZXIuaWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0T3JkZXJzKFtdKTtcbiAgICB9XG4gIH0sIFt1c2VyRGF0YS51c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcmRlcnMob3JkZXJEYXRhLm9yZGVycyk7XG4gIH0sIFtvcmRlckRhdGFdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyc1wiPlxuICAgICAgPGgxPllvdXIgT3JkZXJzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJzX19vcmRlclwiPlxuICAgICAgICB7b3JkZXJzPy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgb3JkZXJzPy5tYXAoKG9yZGVyKSA9PiA8T3JkZXIga2V5PXtvcmRlci5faWR9IG9yZGVyPXtvcmRlcn0gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVycztcbiIsImltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi92YWxpZGF0aW9ucy9pc0VtcHR5XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgb3JkZXJzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiU0VUX09SREVSU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIksvdGNcIixcblx0XCIuL2FmLmpzXCI6IFwiSy90Y1wiLFxuXHRcIi4vYXJcIjogXCJqbk80XCIsXG5cdFwiLi9hci1kelwiOiBcIm8xYkVcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwibzFiRVwiLFxuXHRcIi4vYXIta3dcIjogXCJRajRKXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWx5XCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1tYVwiOiBcIkNvUkpcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItc2FcIjogXCJnakNUXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcImdqQ1RcIixcblx0XCIuL2FyLXRuXCI6IFwiYllNNlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJiWU02XCIsXG5cdFwiLi9hci5qc1wiOiBcImpuTzRcIixcblx0XCIuL2F6XCI6IFwiU0Z4V1wiLFxuXHRcIi4vYXouanNcIjogXCJTRnhXXCIsXG5cdFwiLi9iZVwiOiBcIkg4RURcIixcblx0XCIuL2JlLmpzXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmdcIjogXCJoS3JzXCIsXG5cdFwiLi9iZy5qc1wiOiBcImhLcnNcIixcblx0XCIuL2JtXCI6IFwicC9yTFwiLFxuXHRcIi4vYm0uanNcIjogXCJwL3JMXCIsXG5cdFwiLi9iblwiOiBcImtFT2FcIixcblx0XCIuL2JuLWJkXCI6IFwibG9ZUVwiLFxuXHRcIi4vYm4tYmQuanNcIjogXCJsb1lRXCIsXG5cdFwiLi9ibi5qc1wiOiBcImtFT2FcIixcblx0XCIuL2JvXCI6IFwiMG1vK1wiLFxuXHRcIi4vYm8uanNcIjogXCIwbW8rXCIsXG5cdFwiLi9iclwiOiBcImFJZGZcIixcblx0XCIuL2JyLmpzXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnNcIjogXCJKVlNKXCIsXG5cdFwiLi9icy5qc1wiOiBcIkpWU0pcIixcblx0XCIuL2NhXCI6IFwiMXhaNFwiLFxuXHRcIi4vY2EuanNcIjogXCIxeFo0XCIsXG5cdFwiLi9jc1wiOiBcIlBBMnJcIixcblx0XCIuL2NzLmpzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3ZcIjogXCJBK3hhXCIsXG5cdFwiLi9jdi5qc1wiOiBcIkEreGFcIixcblx0XCIuL2N5XCI6IFwibDVlcFwiLFxuXHRcIi4vY3kuanNcIjogXCJsNWVwXCIsXG5cdFwiLi9kYVwiOiBcIkR4UXZcIixcblx0XCIuL2RhLmpzXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGVcIjogXCJ0R2xYXCIsXG5cdFwiLi9kZS1hdFwiOiBcInMrdWtcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtY2hcIjogXCJ1M0dJXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcInUzR0lcIixcblx0XCIuL2RlLmpzXCI6IFwidEdsWFwiLFxuXHRcIi4vZHZcIjogXCJXWXJqXCIsXG5cdFwiLi9kdi5qc1wiOiBcIldZcmpcIixcblx0XCIuL2VsXCI6IFwialVlWVwiLFxuXHRcIi4vZWwuanNcIjogXCJqVWVZXCIsXG5cdFwiLi9lbi1hdVwiOiBcIkRtdmlcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tY2FcIjogXCJPSVlpXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIk9JWWlcIixcblx0XCIuL2VuLWdiXCI6IFwiT2FhN1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1pZVwiOiBcIjRkT3dcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWxcIjogXCJjek1vXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcImN6TW9cIixcblx0XCIuL2VuLWluXCI6IFwiN0M1UVwiLFxuXHRcIi4vZW4taW4uanNcIjogXCI3QzVRXCIsXG5cdFwiLi9lbi1uelwiOiBcImIxRHlcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiYjFEeVwiLFxuXHRcIi4vZW4tc2dcIjogXCJ0K210XCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcInQrbXRcIixcblx0XCIuL2VvXCI6IFwiWmR1b1wiLFxuXHRcIi4vZW8uanNcIjogXCJaZHVvXCIsXG5cdFwiLi9lc1wiOiBcImlZdUxcIixcblx0XCIuL2VzLWRvXCI6IFwiQ2p6VFwiLFxuXHRcIi4vZXMtZG8uanNcIjogXCJDanpUXCIsXG5cdFwiLi9lcy1teFwiOiBcInRiZmVcIixcblx0XCIuL2VzLW14LmpzXCI6IFwidGJmZVwiLFxuXHRcIi4vZXMtdXNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIlZjbHFcIixcblx0XCIuL2VzLmpzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXRcIjogXCI3QmpDXCIsXG5cdFwiLi9ldC5qc1wiOiBcIjdCakNcIixcblx0XCIuL2V1XCI6IFwiRC9KTVwiLFxuXHRcIi4vZXUuanNcIjogXCJEL0pNXCIsXG5cdFwiLi9mYVwiOiBcImpmU0NcIixcblx0XCIuL2ZhLmpzXCI6IFwiamZTQ1wiLFxuXHRcIi4vZmlcIjogXCJnZWtCXCIsXG5cdFwiLi9maS5qc1wiOiBcImdla0JcIixcblx0XCIuL2ZpbFwiOiBcIjFwcGdcIixcblx0XCIuL2ZpbC5qc1wiOiBcIjFwcGdcIixcblx0XCIuL2ZvXCI6IFwiQnlGNFwiLFxuXHRcIi4vZm8uanNcIjogXCJCeUY0XCIsXG5cdFwiLi9mclwiOiBcIm55WWNcIixcblx0XCIuL2ZyLWNhXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2EuanNcIjogXCIyZmpuXCIsXG5cdFwiLi9mci1jaFwiOiBcIkRra3lcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiRGtreVwiLFxuXHRcIi4vZnIuanNcIjogXCJueVljXCIsXG5cdFwiLi9meVwiOiBcImNSaXhcIixcblx0XCIuL2Z5LmpzXCI6IFwiY1JpeFwiLFxuXHRcIi4vZ2FcIjogXCJVU0N4XCIsXG5cdFwiLi9nYS5qc1wiOiBcIlVTQ3hcIixcblx0XCIuL2dkXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2QuanNcIjogXCI5clJpXCIsXG5cdFwiLi9nbFwiOiBcImlFRGRcIixcblx0XCIuL2dsLmpzXCI6IFwiaUVEZFwiLFxuXHRcIi4vZ29tLWRldmFcIjogXCJxdkpvXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcInF2Sm9cIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiREtyK1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCJES3IrXCIsXG5cdFwiLi9ndVwiOiBcIjRNVjNcIixcblx0XCIuL2d1LmpzXCI6IFwiNE1WM1wiLFxuXHRcIi4vaGVcIjogXCJ4NnBIXCIsXG5cdFwiLi9oZS5qc1wiOiBcIng2cEhcIixcblx0XCIuL2hpXCI6IFwiM0UxclwiLFxuXHRcIi4vaGkuanNcIjogXCIzRTFyXCIsXG5cdFwiLi9oclwiOiBcIlM2bG5cIixcblx0XCIuL2hyLmpzXCI6IFwiUzZsblwiLFxuXHRcIi4vaHVcIjogXCJXeFJsXCIsXG5cdFwiLi9odS5qc1wiOiBcIld4UmxcIixcblx0XCIuL2h5LWFtXCI6IFwiMXJZeVwiLFxuXHRcIi4vaHktYW0uanNcIjogXCIxcll5XCIsXG5cdFwiLi9pZFwiOiBcIlVEaFJcIixcblx0XCIuL2lkLmpzXCI6IFwiVURoUlwiLFxuXHRcIi4vaXNcIjogXCJCVmczXCIsXG5cdFwiLi9pcy5qc1wiOiBcIkJWZzNcIixcblx0XCIuL2l0XCI6IFwiYnBpaFwiLFxuXHRcIi4vaXQtY2hcIjogXCJieEtYXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcImJ4S1hcIixcblx0XCIuL2l0LmpzXCI6IFwiYnBpaFwiLFxuXHRcIi4vamFcIjogXCJCNTVOXCIsXG5cdFwiLi9qYS5qc1wiOiBcIkI1NU5cIixcblx0XCIuL2p2XCI6IFwidFVDdlwiLFxuXHRcIi4vanYuanNcIjogXCJ0VUN2XCIsXG5cdFwiLi9rYVwiOiBcIklCdFpcIixcblx0XCIuL2thLmpzXCI6IFwiSUJ0WlwiLFxuXHRcIi4va2tcIjogXCJiWG03XCIsXG5cdFwiLi9ray5qc1wiOiBcImJYbTdcIixcblx0XCIuL2ttXCI6IFwiNkIwWVwiLFxuXHRcIi4va20uanNcIjogXCI2QjBZXCIsXG5cdFwiLi9rblwiOiBcIlBwSXdcIixcblx0XCIuL2tuLmpzXCI6IFwiUHBJd1wiLFxuXHRcIi4va29cIjogXCJJdmkrXCIsXG5cdFwiLi9rby5qc1wiOiBcIkl2aStcIixcblx0XCIuL2t1XCI6IFwiSkNGL1wiLFxuXHRcIi4va3UuanNcIjogXCJKQ0YvXCIsXG5cdFwiLi9reVwiOiBcImxnbnRcIixcblx0XCIuL2t5LmpzXCI6IFwibGdudFwiLFxuXHRcIi4vbGJcIjogXCJSQXdRXCIsXG5cdFwiLi9sYi5qc1wiOiBcIlJBd1FcIixcblx0XCIuL2xvXCI6IFwic3AzelwiLFxuXHRcIi4vbG8uanNcIjogXCJzcDN6XCIsXG5cdFwiLi9sdFwiOiBcIkp2bFdcIixcblx0XCIuL2x0LmpzXCI6IFwiSnZsV1wiLFxuXHRcIi4vbHZcIjogXCJ1WHdJXCIsXG5cdFwiLi9sdi5qc1wiOiBcInVYd0lcIixcblx0XCIuL21lXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWUuanNcIjogXCJLVHowXCIsXG5cdFwiLi9taVwiOiBcImFJc25cIixcblx0XCIuL21pLmpzXCI6IFwiYUlzblwiLFxuXHRcIi4vbWtcIjogXCJhUWtVXCIsXG5cdFwiLi9tay5qc1wiOiBcImFRa1VcIixcblx0XCIuL21sXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbWwuanNcIjogXCJBdnZZXCIsXG5cdFwiLi9tblwiOiBcImxZdFFcIixcblx0XCIuL21uLmpzXCI6IFwibFl0UVwiLFxuXHRcIi4vbXJcIjogXCJPYjBaXCIsXG5cdFwiLi9tci5qc1wiOiBcIk9iMFpcIixcblx0XCIuL21zXCI6IFwiNitRQlwiLFxuXHRcIi4vbXMtbXlcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIlpBTVBcIixcblx0XCIuL21zLmpzXCI6IFwiNitRQlwiLFxuXHRcIi4vbXRcIjogXCJHMFV5XCIsXG5cdFwiLi9tdC5qc1wiOiBcIkcwVXlcIixcblx0XCIuL215XCI6IFwiaG9uRlwiLFxuXHRcIi4vbXkuanNcIjogXCJob25GXCIsXG5cdFwiLi9uYlwiOiBcImJPTXRcIixcblx0XCIuL25iLmpzXCI6IFwiYk9NdFwiLFxuXHRcIi4vbmVcIjogXCJPamtUXCIsXG5cdFwiLi9uZS5qc1wiOiBcIk9qa1RcIixcblx0XCIuL25sXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbmwtYmVcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIjJ5a3ZcIixcblx0XCIuL25sLmpzXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbm5cIjogXCJ1RXllXCIsXG5cdFwiLi9ubi5qc1wiOiBcInVFeWVcIixcblx0XCIuL29jLWxuY1wiOiBcIkZudXlcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIkZudXlcIixcblx0XCIuL3BhLWluXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGEtaW4uanNcIjogXCI4LytSXCIsXG5cdFwiLi9wbFwiOiBcImpWZENcIixcblx0XCIuL3BsLmpzXCI6IFwialZkQ1wiLFxuXHRcIi4vcHRcIjogXCI4bUJEXCIsXG5cdFwiLi9wdC1iclwiOiBcIjB0UmtcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiMHRSa1wiLFxuXHRcIi4vcHQuanNcIjogXCI4bUJEXCIsXG5cdFwiLi9yb1wiOiBcImx5eG9cIixcblx0XCIuL3JvLmpzXCI6IFwibHl4b1wiLFxuXHRcIi4vcnVcIjogXCJsWHpvXCIsXG5cdFwiLi9ydS5qc1wiOiBcImxYem9cIixcblx0XCIuL3NkXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2QuanNcIjogXCJaNFFNXCIsXG5cdFwiLi9zZVwiOiBcIi8vOXdcIixcblx0XCIuL3NlLmpzXCI6IFwiLy85d1wiLFxuXHRcIi4vc2lcIjogXCI3YVY5XCIsXG5cdFwiLi9zaS5qc1wiOiBcIjdhVjlcIixcblx0XCIuL3NrXCI6IFwiZSthZVwiLFxuXHRcIi4vc2suanNcIjogXCJlK2FlXCIsXG5cdFwiLi9zbFwiOiBcImdWVktcIixcblx0XCIuL3NsLmpzXCI6IFwiZ1ZWS1wiLFxuXHRcIi4vc3FcIjogXCJ5UE1zXCIsXG5cdFwiLi9zcS5qc1wiOiBcInlQTXNcIixcblx0XCIuL3NyXCI6IFwieng2U1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIkUrbFZcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCJFK2xWXCIsXG5cdFwiLi9zci5qc1wiOiBcInp4NlNcIixcblx0XCIuL3NzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3MuanNcIjogXCJVcjFEXCIsXG5cdFwiLi9zdlwiOiBcIlg3MDlcIixcblx0XCIuL3N2LmpzXCI6IFwiWDcwOVwiLFxuXHRcIi4vc3dcIjogXCJkTndBXCIsXG5cdFwiLi9zdy5qc1wiOiBcImROd0FcIixcblx0XCIuL3RhXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGEuanNcIjogXCJQZVVXXCIsXG5cdFwiLi90ZVwiOiBcIlhMdk5cIixcblx0XCIuL3RlLmpzXCI6IFwiWEx2TlwiLFxuXHRcIi4vdGV0XCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGV0LmpzXCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGdcIjogXCJPeHY2XCIsXG5cdFwiLi90Zy5qc1wiOiBcIk94djZcIixcblx0XCIuL3RoXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGguanNcIjogXCJFT2dXXCIsXG5cdFwiLi90a1wiOiBcIld2OTFcIixcblx0XCIuL3RrLmpzXCI6IFwiV3Y5MVwiLFxuXHRcIi4vdGwtcGhcIjogXCJEemkwXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIkR6aTBcIixcblx0XCIuL3RsaFwiOiBcInozVmRcIixcblx0XCIuL3RsaC5qc1wiOiBcInozVmRcIixcblx0XCIuL3RyXCI6IFwiRG9IclwiLFxuXHRcIi4vdHIuanNcIjogXCJEb0hyXCIsXG5cdFwiLi90emxcIjogXCJ6MUZDXCIsXG5cdFwiLi90emwuanNcIjogXCJ6MUZDXCIsXG5cdFwiLi90em1cIjogXCJ3UWs5XCIsXG5cdFwiLi90em0tbGF0blwiOiBcInRUM0pcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwidFQzSlwiLFxuXHRcIi4vdHptLmpzXCI6IFwid1FrOVwiLFxuXHRcIi4vdWctY25cIjogXCJZUmV4XCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIllSZXhcIixcblx0XCIuL3VrXCI6IFwicmFMclwiLFxuXHRcIi4vdWsuanNcIjogXCJyYUxyXCIsXG5cdFwiLi91clwiOiBcIlVwUVdcIixcblx0XCIuL3VyLmpzXCI6IFwiVXBRV1wiLFxuXHRcIi4vdXpcIjogXCJMb3hvXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiQVE2OFwiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIkFRNjhcIixcblx0XCIuL3V6LmpzXCI6IFwiTG94b1wiLFxuXHRcIi4vdmlcIjogXCJLU0Y4XCIsXG5cdFwiLi92aS5qc1wiOiBcIktTRjhcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiL1g1dlwiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIvWDV2XCIsXG5cdFwiLi95b1wiOiBcImZ6UGdcIixcblx0XCIuL3lvLmpzXCI6IFwiZnpQZ1wiLFxuXHRcIi4vemgtY25cIjogXCJYRHBnXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIlhEcGdcIixcblx0XCIuL3poLWhrXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCJTYXRPXCIsXG5cdFwiLi96aC1tb1wiOiBcIk9td0hcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiT213SFwiLFxuXHRcIi4vemgtdHdcIjogXCJrT3BOXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcImtPcE5cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiUm5oWlwiOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDAwXCIsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzVdLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zaXRpb25zTW9kYWwocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NoYW5nZWQsIHNldElzQ2hhbmdlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDaGFuZ2VkKHByb3BzLmlzUGFyZW50Q2hhbmdlZCk7XG4gIH0sIFtwcm9wcy5pc1BhcmVudENoYW5nZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17cHJvcHMub3Blbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9GYWRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy9SZWdpc3RlciB1c2VyXG5leHBvcnQgY29uc3QgY3JlYXRlT3JkZXJzID0gKG9yZGVyc0RldGFpbHMsIGhpc3RvcnkpID0+IChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcIi9hcGkvcGF5bWVudHMvY3JlYXRlT3JkZXJzXCIsIG9yZGVyc0RldGFpbHMpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIlNFVF9PUkRFUlNcIixcbiAgICAgICAgICBwYXlsYW9kOiByZXMuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZShcIi9vcmRlcnNcIik7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIkVNUFRZX0JBU0tFVFwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkdFVF9FUlJPUlNcIixcbiAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlcnMgPSAodXNlcklkKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgdHJ5IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9hcGkvcGF5bWVudHMvZ2V0T3JkZXJzXCIsIHsgcGFyYW1zOiB7IHVzZXJJZDogdXNlcklkIH0gfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IFwiU0VUX09SREVSU1wiLFxuICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIkdFVF9FUlJPUlNcIixcbiAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiR0VUX0VSUk9SU1wiLFxuICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi92YWxpZGF0aW9ucy9pc0VtcHR5XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgdXNlcjoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9DVVJSRU5UX1VTRVJcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICFpc0VtcHR5KGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vLi4vdmFsaWRhdGlvbnMvaXNFbXB0eVwiO1xuaW1wb3J0IFwiLi9SZWdpc3Rlci5jc3NcIjtcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xuXG5mdW5jdGlvbiBSZWdpc3Rlcihwcm9wcykge1xuICAvL3VzZXN0YXRlIGhvb2tzIGZyb20gdGhlIHJlYWN0XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1NlbGxlciwgc2V0U2VsbGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRlbXBFcnJvcnMgPSB7fTtcbiAgICBpZiAodmFsaWRhdG9yLmlzRW1wdHkobmFtZSkpIHtcbiAgICAgIHRlbXBFcnJvcnMubmFtZSA9IFwiUGxlYXNlIGVudGVyIG5hbWVcIjtcbiAgICB9XG4gICAgaWYgKHZhbGlkYXRvci5pc0VtcHR5KG1vYmlsZSkgfHwgIXZhbGlkYXRvci5pc0ludChtb2JpbGUpKSB7XG4gICAgICB0ZW1wRXJyb3JzLm1vYmlsZSA9IFwiUGxlYXNlIGVudGVyIG1vYmlsZVwiO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdG9yLmlzRW1wdHkoZW1haWwpIHx8ICF2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcbiAgICAgIHRlbXBFcnJvcnMuZW1haWwgPSBcIlBsZWFzZSBlbnRlciBlbWFpbFwiO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShwYXNzd29yZCkpIHtcbiAgICAgIHRlbXBFcnJvcnMucGFzc3dvcmQgPSBcIlBsZWFzZSBlbnRlciBwYXNzd29yZFwiO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQgJiYgcGFzc3dvcmQuc3BsaXQoXCJcIikubGVuZ3RoIDwgNikge1xuICAgICAgdGVtcEVycm9ycy5wYXNzd29yZCA9IFwiUGFzc3dvcmQgbGVuZ3RoIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gNlwiO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXModGVtcEVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBwaG9uZTogcGFyc2VJbnQobW9iaWxlKSxcbiAgICAgICAgaXNTZWxsZXI6IGlzU2VsbGVyLFxuICAgICAgfTtcbiAgICAgIHByb3BzLnJlZ2lzdGVyVXNlcihvYmosIHByb3BzLmhpc3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcnModGVtcEVycm9ycyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9naW5fX2xvZ29cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYS9hOS9BbWF6b25fbG9nby5zdmcvMTAyNHB4LUFtYXpvbl9sb2dvLnN2Zy5wbmdcIlxuICAgICAgICAgIGFsdD1cImxvZ2luX2xvZ29cIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJfX2JveFwiPlxuICAgICAgICAgIDxoMz5DcmVhdGUgQWNjb3VudDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcmVnaXN0ZXJfZm9ybWF0IHJlZ2lzdGVyX19uYW1lX2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIiBjbGFzc05hbWU9XCJyZWlnc3Rlcl9fbmFtZV9sYWJlbFwiPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyX19uYW1lX2lucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgKFxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVnaXN0ZXJfX3ZhbGlkYXRpb25FcnJvcnNcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJfZm9ybWF0IHJlZ2lzdGVyX19tb2JpbGVfYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiIGNsYXNzTmFtZT1cInJlZ2lzdGVyX19tb2JpbGVfbGFiZWxcIj5cbiAgICAgICAgICAgICAgTW9iaWxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vYmlsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyX19tb2JpbGVfaW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMubW9iaWxlICYmIChcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInJlZ2lzdGVyX192YWxpZGF0aW9uRXJyb3JzXCI+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5tb2JpbGV9XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9mb3JtYXQgcmVnaXN0ZXJfX2VtYWlsX2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fZW1haWxcIj5cbiAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXJfZm9ybWF0cmVnaXN0ZXJfX2VtYWlsX2lucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInJlZ2lzdGVyX192YWxpZGF0aW9uRXJyb3JzXCI+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9mb3JtYXQgcmVnaXN0ZXJfX3Bhc3N3b3JkX2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fcGFzc3dvcmRfbGFiZWxcIj5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVnaXN0ZXJfX3Bhc3N3b3JkX2lucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cD5QYXNzd29yZCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiA2IGRpZ2l0PC9wPlxuICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWdpc3Rlcl9fdmFsaWRhdGlvbkVycm9yc1wiPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJfX3NlbGxlclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpc1NlbGxlcn1cbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTZWxsZXIoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlZ2lzdGVyX19jaGVja2JveFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+UmVnaXN0ZXIgYXMgYSBzZWxsZXI8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlcl9mb3JtYXQgcmVnaXN0ZXJfX2NvbmZpcm1hdGlvbl9ib3hcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb25maXJtYXRpb25fX2J1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJyZWdpc3Rlck1lc3NhZ2VcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyX2Zvcm1hdCByZWdpc3Rlcl9fYWxyZWFkeVwiPlxuICAgICAgICAgICAgPHA+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PC9wPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5TaWduIGluIOKepDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblJlZ2lzdGVyLnByb3BUeXBlcyA9IHtcbiAgcmVnaXN0ZXJVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhdXRoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGVycm9yczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBhdXRoOiBzdGF0ZS5hdXRoLFxuICBlcnJvcnM6IHN0YXRlLmVycm9ycyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyByZWdpc3RlclVzZXIgfSkod2l0aFJvdXRlcihSZWdpc3RlcikpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgYXV0aFJlZHVjZXJzIGZyb20gXCIuL2F1dGhSZWR1Y2Vyc1wiO1xuaW1wb3J0IGVycm9yUmVkdWNlcnMgZnJvbSBcIi4vZXJyb3JSZWR1Y2VyXCI7XG5pbXBvcnQgYWRkcmVzc1JlZHVjZXJzIGZyb20gXCIuL2FkZHJlc3NSZWR1Y2Vyc1wiO1xuaW1wb3J0IG9yZGVyc1JlZHVjZXJzIGZyb20gXCIuL29yZGVyc1JlZHVjZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aDogYXV0aFJlZHVjZXJzLFxuICBlcnJvcnM6IGVycm9yUmVkdWNlcnMsXG4gIGFkZHJlc3M6IGFkZHJlc3NSZWR1Y2VycyxcbiAgb3JkZXJzOiBvcmRlcnNSZWR1Y2Vycyxcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMzIwMDg5ODg5M1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9wYXdhbi9EZXNrdG9wL3JlYWN0LXByYWN0aWNlL01FUk5fU1RBQ0svYW1hem9uLWZ1bGwvY2xpZW50L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQWREaXNwbGF5Q2FyZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWRkaXNwbGF5Y2FyZCAke3Byb3BzLmNsYXNzTmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkaXNwbGF5Y2FyZF9fdGl0bGVcIj5cbiAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGlzcGxheWNhcl9fY29udGVudFwiPlxuICAgICAgICB7cHJvcHMudHlwZSA9PT0gXCJpbWFnZVwiICYmIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PVwiaW1hZ2VwclwiIC8+fVxuICAgICAgICB7cHJvcHMudHlwZSA9PT0gXCJ0ZXh0XCIgJiYgPHA+e3Byb3BzLnRleHR9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgICAge3Byb3BzLmxpbmsgJiYgKFxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImFkZGlzcGxheWNhcmRfX2xpbmtcIj5cbiAgICAgICAgICB7cHJvcHMubGlua31cbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWREaXNwbGF5Q2FyZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTg5MTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Mb2dpbi5jc3NcIjtcbmltcG9ydCB7IExpbmssIHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB0ZW1wRXJyb3JzID0ge307XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShlbWFpbCkgfHwgIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgICAgdGVtcEVycm9ycy5lbWFpbCA9IFwiUGxlYXNlIGVudGVyIHZhbGlkIGVtYWlsXCI7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShwYXNzd29yZCkpIHtcbiAgICAgIHRlbXBFcnJvcnMucGFzc3dvcmQgPSBcIlBsZWFzZSBlbnRlciBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyh0ZW1wRXJyb3JzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGxvZ2luT2JqID0ge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgYXdhaXQgcHJvcHMubG9naW5Vc2VyKGxvZ2luT2JqLCBwcm9wcy5oaXN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JzKHRlbXBFcnJvcnMpO1xuICAgIH1cbiAgICAvL1NvbWUgZmFuY3kgZmlyZWJhc2UgbG9naW4gc2hpdHR0dC4uLi4uLlxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcy5lcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldEVycm9ycyhwcm9wcy5lcnJvcnMpO1xuICAgIH1cbiAgfSwgW3Byb3BzXSk7XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoaXN0b3J5LnB1c2goXCIvcmVnaXN0ZXJcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbl9fbG9nb1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2E5L0FtYXpvbl9sb2dvLnN2Zy8xMDI0cHgtQW1hem9uX2xvZ28uc3ZnLnBuZ1wiXG4gICAgICAgICAgYWx0PVwibG9naW5fbG9nb1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlNpZ24taW48L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aDU+RS1tYWlsPC9oNT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxvZ2luX192YWxpZGF0aW9uRXJyb3JzXCI+e2Vycm9ycy5lbWFpbH08L3NtYWxsPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGg1PlBhc3N3b3JkPC9oNT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImxvZ2luX192YWxpZGF0aW9uRXJyb3JzXCI+e2Vycm9ycy5wYXNzd29yZH08L3NtYWxsPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzaWduSW59XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbl9fc2lnbkluQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgc2lnbmluZy1pbiB5b3UgYWdyZWUgdG8gdGhlIEFNQVpPTiBDTE9ORSA8YSBocmVmPVwiI1wiPkNvbmRpdGlvbnM8L2E+e1wiIFwifVxuICAgICAgICAgIG9mIFVzZSAmIFNhbGUuIFBsZWFzZSBzZWUgb3VyIFByaXZhY3kgTm90aWNlLCBvdXIgQ29va2llc3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk5vdGljZTwvYT4gYW5kIG91ciA8YSBocmVmPVwiI1wiPkludGVyZXN0LUJhc2VkIEFkczwvYT57XCIgXCJ9XG4gICAgICAgICAgTm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVnaXN0ZXJ9IGNsYXNzTmFtZT1cImxvZ2luX19yZWdpc3RlckJ1dHRvblwiPlxuICAgICAgICAgIENyZWF0ZSB5b3VyIEFtYXpvbiBhY2NvdW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgbG9naW5Vc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGVycm9yczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBlcnJvcnM6IHN0YXRlLmVycm9ycyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2dpblVzZXIgfSkod2l0aFJvdXRlcihMb2dpbikpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMzIwMDg5ODkyN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9wYXdhbi9EZXNrdG9wL3JlYWN0LXByYWN0aWNlL01FUk5fU1RBQ0svYW1hem9uLWZ1bGwvY2xpZW50L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVHJhbnNpdGlvbnNNb2RhbCBmcm9tIFwiLi4vTW9kYWwvTW9kYWxcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFwiLi9DcmVhdGVQcm9kdWN0LmNzc1wiO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvc2VsbGVyQWN0aW9uc1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QocHJvcHMpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3RvcmVOYW1lLCBzZXRTdG9yZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpbWFnZUZpbGVzLCBzZXRJbWFnZUZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbnRJbWFnZUZpbGVzLCBzZXRTZW50SW1hZ2VGaWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd1ByZXZpZXcsIHNldFNob3dQcmV2aWV3XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbb3Blbk1vZGFsLCBzZXRPcGVuTW9kYWxdID0gdXNlU3RhdGUocHJvcHMub3Blbik7XG4gIGNvbnN0IFtpc1BhcmVudENoYW5nZWQsIHNldElzUGFyZW50Q2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtrZXl3b3Jkcywgc2V0S2V5d29yZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vR2V0IHRoZSB1c2VyIGRldGFpbCBmcm9tIHRoZSBzdG9yZVxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xuICBjb25zdCBkaXNwYXRjaFByb3BzID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE9wZW5Nb2RhbChwcm9wcy5vcGVuKTtcbiAgfSwgW3Byb3BzLm9wZW5dKTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGVQcm9kdWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZW1wRXJyb3JzID0ge307XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eSh0aXRsZSkpIHtcbiAgICAgIHRlbXBFcnJvcnMudGl0bGUgPSBcIlBsZWFzZSBlbnRlciBhIHRpdGxlXCI7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShwcmljZSkpIHtcbiAgICAgIHRlbXBFcnJvcnMucHJpY2UgPSBcIlBsZWFzZSBlbnRlciBhIHByaWNlXCI7XG4gICAgfVxuICAgIGlmICh2YWxpZGF0b3IuaXNFbXB0eShzdG9yZU5hbWUpKSB7XG4gICAgICB0ZW1wRXJyb3JzLnN0b3JlTmFtZSA9IFwiUGxlYXNlIGVudGVyIHN0b3JlIG5hbWVcIjtcbiAgICB9XG4gICAgaWYgKGltYWdlRmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzLmltYWdlRmlsZXMgPSBcIlBsZWFzZSBzZWxlY3QgYSBwcm9kdWN0IGltYWdlXCI7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh0ZW1wRXJyb3JzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmZC5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgICBmZC5hcHBlbmQoXCJwcmljZVwiLCBwcmljZSk7XG4gICAgICBmZC5hcHBlbmQoXCJzdG9yZU5hbWVcIiwgc3RvcmVOYW1lKTtcbiAgICAgIGZkLmFwcGVuZChcInNlbGxlclwiLCB1c2VyLmlkKTtcbiAgICAgIGZkLmFwcGVuZChcImtleXdvcmRzXCIsIGtleXdvcmRzKTtcbiAgICAgIGZkLmFwcGVuZChcInJhdGluZ1wiLCByYXRpbmcpO1xuICAgICAgLy9TZXJ2ZXIgc2lkZSBkb24ndCBhY2NlcHQgYXJyYXkgb2YgZm9ybWRhdGEgc28gdGhlIGxvb3AgaXMgY2FsbGluZ1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZW50SW1hZ2VGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmZC5hcHBlbmQoXCJpbWFnZVwiLCBzZW50SW1hZ2VGaWxlc1tpXVswXSk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaFByb3BzKGNyZWF0ZVByb2R1Y3QoZmQsIHByb3BzLmhpc3RvcnkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3JzKHRlbXBFcnJvcnMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2FuY2VsTW9kYWwgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHByb3BzLnNldE1vZGFsU3RhdGUoZmFsc2UpO1xuICB9O1xuXG4gIC8vaGFuZGxlIGltYWdlIGNoYW5nZXNcbiAgY29uc3QgX2hhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRhRmlsZSA9IFtdO1xuICAgIGNvbnN0IHJhd0ZpbGVzID0gW107XG4gICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcbiAgICBjb25zdCBsZW5ndGggPSBmaWxlcy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA8IDYpIHtcbiAgICAgIHJhd0ZpbGVzLnB1c2goZmlsZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICBbXS5tYXAuY2FsbChmaWxlcywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHsgcmVzdWx0OiByZWFkZXIucmVzdWx0LCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgZGF0YUZpbGUucHVzaCh7IGZpbGU6IHJlc3VsdC5maWxlLCBpbWFnZVByZXZpZXdVcmw6IHJlc3VsdC5yZXN1bHQgfSk7XG4gICAgICAgICAgaWYgKGxlbmd0aCA9PT0gZGF0YUZpbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZXMgPSBbLi4uaW1hZ2VGaWxlcywgLi4uZGF0YUZpbGVdO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VudEltYWdlcyA9IFsuLi5zZW50SW1hZ2VGaWxlcywgZmlsZXNdO1xuICAgICAgICAgICAgc2V0U2VudEltYWdlRmlsZXMobmV3U2VudEltYWdlcyk7XG4gICAgICAgICAgICBzZXRJbWFnZUZpbGVzKG5ld0ltYWdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMaW1pdCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSW1hZ2VzID0gKGluZGV4KSA9PiB7XG4gICAgaW1hZ2VGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNlbnRJbWFnZUZpbGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0SW1hZ2VGaWxlcyhpbWFnZUZpbGVzKTtcbiAgICBzZXRTZW50SW1hZ2VGaWxlcyhzZW50SW1hZ2VGaWxlcyk7XG4gICAgc2V0SXNQYXJlbnRDaGFuZ2VkKCFpc1BhcmVudENoYW5nZWQpO1xuICB9O1xuXG4gIGxldCAkaW1hZ2VQcmV2aWV3O1xuXG4gIGlmIChpbWFnZUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAkaW1hZ2VQcmV2aWV3ID0gaW1hZ2VGaWxlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjcmVhdGVQcm9kdWN0X19wcmV2aWV3SW1hZ2VcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2Nsb3NlXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJbWFnZXMoaW5kZXgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy10aHVtYm5haWwgcHJldmlld1NpemVcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZS5pbWFnZVByZXZpZXdVcmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChsaW1pdCkge1xuICAgICAgJGltYWdlUHJldmlldyA9IDxkaXYgY2xhc3NOYW1lPVwicmVkXCI+SW1hZ2UgbGltaXQgZXhjZWVkcyBmcm9tIDY8L2Rpdj47XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb25zTW9kYWwgb3Blbj17b3Blbk1vZGFsfSBpc1BhcmVudENoYW5nZWQ9e2lzUGFyZW50Q2hhbmdlZH0+XG4gICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2E5L0FtYXpvbl9sb2dvLnN2Zy8xMDI0cHgtQW1hem9uX2xvZ28uc3ZnLnBuZ1wiXG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RcIj5cbiAgICAgICAgey8qIEhlYWRlciBvZiB0aGUgbW9kYWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlUHJvZHVjdF9faGVhZGVyXCI+XG4gICAgICAgICAgPGgzPkFkZCBQcm9kdWN0IHRvIHlvdXIgc3RvcmUgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBmb3JtIGRldGFpbHMgKi99XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2Zvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2Zvcm1fY29tbW9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkVudGVyIFByb2R1Y3QgdGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX3ZhbGlkYXRpb25FcnJvcnNcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2Zvcm1fY29tbW9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkVudGVyIFByb2R1Y3QgUHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMucHJpY2UgJiYgKFxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiY3JlYXRlUHJvZHVjdF9fdmFsaWRhdGlvbkVycm9yc1wiPlxuICAgICAgICAgICAgICAgIHtlcnJvcnMucHJpY2V9XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlUHJvZHVjdF9fZm9ybV9jb21tb25cIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RW50ZXIgUHJvZHVjdCBLZXl3b3JkczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17a2V5d29yZHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEtleXdvcmRzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLmtleXdvcmRzICYmIChcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX3ZhbGlkYXRpb25FcnJvcnNcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmtleXdvcmRzfVxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2Zvcm1fY29tbW9uXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkVudGVyIGluaXRpYWwgUmF0aW5nPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSYXRpbmcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlcnJvcnMucmF0aW5nICYmIChcbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX3ZhbGlkYXRpb25FcnJvcnNcIj5cbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnJhdGluZ31cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGVQcm9kdWN0X19mb3JtX2NvbW1vblwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5FbnRlciBTdG9yZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdG9yZU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RvcmVOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZXJyb3JzLnN0b3JlTmFtZSAmJiAoXG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJjcmVhdGVQcm9kdWN0X192YWxpZGF0aW9uRXJyb3JzXCI+XG4gICAgICAgICAgICAgICAge2Vycm9ycy5zdG9yZU5hbWV9XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgey8qIE11bHRpSW1hZ2UgdXBsb2FkIHdpdGggcHJldmlldyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3JlYXRlUHJvZHVjdF9fZm9ybV9jb21tb24gY3JlYXRlUHJvZHVjdF9faW1hZ2VzXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5DaG9vc2UgUHJvZHVjdCBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgaWQ9XCJwcm9kdWN0X2ltYWdlc1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17X2hhbmRsZUltYWdlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1ByZXZpZXcgPyA8ZGl2IGNsYXNzTmFtZT1cImltZ1ByZXZpZXdcIj57JGltYWdlUHJldmlld308L2Rpdj4gOiBudWxsfVxuICAgICAgICB7ZXJyb3JzLmltYWdlRmlsZXMgJiYgKFxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJjcmVhdGVQcm9kdWN0X192YWxpZGF0aW9uRXJyb3JzXCI+XG4gICAgICAgICAgICB7ZXJyb3JzLmltYWdlRmlsZXN9XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIGJ1dHRvbiB0byBzYXZlICB0aGUgbW9kYWwgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVByb2R1Y3RfX2J1dHRvblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlUHJvZHVjdF9fY3JlYXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVQcm9kdWN0fVxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlUHJvZHVjdF9fY2FuY2VsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY2FuY2VsTW9kYWwoZSl9XG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RyYW5zaXRpb25zTW9kYWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ3JlYXRlUHJvZHVjdCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vUmVnaXN0ZXIgdXNlclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2R1Y3QgPSAocHJvZHVjdERldGFpbCwgaGlzdG9yeSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiL2FwaS9wcm9kdWN0cy9jcmVhdGVcIiwgcHJvZHVjdERldGFpbClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJHRVRfRVJST1JTXCIsXG4gICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIkdFVF9FUlJPUlNcIixcbiAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4OTA5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgU3dpcGVhYmxlVmlld3MgZnJvbSBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiO1xuaW1wb3J0IHsgYXV0b1BsYXkgfSBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzLXV0aWxzXCI7XG5cbmNvbnN0IEF1dG9QbGF5U3dpcGVhYmxlVmlld3MgPSBhdXRvUGxheShTd2lwZWFibGVWaWV3cyk7XG5cbmNvbnN0IHR1dG9yaWFsU3RlcHMgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJQcmltZVwiLFxuICAgIGltZ1BhdGg6XG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8wMi9kaWdpdGFsL3ZpZGVvL21lcmNoMjAxNi9IZXJvL0NvdmlkMTkvR2VuZXJpYy9HV0JsZWVkaW5nSGVyb19FTkdfQ09WSURVUERBVEVfX1hTaXRlXzE1MDB4NjAwX1BWX2VuLUdCLl9DQjQyODY4NDIyMF8uanBnXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJDbG90aGVzXCIsXG4gICAgaW1nUGF0aDpcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMtZXUuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9HLzMxL2ltZzIwMjAvZmFzaGlvbi9HV2hlcm90YXRvci9HV19wYy84Ll9DQjQxNDA5MzA2NV8uanBnXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJQcmltZVwiLFxuICAgIGltZ1BhdGg6XG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9wcmltZS9HYXRld2F5LzIwMjAvTWF5L2dhbWluZ18xNTAweDYwMC5fQ0I0MzEyODE0NjRfLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiRWxlY3Ryb25pY3NcIixcbiAgICBpbWdQYXRoOlxuICAgICAgXCJodHRwczovL2ltYWdlcy1uYS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0cvMDEvQW1hem9uRXhwb3J0cy9GdWppLzIwMjAvTWF5L0hlcm8vRnVqaV9UYWxsSGVyb19Db21wdXRlcnNfMXguX0NCNDMyNDY5NzU1Xy5qcGdcIixcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIkNocmlzdG1hc1wiLFxuICAgIGltZ1BhdGg6XG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1LnNzbC1pbWFnZXMtYW1hem9uLmNvbS9pbWFnZXMvRy8zMS9pbWcyMC9FdmVudHMvQ2hyaXN0bWFzMjAvR1cvbmV3L0NocmlzdG1hcy1HVy1IZXJvLVBDMXguX0NCNDEzNTY0OTQ3Xy5qcGdcIixcbiAgfSxcbl07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICB9LFxuICBpbWc6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSkpO1xuXG5mdW5jdGlvbiBDYXJvdXNlbCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBtYXhTdGVwcyA9IHR1dG9yaWFsU3RlcHMubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdGVwQ2hhbmdlID0gKHN0ZXApID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKHN0ZXApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dG9QbGF5U3dpcGVhYmxlVmlld3NcbiAgICAgIGF4aXM9e3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwieC1yZXZlcnNlXCIgOiBcInhcIn1cbiAgICAgIGluZGV4PXthY3RpdmVTdGVwfVxuICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlU3RlcENoYW5nZX1cbiAgICAgIGVuYWJsZU1vdXNlRXZlbnRzXG4gICAgPlxuICAgICAge3R1dG9yaWFsU3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17c3RlcC5pbWdQYXRofT5cbiAgICAgICAgICB7TWF0aC5hYnMoYWN0aXZlU3RlcCAtIGluZGV4KSA8PSAyID8gKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21lX19pbWFnZVwiIHNyYz17c3RlcC5pbWdQYXRofSBhbHQ9e3N0ZXAubGFiZWx9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9BdXRvUGxheVN3aXBlYWJsZVZpZXdzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTg4ODJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJpbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vdmFsaWRhdGlvbnMvaXNFbXB0eVwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGFkZHJlc3M6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJTRVRfQUREUkVTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFkZHJlc3M6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBiYXNrZXQ6IFtdLFxuICB1c2VyOiBudWxsLFxufTtcblxuLy9TZWxlY3RvclxuZXhwb3J0IGNvbnN0IGdldEJhc2tldFRvdGFsID0gKGJhc2tldCkgPT5cbiAgYmFza2V0Py5yZWR1Y2UoKGFtb3VudCwgaXRlbSkgPT4gcGFyc2VGbG9hdChpdGVtLnByaWNlKSArIGFtb3VudCwgMCk7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhcIkFjdGlvblwiLCBhY3Rpb24pO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9UT19CQVNLRVRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiYXNrZXQ6IFsuLi5zdGF0ZS5iYXNrZXQsIGFjdGlvbi5pdGVtXSxcbiAgICAgIH07XG4gICAgY2FzZSBcIlJFTU9WRV9GUk9NX0JBU0tFVFwiOlxuICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24saWRcIiwgYWN0aW9uLmlkLCBcInN0YXRlLmJhc2tldFwiLCBzdGF0ZS5iYXNrZXQpO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5iYXNrZXQuZmluZEluZGV4KFxuICAgICAgICAoYmFza2V0SXRlbSkgPT4gYmFza2V0SXRlbS5pZCA9PT0gYWN0aW9uLmlkXG4gICAgICApO1xuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5iYXNrZXRdO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbmV3QmFza2V0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYENhbid0IHJlbW92ZSB0aGUgcHJvZHVjdCB3aXRoIChpZDoke2FjdGlvbi5pZH0pYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYmFza2V0OiBuZXdCYXNrZXQsXG4gICAgICB9O1xuICAgIGNhc2UgXCJFTVBUWV9CQVNLRVRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBiYXNrZXQ6IFtdLFxuICAgICAgfTtcbiAgICBjYXNlIFwiU0VUX1VTRVJcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlcixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ2FyZHMuY3NzXCI7XG5cbmZ1bmN0aW9uIEZvdXJJbWFnZUNhcmRzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkczRpbWFnZVwiPlxuICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkczRpbWFnZV9faW1hZ2VzXCI+XG4gICAgICAgIHtwcm9wcy5kYXRhLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBwcm9wcy5kYXRhLm1hcCgoZHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQ0aW1hZ2VfX3NlY3Rpb25zXCIga2V5PXtcImNhcmRzXCIgKyBpbmRleH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtkdC5saW5rfSBhbHQ9XCJpbWFnZV9fY2xcIiAvPlxuICAgICAgICAgICAgICA8cD57ZHQudGl0bGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm91ckltYWdlQ2FyZHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgcmVwb3J0V2ViVml0YWxzIGZyb20gXCIuL3JlcG9ydFdlYlZpdGFsc1wiO1xuaW1wb3J0IHJlZHVjZXIsIHsgaW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gXCIuL1N0YXRlUHJvdmlkZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICA8U3RhdGVQcm92aWRlciBpbml0aWFsU3RhdGU9e2luaXRpYWxTdGF0ZX0gcmVkdWNlcj17cmVkdWNlcn0+XG4gICAgICA8QXBwIC8+XG4gICAgPC9TdGF0ZVByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG5cbi8vIElmIHlvdSB3YW50IHRvIHN0YXJ0IG1lYXN1cmluZyBwZXJmb3JtYW5jZSBpbiB5b3VyIGFwcCwgcGFzcyBhIGZ1bmN0aW9uXG4vLyB0byBsb2cgcmVzdWx0cyAoZm9yIGV4YW1wbGU6IHJlcG9ydFdlYlZpdGFscyhjb25zb2xlLmxvZykpXG4vLyBvciBzZW5kIHRvIGFuIGFuYWx5dGljcyBlbmRwb2ludC4gTGVhcm4gbW9yZTogaHR0cHM6Ly9iaXQubHkvQ1JBLXZpdGFsc1xucmVwb3J0V2ViVml0YWxzKCk7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogU2VydmljZSB3b3JrZXIgY29uZmlndXJhdGlvbiAgKi9cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXG4gICAgICAucmVnaXN0ZXIoXCIuL3N3LmpzXCIpXG4gICAgICAudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1cgcmVnaXN0ZXJlZFwiLCByZWdpc3RyYXRpb24pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgocmVnaXN0cmF0aW9uRXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOlwiLCByZWdpc3RyYXRpb25FcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL1Byb2R1Y3QuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIi4uLy4uL1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBQcm9kdWN0KHsgaWQsIHRpdGxlLCBpbWFnZSwgcHJpY2UsIHJhdGluZyB9KSB7XG4gIGNvbnN0IFt7IGJhc2tldCB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG4gIGNvbnN0IGFkZFRvQmFza2V0ID0gKCkgPT4ge1xuICAgIC8vZGlzcGF0Y2ggdGhlIGl0ZW0gaW50byB0aGUgZGF0YSBsYXllclxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiQUREX1RPX0JBU0tFVFwiLFxuICAgICAgaXRlbToge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgIHJhdGluZzogcmF0aW5nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9faW5mb1wiPlxuICAgICAgICA8cD57dGl0bGUubGVuZ3RoID4gMTAwID8gdGl0bGUuc2xpY2UoMCwgMTAwKSArIFwiLi4uXCIgOiB0aXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX3ByaWNlXCI+XG4gICAgICAgICAgPHNtYWxsPiQ8L3NtYWxsPlxuICAgICAgICAgIDxzdHJvbmc+e3ByaWNlfTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcmF0aW5nXCI+XG4gICAgICAgICAge0FycmF5KHJhdGluZylcbiAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXtpICsgXCJyYXRlXCJ9IGNsYXNzTmFtZT1cInByb2R1Y3RfX3N0YXJfZ29sZFwiPlxuICAgICAgICAgICAgICAgIPCfjJ9cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayB0bz17YC9wcm9kdWN0X3ByZXZpZXcvJHtpZH1gfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJBbWF6b25fc3JjXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9CYXNrZXR9PkFkZCB0byBCYXNrZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9Db21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vQ29tcG9uZW50cy9Ib21lL0hvbWVcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDaGVja291dCBmcm9tIFwiLi9Db21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vQ29tcG9uZW50cy9Mb2dpbi9Mb2dpblwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCIuL1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCBQYXltZW50IGZyb20gXCIuL0NvbXBvbmVudHMvUGF5bWVudC9QYXltZW50XCI7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IE9yZGVycyBmcm9tIFwiLi9Db21wb25lbnRzL09yZGVycy9PcmRlcnNcIjtcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9Db21wb25lbnRzL1JlZ2lzdGVyL1JlZ2lzdGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuL3V0aWxzL3NldEF1dGhUb2tlblwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXIsIGxvZ291dFVzZXIgfSBmcm9tIFwiLi9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IEFkZHJlc3MgZnJvbSBcIi4vQ29tcG9uZW50cy9BZGRyZXNzL0FkZHJlc3NcIjtcbmltcG9ydCBQcm9kdWN0UHJldmlldyBmcm9tIFwiLi9Db21wb25lbnRzL1Byb2R1Y3RQcmV2aWV3L1Byb2R1Y3RQcmV2aWV3XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5cbmNvbnN0IHByb21pc2UgPSBsb2FkU3RyaXBlKFxuICBcInBrX3Rlc3RfNTFIeGVEUENGUmcyZmZJd01aU2xybkdWVXd3NUJoa3ZUNFk5bWtuQmk0NUJxdWdaeVNQZEJMWDU1N3RLazZ3cGJwUzJUQkZEZ2pMZDlDbUk0bVgwQW1oTWswMEdsR0RpS1kzXCJcbik7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3t9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvKiBTZXR0aW5nIHRoZSBzb2NrZXQgaW8gYXBwICovXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjcwMDAvYXBpL3NvY2tldFwiLCB7XG4gICAgICB0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIiwgXCJwb2xsaW5nXCIsIFwiZmxhc2hzb2NrZXRcIl0sXG4gICAgfSk7XG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNPTk5FQ1RJT04gU09DS1wiLCBzb2NrZXQuaWQpOyAvLyB4OFdJdjctbUplbGc3b25fQUxieFxuICAgIH0pO1xuICAgIHNvY2tldC5vbihcInByb2R1Y3RDaGFuZ2VcIiwgKHByb2R1Y3REYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgRGF0YS0tLS0tLS0tLS1YWFhYWFhmZmYtLS0tLS0tLS0+XCIsIHByb2R1Y3REYXRhKTtcbiAgICB9KTtcblxuICAgIC8vY2hlY2sgdGhlIGF1dGhldGljYXRpb24gb2YgdGhlIHVzZXJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmp3dFRva2VuKSB7XG4gICAgICBzZXRBdXRoVG9rZW4obG9jYWxTdG9yYWdlLmp3dFRva2VuKTtcbiAgICAgIC8vRGVjb2RlIHRva2VuIGFuZCBnZXQgdXNlciBpbmZvIGFuZCBleHBcbiAgICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKGxvY2FsU3RvcmFnZS5qd3RUb2tlbik7XG5cbiAgICAgIC8vc2V0IHVzZXIgYW5kIGlzQXV0aGVudGljYXRlZFxuICAgICAgc3RvcmUuZGlzcGF0Y2goc2V0Q3VycmVudFVzZXIoZGVjb2RlZCkpO1xuICAgICAgLy9kaXNwYXRjaCB0byB0aGUgcmVhY3QgY29udGV4dCB0byBzaGFyZSB1c2VyIGRldGFpbHMgaW4gZnVsbCBmb3JtXG4gICAgICBjb25zdCB1c2VyRGV0YWlscyA9IHtcbiAgICAgICAgYXZhdGFyOiBkZWNvZGVkLmF2YXRhcixcbiAgICAgICAgaWQ6IGRlY29kZWQuaWQsXG4gICAgICAgIG5hbWU6IGRlY29kZWQubmFtZSxcbiAgICAgIH07XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX1VTRVJcIixcbiAgICAgICAgdXNlcjogdXNlckRldGFpbHMsXG4gICAgICB9KTtcblxuICAgICAgLy9jaGVjayBpZiB0aGUgdG9rZW4gZXhwaXJlZFxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICAgIGlmIChkZWNvZGVkLmV4cCA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgIC8vbG9nb3V0IHVzZXJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gobG9nb3V0VXNlcigpKTtcbiAgICAgICAgLy9SZWRpcmVjdCB0byBsb2dpblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIC8vQkVNIGNvbnZlbnRpb25cbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxMb2dpbiAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxSZWdpc3RlciAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkZHJlc3NcIj5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8QWRkcmVzcyAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RfcHJldmlldy86aWRcIj5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICA8UHJvZHVjdFByZXZpZXcgLz5cbiAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPENoZWNrb3V0IC8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGF5bWVudFwiPlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxFbGVtZW50cyBzdHJpcGU9e3Byb21pc2V9PlxuICAgICAgICAgICAgICAgIDxQYXltZW50IC8+XG4gICAgICAgICAgICAgIDwvRWxlbWVudHM+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvb3JkZXJzXCI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPE9yZGVycyAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IFNob3BwaW5nQmFza2V0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQmFza2V0XCI7XG5pbXBvcnQgXCIuL0hlYWRlci5jc3NcIjtcbmltcG9ydCB7IExpbmssIHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCIuLi8uLi9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENyZWF0ZVByb2R1Y3QgZnJvbSBcIi4uL0NyZWF0ZVByb2R1Y3QvQ3JlYXRlUHJvZHVjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICBjb25zdCBbeyBiYXNrZXQgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB1c2VyU3RvcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthdXRvQ29tcGxldGUsIHNldEF1dG9Db21wbGV0ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcblxuICAvL3Byb3ZpZGUgZXZlbnQgbGlzdGVuZXJlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9jb21wbGV0ZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9jb21wbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9jb21wbGV0ZVwiKSAhPT0gbnVsbCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b2NvbXBsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICAgIGlmICh1c2VyU3RvcmUudXNlci5pZCkge1xuICAgICAgaGlzdG9yeS5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRNb2RhbFN0YXRlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgaXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBzZXRPcGVuKHJlc3BvbnNlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTW9kYWxPcGVuID0gKGUpID0+IHtcbiAgICBpc0NoYW5nZWQgPSAhaXNDaGFuZ2VkO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIC8vSGFuZGxpbmcgdGhlIHNlcmFjaGluZyBvZiB0aGUgcHJvZHVjdCBhbmQgbGlzdGluZyBpbiB0aGUgbGlzdCBzdHlsZVxuICBjb25zdCBoYW5kbGVTZWFyY2hQcm9kdWN0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAvL0NhbGxpbmcgdGhlIHNlYXJjaCBmb3IgdGhlIGdldHRpbmcgdGhlIGxpc3Qgb2YgaXRlbXMgc3VnZ2VzdGlvblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cy9zZWFyY2hcIiwge1xuICAgICAgcGFyYW1zOiB7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIkhFQURFUiAmJiYkJCQkIElTIFRIRSBSRVNQT05TRS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+XCIsXG4gICAgICByZXNwb25zZVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRvY29tcGxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIHNldEF1dG9Db21wbGV0ZShyZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gIH07XG4gIC8vSGFuZGxpbmcgdGhlIGF1dG8gY29tcGxldGVcbiAgY29uc3QgaGFuZGxlQXV0b0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBlLnRhcmdldC5pZDtcbiAgICBwcm9wcy5oaXN0b3J5LnB1c2goYC9wcm9kdWN0X3ByZXZpZXcvJHtjdXJyZW50SWR9YCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCJcbiAgICAgICAgICBzcmM9XCJodHRwOi8vcG5naW1nLmNvbS91cGxvYWRzL2FtYXpvbi9hbWF6b25fUE5HMTEucG5nXCJcbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2hJbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaFByb2R1Y3R9XG4gICAgICAgIC8+XG4gICAgICAgIDx1bCBpZD1cImF1dG9jb21wbGV0ZVwiPlxuICAgICAgICAgIHthdXRvQ29tcGxldGUubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlLm1hcCgoc3VnKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3N1Zy5faWR9IGlkPXtzdWcuX2lkfSBvbkNsaWNrPXtoYW5kbGVBdXRvQ29tcGxldGV9PlxuICAgICAgICAgICAgICAgIHtzdWcua2V5d29yZHN9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2hJY29uXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdlwiPlxuICAgICAgICA8TGluayB0bz17XCIvbG9naW5cIn0+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVBdXRoZW50aWNhdGlvbn0gY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fb3B0aW9uTGluZU9uZVwiPlxuICAgICAgICAgICAgICBIZWxsbyB7IXVzZXJTdG9yZS51c2VyLmlkID8gXCJHdWVzdFwiIDogdXNlclN0b3JlPy51c2VyPy5uYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25MaW5lVHdvXCI+XG4gICAgICAgICAgICAgIHt1c2VyU3RvcmUudXNlci5pZCA/IFwiU2lnbiBPdXRcIiA6IFwiU2lnbiBJblwifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL29yZGVyc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9fb3B0aW9uTGluZU9uZVwiPlJldHVybnM8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX29wdGlvbkxpbmVUd29cIj4mIE9yZGVyczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fb3B0aW9uXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25MaW5lT25lXCI+WW91cjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX29wdGlvbkxpbmVUd29cIj5QcmltZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt1c2VyU3RvcmUudXNlci5pc1NlbGxlciAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX29wdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25MaW5lT25lXCI+QXMgU2VsbGVyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19vcHRpb25MaW5lVHdvIGhlYWRlcl9fb3Blbk1vZGFsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZU1vZGFsT3BlbihlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIFByb2R1Y3RcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxDcmVhdGVQcm9kdWN0XG4gICAgICAgICAgICAgIGlzQ2hhbmdlZD17aXNDaGFuZ2VkfVxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICBzZXRNb2RhbFN0YXRlPXtzZXRNb2RhbFN0YXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmsgdG89XCIvY2hlY2tvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fb3B0aW9uQmFza2V0XCI+XG4gICAgICAgICAgICA8U2hvcHBpbmdCYXNrZXRJY29uIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfX29wdGlvbkxpbmVUd28gaGVhZGVyX19iYXNrZXRDb3VudFwiPlxuICAgICAgICAgICAgICB7YmFza2V0Lmxlbmd0aH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSGVhZGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MTMyMDA4OTg4OTlcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvcGF3YW4vRGVza3RvcC9yZWFjdC1wcmFjdGljZS9NRVJOX1NUQUNLL2FtYXpvbi1mdWxsL2NsaWVudC9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjEzMjAwODk4OTU4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL3Bhd2FuL0Rlc2t0b3AvcmVhY3QtcHJhY3RpY2UvTUVSTl9TVEFDSy9hbWF6b24tZnVsbC9jbGllbnQvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEN1cnJlbmN5Rm9ybWF0IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXRcIjtcbmltcG9ydCBcIi4vU3VidG90YWwuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIi4uLy4uL1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCB7IGdldEJhc2tldFRvdGFsIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJcIjtcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5mdW5jdGlvbiBTdWJ0b3RhbCgpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgW3sgYmFza2V0IH0sIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRvdGFsXCI+XG4gICAgICA8Q3VycmVuY3lGb3JtYXRcbiAgICAgICAgcmVuZGVyVGV4dD17KHZhbHVlKSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTdWJ0b3RhbCAoe2Jhc2tldD8ubGVuZ3RofSBpdGVtcykgOiA8c3Ryb25nPntgJHt2YWx1ZX1gfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInN1YnRvdGFsX19naWZ0XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICAgICAgICBUaGlzIG9yZGVyIGNvbnRhaW5zIGEgZ2lmdFxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgZGVjaW1hbFNjYWxlPXsyfVxuICAgICAgICB2YWx1ZT17Z2V0QmFza2V0VG90YWwoYmFza2V0KX1cbiAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICB0aG91c2FuZFNlcGVyYXRvcj17dHJ1ZX1cbiAgICAgICAgcHJlZml4PXtcIiRcIn1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoaXN0b3J5LnB1c2goXCIvcGF5bWVudFwiKX0+XG4gICAgICAgIFByb2NlZWQgdG8gQ2hlY2tvdXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJ0b3RhbDtcbiIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3Qgc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB7XG4gIGlmICh0b2tlbikge1xuICAgIC8vQXBwbHkgdG9rZW4gdG8gZXZlcnkgcmVxdWVzdFxuICAgIEF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IHRva2VuO1xuICB9IGVsc2Uge1xuICAgIC8vZGVsZXRlIHRoZSB0b2tlbiBmcm9tIHRoZSBhdXRoIGhlYWRlcnNcbiAgICBkZWxldGUgQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRBdXRoVG9rZW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL09yZGVyLmNzc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gXCIuLi9DaGVja291dFByb2R1Y3QvQ2hlY2tvdXRQcm9kdWN0XCI7XG5pbXBvcnQgQ3VycmVuY3lGb3JtYXQgZnJvbSBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdFwiO1xuXG5mdW5jdGlvbiBPcmRlcih7IG9yZGVyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyXCI+XG4gICAgICA8aDI+T3JkZXI8L2gyPlxuICAgICAgPHA+e21vbWVudChvcmRlci5jcmVhdGVkKS5mb3JtYXQoXCJNTU1NIERvIFlZWVksIGg6bW1hXCIpfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPkRlbGl2ZXJ5PC9zdHJvbmc+OiB7b3JkZXIuYWRkcmVzc0lkLmFyZWF9KFxuICAgICAgICB7b3JkZXIuYWRkcmVzc0lkLnBob25lfVxuICAgICAgICApLFxuICAgICAgICB7b3JkZXIuYWRkcmVzc0lkLmNpdHl9LHtvcmRlci5hZGRyZXNzSWQuc3RhdGV9LHtvcmRlci5hZGRyZXNzSWQuY291bnRyeX1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9yZGVyX19pZFwiPlxuICAgICAgICA8c21hbGw+e29yZGVyLnBheW1lbnRJZH08L3NtYWxsPlxuICAgICAgPC9wPlxuICAgICAge29yZGVyLm9yZGVycz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxDaGVja291dFByb2R1Y3RcbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgcmF0aW5nPXtpdGVtLnJhdGluZ31cbiAgICAgICAgICBoaWRlYnV0dG9uXG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxDdXJyZW5jeUZvcm1hdFxuICAgICAgICByZW5kZXJUZXh0PXsodmFsdWUpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9yZGVyIFRvdGFsIDogPHN0cm9uZz57YCR7dmFsdWV9YH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgZGVjaW1hbFNjYWxlPXsyfVxuICAgICAgICB2YWx1ZT17b3JkZXIucGF5bWVudEFtb3VudH1cbiAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICB0aG91c2FuZFNlcGVyYXRvcj17dHJ1ZX1cbiAgICAgICAgcHJlZml4PXtcIiRcIn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMzIwMDg5OTMyN1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9wYXdhbi9EZXNrdG9wL3JlYWN0LXByYWN0aWNlL01FUk5fU1RBQ0svYW1hem9uLWZ1bGwvY2xpZW50L25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=