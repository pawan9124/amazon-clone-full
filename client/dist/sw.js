var serviceWorkerOption = {"assets":["/0.2fcbd480b9765cdcc8df.js","/app.bundle.css","/app.2843434c4358e7a41584.js","/reactdom.2499d84b9ebe9784a9a7.js","/runtime.b341876cb32e22fdba78.js","/vendors.f1ed94e15df3fc87da96.js","/manifest.json","/favicon.ico","/index.html"]};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JJ5d");
/******/ })
/************************************************************************/
/******/ ({

/***/ "Bnag":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "EbDI":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "Ijbi":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "WkPL");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "JJ5d":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dexie */ "Texg");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Service worker installed to serve first time
 * This is the modular code to define the cache our application apis
 */

/* Dexie is used to save and fetch the data from the IndexedDB */

var assets = global.serviceWorkerOption.assets;
var webpackAssets = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(assets), ["./"]); //configuration for the post data

var postData = {}; //creating the database for the offline

var db = new dexie__WEBPACK_IMPORTED_MODULE_1__["default"]("offline");
db.version(1).stores({
  postrequest: "++id,url,data"
}); //defining the assets to be the static and dynamic

var staticCacheName = "app-static-v1";
var dynamicCacheName = "app-dynamic-v1";
var apiCacheName = "app-api-v1";

var totalAssets = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(webpackAssets);
/*  Limiting the size of the cache not to blot the cache broser memory */


var limitCacheSize = function limitCacheSize(name, size) {
  caches.open(name).then(function (cache) {
    cache.keys().then(function (keys) {
      if (keys.length > size) {
        cache.delete(keys[0].then(function () {
          return limitCacheSize(name, size);
        }));
      }
    });
  });
};
/* Update the cache from the machine */
// const updateCache = (name)=>{
//   caches.open(name).then
// }

/* Installing the service worker on the application */


self.addEventListener("install", function (evt) {
  console.log("Total Cache to be installed====>", totalAssets);
  self.skipWaiting().then(function () {
    self.clients.claim();
    /* This clients to ensure that the underlying service worker take effect immediately for both current client and all other active clients */
  }); //skip the waiting

  evt.waitUntil(caches.open(staticCacheName).then(function (cache) {
    console.log("Caching all assets");
    cache.addAll(totalAssets).then(function (cached) {
      console.info("All Assetss are cached successfully");
    }).catch(function (err) {
      console.error("Error while caching static assets", err);
      throw new Error(err);
    });
  }));
});
/*
 * Activate the service worker here
 * This section is used to perform action after activation
 * Action such as deleting cache
 * Now after the actiavtion of the serive worker we are deleting tghe old cache name and provide only the current cache there waiting for.
 */

self.addEventListener("activate", function (evt) {
  console.info("Service worker has been activate");
  evt.waitUntil(caches.open(staticCacheName).then(function (cache) {
    cache.keys().then(function (keys) {
      var promises = [];

      var _loop = function _loop(i) {
        var split = keys[i].url.split("/");

        if (totalAssets.indexOf("/" + split[split.length - 1]) === -1) {
          promises.push(cache.delete(keys[i]).then(function (res) {
            return console.info("deleting the key", keys[i]);
          }));
        }
      };

      for (var i = 0; i < keys.length; i++) {
        _loop(i);
      }

      Promise.all(promises).then(function () {
        return console.log("All old static caches deleted");
      });
    });
  }));
});
/*
 * Function to save the data to the indexedDB
 */

function saveDataToIndexDB(evt, postData) {
  //Saving the request to the database
  db.postrequest.add({
    url: evt.request.url,
    data: postData
  }).then(function (dataresponse) {
    // console.log("dataresponse", dataresponse);
    return postData;
  }).catch(function (err) {
    // console.error("Post Request saving in IndexedDB failed");
    throw new Error(err);
  });
}
/*
 * This function is used to get the data from the cache and if not present then set to the cache
 * Check if the resource are in cache if not then the request based on the caching of the route
 */


self.addEventListener("fetch", function (evt) {
  // console.info("Fetching the request for the current evt", evt);

  /* We get the data when the application become online, then also return from the cache and also send it back */
  if (evt.request.mode === "navigate") {
    evt.respondWith(caches.match("/index.html"));
  }
  /*
   *Check if the database id empty or not in the database
   * If not empty then requet to the database to send the data back
   * Then continue to fetch the data
   */


  if (evt.request.url.indexOf("/api") === -1) {
    /* TODO-----> Try to cache the GET REQUEST for statics like image not api but cache api in case of offline and use event streams to bring the most relevant products */
    evt.respondWith(caches.match(evt.request).then(function (cacheRes) {
      return cacheRes || fetch(evt.request).then(function (fetchRes) {
        return caches.open(dynamicCacheName).then(function (cache) {
          //Here we update the cache and clone the response of the request then return the response
          return cache.put(evt.request.url, fetchRes.clone()).then(function () {
            limitCacheSize(dynamicCacheName, 50);
            return fetchRes;
          });
        });
      });
    }).catch(function (err) {
      if (evt.request.url.indexOf(".html") > -1) {
        return caches.match("/pages/fallback.html");
      }
    }));
  } else {
    if (evt.request.method !== "POST") {
      /*Functionality to fetch the request other than post and cache it if the request became offline then fetch from the cache */
      evt.respondWith(
      /* First fetch and cache the reponse */
      fetch(evt.request).then(function (fetchRes) {
        console.log("HERE INSIDE _XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", evt.request.url);

        if (evt.request.url.indexOf("/search") === -1) {
          return caches.open(apiCacheName).then(function (cache) {
            return cache.put(evt.request.url, fetchRes.clone()).then(function () {
              limitCacheSize(apiCacheName, 20);
              return fetchRes;
            });
          });
        } else {
          return fetchRes;
        }
      }).catch(function (error) {
        console.log("HERE IN ERROR -----------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", evt.request.url);
        return caches.match(evt.request).then(function (cacheRes) {
          console.log("CACCHES_IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII", cacheRes);
          return cacheRes;
        }).catch(function (err) {
          if (evt.request.url.indexOf(".html") > -1) {
            return caches.match("/pages/fallback.html");
          }
        });
      })
      /* In case of failed event return the response from the cache */
      );
    } else {
      // console.log("HERE IN THE OCOD");

      /*
       * Caching the post request on indexedDatabase and send it when online
       * Not relying on navigator.onLine as it show false connection status
       * So trying to send the set to the index database in the catch functionality
       * Add the data of post to the database or send message to show data will be updated when connection is online
       */
      //To check if the app is online or not
      //If error in requesting means offline
      //and save in database in catch
      console.warn("Checking if ", evt.request.clone().hasOwnProperty("text"));
      var postDataCache = {};
      fetch(evt.request.clone()).then(function (fetchRes) {
        return fetchRes;
      }).catch(function () {
        //Getting the post request method
        //Using clone in the event request is used as without clone the body stream lock error will thrown and can't copy request more than once
        //Checking if the post data
        // console.log("POST----->data", evt.request.url);
        //Check if not login functionality
        if (evt.request.url.indexOf("/login") === -1) {
          evt.request.clone().text().then(function (body) {
            //To check if the form is form-data or just form
            if (body.indexOf("form-data") > -1) {
              evt.request.clone().formData().then(function (formData) {
                var form_data = {
                  formType: "form-data"
                };

                var _iterator = _createForOfIteratorHelper(formData.entries()),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var pair = _step.value;
                    console.log("KEY", pair[0], "Value", pair[1]);
                    form_data[pair[0]] = pair[1];
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                postDataCache = form_data;
                saveDataToIndexDB(evt, postDataCache);
              });
            } else {
              postDataCache = JSON.parse(body);
              saveDataToIndexDB(evt, postDataCache);
            }
          });
        }
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "RIqP":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "Ijbi");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "EbDI");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "ZhPi");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "Texg":
/*!*******************************************!*\
  !*** ./node_modules/dexie/dist/dexie.mjs ***!
  \*******************************************/
/*! exports provided: default, Dexie */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dexie", function() { return Dexie; });
/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.0.3, Wed Nov 18 2020
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
 
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};










function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var keys = Object.keys;
var isArray = Array.isArray;
var _global = typeof self !== 'undefined' ? self :
    typeof window !== 'undefined' ? window :
        global;
if (typeof Promise !== 'undefined' && !_global.Promise) {
    _global.Promise = Promise;
}
function extend(obj, extension) {
    if (typeof extension !== 'object')
        return obj;
    keys(extension).forEach(function (key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === 'function')
        extension = extension(getProto(proto));
    keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ?
        { get: functionOrGetSet.get, set: functionOrGetSet.set, configurable: true } :
        { value: functionOrGetSet, configurable: true, writable: true }, options));
}
function derive(Child) {
    return {
        from: function (Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop);
    var proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b)
        throw new Error("Assertion Failed");
}
function asap(fn) {
    if (_global.setImmediate)
        setImmediate(fn);
    else
        setTimeout(fn, 0);
}

function arrayToObject(array, extractor) {
    return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue)
            result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}

function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    }
    catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath))
        return obj[keyPath];
    if (!keyPath)
        return obj;
    if (typeof keyPath !== 'string') {
        var rv = [];
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf('.');
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined)
        return;
    if ('isFrozen' in Object && Object.isFrozen(obj))
        return;
    if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);
        for (var i = 0, l = keyPath.length; i < l; ++i) {
            setByKeyPath(obj, keyPath[i], value[i]);
        }
    }
    else {
        var period = keyPath.indexOf('.');
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "")
                if (value === undefined) {
                    if (isArray(obj) && !isNaN(parseInt(currentKeyPath)))
                        obj.splice(currentKeyPath, 1);
                    else
                        delete obj[currentKeyPath];
                }
                else
                    obj[currentKeyPath] = value;
            else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj)
                    innerObj = (obj[currentKeyPath] = {});
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        }
        else {
            if (value === undefined) {
                if (isArray(obj) && !isNaN(parseInt(keyPath)))
                    obj.splice(keyPath, 1);
                else
                    delete obj[keyPath];
            }
            else
                obj[keyPath] = value;
        }
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === 'string')
        setByKeyPath(obj, keyPath, undefined);
    else if ('length' in keyPath)
        [].map.call(keyPath, function (kp) {
            setByKeyPath(obj, kp, undefined);
        });
}
function shallowClone(obj) {
    var rv = {};
    for (var m in obj) {
        if (hasOwn(obj, m))
            rv[m] = obj[m];
    }
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
    .split(',').concat(flatten([8, 16, 32, 64].map(function (num) { return ["Int", "Uint", "Float"].map(function (t) { return t + num + "Array"; }); }))).filter(function (t) { return _global[t]; });
var intrinsicTypes = intrinsicTypeNames.map(function (t) { return _global[t]; });
var intrinsicTypeNameSet = arrayToObject(intrinsicTypeNames, function (x) { return [x, true]; });
function deepClone(any) {
    if (!any || typeof any !== 'object')
        return any;
    var rv;
    if (isArray(any)) {
        rv = [];
        for (var i = 0, l = any.length; i < l; ++i) {
            rv.push(deepClone(any[i]));
        }
    }
    else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
    }
    else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};
        for (var prop in any) {
            if (hasOwn(any, prop)) {
                rv[prop] = deepClone(any[prop]);
            }
        }
    }
    return rv;
}
var toString = {}.toString;
function toStringTag(o) {
    return toString.call(o).slice(8, -1);
}
var getValueOf = function (val, type) {
    return type === "Array" ? '' + val.map(function (v) { return getValueOf(v, toStringTag(v)); }) :
        type === "ArrayBuffer" ? '' + new Uint8Array(val) :
            type === "Date" ? val.getTime() :
                ArrayBuffer.isView(val) ? '' + new Uint8Array(val.buffer) :
                    val;
};
function getObjectDiff(a, b, rv, prfx) {
    rv = rv || {};
    prfx = prfx || '';
    keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop))
            rv[prfx + prop] = undefined;
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName === bpTypeName) {
                    if (intrinsicTypeNameSet[apTypeName]) {
                        if (getValueOf(ap, apTypeName) !== getValueOf(bp, bpTypeName)) {
                            rv[prfx + prop] = b[prop];
                        }
                    }
                    else {
                        getObjectDiff(ap, bp, rv, prfx + prop + ".");
                    }
                }
                else {
                    rv[prfx + prop] = b[prop];
                }
            }
            else if (ap !== bp)
                rv[prfx + prop] = b[prop];
        }
    });
    keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
            rv[prfx + prop] = b[prop];
        }
    });
    return rv;
}
var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () { return null; };
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike))
            return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string')
            return [arrayLike];
        if ((it = getIteratorOf(arrayLike))) {
            a = [];
            while (x = it.next(), !x.done)
                a.push(x.value);
            return a;
        }
        if (arrayLike == null)
            return [arrayLike];
        i = arrayLike.length;
        if (typeof i === 'number') {
            a = new Array(i);
            while (i--)
                a[i] = arrayLike[i];
            return a;
        }
        return [arrayLike];
    }
    i = arguments.length;
    a = new Array(i);
    while (i--)
        a[i] = arguments[i];
    return a;
}
var isAsyncFunction = typeof Symbol !== 'undefined'
    ? function (fn) { return fn[Symbol.toStringTag] === 'AsyncFunction'; }
    : function () { return false; };

var debug = typeof location !== 'undefined' &&
    /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function () { return true; };
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK)
        try {
            throw new Error();
        }
        catch (e) {
            return e;
        }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack)
        return "";
    numIgnoredFrames = (numIgnoredFrames || 0);
    if (stack.indexOf(exception.name) === 0)
        numIgnoredFrames += (exception.name + exception.message).split('\n').length;
    return stack.split('\n')
        .slice(numIgnoredFrames)
        .filter(libraryFilter)
        .map(function (frame) { return "\n" + frame; })
        .join('');
}

var dexieErrorNames = [
    'Modify',
    'Bulk',
    'OpenFailed',
    'VersionChange',
    'Schema',
    'Upgrade',
    'InvalidTable',
    'MissingAPI',
    'NoSuchDatabase',
    'InvalidArgument',
    'SubTransaction',
    'Unsupported',
    'Internal',
    'DatabaseClosed',
    'PrematureCommit',
    'ForeignAwait'
];
var idbDomErrorNames = [
    'Unknown',
    'Constraint',
    'Data',
    'TransactionInactive',
    'ReadOnly',
    'Version',
    'NotFound',
    'InvalidState',
    'InvalidAccess',
    'Abort',
    'Timeout',
    'QuotaExceeded',
    'Syntax',
    'DataClone'
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed"
};
function DexieError(name, msg) {
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function () {
            return this._stack ||
                (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function () { return this.name + ": " + this.message; }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures)
        .map(function (key) { return failures[key].toString(); })
        .filter(function (v, i, s) { return s.indexOf(v) === i; })
        .join('\n');
}
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function (obj, name) { return (obj[name] = name + "Error", obj); }, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function (obj, name) {
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        }
        else if (typeof msgOrInner === 'string') {
            this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
            this.inner = inner || null;
        }
        else if (typeof msgOrInner === 'object') {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name])
        return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) {
        setProp(rv, "stack", { get: function () {
                return this.inner.stack;
            } });
    }
    return rv;
}
var fullNameExceptions = errorList.reduce(function (obj, name) {
    if (["Syntax", "Type", "Range"].indexOf(name) === -1)
        obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() { }
function mirror(val) { return val; }
function pureFunctionChain(f1, f2) {
    if (f1 == null || f1 === mirror)
        return f2;
    return function (val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined)
            arguments[0] = res;
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess,
        onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess)
            this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror)
            this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ?
            (res2 === undefined ? undefined : res2) :
            (extend(res, res2));
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        if (f2.apply(this, arguments) === false)
            return false;
        return f1.apply(this, arguments);
    };
}

function promisableChain(f1, f2) {
    if (f1 === nop)
        return f2;
    return function () {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === 'function') {
            var thiz = this, i = arguments.length, args = new Array(i);
            while (i--)
                args[i] = arguments[i];
            return res.then(function () {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}

var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 100;
var _a = typeof Promise === 'undefined' ?
    [] :
    (function () {
        var globalP = Promise.resolve();
        if (typeof crypto === 'undefined' || !crypto.subtle)
            return [globalP, globalP.__proto__, globalP];
        var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
            nativeP,
            nativeP.__proto__,
            globalP
        ];
    })();
var resolvedNativePromise = _a[0];
var nativePromiseProto = _a[1];
var resolvedGlobalPromise = _a[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ?
    function () { resolvedGlobalPromise.then(physicalTick); }
    :
        _global.setImmediate ?
            setImmediate.bind(null, physicalTick) :
            _global.MutationObserver ?
                function () {
                    var hiddenDiv = document.createElement("div");
                    (new MutationObserver(function () {
                        physicalTick();
                        hiddenDiv = null;
                    })).observe(hiddenDiv, { attributes: true });
                    hiddenDiv.setAttribute('i', '1');
                } :
                function () { setTimeout(physicalTick, 0); };
var asap$1 = function (callback, args) {
    microtickQueue.push([callback, args]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror;
var globalPSD = {
    id: 'global',
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function () {
        this.unhandleds.forEach(function (uh) {
            try {
                globalError(uh[0], uh[1]);
            }
            catch (e) { }
        });
    }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
    if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
    this._listeners = [];
    this.onuncatched = nop;
    this._lib = false;
    var psd = (this._PSD = PSD);
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0;
    }
    if (typeof fn !== 'function') {
        if (fn !== INTERNAL)
            throw new TypeError('Not a function');
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false)
            handleRejection(this, this._value);
        return;
    }
    this._state = null;
    this._value = null;
    ++psd.ref;
    executePromiseTask(this, fn);
}
var thenProp = {
    get: function () {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function (resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL;
        return then;
    },
    set: function (value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ?
            thenProp :
            {
                get: function () {
                    return value;
                },
                set: thenProp.set
            });
    }
};
props(DexiePromise.prototype, {
    then: thenProp,
    _then: function (onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function (onRejected) {
        if (arguments.length === 1)
            return this.then(null, onRejected);
        var type = arguments[0], handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
            return err instanceof type ? handler(err) : PromiseReject(err);
        })
            : this.then(null, function (err) {
                return err && err.name === type ? handler(err) : PromiseReject(err);
            });
    },
    finally: function (onFinally) {
        return this.then(function (value) {
            onFinally();
            return value;
        }, function (err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function () {
            if (this._stack)
                return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null)
                    this._stack = stack;
                return stack;
            }
            finally {
                stack_being_generated = false;
            }
        }
    },
    timeout: function (ms, msg) {
        var _this = this;
        return ms < Infinity ?
            new DexiePromise(function (resolve, reject) {
                var handle = setTimeout(function () { return reject(new exceptions.Timeout(msg)); }, ms);
                _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
            }) : this;
    }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
    setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
props(DexiePromise, {
    all: function () {
        var values = getArrayOf.apply(null, arguments)
            .map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            if (values.length === 0)
                resolve([]);
            var remaining = values.length;
            values.forEach(function (a, i) { return DexiePromise.resolve(a).then(function (x) {
                values[i] = x;
                if (!--remaining)
                    resolve(values);
            }, reject); });
        });
    },
    resolve: function (value) {
        if (value instanceof DexiePromise)
            return value;
        if (value && typeof value.then === 'function')
            return new DexiePromise(function (resolve, reject) {
                value.then(resolve, reject);
            });
        var rv = new DexiePromise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function () {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
            values.map(function (value) { return DexiePromise.resolve(value).then(resolve, reject); });
        });
    },
    PSD: {
        get: function () { return PSD; },
        set: function (value) { return PSD = value; }
    },
    totalEchoes: { get: function () { return totalEchoes; } },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function () { return asap$1; },
        set: function (value) { asap$1 = value; }
    },
    rejectionMapper: {
        get: function () { return rejectionMapper; },
        set: function (value) { rejectionMapper = value; }
    },
    follow: function (fn, zoneProps) {
        return new DexiePromise(function (resolve, reject) {
            return newScope(function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject;
                psd.finalize = callBoth(function () {
                    var _this = this;
                    run_at_end_of_this_or_next_physical_tick(function () {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
if (NativePromise) {
    if (NativePromise.allSettled)
        setProp(DexiePromise, "allSettled", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve) {
                if (possiblePromises.length === 0)
                    resolve([]);
                var remaining = possiblePromises.length;
                var results = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return results[i] = { status: "fulfilled", value: value }; }, function (reason) { return results[i] = { status: "rejected", reason: reason }; })
                    .then(function () { return --remaining || resolve(results); }); });
            });
        });
    if (NativePromise.any && typeof AggregateError !== 'undefined')
        setProp(DexiePromise, "any", function () {
            var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
            return new DexiePromise(function (resolve, reject) {
                if (possiblePromises.length === 0)
                    reject(new AggregateError([]));
                var remaining = possiblePromises.length;
                var failures = new Array(remaining);
                possiblePromises.forEach(function (p, i) { return DexiePromise.resolve(p).then(function (value) { return resolve(value); }, function (failure) {
                    failures[i] = failure;
                    if (!--remaining)
                        reject(new AggregateError(failures));
                }); });
            });
        });
}
function executePromiseTask(promise, fn) {
    try {
        fn(function (value) {
            if (promise._state !== null)
                return;
            if (value === promise)
                throw new TypeError('A promise cannot be resolved with itself.');
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === 'function') {
                executePromiseTask(promise, function (resolve, reject) {
                    value instanceof DexiePromise ?
                        value._then(resolve, reject) :
                        value.then(resolve, reject);
                });
            }
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick)
                endMicroTickScope();
        }, handleRejection.bind(null, promise));
    }
    catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null)
        return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function () {
                return stack_being_generated ?
                    origProp && (origProp.get ?
                        origProp.get.apply(reason) :
                        origProp.value) :
                    promise.stack;
            }
        });
    });
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick)
        endMicroTickScope();
}
function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
    }
    var psd = promise._PSD;
    --psd.ref || psd.finalize();
    if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap$1(function () {
            if (--numScheduledCalls === 0)
                finalizePhysicalTick();
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) {
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
    }
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap$1(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
    try {
        currentFulfiller = promise;
        var ret, value = promise._value;
        if (promise._state) {
            ret = cb(value);
        }
        else {
            if (rejectingErrors.length)
                rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1)
                markErrorAsHandled(promise);
        }
        listener.resolve(ret);
    }
    catch (e) {
        listener.reject(e);
    }
    finally {
        currentFulfiller = null;
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit)
        return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        }
        else {
            errorName = failure;
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1)
            stacks.push(stack);
        if (promise._prev)
            getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
function endMicroTickScope() {
    var callbacks, i, l;
    do {
        while (microtickQueue.length > 0) {
            callbacks = microtickQueue;
            microtickQueue = [];
            l = callbacks.length;
            for (i = 0; i < l; ++i) {
                var item = callbacks[i];
                item[0].apply(null, item[1]);
            }
        }
    } while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0);
    var i = finalizers.length;
    while (i)
        finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap$1(function () {
        if (--numScheduledCalls === 0)
            finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    if (!unhandledErrors.some(function (p) { return p._value === promise._value; }))
        unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    var i = unhandledErrors.length;
    while (i)
        if (unhandledErrors[--i]._value === promise._value) {
            unhandledErrors.splice(i, 1);
            return;
        }
}
function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function () {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        }
        catch (e) {
            errorCatcher && errorCatcher(e);
        }
        finally {
            switchToZone(outerScope, false);
            if (wasRootExec)
                endMicroTickScope();
        }
    };
}
var task = { awaits: 0, echoes: 0, id: 0 };
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props$$1, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: { value: DexiePromise, configurable: true, writable: true },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {};
    if (props$$1)
        extend(psd, props$$1);
    ++parent.ref;
    psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0)
        psd.finalize();
    return rv;
}
function incrementExpectedAwaits() {
    if (!task.id)
        task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
function decrementExpectedAwaits() {
    if (!task.awaits)
        return false;
    if (--task.awaits === 0)
        task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    return true;
}
if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
    incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
            decrementExpectedAwaits();
            return x;
        }, function (e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0;
    }
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) {
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    }
    if (targetZone === PSD)
        return;
    PSD = targetZone;
    if (currentZone === globalPSD)
        globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        var GlobalPromise_1 = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise_1.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
            GlobalPromise_1.all = targetEnv.all;
            GlobalPromise_1.race = targetEnv.race;
            GlobalPromise_1.resolve = targetEnv.resolve;
            GlobalPromise_1.reject = targetEnv.reject;
            if (targetEnv.allSettled)
                GlobalPromise_1.allSettled = targetEnv.allSettled;
            if (targetEnv.any)
                GlobalPromise_1.any = targetEnv.any;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    }
    finally {
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait)
            incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            switchToZone(outerZone, false);
            if (cleanup)
                enqueueNativeMicroTask(decrementExpectedAwaits);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    }
    catch (e) { }
    if (rv !== false)
        try {
            var event, eventData = { promise: promise, reason: err };
            if (_global.document && document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(UNHANDLEDREJECTION, true, true);
                extend(event, eventData);
            }
            else if (_global.CustomEvent) {
                event = new CustomEvent(UNHANDLEDREJECTION, { detail: eventData });
                extend(event, eventData);
            }
            if (event && _global.dispatchEvent) {
                dispatchEvent(event);
                if (!_global.PromiseRejectionEvent && _global.onunhandledrejection)
                    try {
                        _global.onunhandledrejection(event);
                    }
                    catch (_) { }
            }
            if (debug && event && !event.defaultPrevented) {
                console.warn("Unhandled rejection: " + (err.stack || err));
            }
        }
        catch (e) { }
}
var rejection = DexiePromise.reject;

function tempTransaction(db, mode, storeNames, fn) {
    if (!db._state.openComplete && (!PSD.letThrough)) {
        if (!db._state.isBeingOpened) {
            if (!db._options.autoOpen)
                return rejection(new exceptions.DatabaseClosed());
            db.open().catch(nop);
        }
        return db._state.dbReadyPromise.then(function () { return tempTransaction(db, mode, storeNames, fn); });
    }
    else {
        var trans = db._createTransaction(mode, storeNames, db._dbSchema);
        try {
            trans.create();
        }
        catch (ex) {
            return rejection(ex);
        }
        return trans._promise(mode, function (resolve, reject) {
            return newScope(function () {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
            });
        }).then(function (result) {
            return trans._completion.then(function () { return result; });
        });
    }
}

var DEXIE_VERSION = '3.0.3';
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function (frame) { return !/(dexie\.js|dexie\.min\.js)/.test(frame); };
var DBNAMES_DB = '__dbnames';
var READONLY = 'readonly';
var READWRITE = 'readwrite';

function combine(filter1, filter2) {
    return filter1 ?
        filter2 ?
            function () { return filter1.apply(this, arguments) && filter2.apply(this, arguments); } :
            filter1 :
        filter2;
}

var AnyRange = {
    type: 3          ,
    lower: -Infinity,
    lowerOpen: false,
    upper: [[]],
    upperOpen: false
};

function workaroundForUndefinedPrimKey(keyPath) {
    return function (obj) {
        if (getByKeyPath(obj, keyPath) === undefined) {
            obj = deepClone(obj);
            delByKeyPath(obj, keyPath);
        }
        return obj;
    };
}

var Table =               (function () {
    function Table() {
    }
    Table.prototype._trans = function (mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;
        function checkTableInTransaction(resolve, reject, trans) {
            if (!trans.schema[tableName])
                throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans.idbtrans, trans);
        }
        var wasRootExec = beginMicroTickScope();
        try {
            return trans && trans.db === this.db ?
                trans === PSD.trans ?
                    trans._promise(mode, checkTableInTransaction, writeLocked) :
                    newScope(function () { return trans._promise(mode, checkTableInTransaction, writeLocked); }, { trans: trans, transless: PSD.transless || PSD }) :
                tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
        }
        finally {
            if (wasRootExec)
                endMicroTickScope();
        }
    };
    Table.prototype.get = function (keyOrCrit, cb) {
        var _this = this;
        if (keyOrCrit && keyOrCrit.constructor === Object)
            return this.where(keyOrCrit).first(cb);
        return this._trans('readonly', function (trans) {
            return _this.core.get({ trans: trans, key: keyOrCrit })
                .then(function (res) { return _this.hook.reading.fire(res); });
        }).then(cb);
    };
    Table.prototype.where = function (indexOrCrit) {
        if (typeof indexOrCrit === 'string')
            return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit))
            return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1)
            return this
                .where(keyPaths[0])
                .equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
            return ix.compound &&
                keyPaths.every(function (keyPath) { return ix.keyPath.indexOf(keyPath) >= 0; }) &&
                ix.keyPath.every(function (keyPath) { return keyPaths.indexOf(keyPath) >= 0; });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString)
            return this
                .where(compoundIndex.name)
                .equals(compoundIndex.keyPath.map(function (kp) { return indexOrCrit[kp]; }));
        if (!compoundIndex && debug)
            console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " +
                ("compound index [" + keyPaths.join('+') + "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;
        function equals(a, b) {
            try {
                return idb.cmp(a, b) === 0;
            }
            catch (e) {
                return false;
            }
        }
        var _a = keyPaths.reduce(function (_a, keyPath) {
            var prevIndex = _a[0], prevFilterFn = _a[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
                prevIndex || index,
                prevIndex || !index ?
                    combine(prevFilterFn, index && index.multi ?
                        function (x) {
                            var prop = getByKeyPath(x, keyPath);
                            return isArray(prop) && prop.some(function (item) { return equals(value, item); });
                        } : function (x) { return equals(value, getByKeyPath(x, keyPath)); })
                    : prevFilterFn
            ];
        }, [null, null]), idx = _a[0], filterFunction = _a[1];
        return idx ?
            this.where(idx.name).equals(indexOrCrit[idx.keyPath])
                .filter(filterFunction) :
            compoundIndex ?
                this.filter(filterFunction) :
                this.where(keyPaths).equals('');
    };
    Table.prototype.filter = function (filterFunction) {
        return this.toCollection().and(filterFunction);
    };
    Table.prototype.count = function (thenShortcut) {
        return this.toCollection().count(thenShortcut);
    };
    Table.prototype.offset = function (offset) {
        return this.toCollection().offset(offset);
    };
    Table.prototype.limit = function (numRows) {
        return this.toCollection().limit(numRows);
    };
    Table.prototype.each = function (callback) {
        return this.toCollection().each(callback);
    };
    Table.prototype.toArray = function (thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
    };
    Table.prototype.toCollection = function () {
        return new this.db.Collection(new this.db.WhereClause(this));
    };
    Table.prototype.orderBy = function (index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ?
            "[" + index.join('+') + "]" :
            index));
    };
    Table.prototype.reverse = function () {
        return this.toCollection().reverse();
    };
    Table.prototype.mapToClass = function (constructor) {
        this.schema.mappedClass = constructor;
        var readHook = function (obj) {
            if (!obj)
                return obj;
            var res = Object.create(constructor.prototype);
            for (var m in obj)
                if (hasOwn(obj, m))
                    try {
                        res[m] = obj[m];
                    }
                    catch (_) { }
            return res;
        };
        if (this.schema.readHook) {
            this.hook.reading.unsubscribe(this.schema.readHook);
        }
        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
    };
    Table.prototype.defineClass = function () {
        function Class(content) {
            extend(this, content);
        }
        
        return this.mapToClass(Class);
    };
    Table.prototype.add = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'add', keys: key != null ? [key] : null, values: [objToAdd] });
        }).then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.update = function (keyOrObject, modifications) {
        if (typeof modifications !== 'object' || isArray(modifications))
            throw new exceptions.InvalidArgument("Modifications must be an object.");
        if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
            keys(modifications).forEach(function (keyPath) {
                setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
            });
            var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
            if (key === undefined)
                return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            return this.where(":id").equals(key).modify(modifications);
        }
        else {
            return this.where(":id").equals(keyOrObject).modify(modifications);
        }
    };
    Table.prototype.put = function (obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) {
            objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        }
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'put', values: [objToAdd], keys: key != null ? [key] : null }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult; })
            .then(function (lastResult) {
            if (keyPath) {
                try {
                    setByKeyPath(obj, keyPath, lastResult);
                }
                catch (_) { }
                
            }
            return lastResult;
        });
    };
    Table.prototype.delete = function (key) {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'delete', keys: [key] }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.clear = function () {
        var _this = this;
        return this._trans('readwrite', function (trans) { return _this.core.mutate({ trans: trans, type: 'deleteRange', range: AnyRange }); })
            .then(function (res) { return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined; });
    };
    Table.prototype.bulkGet = function (keys$$1) {
        var _this = this;
        return this._trans('readonly', function (trans) {
            return _this.core.getMany({
                keys: keys$$1,
                trans: trans
            }).then(function (result) { return result.map(function (res) { return _this.hook.reading.fire(res); }); });
        });
    };
    Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'add', keys: keys$$1, values: objectsToAdd, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
        var _this = this;
        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys$$1)
                throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys$$1 && keys$$1.length !== objects.length)
                throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ?
                objects.map(workaroundForUndefinedPrimKey(keyPath)) :
                objects;
            return _this.core.mutate({ trans: trans, type: 'put', keys: keys$$1, values: objectsToPut, wantResults: wantResults })
                .then(function (_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0)
                    return result;
                throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) { return failures[pos]; }));
            });
        });
    };
    Table.prototype.bulkDelete = function (keys$$1) {
        var _this = this;
        var numKeys = keys$$1.length;
        return this._trans('readwrite', function (trans) {
            return _this.core.mutate({ trans: trans, type: 'delete', keys: keys$$1 });
        }).then(function (_a) {
            var numFailures = _a.numFailures, lastResult = _a.lastResult, failures = _a.failures;
            if (numFailures === 0)
                return lastResult;
            throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
    };
    return Table;
}());

function Events(ctx) {
    var evs = {};
    var rv = function (eventName, subscriber) {
        if (subscriber) {
            var i = arguments.length, args = new Array(i - 1);
            while (--i)
                args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        }
        else if (typeof (eventName) === 'string') {
            return evs[eventName];
        }
    };
    rv.addEventType = add;
    for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
    }
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object')
            return addConfiguredEvents(eventName);
        if (!chainFunction)
            chainFunction = reverseStoppableEventChain;
        if (!defaultFunction)
            defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function (cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function (cb) {
                context.subscribers = context.subscribers.filter(function (fn) { return fn !== cb; });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function (eventName) {
            var args = cfg[eventName];
            if (isArray(args)) {
                add(eventName, cfg[eventName][0], cfg[eventName][1]);
            }
            else if (args === 'asap') {
                var context = add(eventName, mirror, function fire() {
                    var i = arguments.length, args = new Array(i);
                    while (i--)
                        args[i] = arguments[i];
                    context.subscribers.forEach(function (fn) {
                        asap(function fireEvent() {
                            fn.apply(null, args);
                        });
                    });
                });
            }
            else
                throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}

function makeClassConstructor(prototype, constructor) {
    derive(constructor).from({ prototype: prototype });
    return constructor;
}

function createTableConstructor(db) {
    return makeClassConstructor(Table.prototype, function Table$$1(name, tableSchema, trans) {
        this.db = db;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
            "creating": [hookCreatingChain, nop],
            "reading": [pureFunctionChain, mirror],
            "updating": [hookUpdatingChain, nop],
            "deleting": [hookDeletingChain, nop]
        });
    });
}

function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) &&
        (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function () { return combine(curr(), factory()); } : factory;
    ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
    ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey)
        return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index)
        throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
}
function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === 'prev',
        unique: !!ctx.unique,
        query: {
            index: index,
            range: ctx.range
        }
    });
}
function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (!ctx.or) {
        return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
    }
    else {
        var set_1 = {};
        var union = function (item, cursor, advance) {
            if (!filter || filter(cursor, advance, function (result) { return cursor.stop(result); }, function (err) { return cursor.fail(err); })) {
                var primaryKey = cursor.primaryKey;
                var key = '' + primaryKey;
                if (key === '[object ArrayBuffer]')
                    key = '' + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                    set_1[key] = true;
                    fn(item, cursor, advance);
                }
            }
        };
        return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
    }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
    var mappedFn = valueMapper ? function (x, c, a) { return fn(valueMapper(x), c, a); } : fn;
    var wrappedFn = wrap(mappedFn);
    return cursorPromise.then(function (cursor) {
        if (cursor) {
            return cursor.start(function () {
                var c = function () { return cursor.continue(); };
                if (!filter || filter(cursor, function (advancer) { return c = advancer; }, function (val) { cursor.stop(val); c = nop; }, function (e) { cursor.fail(e); c = nop; }))
                    wrappedFn(cursor.value, cursor, function (advancer) { return c = advancer; });
                c();
            });
        }
    });
}

var Collection =               (function () {
    function Collection() {
    }
    Collection.prototype._read = function (fn, cb) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readonly', fn).then(cb);
    };
    Collection.prototype._write = function (fn) {
        var ctx = this._ctx;
        return ctx.error ?
            ctx.table._trans(null, rejection.bind(null, ctx.error)) :
            ctx.table._trans('readwrite', fn, "locked");
    };
    Collection.prototype._addAlgorithm = function (fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
    };
    Collection.prototype._iterate = function (fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    };
    Collection.prototype.clone = function (props$$1) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        if (props$$1)
            extend(ctx, props$$1);
        rv._ctx = ctx;
        return rv;
    };
    Collection.prototype.raw = function () {
        this._ctx.valueMapper = null;
        return this;
    };
    Collection.prototype.each = function (fn) {
        var ctx = this._ctx;
        return this._read(function (trans) { return iter(ctx, fn, trans, ctx.table.core); });
    };
    Collection.prototype.count = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) {
                return coreTable.count({
                    trans: trans,
                    query: {
                        index: getIndexOrStore(ctx, coreTable.schema),
                        range: ctx.range
                    }
                }).then(function (count) { return Math.min(count, ctx.limit); });
            }
            else {
                var count = 0;
                return iter(ctx, function () { ++count; return false; }, trans, coreTable)
                    .then(function () { return count; });
            }
        }).then(cb);
    };
    Collection.prototype.sortBy = function (keyPath, cb) {
        var parts = keyPath.split('.').reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
            if (i)
                return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
        }
        var order = this._ctx.dir === "next" ? 1 : -1;
        function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }
        return this.toArray(function (a) {
            return a.sort(sorter);
        }).then(cb);
    };
    Collection.prototype.toArray = function (cb) {
        var _this = this;
        return this._read(function (trans) {
            var ctx = _this._ctx;
            if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    limit: ctx.limit,
                    values: true,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                }).then(function (_a) {
                    var result = _a.result;
                    return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
            }
            else {
                var a_1 = [];
                return iter(ctx, function (item) { return a_1.push(item); }, trans, ctx.table.core).then(function () { return a_1; });
            }
        }, cb);
    };
    Collection.prototype.offset = function (offset) {
        var ctx = this._ctx;
        if (offset <= 0)
            return this;
        ctx.offset += offset;
        if (isPlainKeyRange(ctx)) {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function (cursor, advance) {
                    if (offsetLeft === 0)
                        return true;
                    if (offsetLeft === 1) {
                        --offsetLeft;
                        return false;
                    }
                    advance(function () {
                        cursor.advance(offsetLeft);
                        offsetLeft = 0;
                    });
                    return false;
                };
            });
        }
        else {
            addReplayFilter(ctx, function () {
                var offsetLeft = offset;
                return function () { return (--offsetLeft < 0); };
            });
        }
        return this;
    };
    Collection.prototype.limit = function (numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function () {
            var rowsLeft = numRows;
            return function (cursor, advance, resolve) {
                if (--rowsLeft <= 0)
                    advance(resolve);
                return rowsLeft >= 0;
            };
        }, true);
        return this;
    };
    Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function (cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
            }
            else {
                return true;
            }
        });
        return this;
    };
    Collection.prototype.first = function (cb) {
        return this.limit(1).toArray(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.last = function (cb) {
        return this.reverse().first(cb);
    };
    Collection.prototype.filter = function (filterFunction) {
        addFilter(this._ctx, function (cursor) {
            return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
    };
    Collection.prototype.and = function (filter) {
        return this.filter(filter);
    };
    Collection.prototype.or = function (indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
    };
    Collection.prototype.reverse = function () {
        this._ctx.dir = (this._ctx.dir === "prev" ? "next" : "prev");
        if (this._ondirectionchange)
            this._ondirectionchange(this._ctx.dir);
        return this;
    };
    Collection.prototype.desc = function () {
        return this.reverse();
    };
    Collection.prototype.eachKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.key, cursor); });
    };
    Collection.prototype.eachUniqueKey = function (cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
    };
    Collection.prototype.eachPrimaryKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) { cb(cursor.primaryKey, cursor); });
    };
    Collection.prototype.keys = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.key);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.primaryKeys = function (cb) {
        var ctx = this._ctx;
        if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            return this._read(function (trans) {
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    values: false,
                    limit: ctx.limit,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                });
            }).then(function (_a) {
                var result = _a.result;
                return result;
            }).then(cb);
        }
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
            a.push(cursor.primaryKey);
        }).then(function () {
            return a;
        }).then(cb);
    };
    Collection.prototype.uniqueKeys = function (cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
    };
    Collection.prototype.firstKey = function (cb) {
        return this.limit(1).keys(function (a) { return a[0]; }).then(cb);
    };
    Collection.prototype.lastKey = function (cb) {
        return this.reverse().firstKey(cb);
    };
    Collection.prototype.distinct = function () {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi)
            return this;
        var set = {};
        addFilter(this._ctx, function (cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
        });
        return this;
    };
    Collection.prototype.modify = function (changes) {
        var _this = this;
        var ctx = this._ctx;
        return this._write(function (trans) {
            var modifyer;
            if (typeof changes === 'function') {
                modifyer = changes;
            }
            else {
                var keyPaths = keys(changes);
                var numKeys = keyPaths.length;
                modifyer = function (item) {
                    var anythingModified = false;
                    for (var i = 0; i < numKeys; ++i) {
                        var keyPath = keyPaths[i], val = changes[keyPath];
                        if (getByKeyPath(item, keyPath) !== val) {
                            setByKeyPath(item, keyPath, val);
                            anythingModified = true;
                        }
                    }
                    return anythingModified;
                };
            }
            var coreTable = ctx.table.core;
            var _a = coreTable.schema.primaryKey, outbound = _a.outbound, extractKey = _a.extractKey;
            var limit = 'testmode' in Dexie ? 1 : 2000;
            var cmp = _this.db.core.cmp;
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function (expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
                    var pos = _a[_i];
                    totalFailures.push(failures[pos]);
                }
            };
            return _this.clone().primaryKeys().then(function (keys$$1) {
                var nextChunk = function (offset) {
                    var count = Math.min(limit, keys$$1.length - offset);
                    return coreTable.getMany({ trans: trans, keys: keys$$1.slice(offset, offset + count) }).then(function (values) {
                        var addValues = [];
                        var putValues = [];
                        var putKeys = outbound ? [] : null;
                        var deleteKeys = [];
                        for (var i = 0; i < count; ++i) {
                            var origValue = values[i];
                            var ctx_1 = {
                                value: deepClone(origValue),
                                primKey: keys$$1[offset + i]
                            };
                            if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                                if (ctx_1.value == null) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                }
                                else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                                    deleteKeys.push(keys$$1[offset + i]);
                                    addValues.push(ctx_1.value);
                                }
                                else {
                                    putValues.push(ctx_1.value);
                                    if (outbound)
                                        putKeys.push(keys$$1[offset + i]);
                                }
                            }
                        }
                        return Promise.resolve(addValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'add', values: addValues })
                                .then(function (res) {
                                for (var pos in res.failures) {
                                    deleteKeys.splice(parseInt(pos), 1);
                                }
                                applyMutateResult(addValues.length, res);
                            })).then(function (res) { return putValues.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'put', keys: putKeys, values: putValues })
                                .then(function (res) { return applyMutateResult(putValues.length, res); }); }).then(function () { return deleteKeys.length > 0 &&
                            coreTable.mutate({ trans: trans, type: 'delete', keys: deleteKeys })
                                .then(function (res) { return applyMutateResult(deleteKeys.length, res); }); }).then(function () {
                            return keys$$1.length > offset + count && nextChunk(offset + limit);
                        });
                    });
                };
                return nextChunk(0).then(function () {
                    if (totalFailures.length > 0)
                        throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                    return keys$$1.length;
                });
            });
        });
    };
    Collection.prototype.delete = function () {
        var ctx = this._ctx, range = ctx.range;
        if (isPlainKeyRange(ctx) &&
            ((ctx.isPrimKey && !hangsOnDeleteLargeKeyRange) || range.type === 3          ))
         {
            return this._write(function (trans) {
                var primaryKey = ctx.table.core.schema.primaryKey;
                var coreRange = range;
                return ctx.table.core.count({ trans: trans, query: { index: primaryKey, range: coreRange } }).then(function (count) {
                    return ctx.table.core.mutate({ trans: trans, type: 'deleteRange', range: coreRange })
                        .then(function (_a) {
                        var failures = _a.failures, lastResult = _a.lastResult, results = _a.results, numFailures = _a.numFailures;
                        if (numFailures)
                            throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) { return failures[pos]; }), count - numFailures);
                        return count - numFailures;
                    });
                });
            });
        }
        return this.modify(function (value, ctx) { return ctx.value = null; });
    };
    return Collection;
}());

function createCollectionConstructor(db) {
    return makeClassConstructor(Collection.prototype, function Collection$$1(whereClause, keyRangeGenerator) {
        this.db = db;
        var keyRange = AnyRange, error = null;
        if (keyRangeGenerator)
            try {
                keyRange = keyRangeGenerator();
            }
            catch (ex) {
                error = ex;
            }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: (!whereCtx.index || (table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name)),
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
        };
    });
}

function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
}

function fail(collectionOrWhereClause, err, T) {
    var collection = collectionOrWhereClause instanceof WhereClause ?
        new collectionOrWhereClause.Collection(collectionOrWhereClause) :
        collectionOrWhereClause;
    collection._ctx.error = T ? new T(err) : new TypeError(err);
    return collection;
}
function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function () { return rangeEqual(""); }).limit(0);
}
function upperFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toUpperCase(); } :
        function (s) { return s.toLowerCase(); };
}
function lowerFactory(dir) {
    return dir === "next" ?
        function (s) { return s.toLowerCase(); } :
        function (s) { return s.toUpperCase(); };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
    var length = Math.min(key.length, lowerNeedle.length);
    var llp = -1;
    for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp(key[i], upperNeedle[i]) < 0)
                return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp(key[i], lowerNeedle[i]) < 0)
                return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0)
                return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
        }
        if (cmp(key[i], lwrKeyChar) < 0)
            llp = i;
    }
    if (length < lowerNeedle.length && dir === "next")
        return key + upperNeedle.substr(key.length);
    if (length < key.length && dir === "prev")
        return key.substr(0, upperNeedle.length);
    return (llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1));
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
    if (!needles.every(function (s) { return typeof s === 'string'; })) {
        return fail(whereClause, STRING_EXPECTED);
    }
    function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = (dir === "next" ? simpleCompare : simpleCompareReverse);
        var needleBounds = needles.map(function (needle) {
            return { lower: lower(needle), upper: upper(needle) };
        }).sort(function (a, b) {
            return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function (nb) { return nb.upper; });
        lowerNeedles = needleBounds.map(function (nb) { return nb.lower; });
        direction = dir;
        nextKeySuffix = (dir === "next" ? "" : suffix);
    }
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function () { return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix); });
    c._ondirectionchange = function (direction) {
        initDirection(direction);
    };
    var firstPossibleNeedle = 0;
    c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== 'string')
            return false;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
            return true;
        }
        else {
            var lowestPossibleCasing = null;
            for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null)
                    firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
                    lowestPossibleCasing = casing;
                }
            }
            if (lowestPossibleCasing !== null) {
                advance(function () { cursor.continue(lowestPossibleCasing + nextKeySuffix); });
            }
            else {
                advance(resolve);
            }
            return false;
        }
    });
    return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
        type: 2            ,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
    };
}
function rangeEqual(value) {
    return {
        type: 1            ,
        lower: value,
        upper: value
    };
}

var WhereClause =               (function () {
    function WhereClause() {
    }
    Object.defineProperty(WhereClause.prototype, "Collection", {
        get: function () {
            return this._ctx.table.db.Collection;
        },
        enumerable: true,
        configurable: true
    });
    WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;
        try {
            if ((this._cmp(lower, upper) > 0) ||
                (this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)))
                return emptyCollection(this);
            return new this.Collection(this, function () { return createRange(lower, upper, !includeLower, !includeUpper); });
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
    };
    WhereClause.prototype.equals = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return rangeEqual(value); });
    };
    WhereClause.prototype.above = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, true); });
    };
    WhereClause.prototype.aboveOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(value, undefined, false); });
    };
    WhereClause.prototype.below = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value, false, true); });
    };
    WhereClause.prototype.belowOrEqual = function (value) {
        if (value == null)
            return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () { return createRange(undefined, value); });
    };
    WhereClause.prototype.startsWith = function (str) {
        if (typeof str !== 'string')
            return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
    };
    WhereClause.prototype.startsWithIgnoreCase = function (str) {
        if (str === "")
            return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x.indexOf(a[0]) === 0; }, [str], maxString);
    };
    WhereClause.prototype.equalsIgnoreCase = function (str) {
        return addIgnoreCaseAlgorithm(this, function (x, a) { return x === a[0]; }, [str], "");
    };
    WhereClause.prototype.anyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.indexOf(x) !== -1; }, set, "");
    };
    WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) { return a.some(function (n) { return x.indexOf(n) === 0; }); }, set, maxString);
    };
    WhereClause.prototype.anyOf = function () {
        var _this = this;
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;
        try {
            set.sort(compare);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (set.length === 0)
            return emptyCollection(this);
        var c = new this.Collection(this, function () { return createRange(set[0], set[set.length - 1]); });
        c._ondirectionchange = function (direction) {
            compare = (direction === "next" ?
                _this._ascending :
                _this._descending);
            set.sort(compare);
        };
        var i = 0;
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (compare(key, set[i]) > 0) {
                ++i;
                if (i === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (compare(key, set[i]) === 0) {
                return true;
            }
            else {
                advance(function () { cursor.continue(set[i]); });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.notEqual = function (value) {
        return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.noneOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0)
            return new this.Collection(this);
        try {
            set.sort(this._ascending);
        }
        catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set.reduce(function (res, val) { return res ?
            res.concat([[res[res.length - 1][1], val]]) :
            [[minKey, val]]; }, null);
        ranges.push([set[set.length - 1], this.db._maxKey]);
        return this.inAnyRange(ranges, { includeLowers: false, includeUppers: false });
    };
    WhereClause.prototype.inAnyRange = function (ranges, options) {
        var _this = this;
        var cmp = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (ranges.length === 0)
            return emptyCollection(this);
        if (!ranges.every(function (range) {
            return range[0] !== undefined &&
                range[1] !== undefined &&
                ascending(range[0], range[1]) <= 0;
        })) {
            return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }
        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;
        function addRange(ranges, newRange) {
            var i = 0, l = ranges.length;
            for (; i < l; ++i) {
                var range = ranges[i];
                if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                    range[0] = min(range[0], newRange[0]);
                    range[1] = max(range[1], newRange[1]);
                    break;
                }
            }
            if (i === l)
                ranges.push(newRange);
            return ranges;
        }
        var sortDirection = ascending;
        function rangeSorter(a, b) { return sortDirection(a[0], b[0]); }
        var set;
        try {
            set = ranges.reduce(addRange, []);
            set.sort(rangeSorter);
        }
        catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ?
            function (key) { return ascending(key, set[rangePos][1]) > 0; } :
            function (key) { return ascending(key, set[rangePos][1]) >= 0; };
        var keyIsBeforeCurrentEntry = includeLowers ?
            function (key) { return descending(key, set[rangePos][0]) > 0; } :
            function (key) { return descending(key, set[rangePos][0]) >= 0; };
        function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }
        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function () { return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers); });
        c._ondirectionchange = function (direction) {
            if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
            }
            else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
            }
            set.sort(rangeSorter);
        };
        c._addAlgorithm(function (cursor, advance, resolve) {
            var key = cursor.key;
            while (checkKey(key)) {
                ++rangePos;
                if (rangePos === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (keyWithinCurrentRange(key)) {
                return true;
            }
            else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
                return false;
            }
            else {
                advance(function () {
                    if (sortDirection === ascending)
                        cursor.continue(set[rangePos][0]);
                    else
                        cursor.continue(set[rangePos][1]);
                });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.startsWithAnyOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (!set.every(function (s) { return typeof s === 'string'; })) {
            return fail(this, "startsWithAnyOf() only works with strings");
        }
        if (set.length === 0)
            return emptyCollection(this);
        return this.inAnyRange(set.map(function (str) { return [str, str + maxString]; }));
    };
    return WhereClause;
}());

function createWhereClauseConstructor(db) {
    return makeClassConstructor(WhereClause.prototype, function WhereClause$$1(table, index, orCollection) {
        this.db = db;
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
        var indexedDB = db._deps.indexedDB;
        if (!indexedDB)
            throw new exceptions.MissingAPI("indexedDB API missing");
        this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);
        this._descending = function (a, b) { return indexedDB.cmp(b, a); };
        this._max = function (a, b) { return indexedDB.cmp(a, b) > 0 ? a : b; };
        this._min = function (a, b) { return indexedDB.cmp(a, b) < 0 ? a : b; };
        this._IDBKeyRange = db._deps.IDBKeyRange;
    });
}

function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getMaxKey(IdbKeyRange) {
    try {
        IdbKeyRange.only([[]]);
        return [[]];
    }
    catch (e) {
        return maxString;
    }
}

function eventRejectHandler(reject) {
    return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}



function preventDefault(event) {
    if (event.stopPropagation)
        event.stopPropagation();
    if (event.preventDefault)
        event.preventDefault();
}

var Transaction =               (function () {
    function Transaction() {
    }
    Transaction.prototype._lock = function () {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global)
            PSD.lockOwnerFor = this;
        return this;
    };
    Transaction.prototype._unlock = function () {
        assert(!PSD.global);
        if (--this._reculock === 0) {
            if (!PSD.global)
                PSD.lockOwnerFor = null;
            while (this._blockedFuncs.length > 0 && !this._locked()) {
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                    usePSD(fnAndPSD[1], fnAndPSD[0]);
                }
                catch (e) { }
            }
        }
        return this;
    };
    Transaction.prototype._locked = function () {
        return this._reculock && PSD.lockOwnerFor !== this;
    };
    Transaction.prototype.create = function (idbtrans) {
        var _this = this;
        if (!this.mode)
            return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);
        if (!idbtrans && !idbdb) {
            switch (dbOpenError && dbOpenError.name) {
                case "DatabaseClosedError":
                    throw new exceptions.DatabaseClosed(dbOpenError);
                case "MissingAPIError":
                    throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
                default:
                    throw new exceptions.OpenFailed(dbOpenError);
            }
        }
        if (!this.active)
            throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
        idbtrans.onerror = wrap(function (ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function (ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function () {
            _this.active = false;
            _this._resolve();
        });
        return this;
    };
    Transaction.prototype._promise = function (mode, fn, bWriteLock) {
        var _this = this;
        if (mode === 'readwrite' && this.mode !== 'readwrite')
            return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active)
            return rejection(new exceptions.TransactionInactive());
        if (this._locked()) {
            return new DexiePromise(function (resolve, reject) {
                _this._blockedFuncs.push([function () {
                        _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                    }, PSD]);
            });
        }
        else if (bWriteLock) {
            return newScope(function () {
                var p = new DexiePromise(function (resolve, reject) {
                    _this._lock();
                    var rv = fn(resolve, reject, _this);
                    if (rv && rv.then)
                        rv.then(resolve, reject);
                });
                p.finally(function () { return _this._unlock(); });
                p._lib = true;
                return p;
            });
        }
        else {
            var p = new DexiePromise(function (resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then)
                    rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
        }
    };
    Transaction.prototype._root = function () {
        return this.parent ? this.parent._root() : this;
    };
    Transaction.prototype.waitFor = function (promiseLike) {
        var root = this._root();
        var promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) {
            root._waitingFor = root._waitingFor.then(function () { return promise; });
        }
        else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
                ++root._spinCount;
                while (root._waitingQueue.length)
                    (root._waitingQueue.shift())();
                if (root._waitingFor)
                    store.get(-Infinity).onsuccess = spin;
            }());
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function (resolve, reject) {
            promise.then(function (res) { return root._waitingQueue.push(wrap(resolve.bind(null, res))); }, function (err) { return root._waitingQueue.push(wrap(reject.bind(null, err))); }).finally(function () {
                if (root._waitingFor === currentWaitPromise) {
                    root._waitingFor = null;
                }
            });
        });
    };
    Transaction.prototype.abort = function () {
        this.active && this._reject(new exceptions.Abort());
        this.active = false;
    };
    Transaction.prototype.table = function (tableName) {
        var memoizedTables = (this._memoizedTables || (this._memoizedTables = {}));
        if (hasOwn(memoizedTables, tableName))
            return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) {
            throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        }
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
    };
    return Transaction;
}());

function createTransactionConstructor(db) {
    return makeClassConstructor(Transaction.prototype, function Transaction$$1(mode, storeNames, dbschema, parent) {
        var _this = this;
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function () {
            _this.active = false;
            _this.on.complete.fire();
        }, function (e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ?
                _this.parent._reject(e) :
                wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
        });
    });
}

function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
}
function nameFromKeyPath(keyPath) {
    return typeof keyPath === 'string' ?
        keyPath :
        keyPath ? ('[' + [].join.call(keyPath, '+') + ']') : "";
}

function createTableSchema(name, primKey, indexes) {
    return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function (index) { return [index.name, index]; })
    };
}

function getKeyExtractor(keyPath) {
    if (keyPath == null) {
        return function () { return undefined; };
    }
    else if (typeof keyPath === 'string') {
        return getSinglePathKeyExtractor(keyPath);
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}
function getSinglePathKeyExtractor(keyPath) {
    var split = keyPath.split('.');
    if (split.length === 1) {
        return function (obj) { return obj[keyPath]; };
    }
    else {
        return function (obj) { return getByKeyPath(obj, keyPath); };
    }
}

function getEffectiveKeys(primaryKey, req) {
    if (req.type === 'delete')
        return req.keys;
    return req.keys || req.values.map(primaryKey.extractKey);
}
function getExistingValues(table, req, effectiveKeys) {
    return req.type === 'add' ? Promise.resolve(new Array(req.values.length)) :
        table.getMany({ trans: req.trans, keys: effectiveKeys });
}

function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
}

var _id_counter = 0;
function getKeyPathAlias(keyPath) {
    return keyPath == null ?
        ":id" :
        typeof keyPath === 'string' ?
            keyPath :
            "[" + keyPath.join('+') + "]";
}
function createDBCore(db, indexedDB, IdbKeyRange, tmpTrans) {
    var cmp = indexedDB.cmp.bind(indexedDB);
    function extractSchema(db, trans) {
        var tables = arrayify(db.objectStoreNames);
        return {
            schema: {
                name: db.name,
                tables: tables.map(function (table) { return trans.objectStore(table); }).map(function (store) {
                    var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                    var compound = isArray(keyPath);
                    var outbound = keyPath == null;
                    var indexByKeyPath = {};
                    var result = {
                        name: store.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: true,
                            outbound: outbound,
                            compound: compound,
                            keyPath: keyPath,
                            autoIncrement: autoIncrement,
                            unique: true,
                            extractKey: getKeyExtractor(keyPath)
                        },
                        indexes: arrayify(store.indexNames).map(function (indexName) { return store.index(indexName); })
                            .map(function (index) {
                            var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath = index.keyPath;
                            var compound = isArray(keyPath);
                            var result = {
                                name: name,
                                compound: compound,
                                keyPath: keyPath,
                                unique: unique,
                                multiEntry: multiEntry,
                                extractKey: getKeyExtractor(keyPath)
                            };
                            indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                            return result;
                        }),
                        getIndexByKeyPath: function (keyPath) { return indexByKeyPath[getKeyPathAlias(keyPath)]; }
                    };
                    indexByKeyPath[":id"] = result.primaryKey;
                    if (keyPath != null) {
                        indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                    }
                    return result;
                })
            },
            hasGetAll: tables.length > 0 && ('getAll' in trans.objectStore(tables[0])) &&
                !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
                    !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
    }
    function makeIDBKeyRange(range) {
        if (range.type === 3          )
            return null;
        if (range.type === 4            )
            throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        var idbRange = lower === undefined ?
            upper === undefined ?
                null :
                IdbKeyRange.upperBound(upper, !!upperOpen) :
            upper === undefined ?
                IdbKeyRange.lowerBound(lower, !!lowerOpen) :
                IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
    }
    function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;
        function mutate(_a) {
            var trans = _a.trans, type = _a.type, keys$$1 = _a.keys, values = _a.values, range = _a.range, wantResults = _a.wantResults;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type === "put" || type === "add";
                if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange')
                    throw new Error("Invalid operation type: " + type);
                var length = (keys$$1 || values || { length: 1 }).length;
                if (keys$$1 && values && keys$$1.length !== values.length) {
                    throw new Error("Given keys array must have same length as given values array.");
                }
                if (length === 0)
                    return resolve({ numFailures: 0, failures: {}, results: [], lastResult: undefined });
                var results = wantResults && __spreadArrays((keys$$1 ?
                    keys$$1 :
                    getEffectiveKeys(tableSchema.primaryKey, { type: type, keys: keys$$1, values: values })));
                var req;
                var failures = [];
                var numFailures = 0;
                var errorHandler = function (event) {
                    ++numFailures;
                    preventDefault(event);
                    if (results)
                        results[event.target._reqno] = undefined;
                    failures[event.target._reqno] = event.target.error;
                };
                var setResult = function (_a) {
                    var target = _a.target;
                    results[target._reqno] = target.result;
                };
                if (type === 'deleteRange') {
                    if (range.type === 4            )
                        return resolve({ numFailures: numFailures, failures: failures, results: results, lastResult: undefined });
                    if (range.type === 3          )
                        req = store.clear();
                    else
                        req = store.delete(makeIDBKeyRange(range));
                }
                else {
                    var _a = isAddOrPut ?
                        outbound ?
                            [values, keys$$1] :
                            [values, null] :
                        [keys$$1, null], args1 = _a[0], args2 = _a[1];
                    if (isAddOrPut) {
                        for (var i = 0; i < length; ++i) {
                            req = (args2 && args2[i] !== undefined ?
                                store[type](args1[i], args2[i]) :
                                store[type](args1[i]));
                            req._reqno = i;
                            if (results && results[i] === undefined) {
                                req.onsuccess = setResult;
                            }
                            req.onerror = errorHandler;
                        }
                    }
                    else {
                        for (var i = 0; i < length; ++i) {
                            req = store[type](args1[i]);
                            req._reqno = i;
                            req.onerror = errorHandler;
                        }
                    }
                }
                var done = function (event) {
                    var lastResult = event.target.result;
                    if (results)
                        results[length - 1] = lastResult;
                    resolve({
                        numFailures: numFailures,
                        failures: failures,
                        results: results,
                        lastResult: lastResult
                    });
                };
                req.onerror = function (event) {
                    errorHandler(event);
                    done(event);
                };
                req.onsuccess = done;
            });
        }
        function openCursor(_a) {
            var trans = _a.trans, values = _a.values, query = _a.query, reverse = _a.reverse, unique = _a.unique;
            return new Promise(function (resolve, reject) {
                resolve = wrap(resolve);
                var index = query.index, range = query.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ?
                    store :
                    store.index(index.name);
                var direction = reverse ?
                    unique ?
                        "prevunique" :
                        "prev" :
                    unique ?
                        "nextunique" :
                        "next";
                var req = values || !('openKeyCursor' in source) ?
                    source.openCursor(makeIDBKeyRange(range), direction) :
                    source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function (ev) {
                    var cursor = req.result;
                    if (!cursor) {
                        resolve(null);
                        return;
                    }
                    cursor.___id = ++_id_counter;
                    cursor.done = false;
                    var _cursorContinue = cursor.continue.bind(cursor);
                    var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                    if (_cursorContinuePrimaryKey)
                        _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                    var _cursorAdvance = cursor.advance.bind(cursor);
                    var doThrowCursorIsNotStarted = function () { throw new Error("Cursor not started"); };
                    var doThrowCursorIsStopped = function () { throw new Error("Cursor not stopped"); };
                    cursor.trans = trans;
                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                    cursor.fail = wrap(reject);
                    cursor.next = function () {
                        var _this = this;
                        var gotOne = 1;
                        return this.start(function () { return gotOne-- ? _this.continue() : _this.stop(); }).then(function () { return _this; });
                    };
                    cursor.start = function (callback) {
                        var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                            resolveIteration = wrap(resolveIteration);
                            req.onerror = eventRejectHandler(rejectIteration);
                            cursor.fail = rejectIteration;
                            cursor.stop = function (value) {
                                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                                resolveIteration(value);
                            };
                        });
                        var guardedCallback = function () {
                            if (req.result) {
                                try {
                                    callback();
                                }
                                catch (err) {
                                    cursor.fail(err);
                                }
                            }
                            else {
                                cursor.done = true;
                                cursor.start = function () { throw new Error("Cursor behind last entry"); };
                                cursor.stop();
                            }
                        };
                        req.onsuccess = wrap(function (ev) {
                            req.onsuccess = guardedCallback;
                            guardedCallback();
                        });
                        cursor.continue = _cursorContinue;
                        cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                        cursor.advance = _cursorAdvance;
                        guardedCallback();
                        return iterationPromise;
                    };
                    resolve(cursor);
                }, reject);
            });
        }
        function query(hasGetAll) {
            return function (request) {
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var trans = request.trans, values = request.values, limit = request.limit, query = request.query;
                    var nonInfinitLimit = limit === Infinity ? undefined : limit;
                    var index = query.index, range = query.range;
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    if (limit === 0)
                        return resolve({ result: [] });
                    if (hasGetAll) {
                        var req = values ?
                            source.getAll(idbKeyRange, nonInfinitLimit) :
                            source.getAllKeys(idbKeyRange, nonInfinitLimit);
                        req.onsuccess = function (event) { return resolve({ result: event.target.result }); };
                        req.onerror = eventRejectHandler(reject);
                    }
                    else {
                        var count_1 = 0;
                        var req_1 = values || !('openKeyCursor' in source) ?
                            source.openCursor(idbKeyRange) :
                            source.openKeyCursor(idbKeyRange);
                        var result_1 = [];
                        req_1.onsuccess = function (event) {
                            var cursor = req_1.result;
                            if (!cursor)
                                return resolve({ result: result_1 });
                            result_1.push(values ? cursor.value : cursor.primaryKey);
                            if (++count_1 === limit)
                                return resolve({ result: result_1 });
                            cursor.continue();
                        };
                        req_1.onerror = eventRejectHandler(reject);
                    }
                });
            };
        }
        return {
            name: tableName,
            schema: tableSchema,
            mutate: mutate,
            getMany: function (_a) {
                var trans = _a.trans, keys$$1 = _a.keys;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var length = keys$$1.length;
                    var result = new Array(length);
                    var keyCount = 0;
                    var callbackCount = 0;
                    var valueCount = 0;
                    var req;
                    var successHandler = function (event) {
                        var req = event.target;
                        if ((result[req._pos] = req.result) != null)
                            ++valueCount;
                        if (++callbackCount === keyCount)
                            resolve(result);
                    };
                    var errorHandler = eventRejectHandler(reject);
                    for (var i = 0; i < length; ++i) {
                        var key = keys$$1[i];
                        if (key != null) {
                            req = store.get(keys$$1[i]);
                            req._pos = i;
                            req.onsuccess = successHandler;
                            req.onerror = errorHandler;
                            ++keyCount;
                        }
                    }
                    if (keyCount === 0)
                        resolve(result);
                });
            },
            get: function (_a) {
                var trans = _a.trans, key = _a.key;
                return new Promise(function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var req = store.get(key);
                    req.onsuccess = function (event) { return resolve(event.target.result); };
                    req.onerror = eventRejectHandler(reject);
                });
            },
            query: query(hasGetAll),
            openCursor: openCursor,
            count: function (_a) {
                var query = _a.query, trans = _a.trans;
                var index = query.index, range = query.range;
                return new Promise(function (resolve, reject) {
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                    req.onsuccess = wrap(function (ev) { return resolve(ev.target.result); });
                    req.onerror = eventRejectHandler(reject);
                });
            }
        };
    }
    var _a = extractSchema(db, tmpTrans), schema = _a.schema, hasGetAll = _a.hasGetAll;
    var tables = schema.tables.map(function (tableSchema) { return createDbCoreTable(tableSchema); });
    var tableMap = {};
    tables.forEach(function (table) { return tableMap[table.name] = table; });
    return {
        stack: "dbcore",
        transaction: db.transaction.bind(db),
        table: function (name) {
            var result = tableMap[name];
            if (!result)
                throw new Error("Table '" + name + "' not found");
            return tableMap[name];
        },
        cmp: cmp,
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
    };
}

function createMiddlewareStack(stackImpl, middlewares) {
    return middlewares.reduce(function (down, _a) {
        var create = _a.create;
        return (__assign(__assign({}, down), create(down)));
    }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
    var IDBKeyRange = _a.IDBKeyRange, indexedDB = _a.indexedDB;
    var dbcore = createMiddlewareStack(createDBCore(idbdb, indexedDB, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
        dbcore: dbcore
    };
}
function generateMiddlewareStacks(db, tmpTrans) {
    var idbdb = tmpTrans.db;
    var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
    db.core = stacks.dbcore;
    db.tables.forEach(function (table) {
        var tableName = table.name;
        if (db.core.schema.tables.some(function (tbl) { return tbl.name === tableName; })) {
            table.core = db.core.table(tableName);
            if (db[tableName] instanceof db.Table) {
                db[tableName].core = table.core;
            }
        }
    });
}

function setApiOnPlace(db, objs, tableNames, dbschema) {
    tableNames.forEach(function (tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function (obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || ("value" in propDesc && propDesc.value === undefined)) {
                if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
                    setProp(obj, tableName, {
                        get: function () { return this.table(tableName); },
                        set: function (value) {
                            defineProperty(this, tableName, { value: value, writable: true, configurable: true, enumerable: true });
                        }
                    });
                }
                else {
                    obj[tableName] = new db.Table(tableName, schema);
                }
            }
        });
    });
}
function removeTablesApi(db, objs) {
    objs.forEach(function (obj) {
        for (var key in obj) {
            if (obj[key] instanceof db.Table)
                delete obj[key];
        }
    });
}
function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db._dbSchema;
    var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);
    trans.create(idbUpgradeTrans);
    trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans);
    var transless = PSD.transless || PSD;
    newScope(function () {
        PSD.trans = trans;
        PSD.transless = transless;
        if (oldVersion === 0) {
            keys(globalSchema).forEach(function (tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db, idbUpgradeTrans);
            DexiePromise.follow(function () { return db.on.populate.fire(trans); }).catch(rejectTransaction);
        }
        else
            updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
}
function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
    var queue = [];
    var versions = db._versions;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function (v) { return v._cfg.version >= oldVersion; });
    versToRun.forEach(function (version) {
        queue.push(function () {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
            globalSchema = db._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function (tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function (change) {
                if (change.recreate) {
                    throw new exceptions.Upgrade("Not yet support for changing primary key");
                }
                else {
                    var store_1 = idbUpgradeTrans.objectStore(change.name);
                    change.add.forEach(function (idx) { return addIndex(store_1, idx); });
                    change.change.forEach(function (idx) {
                        store_1.deleteIndex(idx.name);
                        addIndex(store_1, idx);
                    });
                    change.del.forEach(function (idxName) { return store_1.deleteIndex(idxName); });
                }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db, idbUpgradeTrans);
                trans._memoizedTables = {};
                anyContentUpgraderHasRun = true;
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function (table) {
                    upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db, [db.Transaction.prototype]);
                setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) {
                    incrementExpectedAwaits();
                }
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function () {
                    returnValue_1 = contentUpgrade(trans);
                    if (returnValue_1) {
                        if (contentUpgradeIsAsync_1) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue_1.then(decrementor, decrementor);
                        }
                    }
                });
                return (returnValue_1 && typeof returnValue_1.then === 'function' ?
                    DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () { return returnValue_1; }));
            }
        });
        queue.push(function (idbtrans) {
            if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                var newSchema = version._cfg.dbschema;
                deleteRemovedTables(newSchema, idbtrans);
            }
            removeTablesApi(db, [db.Transaction.prototype]);
            setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
            trans.schema = db._dbSchema;
        });
    });
    function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) :
            DexiePromise.resolve();
    }
    return runQueue().then(function () {
        createMissingTables(globalSchema, idbUpgradeTrans);
    });
}
function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
        del: [],
        add: [],
        change: []
    };
    var table;
    for (table in oldSchema) {
        if (!newSchema[table])
            diff.del.push(table);
    }
    for (table in newSchema) {
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (!oldDef) {
            diff.add.push([table, newDef]);
        }
        else {
            var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
            };
            if ((
            '' + (oldDef.primKey.keyPath || '')) !== ('' + (newDef.primKey.keyPath || '')) ||
                (oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge))
             {
                change.recreate = true;
                diff.change.push(change);
            }
            else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for (idxName in oldIndexes) {
                    if (!newIndexes[idxName])
                        change.del.push(idxName);
                }
                for (idxName in newIndexes) {
                    var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                    if (!oldIdx)
                        change.add.push(newIdx);
                    else if (oldIdx.src !== newIdx.src)
                        change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
                    diff.change.push(change);
                }
            }
        }
    }
    return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ?
        { keyPath: primKey.keyPath, autoIncrement: primKey.auto } :
        { autoIncrement: primKey.auto });
    indexes.forEach(function (idx) { return addIndex(store, idx); });
    return store;
}
function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function (tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) {
            createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
        }
    });
}
function deleteRemovedTables(newSchema, idbtrans) {
    for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
        var storeName = idbtrans.db.objectStoreNames[i];
        if (newSchema[storeName] == null) {
            idbtrans.db.deleteObjectStore(storeName);
        }
    }
}
function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, { unique: idx.unique, multiEntry: idx.multi });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
    var globalSchema = {};
    var dbStoreNames = slice(idbdb.objectStoreNames, 0);
    dbStoreNames.forEach(function (storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes = [];
        for (var j = 0; j < store.indexNames.length; ++j) {
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    });
    return globalSchema;
}
function readGlobalSchema(db, idbdb, tmpTrans) {
    db.verno = idbdb.version / 10;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
    db._storeNames = slice(idbdb.objectStoreNames, 0);
    setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
    var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
    var diff = getSchemaDiff(installedSchema, db._dbSchema);
    return !(diff.add.length || diff.change.some(function (ch) { return ch.add.length || ch.change.length; }));
}
function adjustToExistingIndexNames(db, schema, idbtrans) {
    var storeNames = idbtrans.db.objectStoreNames;
    for (var i = 0; i < storeNames.length; ++i) {
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db._hasGetAll = 'getAll' in store;
        for (var j = 0; j < store.indexNames.length; ++j) {
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";
            if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                    indexSpec.name = indexName;
                    delete schema[storeName].idxByName[dexieName];
                    schema[storeName].idxByName[indexName] = indexSpec;
                }
            }
        }
    }
    if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) &&
        !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
        _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope &&
        [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
        db._hasGetAll = false;
    }
}
function parseIndexSyntax(primKeyAndIndexes) {
    return primKeyAndIndexes.split(',').map(function (index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
    });
}

var Version =               (function () {
    function Version() {
    }
    Version.prototype._parseStoresSpec = function (stores, outSchema) {
        keys(stores).forEach(function (tableName) {
            if (stores[tableName] !== null) {
                var indexes = parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (primKey.multi)
                    throw new exceptions.Schema("Primary key cannot be multi-valued");
                indexes.forEach(function (idx) {
                    if (idx.auto)
                        throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!idx.keyPath)
                        throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
            }
        });
    };
    Version.prototype.stores = function (stores) {
        var db = this.db;
        this._cfg.storesSource = this._cfg.storesSource ?
            extend(this._cfg.storesSource, stores) :
            stores;
        var versions = db._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function (version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = (version._cfg.dbschema = {});
            version._parseStoresSpec(storesSpec, dbschema);
        });
        db._dbSchema = dbschema;
        removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
        setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
        db._storeNames = keys(dbschema);
        return this;
    };
    Version.prototype.upgrade = function (upgradeFunction) {
        this._cfg.contentUpgrade = upgradeFunction;
        return this;
    };
    return Version;
}());

function createVersionConstructor(db) {
    return makeClassConstructor(Version.prototype, function Version$$1(versionNumber) {
        this.db = db;
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
    });
}

var databaseEnumerator;
function DatabaseEnumerator(indexedDB) {
    var hasDatabasesNative = indexedDB && typeof indexedDB.databases === 'function';
    var dbNamesTable;
    if (!hasDatabasesNative) {
        var db = new Dexie(DBNAMES_DB, { addons: [] });
        db.version(1).stores({ dbnames: 'name' });
        dbNamesTable = db.table('dbnames');
    }
    return {
        getDatabaseNames: function () {
            return hasDatabasesNative
                ?
                    DexiePromise.resolve(indexedDB.databases()).then(function (infos) { return infos
                        .map(function (info) { return info.name; })
                        .filter(function (name) { return name !== DBNAMES_DB; }); })
                :
                    dbNamesTable.toCollection().primaryKeys();
        },
        add: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.put({ name: name }).catch(nop);
        },
        remove: function (name) {
            return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.delete(name).catch(nop);
        }
    };
}
function initDatabaseEnumerator(indexedDB) {
    try {
        databaseEnumerator = DatabaseEnumerator(indexedDB);
    }
    catch (e) { }
}

function vip(fn) {
    return newScope(function () {
        PSD.letThrough = true;
        return fn();
    });
}

function dexieOpen(db) {
    var state = db._state;
    var indexedDB = db._deps.indexedDB;
    if (state.isBeingOpened || db.idbdb)
        return state.dbReadyPromise.then(function () { return state.dbOpenError ?
            rejection(state.dbOpenError) :
            db; });
    debug && (state.openCanceller._stackHolder = getErrorWithStack());
    state.isBeingOpened = true;
    state.dbOpenError = null;
    state.openComplete = false;
    var resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null;
    return DexiePromise.race([state.openCanceller, new DexiePromise(function (resolve, reject) {
            if (!indexedDB)
                throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " +
                    "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
            var dbName = db.name;
            var req = state.autoSchema ?
                indexedDB.open(dbName) :
                indexedDB.open(dbName, Math.round(db.verno * 10));
            if (!req)
                throw new exceptions.MissingAPI("IndexedDB API not available");
            req.onerror = eventRejectHandler(reject);
            req.onblocked = wrap(db._fireOnBlocked);
            req.onupgradeneeded = wrap(function (e) {
                upgradeTransaction = req.transaction;
                if (state.autoSchema && !db._options.allowEmptyDB) {
                    req.onerror = preventDefault;
                    upgradeTransaction.abort();
                    req.result.close();
                    var delreq = indexedDB.deleteDatabase(dbName);
                    delreq.onsuccess = delreq.onerror = wrap(function () {
                        reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                    });
                }
                else {
                    upgradeTransaction.onerror = eventRejectHandler(reject);
                    var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                    db.idbdb = req.result;
                    runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                }
            }, reject);
            req.onsuccess = wrap(function () {
                upgradeTransaction = null;
                var idbdb = db.idbdb = req.result;
                var objectStoreNames = slice(idbdb.objectStoreNames);
                if (objectStoreNames.length > 0)
                    try {
                        var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
                        if (state.autoSchema)
                            readGlobalSchema(db, idbdb, tmpTrans);
                        else {
                            adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                            if (!verifyInstalledSchema(db, tmpTrans)) {
                                console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                            }
                        }
                        generateMiddlewareStacks(db, tmpTrans);
                    }
                    catch (e) {
                    }
                connections.push(db);
                idbdb.onversionchange = wrap(function (ev) {
                    state.vcFired = true;
                    db.on("versionchange").fire(ev);
                });
                databaseEnumerator.add(dbName);
                resolve();
            }, reject);
        })]).then(function () {
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(db.on.ready.fire)).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
                var remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
                state.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(remainders)).then(fireRemainders);
            }
        });
    }).finally(function () {
        state.onReadyBeingFired = null;
    }).then(function () {
        state.isBeingOpened = false;
        return db;
    }).catch(function (err) {
        try {
            upgradeTransaction && upgradeTransaction.abort();
        }
        catch (e) { }
        state.isBeingOpened = false;
        db.close();
        state.dbOpenError = err;
        return rejection(state.dbOpenError);
    }).finally(function () {
        state.openComplete = true;
        resolveDbReady();
    });
}

function awaitIterator(iterator) {
    var callNext = function (result) { return iterator.next(result); }, doThrow = function (error) { return iterator.throw(error); }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function (val) {
            var next = getNext(val), value = next.value;
            return next.done ? value :
                (!value || typeof value.then !== 'function' ?
                    isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) :
                    value.then(onSuccess, onError));
        };
    }
    return step(callNext)();
}

function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2)
        throw new exceptions.InvalidArgument("Too few arguments");
    var args = new Array(i - 1);
    while (--i)
        args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function () {
        var transless = PSD.transless || PSD;
        var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
        var zoneProps = {
            trans: trans,
            transless: transless
        };
        if (parentTransaction) {
            trans.idbtrans = parentTransaction.idbtrans;
        }
        else {
            trans.create();
        }
        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        if (scopeFuncIsAsync) {
            incrementExpectedAwaits();
        }
        var returnValue;
        var promiseFollowed = DexiePromise.follow(function () {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
                if (scopeFuncIsAsync) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue.then(decrementor, decrementor);
                }
                else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
                    returnValue = awaitIterator(returnValue);
                }
            }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === 'function' ?
            DexiePromise.resolve(returnValue).then(function (x) { return trans.active ?
                x
                : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); })
            : promiseFollowed.then(function () { return returnValue; })).then(function (x) {
            if (parentTransaction)
                trans._resolve();
            return trans._completion.then(function () { return x; });
        }).catch(function (e) {
            trans._reject(e);
            return rejection(e);
        });
    });
}

function pad(a, value, count) {
    var result = isArray(a) ? a.slice() : [a];
    for (var i = 0; i < count; ++i)
        result.push(value);
    return result;
}
function createVirtualIndexMiddleware(down) {
    return __assign(__assign({}, down), { table: function (tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                var keyPathAlias = getKeyPathAlias(keyPath);
                var indexList = (indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || []);
                var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
                var isVirtual = keyTail > 0;
                var virtualIndex = __assign(__assign({}, lowLevelIndex), { isVirtual: isVirtual, isPrimaryKey: !isVirtual && lowLevelIndex.isPrimaryKey, keyTail: keyTail,
                    keyLength: keyLength, extractKey: getKeyExtractor(keyPath), unique: !isVirtual && lowLevelIndex.unique });
                indexList.push(virtualIndex);
                if (!virtualIndex.isPrimaryKey) {
                    allVirtualIndexes.push(virtualIndex);
                }
                if (keyLength > 1) {
                    var virtualKeyPath = keyLength === 2 ?
                        keyPath[0] :
                        keyPath.slice(0, keyLength - 1);
                    addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
                }
                indexList.sort(function (a, b) { return a.keyTail - b.keyTail; });
                return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [primaryKey];
            for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
                var index = _a[_i];
                addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
                var result = indexLookup[getKeyPathAlias(keyPath)];
                return result && result[0];
            }
            function translateRange(range, keyTail) {
                return {
                    type: range.type === 1             ?
                        2             :
                        range.type,
                    lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                    lowerOpen: true,
                    upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                    upperOpen: true
                };
            }
            function translateRequest(req) {
                var index = req.query.index;
                return index.isVirtual ? __assign(__assign({}, req), { query: {
                        index: index,
                        range: translateRange(req.query.range, index.keyTail)
                    } }) : req;
            }
            var result = __assign(__assign({}, table), { schema: __assign(__assign({}, schema), { primaryKey: primaryKey, indexes: allVirtualIndexes, getIndexByKeyPath: findBestIndex }), count: function (req) {
                    return table.count(translateRequest(req));
                },
                query: function (req) {
                    return table.query(translateRequest(req));
                },
                openCursor: function (req) {
                    var _a = req.query.index, keyTail = _a.keyTail, isVirtual = _a.isVirtual, keyLength = _a.keyLength;
                    if (!isVirtual)
                        return table.openCursor(req);
                    function createVirtualCursor(cursor) {
                        function _continue(key) {
                            key != null ?
                                cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) :
                                req.unique ?
                                    cursor.continue(pad(cursor.key, req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) :
                                    cursor.continue();
                        }
                        var virtualCursor = Object.create(cursor, {
                            continue: { value: _continue },
                            continuePrimaryKey: {
                                value: function (key, primaryKey) {
                                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                                }
                            },
                            key: {
                                get: function () {
                                    var key = cursor.key;
                                    return keyLength === 1 ?
                                        key[0] :
                                        key.slice(0, keyLength);
                                }
                            },
                            value: {
                                get: function () {
                                    return cursor.value;
                                }
                            }
                        });
                        return virtualCursor;
                    }
                    return table.openCursor(translateRequest(req))
                        .then(function (cursor) { return cursor && createVirtualCursor(cursor); });
                } });
            return result;
        } });
}
var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: createVirtualIndexMiddleware
};

var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function (downCore) { return (__assign(__assign({}, downCore), { table: function (tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;
            var tableMiddleware = __assign(__assign({}, downTable), { mutate: function (req) {
                    var dxTrans = PSD.trans;
                    var _a = dxTrans.table(tableName).hook, deleting = _a.deleting, creating = _a.creating, updating = _a.updating;
                    switch (req.type) {
                        case 'add':
                            if (creating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'put':
                            if (creating.fire === nop && updating.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'delete':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return addPutOrDelete(req); }, true);
                        case 'deleteRange':
                            if (deleting.fire === nop)
                                break;
                            return dxTrans._promise('readwrite', function () { return deleteRange(req); }, true);
                    }
                    return downTable.mutate(req);
                    function addPutOrDelete(req) {
                        var dxTrans = PSD.trans;
                        var keys$$1 = req.keys || getEffectiveKeys(primaryKey, req);
                        if (!keys$$1)
                            throw new Error("Keys missing");
                        req = req.type === 'add' || req.type === 'put' ? __assign(__assign({}, req), { keys: keys$$1, wantResults: true }) :
                         __assign({}, req);
                        if (req.type !== 'delete')
                            req.values = __spreadArrays(req.values);
                        if (req.keys)
                            req.keys = __spreadArrays(req.keys);
                        return getExistingValues(downTable, req, keys$$1).then(function (existingValues) {
                            var contexts = keys$$1.map(function (key, i) {
                                var existingValue = existingValues[i];
                                var ctx = { onerror: null, onsuccess: null };
                                if (req.type === 'delete') {
                                    deleting.fire.call(ctx, key, existingValue, dxTrans);
                                }
                                else if (req.type === 'add' || existingValue === undefined) {
                                    var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                                    if (key == null && generatedPrimaryKey != null) {
                                        key = generatedPrimaryKey;
                                        req.keys[i] = key;
                                        if (!primaryKey.outbound) {
                                            setByKeyPath(req.values[i], primaryKey.keyPath, key);
                                        }
                                    }
                                }
                                else {
                                    var objectDiff = getObjectDiff(existingValue, req.values[i]);
                                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                                    if (additionalChanges_1) {
                                        var requestedValue_1 = req.values[i];
                                        Object.keys(additionalChanges_1).forEach(function (keyPath) {
                                            if (hasOwn(requestedValue_1, keyPath)) {
                                                requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                                            }
                                            else {
                                                setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                            }
                                        });
                                    }
                                }
                                return ctx;
                            });
                            return downTable.mutate(req).then(function (_a) {
                                var failures = _a.failures, results = _a.results, numFailures = _a.numFailures, lastResult = _a.lastResult;
                                for (var i = 0; i < keys$$1.length; ++i) {
                                    var primKey = results ? results[i] : keys$$1[i];
                                    var ctx = contexts[i];
                                    if (primKey == null) {
                                        ctx.onerror && ctx.onerror(failures[i]);
                                    }
                                    else {
                                        ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ?
                                            req.values[i] :
                                            primKey
                                        );
                                    }
                                }
                                return { failures: failures, results: results, numFailures: numFailures, lastResult: lastResult };
                            }).catch(function (error) {
                                contexts.forEach(function (ctx) { return ctx.onerror && ctx.onerror(error); });
                                return Promise.reject(error);
                            });
                        });
                    }
                    function deleteRange(req) {
                        return deleteNextChunk(req.trans, req.range, 10000);
                    }
                    function deleteNextChunk(trans, range, limit) {
                        return downTable.query({ trans: trans, values: false, query: { index: primaryKey, range: range }, limit: limit })
                            .then(function (_a) {
                            var result = _a.result;
                            return addPutOrDelete({ type: 'delete', keys: result, trans: trans }).then(function (res) {
                                if (res.numFailures > 0)
                                    return Promise.reject(res.failures[0]);
                                if (result.length < limit) {
                                    return { failures: [], numFailures: 0, lastResult: undefined };
                                }
                                else {
                                    return deleteNextChunk(trans, __assign(__assign({}, range), { lower: result[result.length - 1], lowerOpen: true }), limit);
                                }
                            });
                        });
                    }
                } });
            return tableMiddleware;
        } })); }
};

var Dexie =               (function () {
    function Dexie(name, options) {
        var _this = this;
        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie.dependencies;
        this._options = options = __assign({
            addons: Dexie.addons, autoOpen: true,
            indexedDB: deps.indexedDB, IDBKeyRange: deps.IDBKeyRange }, options);
        this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: true
        };
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", { ready: [promisableChain, nop] });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
            return function (subscriber, bSticky) {
                Dexie.vip(function () {
                    var state = _this._state;
                    if (state.openComplete) {
                        if (!state.dbOpenError)
                            DexiePromise.resolve().then(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else if (state.onReadyBeingFired) {
                        state.onReadyBeingFired.push(subscriber);
                        if (bSticky)
                            subscribe(subscriber);
                    }
                    else {
                        subscribe(subscriber);
                        var db_1 = _this;
                        if (!bSticky)
                            subscribe(function unsubscribe() {
                                db_1.on.ready.unsubscribe(subscriber);
                                db_1.on.ready.unsubscribe(unsubscribe);
                            });
                    }
                });
            };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function (ev) {
            if (ev.newVersion > 0)
                console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
            else
                console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
            _this.close();
        });
        this.on("blocked", function (ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion)
                console.warn("Dexie.delete('" + _this.name + "') was blocked");
            else
                console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);
        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) { return new _this.Transaction(mode, storeNames, dbschema, parentTransaction); };
        this._fireOnBlocked = function (ev) {
            _this.on("blocked").fire(ev);
            connections
                .filter(function (c) { return c.name === _this.name && c !== _this && !c._state.vcFired; })
                .map(function (c) { return c.on("versionchange").fire(ev); });
        };
        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        addons.forEach(function (addon) { return addon(_this); });
    }
    Dexie.prototype.version = function (versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1)
            throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened)
            throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function (v) { return v._cfg.version === versionNumber; })[0];
        if (versionInstance)
            return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
    };
    Dexie.prototype._whenReady = function (fn) {
        var _this = this;
        return this._state.openComplete || PSD.letThrough ? fn() : new DexiePromise(function (resolve, reject) {
            if (!_this._state.isBeingOpened) {
                if (!_this._options.autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    Dexie.prototype.use = function (_a) {
        var stack = _a.stack, create = _a.create, level = _a.level, name = _a.name;
        if (name)
            this.unuse({ stack: stack, name: name });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({ stack: stack, create: create, level: level == null ? 10 : level, name: name });
        middlewares.sort(function (a, b) { return a.level - b.level; });
        return this;
    };
    Dexie.prototype.unuse = function (_a) {
        var stack = _a.stack, name = _a.name, create = _a.create;
        if (stack && this._middlewares[stack]) {
            this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
                return create ? mw.create !== create :
                    name ? mw.name !== name :
                        false;
            });
        }
        return this;
    };
    Dexie.prototype.open = function () {
        return dexieOpen(this);
    };
    Dexie.prototype.close = function () {
        var idx = connections.indexOf(this), state = this._state;
        if (idx >= 0)
            connections.splice(idx, 1);
        if (this.idbdb) {
            try {
                this.idbdb.close();
            }
            catch (e) { }
            this.idbdb = null;
        }
        this._options.autoOpen = false;
        state.dbOpenError = new exceptions.DatabaseClosed();
        if (state.isBeingOpened)
            state.cancelOpen(state.dbOpenError);
        state.dbReadyPromise = new DexiePromise(function (resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
            state.cancelOpen = reject;
        });
    };
    Dexie.prototype.delete = function () {
        var _this = this;
        var hasArguments = arguments.length > 0;
        var state = this._state;
        return new DexiePromise(function (resolve, reject) {
            var doDelete = function () {
                _this.close();
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function () {
                    databaseEnumerator.remove(_this.name);
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
            };
            if (hasArguments)
                throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (state.isBeingOpened) {
                state.dbReadyPromise.then(doDelete);
            }
            else {
                doDelete();
            }
        });
    };
    Dexie.prototype.backendDB = function () {
        return this.idbdb;
    };
    Dexie.prototype.isOpen = function () {
        return this.idbdb !== null;
    };
    Dexie.prototype.hasBeenClosed = function () {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && (dbOpenError.name === 'DatabaseClosed');
    };
    Dexie.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
    };
    Dexie.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
    };
    Object.defineProperty(Dexie.prototype, "tables", {
        get: function () {
            var _this = this;
            return keys(this._allTables).map(function (name) { return _this._allTables[name]; });
        },
        enumerable: true,
        configurable: true
    });
    Dexie.prototype.transaction = function () {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
        var _this = this;
        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1)
            parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', '');
        var idbMode, storeNames;
        try {
            storeNames = tables.map(function (table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== 'string')
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            if (mode == "r" || mode === READONLY)
                idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE)
                idbMode = READWRITE;
            else
                throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                    if (onlyIfCompatible) {
                        parentTransaction = null;
                    }
                    else
                        throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) {
                    storeNames.forEach(function (storeName) {
                        if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                            if (onlyIfCompatible) {
                                parentTransaction = null;
                            }
                            else
                                throw new exceptions.SubTransaction("Table " + storeName +
                                    " not included in parent transaction.");
                        }
                    });
                }
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
                    parentTransaction = null;
                }
            }
        }
        catch (e) {
            return parentTransaction ?
                parentTransaction._promise(null, function (_, reject) { reject(e); }) :
                rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return (parentTransaction ?
            parentTransaction._promise(idbMode, enterTransaction, "lock") :
            PSD.trans ?
                usePSD(PSD.transless, function () { return _this._whenReady(enterTransaction); }) :
                this._whenReady(enterTransaction));
    };
    Dexie.prototype.table = function (tableName) {
        if (!hasOwn(this._allTables, tableName)) {
            throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }
        return this._allTables[tableName];
    };
    return Dexie;
}());

var Dexie$1 = Dexie;
props(Dexie$1, __assign(__assign({}, fullNameExceptions), {
    delete: function (databaseName) {
        var db = new Dexie$1(databaseName);
        return db.delete();
    },
    exists: function (name) {
        return new Dexie$1(name, { addons: [] }).open().then(function (db) {
            db.close();
            return true;
        }).catch('NoSuchDatabaseError', function () { return false; });
    },
    getDatabaseNames: function (cb) {
        return databaseEnumerator ?
            databaseEnumerator.getDatabaseNames().then(cb) :
            DexiePromise.resolve([]);
    },
    defineClass: function () {
        function Class(content) {
            extend(this, content);
        }
        return Class;
    },
    ignoreTransaction: function (scopeFunc) {
        return PSD.trans ?
            usePSD(PSD.transless, scopeFunc) :
            scopeFunc();
    },
    vip: vip, async: function (generatorFn) {
        return function () {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== 'function')
                    return DexiePromise.resolve(rv);
                return rv;
            }
            catch (e) {
                return rejection(e);
            }
        };
    }, spawn: function (generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== 'function')
                return DexiePromise.resolve(rv);
            return rv;
        }
        catch (e) {
            return rejection(e);
        }
    },
    currentTransaction: {
        get: function () { return PSD.trans || null; }
    }, waitFor: function (promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ?
            Dexie$1.ignoreTransaction(promiseOrFunction) :
            promiseOrFunction)
            .timeout(optionalTimeout || 60000);
        return PSD.trans ?
            PSD.trans.waitFor(promise) :
            promise;
    },
    Promise: DexiePromise,
    debug: {
        get: function () { return debug; },
        set: function (value) {
            setDebug(value, value === 'dexie' ? function () { return true; } : dexieStackFrameFilter);
        }
    },
    derive: derive, extend: extend, props: props, override: override,
    Events: Events,
    getByKeyPath: getByKeyPath, setByKeyPath: setByKeyPath, delByKeyPath: delByKeyPath, shallowClone: shallowClone, deepClone: deepClone, getObjectDiff: getObjectDiff, asap: asap,
    minKey: minKey,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: (function () {
        try {
            return {
                indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
                IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
            };
        }
        catch (e) {
            return { indexedDB: null, IDBKeyRange: null };
        }
    })(),
    semVer: DEXIE_VERSION, version: DEXIE_VERSION.split('.')
        .map(function (n) { return parseInt(n); })
        .reduce(function (p, c, i) { return p + (c / Math.pow(10, i * 2)); }),
    default: Dexie$1,
    Dexie: Dexie$1 }));
Dexie$1.maxKey = getMaxKey(Dexie$1.dependencies.IDBKeyRange);

initDatabaseEnumerator(Dexie.dependencies.indexedDB);
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

/* harmony default export */ __webpack_exports__["default"] = (Dexie);

//# sourceMappingURL=dexie.mjs.map


/***/ }),

/***/ "WkPL":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "ZhPi":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGV4aWUvZGlzdC9kZXhpZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImFzc2V0cyIsImdsb2JhbCIsInNlcnZpY2VXb3JrZXJPcHRpb24iLCJ3ZWJwYWNrQXNzZXRzIiwicG9zdERhdGEiLCJkYiIsIkRleGllIiwidmVyc2lvbiIsInN0b3JlcyIsInBvc3RyZXF1ZXN0Iiwic3RhdGljQ2FjaGVOYW1lIiwiZHluYW1pY0NhY2hlTmFtZSIsImFwaUNhY2hlTmFtZSIsInRvdGFsQXNzZXRzIiwibGltaXRDYWNoZVNpemUiLCJuYW1lIiwic2l6ZSIsImNhY2hlcyIsIm9wZW4iLCJ0aGVuIiwiY2FjaGUiLCJrZXlzIiwibGVuZ3RoIiwiZGVsZXRlIiwic2VsZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb25zb2xlIiwibG9nIiwic2tpcFdhaXRpbmciLCJjbGllbnRzIiwiY2xhaW0iLCJ3YWl0VW50aWwiLCJhZGRBbGwiLCJjYWNoZWQiLCJpbmZvIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIkVycm9yIiwicHJvbWlzZXMiLCJpIiwic3BsaXQiLCJ1cmwiLCJpbmRleE9mIiwicHVzaCIsInJlcyIsIlByb21pc2UiLCJhbGwiLCJzYXZlRGF0YVRvSW5kZXhEQiIsImFkZCIsInJlcXVlc3QiLCJkYXRhIiwiZGF0YXJlc3BvbnNlIiwibW9kZSIsInJlc3BvbmRXaXRoIiwibWF0Y2giLCJjYWNoZVJlcyIsImZldGNoIiwiZmV0Y2hSZXMiLCJwdXQiLCJjbG9uZSIsIm1ldGhvZCIsIndhcm4iLCJoYXNPd25Qcm9wZXJ0eSIsInBvc3REYXRhQ2FjaGUiLCJ0ZXh0IiwiYm9keSIsImZvcm1EYXRhIiwiZm9ybV9kYXRhIiwiZm9ybVR5cGUiLCJlbnRyaWVzIiwicGFpciIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0JBQWdCLGFBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEUsbUJBQW1CLGNBQWM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUIsRUFBRTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEy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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDLG9DQUFvQyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMERBQTBEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InN3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIkpKNWRcIik7XG4iLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiLypcbiAqIFNlcnZpY2Ugd29ya2VyIGluc3RhbGxlZCB0byBzZXJ2ZSBmaXJzdCB0aW1lXG4gKiBUaGlzIGlzIHRoZSBtb2R1bGFyIGNvZGUgdG8gZGVmaW5lIHRoZSBjYWNoZSBvdXIgYXBwbGljYXRpb24gYXBpc1xuICovXG5cbi8qIERleGllIGlzIHVzZWQgdG8gc2F2ZSBhbmQgZmV0Y2ggdGhlIGRhdGEgZnJvbSB0aGUgSW5kZXhlZERCICovXG5cbmltcG9ydCBEZXhpZSBmcm9tIFwiZGV4aWVcIjtcbmNvbnN0IHsgYXNzZXRzIH0gPSBnbG9iYWwuc2VydmljZVdvcmtlck9wdGlvbjtcbmxldCB3ZWJwYWNrQXNzZXRzID0gWy4uLmFzc2V0cywgXCIuL1wiXTtcblxuLy9jb25maWd1cmF0aW9uIGZvciB0aGUgcG9zdCBkYXRhXG5sZXQgcG9zdERhdGEgPSB7fTtcblxuLy9jcmVhdGluZyB0aGUgZGF0YWJhc2UgZm9yIHRoZSBvZmZsaW5lXG5jb25zdCBkYiA9IG5ldyBEZXhpZShcIm9mZmxpbmVcIik7XG5kYi52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gIHBvc3RyZXF1ZXN0OiBcIisraWQsdXJsLGRhdGFcIixcbn0pO1xuXG4vL2RlZmluaW5nIHRoZSBhc3NldHMgdG8gYmUgdGhlIHN0YXRpYyBhbmQgZHluYW1pY1xuY29uc3Qgc3RhdGljQ2FjaGVOYW1lID0gXCJhcHAtc3RhdGljLXYxXCI7XG5jb25zdCBkeW5hbWljQ2FjaGVOYW1lID0gXCJhcHAtZHluYW1pYy12MVwiO1xuY29uc3QgYXBpQ2FjaGVOYW1lID0gXCJhcHAtYXBpLXYxXCI7XG5cbmxldCB0b3RhbEFzc2V0cyA9IFsuLi53ZWJwYWNrQXNzZXRzXTtcblxuLyogIExpbWl0aW5nIHRoZSBzaXplIG9mIHRoZSBjYWNoZSBub3QgdG8gYmxvdCB0aGUgY2FjaGUgYnJvc2VyIG1lbW9yeSAqL1xuXG5jb25zdCBsaW1pdENhY2hlU2l6ZSA9IChuYW1lLCBzaXplKSA9PiB7XG4gIGNhY2hlcy5vcGVuKG5hbWUpLnRoZW4oKGNhY2hlKSA9PiB7XG4gICAgY2FjaGUua2V5cygpLnRoZW4oKGtleXMpID0+IHtcbiAgICAgIGlmIChrZXlzLmxlbmd0aCA+IHNpemUpIHtcbiAgICAgICAgY2FjaGUuZGVsZXRlKFxuICAgICAgICAgIGtleXNbMF0udGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbGltaXRDYWNoZVNpemUobmFtZSwgc2l6ZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKiBVcGRhdGUgdGhlIGNhY2hlIGZyb20gdGhlIG1hY2hpbmUgKi9cblxuLy8gY29uc3QgdXBkYXRlQ2FjaGUgPSAobmFtZSk9Pntcbi8vICAgY2FjaGVzLm9wZW4obmFtZSkudGhlblxuLy8gfVxuXG4vKiBJbnN0YWxsaW5nIHRoZSBzZXJ2aWNlIHdvcmtlciBvbiB0aGUgYXBwbGljYXRpb24gKi9cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiaW5zdGFsbFwiLCAoZXZ0KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVG90YWwgQ2FjaGUgdG8gYmUgaW5zdGFsbGVkPT09PT5cIiwgdG90YWxBc3NldHMpO1xuICBzZWxmLnNraXBXYWl0aW5nKCkudGhlbigoKSA9PiB7XG4gICAgc2VsZi5jbGllbnRzLmNsYWltKCk7XG4gICAgLyogVGhpcyBjbGllbnRzIHRvIGVuc3VyZSB0aGF0IHRoZSB1bmRlcmx5aW5nIHNlcnZpY2Ugd29ya2VyIHRha2UgZWZmZWN0IGltbWVkaWF0ZWx5IGZvciBib3RoIGN1cnJlbnQgY2xpZW50IGFuZCBhbGwgb3RoZXIgYWN0aXZlIGNsaWVudHMgKi9cbiAgfSk7IC8vc2tpcCB0aGUgd2FpdGluZ1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKHN0YXRpY0NhY2hlTmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGluZyBhbGwgYXNzZXRzXCIpO1xuICAgICAgY2FjaGVcbiAgICAgICAgLmFkZEFsbCh0b3RhbEFzc2V0cylcbiAgICAgICAgLnRoZW4oKGNhY2hlZCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIkFsbCBBc3NldHNzIGFyZSBjYWNoZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBjYWNoaW5nIHN0YXRpYyBhc3NldHNcIiwgZXJyKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG4vKlxuICogQWN0aXZhdGUgdGhlIHNlcnZpY2Ugd29ya2VyIGhlcmVcbiAqIFRoaXMgc2VjdGlvbiBpcyB1c2VkIHRvIHBlcmZvcm0gYWN0aW9uIGFmdGVyIGFjdGl2YXRpb25cbiAqIEFjdGlvbiBzdWNoIGFzIGRlbGV0aW5nIGNhY2hlXG4gKiBOb3cgYWZ0ZXIgdGhlIGFjdGlhdnRpb24gb2YgdGhlIHNlcml2ZSB3b3JrZXIgd2UgYXJlIGRlbGV0aW5nIHRnaGUgb2xkIGNhY2hlIG5hbWUgYW5kIHByb3ZpZGUgb25seSB0aGUgY3VycmVudCBjYWNoZSB0aGVyZSB3YWl0aW5nIGZvci5cbiAqL1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCAoZXZ0KSA9PiB7XG4gIGNvbnNvbGUuaW5mbyhcIlNlcnZpY2Ugd29ya2VyIGhhcyBiZWVuIGFjdGl2YXRlXCIpO1xuICBldnQud2FpdFVudGlsKFxuICAgIGNhY2hlcy5vcGVuKHN0YXRpY0NhY2hlTmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgIGNhY2hlLmtleXMoKS50aGVuKChrZXlzKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ID0ga2V5c1tpXS51cmwuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgIGlmICh0b3RhbEFzc2V0cy5pbmRleE9mKFwiL1wiICsgc3BsaXRbc3BsaXQubGVuZ3RoIC0gMV0pID09PSAtMSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgY2FjaGVcbiAgICAgICAgICAgICAgICAuZGVsZXRlKGtleXNbaV0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5pbmZvKFwiZGVsZXRpbmcgdGhlIGtleVwiLCBrZXlzW2ldKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBbGwgb2xkIHN0YXRpYyBjYWNoZXMgZGVsZXRlZFwiKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG4vKlxuICogRnVuY3Rpb24gdG8gc2F2ZSB0aGUgZGF0YSB0byB0aGUgaW5kZXhlZERCXG4gKi9cblxuZnVuY3Rpb24gc2F2ZURhdGFUb0luZGV4REIoZXZ0LCBwb3N0RGF0YSkge1xuICAvL1NhdmluZyB0aGUgcmVxdWVzdCB0byB0aGUgZGF0YWJhc2VcbiAgZGIucG9zdHJlcXVlc3RcbiAgICAuYWRkKHtcbiAgICAgIHVybDogZXZ0LnJlcXVlc3QudXJsLFxuICAgICAgZGF0YTogcG9zdERhdGEsXG4gICAgfSlcbiAgICAudGhlbigoZGF0YXJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFyZXNwb25zZVwiLCBkYXRhcmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHBvc3REYXRhO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJQb3N0IFJlcXVlc3Qgc2F2aW5nIGluIEluZGV4ZWREQiBmYWlsZWRcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9KTtcbn1cblxuLypcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBnZXQgdGhlIGRhdGEgZnJvbSB0aGUgY2FjaGUgYW5kIGlmIG5vdCBwcmVzZW50IHRoZW4gc2V0IHRvIHRoZSBjYWNoZVxuICogQ2hlY2sgaWYgdGhlIHJlc291cmNlIGFyZSBpbiBjYWNoZSBpZiBub3QgdGhlbiB0aGUgcmVxdWVzdCBiYXNlZCBvbiB0aGUgY2FjaGluZyBvZiB0aGUgcm91dGVcbiAqL1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCAoZXZ0KSA9PiB7XG4gIC8vIGNvbnNvbGUuaW5mbyhcIkZldGNoaW5nIHRoZSByZXF1ZXN0IGZvciB0aGUgY3VycmVudCBldnRcIiwgZXZ0KTtcblxuICAvKiBXZSBnZXQgdGhlIGRhdGEgd2hlbiB0aGUgYXBwbGljYXRpb24gYmVjb21lIG9ubGluZSwgdGhlbiBhbHNvIHJldHVybiBmcm9tIHRoZSBjYWNoZSBhbmQgYWxzbyBzZW5kIGl0IGJhY2sgKi9cblxuICBpZiAoZXZ0LnJlcXVlc3QubW9kZSA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgZXZ0LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChcIi9pbmRleC5odG1sXCIpKTtcbiAgfVxuICAvKlxuICAgKkNoZWNrIGlmIHRoZSBkYXRhYmFzZSBpZCBlbXB0eSBvciBub3QgaW4gdGhlIGRhdGFiYXNlXG4gICAqIElmIG5vdCBlbXB0eSB0aGVuIHJlcXVldCB0byB0aGUgZGF0YWJhc2UgdG8gc2VuZCB0aGUgZGF0YSBiYWNrXG4gICAqIFRoZW4gY29udGludWUgdG8gZmV0Y2ggdGhlIGRhdGFcbiAgICovXG5cbiAgaWYgKGV2dC5yZXF1ZXN0LnVybC5pbmRleE9mKFwiL2FwaVwiKSA9PT0gLTEpIHtcbiAgICAvKiBUT0RPLS0tLS0+IFRyeSB0byBjYWNoZSB0aGUgR0VUIFJFUVVFU1QgZm9yIHN0YXRpY3MgbGlrZSBpbWFnZSBub3QgYXBpIGJ1dCBjYWNoZSBhcGkgaW4gY2FzZSBvZiBvZmZsaW5lIGFuZCB1c2UgZXZlbnQgc3RyZWFtcyB0byBicmluZyB0aGUgbW9zdCByZWxldmFudCBwcm9kdWN0cyAqL1xuICAgIGV2dC5yZXNwb25kV2l0aChcbiAgICAgIGNhY2hlc1xuICAgICAgICAubWF0Y2goZXZ0LnJlcXVlc3QpXG4gICAgICAgIC50aGVuKChjYWNoZVJlcykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBjYWNoZVJlcyB8fFxuICAgICAgICAgICAgZmV0Y2goZXZ0LnJlcXVlc3QpLnRoZW4oKGZldGNoUmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbihkeW5hbWljQ2FjaGVOYW1lKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vSGVyZSB3ZSB1cGRhdGUgdGhlIGNhY2hlIGFuZCBjbG9uZSB0aGUgcmVzcG9uc2Ugb2YgdGhlIHJlcXVlc3QgdGhlbiByZXR1cm4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlLnB1dChldnQucmVxdWVzdC51cmwsIGZldGNoUmVzLmNsb25lKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGltaXRDYWNoZVNpemUoZHluYW1pY0NhY2hlTmFtZSwgNTApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmVzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoXCIuaHRtbFwiKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVzLm1hdGNoKFwiL3BhZ2VzL2ZhbGxiYWNrLmh0bWxcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGV2dC5yZXF1ZXN0Lm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICAgIC8qRnVuY3Rpb25hbGl0eSB0byBmZXRjaCB0aGUgcmVxdWVzdCBvdGhlciB0aGFuIHBvc3QgYW5kIGNhY2hlIGl0IGlmIHRoZSByZXF1ZXN0IGJlY2FtZSBvZmZsaW5lIHRoZW4gZmV0Y2ggZnJvbSB0aGUgY2FjaGUgKi9cbiAgICAgIGV2dC5yZXNwb25kV2l0aChcbiAgICAgICAgLyogRmlyc3QgZmV0Y2ggYW5kIGNhY2hlIHRoZSByZXBvbnNlICovXG4gICAgICAgIGZldGNoKGV2dC5yZXF1ZXN0KVxuICAgICAgICAgIC50aGVuKChmZXRjaFJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIFwiSEVSRSBJTlNJREUgX1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiLFxuICAgICAgICAgICAgICBldnQucmVxdWVzdC51cmxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoXCIvc2VhcmNoXCIpID09PSAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVzLm9wZW4oYXBpQ2FjaGVOYW1lKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5wdXQoZXZ0LnJlcXVlc3QudXJsLCBmZXRjaFJlcy5jbG9uZSgpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxpbWl0Q2FjaGVTaXplKGFwaUNhY2hlTmFtZSwgMjApO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmVzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBmZXRjaFJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBcIkhFUkUgSU4gRVJST1IgLS0tLS0tLS0tLS0kJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiLFxuICAgICAgICAgICAgICBldnQucmVxdWVzdC51cmxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVzXG4gICAgICAgICAgICAgIC5tYXRjaChldnQucmVxdWVzdClcbiAgICAgICAgICAgICAgLnRoZW4oKGNhY2hlUmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICBcIkNBQ0NIRVNfSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVwiLFxuICAgICAgICAgICAgICAgICAgY2FjaGVSZXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZVJlcztcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoXCIuaHRtbFwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVzLm1hdGNoKFwiL3BhZ2VzL2ZhbGxiYWNrLmh0bWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAvKiBJbiBjYXNlIG9mIGZhaWxlZCBldmVudCByZXR1cm4gdGhlIHJlc3BvbnNlIGZyb20gdGhlIGNhY2hlICovXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhFUkUgSU4gVEhFIE9DT0RcIik7XG4gICAgICAvKlxuICAgICAgICogQ2FjaGluZyB0aGUgcG9zdCByZXF1ZXN0IG9uIGluZGV4ZWREYXRhYmFzZSBhbmQgc2VuZCBpdCB3aGVuIG9ubGluZVxuICAgICAgICogTm90IHJlbHlpbmcgb24gbmF2aWdhdG9yLm9uTGluZSBhcyBpdCBzaG93IGZhbHNlIGNvbm5lY3Rpb24gc3RhdHVzXG4gICAgICAgKiBTbyB0cnlpbmcgdG8gc2VuZCB0aGUgc2V0IHRvIHRoZSBpbmRleCBkYXRhYmFzZSBpbiB0aGUgY2F0Y2ggZnVuY3Rpb25hbGl0eVxuICAgICAgICogQWRkIHRoZSBkYXRhIG9mIHBvc3QgdG8gdGhlIGRhdGFiYXNlIG9yIHNlbmQgbWVzc2FnZSB0byBzaG93IGRhdGEgd2lsbCBiZSB1cGRhdGVkIHdoZW4gY29ubmVjdGlvbiBpcyBvbmxpbmVcbiAgICAgICAqL1xuXG4gICAgICAvL1RvIGNoZWNrIGlmIHRoZSBhcHAgaXMgb25saW5lIG9yIG5vdFxuICAgICAgLy9JZiBlcnJvciBpbiByZXF1ZXN0aW5nIG1lYW5zIG9mZmxpbmVcbiAgICAgIC8vYW5kIHNhdmUgaW4gZGF0YWJhc2UgaW4gY2F0Y2hcbiAgICAgIGNvbnNvbGUud2FybihcIkNoZWNraW5nIGlmIFwiLCBldnQucmVxdWVzdC5jbG9uZSgpLmhhc093blByb3BlcnR5KFwidGV4dFwiKSk7XG4gICAgICBsZXQgcG9zdERhdGFDYWNoZSA9IHt9O1xuICAgICAgZmV0Y2goZXZ0LnJlcXVlc3QuY2xvbmUoKSlcbiAgICAgICAgLnRoZW4oKGZldGNoUmVzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoUmVzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIC8vR2V0dGluZyB0aGUgcG9zdCByZXF1ZXN0IG1ldGhvZFxuICAgICAgICAgIC8vVXNpbmcgY2xvbmUgaW4gdGhlIGV2ZW50IHJlcXVlc3QgaXMgdXNlZCBhcyB3aXRob3V0IGNsb25lIHRoZSBib2R5IHN0cmVhbSBsb2NrIGVycm9yIHdpbGwgdGhyb3duIGFuZCBjYW4ndCBjb3B5IHJlcXVlc3QgbW9yZSB0aGFuIG9uY2VcblxuICAgICAgICAgIC8vQ2hlY2tpbmcgaWYgdGhlIHBvc3QgZGF0YVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUE9TVC0tLS0tPmRhdGFcIiwgZXZ0LnJlcXVlc3QudXJsKTtcblxuICAgICAgICAgIC8vQ2hlY2sgaWYgbm90IGxvZ2luIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICBpZiAoZXZ0LnJlcXVlc3QudXJsLmluZGV4T2YoXCIvbG9naW5cIikgPT09IC0xKSB7XG4gICAgICAgICAgICBldnQucmVxdWVzdFxuICAgICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgICAudGV4dCgpXG4gICAgICAgICAgICAgIC50aGVuKChib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9UbyBjaGVjayBpZiB0aGUgZm9ybSBpcyBmb3JtLWRhdGEgb3IganVzdCBmb3JtXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkuaW5kZXhPZihcImZvcm0tZGF0YVwiKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICBldnQucmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAuZm9ybURhdGEoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZm9ybURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVR5cGU6IFwiZm9ybS1kYXRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhaXIgb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktFWVwiLCBwYWlyWzBdLCBcIlZhbHVlXCIsIHBhaXJbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybV9kYXRhW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdERhdGFDYWNoZSA9IGZvcm1fZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICBzYXZlRGF0YVRvSW5kZXhEQihldnQsIHBvc3REYXRhQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcG9zdERhdGFDYWNoZSA9IEpTT04ucGFyc2UoYm9keSk7XG4gICAgICAgICAgICAgICAgICBzYXZlRGF0YVRvSW5kZXhEQihldnQsIHBvc3REYXRhQ2FjaGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsIi8qXG4gKiBEZXhpZS5qcyAtIGEgbWluaW1hbGlzdGljIHdyYXBwZXIgZm9yIEluZGV4ZWREQlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBCeSBEYXZpZCBGYWhsYW5kZXIsIGRhdmlkLmZhaGxhbmRlckBnbWFpbC5jb21cbiAqXG4gKiBWZXJzaW9uIDMuMC4zLCBXZWQgTm92IDE4IDIwMjBcbiAqXG4gKiBodHRwOi8vZGV4aWUub3JnXG4gKlxuICogQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIEphbnVhcnkgMjAwNCwgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1xuICovXG4gXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59XG5cbnZhciBrZXlzID0gT2JqZWN0LmtleXM7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgX2dsb2JhbCA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDpcbiAgICAgICAgZ2xvYmFsO1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhX2dsb2JhbC5Qcm9taXNlKSB7XG4gICAgX2dsb2JhbC5Qcm9taXNlID0gUHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChvYmosIGV4dGVuc2lvbikge1xuICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICBrZXlzKGV4dGVuc2lvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIG9ialtrZXldID0gZXh0ZW5zaW9uW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBoYXNPd24ob2JqLCBwcm9wKSB7XG4gICAgcmV0dXJuIF9oYXNPd24uY2FsbChvYmosIHByb3ApO1xufVxuZnVuY3Rpb24gcHJvcHMocHJvdG8sIGV4dGVuc2lvbikge1xuICAgIGlmICh0eXBlb2YgZXh0ZW5zaW9uID09PSAnZnVuY3Rpb24nKVxuICAgICAgICBleHRlbnNpb24gPSBleHRlbnNpb24oZ2V0UHJvdG8ocHJvdG8pKTtcbiAgICBrZXlzKGV4dGVuc2lvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHNldFByb3AocHJvdG8sIGtleSwgZXh0ZW5zaW9uW2tleV0pO1xuICAgIH0pO1xufVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuZnVuY3Rpb24gc2V0UHJvcChvYmosIHByb3AsIGZ1bmN0aW9uT3JHZXRTZXQsIG9wdGlvbnMpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGV4dGVuZChmdW5jdGlvbk9yR2V0U2V0ICYmIGhhc093bihmdW5jdGlvbk9yR2V0U2V0LCBcImdldFwiKSAmJiB0eXBlb2YgZnVuY3Rpb25PckdldFNldC5nZXQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB7IGdldDogZnVuY3Rpb25PckdldFNldC5nZXQsIHNldDogZnVuY3Rpb25PckdldFNldC5zZXQsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IDpcbiAgICAgICAgeyB2YWx1ZTogZnVuY3Rpb25PckdldFNldCwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9LCBvcHRpb25zKSk7XG59XG5mdW5jdGlvbiBkZXJpdmUoQ2hpbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBmdW5jdGlvbiAoUGFyZW50KSB7XG4gICAgICAgICAgICBDaGlsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgc2V0UHJvcChDaGlsZC5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgQ2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleHRlbmQ6IHByb3BzLmJpbmQobnVsbCwgQ2hpbGQucHJvdG90eXBlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmZ1bmN0aW9uIGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApIHtcbiAgICB2YXIgcGQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICB2YXIgcHJvdG87XG4gICAgcmV0dXJuIHBkIHx8IChwcm90byA9IGdldFByb3RvKG9iaikpICYmIGdldFByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XG59XG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5mdW5jdGlvbiBzbGljZShhcmdzLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIF9zbGljZS5jYWxsKGFyZ3MsIHN0YXJ0LCBlbmQpO1xufVxuZnVuY3Rpb24gb3ZlcnJpZGUob3JpZ0Z1bmMsIG92ZXJyaWRlZEZhY3RvcnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVkRmFjdG9yeShvcmlnRnVuYyk7XG59XG5mdW5jdGlvbiBhc3NlcnQoYikge1xuICAgIGlmICghYilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXNzZXJ0aW9uIEZhaWxlZFwiKTtcbn1cbmZ1bmN0aW9uIGFzYXAoZm4pIHtcbiAgICBpZiAoX2dsb2JhbC5zZXRJbW1lZGlhdGUpXG4gICAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgZWxzZVxuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnJheSwgZXh0cmFjdG9yKSB7XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBpdGVtLCBpKSB7XG4gICAgICAgIHZhciBuYW1lQW5kVmFsdWUgPSBleHRyYWN0b3IoaXRlbSwgaSk7XG4gICAgICAgIGlmIChuYW1lQW5kVmFsdWUpXG4gICAgICAgICAgICByZXN1bHRbbmFtZUFuZFZhbHVlWzBdXSA9IG5hbWVBbmRWYWx1ZVsxXTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvbmVycm9yLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGNhdGNoIChleCkge1xuICAgICAgICBvbmVycm9yICYmIG9uZXJyb3IoZXgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEJ5S2V5UGF0aChvYmosIGtleVBhdGgpIHtcbiAgICBpZiAoaGFzT3duKG9iaiwga2V5UGF0aCkpXG4gICAgICAgIHJldHVybiBvYmpba2V5UGF0aF07XG4gICAgaWYgKCFrZXlQYXRoKVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIGlmICh0eXBlb2Yga2V5UGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJ2ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5UGF0aC5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBnZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoW2ldKTtcbiAgICAgICAgICAgIHJ2LnB1c2godmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnY7XG4gICAgfVxuICAgIHZhciBwZXJpb2QgPSBrZXlQYXRoLmluZGV4T2YoJy4nKTtcbiAgICBpZiAocGVyaW9kICE9PSAtMSkge1xuICAgICAgICB2YXIgaW5uZXJPYmogPSBvYmpba2V5UGF0aC5zdWJzdHIoMCwgcGVyaW9kKV07XG4gICAgICAgIHJldHVybiBpbm5lck9iaiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0QnlLZXlQYXRoKGlubmVyT2JqLCBrZXlQYXRoLnN1YnN0cihwZXJpb2QgKyAxKSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBzZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoLCB2YWx1ZSkge1xuICAgIGlmICghb2JqIHx8IGtleVBhdGggPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICgnaXNGcm96ZW4nIGluIE9iamVjdCAmJiBPYmplY3QuaXNGcm96ZW4ob2JqKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh0eXBlb2Yga2V5UGF0aCAhPT0gJ3N0cmluZycgJiYgJ2xlbmd0aCcgaW4ga2V5UGF0aCkge1xuICAgICAgICBhc3NlcnQodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5UGF0aC5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIHNldEJ5S2V5UGF0aChvYmosIGtleVBhdGhbaV0sIHZhbHVlW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHBlcmlvZCA9IGtleVBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAocGVyaW9kICE9PSAtMSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRLZXlQYXRoID0ga2V5UGF0aC5zdWJzdHIoMCwgcGVyaW9kKTtcbiAgICAgICAgICAgIHZhciByZW1haW5pbmdLZXlQYXRoID0ga2V5UGF0aC5zdWJzdHIocGVyaW9kICsgMSk7XG4gICAgICAgICAgICBpZiAocmVtYWluaW5nS2V5UGF0aCA9PT0gXCJcIilcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShvYmopICYmICFpc05hTihwYXJzZUludChjdXJyZW50S2V5UGF0aCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNwbGljZShjdXJyZW50S2V5UGF0aCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbY3VycmVudEtleVBhdGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG9ialtjdXJyZW50S2V5UGF0aF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpbm5lck9iaiA9IG9ialtjdXJyZW50S2V5UGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKCFpbm5lck9iailcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJPYmogPSAob2JqW2N1cnJlbnRLZXlQYXRoXSA9IHt9KTtcbiAgICAgICAgICAgICAgICBzZXRCeUtleVBhdGgoaW5uZXJPYmosIHJlbWFpbmluZ0tleVBhdGgsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkob2JqKSAmJiAhaXNOYU4ocGFyc2VJbnQoa2V5UGF0aCkpKVxuICAgICAgICAgICAgICAgICAgICBvYmouc3BsaWNlKGtleVBhdGgsIDEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXlQYXRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBvYmpba2V5UGF0aF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRlbEJ5S2V5UGF0aChvYmosIGtleVBhdGgpIHtcbiAgICBpZiAodHlwZW9mIGtleVBhdGggPT09ICdzdHJpbmcnKVxuICAgICAgICBzZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoLCB1bmRlZmluZWQpO1xuICAgIGVsc2UgaWYgKCdsZW5ndGgnIGluIGtleVBhdGgpXG4gICAgICAgIFtdLm1hcC5jYWxsKGtleVBhdGgsIGZ1bmN0aW9uIChrcCkge1xuICAgICAgICAgICAgc2V0QnlLZXlQYXRoKG9iaiwga3AsIHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xufVxuZnVuY3Rpb24gc2hhbGxvd0Nsb25lKG9iaikge1xuICAgIHZhciBydiA9IHt9O1xuICAgIGZvciAodmFyIG0gaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNPd24ob2JqLCBtKSlcbiAgICAgICAgICAgIHJ2W21dID0gb2JqW21dO1xuICAgIH1cbiAgICByZXR1cm4gcnY7XG59XG52YXIgY29uY2F0ID0gW10uY29uY2F0O1xuZnVuY3Rpb24gZmxhdHRlbihhKSB7XG4gICAgcmV0dXJuIGNvbmNhdC5hcHBseShbXSwgYSk7XG59XG52YXIgaW50cmluc2ljVHlwZU5hbWVzID0gXCJCb29sZWFuLFN0cmluZyxEYXRlLFJlZ0V4cCxCbG9iLEZpbGUsRmlsZUxpc3QsQXJyYXlCdWZmZXIsRGF0YVZpZXcsVWludDhDbGFtcGVkQXJyYXksSW1hZ2VEYXRhLE1hcCxTZXRcIlxuICAgIC5zcGxpdCgnLCcpLmNvbmNhdChmbGF0dGVuKFs4LCAxNiwgMzIsIDY0XS5tYXAoZnVuY3Rpb24gKG51bSkgeyByZXR1cm4gW1wiSW50XCIsIFwiVWludFwiLCBcIkZsb2F0XCJdLm1hcChmdW5jdGlvbiAodCkgeyByZXR1cm4gdCArIG51bSArIFwiQXJyYXlcIjsgfSk7IH0pKSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7IHJldHVybiBfZ2xvYmFsW3RdOyB9KTtcbnZhciBpbnRyaW5zaWNUeXBlcyA9IGludHJpbnNpY1R5cGVOYW1lcy5tYXAoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIF9nbG9iYWxbdF07IH0pO1xudmFyIGludHJpbnNpY1R5cGVOYW1lU2V0ID0gYXJyYXlUb09iamVjdChpbnRyaW5zaWNUeXBlTmFtZXMsIGZ1bmN0aW9uICh4KSB7IHJldHVybiBbeCwgdHJ1ZV07IH0pO1xuZnVuY3Rpb24gZGVlcENsb25lKGFueSkge1xuICAgIGlmICghYW55IHx8IHR5cGVvZiBhbnkgIT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gYW55O1xuICAgIHZhciBydjtcbiAgICBpZiAoaXNBcnJheShhbnkpKSB7XG4gICAgICAgIHJ2ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYW55Lmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgcnYucHVzaChkZWVwQ2xvbmUoYW55W2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW50cmluc2ljVHlwZXMuaW5kZXhPZihhbnkuY29uc3RydWN0b3IpID49IDApIHtcbiAgICAgICAgcnYgPSBhbnk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBydiA9IGFueS5jb25zdHJ1Y3RvciA/IE9iamVjdC5jcmVhdGUoYW55LmNvbnN0cnVjdG9yLnByb3RvdHlwZSkgOiB7fTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24oYW55LCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJ2W3Byb3BdID0gZGVlcENsb25lKGFueVtwcm9wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xufVxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5mdW5jdGlvbiB0b1N0cmluZ1RhZyhvKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xufVxudmFyIGdldFZhbHVlT2YgPSBmdW5jdGlvbiAodmFsLCB0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiQXJyYXlcIiA/ICcnICsgdmFsLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZ2V0VmFsdWVPZih2LCB0b1N0cmluZ1RhZyh2KSk7IH0pIDpcbiAgICAgICAgdHlwZSA9PT0gXCJBcnJheUJ1ZmZlclwiID8gJycgKyBuZXcgVWludDhBcnJheSh2YWwpIDpcbiAgICAgICAgICAgIHR5cGUgPT09IFwiRGF0ZVwiID8gdmFsLmdldFRpbWUoKSA6XG4gICAgICAgICAgICAgICAgQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCkgPyAnJyArIG5ldyBVaW50OEFycmF5KHZhbC5idWZmZXIpIDpcbiAgICAgICAgICAgICAgICAgICAgdmFsO1xufTtcbmZ1bmN0aW9uIGdldE9iamVjdERpZmYoYSwgYiwgcnYsIHByZngpIHtcbiAgICBydiA9IHJ2IHx8IHt9O1xuICAgIHByZnggPSBwcmZ4IHx8ICcnO1xuICAgIGtleXMoYSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBpZiAoIWhhc093bihiLCBwcm9wKSlcbiAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgYXAgPSBhW3Byb3BdLCBicCA9IGJbcHJvcF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFwID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYnAgPT09ICdvYmplY3QnICYmIGFwICYmIGJwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFwVHlwZU5hbWUgPSB0b1N0cmluZ1RhZyhhcCk7XG4gICAgICAgICAgICAgICAgdmFyIGJwVHlwZU5hbWUgPSB0b1N0cmluZ1RhZyhicCk7XG4gICAgICAgICAgICAgICAgaWYgKGFwVHlwZU5hbWUgPT09IGJwVHlwZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludHJpbnNpY1R5cGVOYW1lU2V0W2FwVHlwZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0VmFsdWVPZihhcCwgYXBUeXBlTmFtZSkgIT09IGdldFZhbHVlT2YoYnAsIGJwVHlwZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnZbcHJmeCArIHByb3BdID0gYltwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE9iamVjdERpZmYoYXAsIGJwLCBydiwgcHJmeCArIHByb3AgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IGJbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXAgIT09IGJwKVxuICAgICAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IGJbcHJvcF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBrZXlzKGIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKCFoYXNPd24oYSwgcHJvcCkpIHtcbiAgICAgICAgICAgIHJ2W3ByZnggKyBwcm9wXSA9IGJbcHJvcF07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcnY7XG59XG52YXIgaXRlcmF0b3JTeW1ib2wgPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgZ2V0SXRlcmF0b3JPZiA9IGl0ZXJhdG9yU3ltYm9sID8gZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgaTtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIChpID0geFtpdGVyYXRvclN5bWJvbF0pICYmIGkuYXBwbHkoeCk7XG59IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbnZhciBOT19DSEFSX0FSUkFZID0ge307XG5mdW5jdGlvbiBnZXRBcnJheU9mKGFycmF5TGlrZSkge1xuICAgIHZhciBpLCBhLCB4LCBpdDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoaXNBcnJheShhcnJheUxpa2UpKVxuICAgICAgICAgICAgcmV0dXJuIGFycmF5TGlrZS5zbGljZSgpO1xuICAgICAgICBpZiAodGhpcyA9PT0gTk9fQ0hBUl9BUlJBWSAmJiB0eXBlb2YgYXJyYXlMaWtlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBbYXJyYXlMaWtlXTtcbiAgICAgICAgaWYgKChpdCA9IGdldEl0ZXJhdG9yT2YoYXJyYXlMaWtlKSkpIHtcbiAgICAgICAgICAgIGEgPSBbXTtcbiAgICAgICAgICAgIHdoaWxlICh4ID0gaXQubmV4dCgpLCAheC5kb25lKVxuICAgICAgICAgICAgICAgIGEucHVzaCh4LnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJheUxpa2UgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBbYXJyYXlMaWtlXTtcbiAgICAgICAgaSA9IGFycmF5TGlrZS5sZW5ndGg7XG4gICAgICAgIGlmICh0eXBlb2YgaSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGEgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIGFbaV0gPSBhcnJheUxpa2VbaV07XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2FycmF5TGlrZV07XG4gICAgfVxuICAgIGkgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGEgPSBuZXcgQXJyYXkoaSk7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgYVtpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICByZXR1cm4gYTtcbn1cbnZhciBpc0FzeW5jRnVuY3Rpb24gPSB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbltTeW1ib2wudG9TdHJpbmdUYWddID09PSAnQXN5bmNGdW5jdGlvbic7IH1cbiAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuXG52YXIgZGVidWcgPSB0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmXG4gICAgL14oaHR0cHxodHRwcyk6XFwvXFwvKGxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLjEpLy50ZXN0KGxvY2F0aW9uLmhyZWYpO1xuZnVuY3Rpb24gc2V0RGVidWcodmFsdWUsIGZpbHRlcikge1xuICAgIGRlYnVnID0gdmFsdWU7XG4gICAgbGlicmFyeUZpbHRlciA9IGZpbHRlcjtcbn1cbnZhciBsaWJyYXJ5RmlsdGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcbnZhciBORUVEU19USFJPV19GT1JfU1RBQ0sgPSAhbmV3IEVycm9yKFwiXCIpLnN0YWNrO1xuZnVuY3Rpb24gZ2V0RXJyb3JXaXRoU3RhY2soKSB7XG4gICAgaWYgKE5FRURTX1RIUk9XX0ZPUl9TVEFDSylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoKTtcbn1cbmZ1bmN0aW9uIHByZXR0eVN0YWNrKGV4Y2VwdGlvbiwgbnVtSWdub3JlZEZyYW1lcykge1xuICAgIHZhciBzdGFjayA9IGV4Y2VwdGlvbi5zdGFjaztcbiAgICBpZiAoIXN0YWNrKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICBudW1JZ25vcmVkRnJhbWVzID0gKG51bUlnbm9yZWRGcmFtZXMgfHwgMCk7XG4gICAgaWYgKHN0YWNrLmluZGV4T2YoZXhjZXB0aW9uLm5hbWUpID09PSAwKVxuICAgICAgICBudW1JZ25vcmVkRnJhbWVzICs9IChleGNlcHRpb24ubmFtZSArIGV4Y2VwdGlvbi5tZXNzYWdlKS5zcGxpdCgnXFxuJykubGVuZ3RoO1xuICAgIHJldHVybiBzdGFjay5zcGxpdCgnXFxuJylcbiAgICAgICAgLnNsaWNlKG51bUlnbm9yZWRGcmFtZXMpXG4gICAgICAgIC5maWx0ZXIobGlicmFyeUZpbHRlcilcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZnJhbWUpIHsgcmV0dXJuIFwiXFxuXCIgKyBmcmFtZTsgfSlcbiAgICAgICAgLmpvaW4oJycpO1xufVxuXG52YXIgZGV4aWVFcnJvck5hbWVzID0gW1xuICAgICdNb2RpZnknLFxuICAgICdCdWxrJyxcbiAgICAnT3BlbkZhaWxlZCcsXG4gICAgJ1ZlcnNpb25DaGFuZ2UnLFxuICAgICdTY2hlbWEnLFxuICAgICdVcGdyYWRlJyxcbiAgICAnSW52YWxpZFRhYmxlJyxcbiAgICAnTWlzc2luZ0FQSScsXG4gICAgJ05vU3VjaERhdGFiYXNlJyxcbiAgICAnSW52YWxpZEFyZ3VtZW50JyxcbiAgICAnU3ViVHJhbnNhY3Rpb24nLFxuICAgICdVbnN1cHBvcnRlZCcsXG4gICAgJ0ludGVybmFsJyxcbiAgICAnRGF0YWJhc2VDbG9zZWQnLFxuICAgICdQcmVtYXR1cmVDb21taXQnLFxuICAgICdGb3JlaWduQXdhaXQnXG5dO1xudmFyIGlkYkRvbUVycm9yTmFtZXMgPSBbXG4gICAgJ1Vua25vd24nLFxuICAgICdDb25zdHJhaW50JyxcbiAgICAnRGF0YScsXG4gICAgJ1RyYW5zYWN0aW9uSW5hY3RpdmUnLFxuICAgICdSZWFkT25seScsXG4gICAgJ1ZlcnNpb24nLFxuICAgICdOb3RGb3VuZCcsXG4gICAgJ0ludmFsaWRTdGF0ZScsXG4gICAgJ0ludmFsaWRBY2Nlc3MnLFxuICAgICdBYm9ydCcsXG4gICAgJ1RpbWVvdXQnLFxuICAgICdRdW90YUV4Y2VlZGVkJyxcbiAgICAnU3ludGF4JyxcbiAgICAnRGF0YUNsb25lJ1xuXTtcbnZhciBlcnJvckxpc3QgPSBkZXhpZUVycm9yTmFtZXMuY29uY2F0KGlkYkRvbUVycm9yTmFtZXMpO1xudmFyIGRlZmF1bHRUZXh0cyA9IHtcbiAgICBWZXJzaW9uQ2hhbmdlZDogXCJEYXRhYmFzZSB2ZXJzaW9uIGNoYW5nZWQgYnkgb3RoZXIgZGF0YWJhc2UgY29ubmVjdGlvblwiLFxuICAgIERhdGFiYXNlQ2xvc2VkOiBcIkRhdGFiYXNlIGhhcyBiZWVuIGNsb3NlZFwiLFxuICAgIEFib3J0OiBcIlRyYW5zYWN0aW9uIGFib3J0ZWRcIixcbiAgICBUcmFuc2FjdGlvbkluYWN0aXZlOiBcIlRyYW5zYWN0aW9uIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCBvciBmYWlsZWRcIlxufTtcbmZ1bmN0aW9uIERleGllRXJyb3IobmFtZSwgbXNnKSB7XG4gICAgdGhpcy5fZSA9IGdldEVycm9yV2l0aFN0YWNrKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtc2c7XG59XG5kZXJpdmUoRGV4aWVFcnJvcikuZnJvbShFcnJvcikuZXh0ZW5kKHtcbiAgICBzdGFjazoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGFjayB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9zdGFjayA9IHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZSArIHByZXR0eVN0YWNrKHRoaXMuX2UsIDIpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZTsgfVxufSk7XG5mdW5jdGlvbiBnZXRNdWx0aUVycm9yTWVzc2FnZShtc2csIGZhaWx1cmVzKSB7XG4gICAgcmV0dXJuIG1zZyArIFwiLiBFcnJvcnM6IFwiICsgT2JqZWN0LmtleXMoZmFpbHVyZXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZmFpbHVyZXNba2V5XS50b1N0cmluZygpOyB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2LCBpLCBzKSB7IHJldHVybiBzLmluZGV4T2YodikgPT09IGk7IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKTtcbn1cbmZ1bmN0aW9uIE1vZGlmeUVycm9yKG1zZywgZmFpbHVyZXMsIHN1Y2Nlc3NDb3VudCwgZmFpbGVkS2V5cykge1xuICAgIHRoaXMuX2UgPSBnZXRFcnJvcldpdGhTdGFjaygpO1xuICAgIHRoaXMuZmFpbHVyZXMgPSBmYWlsdXJlcztcbiAgICB0aGlzLmZhaWxlZEtleXMgPSBmYWlsZWRLZXlzO1xuICAgIHRoaXMuc3VjY2Vzc0NvdW50ID0gc3VjY2Vzc0NvdW50O1xuICAgIHRoaXMubWVzc2FnZSA9IGdldE11bHRpRXJyb3JNZXNzYWdlKG1zZywgZmFpbHVyZXMpO1xufVxuZGVyaXZlKE1vZGlmeUVycm9yKS5mcm9tKERleGllRXJyb3IpO1xuZnVuY3Rpb24gQnVsa0Vycm9yKG1zZywgZmFpbHVyZXMpIHtcbiAgICB0aGlzLl9lID0gZ2V0RXJyb3JXaXRoU3RhY2soKTtcbiAgICB0aGlzLm5hbWUgPSBcIkJ1bGtFcnJvclwiO1xuICAgIHRoaXMuZmFpbHVyZXMgPSBmYWlsdXJlcztcbiAgICB0aGlzLm1lc3NhZ2UgPSBnZXRNdWx0aUVycm9yTWVzc2FnZShtc2csIGZhaWx1cmVzKTtcbn1cbmRlcml2ZShCdWxrRXJyb3IpLmZyb20oRGV4aWVFcnJvcik7XG52YXIgZXJybmFtZXMgPSBlcnJvckxpc3QucmVkdWNlKGZ1bmN0aW9uIChvYmosIG5hbWUpIHsgcmV0dXJuIChvYmpbbmFtZV0gPSBuYW1lICsgXCJFcnJvclwiLCBvYmopOyB9LCB7fSk7XG52YXIgQmFzZUV4Y2VwdGlvbiA9IERleGllRXJyb3I7XG52YXIgZXhjZXB0aW9ucyA9IGVycm9yTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgbmFtZSkge1xuICAgIHZhciBmdWxsTmFtZSA9IG5hbWUgKyBcIkVycm9yXCI7XG4gICAgZnVuY3Rpb24gRGV4aWVFcnJvcihtc2dPcklubmVyLCBpbm5lcikge1xuICAgICAgICB0aGlzLl9lID0gZ2V0RXJyb3JXaXRoU3RhY2soKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZnVsbE5hbWU7XG4gICAgICAgIGlmICghbXNnT3JJbm5lcikge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZGVmYXVsdFRleHRzW25hbWVdIHx8IGZ1bGxOYW1lO1xuICAgICAgICAgICAgdGhpcy5pbm5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1zZ09ySW5uZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlwiICsgbXNnT3JJbm5lciArICghaW5uZXIgPyAnJyA6ICdcXG4gJyArIGlubmVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5uZXIgPSBpbm5lciB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBtc2dPcklubmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbXNnT3JJbm5lci5uYW1lICsgXCIgXCIgKyBtc2dPcklubmVyLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLmlubmVyID0gbXNnT3JJbm5lcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZXJpdmUoRGV4aWVFcnJvcikuZnJvbShCYXNlRXhjZXB0aW9uKTtcbiAgICBvYmpbbmFtZV0gPSBEZXhpZUVycm9yO1xuICAgIHJldHVybiBvYmo7XG59LCB7fSk7XG5leGNlcHRpb25zLlN5bnRheCA9IFN5bnRheEVycm9yO1xuZXhjZXB0aW9ucy5UeXBlID0gVHlwZUVycm9yO1xuZXhjZXB0aW9ucy5SYW5nZSA9IFJhbmdlRXJyb3I7XG52YXIgZXhjZXB0aW9uTWFwID0gaWRiRG9tRXJyb3JOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgbmFtZSkge1xuICAgIG9ialtuYW1lICsgXCJFcnJvclwiXSA9IGV4Y2VwdGlvbnNbbmFtZV07XG4gICAgcmV0dXJuIG9iajtcbn0sIHt9KTtcbmZ1bmN0aW9uIG1hcEVycm9yKGRvbUVycm9yLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFkb21FcnJvciB8fCBkb21FcnJvciBpbnN0YW5jZW9mIERleGllRXJyb3IgfHwgZG9tRXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IgfHwgZG9tRXJyb3IgaW5zdGFuY2VvZiBTeW50YXhFcnJvciB8fCAhZG9tRXJyb3IubmFtZSB8fCAhZXhjZXB0aW9uTWFwW2RvbUVycm9yLm5hbWVdKVxuICAgICAgICByZXR1cm4gZG9tRXJyb3I7XG4gICAgdmFyIHJ2ID0gbmV3IGV4Y2VwdGlvbk1hcFtkb21FcnJvci5uYW1lXShtZXNzYWdlIHx8IGRvbUVycm9yLm1lc3NhZ2UsIGRvbUVycm9yKTtcbiAgICBpZiAoXCJzdGFja1wiIGluIGRvbUVycm9yKSB7XG4gICAgICAgIHNldFByb3AocnYsIFwic3RhY2tcIiwgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbm5lci5zdGFjaztcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIHJldHVybiBydjtcbn1cbnZhciBmdWxsTmFtZUV4Y2VwdGlvbnMgPSBlcnJvckxpc3QucmVkdWNlKGZ1bmN0aW9uIChvYmosIG5hbWUpIHtcbiAgICBpZiAoW1wiU3ludGF4XCIsIFwiVHlwZVwiLCBcIlJhbmdlXCJdLmluZGV4T2YobmFtZSkgPT09IC0xKVxuICAgICAgICBvYmpbbmFtZSArIFwiRXJyb3JcIl0gPSBleGNlcHRpb25zW25hbWVdO1xuICAgIHJldHVybiBvYmo7XG59LCB7fSk7XG5mdWxsTmFtZUV4Y2VwdGlvbnMuTW9kaWZ5RXJyb3IgPSBNb2RpZnlFcnJvcjtcbmZ1bGxOYW1lRXhjZXB0aW9ucy5EZXhpZUVycm9yID0gRGV4aWVFcnJvcjtcbmZ1bGxOYW1lRXhjZXB0aW9ucy5CdWxrRXJyb3IgPSBCdWxrRXJyb3I7XG5cbmZ1bmN0aW9uIG5vcCgpIHsgfVxuZnVuY3Rpb24gbWlycm9yKHZhbCkgeyByZXR1cm4gdmFsOyB9XG5mdW5jdGlvbiBwdXJlRnVuY3Rpb25DaGFpbihmMSwgZjIpIHtcbiAgICBpZiAoZjEgPT0gbnVsbCB8fCBmMSA9PT0gbWlycm9yKVxuICAgICAgICByZXR1cm4gZjI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIGYyKGYxKHZhbCkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBjYWxsQm90aChvbjEsIG9uMikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBvbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaG9va0NyZWF0aW5nQ2hhaW4oZjEsIGYyKSB7XG4gICAgaWYgKGYxID09PSBub3ApXG4gICAgICAgIHJldHVybiBmMjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gZjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gcmVzO1xuICAgICAgICB2YXIgb25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MsXG4gICAgICAgIG9uZXJyb3IgPSB0aGlzLm9uZXJyb3I7XG4gICAgICAgIHRoaXMub25zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgdmFyIHJlczIgPSBmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAob25zdWNjZXNzKVxuICAgICAgICAgICAgdGhpcy5vbnN1Y2Nlc3MgPSB0aGlzLm9uc3VjY2VzcyA/IGNhbGxCb3RoKG9uc3VjY2VzcywgdGhpcy5vbnN1Y2Nlc3MpIDogb25zdWNjZXNzO1xuICAgICAgICBpZiAob25lcnJvcilcbiAgICAgICAgICAgIHRoaXMub25lcnJvciA9IHRoaXMub25lcnJvciA/IGNhbGxCb3RoKG9uZXJyb3IsIHRoaXMub25lcnJvcikgOiBvbmVycm9yO1xuICAgICAgICByZXR1cm4gcmVzMiAhPT0gdW5kZWZpbmVkID8gcmVzMiA6IHJlcztcbiAgICB9O1xufVxuZnVuY3Rpb24gaG9va0RlbGV0aW5nQ2hhaW4oZjEsIGYyKSB7XG4gICAgaWYgKGYxID09PSBub3ApXG4gICAgICAgIHJldHVybiBmMjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgb25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MsXG4gICAgICAgIG9uZXJyb3IgPSB0aGlzLm9uZXJyb3I7XG4gICAgICAgIHRoaXMub25zdWNjZXNzID0gdGhpcy5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKG9uc3VjY2VzcylcbiAgICAgICAgICAgIHRoaXMub25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MgPyBjYWxsQm90aChvbnN1Y2Nlc3MsIHRoaXMub25zdWNjZXNzKSA6IG9uc3VjY2VzcztcbiAgICAgICAgaWYgKG9uZXJyb3IpXG4gICAgICAgICAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9uZXJyb3IgPyBjYWxsQm90aChvbmVycm9yLCB0aGlzLm9uZXJyb3IpIDogb25lcnJvcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gaG9va1VwZGF0aW5nQ2hhaW4oZjEsIGYyKSB7XG4gICAgaWYgKGYxID09PSBub3ApXG4gICAgICAgIHJldHVybiBmMjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vZGlmaWNhdGlvbnMpIHtcbiAgICAgICAgdmFyIHJlcyA9IGYxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGV4dGVuZChtb2RpZmljYXRpb25zLCByZXMpO1xuICAgICAgICB2YXIgb25zdWNjZXNzID0gdGhpcy5vbnN1Y2Nlc3MsXG4gICAgICAgIG9uZXJyb3IgPSB0aGlzLm9uZXJyb3I7XG4gICAgICAgIHRoaXMub25zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgdmFyIHJlczIgPSBmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAob25zdWNjZXNzKVxuICAgICAgICAgICAgdGhpcy5vbnN1Y2Nlc3MgPSB0aGlzLm9uc3VjY2VzcyA/IGNhbGxCb3RoKG9uc3VjY2VzcywgdGhpcy5vbnN1Y2Nlc3MpIDogb25zdWNjZXNzO1xuICAgICAgICBpZiAob25lcnJvcilcbiAgICAgICAgICAgIHRoaXMub25lcnJvciA9IHRoaXMub25lcnJvciA/IGNhbGxCb3RoKG9uZXJyb3IsIHRoaXMub25lcnJvcikgOiBvbmVycm9yO1xuICAgICAgICByZXR1cm4gcmVzID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgKHJlczIgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlczIpIDpcbiAgICAgICAgICAgIChleHRlbmQocmVzLCByZXMyKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJldmVyc2VTdG9wcGFibGVFdmVudENoYWluKGYxLCBmMikge1xuICAgIGlmIChmMSA9PT0gbm9wKVxuICAgICAgICByZXR1cm4gZjI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gZjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBwcm9taXNhYmxlQ2hhaW4oZjEsIGYyKSB7XG4gICAgaWYgKGYxID09PSBub3ApXG4gICAgICAgIHJldHVybiBmMjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gZjEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciB0aGl6ID0gdGhpcywgaSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmMi5hcHBseSh0aGl6LCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbnZhciBJTlRFUk5BTCA9IHt9O1xudmFyIExPTkdfU1RBQ0tTX0NMSVBfTElNSVQgPSAxMDA7XG52YXIgTUFYX0xPTkdfU1RBQ0tTID0gMjA7XG52YXIgWk9ORV9FQ0hPX0xJTUlUID0gMTAwO1xudmFyIF9hID0gdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID9cbiAgICBbXSA6XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdsb2JhbFAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uc3VidGxlKVxuICAgICAgICAgICAgcmV0dXJuIFtnbG9iYWxQLCBnbG9iYWxQLl9fcHJvdG9fXywgZ2xvYmFsUF07XG4gICAgICAgIHZhciBuYXRpdmVQID0gY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtNTEyXCIsIG5ldyBVaW50OEFycmF5KFswXSkpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmF0aXZlUCxcbiAgICAgICAgICAgIG5hdGl2ZVAuX19wcm90b19fLFxuICAgICAgICAgICAgZ2xvYmFsUFxuICAgICAgICBdO1xuICAgIH0pKCk7XG52YXIgcmVzb2x2ZWROYXRpdmVQcm9taXNlID0gX2FbMF07XG52YXIgbmF0aXZlUHJvbWlzZVByb3RvID0gX2FbMV07XG52YXIgcmVzb2x2ZWRHbG9iYWxQcm9taXNlID0gX2FbMl07XG52YXIgbmF0aXZlUHJvbWlzZVRoZW4gPSBuYXRpdmVQcm9taXNlUHJvdG8gJiYgbmF0aXZlUHJvbWlzZVByb3RvLnRoZW47XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlc29sdmVkTmF0aXZlUHJvbWlzZSAmJiByZXNvbHZlZE5hdGl2ZVByb21pc2UuY29uc3RydWN0b3I7XG52YXIgcGF0Y2hHbG9iYWxQcm9taXNlID0gISFyZXNvbHZlZEdsb2JhbFByb21pc2U7XG52YXIgc3RhY2tfYmVpbmdfZ2VuZXJhdGVkID0gZmFsc2U7XG52YXIgc2NoZWR1bGVQaHlzaWNhbFRpY2sgPSByZXNvbHZlZEdsb2JhbFByb21pc2UgP1xuICAgIGZ1bmN0aW9uICgpIHsgcmVzb2x2ZWRHbG9iYWxQcm9taXNlLnRoZW4ocGh5c2ljYWxUaWNrKTsgfVxuICAgIDpcbiAgICAgICAgX2dsb2JhbC5zZXRJbW1lZGlhdGUgP1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlLmJpbmQobnVsbCwgcGh5c2ljYWxUaWNrKSA6XG4gICAgICAgICAgICBfZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIChuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaHlzaWNhbFRpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbkRpdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pKS5vYnNlcnZlKGhpZGRlbkRpdiwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKCdpJywgJzEnKTtcbiAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQocGh5c2ljYWxUaWNrLCAwKTsgfTtcbnZhciBhc2FwJDEgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICBtaWNyb3RpY2tRdWV1ZS5wdXNoKFtjYWxsYmFjaywgYXJnc10pO1xuICAgIGlmIChuZWVkc05ld1BoeXNpY2FsVGljaykge1xuICAgICAgICBzY2hlZHVsZVBoeXNpY2FsVGljaygpO1xuICAgICAgICBuZWVkc05ld1BoeXNpY2FsVGljayA9IGZhbHNlO1xuICAgIH1cbn07XG52YXIgaXNPdXRzaWRlTWljcm9UaWNrID0gdHJ1ZTtcbnZhciBuZWVkc05ld1BoeXNpY2FsVGljayA9IHRydWU7XG52YXIgdW5oYW5kbGVkRXJyb3JzID0gW107XG52YXIgcmVqZWN0aW5nRXJyb3JzID0gW107XG52YXIgY3VycmVudEZ1bGZpbGxlciA9IG51bGw7XG52YXIgcmVqZWN0aW9uTWFwcGVyID0gbWlycm9yO1xudmFyIGdsb2JhbFBTRCA9IHtcbiAgICBpZDogJ2dsb2JhbCcsXG4gICAgZ2xvYmFsOiB0cnVlLFxuICAgIHJlZjogMCxcbiAgICB1bmhhbmRsZWRzOiBbXSxcbiAgICBvbnVuaGFuZGxlZDogZ2xvYmFsRXJyb3IsXG4gICAgcGdwOiBmYWxzZSxcbiAgICBlbnY6IHt9LFxuICAgIGZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5oYW5kbGVkcy5mb3JFYWNoKGZ1bmN0aW9uICh1aCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnbG9iYWxFcnJvcih1aFswXSwgdWhbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xudmFyIFBTRCA9IGdsb2JhbFBTRDtcbnZhciBtaWNyb3RpY2tRdWV1ZSA9IFtdO1xudmFyIG51bVNjaGVkdWxlZENhbGxzID0gMDtcbnZhciB0aWNrRmluYWxpemVycyA9IFtdO1xuZnVuY3Rpb24gRGV4aWVQcm9taXNlKGZuKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSAnb2JqZWN0JylcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5vbnVuY2F0Y2hlZCA9IG5vcDtcbiAgICB0aGlzLl9saWIgPSBmYWxzZTtcbiAgICB2YXIgcHNkID0gKHRoaXMuX1BTRCA9IFBTRCk7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIHRoaXMuX3N0YWNrSG9sZGVyID0gZ2V0RXJyb3JXaXRoU3RhY2soKTtcbiAgICAgICAgdGhpcy5fcHJldiA9IG51bGw7XG4gICAgICAgIHRoaXMuX251bVByZXYgPSAwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChmbiAhPT0gSU5URVJOQUwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdOb3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICBoYW5kbGVSZWplY3Rpb24odGhpcywgdGhpcy5fdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcbiAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgKytwc2QucmVmO1xuICAgIGV4ZWN1dGVQcm9taXNlVGFzayh0aGlzLCBmbik7XG59XG52YXIgdGhlblByb3AgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwc2QgPSBQU0QsIG1pY3JvVGFza0lkID0gdG90YWxFY2hvZXM7XG4gICAgICAgIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcG9zc2libGVBd2FpdCA9ICFwc2QuZ2xvYmFsICYmIChwc2QgIT09IFBTRCB8fCBtaWNyb1Rhc2tJZCAhPT0gdG90YWxFY2hvZXMpO1xuICAgICAgICAgICAgdmFyIGNsZWFudXAgPSBwb3NzaWJsZUF3YWl0ICYmICFkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICAgICAgdmFyIHJ2ID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvcGFnYXRlVG9MaXN0ZW5lcihfdGhpcywgbmV3IExpc3RlbmVyKG5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAob25GdWxmaWxsZWQsIHBzZCwgcG9zc2libGVBd2FpdCwgY2xlYW51cCksIG5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAob25SZWplY3RlZCwgcHNkLCBwb3NzaWJsZUF3YWl0LCBjbGVhbnVwKSwgcmVzb2x2ZSwgcmVqZWN0LCBwc2QpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVidWcgJiYgbGlua1RvUHJldmlvdXNQcm9taXNlKHJ2LCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgfVxuICAgICAgICB0aGVuLnByb3RvdHlwZSA9IElOVEVSTkFMO1xuICAgICAgICByZXR1cm4gdGhlbjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHNldFByb3AodGhpcywgJ3RoZW4nLCB2YWx1ZSAmJiB2YWx1ZS5wcm90b3R5cGUgPT09IElOVEVSTkFMID9cbiAgICAgICAgICAgIHRoZW5Qcm9wIDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiB0aGVuUHJvcC5zZXRcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn07XG5wcm9wcyhEZXhpZVByb21pc2UucHJvdG90eXBlLCB7XG4gICAgdGhlbjogdGhlblByb3AsXG4gICAgX3RoZW46IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBwcm9wYWdhdGVUb0xpc3RlbmVyKHRoaXMsIG5ldyBMaXN0ZW5lcihudWxsLCBudWxsLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgUFNEKSk7XG4gICAgfSxcbiAgICBjYXRjaDogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB2YXIgdHlwZSA9IGFyZ3VtZW50c1swXSwgaGFuZGxlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdGhpcy50aGVuKG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiB0eXBlID8gaGFuZGxlcihlcnIpIDogUHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgOiB0aGlzLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnIgJiYgZXJyLm5hbWUgPT09IHR5cGUgPyBoYW5kbGVyKGVycikgOiBQcm9taXNlUmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIGZpbmFsbHk6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIG9uRmluYWxseSgpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBvbkZpbmFsbHkoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlUmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3RhY2s6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RhY2spXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWNrO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGFja19iZWluZ19nZW5lcmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBzdGFja3MgPSBnZXRTdGFjayh0aGlzLCBbXSwgTUFYX0xPTkdfU1RBQ0tTKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhY2sgPSBzdGFja3Muam9pbihcIlxcbkZyb20gcHJldmlvdXM6IFwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrID0gc3RhY2s7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc3RhY2tfYmVpbmdfZ2VuZXJhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRpbWVvdXQ6IGZ1bmN0aW9uIChtcywgbXNnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBtcyA8IEluZmluaXR5ID9cbiAgICAgICAgICAgIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdChuZXcgZXhjZXB0aW9ucy5UaW1lb3V0KG1zZykpOyB9LCBtcyk7XG4gICAgICAgICAgICAgICAgX3RoaXMudGhlbihyZXNvbHZlLCByZWplY3QpLmZpbmFsbHkoY2xlYXJUaW1lb3V0LmJpbmQobnVsbCwgaGFuZGxlKSk7XG4gICAgICAgICAgICB9KSA6IHRoaXM7XG4gICAgfVxufSk7XG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKVxuICAgIHNldFByb3AoRGV4aWVQcm9taXNlLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCAnRGV4aWUuUHJvbWlzZScpO1xuZ2xvYmFsUFNELmVudiA9IHNuYXBTaG90KCk7XG5mdW5jdGlvbiBMaXN0ZW5lcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzb2x2ZSwgcmVqZWN0LCB6b25lKSB7XG4gICAgdGhpcy5vbkZ1bGZpbGxlZCA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogbnVsbDtcbiAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgdGhpcy5wc2QgPSB6b25lO1xufVxucHJvcHMoRGV4aWVQcm9taXNlLCB7XG4gICAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBnZXRBcnJheU9mLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIC5tYXAob25Qb3NzaWJsZVBhcmFsbGVsbEFzeW5jKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZShhKS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2ldID0geDtcbiAgICAgICAgICAgICAgICBpZiAoIS0tcmVtYWluaW5nKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgICAgICB9LCByZWplY3QpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZXNvbHZlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGV4aWVQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHZhciBydiA9IG5ldyBEZXhpZVByb21pc2UoSU5URVJOQUwsIHRydWUsIHZhbHVlKTtcbiAgICAgICAgbGlua1RvUHJldmlvdXNQcm9taXNlKHJ2LCBjdXJyZW50RnVsZmlsbGVyKTtcbiAgICAgICAgcmV0dXJuIHJ2O1xuICAgIH0sXG4gICAgcmVqZWN0OiBQcm9taXNlUmVqZWN0LFxuICAgIHJhY2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGdldEFycmF5T2YuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5tYXAob25Qb3NzaWJsZVBhcmFsbGVsbEFzeW5jKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFBTRDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFBTRDsgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIFBTRCA9IHZhbHVlOyB9XG4gICAgfSxcbiAgICB0b3RhbEVjaG9lczogeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdGFsRWNob2VzOyB9IH0sXG4gICAgbmV3UFNEOiBuZXdTY29wZSxcbiAgICB1c2VQU0Q6IHVzZVBTRCxcbiAgICBzY2hlZHVsZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhc2FwJDE7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IGFzYXAkMSA9IHZhbHVlOyB9XG4gICAgfSxcbiAgICByZWplY3Rpb25NYXBwZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3Rpb25NYXBwZXI7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7IHJlamVjdGlvbk1hcHBlciA9IHZhbHVlOyB9XG4gICAgfSxcbiAgICBmb2xsb3c6IGZ1bmN0aW9uIChmbiwgem9uZVByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdTY29wZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBzZCA9IFBTRDtcbiAgICAgICAgICAgICAgICBwc2QudW5oYW5kbGVkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHBzZC5vbnVuaGFuZGxlZCA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICBwc2QuZmluYWxpemUgPSBjYWxsQm90aChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJ1bl9hdF9lbmRfb2ZfdGhpc19vcl9uZXh0X3BoeXNpY2FsX3RpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudW5oYW5kbGVkcy5sZW5ndGggPT09IDAgPyByZXNvbHZlKCkgOiByZWplY3QoX3RoaXMudW5oYW5kbGVkc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIHBzZC5maW5hbGl6ZSk7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0sIHpvbmVQcm9wcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5pZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgIGlmIChOYXRpdmVQcm9taXNlLmFsbFNldHRsZWQpXG4gICAgICAgIHNldFByb3AoRGV4aWVQcm9taXNlLCBcImFsbFNldHRsZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBvc3NpYmxlUHJvbWlzZXMgPSBnZXRBcnJheU9mLmFwcGx5KG51bGwsIGFyZ3VtZW50cykubWFwKG9uUG9zc2libGVQYXJhbGxlbGxBc3luYyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZVByb21pc2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZyA9IHBvc3NpYmxlUHJvbWlzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KHJlbWFpbmluZyk7XG4gICAgICAgICAgICAgICAgcG9zc2libGVQcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChwLCBpKSB7IHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZShwKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gcmVzdWx0c1tpXSA9IHsgc3RhdHVzOiBcImZ1bGZpbGxlZFwiLCB2YWx1ZTogdmFsdWUgfTsgfSwgZnVuY3Rpb24gKHJlYXNvbikgeyByZXR1cm4gcmVzdWx0c1tpXSA9IHsgc3RhdHVzOiBcInJlamVjdGVkXCIsIHJlYXNvbjogcmVhc29uIH07IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIC0tcmVtYWluaW5nIHx8IHJlc29sdmUocmVzdWx0cyk7IH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBpZiAoTmF0aXZlUHJvbWlzZS5hbnkgJiYgdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgc2V0UHJvcChEZXhpZVByb21pc2UsIFwiYW55XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwb3NzaWJsZVByb21pc2VzID0gZ2V0QXJyYXlPZi5hcHBseShudWxsLCBhcmd1bWVudHMpLm1hcChvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZVByb21pc2VzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSkpO1xuICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmcgPSBwb3NzaWJsZVByb21pc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZmFpbHVyZXMgPSBuZXcgQXJyYXkocmVtYWluaW5nKTtcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVByb21pc2VzLmZvckVhY2goZnVuY3Rpb24gKHAsIGkpIHsgcmV0dXJuIERleGllUHJvbWlzZS5yZXNvbHZlKHApLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSwgZnVuY3Rpb24gKGZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXNbaV0gPSBmYWlsdXJlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcmVtYWluaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihmYWlsdXJlcykpO1xuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVQcm9taXNlVGFzayhwcm9taXNlLCBmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGZuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gcHJvbWlzZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICAgICAgdmFyIHNob3VsZEV4ZWN1dGVUaWNrID0gcHJvbWlzZS5fbGliICYmIGJlZ2luTWljcm9UaWNrU2NvcGUoKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGVQcm9taXNlVGFzayhwcm9taXNlLCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRGV4aWVQcm9taXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLl90aGVuKHJlc29sdmUsIHJlamVjdCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fc3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvcGFnYXRlQWxsTGlzdGVuZXJzKHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZEV4ZWN1dGVUaWNrKVxuICAgICAgICAgICAgICAgIGVuZE1pY3JvVGlja1Njb3BlKCk7XG4gICAgICAgIH0sIGhhbmRsZVJlamVjdGlvbi5iaW5kKG51bGwsIHByb21pc2UpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgIGhhbmRsZVJlamVjdGlvbihwcm9taXNlLCBleCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlUmVqZWN0aW9uKHByb21pc2UsIHJlYXNvbikge1xuICAgIHJlamVjdGluZ0Vycm9ycy5wdXNoKHJlYXNvbik7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHNob3VsZEV4ZWN1dGVUaWNrID0gcHJvbWlzZS5fbGliICYmIGJlZ2luTWljcm9UaWNrU2NvcGUoKTtcbiAgICByZWFzb24gPSByZWplY3Rpb25NYXBwZXIocmVhc29uKTtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IGZhbHNlO1xuICAgIHByb21pc2UuX3ZhbHVlID0gcmVhc29uO1xuICAgIGRlYnVnICYmIHJlYXNvbiAhPT0gbnVsbCAmJiB0eXBlb2YgcmVhc29uID09PSAnb2JqZWN0JyAmJiAhcmVhc29uLl9wcm9taXNlICYmIHRyeUNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9yaWdQcm9wID0gZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHJlYXNvbiwgXCJzdGFja1wiKTtcbiAgICAgICAgcmVhc29uLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgc2V0UHJvcChyZWFzb24sIFwic3RhY2tcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YWNrX2JlaW5nX2dlbmVyYXRlZCA/XG4gICAgICAgICAgICAgICAgICAgIG9yaWdQcm9wICYmIChvcmlnUHJvcC5nZXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ1Byb3AuZ2V0LmFwcGx5KHJlYXNvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ1Byb3AudmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5zdGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgYWRkUG9zc2libHlVbmhhbmRsZWRFcnJvcihwcm9taXNlKTtcbiAgICBwcm9wYWdhdGVBbGxMaXN0ZW5lcnMocHJvbWlzZSk7XG4gICAgaWYgKHNob3VsZEV4ZWN1dGVUaWNrKVxuICAgICAgICBlbmRNaWNyb1RpY2tTY29wZSgpO1xufVxuZnVuY3Rpb24gcHJvcGFnYXRlQWxsTGlzdGVuZXJzKHByb21pc2UpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gcHJvbWlzZS5fbGlzdGVuZXJzO1xuICAgIHByb21pc2UuX2xpc3RlbmVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgcHJvcGFnYXRlVG9MaXN0ZW5lcihwcm9taXNlLCBsaXN0ZW5lcnNbaV0pO1xuICAgIH1cbiAgICB2YXIgcHNkID0gcHJvbWlzZS5fUFNEO1xuICAgIC0tcHNkLnJlZiB8fCBwc2QuZmluYWxpemUoKTtcbiAgICBpZiAobnVtU2NoZWR1bGVkQ2FsbHMgPT09IDApIHtcbiAgICAgICAgKytudW1TY2hlZHVsZWRDYWxscztcbiAgICAgICAgYXNhcCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgtLW51bVNjaGVkdWxlZENhbGxzID09PSAwKVxuICAgICAgICAgICAgICAgIGZpbmFsaXplUGh5c2ljYWxUaWNrKCk7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcm9wYWdhdGVUb0xpc3RlbmVyKHByb21pc2UsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBudWxsKSB7XG4gICAgICAgIHByb21pc2UuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2IgPSBwcm9taXNlLl9zdGF0ZSA/IGxpc3RlbmVyLm9uRnVsZmlsbGVkIDogbGlzdGVuZXIub25SZWplY3RlZDtcbiAgICBpZiAoY2IgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIChwcm9taXNlLl9zdGF0ZSA/IGxpc3RlbmVyLnJlc29sdmUgOiBsaXN0ZW5lci5yZWplY3QpKHByb21pc2UuX3ZhbHVlKTtcbiAgICB9XG4gICAgKytsaXN0ZW5lci5wc2QucmVmO1xuICAgICsrbnVtU2NoZWR1bGVkQ2FsbHM7XG4gICAgYXNhcCQxKGNhbGxMaXN0ZW5lciwgW2NiLCBwcm9taXNlLCBsaXN0ZW5lcl0pO1xufVxuZnVuY3Rpb24gY2FsbExpc3RlbmVyKGNiLCBwcm9taXNlLCBsaXN0ZW5lcikge1xuICAgIHRyeSB7XG4gICAgICAgIGN1cnJlbnRGdWxmaWxsZXIgPSBwcm9taXNlO1xuICAgICAgICB2YXIgcmV0LCB2YWx1ZSA9IHByb21pc2UuX3ZhbHVlO1xuICAgICAgICBpZiAocHJvbWlzZS5fc3RhdGUpIHtcbiAgICAgICAgICAgIHJldCA9IGNiKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZWplY3RpbmdFcnJvcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHJlamVjdGluZ0Vycm9ycyA9IFtdO1xuICAgICAgICAgICAgcmV0ID0gY2IodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlamVjdGluZ0Vycm9ycy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgbWFya0Vycm9yQXNIYW5kbGVkKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyLnJlc29sdmUocmV0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbGlzdGVuZXIucmVqZWN0KGUpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgY3VycmVudEZ1bGZpbGxlciA9IG51bGw7XG4gICAgICAgIGlmICgtLW51bVNjaGVkdWxlZENhbGxzID09PSAwKVxuICAgICAgICAgICAgZmluYWxpemVQaHlzaWNhbFRpY2soKTtcbiAgICAgICAgLS1saXN0ZW5lci5wc2QucmVmIHx8IGxpc3RlbmVyLnBzZC5maW5hbGl6ZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFN0YWNrKHByb21pc2UsIHN0YWNrcywgbGltaXQpIHtcbiAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gbGltaXQpXG4gICAgICAgIHJldHVybiBzdGFja3M7XG4gICAgdmFyIHN0YWNrID0gXCJcIjtcbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBmYWlsdXJlID0gcHJvbWlzZS5fdmFsdWUsIGVycm9yTmFtZSwgbWVzc2FnZTtcbiAgICAgICAgaWYgKGZhaWx1cmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgZXJyb3JOYW1lID0gZmFpbHVyZS5uYW1lIHx8IFwiRXJyb3JcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBmYWlsdXJlLm1lc3NhZ2UgfHwgZmFpbHVyZTtcbiAgICAgICAgICAgIHN0YWNrID0gcHJldHR5U3RhY2soZmFpbHVyZSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlcnJvck5hbWUgPSBmYWlsdXJlO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tzLnB1c2goZXJyb3JOYW1lICsgKG1lc3NhZ2UgPyBcIjogXCIgKyBtZXNzYWdlIDogXCJcIikgKyBzdGFjayk7XG4gICAgfVxuICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBzdGFjayA9IHByZXR0eVN0YWNrKHByb21pc2UuX3N0YWNrSG9sZGVyLCAyKTtcbiAgICAgICAgaWYgKHN0YWNrICYmIHN0YWNrcy5pbmRleE9mKHN0YWNrKSA9PT0gLTEpXG4gICAgICAgICAgICBzdGFja3MucHVzaChzdGFjayk7XG4gICAgICAgIGlmIChwcm9taXNlLl9wcmV2KVxuICAgICAgICAgICAgZ2V0U3RhY2socHJvbWlzZS5fcHJldiwgc3RhY2tzLCBsaW1pdCk7XG4gICAgfVxuICAgIHJldHVybiBzdGFja3M7XG59XG5mdW5jdGlvbiBsaW5rVG9QcmV2aW91c1Byb21pc2UocHJvbWlzZSwgcHJldikge1xuICAgIHZhciBudW1QcmV2ID0gcHJldiA/IHByZXYuX251bVByZXYgKyAxIDogMDtcbiAgICBpZiAobnVtUHJldiA8IExPTkdfU1RBQ0tTX0NMSVBfTElNSVQpIHtcbiAgICAgICAgcHJvbWlzZS5fcHJldiA9IHByZXY7XG4gICAgICAgIHByb21pc2UuX251bVByZXYgPSBudW1QcmV2O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBoeXNpY2FsVGljaygpIHtcbiAgICBiZWdpbk1pY3JvVGlja1Njb3BlKCkgJiYgZW5kTWljcm9UaWNrU2NvcGUoKTtcbn1cbmZ1bmN0aW9uIGJlZ2luTWljcm9UaWNrU2NvcGUoKSB7XG4gICAgdmFyIHdhc1Jvb3RFeGVjID0gaXNPdXRzaWRlTWljcm9UaWNrO1xuICAgIGlzT3V0c2lkZU1pY3JvVGljayA9IGZhbHNlO1xuICAgIG5lZWRzTmV3UGh5c2ljYWxUaWNrID0gZmFsc2U7XG4gICAgcmV0dXJuIHdhc1Jvb3RFeGVjO1xufVxuZnVuY3Rpb24gZW5kTWljcm9UaWNrU2NvcGUoKSB7XG4gICAgdmFyIGNhbGxiYWNrcywgaSwgbDtcbiAgICBkbyB7XG4gICAgICAgIHdoaWxlIChtaWNyb3RpY2tRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MgPSBtaWNyb3RpY2tRdWV1ZTtcbiAgICAgICAgICAgIG1pY3JvdGlja1F1ZXVlID0gW107XG4gICAgICAgICAgICBsID0gY2FsbGJhY2tzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpdGVtWzBdLmFwcGx5KG51bGwsIGl0ZW1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSB3aGlsZSAobWljcm90aWNrUXVldWUubGVuZ3RoID4gMCk7XG4gICAgaXNPdXRzaWRlTWljcm9UaWNrID0gdHJ1ZTtcbiAgICBuZWVkc05ld1BoeXNpY2FsVGljayA9IHRydWU7XG59XG5mdW5jdGlvbiBmaW5hbGl6ZVBoeXNpY2FsVGljaygpIHtcbiAgICB2YXIgdW5oYW5kbGVkRXJycyA9IHVuaGFuZGxlZEVycm9ycztcbiAgICB1bmhhbmRsZWRFcnJvcnMgPSBbXTtcbiAgICB1bmhhbmRsZWRFcnJzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcC5fUFNELm9udW5oYW5kbGVkLmNhbGwobnVsbCwgcC5fdmFsdWUsIHApO1xuICAgIH0pO1xuICAgIHZhciBmaW5hbGl6ZXJzID0gdGlja0ZpbmFsaXplcnMuc2xpY2UoMCk7XG4gICAgdmFyIGkgPSBmaW5hbGl6ZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaSlcbiAgICAgICAgZmluYWxpemVyc1stLWldKCk7XG59XG5mdW5jdGlvbiBydW5fYXRfZW5kX29mX3RoaXNfb3JfbmV4dF9waHlzaWNhbF90aWNrKGZuKSB7XG4gICAgZnVuY3Rpb24gZmluYWxpemVyKCkge1xuICAgICAgICBmbigpO1xuICAgICAgICB0aWNrRmluYWxpemVycy5zcGxpY2UodGlja0ZpbmFsaXplcnMuaW5kZXhPZihmaW5hbGl6ZXIpLCAxKTtcbiAgICB9XG4gICAgdGlja0ZpbmFsaXplcnMucHVzaChmaW5hbGl6ZXIpO1xuICAgICsrbnVtU2NoZWR1bGVkQ2FsbHM7XG4gICAgYXNhcCQxKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKC0tbnVtU2NoZWR1bGVkQ2FsbHMgPT09IDApXG4gICAgICAgICAgICBmaW5hbGl6ZVBoeXNpY2FsVGljaygpO1xuICAgIH0sIFtdKTtcbn1cbmZ1bmN0aW9uIGFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IocHJvbWlzZSkge1xuICAgIGlmICghdW5oYW5kbGVkRXJyb3JzLnNvbWUoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAuX3ZhbHVlID09PSBwcm9taXNlLl92YWx1ZTsgfSkpXG4gICAgICAgIHVuaGFuZGxlZEVycm9ycy5wdXNoKHByb21pc2UpO1xufVxuZnVuY3Rpb24gbWFya0Vycm9yQXNIYW5kbGVkKHByb21pc2UpIHtcbiAgICB2YXIgaSA9IHVuaGFuZGxlZEVycm9ycy5sZW5ndGg7XG4gICAgd2hpbGUgKGkpXG4gICAgICAgIGlmICh1bmhhbmRsZWRFcnJvcnNbLS1pXS5fdmFsdWUgPT09IHByb21pc2UuX3ZhbHVlKSB7XG4gICAgICAgICAgICB1bmhhbmRsZWRFcnJvcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG59XG5mdW5jdGlvbiBQcm9taXNlUmVqZWN0KHJlYXNvbikge1xuICAgIHJldHVybiBuZXcgRGV4aWVQcm9taXNlKElOVEVSTkFMLCBmYWxzZSwgcmVhc29uKTtcbn1cbmZ1bmN0aW9uIHdyYXAoZm4sIGVycm9yQ2F0Y2hlcikge1xuICAgIHZhciBwc2QgPSBQU0Q7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdhc1Jvb3RFeGVjID0gYmVnaW5NaWNyb1RpY2tTY29wZSgpLCBvdXRlclNjb3BlID0gUFNEO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3dpdGNoVG9ab25lKHBzZCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JDYXRjaGVyICYmIGVycm9yQ2F0Y2hlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHN3aXRjaFRvWm9uZShvdXRlclNjb3BlLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAod2FzUm9vdEV4ZWMpXG4gICAgICAgICAgICAgICAgZW5kTWljcm9UaWNrU2NvcGUoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgdGFzayA9IHsgYXdhaXRzOiAwLCBlY2hvZXM6IDAsIGlkOiAwIH07XG52YXIgdGFza0NvdW50ZXIgPSAwO1xudmFyIHpvbmVTdGFjayA9IFtdO1xudmFyIHpvbmVFY2hvZXMgPSAwO1xudmFyIHRvdGFsRWNob2VzID0gMDtcbnZhciB6b25lX2lkX2NvdW50ZXIgPSAwO1xuZnVuY3Rpb24gbmV3U2NvcGUoZm4sIHByb3BzJCQxLCBhMSwgYTIpIHtcbiAgICB2YXIgcGFyZW50ID0gUFNELCBwc2QgPSBPYmplY3QuY3JlYXRlKHBhcmVudCk7XG4gICAgcHNkLnBhcmVudCA9IHBhcmVudDtcbiAgICBwc2QucmVmID0gMDtcbiAgICBwc2QuZ2xvYmFsID0gZmFsc2U7XG4gICAgcHNkLmlkID0gKyt6b25lX2lkX2NvdW50ZXI7XG4gICAgdmFyIGdsb2JhbEVudiA9IGdsb2JhbFBTRC5lbnY7XG4gICAgcHNkLmVudiA9IHBhdGNoR2xvYmFsUHJvbWlzZSA/IHtcbiAgICAgICAgUHJvbWlzZTogRGV4aWVQcm9taXNlLFxuICAgICAgICBQcm9taXNlUHJvcDogeyB2YWx1ZTogRGV4aWVQcm9taXNlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0sXG4gICAgICAgIGFsbDogRGV4aWVQcm9taXNlLmFsbCxcbiAgICAgICAgcmFjZTogRGV4aWVQcm9taXNlLnJhY2UsXG4gICAgICAgIGFsbFNldHRsZWQ6IERleGllUHJvbWlzZS5hbGxTZXR0bGVkLFxuICAgICAgICBhbnk6IERleGllUHJvbWlzZS5hbnksXG4gICAgICAgIHJlc29sdmU6IERleGllUHJvbWlzZS5yZXNvbHZlLFxuICAgICAgICByZWplY3Q6IERleGllUHJvbWlzZS5yZWplY3QsXG4gICAgICAgIG50aGVuOiBnZXRQYXRjaGVkUHJvbWlzZVRoZW4oZ2xvYmFsRW52Lm50aGVuLCBwc2QpLFxuICAgICAgICBndGhlbjogZ2V0UGF0Y2hlZFByb21pc2VUaGVuKGdsb2JhbEVudi5ndGhlbiwgcHNkKVxuICAgIH0gOiB7fTtcbiAgICBpZiAocHJvcHMkJDEpXG4gICAgICAgIGV4dGVuZChwc2QsIHByb3BzJCQxKTtcbiAgICArK3BhcmVudC5yZWY7XG4gICAgcHNkLmZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAtLXRoaXMucGFyZW50LnJlZiB8fCB0aGlzLnBhcmVudC5maW5hbGl6ZSgpO1xuICAgIH07XG4gICAgdmFyIHJ2ID0gdXNlUFNEKHBzZCwgZm4sIGExLCBhMik7XG4gICAgaWYgKHBzZC5yZWYgPT09IDApXG4gICAgICAgIHBzZC5maW5hbGl6ZSgpO1xuICAgIHJldHVybiBydjtcbn1cbmZ1bmN0aW9uIGluY3JlbWVudEV4cGVjdGVkQXdhaXRzKCkge1xuICAgIGlmICghdGFzay5pZClcbiAgICAgICAgdGFzay5pZCA9ICsrdGFza0NvdW50ZXI7XG4gICAgKyt0YXNrLmF3YWl0cztcbiAgICB0YXNrLmVjaG9lcyArPSBaT05FX0VDSE9fTElNSVQ7XG4gICAgcmV0dXJuIHRhc2suaWQ7XG59XG5mdW5jdGlvbiBkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cygpIHtcbiAgICBpZiAoIXRhc2suYXdhaXRzKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKC0tdGFzay5hd2FpdHMgPT09IDApXG4gICAgICAgIHRhc2suaWQgPSAwO1xuICAgIHRhc2suZWNob2VzID0gdGFzay5hd2FpdHMgKiBaT05FX0VDSE9fTElNSVQ7XG4gICAgcmV0dXJuIHRydWU7XG59XG5pZiAoKCcnICsgbmF0aXZlUHJvbWlzZVRoZW4pLmluZGV4T2YoJ1tuYXRpdmUgY29kZV0nKSA9PT0gLTEpIHtcbiAgICBpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cyA9IGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzID0gbm9wO1xufVxuZnVuY3Rpb24gb25Qb3NzaWJsZVBhcmFsbGVsbEFzeW5jKHBvc3NpYmxlUHJvbWlzZSkge1xuICAgIGlmICh0YXNrLmVjaG9lcyAmJiBwb3NzaWJsZVByb21pc2UgJiYgcG9zc2libGVQcm9taXNlLmNvbnN0cnVjdG9yID09PSBOYXRpdmVQcm9taXNlKSB7XG4gICAgICAgIGluY3JlbWVudEV4cGVjdGVkQXdhaXRzKCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZVByb21pc2UudGhlbihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMoKTtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMoKTtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9zc2libGVQcm9taXNlO1xufVxuZnVuY3Rpb24gem9uZUVudGVyRWNobyh0YXJnZXRab25lKSB7XG4gICAgKyt0b3RhbEVjaG9lcztcbiAgICBpZiAoIXRhc2suZWNob2VzIHx8IC0tdGFzay5lY2hvZXMgPT09IDApIHtcbiAgICAgICAgdGFzay5lY2hvZXMgPSB0YXNrLmlkID0gMDtcbiAgICB9XG4gICAgem9uZVN0YWNrLnB1c2goUFNEKTtcbiAgICBzd2l0Y2hUb1pvbmUodGFyZ2V0Wm9uZSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiB6b25lTGVhdmVFY2hvKCkge1xuICAgIHZhciB6b25lID0gem9uZVN0YWNrW3pvbmVTdGFjay5sZW5ndGggLSAxXTtcbiAgICB6b25lU3RhY2sucG9wKCk7XG4gICAgc3dpdGNoVG9ab25lKHpvbmUsIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHN3aXRjaFRvWm9uZSh0YXJnZXRab25lLCBiRW50ZXJpbmdab25lKSB7XG4gICAgdmFyIGN1cnJlbnRab25lID0gUFNEO1xuICAgIGlmIChiRW50ZXJpbmdab25lID8gdGFzay5lY2hvZXMgJiYgKCF6b25lRWNob2VzKysgfHwgdGFyZ2V0Wm9uZSAhPT0gUFNEKSA6IHpvbmVFY2hvZXMgJiYgKCEtLXpvbmVFY2hvZXMgfHwgdGFyZ2V0Wm9uZSAhPT0gUFNEKSkge1xuICAgICAgICBlbnF1ZXVlTmF0aXZlTWljcm9UYXNrKGJFbnRlcmluZ1pvbmUgPyB6b25lRW50ZXJFY2hvLmJpbmQobnVsbCwgdGFyZ2V0Wm9uZSkgOiB6b25lTGVhdmVFY2hvKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldFpvbmUgPT09IFBTRClcbiAgICAgICAgcmV0dXJuO1xuICAgIFBTRCA9IHRhcmdldFpvbmU7XG4gICAgaWYgKGN1cnJlbnRab25lID09PSBnbG9iYWxQU0QpXG4gICAgICAgIGdsb2JhbFBTRC5lbnYgPSBzbmFwU2hvdCgpO1xuICAgIGlmIChwYXRjaEdsb2JhbFByb21pc2UpIHtcbiAgICAgICAgdmFyIEdsb2JhbFByb21pc2VfMSA9IGdsb2JhbFBTRC5lbnYuUHJvbWlzZTtcbiAgICAgICAgdmFyIHRhcmdldEVudiA9IHRhcmdldFpvbmUuZW52O1xuICAgICAgICBuYXRpdmVQcm9taXNlUHJvdG8udGhlbiA9IHRhcmdldEVudi5udGhlbjtcbiAgICAgICAgR2xvYmFsUHJvbWlzZV8xLnByb3RvdHlwZS50aGVuID0gdGFyZ2V0RW52Lmd0aGVuO1xuICAgICAgICBpZiAoY3VycmVudFpvbmUuZ2xvYmFsIHx8IHRhcmdldFpvbmUuZ2xvYmFsKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2dsb2JhbCwgJ1Byb21pc2UnLCB0YXJnZXRFbnYuUHJvbWlzZVByb3ApO1xuICAgICAgICAgICAgR2xvYmFsUHJvbWlzZV8xLmFsbCA9IHRhcmdldEVudi5hbGw7XG4gICAgICAgICAgICBHbG9iYWxQcm9taXNlXzEucmFjZSA9IHRhcmdldEVudi5yYWNlO1xuICAgICAgICAgICAgR2xvYmFsUHJvbWlzZV8xLnJlc29sdmUgPSB0YXJnZXRFbnYucmVzb2x2ZTtcbiAgICAgICAgICAgIEdsb2JhbFByb21pc2VfMS5yZWplY3QgPSB0YXJnZXRFbnYucmVqZWN0O1xuICAgICAgICAgICAgaWYgKHRhcmdldEVudi5hbGxTZXR0bGVkKVxuICAgICAgICAgICAgICAgIEdsb2JhbFByb21pc2VfMS5hbGxTZXR0bGVkID0gdGFyZ2V0RW52LmFsbFNldHRsZWQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RW52LmFueSlcbiAgICAgICAgICAgICAgICBHbG9iYWxQcm9taXNlXzEuYW55ID0gdGFyZ2V0RW52LmFueTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNuYXBTaG90KCkge1xuICAgIHZhciBHbG9iYWxQcm9taXNlID0gX2dsb2JhbC5Qcm9taXNlO1xuICAgIHJldHVybiBwYXRjaEdsb2JhbFByb21pc2UgPyB7XG4gICAgICAgIFByb21pc2U6IEdsb2JhbFByb21pc2UsXG4gICAgICAgIFByb21pc2VQcm9wOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9nbG9iYWwsIFwiUHJvbWlzZVwiKSxcbiAgICAgICAgYWxsOiBHbG9iYWxQcm9taXNlLmFsbCxcbiAgICAgICAgcmFjZTogR2xvYmFsUHJvbWlzZS5yYWNlLFxuICAgICAgICBhbGxTZXR0bGVkOiBHbG9iYWxQcm9taXNlLmFsbFNldHRsZWQsXG4gICAgICAgIGFueTogR2xvYmFsUHJvbWlzZS5hbnksXG4gICAgICAgIHJlc29sdmU6IEdsb2JhbFByb21pc2UucmVzb2x2ZSxcbiAgICAgICAgcmVqZWN0OiBHbG9iYWxQcm9taXNlLnJlamVjdCxcbiAgICAgICAgbnRoZW46IG5hdGl2ZVByb21pc2VQcm90by50aGVuLFxuICAgICAgICBndGhlbjogR2xvYmFsUHJvbWlzZS5wcm90b3R5cGUudGhlblxuICAgIH0gOiB7fTtcbn1cbmZ1bmN0aW9uIHVzZVBTRChwc2QsIGZuLCBhMSwgYTIsIGEzKSB7XG4gICAgdmFyIG91dGVyU2NvcGUgPSBQU0Q7XG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoVG9ab25lKHBzZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBmbihhMSwgYTIsIGEzKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHN3aXRjaFRvWm9uZShvdXRlclNjb3BlLCBmYWxzZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZW5xdWV1ZU5hdGl2ZU1pY3JvVGFzayhqb2IpIHtcbiAgICBuYXRpdmVQcm9taXNlVGhlbi5jYWxsKHJlc29sdmVkTmF0aXZlUHJvbWlzZSwgam9iKTtcbn1cbmZ1bmN0aW9uIG5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAoZm4sIHpvbmUsIHBvc3NpYmxlQXdhaXQsIGNsZWFudXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nID8gZm4gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdXRlclpvbmUgPSBQU0Q7XG4gICAgICAgIGlmIChwb3NzaWJsZUF3YWl0KVxuICAgICAgICAgICAgaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMoKTtcbiAgICAgICAgc3dpdGNoVG9ab25lKHpvbmUsIHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzd2l0Y2hUb1pvbmUob3V0ZXJab25lLCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoY2xlYW51cClcbiAgICAgICAgICAgICAgICBlbnF1ZXVlTmF0aXZlTWljcm9UYXNrKGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRQYXRjaGVkUHJvbWlzZVRoZW4ob3JpZ1RoZW4sIHpvbmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9uUmVzb2x2ZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdUaGVuLmNhbGwodGhpcywgbmF0aXZlQXdhaXRDb21wYXRpYmxlV3JhcChvblJlc29sdmVkLCB6b25lKSwgbmF0aXZlQXdhaXRDb21wYXRpYmxlV3JhcChvblJlamVjdGVkLCB6b25lKSk7XG4gICAgfTtcbn1cbnZhciBVTkhBTkRMRURSRUpFQ1RJT04gPSBcInVuaGFuZGxlZHJlamVjdGlvblwiO1xuZnVuY3Rpb24gZ2xvYmFsRXJyb3IoZXJyLCBwcm9taXNlKSB7XG4gICAgdmFyIHJ2O1xuICAgIHRyeSB7XG4gICAgICAgIHJ2ID0gcHJvbWlzZS5vbnVuY2F0Y2hlZChlcnIpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgaWYgKHJ2ICE9PSBmYWxzZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBldmVudCwgZXZlbnREYXRhID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IGVyciB9O1xuICAgICAgICAgICAgaWYgKF9nbG9iYWwuZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudChVTkhBTkRMRURSRUpFQ1RJT04sIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIGV4dGVuZChldmVudCwgZXZlbnREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9nbG9iYWwuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChVTkhBTkRMRURSRUpFQ1RJT04sIHsgZGV0YWlsOiBldmVudERhdGEgfSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKGV2ZW50LCBldmVudERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50ICYmIF9nbG9iYWwuZGlzcGF0Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmICghX2dsb2JhbC5Qcm9taXNlUmVqZWN0aW9uRXZlbnQgJiYgX2dsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24oZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWJ1ZyAmJiBldmVudCAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVuaGFuZGxlZCByZWplY3Rpb246IFwiICsgKGVyci5zdGFjayB8fCBlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG59XG52YXIgcmVqZWN0aW9uID0gRGV4aWVQcm9taXNlLnJlamVjdDtcblxuZnVuY3Rpb24gdGVtcFRyYW5zYWN0aW9uKGRiLCBtb2RlLCBzdG9yZU5hbWVzLCBmbikge1xuICAgIGlmICghZGIuX3N0YXRlLm9wZW5Db21wbGV0ZSAmJiAoIVBTRC5sZXRUaHJvdWdoKSkge1xuICAgICAgICBpZiAoIWRiLl9zdGF0ZS5pc0JlaW5nT3BlbmVkKSB7XG4gICAgICAgICAgICBpZiAoIWRiLl9vcHRpb25zLmF1dG9PcGVuKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuRGF0YWJhc2VDbG9zZWQoKSk7XG4gICAgICAgICAgICBkYi5vcGVuKCkuY2F0Y2gobm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGIuX3N0YXRlLmRiUmVhZHlQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdGVtcFRyYW5zYWN0aW9uKGRiLCBtb2RlLCBzdG9yZU5hbWVzLCBmbik7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRyYW5zID0gZGIuX2NyZWF0ZVRyYW5zYWN0aW9uKG1vZGUsIHN0b3JlTmFtZXMsIGRiLl9kYlNjaGVtYSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0cmFucy5jcmVhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cmFucy5fcHJvbWlzZShtb2RlLCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3U2NvcGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFBTRC50cmFucyA9IHRyYW5zO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbihyZXNvbHZlLCByZWplY3QsIHRyYW5zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFucy5fY29tcGxldGlvbi50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc3VsdDsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxudmFyIERFWElFX1ZFUlNJT04gPSAnMy4wLjMnO1xudmFyIG1heFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjU1MzUpO1xudmFyIG1pbktleSA9IC1JbmZpbml0eTtcbnZhciBJTlZBTElEX0tFWV9BUkdVTUVOVCA9IFwiSW52YWxpZCBrZXkgcHJvdmlkZWQuIEtleXMgbXVzdCBiZSBvZiB0eXBlIHN0cmluZywgbnVtYmVyLCBEYXRlIG9yIEFycmF5PHN0cmluZyB8IG51bWJlciB8IERhdGU+LlwiO1xudmFyIFNUUklOR19FWFBFQ1RFRCA9IFwiU3RyaW5nIGV4cGVjdGVkLlwiO1xudmFyIGNvbm5lY3Rpb25zID0gW107XG52YXIgaXNJRU9yRWRnZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC8oTVNJRXxUcmlkZW50fEVkZ2UpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIGhhc0lFRGVsZXRlT2JqZWN0U3RvcmVCdWcgPSBpc0lFT3JFZGdlO1xudmFyIGhhbmdzT25EZWxldGVMYXJnZUtleVJhbmdlID0gaXNJRU9yRWRnZTtcbnZhciBkZXhpZVN0YWNrRnJhbWVGaWx0ZXIgPSBmdW5jdGlvbiAoZnJhbWUpIHsgcmV0dXJuICEvKGRleGllXFwuanN8ZGV4aWVcXC5taW5cXC5qcykvLnRlc3QoZnJhbWUpOyB9O1xudmFyIERCTkFNRVNfREIgPSAnX19kYm5hbWVzJztcbnZhciBSRUFET05MWSA9ICdyZWFkb25seSc7XG52YXIgUkVBRFdSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbmZ1bmN0aW9uIGNvbWJpbmUoZmlsdGVyMSwgZmlsdGVyMikge1xuICAgIHJldHVybiBmaWx0ZXIxID9cbiAgICAgICAgZmlsdGVyMiA/XG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBmaWx0ZXIxLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgJiYgZmlsdGVyMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IDpcbiAgICAgICAgICAgIGZpbHRlcjEgOlxuICAgICAgICBmaWx0ZXIyO1xufVxuXG52YXIgQW55UmFuZ2UgPSB7XG4gICAgdHlwZTogMyAgICAgICAgICAsXG4gICAgbG93ZXI6IC1JbmZpbml0eSxcbiAgICBsb3dlck9wZW46IGZhbHNlLFxuICAgIHVwcGVyOiBbW11dLFxuICAgIHVwcGVyT3BlbjogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIHdvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5KGtleVBhdGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoZ2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aCkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JqID0gZGVlcENsb25lKG9iaik7XG4gICAgICAgICAgICBkZWxCeUtleVBhdGgob2JqLCBrZXlQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG59XG5cbnZhciBUYWJsZSA9ICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYWJsZSgpIHtcbiAgICB9XG4gICAgVGFibGUucHJvdG90eXBlLl90cmFucyA9IGZ1bmN0aW9uIChtb2RlLCBmbiwgd3JpdGVMb2NrZWQpIHtcbiAgICAgICAgdmFyIHRyYW5zID0gdGhpcy5fdHggfHwgUFNELnRyYW5zO1xuICAgICAgICB2YXIgdGFibGVOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBmdW5jdGlvbiBjaGVja1RhYmxlSW5UcmFuc2FjdGlvbihyZXNvbHZlLCByZWplY3QsIHRyYW5zKSB7XG4gICAgICAgICAgICBpZiAoIXRyYW5zLnNjaGVtYVt0YWJsZU5hbWVdKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk5vdEZvdW5kKFwiVGFibGUgXCIgKyB0YWJsZU5hbWUgKyBcIiBub3QgcGFydCBvZiB0cmFuc2FjdGlvblwiKTtcbiAgICAgICAgICAgIHJldHVybiBmbih0cmFucy5pZGJ0cmFucywgdHJhbnMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXNSb290RXhlYyA9IGJlZ2luTWljcm9UaWNrU2NvcGUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0cmFucyAmJiB0cmFucy5kYiA9PT0gdGhpcy5kYiA/XG4gICAgICAgICAgICAgICAgdHJhbnMgPT09IFBTRC50cmFucyA/XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zLl9wcm9taXNlKG1vZGUsIGNoZWNrVGFibGVJblRyYW5zYWN0aW9uLCB3cml0ZUxvY2tlZCkgOlxuICAgICAgICAgICAgICAgICAgICBuZXdTY29wZShmdW5jdGlvbiAoKSB7IHJldHVybiB0cmFucy5fcHJvbWlzZShtb2RlLCBjaGVja1RhYmxlSW5UcmFuc2FjdGlvbiwgd3JpdGVMb2NrZWQpOyB9LCB7IHRyYW5zOiB0cmFucywgdHJhbnNsZXNzOiBQU0QudHJhbnNsZXNzIHx8IFBTRCB9KSA6XG4gICAgICAgICAgICAgICAgdGVtcFRyYW5zYWN0aW9uKHRoaXMuZGIsIG1vZGUsIFt0aGlzLm5hbWVdLCBjaGVja1RhYmxlSW5UcmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBpZiAod2FzUm9vdEV4ZWMpXG4gICAgICAgICAgICAgICAgZW5kTWljcm9UaWNrU2NvcGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXlPckNyaXQsIGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChrZXlPckNyaXQgJiYga2V5T3JDcml0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aGVyZShrZXlPckNyaXQpLmZpcnN0KGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkb25seScsIGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvcmUuZ2V0KHsgdHJhbnM6IHRyYW5zLCBrZXk6IGtleU9yQ3JpdCB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIF90aGlzLmhvb2sucmVhZGluZy5maXJlKHJlcyk7IH0pO1xuICAgICAgICB9KS50aGVuKGNiKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS53aGVyZSA9IGZ1bmN0aW9uIChpbmRleE9yQ3JpdCkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4T3JDcml0ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5kYi5XaGVyZUNsYXVzZSh0aGlzLCBpbmRleE9yQ3JpdCk7XG4gICAgICAgIGlmIChpc0FycmF5KGluZGV4T3JDcml0KSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5kYi5XaGVyZUNsYXVzZSh0aGlzLCBcIltcIiArIGluZGV4T3JDcml0LmpvaW4oJysnKSArIFwiXVwiKTtcbiAgICAgICAgdmFyIGtleVBhdGhzID0ga2V5cyhpbmRleE9yQ3JpdCk7XG4gICAgICAgIGlmIChrZXlQYXRocy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgICAgICAgIC53aGVyZShrZXlQYXRoc1swXSlcbiAgICAgICAgICAgICAgICAuZXF1YWxzKGluZGV4T3JDcml0W2tleVBhdGhzWzBdXSk7XG4gICAgICAgIHZhciBjb21wb3VuZEluZGV4ID0gdGhpcy5zY2hlbWEuaW5kZXhlcy5jb25jYXQodGhpcy5zY2hlbWEucHJpbUtleSkuZmlsdGVyKGZ1bmN0aW9uIChpeCkge1xuICAgICAgICAgICAgcmV0dXJuIGl4LmNvbXBvdW5kICYmXG4gICAgICAgICAgICAgICAga2V5UGF0aHMuZXZlcnkoZnVuY3Rpb24gKGtleVBhdGgpIHsgcmV0dXJuIGl4LmtleVBhdGguaW5kZXhPZihrZXlQYXRoKSA+PSAwOyB9KSAmJlxuICAgICAgICAgICAgICAgIGl4LmtleVBhdGguZXZlcnkoZnVuY3Rpb24gKGtleVBhdGgpIHsgcmV0dXJuIGtleVBhdGhzLmluZGV4T2Yoa2V5UGF0aCkgPj0gMDsgfSk7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoY29tcG91bmRJbmRleCAmJiB0aGlzLmRiLl9tYXhLZXkgIT09IG1heFN0cmluZylcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgICAgICAgLndoZXJlKGNvbXBvdW5kSW5kZXgubmFtZSlcbiAgICAgICAgICAgICAgICAuZXF1YWxzKGNvbXBvdW5kSW5kZXgua2V5UGF0aC5tYXAoZnVuY3Rpb24gKGtwKSB7IHJldHVybiBpbmRleE9yQ3JpdFtrcF07IH0pKTtcbiAgICAgICAgaWYgKCFjb21wb3VuZEluZGV4ICYmIGRlYnVnKVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIHF1ZXJ5IFwiICsgSlNPTi5zdHJpbmdpZnkoaW5kZXhPckNyaXQpICsgXCIgb24gXCIgKyB0aGlzLm5hbWUgKyBcIiB3b3VsZCBiZW5lZml0IG9mIGEgXCIgK1xuICAgICAgICAgICAgICAgIChcImNvbXBvdW5kIGluZGV4IFtcIiArIGtleVBhdGhzLmpvaW4oJysnKSArIFwiXVwiKSk7XG4gICAgICAgIHZhciBpZHhCeU5hbWUgPSB0aGlzLnNjaGVtYS5pZHhCeU5hbWU7XG4gICAgICAgIHZhciBpZGIgPSB0aGlzLmRiLl9kZXBzLmluZGV4ZWREQjtcbiAgICAgICAgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkYi5jbXAoYSwgYikgPT09IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBrZXlQYXRocy5yZWR1Y2UoZnVuY3Rpb24gKF9hLCBrZXlQYXRoKSB7XG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gX2FbMF0sIHByZXZGaWx0ZXJGbiA9IF9hWzFdO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaWR4QnlOYW1lW2tleVBhdGhdO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5kZXhPckNyaXRba2V5UGF0aF07XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHByZXZJbmRleCB8fCBpbmRleCxcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggfHwgIWluZGV4ID9cbiAgICAgICAgICAgICAgICAgICAgY29tYmluZShwcmV2RmlsdGVyRm4sIGluZGV4ICYmIGluZGV4Lm11bHRpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3AgPSBnZXRCeUtleVBhdGgoeCwga2V5UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkocHJvcCkgJiYgcHJvcC5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBlcXVhbHModmFsdWUsIGl0ZW0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gZXF1YWxzKHZhbHVlLCBnZXRCeUtleVBhdGgoeCwga2V5UGF0aCkpOyB9KVxuICAgICAgICAgICAgICAgICAgICA6IHByZXZGaWx0ZXJGblxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSwgW251bGwsIG51bGxdKSwgaWR4ID0gX2FbMF0sIGZpbHRlckZ1bmN0aW9uID0gX2FbMV07XG4gICAgICAgIHJldHVybiBpZHggP1xuICAgICAgICAgICAgdGhpcy53aGVyZShpZHgubmFtZSkuZXF1YWxzKGluZGV4T3JDcml0W2lkeC5rZXlQYXRoXSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZpbHRlckZ1bmN0aW9uKSA6XG4gICAgICAgICAgICBjb21wb3VuZEluZGV4ID9cbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlcihmaWx0ZXJGdW5jdGlvbikgOlxuICAgICAgICAgICAgICAgIHRoaXMud2hlcmUoa2V5UGF0aHMpLmVxdWFscygnJyk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmFuZChmaWx0ZXJGdW5jdGlvbik7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAodGhlblNob3J0Y3V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmNvdW50KHRoZW5TaG9ydGN1dCk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0NvbGxlY3Rpb24oKS5vZmZzZXQob2Zmc2V0KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5saW1pdCA9IGZ1bmN0aW9uIChudW1Sb3dzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmxpbWl0KG51bVJvd3MpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkuZWFjaChjYWxsYmFjayk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICh0aGVuU2hvcnRjdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkudG9BcnJheSh0aGVuU2hvcnRjdXQpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLnRvQ29sbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmRiLkNvbGxlY3Rpb24obmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcykpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLm9yZGVyQnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmRiLkNvbGxlY3Rpb24obmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcywgaXNBcnJheShpbmRleCkgP1xuICAgICAgICAgICAgXCJbXCIgKyBpbmRleC5qb2luKCcrJykgKyBcIl1cIiA6XG4gICAgICAgICAgICBpbmRleCkpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLnJldmVyc2UoKTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5tYXBUb0NsYXNzID0gZnVuY3Rpb24gKGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hLm1hcHBlZENsYXNzID0gY29uc3RydWN0b3I7XG4gICAgICAgIHZhciByZWFkSG9vayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGlmICghb2JqKVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBvYmopXG4gICAgICAgICAgICAgICAgaWYgKGhhc093bihvYmosIG0pKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzW21dID0gb2JqW21dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkSG9vaykge1xuICAgICAgICAgICAgdGhpcy5ob29rLnJlYWRpbmcudW5zdWJzY3JpYmUodGhpcy5zY2hlbWEucmVhZEhvb2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZW1hLnJlYWRIb29rID0gcmVhZEhvb2s7XG4gICAgICAgIHRoaXMuaG9vayhcInJlYWRpbmdcIiwgcmVhZEhvb2spO1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuZGVmaW5lQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENsYXNzKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGV4dGVuZCh0aGlzLCBjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwVG9DbGFzcyhDbGFzcyk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2NoZW1hLnByaW1LZXksIGF1dG8gPSBfYS5hdXRvLCBrZXlQYXRoID0gX2Eua2V5UGF0aDtcbiAgICAgICAgdmFyIG9ialRvQWRkID0gb2JqO1xuICAgICAgICBpZiAoa2V5UGF0aCAmJiBhdXRvKSB7XG4gICAgICAgICAgICBvYmpUb0FkZCA9IHdvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5KGtleVBhdGgpKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkd3JpdGUnLCBmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2FkZCcsIGtleXM6IGtleSAhPSBudWxsID8gW2tleV0gOiBudWxsLCB2YWx1ZXM6IFtvYmpUb0FkZF0gfSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLm51bUZhaWx1cmVzID8gRGV4aWVQcm9taXNlLnJlamVjdChyZXMuZmFpbHVyZXNbMF0pIDogcmVzLmxhc3RSZXN1bHQ7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobGFzdFJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzZXRCeUtleVBhdGgob2JqLCBrZXlQYXRoLCBsYXN0UmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChrZXlPck9iamVjdCwgbW9kaWZpY2F0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWNhdGlvbnMgIT09ICdvYmplY3QnIHx8IGlzQXJyYXkobW9kaWZpY2F0aW9ucykpXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJNb2RpZmljYXRpb25zIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXlPck9iamVjdCA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoa2V5T3JPYmplY3QpKSB7XG4gICAgICAgICAgICBrZXlzKG1vZGlmaWNhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleVBhdGgpIHtcbiAgICAgICAgICAgICAgICBzZXRCeUtleVBhdGgoa2V5T3JPYmplY3QsIGtleVBhdGgsIG1vZGlmaWNhdGlvbnNba2V5UGF0aF0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIga2V5ID0gZ2V0QnlLZXlQYXRoKGtleU9yT2JqZWN0LCB0aGlzLnNjaGVtYS5wcmltS2V5LmtleVBhdGgpO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiR2l2ZW4gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gaXRzIHByaW1hcnkga2V5XCIpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndoZXJlKFwiOmlkXCIpLmVxdWFscyhrZXkpLm1vZGlmeShtb2RpZmljYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndoZXJlKFwiOmlkXCIpLmVxdWFscyhrZXlPck9iamVjdCkubW9kaWZ5KG1vZGlmaWNhdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2NoZW1hLnByaW1LZXksIGF1dG8gPSBfYS5hdXRvLCBrZXlQYXRoID0gX2Eua2V5UGF0aDtcbiAgICAgICAgdmFyIG9ialRvQWRkID0gb2JqO1xuICAgICAgICBpZiAoa2V5UGF0aCAmJiBhdXRvKSB7XG4gICAgICAgICAgICBvYmpUb0FkZCA9IHdvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5KGtleVBhdGgpKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkd3JpdGUnLCBmdW5jdGlvbiAodHJhbnMpIHsgcmV0dXJuIF90aGlzLmNvcmUubXV0YXRlKHsgdHJhbnM6IHRyYW5zLCB0eXBlOiAncHV0JywgdmFsdWVzOiBbb2JqVG9BZGRdLCBrZXlzOiBrZXkgIT0gbnVsbCA/IFtrZXldIDogbnVsbCB9KTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1GYWlsdXJlcyA/IERleGllUHJvbWlzZS5yZWplY3QocmVzLmZhaWx1cmVzWzBdKSA6IHJlcy5sYXN0UmVzdWx0OyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGxhc3RSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChrZXlQYXRoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aCwgbGFzdFJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFucygncmVhZHdyaXRlJywgZnVuY3Rpb24gKHRyYW5zKSB7IHJldHVybiBfdGhpcy5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2RlbGV0ZScsIGtleXM6IFtrZXldIH0pOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLm51bUZhaWx1cmVzID8gRGV4aWVQcm9taXNlLnJlamVjdChyZXMuZmFpbHVyZXNbMF0pIDogdW5kZWZpbmVkOyB9KTtcbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zKCdyZWFkd3JpdGUnLCBmdW5jdGlvbiAodHJhbnMpIHsgcmV0dXJuIF90aGlzLmNvcmUubXV0YXRlKHsgdHJhbnM6IHRyYW5zLCB0eXBlOiAnZGVsZXRlUmFuZ2UnLCByYW5nZTogQW55UmFuZ2UgfSk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMubnVtRmFpbHVyZXMgPyBEZXhpZVByb21pc2UucmVqZWN0KHJlcy5mYWlsdXJlc1swXSkgOiB1bmRlZmluZWQ7IH0pO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmJ1bGtHZXQgPSBmdW5jdGlvbiAoa2V5cyQkMSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnMoJ3JlYWRvbmx5JywgZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29yZS5nZXRNYW55KHtcbiAgICAgICAgICAgICAgICBrZXlzOiBrZXlzJCQxLFxuICAgICAgICAgICAgICAgIHRyYW5zOiB0cmFuc1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQubWFwKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIF90aGlzLmhvb2sucmVhZGluZy5maXJlKHJlcyk7IH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuYnVsa0FkZCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXlzT3JPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBrZXlzJCQxID0gQXJyYXkuaXNBcnJheShrZXlzT3JPcHRpb25zKSA/IGtleXNPck9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IChrZXlzJCQxID8gdW5kZWZpbmVkIDoga2V5c09yT3B0aW9ucyk7XG4gICAgICAgIHZhciB3YW50UmVzdWx0cyA9IG9wdGlvbnMgPyBvcHRpb25zLmFsbEtleXMgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFucygncmVhZHdyaXRlJywgZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5zY2hlbWEucHJpbUtleSwgYXV0byA9IF9hLmF1dG8sIGtleVBhdGggPSBfYS5rZXlQYXRoO1xuICAgICAgICAgICAgaWYgKGtleVBhdGggJiYga2V5cyQkMSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJidWxrQWRkKCk6IGtleXMgYXJndW1lbnQgaW52YWxpZCBvbiB0YWJsZXMgd2l0aCBpbmJvdW5kIGtleXNcIik7XG4gICAgICAgICAgICBpZiAoa2V5cyQkMSAmJiBrZXlzJCQxLmxlbmd0aCAhPT0gb2JqZWN0cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG9iamVjdHMgYW5kIGtleXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHZhciBudW1PYmplY3RzID0gb2JqZWN0cy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgb2JqZWN0c1RvQWRkID0ga2V5UGF0aCAmJiBhdXRvID9cbiAgICAgICAgICAgICAgICBvYmplY3RzLm1hcCh3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleShrZXlQYXRoKSkgOlxuICAgICAgICAgICAgICAgIG9iamVjdHM7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29yZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdhZGQnLCBrZXlzOiBrZXlzJCQxLCB2YWx1ZXM6IG9iamVjdHNUb0FkZCwgd2FudFJlc3VsdHM6IHdhbnRSZXN1bHRzIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bUZhaWx1cmVzID0gX2EubnVtRmFpbHVyZXMsIHJlc3VsdHMgPSBfYS5yZXN1bHRzLCBsYXN0UmVzdWx0ID0gX2EubGFzdFJlc3VsdCwgZmFpbHVyZXMgPSBfYS5mYWlsdXJlcztcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gd2FudFJlc3VsdHMgPyByZXN1bHRzIDogbGFzdFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAobnVtRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJ1bGtFcnJvcihfdGhpcy5uYW1lICsgXCIuYnVsa0FkZCgpOiBcIiArIG51bUZhaWx1cmVzICsgXCIgb2YgXCIgKyBudW1PYmplY3RzICsgXCIgb3BlcmF0aW9ucyBmYWlsZWRcIiwgT2JqZWN0LmtleXMoZmFpbHVyZXMpLm1hcChmdW5jdGlvbiAocG9zKSB7IHJldHVybiBmYWlsdXJlc1twb3NdOyB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuYnVsa1B1dCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXlzT3JPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBrZXlzJCQxID0gQXJyYXkuaXNBcnJheShrZXlzT3JPcHRpb25zKSA/IGtleXNPck9wdGlvbnMgOiB1bmRlZmluZWQ7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IChrZXlzJCQxID8gdW5kZWZpbmVkIDoga2V5c09yT3B0aW9ucyk7XG4gICAgICAgIHZhciB3YW50UmVzdWx0cyA9IG9wdGlvbnMgPyBvcHRpb25zLmFsbEtleXMgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFucygncmVhZHdyaXRlJywgZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5zY2hlbWEucHJpbUtleSwgYXV0byA9IF9hLmF1dG8sIGtleVBhdGggPSBfYS5rZXlQYXRoO1xuICAgICAgICAgICAgaWYgKGtleVBhdGggJiYga2V5cyQkMSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJidWxrUHV0KCk6IGtleXMgYXJndW1lbnQgaW52YWxpZCBvbiB0YWJsZXMgd2l0aCBpbmJvdW5kIGtleXNcIik7XG4gICAgICAgICAgICBpZiAoa2V5cyQkMSAmJiBrZXlzJCQxLmxlbmd0aCAhPT0gb2JqZWN0cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG9iamVjdHMgYW5kIGtleXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiKTtcbiAgICAgICAgICAgIHZhciBudW1PYmplY3RzID0gb2JqZWN0cy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgb2JqZWN0c1RvUHV0ID0ga2V5UGF0aCAmJiBhdXRvID9cbiAgICAgICAgICAgICAgICBvYmplY3RzLm1hcCh3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleShrZXlQYXRoKSkgOlxuICAgICAgICAgICAgICAgIG9iamVjdHM7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29yZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdwdXQnLCBrZXlzOiBrZXlzJCQxLCB2YWx1ZXM6IG9iamVjdHNUb1B1dCwgd2FudFJlc3VsdHM6IHdhbnRSZXN1bHRzIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bUZhaWx1cmVzID0gX2EubnVtRmFpbHVyZXMsIHJlc3VsdHMgPSBfYS5yZXN1bHRzLCBsYXN0UmVzdWx0ID0gX2EubGFzdFJlc3VsdCwgZmFpbHVyZXMgPSBfYS5mYWlsdXJlcztcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gd2FudFJlc3VsdHMgPyByZXN1bHRzIDogbGFzdFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAobnVtRmFpbHVyZXMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJ1bGtFcnJvcihfdGhpcy5uYW1lICsgXCIuYnVsa1B1dCgpOiBcIiArIG51bUZhaWx1cmVzICsgXCIgb2YgXCIgKyBudW1PYmplY3RzICsgXCIgb3BlcmF0aW9ucyBmYWlsZWRcIiwgT2JqZWN0LmtleXMoZmFpbHVyZXMpLm1hcChmdW5jdGlvbiAocG9zKSB7IHJldHVybiBmYWlsdXJlc1twb3NdOyB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUYWJsZS5wcm90b3R5cGUuYnVsa0RlbGV0ZSA9IGZ1bmN0aW9uIChrZXlzJCQxKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBudW1LZXlzID0ga2V5cyQkMS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFucygncmVhZHdyaXRlJywgZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY29yZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdkZWxldGUnLCBrZXlzOiBrZXlzJCQxIH0pO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG51bUZhaWx1cmVzID0gX2EubnVtRmFpbHVyZXMsIGxhc3RSZXN1bHQgPSBfYS5sYXN0UmVzdWx0LCBmYWlsdXJlcyA9IF9hLmZhaWx1cmVzO1xuICAgICAgICAgICAgaWYgKG51bUZhaWx1cmVzID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJ1bGtFcnJvcihfdGhpcy5uYW1lICsgXCIuYnVsa0RlbGV0ZSgpOiBcIiArIG51bUZhaWx1cmVzICsgXCIgb2YgXCIgKyBudW1LZXlzICsgXCIgb3BlcmF0aW9ucyBmYWlsZWRcIiwgZmFpbHVyZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oKSk7XG5cbmZ1bmN0aW9uIEV2ZW50cyhjdHgpIHtcbiAgICB2YXIgZXZzID0ge307XG4gICAgdmFyIHJ2ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGkgLSAxKTtcbiAgICAgICAgICAgIHdoaWxlICgtLWkpXG4gICAgICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBldnNbZXZlbnROYW1lXS5zdWJzY3JpYmUuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAoZXZlbnROYW1lKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBldnNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcnYuYWRkRXZlbnRUeXBlID0gYWRkO1xuICAgIGZvciAodmFyIGkgPSAxLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBhZGQoYXJndW1lbnRzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xuICAgIGZ1bmN0aW9uIGFkZChldmVudE5hbWUsIGNoYWluRnVuY3Rpb24sIGRlZmF1bHRGdW5jdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICByZXR1cm4gYWRkQ29uZmlndXJlZEV2ZW50cyhldmVudE5hbWUpO1xuICAgICAgICBpZiAoIWNoYWluRnVuY3Rpb24pXG4gICAgICAgICAgICBjaGFpbkZ1bmN0aW9uID0gcmV2ZXJzZVN0b3BwYWJsZUV2ZW50Q2hhaW47XG4gICAgICAgIGlmICghZGVmYXVsdEZ1bmN0aW9uKVxuICAgICAgICAgICAgZGVmYXVsdEZ1bmN0aW9uID0gbm9wO1xuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzOiBbXSxcbiAgICAgICAgICAgIGZpcmU6IGRlZmF1bHRGdW5jdGlvbixcbiAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRleHQuc3Vic2NyaWJlcnMuaW5kZXhPZihjYikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Vic2NyaWJlcnMucHVzaChjYik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlyZSA9IGNoYWluRnVuY3Rpb24oY29udGV4dC5maXJlLCBjYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN1YnNjcmliZXJzID0gY29udGV4dC5zdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24gKGZuKSB7IHJldHVybiBmbiAhPT0gY2I7IH0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlyZSA9IGNvbnRleHQuc3Vic2NyaWJlcnMucmVkdWNlKGNoYWluRnVuY3Rpb24sIGRlZmF1bHRGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGV2c1tldmVudE5hbWVdID0gcnZbZXZlbnROYW1lXSA9IGNvbnRleHQ7XG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDb25maWd1cmVkRXZlbnRzKGNmZykge1xuICAgICAgICBrZXlzKGNmZykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGNmZ1tldmVudE5hbWVdO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICAgICAgICBhZGQoZXZlbnROYW1lLCBjZmdbZXZlbnROYW1lXVswXSwgY2ZnW2V2ZW50TmFtZV1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJncyA9PT0gJ2FzYXAnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBhZGQoZXZlbnROYW1lLCBtaXJyb3IsIGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShpKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzYXAoZnVuY3Rpb24gZmlyZUV2ZW50KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLkludmFsaWRBcmd1bWVudChcIkludmFsaWQgZXZlbnQgY29uZmlnXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDbGFzc0NvbnN0cnVjdG9yKHByb3RvdHlwZSwgY29uc3RydWN0b3IpIHtcbiAgICBkZXJpdmUoY29uc3RydWN0b3IpLmZyb20oeyBwcm90b3R5cGU6IHByb3RvdHlwZSB9KTtcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlQ29uc3RydWN0b3IoZGIpIHtcbiAgICByZXR1cm4gbWFrZUNsYXNzQ29uc3RydWN0b3IoVGFibGUucHJvdG90eXBlLCBmdW5jdGlvbiBUYWJsZSQkMShuYW1lLCB0YWJsZVNjaGVtYSwgdHJhbnMpIHtcbiAgICAgICAgdGhpcy5kYiA9IGRiO1xuICAgICAgICB0aGlzLl90eCA9IHRyYW5zO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNjaGVtYSA9IHRhYmxlU2NoZW1hO1xuICAgICAgICB0aGlzLmhvb2sgPSBkYi5fYWxsVGFibGVzW25hbWVdID8gZGIuX2FsbFRhYmxlc1tuYW1lXS5ob29rIDogRXZlbnRzKG51bGwsIHtcbiAgICAgICAgICAgIFwiY3JlYXRpbmdcIjogW2hvb2tDcmVhdGluZ0NoYWluLCBub3BdLFxuICAgICAgICAgICAgXCJyZWFkaW5nXCI6IFtwdXJlRnVuY3Rpb25DaGFpbiwgbWlycm9yXSxcbiAgICAgICAgICAgIFwidXBkYXRpbmdcIjogW2hvb2tVcGRhdGluZ0NoYWluLCBub3BdLFxuICAgICAgICAgICAgXCJkZWxldGluZ1wiOiBbaG9va0RlbGV0aW5nQ2hhaW4sIG5vcF1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5LZXlSYW5nZShjdHgsIGlnbm9yZUxpbWl0RmlsdGVyKSB7XG4gICAgcmV0dXJuICEoY3R4LmZpbHRlciB8fCBjdHguYWxnb3JpdGhtIHx8IGN0eC5vcikgJiZcbiAgICAgICAgKGlnbm9yZUxpbWl0RmlsdGVyID8gY3R4Lmp1c3RMaW1pdCA6ICFjdHgucmVwbGF5RmlsdGVyKTtcbn1cbmZ1bmN0aW9uIGFkZEZpbHRlcihjdHgsIGZuKSB7XG4gICAgY3R4LmZpbHRlciA9IGNvbWJpbmUoY3R4LmZpbHRlciwgZm4pO1xufVxuZnVuY3Rpb24gYWRkUmVwbGF5RmlsdGVyKGN0eCwgZmFjdG9yeSwgaXNMaW1pdEZpbHRlcikge1xuICAgIHZhciBjdXJyID0gY3R4LnJlcGxheUZpbHRlcjtcbiAgICBjdHgucmVwbGF5RmlsdGVyID0gY3VyciA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbWJpbmUoY3VycigpLCBmYWN0b3J5KCkpOyB9IDogZmFjdG9yeTtcbiAgICBjdHguanVzdExpbWl0ID0gaXNMaW1pdEZpbHRlciAmJiAhY3Vycjtcbn1cbmZ1bmN0aW9uIGFkZE1hdGNoRmlsdGVyKGN0eCwgZm4pIHtcbiAgICBjdHguaXNNYXRjaCA9IGNvbWJpbmUoY3R4LmlzTWF0Y2gsIGZuKTtcbn1cbmZ1bmN0aW9uIGdldEluZGV4T3JTdG9yZShjdHgsIGNvcmVTY2hlbWEpIHtcbiAgICBpZiAoY3R4LmlzUHJpbUtleSlcbiAgICAgICAgcmV0dXJuIGNvcmVTY2hlbWEucHJpbWFyeUtleTtcbiAgICB2YXIgaW5kZXggPSBjb3JlU2NoZW1hLmdldEluZGV4QnlLZXlQYXRoKGN0eC5pbmRleCk7XG4gICAgaWYgKCFpbmRleClcbiAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuU2NoZW1hKFwiS2V5UGF0aCBcIiArIGN0eC5pbmRleCArIFwiIG9uIG9iamVjdCBzdG9yZSBcIiArIGNvcmVTY2hlbWEubmFtZSArIFwiIGlzIG5vdCBpbmRleGVkXCIpO1xuICAgIHJldHVybiBpbmRleDtcbn1cbmZ1bmN0aW9uIG9wZW5DdXJzb3IoY3R4LCBjb3JlVGFibGUsIHRyYW5zKSB7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhPclN0b3JlKGN0eCwgY29yZVRhYmxlLnNjaGVtYSk7XG4gICAgcmV0dXJuIGNvcmVUYWJsZS5vcGVuQ3Vyc29yKHtcbiAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICB2YWx1ZXM6ICFjdHgua2V5c09ubHksXG4gICAgICAgIHJldmVyc2U6IGN0eC5kaXIgPT09ICdwcmV2JyxcbiAgICAgICAgdW5pcXVlOiAhIWN0eC51bmlxdWUsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICByYW5nZTogY3R4LnJhbmdlXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGl0ZXIoY3R4LCBmbiwgY29yZVRyYW5zLCBjb3JlVGFibGUpIHtcbiAgICB2YXIgZmlsdGVyID0gY3R4LnJlcGxheUZpbHRlciA/IGNvbWJpbmUoY3R4LmZpbHRlciwgY3R4LnJlcGxheUZpbHRlcigpKSA6IGN0eC5maWx0ZXI7XG4gICAgaWYgKCFjdHgub3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdGUob3BlbkN1cnNvcihjdHgsIGNvcmVUYWJsZSwgY29yZVRyYW5zKSwgY29tYmluZShjdHguYWxnb3JpdGhtLCBmaWx0ZXIpLCBmbiwgIWN0eC5rZXlzT25seSAmJiBjdHgudmFsdWVNYXBwZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHNldF8xID0ge307XG4gICAgICAgIHZhciB1bmlvbiA9IGZ1bmN0aW9uIChpdGVtLCBjdXJzb3IsIGFkdmFuY2UpIHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyIHx8IGZpbHRlcihjdXJzb3IsIGFkdmFuY2UsIGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIGN1cnNvci5zdG9wKHJlc3VsdCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGN1cnNvci5mYWlsKGVycik7IH0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByaW1hcnlLZXkgPSBjdXJzb3IucHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gJycgKyBwcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpXG4gICAgICAgICAgICAgICAgICAgIGtleSA9ICcnICsgbmV3IFVpbnQ4QXJyYXkocHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPd24oc2V0XzEsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0XzFba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZuKGl0ZW0sIGN1cnNvciwgYWR2YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgY3R4Lm9yLl9pdGVyYXRlKHVuaW9uLCBjb3JlVHJhbnMpLFxuICAgICAgICAgICAgaXRlcmF0ZShvcGVuQ3Vyc29yKGN0eCwgY29yZVRhYmxlLCBjb3JlVHJhbnMpLCBjdHguYWxnb3JpdGhtLCB1bmlvbiwgIWN0eC5rZXlzT25seSAmJiBjdHgudmFsdWVNYXBwZXIpXG4gICAgICAgIF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGl0ZXJhdGUoY3Vyc29yUHJvbWlzZSwgZmlsdGVyLCBmbiwgdmFsdWVNYXBwZXIpIHtcbiAgICB2YXIgbWFwcGVkRm4gPSB2YWx1ZU1hcHBlciA/IGZ1bmN0aW9uICh4LCBjLCBhKSB7IHJldHVybiBmbih2YWx1ZU1hcHBlcih4KSwgYywgYSk7IH0gOiBmbjtcbiAgICB2YXIgd3JhcHBlZEZuID0gd3JhcChtYXBwZWRGbik7XG4gICAgcmV0dXJuIGN1cnNvclByb21pc2UudGhlbihmdW5jdGlvbiAoY3Vyc29yKSB7XG4gICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJzb3Iuc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY3Vyc29yLmNvbnRpbnVlKCk7IH07XG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIgfHwgZmlsdGVyKGN1cnNvciwgZnVuY3Rpb24gKGFkdmFuY2VyKSB7IHJldHVybiBjID0gYWR2YW5jZXI7IH0sIGZ1bmN0aW9uICh2YWwpIHsgY3Vyc29yLnN0b3AodmFsKTsgYyA9IG5vcDsgfSwgZnVuY3Rpb24gKGUpIHsgY3Vyc29yLmZhaWwoZSk7IGMgPSBub3A7IH0pKVxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVkRm4oY3Vyc29yLnZhbHVlLCBjdXJzb3IsIGZ1bmN0aW9uIChhZHZhbmNlcikgeyByZXR1cm4gYyA9IGFkdmFuY2VyOyB9KTtcbiAgICAgICAgICAgICAgICBjKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgQ29sbGVjdGlvbiA9ICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xsZWN0aW9uKCkge1xuICAgIH1cbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uIChmbiwgY2IpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuX2N0eDtcbiAgICAgICAgcmV0dXJuIGN0eC5lcnJvciA/XG4gICAgICAgICAgICBjdHgudGFibGUuX3RyYW5zKG51bGwsIHJlamVjdGlvbi5iaW5kKG51bGwsIGN0eC5lcnJvcikpIDpcbiAgICAgICAgICAgIGN0eC50YWJsZS5fdHJhbnMoJ3JlYWRvbmx5JywgZm4pLnRoZW4oY2IpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIHJldHVybiBjdHguZXJyb3IgP1xuICAgICAgICAgICAgY3R4LnRhYmxlLl90cmFucyhudWxsLCByZWplY3Rpb24uYmluZChudWxsLCBjdHguZXJyb3IpKSA6XG4gICAgICAgICAgICBjdHgudGFibGUuX3RyYW5zKCdyZWFkd3JpdGUnLCBmbiwgXCJsb2NrZWRcIik7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5fYWRkQWxnb3JpdGhtID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIGN0eC5hbGdvcml0aG0gPSBjb21iaW5lKGN0eC5hbGdvcml0aG0sIGZuKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLl9pdGVyYXRlID0gZnVuY3Rpb24gKGZuLCBjb3JlVHJhbnMpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXIodGhpcy5fY3R4LCBmbiwgY29yZVRyYW5zLCB0aGlzLl9jdHgudGFibGUuY29yZSk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChwcm9wcyQkMSkge1xuICAgICAgICB2YXIgcnYgPSBPYmplY3QuY3JlYXRlKHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKSwgY3R4ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLl9jdHgpO1xuICAgICAgICBpZiAocHJvcHMkJDEpXG4gICAgICAgICAgICBleHRlbmQoY3R4LCBwcm9wcyQkMSk7XG4gICAgICAgIHJ2Ll9jdHggPSBjdHg7XG4gICAgICAgIHJldHVybiBydjtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY3R4LnZhbHVlTWFwcGVyID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5lYWNoID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkKGZ1bmN0aW9uICh0cmFucykgeyByZXR1cm4gaXRlcihjdHgsIGZuLCB0cmFucywgY3R4LnRhYmxlLmNvcmUpOyB9KTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkKGZ1bmN0aW9uICh0cmFucykge1xuICAgICAgICAgICAgdmFyIGN0eCA9IF90aGlzLl9jdHg7XG4gICAgICAgICAgICB2YXIgY29yZVRhYmxlID0gY3R4LnRhYmxlLmNvcmU7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbktleVJhbmdlKGN0eCwgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yZVRhYmxlLmNvdW50KHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGdldEluZGV4T3JTdG9yZShjdHgsIGNvcmVUYWJsZS5zY2hlbWEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IGN0eC5yYW5nZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoY291bnQpIHsgcmV0dXJuIE1hdGgubWluKGNvdW50LCBjdHgubGltaXQpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXIoY3R4LCBmdW5jdGlvbiAoKSB7ICsrY291bnQ7IHJldHVybiBmYWxzZTsgfSwgdHJhbnMsIGNvcmVUYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gY291bnQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnNvcnRCeSA9IGZ1bmN0aW9uIChrZXlQYXRoLCBjYikge1xuICAgICAgICB2YXIgcGFydHMgPSBrZXlQYXRoLnNwbGl0KCcuJykucmV2ZXJzZSgpLCBsYXN0UGFydCA9IHBhcnRzWzBdLCBsYXN0SW5kZXggPSBwYXJ0cy5sZW5ndGggLSAxO1xuICAgICAgICBmdW5jdGlvbiBnZXR2YWwob2JqLCBpKSB7XG4gICAgICAgICAgICBpZiAoaSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dmFsKG9ialtwYXJ0c1tpXV0sIGkgLSAxKTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbbGFzdFBhcnRdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcmRlciA9IHRoaXMuX2N0eC5kaXIgPT09IFwibmV4dFwiID8gMSA6IC0xO1xuICAgICAgICBmdW5jdGlvbiBzb3J0ZXIoYSwgYikge1xuICAgICAgICAgICAgdmFyIGFWYWwgPSBnZXR2YWwoYSwgbGFzdEluZGV4KSwgYlZhbCA9IGdldHZhbChiLCBsYXN0SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIGFWYWwgPCBiVmFsID8gLW9yZGVyIDogYVZhbCA+IGJWYWwgPyBvcmRlciA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9BcnJheShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGEuc29ydChzb3J0ZXIpO1xuICAgICAgICB9KS50aGVuKGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICB2YXIgY3R4ID0gX3RoaXMuX2N0eDtcbiAgICAgICAgICAgIGlmIChjdHguZGlyID09PSAnbmV4dCcgJiYgaXNQbGFpbktleVJhbmdlKGN0eCwgdHJ1ZSkgJiYgY3R4LmxpbWl0ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZU1hcHBlcl8xID0gY3R4LnZhbHVlTWFwcGVyO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4T3JTdG9yZShjdHgsIGN0eC50YWJsZS5jb3JlLnNjaGVtYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN0eC50YWJsZS5jb3JlLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnM6IHRyYW5zLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogY3R4LmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogY3R4LnJhbmdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVNYXBwZXJfMSA/IHJlc3VsdC5tYXAodmFsdWVNYXBwZXJfMSkgOiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYV8xID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXIoY3R4LCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gYV8xLnB1c2goaXRlbSk7IH0sIHRyYW5zLCBjdHgudGFibGUuY29yZSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBhXzE7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjYik7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIGlmIChvZmZzZXQgPD0gMClcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjdHgub2Zmc2V0ICs9IG9mZnNldDtcbiAgICAgICAgaWYgKGlzUGxhaW5LZXlSYW5nZShjdHgpKSB7XG4gICAgICAgICAgICBhZGRSZXBsYXlGaWx0ZXIoY3R4LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldExlZnQgPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldExlZnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tb2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG9mZnNldExlZnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkUmVwbGF5RmlsdGVyKGN0eCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiAoLS1vZmZzZXRMZWZ0IDwgMCk7IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmxpbWl0ID0gZnVuY3Rpb24gKG51bVJvd3MpIHtcbiAgICAgICAgdGhpcy5fY3R4LmxpbWl0ID0gTWF0aC5taW4odGhpcy5fY3R4LmxpbWl0LCBudW1Sb3dzKTtcbiAgICAgICAgYWRkUmVwbGF5RmlsdGVyKHRoaXMuX2N0eCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJvd3NMZWZ0ID0gbnVtUm93cztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY3Vyc29yLCBhZHZhbmNlLCByZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tcm93c0xlZnQgPD0gMClcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZShyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93c0xlZnQgPj0gMDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnVudGlsID0gZnVuY3Rpb24gKGZpbHRlckZ1bmN0aW9uLCBiSW5jbHVkZVN0b3BFbnRyeSkge1xuICAgICAgICBhZGRGaWx0ZXIodGhpcy5fY3R4LCBmdW5jdGlvbiAoY3Vyc29yLCBhZHZhbmNlLCByZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyRnVuY3Rpb24oY3Vyc29yLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGFkdmFuY2UocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJJbmNsdWRlU3RvcEVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbWl0KDEpLnRvQXJyYXkoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGFbMF07IH0pLnRoZW4oY2IpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCkuZmlyc3QoY2IpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlckZ1bmN0aW9uKSB7XG4gICAgICAgIGFkZEZpbHRlcih0aGlzLl9jdHgsIGZ1bmN0aW9uIChjdXJzb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJGdW5jdGlvbihjdXJzb3IudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkTWF0Y2hGaWx0ZXIodGhpcy5fY3R4LCBmaWx0ZXJGdW5jdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKGluZGV4TmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcy5fY3R4LnRhYmxlLCBpbmRleE5hbWUsIHRoaXMpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY3R4LmRpciA9ICh0aGlzLl9jdHguZGlyID09PSBcInByZXZcIiA/IFwibmV4dFwiIDogXCJwcmV2XCIpO1xuICAgICAgICBpZiAodGhpcy5fb25kaXJlY3Rpb25jaGFuZ2UpXG4gICAgICAgICAgICB0aGlzLl9vbmRpcmVjdGlvbmNoYW5nZSh0aGlzLl9jdHguZGlyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5kZXNjID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlKCk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5lYWNoS2V5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIGN0eC5rZXlzT25seSA9ICFjdHguaXNNYXRjaDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodmFsLCBjdXJzb3IpIHsgY2IoY3Vyc29yLmtleSwgY3Vyc29yKTsgfSk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5lYWNoVW5pcXVlS2V5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHRoaXMuX2N0eC51bmlxdWUgPSBcInVuaXF1ZVwiO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoS2V5KGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmVhY2hQcmltYXJ5S2V5ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIGN0eC5rZXlzT25seSA9ICFjdHguaXNNYXRjaDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodmFsLCBjdXJzb3IpIHsgY2IoY3Vyc29yLnByaW1hcnlLZXksIGN1cnNvcik7IH0pO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY3R4O1xuICAgICAgICBjdHgua2V5c09ubHkgPSAhY3R4LmlzTWF0Y2g7XG4gICAgICAgIHZhciBhID0gW107XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0sIGN1cnNvcikge1xuICAgICAgICAgICAgYS5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9KS50aGVuKGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLnByaW1hcnlLZXlzID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIGlmIChjdHguZGlyID09PSAnbmV4dCcgJiYgaXNQbGFpbktleVJhbmdlKGN0eCwgdHJ1ZSkgJiYgY3R4LmxpbWl0ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQoZnVuY3Rpb24gKHRyYW5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhPclN0b3JlKGN0eCwgY3R4LnRhYmxlLmNvcmUuc2NoZW1hKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnRhYmxlLmNvcmUucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICB0cmFuczogdHJhbnMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBjdHgubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogY3R4LnJhbmdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF9hLnJlc3VsdDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSkudGhlbihjYik7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmtleXNPbmx5ID0gIWN0eC5pc01hdGNoO1xuICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtLCBjdXJzb3IpIHtcbiAgICAgICAgICAgIGEucHVzaChjdXJzb3IucHJpbWFyeUtleSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0pLnRoZW4oY2IpO1xuICAgIH07XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUudW5pcXVlS2V5cyA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB0aGlzLl9jdHgudW5pcXVlID0gXCJ1bmlxdWVcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5cyhjYik7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5maXJzdEtleSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5saW1pdCgxKS5rZXlzKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhWzBdOyB9KS50aGVuKGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmxhc3RLZXkgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSgpLmZpcnN0S2V5KGNiKTtcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLmRpc3RpbmN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5fY3R4LCBpZHggPSBjdHguaW5kZXggJiYgY3R4LnRhYmxlLnNjaGVtYS5pZHhCeU5hbWVbY3R4LmluZGV4XTtcbiAgICAgICAgaWYgKCFpZHggfHwgIWlkeC5tdWx0aSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB2YXIgc2V0ID0ge307XG4gICAgICAgIGFkZEZpbHRlcih0aGlzLl9jdHgsIGZ1bmN0aW9uIChjdXJzb3IpIHtcbiAgICAgICAgICAgIHZhciBzdHJLZXkgPSBjdXJzb3IucHJpbWFyeUtleS50b1N0cmluZygpO1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gaGFzT3duKHNldCwgc3RyS2V5KTtcbiAgICAgICAgICAgIHNldFtzdHJLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiAhZm91bmQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENvbGxlY3Rpb24ucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHg7XG4gICAgICAgIHJldHVybiB0aGlzLl93cml0ZShmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgIHZhciBtb2RpZnllcjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG1vZGlmeWVyID0gY2hhbmdlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBrZXlQYXRocyA9IGtleXMoY2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgdmFyIG51bUtleXMgPSBrZXlQYXRocy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbW9kaWZ5ZXIgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYW55dGhpbmdNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUtleXM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBrZXlQYXRoc1tpXSwgdmFsID0gY2hhbmdlc1trZXlQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRCeUtleVBhdGgoaXRlbSwga2V5UGF0aCkgIT09IHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJ5S2V5UGF0aChpdGVtLCBrZXlQYXRoLCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueXRoaW5nTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbnl0aGluZ01vZGlmaWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29yZVRhYmxlID0gY3R4LnRhYmxlLmNvcmU7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb3JlVGFibGUuc2NoZW1hLnByaW1hcnlLZXksIG91dGJvdW5kID0gX2Eub3V0Ym91bmQsIGV4dHJhY3RLZXkgPSBfYS5leHRyYWN0S2V5O1xuICAgICAgICAgICAgdmFyIGxpbWl0ID0gJ3Rlc3Rtb2RlJyBpbiBEZXhpZSA/IDEgOiAyMDAwO1xuICAgICAgICAgICAgdmFyIGNtcCA9IF90aGlzLmRiLmNvcmUuY21wO1xuICAgICAgICAgICAgdmFyIHRvdGFsRmFpbHVyZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzQ291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIGZhaWxlZEtleXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhcHBseU11dGF0ZVJlc3VsdCA9IGZ1bmN0aW9uIChleHBlY3RlZENvdW50LCByZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmFpbHVyZXMgPSByZXMuZmFpbHVyZXMsIG51bUZhaWx1cmVzID0gcmVzLm51bUZhaWx1cmVzO1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDb3VudCArPSBleHBlY3RlZENvdW50IC0gbnVtRmFpbHVyZXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGtleXMoZmFpbHVyZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICB0b3RhbEZhaWx1cmVzLnB1c2goZmFpbHVyZXNbcG9zXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jbG9uZSgpLnByaW1hcnlLZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cyQkMSkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Q2h1bmsgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudCA9IE1hdGgubWluKGxpbWl0LCBrZXlzJCQxLmxlbmd0aCAtIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3JlVGFibGUuZ2V0TWFueSh7IHRyYW5zOiB0cmFucywga2V5czoga2V5cyQkMS5zbGljZShvZmZzZXQsIG9mZnNldCArIGNvdW50KSB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdXRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdXRLZXlzID0gb3V0Ym91bmQgPyBbXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZXRlS2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdWYWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4XzEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkZWVwQ2xvbmUob3JpZ1ZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbUtleToga2V5cyQkMVtvZmZzZXQgKyBpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmeWVyLmNhbGwoY3R4XzEsIGN0eF8xLnZhbHVlLCBjdHhfMSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHhfMS52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVLZXlzLnB1c2goa2V5cyQkMVtvZmZzZXQgKyBpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIW91dGJvdW5kICYmIGNtcChleHRyYWN0S2V5KG9yaWdWYWx1ZSksIGV4dHJhY3RLZXkoY3R4XzEudmFsdWUpKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlS2V5cy5wdXNoKGtleXMkJDFbb2Zmc2V0ICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVmFsdWVzLnB1c2goY3R4XzEudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHV0VmFsdWVzLnB1c2goY3R4XzEudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dGJvdW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1dEtleXMucHVzaChrZXlzJCQxW29mZnNldCArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYWRkVmFsdWVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JlVGFibGUubXV0YXRlKHsgdHJhbnM6IHRyYW5zLCB0eXBlOiAnYWRkJywgdmFsdWVzOiBhZGRWYWx1ZXMgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwb3MgaW4gcmVzLmZhaWx1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVLZXlzLnNwbGljZShwYXJzZUludChwb3MpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseU11dGF0ZVJlc3VsdChhZGRWYWx1ZXMubGVuZ3RoLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHB1dFZhbHVlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZVRhYmxlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ3B1dCcsIGtleXM6IHB1dEtleXMsIHZhbHVlczogcHV0VmFsdWVzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIGFwcGx5TXV0YXRlUmVzdWx0KHB1dFZhbHVlcy5sZW5ndGgsIHJlcyk7IH0pOyB9KS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlbGV0ZUtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmVUYWJsZS5tdXRhdGUoeyB0cmFuczogdHJhbnMsIHR5cGU6ICdkZWxldGUnLCBrZXlzOiBkZWxldGVLZXlzIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIGFwcGx5TXV0YXRlUmVzdWx0KGRlbGV0ZUtleXMubGVuZ3RoLCByZXMpOyB9KTsgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXMkJDEubGVuZ3RoID4gb2Zmc2V0ICsgY291bnQgJiYgbmV4dENodW5rKG9mZnNldCArIGxpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Q2h1bmsoMCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbEZhaWx1cmVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTW9kaWZ5RXJyb3IoXCJFcnJvciBtb2RpZnlpbmcgb25lIG9yIG1vcmUgb2JqZWN0c1wiLCB0b3RhbEZhaWx1cmVzLCBzdWNjZXNzQ291bnQsIGZhaWxlZEtleXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cyQkMS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb2xsZWN0aW9uLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLl9jdHgsIHJhbmdlID0gY3R4LnJhbmdlO1xuICAgICAgICBpZiAoaXNQbGFpbktleVJhbmdlKGN0eCkgJiZcbiAgICAgICAgICAgICgoY3R4LmlzUHJpbUtleSAmJiAhaGFuZ3NPbkRlbGV0ZUxhcmdlS2V5UmFuZ2UpIHx8IHJhbmdlLnR5cGUgPT09IDMgICAgICAgICAgKSlcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cml0ZShmdW5jdGlvbiAodHJhbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJpbWFyeUtleSA9IGN0eC50YWJsZS5jb3JlLnNjaGVtYS5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgIHZhciBjb3JlUmFuZ2UgPSByYW5nZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LnRhYmxlLmNvcmUuY291bnQoeyB0cmFuczogdHJhbnMsIHF1ZXJ5OiB7IGluZGV4OiBwcmltYXJ5S2V5LCByYW5nZTogY29yZVJhbmdlIH0gfSkudGhlbihmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eC50YWJsZS5jb3JlLm11dGF0ZSh7IHRyYW5zOiB0cmFucywgdHlwZTogJ2RlbGV0ZVJhbmdlJywgcmFuZ2U6IGNvcmVSYW5nZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFpbHVyZXMgPSBfYS5mYWlsdXJlcywgbGFzdFJlc3VsdCA9IF9hLmxhc3RSZXN1bHQsIHJlc3VsdHMgPSBfYS5yZXN1bHRzLCBudW1GYWlsdXJlcyA9IF9hLm51bUZhaWx1cmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bUZhaWx1cmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNb2RpZnlFcnJvcihcIkNvdWxkIG5vdCBkZWxldGUgc29tZSB2YWx1ZXNcIiwgT2JqZWN0LmtleXMoZmFpbHVyZXMpLm1hcChmdW5jdGlvbiAocG9zKSB7IHJldHVybiBmYWlsdXJlc1twb3NdOyB9KSwgY291bnQgLSBudW1GYWlsdXJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnQgLSBudW1GYWlsdXJlcztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RpZnkoZnVuY3Rpb24gKHZhbHVlLCBjdHgpIHsgcmV0dXJuIGN0eC52YWx1ZSA9IG51bGw7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbGxlY3Rpb247XG59KCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVDb2xsZWN0aW9uQ29uc3RydWN0b3IoZGIpIHtcbiAgICByZXR1cm4gbWFrZUNsYXNzQ29uc3RydWN0b3IoQ29sbGVjdGlvbi5wcm90b3R5cGUsIGZ1bmN0aW9uIENvbGxlY3Rpb24kJDEod2hlcmVDbGF1c2UsIGtleVJhbmdlR2VuZXJhdG9yKSB7XG4gICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgdmFyIGtleVJhbmdlID0gQW55UmFuZ2UsIGVycm9yID0gbnVsbDtcbiAgICAgICAgaWYgKGtleVJhbmdlR2VuZXJhdG9yKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBrZXlSYW5nZSA9IGtleVJhbmdlR2VuZXJhdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB2YXIgd2hlcmVDdHggPSB3aGVyZUNsYXVzZS5fY3R4O1xuICAgICAgICB2YXIgdGFibGUgPSB3aGVyZUN0eC50YWJsZTtcbiAgICAgICAgdmFyIHJlYWRpbmdIb29rID0gdGFibGUuaG9vay5yZWFkaW5nLmZpcmU7XG4gICAgICAgIHRoaXMuX2N0eCA9IHtcbiAgICAgICAgICAgIHRhYmxlOiB0YWJsZSxcbiAgICAgICAgICAgIGluZGV4OiB3aGVyZUN0eC5pbmRleCxcbiAgICAgICAgICAgIGlzUHJpbUtleTogKCF3aGVyZUN0eC5pbmRleCB8fCAodGFibGUuc2NoZW1hLnByaW1LZXkua2V5UGF0aCAmJiB3aGVyZUN0eC5pbmRleCA9PT0gdGFibGUuc2NoZW1hLnByaW1LZXkubmFtZSkpLFxuICAgICAgICAgICAgcmFuZ2U6IGtleVJhbmdlLFxuICAgICAgICAgICAga2V5c09ubHk6IGZhbHNlLFxuICAgICAgICAgICAgZGlyOiBcIm5leHRcIixcbiAgICAgICAgICAgIHVuaXF1ZTogXCJcIixcbiAgICAgICAgICAgIGFsZ29yaXRobTogbnVsbCxcbiAgICAgICAgICAgIGZpbHRlcjogbnVsbCxcbiAgICAgICAgICAgIHJlcGxheUZpbHRlcjogbnVsbCxcbiAgICAgICAgICAgIGp1c3RMaW1pdDogdHJ1ZSxcbiAgICAgICAgICAgIGlzTWF0Y2g6IG51bGwsXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICBsaW1pdDogSW5maW5pdHksXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBvcjogd2hlcmVDdHgub3IsXG4gICAgICAgICAgICB2YWx1ZU1hcHBlcjogcmVhZGluZ0hvb2sgIT09IG1pcnJvciA/IHJlYWRpbmdIb29rIDogbnVsbFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVDb21wYXJlKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPT09IGIgPyAwIDogMTtcbn1cbmZ1bmN0aW9uIHNpbXBsZUNvbXBhcmVSZXZlcnNlKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAtMSA6IGEgPT09IGIgPyAwIDogMTtcbn1cblxuZnVuY3Rpb24gZmFpbChjb2xsZWN0aW9uT3JXaGVyZUNsYXVzZSwgZXJyLCBUKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uT3JXaGVyZUNsYXVzZSBpbnN0YW5jZW9mIFdoZXJlQ2xhdXNlID9cbiAgICAgICAgbmV3IGNvbGxlY3Rpb25PcldoZXJlQ2xhdXNlLkNvbGxlY3Rpb24oY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UpIDpcbiAgICAgICAgY29sbGVjdGlvbk9yV2hlcmVDbGF1c2U7XG4gICAgY29sbGVjdGlvbi5fY3R4LmVycm9yID0gVCA/IG5ldyBUKGVycikgOiBuZXcgVHlwZUVycm9yKGVycik7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG59XG5mdW5jdGlvbiBlbXB0eUNvbGxlY3Rpb24od2hlcmVDbGF1c2UpIHtcbiAgICByZXR1cm4gbmV3IHdoZXJlQ2xhdXNlLkNvbGxlY3Rpb24od2hlcmVDbGF1c2UsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJhbmdlRXF1YWwoXCJcIik7IH0pLmxpbWl0KDApO1xufVxuZnVuY3Rpb24gdXBwZXJGYWN0b3J5KGRpcikge1xuICAgIHJldHVybiBkaXIgPT09IFwibmV4dFwiID9cbiAgICAgICAgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9VcHBlckNhc2UoKTsgfSA6XG4gICAgICAgIGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRvTG93ZXJDYXNlKCk7IH07XG59XG5mdW5jdGlvbiBsb3dlckZhY3RvcnkoZGlyKSB7XG4gICAgcmV0dXJuIGRpciA9PT0gXCJuZXh0XCIgP1xuICAgICAgICBmdW5jdGlvbiAocykgeyByZXR1cm4gcy50b0xvd2VyQ2FzZSgpOyB9IDpcbiAgICAgICAgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9VcHBlckNhc2UoKTsgfTtcbn1cbmZ1bmN0aW9uIG5leHRDYXNpbmcoa2V5LCBsb3dlcktleSwgdXBwZXJOZWVkbGUsIGxvd2VyTmVlZGxlLCBjbXAsIGRpcikge1xuICAgIHZhciBsZW5ndGggPSBNYXRoLm1pbihrZXkubGVuZ3RoLCBsb3dlck5lZWRsZS5sZW5ndGgpO1xuICAgIHZhciBsbHAgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsd3JLZXlDaGFyID0gbG93ZXJLZXlbaV07XG4gICAgICAgIGlmIChsd3JLZXlDaGFyICE9PSBsb3dlck5lZWRsZVtpXSkge1xuICAgICAgICAgICAgaWYgKGNtcChrZXlbaV0sIHVwcGVyTmVlZGxlW2ldKSA8IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaSkgKyB1cHBlck5lZWRsZVtpXSArIHVwcGVyTmVlZGxlLnN1YnN0cihpICsgMSk7XG4gICAgICAgICAgICBpZiAoY21wKGtleVtpXSwgbG93ZXJOZWVkbGVbaV0pIDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpKSArIGxvd2VyTmVlZGxlW2ldICsgdXBwZXJOZWVkbGUuc3Vic3RyKGkgKyAxKTtcbiAgICAgICAgICAgIGlmIChsbHAgPj0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBsbHApICsgbG93ZXJLZXlbbGxwXSArIHVwcGVyTmVlZGxlLnN1YnN0cihsbHAgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbXAoa2V5W2ldLCBsd3JLZXlDaGFyKSA8IDApXG4gICAgICAgICAgICBsbHAgPSBpO1xuICAgIH1cbiAgICBpZiAobGVuZ3RoIDwgbG93ZXJOZWVkbGUubGVuZ3RoICYmIGRpciA9PT0gXCJuZXh0XCIpXG4gICAgICAgIHJldHVybiBrZXkgKyB1cHBlck5lZWRsZS5zdWJzdHIoa2V5Lmxlbmd0aCk7XG4gICAgaWYgKGxlbmd0aCA8IGtleS5sZW5ndGggJiYgZGlyID09PSBcInByZXZcIilcbiAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgdXBwZXJOZWVkbGUubGVuZ3RoKTtcbiAgICByZXR1cm4gKGxscCA8IDAgPyBudWxsIDoga2V5LnN1YnN0cigwLCBsbHApICsgbG93ZXJOZWVkbGVbbGxwXSArIHVwcGVyTmVlZGxlLnN1YnN0cihsbHAgKyAxKSk7XG59XG5mdW5jdGlvbiBhZGRJZ25vcmVDYXNlQWxnb3JpdGhtKHdoZXJlQ2xhdXNlLCBtYXRjaCwgbmVlZGxlcywgc3VmZml4KSB7XG4gICAgdmFyIHVwcGVyLCBsb3dlciwgY29tcGFyZSwgdXBwZXJOZWVkbGVzLCBsb3dlck5lZWRsZXMsIGRpcmVjdGlvbiwgbmV4dEtleVN1ZmZpeCwgbmVlZGxlc0xlbiA9IG5lZWRsZXMubGVuZ3RoO1xuICAgIGlmICghbmVlZGxlcy5ldmVyeShmdW5jdGlvbiAocykgeyByZXR1cm4gdHlwZW9mIHMgPT09ICdzdHJpbmcnOyB9KSkge1xuICAgICAgICByZXR1cm4gZmFpbCh3aGVyZUNsYXVzZSwgU1RSSU5HX0VYUEVDVEVEKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdERpcmVjdGlvbihkaXIpIHtcbiAgICAgICAgdXBwZXIgPSB1cHBlckZhY3RvcnkoZGlyKTtcbiAgICAgICAgbG93ZXIgPSBsb3dlckZhY3RvcnkoZGlyKTtcbiAgICAgICAgY29tcGFyZSA9IChkaXIgPT09IFwibmV4dFwiID8gc2ltcGxlQ29tcGFyZSA6IHNpbXBsZUNvbXBhcmVSZXZlcnNlKTtcbiAgICAgICAgdmFyIG5lZWRsZUJvdW5kcyA9IG5lZWRsZXMubWFwKGZ1bmN0aW9uIChuZWVkbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGxvd2VyOiBsb3dlcihuZWVkbGUpLCB1cHBlcjogdXBwZXIobmVlZGxlKSB9O1xuICAgICAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZShhLmxvd2VyLCBiLmxvd2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVwcGVyTmVlZGxlcyA9IG5lZWRsZUJvdW5kcy5tYXAoZnVuY3Rpb24gKG5iKSB7IHJldHVybiBuYi51cHBlcjsgfSk7XG4gICAgICAgIGxvd2VyTmVlZGxlcyA9IG5lZWRsZUJvdW5kcy5tYXAoZnVuY3Rpb24gKG5iKSB7IHJldHVybiBuYi5sb3dlcjsgfSk7XG4gICAgICAgIGRpcmVjdGlvbiA9IGRpcjtcbiAgICAgICAgbmV4dEtleVN1ZmZpeCA9IChkaXIgPT09IFwibmV4dFwiID8gXCJcIiA6IHN1ZmZpeCk7XG4gICAgfVxuICAgIGluaXREaXJlY3Rpb24oXCJuZXh0XCIpO1xuICAgIHZhciBjID0gbmV3IHdoZXJlQ2xhdXNlLkNvbGxlY3Rpb24od2hlcmVDbGF1c2UsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHVwcGVyTmVlZGxlc1swXSwgbG93ZXJOZWVkbGVzW25lZWRsZXNMZW4gLSAxXSArIHN1ZmZpeCk7IH0pO1xuICAgIGMuX29uZGlyZWN0aW9uY2hhbmdlID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICBpbml0RGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfTtcbiAgICB2YXIgZmlyc3RQb3NzaWJsZU5lZWRsZSA9IDA7XG4gICAgYy5fYWRkQWxnb3JpdGhtKGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UsIHJlc29sdmUpIHtcbiAgICAgICAgdmFyIGtleSA9IGN1cnNvci5rZXk7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGxvd2VyS2V5ID0gbG93ZXIoa2V5KTtcbiAgICAgICAgaWYgKG1hdGNoKGxvd2VyS2V5LCBsb3dlck5lZWRsZXMsIGZpcnN0UG9zc2libGVOZWVkbGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBsb3dlc3RQb3NzaWJsZUNhc2luZyA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZmlyc3RQb3NzaWJsZU5lZWRsZTsgaSA8IG5lZWRsZXNMZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBjYXNpbmcgPSBuZXh0Q2FzaW5nKGtleSwgbG93ZXJLZXksIHVwcGVyTmVlZGxlc1tpXSwgbG93ZXJOZWVkbGVzW2ldLCBjb21wYXJlLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChjYXNpbmcgPT09IG51bGwgJiYgbG93ZXN0UG9zc2libGVDYXNpbmcgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UG9zc2libGVOZWVkbGUgPSBpICsgMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsb3dlc3RQb3NzaWJsZUNhc2luZyA9PT0gbnVsbCB8fCBjb21wYXJlKGxvd2VzdFBvc3NpYmxlQ2FzaW5nLCBjYXNpbmcpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb3dlc3RQb3NzaWJsZUNhc2luZyA9IGNhc2luZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG93ZXN0UG9zc2libGVDYXNpbmcgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhZHZhbmNlKGZ1bmN0aW9uICgpIHsgY3Vyc29yLmNvbnRpbnVlKGxvd2VzdFBvc3NpYmxlQ2FzaW5nICsgbmV4dEtleVN1ZmZpeCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWR2YW5jZShyZXNvbHZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjO1xufVxuZnVuY3Rpb24gY3JlYXRlUmFuZ2UobG93ZXIsIHVwcGVyLCBsb3dlck9wZW4sIHVwcGVyT3Blbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IDIgICAgICAgICAgICAsXG4gICAgICAgIGxvd2VyOiBsb3dlcixcbiAgICAgICAgdXBwZXI6IHVwcGVyLFxuICAgICAgICBsb3dlck9wZW46IGxvd2VyT3BlbixcbiAgICAgICAgdXBwZXJPcGVuOiB1cHBlck9wZW5cbiAgICB9O1xufVxuZnVuY3Rpb24gcmFuZ2VFcXVhbCh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IDEgICAgICAgICAgICAsXG4gICAgICAgIGxvd2VyOiB2YWx1ZSxcbiAgICAgICAgdXBwZXI6IHZhbHVlXG4gICAgfTtcbn1cblxudmFyIFdoZXJlQ2xhdXNlID0gICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdoZXJlQ2xhdXNlKCkge1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2hlcmVDbGF1c2UucHJvdG90eXBlLCBcIkNvbGxlY3Rpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jdHgudGFibGUuZGIuQ29sbGVjdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmJldHdlZW4gPSBmdW5jdGlvbiAobG93ZXIsIHVwcGVyLCBpbmNsdWRlTG93ZXIsIGluY2x1ZGVVcHBlcikge1xuICAgICAgICBpbmNsdWRlTG93ZXIgPSBpbmNsdWRlTG93ZXIgIT09IGZhbHNlO1xuICAgICAgICBpbmNsdWRlVXBwZXIgPSBpbmNsdWRlVXBwZXIgPT09IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuX2NtcChsb3dlciwgdXBwZXIpID4gMCkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5fY21wKGxvd2VyLCB1cHBlcikgPT09IDAgJiYgKGluY2x1ZGVMb3dlciB8fCBpbmNsdWRlVXBwZXIpICYmICEoaW5jbHVkZUxvd2VyICYmIGluY2x1ZGVVcHBlcikpKVxuICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZShsb3dlciwgdXBwZXIsICFpbmNsdWRlTG93ZXIsICFpbmNsdWRlVXBwZXIpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiByYW5nZUVxdWFsKHZhbHVlKTsgfSk7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYWJvdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHZhbHVlLCB1bmRlZmluZWQsIHRydWUpOyB9KTtcbiAgICB9O1xuICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5hYm92ZU9yRXF1YWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHZhbHVlLCB1bmRlZmluZWQsIGZhbHNlKTsgfSk7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYmVsb3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZVJhbmdlKHVuZGVmaW5lZCwgdmFsdWUsIGZhbHNlLCB0cnVlKTsgfSk7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYmVsb3dPckVxdWFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgSU5WQUxJRF9LRVlfQVJHVU1FTlQpO1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZSh1bmRlZmluZWQsIHZhbHVlKTsgfSk7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcmV0dXJuIGZhaWwodGhpcywgU1RSSU5HX0VYUEVDVEVEKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmV0d2VlbihzdHIsIHN0ciArIG1heFN0cmluZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuc3RhcnRzV2l0aElnbm9yZUNhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT09IFwiXCIpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydHNXaXRoKHN0cik7XG4gICAgICAgIHJldHVybiBhZGRJZ25vcmVDYXNlQWxnb3JpdGhtKHRoaXMsIGZ1bmN0aW9uICh4LCBhKSB7IHJldHVybiB4LmluZGV4T2YoYVswXSkgPT09IDA7IH0sIFtzdHJdLCBtYXhTdHJpbmcpO1xuICAgIH07XG4gICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmVxdWFsc0lnbm9yZUNhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBhZGRJZ25vcmVDYXNlQWxnb3JpdGhtKHRoaXMsIGZ1bmN0aW9uICh4LCBhKSB7IHJldHVybiB4ID09PSBhWzBdOyB9LCBbc3RyXSwgXCJcIik7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUuYW55T2ZJZ25vcmVDYXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2V0ID0gZ2V0QXJyYXlPZi5hcHBseShOT19DSEFSX0FSUkFZLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAoc2V0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBlbXB0eUNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgIHJldHVybiBhZGRJZ25vcmVDYXNlQWxnb3JpdGhtKHRoaXMsIGZ1bmN0aW9uICh4LCBhKSB7IHJldHVybiBhLmluZGV4T2YoeCkgIT09IC0xOyB9LCBzZXQsIFwiXCIpO1xuICAgIH07XG4gICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnlPZklnbm9yZUNhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXQgPSBnZXRBcnJheU9mLmFwcGx5KE5PX0NIQVJfQVJSQVksIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChzZXQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Q29sbGVjdGlvbih0aGlzKTtcbiAgICAgICAgcmV0dXJuIGFkZElnbm9yZUNhc2VBbGdvcml0aG0odGhpcywgZnVuY3Rpb24gKHgsIGEpIHsgcmV0dXJuIGEuc29tZShmdW5jdGlvbiAobikgeyByZXR1cm4geC5pbmRleE9mKG4pID09PSAwOyB9KTsgfSwgc2V0LCBtYXhTdHJpbmcpO1xuICAgIH07XG4gICAgV2hlcmVDbGF1c2UucHJvdG90eXBlLmFueU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2V0ID0gZ2V0QXJyYXlPZi5hcHBseShOT19DSEFSX0FSUkFZLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY29tcGFyZSA9IHRoaXMuX2NtcDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldC5zb3J0KGNvbXBhcmUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldC5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlDb2xsZWN0aW9uKHRoaXMpO1xuICAgICAgICB2YXIgYyA9IG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlUmFuZ2Uoc2V0WzBdLCBzZXRbc2V0Lmxlbmd0aCAtIDFdKTsgfSk7XG4gICAgICAgIGMuX29uZGlyZWN0aW9uY2hhbmdlID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29tcGFyZSA9IChkaXJlY3Rpb24gPT09IFwibmV4dFwiID9cbiAgICAgICAgICAgICAgICBfdGhpcy5fYXNjZW5kaW5nIDpcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGVzY2VuZGluZyk7XG4gICAgICAgICAgICBzZXQuc29ydChjb21wYXJlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICBjLl9hZGRBbGdvcml0aG0oZnVuY3Rpb24gKGN1cnNvciwgYWR2YW5jZSwgcmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGN1cnNvci5rZXk7XG4gICAgICAgICAgICB3aGlsZSAoY29tcGFyZShrZXksIHNldFtpXSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBzZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkdmFuY2UocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29tcGFyZShrZXksIHNldFtpXSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkdmFuY2UoZnVuY3Rpb24gKCkgeyBjdXJzb3IuY29udGludWUoc2V0W2ldKTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgICBXaGVyZUNsYXVzZS5wcm90b3R5cGUubm90RXF1YWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5BbnlSYW5nZShbW21pbktleSwgdmFsdWVdLCBbdmFsdWUsIHRoaXMuZGIuX21heEtleV1dLCB7IGluY2x1ZGVMb3dlcnM6IGZhbHNlLCBpbmNsdWRlVXBwZXJzOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5ub25lT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXQgPSBnZXRBcnJheU9mLmFwcGx5KE5PX0NIQVJfQVJSQVksIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChzZXQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXQuc29ydCh0aGlzLl9hc2NlbmRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhbmdlcyA9IHNldC5yZWR1Y2UoZnVuY3Rpb24gKHJlcywgdmFsKSB7IHJldHVybiByZXMgP1xuICAgICAgICAgICAgcmVzLmNvbmNhdChbW3Jlc1tyZXMubGVuZ3RoIC0gMV1bMV0sIHZhbF1dKSA6XG4gICAgICAgICAgICBbW21pbktleSwgdmFsXV07IH0sIG51bGwpO1xuICAgICAgICByYW5nZXMucHVzaChbc2V0W3NldC5sZW5ndGggLSAxXSwgdGhpcy5kYi5fbWF4S2V5XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmluQW55UmFuZ2UocmFuZ2VzLCB7IGluY2x1ZGVMb3dlcnM6IGZhbHNlLCBpbmNsdWRlVXBwZXJzOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5pbkFueVJhbmdlID0gZnVuY3Rpb24gKHJhbmdlcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY21wID0gdGhpcy5fY21wLCBhc2NlbmRpbmcgPSB0aGlzLl9hc2NlbmRpbmcsIGRlc2NlbmRpbmcgPSB0aGlzLl9kZXNjZW5kaW5nLCBtaW4gPSB0aGlzLl9taW4sIG1heCA9IHRoaXMuX21heDtcbiAgICAgICAgaWYgKHJhbmdlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlDb2xsZWN0aW9uKHRoaXMpO1xuICAgICAgICBpZiAoIXJhbmdlcy5ldmVyeShmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiByYW5nZVswXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgcmFuZ2VbMV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGFzY2VuZGluZyhyYW5nZVswXSwgcmFuZ2VbMV0pIDw9IDA7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBcIkZpcnN0IGFyZ3VtZW50IHRvIGluQW55UmFuZ2UoKSBtdXN0IGJlIGFuIEFycmF5IG9mIHR3by12YWx1ZSBBcnJheXMgW2xvd2VyLHVwcGVyXSB3aGVyZSB1cHBlciBtdXN0IG5vdCBiZSBsb3dlciB0aGFuIGxvd2VyXCIsIGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5jbHVkZUxvd2VycyA9ICFvcHRpb25zIHx8IG9wdGlvbnMuaW5jbHVkZUxvd2VycyAhPT0gZmFsc2U7XG4gICAgICAgIHZhciBpbmNsdWRlVXBwZXJzID0gb3B0aW9ucyAmJiBvcHRpb25zLmluY2x1ZGVVcHBlcnMgPT09IHRydWU7XG4gICAgICAgIGZ1bmN0aW9uIGFkZFJhbmdlKHJhbmdlcywgbmV3UmFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBpID0gMCwgbCA9IHJhbmdlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHJhbmdlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY21wKG5ld1JhbmdlWzBdLCByYW5nZVsxXSkgPCAwICYmIGNtcChuZXdSYW5nZVsxXSwgcmFuZ2VbMF0pID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZVswXSA9IG1pbihyYW5nZVswXSwgbmV3UmFuZ2VbMF0pO1xuICAgICAgICAgICAgICAgICAgICByYW5nZVsxXSA9IG1heChyYW5nZVsxXSwgbmV3UmFuZ2VbMV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PT0gbClcbiAgICAgICAgICAgICAgICByYW5nZXMucHVzaChuZXdSYW5nZSk7XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3J0RGlyZWN0aW9uID0gYXNjZW5kaW5nO1xuICAgICAgICBmdW5jdGlvbiByYW5nZVNvcnRlcihhLCBiKSB7IHJldHVybiBzb3J0RGlyZWN0aW9uKGFbMF0sIGJbMF0pOyB9XG4gICAgICAgIHZhciBzZXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXQgPSByYW5nZXMucmVkdWNlKGFkZFJhbmdlLCBbXSk7XG4gICAgICAgICAgICBzZXQuc29ydChyYW5nZVNvcnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBJTlZBTElEX0tFWV9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhbmdlUG9zID0gMDtcbiAgICAgICAgdmFyIGtleUlzQmV5b25kQ3VycmVudEVudHJ5ID0gaW5jbHVkZVVwcGVycyA/XG4gICAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBhc2NlbmRpbmcoa2V5LCBzZXRbcmFuZ2VQb3NdWzFdKSA+IDA7IH0gOlxuICAgICAgICAgICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gYXNjZW5kaW5nKGtleSwgc2V0W3JhbmdlUG9zXVsxXSkgPj0gMDsgfTtcbiAgICAgICAgdmFyIGtleUlzQmVmb3JlQ3VycmVudEVudHJ5ID0gaW5jbHVkZUxvd2VycyA/XG4gICAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBkZXNjZW5kaW5nKGtleSwgc2V0W3JhbmdlUG9zXVswXSkgPiAwOyB9IDpcbiAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRlc2NlbmRpbmcoa2V5LCBzZXRbcmFuZ2VQb3NdWzBdKSA+PSAwOyB9O1xuICAgICAgICBmdW5jdGlvbiBrZXlXaXRoaW5DdXJyZW50UmFuZ2Uoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gIWtleUlzQmV5b25kQ3VycmVudEVudHJ5KGtleSkgJiYgIWtleUlzQmVmb3JlQ3VycmVudEVudHJ5KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoZWNrS2V5ID0ga2V5SXNCZXlvbmRDdXJyZW50RW50cnk7XG4gICAgICAgIHZhciBjID0gbmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLCBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVSYW5nZShzZXRbMF1bMF0sIHNldFtzZXQubGVuZ3RoIC0gMV1bMV0sICFpbmNsdWRlTG93ZXJzLCAhaW5jbHVkZVVwcGVycyk7IH0pO1xuICAgICAgICBjLl9vbmRpcmVjdGlvbmNoYW5nZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tLZXkgPSBrZXlJc0JleW9uZEN1cnJlbnRFbnRyeTtcbiAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gYXNjZW5kaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tLZXkgPSBrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeTtcbiAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gZGVzY2VuZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldC5zb3J0KHJhbmdlU29ydGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgYy5fYWRkQWxnb3JpdGhtKGZ1bmN0aW9uIChjdXJzb3IsIGFkdmFuY2UsIHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBjdXJzb3Iua2V5O1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrS2V5KGtleSkpIHtcbiAgICAgICAgICAgICAgICArK3JhbmdlUG9zO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVBvcyA9PT0gc2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtleVdpdGhpbkN1cnJlbnRSYW5nZShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5fY21wKGtleSwgc2V0W3JhbmdlUG9zXVsxXSkgPT09IDAgfHwgX3RoaXMuX2NtcChrZXksIHNldFtyYW5nZVBvc11bMF0pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWR2YW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSBhc2NlbmRpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoc2V0W3JhbmdlUG9zXVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZShzZXRbcmFuZ2VQb3NdWzFdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIFdoZXJlQ2xhdXNlLnByb3RvdHlwZS5zdGFydHNXaXRoQW55T2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZXQgPSBnZXRBcnJheU9mLmFwcGx5KE5PX0NIQVJfQVJSQVksIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICghc2V0LmV2ZXJ5KGZ1bmN0aW9uIChzKSB7IHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7IH0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbCh0aGlzLCBcInN0YXJ0c1dpdGhBbnlPZigpIG9ubHkgd29ya3Mgd2l0aCBzdHJpbmdzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXQubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5Q29sbGVjdGlvbih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5BbnlSYW5nZShzZXQubWFwKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFtzdHIsIHN0ciArIG1heFN0cmluZ107IH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBXaGVyZUNsYXVzZTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoZXJlQ2xhdXNlQ29uc3RydWN0b3IoZGIpIHtcbiAgICByZXR1cm4gbWFrZUNsYXNzQ29uc3RydWN0b3IoV2hlcmVDbGF1c2UucHJvdG90eXBlLCBmdW5jdGlvbiBXaGVyZUNsYXVzZSQkMSh0YWJsZSwgaW5kZXgsIG9yQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgIHRoaXMuX2N0eCA9IHtcbiAgICAgICAgICAgIHRhYmxlOiB0YWJsZSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCA9PT0gXCI6aWRcIiA/IG51bGwgOiBpbmRleCxcbiAgICAgICAgICAgIG9yOiBvckNvbGxlY3Rpb25cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGluZGV4ZWREQiA9IGRiLl9kZXBzLmluZGV4ZWREQjtcbiAgICAgICAgaWYgKCFpbmRleGVkREIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5NaXNzaW5nQVBJKFwiaW5kZXhlZERCIEFQSSBtaXNzaW5nXCIpO1xuICAgICAgICB0aGlzLl9jbXAgPSB0aGlzLl9hc2NlbmRpbmcgPSBpbmRleGVkREIuY21wLmJpbmQoaW5kZXhlZERCKTtcbiAgICAgICAgdGhpcy5fZGVzY2VuZGluZyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBpbmRleGVkREIuY21wKGIsIGEpOyB9O1xuICAgICAgICB0aGlzLl9tYXggPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gaW5kZXhlZERCLmNtcChhLCBiKSA+IDAgPyBhIDogYjsgfTtcbiAgICAgICAgdGhpcy5fbWluID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGluZGV4ZWREQi5jbXAoYSwgYikgPCAwID8gYSA6IGI7IH07XG4gICAgICAgIHRoaXMuX0lEQktleVJhbmdlID0gZGIuX2RlcHMuSURCS2V5UmFuZ2U7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhZmFyaU11bHRpU3RvcmVGaXgoc3RvcmVOYW1lcykge1xuICAgIHJldHVybiBzdG9yZU5hbWVzLmxlbmd0aCA9PT0gMSA/IHN0b3JlTmFtZXNbMF0gOiBzdG9yZU5hbWVzO1xufVxuXG5mdW5jdGlvbiBnZXRNYXhLZXkoSWRiS2V5UmFuZ2UpIHtcbiAgICB0cnkge1xuICAgICAgICBJZGJLZXlSYW5nZS5vbmx5KFtbXV0pO1xuICAgICAgICByZXR1cm4gW1tdXTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG1heFN0cmluZztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpIHtcbiAgICByZXR1cm4gd3JhcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgICAgICByZWplY3QoZXZlbnQudGFyZ2V0LmVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuXG5cblxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbnZhciBUcmFuc2FjdGlvbiA9ICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2FjdGlvbigpIHtcbiAgICB9XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLl9sb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQoIVBTRC5nbG9iYWwpO1xuICAgICAgICArK3RoaXMuX3JlY3Vsb2NrO1xuICAgICAgICBpZiAodGhpcy5fcmVjdWxvY2sgPT09IDEgJiYgIVBTRC5nbG9iYWwpXG4gICAgICAgICAgICBQU0QubG9ja093bmVyRm9yID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuX3VubG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0KCFQU0QuZ2xvYmFsKTtcbiAgICAgICAgaWYgKC0tdGhpcy5fcmVjdWxvY2sgPT09IDApIHtcbiAgICAgICAgICAgIGlmICghUFNELmdsb2JhbClcbiAgICAgICAgICAgICAgICBQU0QubG9ja093bmVyRm9yID0gbnVsbDtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9ibG9ja2VkRnVuY3MubGVuZ3RoID4gMCAmJiAhdGhpcy5fbG9ja2VkKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm5BbmRQU0QgPSB0aGlzLl9ibG9ja2VkRnVuY3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB1c2VQU0QoZm5BbmRQU0RbMV0sIGZuQW5kUFNEWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLl9sb2NrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWN1bG9jayAmJiBQU0QubG9ja093bmVyRm9yICE9PSB0aGlzO1xuICAgIH07XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChpZGJ0cmFucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMubW9kZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB2YXIgaWRiZGIgPSB0aGlzLmRiLmlkYmRiO1xuICAgICAgICB2YXIgZGJPcGVuRXJyb3IgPSB0aGlzLmRiLl9zdGF0ZS5kYk9wZW5FcnJvcjtcbiAgICAgICAgYXNzZXJ0KCF0aGlzLmlkYnRyYW5zKTtcbiAgICAgICAgaWYgKCFpZGJ0cmFucyAmJiAhaWRiZGIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZGJPcGVuRXJyb3IgJiYgZGJPcGVuRXJyb3IubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJEYXRhYmFzZUNsb3NlZEVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLkRhdGFiYXNlQ2xvc2VkKGRiT3BlbkVycm9yKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTWlzc2luZ0FQSUVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk1pc3NpbmdBUEkoZGJPcGVuRXJyb3IubWVzc2FnZSwgZGJPcGVuRXJyb3IpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk9wZW5GYWlsZWQoZGJPcGVuRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5UcmFuc2FjdGlvbkluYWN0aXZlKCk7XG4gICAgICAgIGFzc2VydCh0aGlzLl9jb21wbGV0aW9uLl9zdGF0ZSA9PT0gbnVsbCk7XG4gICAgICAgIGlkYnRyYW5zID0gdGhpcy5pZGJ0cmFucyA9IGlkYnRyYW5zIHx8IGlkYmRiLnRyYW5zYWN0aW9uKHNhZmFyaU11bHRpU3RvcmVGaXgodGhpcy5zdG9yZU5hbWVzKSwgdGhpcy5tb2RlKTtcbiAgICAgICAgaWRidHJhbnMub25lcnJvciA9IHdyYXAoZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChldik7XG4gICAgICAgICAgICBfdGhpcy5fcmVqZWN0KGlkYnRyYW5zLmVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlkYnRyYW5zLm9uYWJvcnQgPSB3cmFwKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZXYpO1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZlICYmIF90aGlzLl9yZWplY3QobmV3IGV4Y2VwdGlvbnMuQWJvcnQoaWRidHJhbnMuZXJyb3IpKTtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMub24oXCJhYm9ydFwiKS5maXJlKGV2KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlkYnRyYW5zLm9uY29tcGxldGUgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuX3Jlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLl9wcm9taXNlID0gZnVuY3Rpb24gKG1vZGUsIGZuLCBiV3JpdGVMb2NrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChtb2RlID09PSAncmVhZHdyaXRlJyAmJiB0aGlzLm1vZGUgIT09ICdyZWFkd3JpdGUnKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdGlvbihuZXcgZXhjZXB0aW9ucy5SZWFkT25seShcIlRyYW5zYWN0aW9uIGlzIHJlYWRvbmx5XCIpKTtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24obmV3IGV4Y2VwdGlvbnMuVHJhbnNhY3Rpb25JbmFjdGl2ZSgpKTtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2tlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2NrZWRGdW5jcy5wdXNoKFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fcHJvbWlzZShtb2RlLCBmbiwgYldyaXRlTG9jaykudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9LCBQU0RdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJXcml0ZUxvY2spIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdTY29wZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2xvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ2ID0gZm4ocmVzb2x2ZSwgcmVqZWN0LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChydiAmJiBydi50aGVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgcnYudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHAuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdW5sb2NrKCk7IH0pO1xuICAgICAgICAgICAgICAgIHAuX2xpYiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ2ID0gZm4ocmVzb2x2ZSwgcmVqZWN0LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJ2ICYmIHJ2LnRoZW4pXG4gICAgICAgICAgICAgICAgICAgIHJ2LnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcC5fbGliID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUuX3Jvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Ll9yb290KCkgOiB0aGlzO1xuICAgIH07XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLndhaXRGb3IgPSBmdW5jdGlvbiAocHJvbWlzZUxpa2UpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0aGlzLl9yb290KCk7XG4gICAgICAgIHZhciBwcm9taXNlID0gRGV4aWVQcm9taXNlLnJlc29sdmUocHJvbWlzZUxpa2UpO1xuICAgICAgICBpZiAocm9vdC5fd2FpdGluZ0Zvcikge1xuICAgICAgICAgICAgcm9vdC5fd2FpdGluZ0ZvciA9IHJvb3QuX3dhaXRpbmdGb3IudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBwcm9taXNlOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJvb3QuX3dhaXRpbmdGb3IgPSBwcm9taXNlO1xuICAgICAgICAgICAgcm9vdC5fd2FpdGluZ1F1ZXVlID0gW107XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSByb290LmlkYnRyYW5zLm9iamVjdFN0b3JlKHJvb3Quc3RvcmVOYW1lc1swXSk7XG4gICAgICAgICAgICAoZnVuY3Rpb24gc3BpbigpIHtcbiAgICAgICAgICAgICAgICArK3Jvb3QuX3NwaW5Db3VudDtcbiAgICAgICAgICAgICAgICB3aGlsZSAocm9vdC5fd2FpdGluZ1F1ZXVlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgKHJvb3QuX3dhaXRpbmdRdWV1ZS5zaGlmdCgpKSgpO1xuICAgICAgICAgICAgICAgIGlmIChyb290Ll93YWl0aW5nRm9yKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5nZXQoLUluZmluaXR5KS5vbnN1Y2Nlc3MgPSBzcGluO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFdhaXRQcm9taXNlID0gcm9vdC5fd2FpdGluZ0ZvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJvb3QuX3dhaXRpbmdRdWV1ZS5wdXNoKHdyYXAocmVzb2x2ZS5iaW5kKG51bGwsIHJlcykpKTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcm9vdC5fd2FpdGluZ1F1ZXVlLnB1c2god3JhcChyZWplY3QuYmluZChudWxsLCBlcnIpKSk7IH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChyb290Ll93YWl0aW5nRm9yID09PSBjdXJyZW50V2FpdFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5fd2FpdGluZ0ZvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSAmJiB0aGlzLl9yZWplY3QobmV3IGV4Y2VwdGlvbnMuQWJvcnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBUcmFuc2FjdGlvbi5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgIHZhciBtZW1vaXplZFRhYmxlcyA9ICh0aGlzLl9tZW1vaXplZFRhYmxlcyB8fCAodGhpcy5fbWVtb2l6ZWRUYWJsZXMgPSB7fSkpO1xuICAgICAgICBpZiAoaGFzT3duKG1lbW9pemVkVGFibGVzLCB0YWJsZU5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIG1lbW9pemVkVGFibGVzW3RhYmxlTmFtZV07XG4gICAgICAgIHZhciB0YWJsZVNjaGVtYSA9IHRoaXMuc2NoZW1hW3RhYmxlTmFtZV07XG4gICAgICAgIGlmICghdGFibGVTY2hlbWEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk5vdEZvdW5kKFwiVGFibGUgXCIgKyB0YWJsZU5hbWUgKyBcIiBub3QgcGFydCBvZiB0cmFuc2FjdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHJhbnNhY3Rpb25Cb3VuZFRhYmxlID0gbmV3IHRoaXMuZGIuVGFibGUodGFibGVOYW1lLCB0YWJsZVNjaGVtYSwgdGhpcyk7XG4gICAgICAgIHRyYW5zYWN0aW9uQm91bmRUYWJsZS5jb3JlID0gdGhpcy5kYi5jb3JlLnRhYmxlKHRhYmxlTmFtZSk7XG4gICAgICAgIG1lbW9pemVkVGFibGVzW3RhYmxlTmFtZV0gPSB0cmFuc2FjdGlvbkJvdW5kVGFibGU7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkJvdW5kVGFibGU7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNhY3Rpb247XG59KCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbkNvbnN0cnVjdG9yKGRiKSB7XG4gICAgcmV0dXJuIG1ha2VDbGFzc0NvbnN0cnVjdG9yKFRyYW5zYWN0aW9uLnByb3RvdHlwZSwgZnVuY3Rpb24gVHJhbnNhY3Rpb24kJDEobW9kZSwgc3RvcmVOYW1lcywgZGJzY2hlbWEsIHBhcmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRiID0gZGI7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMuc3RvcmVOYW1lcyA9IHN0b3JlTmFtZXM7XG4gICAgICAgIHRoaXMuc2NoZW1hID0gZGJzY2hlbWE7XG4gICAgICAgIHRoaXMuaWRidHJhbnMgPSBudWxsO1xuICAgICAgICB0aGlzLm9uID0gRXZlbnRzKHRoaXMsIFwiY29tcGxldGVcIiwgXCJlcnJvclwiLCBcImFib3J0XCIpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlY3Vsb2NrID0gMDtcbiAgICAgICAgdGhpcy5fYmxvY2tlZEZ1bmNzID0gW107XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWplY3QgPSBudWxsO1xuICAgICAgICB0aGlzLl93YWl0aW5nRm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd2FpdGluZ1F1ZXVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3BpbkNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fY29tcGxldGlvbiA9IG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgX3RoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRpb24udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLm9uLmNvbXBsZXRlLmZpcmUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB3YXNBY3RpdmUgPSBfdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLm9uLmVycm9yLmZpcmUoZSk7XG4gICAgICAgICAgICBfdGhpcy5wYXJlbnQgP1xuICAgICAgICAgICAgICAgIF90aGlzLnBhcmVudC5fcmVqZWN0KGUpIDpcbiAgICAgICAgICAgICAgICB3YXNBY3RpdmUgJiYgX3RoaXMuaWRidHJhbnMgJiYgX3RoaXMuaWRidHJhbnMuYWJvcnQoKTtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Rpb24oZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleFNwZWMobmFtZSwga2V5UGF0aCwgdW5pcXVlLCBtdWx0aSwgYXV0bywgY29tcG91bmQsIGlzUHJpbUtleSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGtleVBhdGg6IGtleVBhdGgsXG4gICAgICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgICAgICBtdWx0aTogbXVsdGksXG4gICAgICAgIGF1dG86IGF1dG8sXG4gICAgICAgIGNvbXBvdW5kOiBjb21wb3VuZCxcbiAgICAgICAgc3JjOiAodW5pcXVlICYmICFpc1ByaW1LZXkgPyAnJicgOiAnJykgKyAobXVsdGkgPyAnKicgOiAnJykgKyAoYXV0byA/IFwiKytcIiA6IFwiXCIpICsgbmFtZUZyb21LZXlQYXRoKGtleVBhdGgpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG5hbWVGcm9tS2V5UGF0aChrZXlQYXRoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJyA/XG4gICAgICAgIGtleVBhdGggOlxuICAgICAgICBrZXlQYXRoID8gKCdbJyArIFtdLmpvaW4uY2FsbChrZXlQYXRoLCAnKycpICsgJ10nKSA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlU2NoZW1hKG5hbWUsIHByaW1LZXksIGluZGV4ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwcmltS2V5OiBwcmltS2V5LFxuICAgICAgICBpbmRleGVzOiBpbmRleGVzLFxuICAgICAgICBtYXBwZWRDbGFzczogbnVsbCxcbiAgICAgICAgaWR4QnlOYW1lOiBhcnJheVRvT2JqZWN0KGluZGV4ZXMsIGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gW2luZGV4Lm5hbWUsIGluZGV4XTsgfSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRLZXlFeHRyYWN0b3Ioa2V5UGF0aCkge1xuICAgIGlmIChrZXlQYXRoID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGtleVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBnZXRTaW5nbGVQYXRoS2V5RXh0cmFjdG9yKGtleVBhdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIGdldEJ5S2V5UGF0aChvYmosIGtleVBhdGgpOyB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFNpbmdsZVBhdGhLZXlFeHRyYWN0b3Ioa2V5UGF0aCkge1xuICAgIHZhciBzcGxpdCA9IGtleVBhdGguc3BsaXQoJy4nKTtcbiAgICBpZiAoc3BsaXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmpba2V5UGF0aF07IH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gZ2V0QnlLZXlQYXRoKG9iaiwga2V5UGF0aCk7IH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3RpdmVLZXlzKHByaW1hcnlLZXksIHJlcSkge1xuICAgIGlmIChyZXEudHlwZSA9PT0gJ2RlbGV0ZScpXG4gICAgICAgIHJldHVybiByZXEua2V5cztcbiAgICByZXR1cm4gcmVxLmtleXMgfHwgcmVxLnZhbHVlcy5tYXAocHJpbWFyeUtleS5leHRyYWN0S2V5KTtcbn1cbmZ1bmN0aW9uIGdldEV4aXN0aW5nVmFsdWVzKHRhYmxlLCByZXEsIGVmZmVjdGl2ZUtleXMpIHtcbiAgICByZXR1cm4gcmVxLnR5cGUgPT09ICdhZGQnID8gUHJvbWlzZS5yZXNvbHZlKG5ldyBBcnJheShyZXEudmFsdWVzLmxlbmd0aCkpIDpcbiAgICAgICAgdGFibGUuZ2V0TWFueSh7IHRyYW5zOiByZXEudHJhbnMsIGtleXM6IGVmZmVjdGl2ZUtleXMgfSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5aWZ5KGFycmF5TGlrZSkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGFycmF5TGlrZSk7XG59XG5cbnZhciBfaWRfY291bnRlciA9IDA7XG5mdW5jdGlvbiBnZXRLZXlQYXRoQWxpYXMoa2V5UGF0aCkge1xuICAgIHJldHVybiBrZXlQYXRoID09IG51bGwgP1xuICAgICAgICBcIjppZFwiIDpcbiAgICAgICAgdHlwZW9mIGtleVBhdGggPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgIGtleVBhdGggOlxuICAgICAgICAgICAgXCJbXCIgKyBrZXlQYXRoLmpvaW4oJysnKSArIFwiXVwiO1xufVxuZnVuY3Rpb24gY3JlYXRlREJDb3JlKGRiLCBpbmRleGVkREIsIElkYktleVJhbmdlLCB0bXBUcmFucykge1xuICAgIHZhciBjbXAgPSBpbmRleGVkREIuY21wLmJpbmQoaW5kZXhlZERCKTtcbiAgICBmdW5jdGlvbiBleHRyYWN0U2NoZW1hKGRiLCB0cmFucykge1xuICAgICAgICB2YXIgdGFibGVzID0gYXJyYXlpZnkoZGIub2JqZWN0U3RvcmVOYW1lcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYi5uYW1lLFxuICAgICAgICAgICAgICAgIHRhYmxlczogdGFibGVzLm1hcChmdW5jdGlvbiAodGFibGUpIHsgcmV0dXJuIHRyYW5zLm9iamVjdFN0b3JlKHRhYmxlKTsgfSkubWFwKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aCA9IHN0b3JlLmtleVBhdGgsIGF1dG9JbmNyZW1lbnQgPSBzdG9yZS5hdXRvSW5jcmVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG91bmQgPSBpc0FycmF5KGtleVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3V0Ym91bmQgPSBrZXlQYXRoID09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleEJ5S2V5UGF0aCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RvcmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlLZXk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRib3VuZDogb3V0Ym91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG91bmQ6IGNvbXBvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVBhdGg6IGtleVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0luY3JlbWVudDogYXV0b0luY3JlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdEtleTogZ2V0S2V5RXh0cmFjdG9yKGtleVBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhlczogYXJyYXlpZnkoc3RvcmUuaW5kZXhOYW1lcykubWFwKGZ1bmN0aW9uIChpbmRleE5hbWUpIHsgcmV0dXJuIHN0b3JlLmluZGV4KGluZGV4TmFtZSk7IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGluZGV4Lm5hbWUsIHVuaXF1ZSA9IGluZGV4LnVuaXF1ZSwgbXVsdGlFbnRyeSA9IGluZGV4Lm11bHRpRW50cnksIGtleVBhdGggPSBpbmRleC5rZXlQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21wb3VuZCA9IGlzQXJyYXkoa2V5UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG91bmQ6IGNvbXBvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlQYXRoOiBrZXlQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWU6IHVuaXF1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlFbnRyeTogbXVsdGlFbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdEtleTogZ2V0S2V5RXh0cmFjdG9yKGtleVBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEJ5S2V5UGF0aFtnZXRLZXlQYXRoQWxpYXMoa2V5UGF0aCldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEluZGV4QnlLZXlQYXRoOiBmdW5jdGlvbiAoa2V5UGF0aCkgeyByZXR1cm4gaW5kZXhCeUtleVBhdGhbZ2V0S2V5UGF0aEFsaWFzKGtleVBhdGgpXTsgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpbmRleEJ5S2V5UGF0aFtcIjppZFwiXSA9IHJlc3VsdC5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5UGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleEJ5S2V5UGF0aFtnZXRLZXlQYXRoQWxpYXMoa2V5UGF0aCldID0gcmVzdWx0LnByaW1hcnlLZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0dldEFsbDogdGFibGVzLmxlbmd0aCA+IDAgJiYgKCdnZXRBbGwnIGluIHRyYW5zLm9iamVjdFN0b3JlKHRhYmxlc1swXSkpICYmXG4gICAgICAgICAgICAgICAgISh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICEvKENocm9tZVxcL3xFZGdlXFwvKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICBbXS5jb25jYXQobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvU2FmYXJpXFwvKFxcZCopLykpWzFdIDwgNjA0KVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYWtlSURCS2V5UmFuZ2UocmFuZ2UpIHtcbiAgICAgICAgaWYgKHJhbmdlLnR5cGUgPT09IDMgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChyYW5nZS50eXBlID09PSA0ICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbmV2ZXIgdHlwZSB0byBJREJLZXlSYW5nZVwiKTtcbiAgICAgICAgdmFyIGxvd2VyID0gcmFuZ2UubG93ZXIsIHVwcGVyID0gcmFuZ2UudXBwZXIsIGxvd2VyT3BlbiA9IHJhbmdlLmxvd2VyT3BlbiwgdXBwZXJPcGVuID0gcmFuZ2UudXBwZXJPcGVuO1xuICAgICAgICB2YXIgaWRiUmFuZ2UgPSBsb3dlciA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIHVwcGVyID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgIElkYktleVJhbmdlLnVwcGVyQm91bmQodXBwZXIsICEhdXBwZXJPcGVuKSA6XG4gICAgICAgICAgICB1cHBlciA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICBJZGJLZXlSYW5nZS5sb3dlckJvdW5kKGxvd2VyLCAhIWxvd2VyT3BlbikgOlxuICAgICAgICAgICAgICAgIElkYktleVJhbmdlLmJvdW5kKGxvd2VyLCB1cHBlciwgISFsb3dlck9wZW4sICEhdXBwZXJPcGVuKTtcbiAgICAgICAgcmV0dXJuIGlkYlJhbmdlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVEYkNvcmVUYWJsZSh0YWJsZVNjaGVtYSkge1xuICAgICAgICB2YXIgdGFibGVOYW1lID0gdGFibGVTY2hlbWEubmFtZTtcbiAgICAgICAgZnVuY3Rpb24gbXV0YXRlKF9hKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnMgPSBfYS50cmFucywgdHlwZSA9IF9hLnR5cGUsIGtleXMkJDEgPSBfYS5rZXlzLCB2YWx1ZXMgPSBfYS52YWx1ZXMsIHJhbmdlID0gX2EucmFuZ2UsIHdhbnRSZXN1bHRzID0gX2Eud2FudFJlc3VsdHM7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUgPSB3cmFwKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zLm9iamVjdFN0b3JlKHRhYmxlTmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIG91dGJvdW5kID0gc3RvcmUua2V5UGF0aCA9PSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBpc0FkZE9yUHV0ID0gdHlwZSA9PT0gXCJwdXRcIiB8fCB0eXBlID09PSBcImFkZFwiO1xuICAgICAgICAgICAgICAgIGlmICghaXNBZGRPclB1dCAmJiB0eXBlICE9PSAnZGVsZXRlJyAmJiB0eXBlICE9PSAnZGVsZXRlUmFuZ2UnKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9wZXJhdGlvbiB0eXBlOiBcIiArIHR5cGUpO1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGggPSAoa2V5cyQkMSB8fCB2YWx1ZXMgfHwgeyBsZW5ndGg6IDEgfSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChrZXlzJCQxICYmIHZhbHVlcyAmJiBrZXlzJCQxLmxlbmd0aCAhPT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBrZXlzIGFycmF5IG11c3QgaGF2ZSBzYW1lIGxlbmd0aCBhcyBnaXZlbiB2YWx1ZXMgYXJyYXkuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IG51bUZhaWx1cmVzOiAwLCBmYWlsdXJlczoge30sIHJlc3VsdHM6IFtdLCBsYXN0UmVzdWx0OiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSB3YW50UmVzdWx0cyAmJiBfX3NwcmVhZEFycmF5cygoa2V5cyQkMSA/XG4gICAgICAgICAgICAgICAgICAgIGtleXMkJDEgOlxuICAgICAgICAgICAgICAgICAgICBnZXRFZmZlY3RpdmVLZXlzKHRhYmxlU2NoZW1hLnByaW1hcnlLZXksIHsgdHlwZTogdHlwZSwga2V5czoga2V5cyQkMSwgdmFsdWVzOiB2YWx1ZXMgfSkpKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgICAgICAgIHZhciBmYWlsdXJlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBudW1GYWlsdXJlcyA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICArK251bUZhaWx1cmVzO1xuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1tldmVudC50YXJnZXQuX3JlcW5vXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXNbZXZlbnQudGFyZ2V0Ll9yZXFub10gPSBldmVudC50YXJnZXQuZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0UmVzdWx0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNbdGFyZ2V0Ll9yZXFub10gPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkZWxldGVSYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlLnR5cGUgPT09IDQgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IG51bUZhaWx1cmVzOiBudW1GYWlsdXJlcywgZmFpbHVyZXM6IGZhaWx1cmVzLCByZXN1bHRzOiByZXN1bHRzLCBsYXN0UmVzdWx0OiB1bmRlZmluZWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZS50eXBlID09PSAzICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IHN0b3JlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IHN0b3JlLmRlbGV0ZShtYWtlSURCS2V5UmFuZ2UocmFuZ2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGlzQWRkT3JQdXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0Ym91bmQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZXMsIGtleXMkJDFdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVzLCBudWxsXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5cyQkMSwgbnVsbF0sIGFyZ3MxID0gX2FbMF0sIGFyZ3MyID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FkZE9yUHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxID0gKGFyZ3MyICYmIGFyZ3MyW2ldICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVt0eXBlXShhcmdzMVtpXSwgYXJnczJbaV0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVbdHlwZV0oYXJnczFbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEuX3JlcW5vID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IHNldFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxID0gc3RvcmVbdHlwZV0oYXJnczFbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5fcmVxbm8gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0UmVzdWx0ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2xlbmd0aCAtIDFdID0gbGFzdFJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1GYWlsdXJlczogbnVtRmFpbHVyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlczogZmFpbHVyZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiByZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJlc3VsdDogbGFzdFJlc3VsdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGRvbmU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvcGVuQ3Vyc29yKF9hKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnMgPSBfYS50cmFucywgdmFsdWVzID0gX2EudmFsdWVzLCBxdWVyeSA9IF9hLnF1ZXJ5LCByZXZlcnNlID0gX2EucmV2ZXJzZSwgdW5pcXVlID0gX2EudW5pcXVlO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBxdWVyeS5pbmRleCwgcmFuZ2UgPSBxdWVyeS5yYW5nZTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFucy5vYmplY3RTdG9yZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBpbmRleC5pc1ByaW1hcnlLZXkgP1xuICAgICAgICAgICAgICAgICAgICBzdG9yZSA6XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmluZGV4KGluZGV4Lm5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSByZXZlcnNlID9cbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldnVuaXF1ZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldlwiIDpcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmV4dHVuaXF1ZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmV4dFwiO1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSB2YWx1ZXMgfHwgISgnb3BlbktleUN1cnNvcicgaW4gc291cmNlKSA/XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZS5vcGVuQ3Vyc29yKG1ha2VJREJLZXlSYW5nZShyYW5nZSksIGRpcmVjdGlvbikgOlxuICAgICAgICAgICAgICAgICAgICBzb3VyY2Uub3BlbktleUN1cnNvcihtYWtlSURCS2V5UmFuZ2UocmFuZ2UpLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IHdyYXAoZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuX19faWQgPSArK19pZF9jb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2N1cnNvckNvbnRpbnVlID0gY3Vyc29yLmNvbnRpbnVlLmJpbmQoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkgPSBjdXJzb3IuY29udGludWVQcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2N1cnNvckNvbnRpbnVlUHJpbWFyeUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkgPSBfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5LmJpbmQoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jdXJzb3JBZHZhbmNlID0gY3Vyc29yLmFkdmFuY2UuYmluZChjdXJzb3IpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9UaHJvd0N1cnNvcklzTm90U3RhcnRlZCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ3Vyc29yIG5vdCBzdGFydGVkXCIpOyB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9UaHJvd0N1cnNvcklzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ3Vyc29yIG5vdCBzdG9wcGVkXCIpOyB9O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IudHJhbnMgPSB0cmFucztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0b3AgPSBjdXJzb3IuY29udGludWUgPSBjdXJzb3IuY29udGludWVQcmltYXJ5S2V5ID0gY3Vyc29yLmFkdmFuY2UgPSBkb1Rocm93Q3Vyc29ySXNOb3RTdGFydGVkO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuZmFpbCA9IHdyYXAocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvdE9uZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydChmdW5jdGlvbiAoKSB7IHJldHVybiBnb3RPbmUtLSA/IF90aGlzLmNvbnRpbnVlKCkgOiBfdGhpcy5zdG9wKCk7IH0pLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXM7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3Iuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVJdGVyYXRpb24sIHJlamVjdEl0ZXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVJdGVyYXRpb24gPSB3cmFwKHJlc29sdmVJdGVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdEl0ZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmZhaWwgPSByZWplY3RJdGVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0b3AgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0b3AgPSBjdXJzb3IuY29udGludWUgPSBjdXJzb3IuY29udGludWVQcmltYXJ5S2V5ID0gY3Vyc29yLmFkdmFuY2UgPSBkb1Rocm93Q3Vyc29ySXNTdG9wcGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlSXRlcmF0aW9uKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3VhcmRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5mYWlsKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnN0YXJ0ID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDdXJzb3IgYmVoaW5kIGxhc3QgZW50cnlcIik7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSB3cmFwKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBndWFyZGVkQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSA9IF9jdXJzb3JDb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZVByaW1hcnlLZXkgPSBfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmFkdmFuY2UgPSBfY3Vyc29yQWR2YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJkZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdGlvblByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3Vyc29yKTtcbiAgICAgICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcXVlcnkoaGFzR2V0QWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zID0gcmVxdWVzdC50cmFucywgdmFsdWVzID0gcmVxdWVzdC52YWx1ZXMsIGxpbWl0ID0gcmVxdWVzdC5saW1pdCwgcXVlcnkgPSByZXF1ZXN0LnF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9uSW5maW5pdExpbWl0ID0gbGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHF1ZXJ5LmluZGV4LCByYW5nZSA9IHF1ZXJ5LnJhbmdlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFucy5vYmplY3RTdG9yZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gaW5kZXguaXNQcmltYXJ5S2V5ID8gc3RvcmUgOiBzdG9yZS5pbmRleChpbmRleC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkYktleVJhbmdlID0gbWFrZUlEQktleVJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbWl0ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyByZXN1bHQ6IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzR2V0QWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gdmFsdWVzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0QWxsKGlkYktleVJhbmdlLCBub25JbmZpbml0TGltaXQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0QWxsS2V5cyhpZGJLZXlSYW5nZSwgbm9uSW5maW5pdExpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIHJlc29sdmUoeyByZXN1bHQ6IGV2ZW50LnRhcmdldC5yZXN1bHQgfSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50XzEgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcV8xID0gdmFsdWVzIHx8ICEoJ29wZW5LZXlDdXJzb3InIGluIHNvdXJjZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZS5vcGVuQ3Vyc29yKGlkYktleVJhbmdlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLm9wZW5LZXlDdXJzb3IoaWRiS2V5UmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXFfMS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxXzEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IHJlc3VsdDogcmVzdWx0XzEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XzEucHVzaCh2YWx1ZXMgPyBjdXJzb3IudmFsdWUgOiBjdXJzb3IucHJpbWFyeUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCsrY291bnRfMSA9PT0gbGltaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgcmVzdWx0OiByZXN1bHRfMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXFfMS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRhYmxlTmFtZSxcbiAgICAgICAgICAgIHNjaGVtYTogdGFibGVTY2hlbWEsXG4gICAgICAgICAgICBtdXRhdGU6IG11dGF0ZSxcbiAgICAgICAgICAgIGdldE1hbnk6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFucyA9IF9hLnRyYW5zLCBrZXlzJCQxID0gX2Eua2V5cztcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnMub2JqZWN0U3RvcmUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGtleXMkJDEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja0NvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdFtyZXEuX3Bvc10gPSByZXEucmVzdWx0KSAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsrdmFsdWVDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgrK2NhbGxiYWNrQ291bnQgPT09IGtleUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9ySGFuZGxlciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5cyQkMVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcSA9IHN0b3JlLmdldChrZXlzJCQxW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEuX3BvcyA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IHN1Y2Nlc3NIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsra2V5Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleUNvdW50ID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zID0gX2EudHJhbnMsIGtleSA9IF9hLmtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gd3JhcChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnMub2JqZWN0U3RvcmUodGFibGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpOyB9O1xuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeShoYXNHZXRBbGwpLFxuICAgICAgICAgICAgb3BlbkN1cnNvcjogb3BlbkN1cnNvcixcbiAgICAgICAgICAgIGNvdW50OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBfYS5xdWVyeSwgdHJhbnMgPSBfYS50cmFucztcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBxdWVyeS5pbmRleCwgcmFuZ2UgPSBxdWVyeS5yYW5nZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFucy5vYmplY3RTdG9yZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gaW5kZXguaXNQcmltYXJ5S2V5ID8gc3RvcmUgOiBzdG9yZS5pbmRleChpbmRleC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkYktleVJhbmdlID0gbWFrZUlEQktleVJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYktleVJhbmdlID8gc291cmNlLmNvdW50KGlkYktleVJhbmdlKSA6IHNvdXJjZS5jb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gd3JhcChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIHJlc29sdmUoZXYudGFyZ2V0LnJlc3VsdCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgX2EgPSBleHRyYWN0U2NoZW1hKGRiLCB0bXBUcmFucyksIHNjaGVtYSA9IF9hLnNjaGVtYSwgaGFzR2V0QWxsID0gX2EuaGFzR2V0QWxsO1xuICAgIHZhciB0YWJsZXMgPSBzY2hlbWEudGFibGVzLm1hcChmdW5jdGlvbiAodGFibGVTY2hlbWEpIHsgcmV0dXJuIGNyZWF0ZURiQ29yZVRhYmxlKHRhYmxlU2NoZW1hKTsgfSk7XG4gICAgdmFyIHRhYmxlTWFwID0ge307XG4gICAgdGFibGVzLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7IHJldHVybiB0YWJsZU1hcFt0YWJsZS5uYW1lXSA9IHRhYmxlOyB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFjazogXCJkYmNvcmVcIixcbiAgICAgICAgdHJhbnNhY3Rpb246IGRiLnRyYW5zYWN0aW9uLmJpbmQoZGIpLFxuICAgICAgICB0YWJsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YWJsZU1hcFtuYW1lXTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRhYmxlICdcIiArIG5hbWUgKyBcIicgbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRhYmxlTWFwW25hbWVdO1xuICAgICAgICB9LFxuICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgTUlOX0tFWTogLUluZmluaXR5LFxuICAgICAgICBNQVhfS0VZOiBnZXRNYXhLZXkoSWRiS2V5UmFuZ2UpLFxuICAgICAgICBzY2hlbWE6IHNjaGVtYVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1pZGRsZXdhcmVTdGFjayhzdGFja0ltcGwsIG1pZGRsZXdhcmVzKSB7XG4gICAgcmV0dXJuIG1pZGRsZXdhcmVzLnJlZHVjZShmdW5jdGlvbiAoZG93biwgX2EpIHtcbiAgICAgICAgdmFyIGNyZWF0ZSA9IF9hLmNyZWF0ZTtcbiAgICAgICAgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZG93biksIGNyZWF0ZShkb3duKSkpO1xuICAgIH0sIHN0YWNrSW1wbCk7XG59XG5mdW5jdGlvbiBjcmVhdGVNaWRkbGV3YXJlU3RhY2tzKG1pZGRsZXdhcmVzLCBpZGJkYiwgX2EsIHRtcFRyYW5zKSB7XG4gICAgdmFyIElEQktleVJhbmdlID0gX2EuSURCS2V5UmFuZ2UsIGluZGV4ZWREQiA9IF9hLmluZGV4ZWREQjtcbiAgICB2YXIgZGJjb3JlID0gY3JlYXRlTWlkZGxld2FyZVN0YWNrKGNyZWF0ZURCQ29yZShpZGJkYiwgaW5kZXhlZERCLCBJREJLZXlSYW5nZSwgdG1wVHJhbnMpLCBtaWRkbGV3YXJlcy5kYmNvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRiY29yZTogZGJjb3JlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlTWlkZGxld2FyZVN0YWNrcyhkYiwgdG1wVHJhbnMpIHtcbiAgICB2YXIgaWRiZGIgPSB0bXBUcmFucy5kYjtcbiAgICB2YXIgc3RhY2tzID0gY3JlYXRlTWlkZGxld2FyZVN0YWNrcyhkYi5fbWlkZGxld2FyZXMsIGlkYmRiLCBkYi5fZGVwcywgdG1wVHJhbnMpO1xuICAgIGRiLmNvcmUgPSBzdGFja3MuZGJjb3JlO1xuICAgIGRiLnRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICB2YXIgdGFibGVOYW1lID0gdGFibGUubmFtZTtcbiAgICAgICAgaWYgKGRiLmNvcmUuc2NoZW1hLnRhYmxlcy5zb21lKGZ1bmN0aW9uICh0YmwpIHsgcmV0dXJuIHRibC5uYW1lID09PSB0YWJsZU5hbWU7IH0pKSB7XG4gICAgICAgICAgICB0YWJsZS5jb3JlID0gZGIuY29yZS50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgaWYgKGRiW3RhYmxlTmFtZV0gaW5zdGFuY2VvZiBkYi5UYWJsZSkge1xuICAgICAgICAgICAgICAgIGRiW3RhYmxlTmFtZV0uY29yZSA9IHRhYmxlLmNvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0QXBpT25QbGFjZShkYiwgb2JqcywgdGFibGVOYW1lcywgZGJzY2hlbWEpIHtcbiAgICB0YWJsZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICB2YXIgc2NoZW1hID0gZGJzY2hlbWFbdGFibGVOYW1lXTtcbiAgICAgICAgb2Jqcy5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBwcm9wRGVzYyA9IGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIHRhYmxlTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXByb3BEZXNjIHx8IChcInZhbHVlXCIgaW4gcHJvcERlc2MgJiYgcHJvcERlc2MudmFsdWUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqID09PSBkYi5UcmFuc2FjdGlvbi5wcm90b3R5cGUgfHwgb2JqIGluc3RhbmNlb2YgZGIuVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcChvYmosIHRhYmxlTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRhYmxlKHRhYmxlTmFtZSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIHRhYmxlTmFtZSwgeyB2YWx1ZTogdmFsdWUsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIGVudW1lcmFibGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqW3RhYmxlTmFtZV0gPSBuZXcgZGIuVGFibGUodGFibGVOYW1lLCBzY2hlbWEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZW1vdmVUYWJsZXNBcGkoZGIsIG9ianMpIHtcbiAgICBvYmpzLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0gaW5zdGFuY2VvZiBkYi5UYWJsZSlcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvd2VyVmVyc2lvbkZpcnN0KGEsIGIpIHtcbiAgICByZXR1cm4gYS5fY2ZnLnZlcnNpb24gLSBiLl9jZmcudmVyc2lvbjtcbn1cbmZ1bmN0aW9uIHJ1blVwZ3JhZGVycyhkYiwgb2xkVmVyc2lvbiwgaWRiVXBncmFkZVRyYW5zLCByZWplY3QpIHtcbiAgICB2YXIgZ2xvYmFsU2NoZW1hID0gZGIuX2RiU2NoZW1hO1xuICAgIHZhciB0cmFucyA9IGRiLl9jcmVhdGVUcmFuc2FjdGlvbigncmVhZHdyaXRlJywgZGIuX3N0b3JlTmFtZXMsIGdsb2JhbFNjaGVtYSk7XG4gICAgdHJhbnMuY3JlYXRlKGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgdHJhbnMuX2NvbXBsZXRpb24uY2F0Y2gocmVqZWN0KTtcbiAgICB2YXIgcmVqZWN0VHJhbnNhY3Rpb24gPSB0cmFucy5fcmVqZWN0LmJpbmQodHJhbnMpO1xuICAgIHZhciB0cmFuc2xlc3MgPSBQU0QudHJhbnNsZXNzIHx8IFBTRDtcbiAgICBuZXdTY29wZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIFBTRC50cmFucyA9IHRyYW5zO1xuICAgICAgICBQU0QudHJhbnNsZXNzID0gdHJhbnNsZXNzO1xuICAgICAgICBpZiAob2xkVmVyc2lvbiA9PT0gMCkge1xuICAgICAgICAgICAga2V5cyhnbG9iYWxTY2hlbWEpLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRhYmxlKGlkYlVwZ3JhZGVUcmFucywgdGFibGVOYW1lLCBnbG9iYWxTY2hlbWFbdGFibGVOYW1lXS5wcmltS2V5LCBnbG9iYWxTY2hlbWFbdGFibGVOYW1lXS5pbmRleGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzKGRiLCBpZGJVcGdyYWRlVHJhbnMpO1xuICAgICAgICAgICAgRGV4aWVQcm9taXNlLmZvbGxvdyhmdW5jdGlvbiAoKSB7IHJldHVybiBkYi5vbi5wb3B1bGF0ZS5maXJlKHRyYW5zKTsgfSkuY2F0Y2gocmVqZWN0VHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHVwZGF0ZVRhYmxlc0FuZEluZGV4ZXMoZGIsIG9sZFZlcnNpb24sIHRyYW5zLCBpZGJVcGdyYWRlVHJhbnMpLmNhdGNoKHJlamVjdFRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZVRhYmxlc0FuZEluZGV4ZXMoZGIsIG9sZFZlcnNpb24sIHRyYW5zLCBpZGJVcGdyYWRlVHJhbnMpIHtcbiAgICB2YXIgcXVldWUgPSBbXTtcbiAgICB2YXIgdmVyc2lvbnMgPSBkYi5fdmVyc2lvbnM7XG4gICAgdmFyIGdsb2JhbFNjaGVtYSA9IGRiLl9kYlNjaGVtYSA9IGJ1aWxkR2xvYmFsU2NoZW1hKGRiLCBkYi5pZGJkYiwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICB2YXIgYW55Q29udGVudFVwZ3JhZGVySGFzUnVuID0gZmFsc2U7XG4gICAgdmFyIHZlcnNUb1J1biA9IHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gdi5fY2ZnLnZlcnNpb24gPj0gb2xkVmVyc2lvbjsgfSk7XG4gICAgdmVyc1RvUnVuLmZvckVhY2goZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2xkU2NoZW1hID0gZ2xvYmFsU2NoZW1hO1xuICAgICAgICAgICAgdmFyIG5ld1NjaGVtYSA9IHZlcnNpb24uX2NmZy5kYnNjaGVtYTtcbiAgICAgICAgICAgIGFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzKGRiLCBvbGRTY2hlbWEsIGlkYlVwZ3JhZGVUcmFucyk7XG4gICAgICAgICAgICBhZGp1c3RUb0V4aXN0aW5nSW5kZXhOYW1lcyhkYiwgbmV3U2NoZW1hLCBpZGJVcGdyYWRlVHJhbnMpO1xuICAgICAgICAgICAgZ2xvYmFsU2NoZW1hID0gZGIuX2RiU2NoZW1hID0gbmV3U2NoZW1hO1xuICAgICAgICAgICAgdmFyIGRpZmYgPSBnZXRTY2hlbWFEaWZmKG9sZFNjaGVtYSwgbmV3U2NoZW1hKTtcbiAgICAgICAgICAgIGRpZmYuYWRkLmZvckVhY2goZnVuY3Rpb24gKHR1cGxlKSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVGFibGUoaWRiVXBncmFkZVRyYW5zLCB0dXBsZVswXSwgdHVwbGVbMV0ucHJpbUtleSwgdHVwbGVbMV0uaW5kZXhlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRpZmYuY2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2UucmVjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuVXBncmFkZShcIk5vdCB5ZXQgc3VwcG9ydCBmb3IgY2hhbmdpbmcgcHJpbWFyeSBrZXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmVfMSA9IGlkYlVwZ3JhZGVUcmFucy5vYmplY3RTdG9yZShjaGFuZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5hZGQuZm9yRWFjaChmdW5jdGlvbiAoaWR4KSB7IHJldHVybiBhZGRJbmRleChzdG9yZV8xLCBpZHgpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmNoYW5nZS5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlXzEuZGVsZXRlSW5kZXgoaWR4Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSW5kZXgoc3RvcmVfMSwgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZS5kZWwuZm9yRWFjaChmdW5jdGlvbiAoaWR4TmFtZSkgeyByZXR1cm4gc3RvcmVfMS5kZWxldGVJbmRleChpZHhOYW1lKTsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY29udGVudFVwZ3JhZGUgPSB2ZXJzaW9uLl9jZmcuY29udGVudFVwZ3JhZGU7XG4gICAgICAgICAgICBpZiAoY29udGVudFVwZ3JhZGUgJiYgdmVyc2lvbi5fY2ZnLnZlcnNpb24gPiBvbGRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzKGRiLCBpZGJVcGdyYWRlVHJhbnMpO1xuICAgICAgICAgICAgICAgIHRyYW5zLl9tZW1vaXplZFRhYmxlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGFueUNvbnRlbnRVcGdyYWRlckhhc1J1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVTY2hlbWFfMSA9IHNoYWxsb3dDbG9uZShuZXdTY2hlbWEpO1xuICAgICAgICAgICAgICAgIGRpZmYuZGVsLmZvckVhY2goZnVuY3Rpb24gKHRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVTY2hlbWFfMVt0YWJsZV0gPSBvbGRTY2hlbWFbdGFibGVdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZVRhYmxlc0FwaShkYiwgW2RiLlRyYW5zYWN0aW9uLnByb3RvdHlwZV0pO1xuICAgICAgICAgICAgICAgIHNldEFwaU9uUGxhY2UoZGIsIFtkYi5UcmFuc2FjdGlvbi5wcm90b3R5cGVdLCBrZXlzKHVwZ3JhZGVTY2hlbWFfMSksIHVwZ3JhZGVTY2hlbWFfMSk7XG4gICAgICAgICAgICAgICAgdHJhbnMuc2NoZW1hID0gdXBncmFkZVNjaGVtYV8xO1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50VXBncmFkZUlzQXN5bmNfMSA9IGlzQXN5bmNGdW5jdGlvbihjb250ZW50VXBncmFkZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRVcGdyYWRlSXNBc3luY18xKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudEV4cGVjdGVkQXdhaXRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZV8xO1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlRm9sbG93ZWQgPSBEZXhpZVByb21pc2UuZm9sbG93KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWVfMSA9IGNvbnRlbnRVcGdyYWRlKHRyYW5zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VXBncmFkZUlzQXN5bmNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNyZW1lbnRvciA9IGRlY3JlbWVudEV4cGVjdGVkQXdhaXRzLmJpbmQobnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWVfMS50aGVuKGRlY3JlbWVudG9yLCBkZWNyZW1lbnRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJldHVyblZhbHVlXzEgJiYgdHlwZW9mIHJldHVyblZhbHVlXzEudGhlbiA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgICAgICAgIERleGllUHJvbWlzZS5yZXNvbHZlKHJldHVyblZhbHVlXzEpIDogcHJvbWlzZUZvbGxvd2VkLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV0dXJuVmFsdWVfMTsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUucHVzaChmdW5jdGlvbiAoaWRidHJhbnMpIHtcbiAgICAgICAgICAgIGlmICghYW55Q29udGVudFVwZ3JhZGVySGFzUnVuIHx8ICFoYXNJRURlbGV0ZU9iamVjdFN0b3JlQnVnKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1NjaGVtYSA9IHZlcnNpb24uX2NmZy5kYnNjaGVtYTtcbiAgICAgICAgICAgICAgICBkZWxldGVSZW1vdmVkVGFibGVzKG5ld1NjaGVtYSwgaWRidHJhbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlVGFibGVzQXBpKGRiLCBbZGIuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSk7XG4gICAgICAgICAgICBzZXRBcGlPblBsYWNlKGRiLCBbZGIuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSwgZGIuX3N0b3JlTmFtZXMsIGRiLl9kYlNjaGVtYSk7XG4gICAgICAgICAgICB0cmFucy5zY2hlbWEgPSBkYi5fZGJTY2hlbWE7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJ1blF1ZXVlKCkge1xuICAgICAgICByZXR1cm4gcXVldWUubGVuZ3RoID8gRGV4aWVQcm9taXNlLnJlc29sdmUocXVldWUuc2hpZnQoKSh0cmFucy5pZGJ0cmFucykpLnRoZW4ocnVuUXVldWUpIDpcbiAgICAgICAgICAgIERleGllUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiBydW5RdWV1ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjcmVhdGVNaXNzaW5nVGFibGVzKGdsb2JhbFNjaGVtYSwgaWRiVXBncmFkZVRyYW5zKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNjaGVtYURpZmYob2xkU2NoZW1hLCBuZXdTY2hlbWEpIHtcbiAgICB2YXIgZGlmZiA9IHtcbiAgICAgICAgZGVsOiBbXSxcbiAgICAgICAgYWRkOiBbXSxcbiAgICAgICAgY2hhbmdlOiBbXVxuICAgIH07XG4gICAgdmFyIHRhYmxlO1xuICAgIGZvciAodGFibGUgaW4gb2xkU2NoZW1hKSB7XG4gICAgICAgIGlmICghbmV3U2NoZW1hW3RhYmxlXSlcbiAgICAgICAgICAgIGRpZmYuZGVsLnB1c2godGFibGUpO1xuICAgIH1cbiAgICBmb3IgKHRhYmxlIGluIG5ld1NjaGVtYSkge1xuICAgICAgICB2YXIgb2xkRGVmID0gb2xkU2NoZW1hW3RhYmxlXSwgbmV3RGVmID0gbmV3U2NoZW1hW3RhYmxlXTtcbiAgICAgICAgaWYgKCFvbGREZWYpIHtcbiAgICAgICAgICAgIGRpZmYuYWRkLnB1c2goW3RhYmxlLCBuZXdEZWZdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGFibGUsXG4gICAgICAgICAgICAgICAgZGVmOiBuZXdEZWYsXG4gICAgICAgICAgICAgICAgcmVjcmVhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlbDogW10sXG4gICAgICAgICAgICAgICAgYWRkOiBbXSxcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKChcbiAgICAgICAgICAgICcnICsgKG9sZERlZi5wcmltS2V5LmtleVBhdGggfHwgJycpKSAhPT0gKCcnICsgKG5ld0RlZi5wcmltS2V5LmtleVBhdGggfHwgJycpKSB8fFxuICAgICAgICAgICAgICAgIChvbGREZWYucHJpbUtleS5hdXRvICE9PSBuZXdEZWYucHJpbUtleS5hdXRvICYmICFpc0lFT3JFZGdlKSlcbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hhbmdlLnJlY3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkaWZmLmNoYW5nZS5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkSW5kZXhlcyA9IG9sZERlZi5pZHhCeU5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ZXMgPSBuZXdEZWYuaWR4QnlOYW1lO1xuICAgICAgICAgICAgICAgIHZhciBpZHhOYW1lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGZvciAoaWR4TmFtZSBpbiBvbGRJbmRleGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3SW5kZXhlc1tpZHhOYW1lXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZS5kZWwucHVzaChpZHhOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpZHhOYW1lIGluIG5ld0luZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZElkeCA9IG9sZEluZGV4ZXNbaWR4TmFtZV0sIG5ld0lkeCA9IG5ld0luZGV4ZXNbaWR4TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2xkSWR4KVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLmFkZC5wdXNoKG5ld0lkeCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZElkeC5zcmMgIT09IG5ld0lkeC5zcmMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UuY2hhbmdlLnB1c2gobmV3SWR4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZS5kZWwubGVuZ3RoID4gMCB8fCBjaGFuZ2UuYWRkLmxlbmd0aCA+IDAgfHwgY2hhbmdlLmNoYW5nZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYuY2hhbmdlLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZmY7XG59XG5mdW5jdGlvbiBjcmVhdGVUYWJsZShpZGJ0cmFucywgdGFibGVOYW1lLCBwcmltS2V5LCBpbmRleGVzKSB7XG4gICAgdmFyIHN0b3JlID0gaWRidHJhbnMuZGIuY3JlYXRlT2JqZWN0U3RvcmUodGFibGVOYW1lLCBwcmltS2V5LmtleVBhdGggP1xuICAgICAgICB7IGtleVBhdGg6IHByaW1LZXkua2V5UGF0aCwgYXV0b0luY3JlbWVudDogcHJpbUtleS5hdXRvIH0gOlxuICAgICAgICB7IGF1dG9JbmNyZW1lbnQ6IHByaW1LZXkuYXV0byB9KTtcbiAgICBpbmRleGVzLmZvckVhY2goZnVuY3Rpb24gKGlkeCkgeyByZXR1cm4gYWRkSW5kZXgoc3RvcmUsIGlkeCk7IH0pO1xuICAgIHJldHVybiBzdG9yZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdUYWJsZXMobmV3U2NoZW1hLCBpZGJ0cmFucykge1xuICAgIGtleXMobmV3U2NoZW1hKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZU5hbWUpIHtcbiAgICAgICAgaWYgKCFpZGJ0cmFucy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHRhYmxlTmFtZSkpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRhYmxlKGlkYnRyYW5zLCB0YWJsZU5hbWUsIG5ld1NjaGVtYVt0YWJsZU5hbWVdLnByaW1LZXksIG5ld1NjaGVtYVt0YWJsZU5hbWVdLmluZGV4ZXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkZWxldGVSZW1vdmVkVGFibGVzKG5ld1NjaGVtYSwgaWRidHJhbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlkYnRyYW5zLmRiLm9iamVjdFN0b3JlTmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHN0b3JlTmFtZSA9IGlkYnRyYW5zLmRiLm9iamVjdFN0b3JlTmFtZXNbaV07XG4gICAgICAgIGlmIChuZXdTY2hlbWFbc3RvcmVOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZGJ0cmFucy5kYi5kZWxldGVPYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkSW5kZXgoc3RvcmUsIGlkeCkge1xuICAgIHN0b3JlLmNyZWF0ZUluZGV4KGlkeC5uYW1lLCBpZHgua2V5UGF0aCwgeyB1bmlxdWU6IGlkeC51bmlxdWUsIG11bHRpRW50cnk6IGlkeC5tdWx0aSB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkR2xvYmFsU2NoZW1hKGRiLCBpZGJkYiwgdG1wVHJhbnMpIHtcbiAgICB2YXIgZ2xvYmFsU2NoZW1hID0ge307XG4gICAgdmFyIGRiU3RvcmVOYW1lcyA9IHNsaWNlKGlkYmRiLm9iamVjdFN0b3JlTmFtZXMsIDApO1xuICAgIGRiU3RvcmVOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdG1wVHJhbnMub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgdmFyIGtleVBhdGggPSBzdG9yZS5rZXlQYXRoO1xuICAgICAgICB2YXIgcHJpbUtleSA9IGNyZWF0ZUluZGV4U3BlYyhuYW1lRnJvbUtleVBhdGgoa2V5UGF0aCksIGtleVBhdGggfHwgXCJcIiwgZmFsc2UsIGZhbHNlLCAhIXN0b3JlLmF1dG9JbmNyZW1lbnQsIGtleVBhdGggJiYgdHlwZW9mIGtleVBhdGggIT09IFwic3RyaW5nXCIsIHRydWUpO1xuICAgICAgICB2YXIgaW5kZXhlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN0b3JlLmluZGV4TmFtZXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBpZGJpbmRleCA9IHN0b3JlLmluZGV4KHN0b3JlLmluZGV4TmFtZXNbal0pO1xuICAgICAgICAgICAga2V5UGF0aCA9IGlkYmluZGV4LmtleVBhdGg7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjcmVhdGVJbmRleFNwZWMoaWRiaW5kZXgubmFtZSwga2V5UGF0aCwgISFpZGJpbmRleC51bmlxdWUsICEhaWRiaW5kZXgubXVsdGlFbnRyeSwgZmFsc2UsIGtleVBhdGggJiYgdHlwZW9mIGtleVBhdGggIT09IFwic3RyaW5nXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU2NoZW1hW3N0b3JlTmFtZV0gPSBjcmVhdGVUYWJsZVNjaGVtYShzdG9yZU5hbWUsIHByaW1LZXksIGluZGV4ZXMpO1xuICAgIH0pO1xuICAgIHJldHVybiBnbG9iYWxTY2hlbWE7XG59XG5mdW5jdGlvbiByZWFkR2xvYmFsU2NoZW1hKGRiLCBpZGJkYiwgdG1wVHJhbnMpIHtcbiAgICBkYi52ZXJubyA9IGlkYmRiLnZlcnNpb24gLyAxMDtcbiAgICB2YXIgZ2xvYmFsU2NoZW1hID0gZGIuX2RiU2NoZW1hID0gYnVpbGRHbG9iYWxTY2hlbWEoZGIsIGlkYmRiLCB0bXBUcmFucyk7XG4gICAgZGIuX3N0b3JlTmFtZXMgPSBzbGljZShpZGJkYi5vYmplY3RTdG9yZU5hbWVzLCAwKTtcbiAgICBzZXRBcGlPblBsYWNlKGRiLCBbZGIuX2FsbFRhYmxlc10sIGtleXMoZ2xvYmFsU2NoZW1hKSwgZ2xvYmFsU2NoZW1hKTtcbn1cbmZ1bmN0aW9uIHZlcmlmeUluc3RhbGxlZFNjaGVtYShkYiwgdG1wVHJhbnMpIHtcbiAgICB2YXIgaW5zdGFsbGVkU2NoZW1hID0gYnVpbGRHbG9iYWxTY2hlbWEoZGIsIGRiLmlkYmRiLCB0bXBUcmFucyk7XG4gICAgdmFyIGRpZmYgPSBnZXRTY2hlbWFEaWZmKGluc3RhbGxlZFNjaGVtYSwgZGIuX2RiU2NoZW1hKTtcbiAgICByZXR1cm4gIShkaWZmLmFkZC5sZW5ndGggfHwgZGlmZi5jaGFuZ2Uuc29tZShmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGNoLmFkZC5sZW5ndGggfHwgY2guY2hhbmdlLmxlbmd0aDsgfSkpO1xufVxuZnVuY3Rpb24gYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMoZGIsIHNjaGVtYSwgaWRidHJhbnMpIHtcbiAgICB2YXIgc3RvcmVOYW1lcyA9IGlkYnRyYW5zLmRiLm9iamVjdFN0b3JlTmFtZXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9yZU5hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBzdG9yZU5hbWUgPSBzdG9yZU5hbWVzW2ldO1xuICAgICAgICB2YXIgc3RvcmUgPSBpZGJ0cmFucy5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICBkYi5faGFzR2V0QWxsID0gJ2dldEFsbCcgaW4gc3RvcmU7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3RvcmUuaW5kZXhOYW1lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgdmFyIGluZGV4TmFtZSA9IHN0b3JlLmluZGV4TmFtZXNbal07XG4gICAgICAgICAgICB2YXIga2V5UGF0aCA9IHN0b3JlLmluZGV4KGluZGV4TmFtZSkua2V5UGF0aDtcbiAgICAgICAgICAgIHZhciBkZXhpZU5hbWUgPSB0eXBlb2Yga2V5UGF0aCA9PT0gJ3N0cmluZycgPyBrZXlQYXRoIDogXCJbXCIgKyBzbGljZShrZXlQYXRoKS5qb2luKCcrJykgKyBcIl1cIjtcbiAgICAgICAgICAgIGlmIChzY2hlbWFbc3RvcmVOYW1lXSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleFNwZWMgPSBzY2hlbWFbc3RvcmVOYW1lXS5pZHhCeU5hbWVbZGV4aWVOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhTcGVjKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4U3BlYy5uYW1lID0gaW5kZXhOYW1lO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NoZW1hW3N0b3JlTmFtZV0uaWR4QnlOYW1lW2RleGllTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVtzdG9yZU5hbWVdLmlkeEJ5TmFtZVtpbmRleE5hbWVdID0gaW5kZXhTcGVjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJlxuICAgICAgICAhLyhDaHJvbWVcXC98RWRnZVxcLykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiZcbiAgICAgICAgX2dsb2JhbC5Xb3JrZXJHbG9iYWxTY29wZSAmJiBfZ2xvYmFsIGluc3RhbmNlb2YgX2dsb2JhbC5Xb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgICAgICBbXS5jb25jYXQobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvU2FmYXJpXFwvKFxcZCopLykpWzFdIDwgNjA0KSB7XG4gICAgICAgIGRiLl9oYXNHZXRBbGwgPSBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJzZUluZGV4U3ludGF4KHByaW1LZXlBbmRJbmRleGVzKSB7XG4gICAgcmV0dXJuIHByaW1LZXlBbmRJbmRleGVzLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpbmRleCwgaW5kZXhOdW0pIHtcbiAgICAgICAgaW5kZXggPSBpbmRleC50cmltKCk7XG4gICAgICAgIHZhciBuYW1lID0gaW5kZXgucmVwbGFjZSgvKFsmKl18XFwrXFwrKS9nLCBcIlwiKTtcbiAgICAgICAgdmFyIGtleVBhdGggPSAvXlxcWy8udGVzdChuYW1lKSA/IG5hbWUubWF0Y2goL15cXFsoLiopXFxdJC8pWzFdLnNwbGl0KCcrJykgOiBuYW1lO1xuICAgICAgICByZXR1cm4gY3JlYXRlSW5kZXhTcGVjKG5hbWUsIGtleVBhdGggfHwgbnVsbCwgL1xcJi8udGVzdChpbmRleCksIC9cXCovLnRlc3QoaW5kZXgpLCAvXFwrXFwrLy50ZXN0KGluZGV4KSwgaXNBcnJheShrZXlQYXRoKSwgaW5kZXhOdW0gPT09IDApO1xuICAgIH0pO1xufVxuXG52YXIgVmVyc2lvbiA9ICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWZXJzaW9uKCkge1xuICAgIH1cbiAgICBWZXJzaW9uLnByb3RvdHlwZS5fcGFyc2VTdG9yZXNTcGVjID0gZnVuY3Rpb24gKHN0b3Jlcywgb3V0U2NoZW1hKSB7XG4gICAgICAgIGtleXMoc3RvcmVzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJsZU5hbWUpIHtcbiAgICAgICAgICAgIGlmIChzdG9yZXNbdGFibGVOYW1lXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleGVzID0gcGFyc2VJbmRleFN5bnRheChzdG9yZXNbdGFibGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgdmFyIHByaW1LZXkgPSBpbmRleGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHByaW1LZXkubXVsdGkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlNjaGVtYShcIlByaW1hcnkga2V5IGNhbm5vdCBiZSBtdWx0aS12YWx1ZWRcIik7XG4gICAgICAgICAgICAgICAgaW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeC5hdXRvKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuU2NoZW1hKFwiT25seSBwcmltYXJ5IGtleSBjYW4gYmUgbWFya2VkIGFzIGF1dG9JbmNyZW1lbnQgKCsrKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZHgua2V5UGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlNjaGVtYShcIkluZGV4IG11c3QgaGF2ZSBhIG5hbWUgYW5kIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb3V0U2NoZW1hW3RhYmxlTmFtZV0gPSBjcmVhdGVUYWJsZVNjaGVtYSh0YWJsZU5hbWUsIHByaW1LZXksIGluZGV4ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZlcnNpb24ucHJvdG90eXBlLnN0b3JlcyA9IGZ1bmN0aW9uIChzdG9yZXMpIHtcbiAgICAgICAgdmFyIGRiID0gdGhpcy5kYjtcbiAgICAgICAgdGhpcy5fY2ZnLnN0b3Jlc1NvdXJjZSA9IHRoaXMuX2NmZy5zdG9yZXNTb3VyY2UgP1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMuX2NmZy5zdG9yZXNTb3VyY2UsIHN0b3JlcykgOlxuICAgICAgICAgICAgc3RvcmVzO1xuICAgICAgICB2YXIgdmVyc2lvbnMgPSBkYi5fdmVyc2lvbnM7XG4gICAgICAgIHZhciBzdG9yZXNTcGVjID0ge307XG4gICAgICAgIHZhciBkYnNjaGVtYSA9IHt9O1xuICAgICAgICB2ZXJzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICBleHRlbmQoc3RvcmVzU3BlYywgdmVyc2lvbi5fY2ZnLnN0b3Jlc1NvdXJjZSk7XG4gICAgICAgICAgICBkYnNjaGVtYSA9ICh2ZXJzaW9uLl9jZmcuZGJzY2hlbWEgPSB7fSk7XG4gICAgICAgICAgICB2ZXJzaW9uLl9wYXJzZVN0b3Jlc1NwZWMoc3RvcmVzU3BlYywgZGJzY2hlbWEpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGIuX2RiU2NoZW1hID0gZGJzY2hlbWE7XG4gICAgICAgIHJlbW92ZVRhYmxlc0FwaShkYiwgW2RiLl9hbGxUYWJsZXMsIGRiLCBkYi5UcmFuc2FjdGlvbi5wcm90b3R5cGVdKTtcbiAgICAgICAgc2V0QXBpT25QbGFjZShkYiwgW2RiLl9hbGxUYWJsZXMsIGRiLCBkYi5UcmFuc2FjdGlvbi5wcm90b3R5cGUsIHRoaXMuX2NmZy50YWJsZXNdLCBrZXlzKGRic2NoZW1hKSwgZGJzY2hlbWEpO1xuICAgICAgICBkYi5fc3RvcmVOYW1lcyA9IGtleXMoZGJzY2hlbWEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFZlcnNpb24ucHJvdG90eXBlLnVwZ3JhZGUgPSBmdW5jdGlvbiAodXBncmFkZUZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2NmZy5jb250ZW50VXBncmFkZSA9IHVwZ3JhZGVGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gVmVyc2lvbjtcbn0oKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnNpb25Db25zdHJ1Y3RvcihkYikge1xuICAgIHJldHVybiBtYWtlQ2xhc3NDb25zdHJ1Y3RvcihWZXJzaW9uLnByb3RvdHlwZSwgZnVuY3Rpb24gVmVyc2lvbiQkMSh2ZXJzaW9uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGIgPSBkYjtcbiAgICAgICAgdGhpcy5fY2ZnID0ge1xuICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbk51bWJlcixcbiAgICAgICAgICAgIHN0b3Jlc1NvdXJjZTogbnVsbCxcbiAgICAgICAgICAgIGRic2NoZW1hOiB7fSxcbiAgICAgICAgICAgIHRhYmxlczoge30sXG4gICAgICAgICAgICBjb250ZW50VXBncmFkZTogbnVsbFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG52YXIgZGF0YWJhc2VFbnVtZXJhdG9yO1xuZnVuY3Rpb24gRGF0YWJhc2VFbnVtZXJhdG9yKGluZGV4ZWREQikge1xuICAgIHZhciBoYXNEYXRhYmFzZXNOYXRpdmUgPSBpbmRleGVkREIgJiYgdHlwZW9mIGluZGV4ZWREQi5kYXRhYmFzZXMgPT09ICdmdW5jdGlvbic7XG4gICAgdmFyIGRiTmFtZXNUYWJsZTtcbiAgICBpZiAoIWhhc0RhdGFiYXNlc05hdGl2ZSkge1xuICAgICAgICB2YXIgZGIgPSBuZXcgRGV4aWUoREJOQU1FU19EQiwgeyBhZGRvbnM6IFtdIH0pO1xuICAgICAgICBkYi52ZXJzaW9uKDEpLnN0b3Jlcyh7IGRibmFtZXM6ICduYW1lJyB9KTtcbiAgICAgICAgZGJOYW1lc1RhYmxlID0gZGIudGFibGUoJ2RibmFtZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RGF0YWJhc2VOYW1lczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhhc0RhdGFiYXNlc05hdGl2ZVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgRGV4aWVQcm9taXNlLnJlc29sdmUoaW5kZXhlZERCLmRhdGFiYXNlcygpKS50aGVuKGZ1bmN0aW9uIChpbmZvcykgeyByZXR1cm4gaW5mb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGluZm8pIHsgcmV0dXJuIGluZm8ubmFtZTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG5hbWUgIT09IERCTkFNRVNfREI7IH0pOyB9KVxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgZGJOYW1lc1RhYmxlLnRvQ29sbGVjdGlvbigpLnByaW1hcnlLZXlzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAhaGFzRGF0YWJhc2VzTmF0aXZlICYmIG5hbWUgIT09IERCTkFNRVNfREIgJiYgZGJOYW1lc1RhYmxlLnB1dCh7IG5hbWU6IG5hbWUgfSkuY2F0Y2gobm9wKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoYXNEYXRhYmFzZXNOYXRpdmUgJiYgbmFtZSAhPT0gREJOQU1FU19EQiAmJiBkYk5hbWVzVGFibGUuZGVsZXRlKG5hbWUpLmNhdGNoKG5vcCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gaW5pdERhdGFiYXNlRW51bWVyYXRvcihpbmRleGVkREIpIHtcbiAgICB0cnkge1xuICAgICAgICBkYXRhYmFzZUVudW1lcmF0b3IgPSBEYXRhYmFzZUVudW1lcmF0b3IoaW5kZXhlZERCKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHsgfVxufVxuXG5mdW5jdGlvbiB2aXAoZm4pIHtcbiAgICByZXR1cm4gbmV3U2NvcGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBQU0QubGV0VGhyb3VnaCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZXhpZU9wZW4oZGIpIHtcbiAgICB2YXIgc3RhdGUgPSBkYi5fc3RhdGU7XG4gICAgdmFyIGluZGV4ZWREQiA9IGRiLl9kZXBzLmluZGV4ZWREQjtcbiAgICBpZiAoc3RhdGUuaXNCZWluZ09wZW5lZCB8fCBkYi5pZGJkYilcbiAgICAgICAgcmV0dXJuIHN0YXRlLmRiUmVhZHlQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGUuZGJPcGVuRXJyb3IgP1xuICAgICAgICAgICAgcmVqZWN0aW9uKHN0YXRlLmRiT3BlbkVycm9yKSA6XG4gICAgICAgICAgICBkYjsgfSk7XG4gICAgZGVidWcgJiYgKHN0YXRlLm9wZW5DYW5jZWxsZXIuX3N0YWNrSG9sZGVyID0gZ2V0RXJyb3JXaXRoU3RhY2soKSk7XG4gICAgc3RhdGUuaXNCZWluZ09wZW5lZCA9IHRydWU7XG4gICAgc3RhdGUuZGJPcGVuRXJyb3IgPSBudWxsO1xuICAgIHN0YXRlLm9wZW5Db21wbGV0ZSA9IGZhbHNlO1xuICAgIHZhciByZXNvbHZlRGJSZWFkeSA9IHN0YXRlLmRiUmVhZHlSZXNvbHZlLFxuICAgIHVwZ3JhZGVUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgcmV0dXJuIERleGllUHJvbWlzZS5yYWNlKFtzdGF0ZS5vcGVuQ2FuY2VsbGVyLCBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICghaW5kZXhlZERCKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLk1pc3NpbmdBUEkoXCJpbmRleGVkREIgQVBJIG5vdCBmb3VuZC4gSWYgdXNpbmcgSUUxMCssIG1ha2Ugc3VyZSB0byBydW4geW91ciBjb2RlIG9uIGEgc2VydmVyIFVSTCBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiKG5vdCBsb2NhbGx5KS4gSWYgdXNpbmcgb2xkIFNhZmFyaSB2ZXJzaW9ucywgbWFrZSBzdXJlIHRvIGluY2x1ZGUgaW5kZXhlZERCIHBvbHlmaWxsLlwiKTtcbiAgICAgICAgICAgIHZhciBkYk5hbWUgPSBkYi5uYW1lO1xuICAgICAgICAgICAgdmFyIHJlcSA9IHN0YXRlLmF1dG9TY2hlbWEgP1xuICAgICAgICAgICAgICAgIGluZGV4ZWREQi5vcGVuKGRiTmFtZSkgOlxuICAgICAgICAgICAgICAgIGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgTWF0aC5yb3VuZChkYi52ZXJubyAqIDEwKSk7XG4gICAgICAgICAgICBpZiAoIXJlcSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5NaXNzaW5nQVBJKFwiSW5kZXhlZERCIEFQSSBub3QgYXZhaWxhYmxlXCIpO1xuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBldmVudFJlamVjdEhhbmRsZXIocmVqZWN0KTtcbiAgICAgICAgICAgIHJlcS5vbmJsb2NrZWQgPSB3cmFwKGRiLl9maXJlT25CbG9ja2VkKTtcbiAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSB3cmFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdXBncmFkZVRyYW5zYWN0aW9uID0gcmVxLnRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5hdXRvU2NoZW1hICYmICFkYi5fb3B0aW9ucy5hbGxvd0VtcHR5REIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBwcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgdXBncmFkZVRyYW5zYWN0aW9uLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5yZXN1bHQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHJlcSA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShkYk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBkZWxyZXEub25zdWNjZXNzID0gZGVscmVxLm9uZXJyb3IgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgZXhjZXB0aW9ucy5Ob1N1Y2hEYXRhYmFzZShcIkRhdGFiYXNlIFwiICsgZGJOYW1lICsgXCIgZG9lc250IGV4aXN0XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGdyYWRlVHJhbnNhY3Rpb24ub25lcnJvciA9IGV2ZW50UmVqZWN0SGFuZGxlcihyZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkVmVyID0gZS5vbGRWZXJzaW9uID4gTWF0aC5wb3coMiwgNjIpID8gMCA6IGUub2xkVmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgZGIuaWRiZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBydW5VcGdyYWRlcnMoZGIsIG9sZFZlciAvIDEwLCB1cGdyYWRlVHJhbnNhY3Rpb24sIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1cGdyYWRlVHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBpZGJkYiA9IGRiLmlkYmRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0U3RvcmVOYW1lcyA9IHNsaWNlKGlkYmRiLm9iamVjdFN0b3JlTmFtZXMpO1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3RTdG9yZU5hbWVzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG1wVHJhbnMgPSBpZGJkYi50cmFuc2FjdGlvbihzYWZhcmlNdWx0aVN0b3JlRml4KG9iamVjdFN0b3JlTmFtZXMpLCAncmVhZG9ubHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5hdXRvU2NoZW1hKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRHbG9iYWxTY2hlbWEoZGIsIGlkYmRiLCB0bXBUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RUb0V4aXN0aW5nSW5kZXhOYW1lcyhkYiwgZGIuX2RiU2NoZW1hLCB0bXBUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2ZXJpZnlJbnN0YWxsZWRTY2hlbWEoZGIsIHRtcFRyYW5zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEZXhpZSBTY2hlbWFEaWZmOiBTY2hlbWEgd2FzIGV4dGVuZGVkIHdpdGhvdXQgaW5jcmVhc2luZyB0aGUgbnVtYmVyIHBhc3NlZCB0byBkYi52ZXJzaW9uKCkuIFNvbWUgcXVlcmllcyBtYXkgZmFpbC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzKGRiLCB0bXBUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2goZGIpO1xuICAgICAgICAgICAgICAgIGlkYmRiLm9udmVyc2lvbmNoYW5nZSA9IHdyYXAoZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnZjRmlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYi5vbihcInZlcnNpb25jaGFuZ2VcIikuZmlyZShldik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGF0YWJhc2VFbnVtZXJhdG9yLmFkZChkYk5hbWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pXSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlLm9uUmVhZHlCZWluZ0ZpcmVkID0gW107XG4gICAgICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZSh2aXAoZGIub24ucmVhZHkuZmlyZSkpLnRoZW4oZnVuY3Rpb24gZmlyZVJlbWFpbmRlcnMoKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUub25SZWFkeUJlaW5nRmlyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1haW5kZXJzID0gc3RhdGUub25SZWFkeUJlaW5nRmlyZWQucmVkdWNlKHByb21pc2FibGVDaGFpbiwgbm9wKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5vblJlYWR5QmVpbmdGaXJlZCA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZSh2aXAocmVtYWluZGVycykpLnRoZW4oZmlyZVJlbWFpbmRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUub25SZWFkeUJlaW5nRmlyZWQgPSBudWxsO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGF0ZS5pc0JlaW5nT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBkYjtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB1cGdyYWRlVHJhbnNhY3Rpb24gJiYgdXBncmFkZVRyYW5zYWN0aW9uLmFib3J0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICBzdGF0ZS5pc0JlaW5nT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgIHN0YXRlLmRiT3BlbkVycm9yID0gZXJyO1xuICAgICAgICByZXR1cm4gcmVqZWN0aW9uKHN0YXRlLmRiT3BlbkVycm9yKTtcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhdGUub3BlbkNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZURiUmVhZHkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXdhaXRJdGVyYXRvcihpdGVyYXRvcikge1xuICAgIHZhciBjYWxsTmV4dCA9IGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIGl0ZXJhdG9yLm5leHQocmVzdWx0KTsgfSwgZG9UaHJvdyA9IGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gaXRlcmF0b3IudGhyb3coZXJyb3IpOyB9LCBvblN1Y2Nlc3MgPSBzdGVwKGNhbGxOZXh0KSwgb25FcnJvciA9IHN0ZXAoZG9UaHJvdyk7XG4gICAgZnVuY3Rpb24gc3RlcChnZXROZXh0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICB2YXIgbmV4dCA9IGdldE5leHQodmFsKSwgdmFsdWUgPSBuZXh0LnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuZG9uZSA/IHZhbHVlIDpcbiAgICAgICAgICAgICAgICAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZS50aGVuICE9PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgaXNBcnJheSh2YWx1ZSkgPyBQcm9taXNlLmFsbCh2YWx1ZSkudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpIDogb25TdWNjZXNzKHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzdGVwKGNhbGxOZXh0KSgpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNhY3Rpb25BcmdzKG1vZGUsIF90YWJsZUFyZ3NfLCBzY29wZUZ1bmMpIHtcbiAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGkgPCAyKVxuICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJUb28gZmV3IGFyZ3VtZW50c1wiKTtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShpIC0gMSk7XG4gICAgd2hpbGUgKC0taSlcbiAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgc2NvcGVGdW5jID0gYXJncy5wb3AoKTtcbiAgICB2YXIgdGFibGVzID0gZmxhdHRlbihhcmdzKTtcbiAgICByZXR1cm4gW21vZGUsIHRhYmxlcywgc2NvcGVGdW5jXTtcbn1cbmZ1bmN0aW9uIGVudGVyVHJhbnNhY3Rpb25TY29wZShkYiwgbW9kZSwgc3RvcmVOYW1lcywgcGFyZW50VHJhbnNhY3Rpb24sIHNjb3BlRnVuYykge1xuICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNsZXNzID0gUFNELnRyYW5zbGVzcyB8fCBQU0Q7XG4gICAgICAgIHZhciB0cmFucyA9IGRiLl9jcmVhdGVUcmFuc2FjdGlvbihtb2RlLCBzdG9yZU5hbWVzLCBkYi5fZGJTY2hlbWEsIHBhcmVudFRyYW5zYWN0aW9uKTtcbiAgICAgICAgdmFyIHpvbmVQcm9wcyA9IHtcbiAgICAgICAgICAgIHRyYW5zOiB0cmFucyxcbiAgICAgICAgICAgIHRyYW5zbGVzczogdHJhbnNsZXNzXG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJlbnRUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdHJhbnMuaWRidHJhbnMgPSBwYXJlbnRUcmFuc2FjdGlvbi5pZGJ0cmFucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zLmNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY29wZUZ1bmNJc0FzeW5jID0gaXNBc3luY0Z1bmN0aW9uKHNjb3BlRnVuYyk7XG4gICAgICAgIGlmIChzY29wZUZ1bmNJc0FzeW5jKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cygpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICAgICAgdmFyIHByb21pc2VGb2xsb3dlZCA9IERleGllUHJvbWlzZS5mb2xsb3coZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBzY29wZUZ1bmMuY2FsbCh0cmFucywgdHJhbnMpO1xuICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlRnVuY0lzQXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlY3JlbWVudG9yID0gZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMuYmluZChudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUudGhlbihkZWNyZW1lbnRvciwgZGVjcmVtZW50b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcmV0dXJuVmFsdWUubmV4dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmV0dXJuVmFsdWUudGhyb3cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhd2FpdEl0ZXJhdG9yKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHpvbmVQcm9wcyk7XG4gICAgICAgIHJldHVybiAocmV0dXJuVmFsdWUgJiYgdHlwZW9mIHJldHVyblZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgRGV4aWVQcm9taXNlLnJlc29sdmUocmV0dXJuVmFsdWUpLnRoZW4oZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHRyYW5zLmFjdGl2ZSA/XG4gICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgIDogcmVqZWN0aW9uKG5ldyBleGNlcHRpb25zLlByZW1hdHVyZUNvbW1pdChcIlRyYW5zYWN0aW9uIGNvbW1pdHRlZCB0b28gZWFybHkuIFNlZSBodHRwOi8vYml0Lmx5LzJrZGNrTW5cIikpOyB9KVxuICAgICAgICAgICAgOiBwcm9taXNlRm9sbG93ZWQudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXR1cm5WYWx1ZTsgfSkpLnRoZW4oZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRUcmFuc2FjdGlvbilcbiAgICAgICAgICAgICAgICB0cmFucy5fcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zLl9jb21wbGV0aW9uLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0cmFucy5fcmVqZWN0KGUpO1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdGlvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhZChhLCB2YWx1ZSwgY291bnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gaXNBcnJheShhKSA/IGEuc2xpY2UoKSA6IFthXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpXG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY3JlYXRlVmlydHVhbEluZGV4TWlkZGxld2FyZShkb3duKSB7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkb3duKSwgeyB0YWJsZTogZnVuY3Rpb24gKHRhYmxlTmFtZSkge1xuICAgICAgICAgICAgdmFyIHRhYmxlID0gZG93bi50YWJsZSh0YWJsZU5hbWUpO1xuICAgICAgICAgICAgdmFyIHNjaGVtYSA9IHRhYmxlLnNjaGVtYTtcbiAgICAgICAgICAgIHZhciBpbmRleExvb2t1cCA9IHt9O1xuICAgICAgICAgICAgdmFyIGFsbFZpcnR1YWxJbmRleGVzID0gW107XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRWaXJ0dWFsSW5kZXhlcyhrZXlQYXRoLCBrZXlUYWlsLCBsb3dMZXZlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleVBhdGhBbGlhcyA9IGdldEtleVBhdGhBbGlhcyhrZXlQYXRoKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhMaXN0ID0gKGluZGV4TG9va3VwW2tleVBhdGhBbGlhc10gPSBpbmRleExvb2t1cFtrZXlQYXRoQWxpYXNdIHx8IFtdKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5TGVuZ3RoID0ga2V5UGF0aCA9PSBudWxsID8gMCA6IHR5cGVvZiBrZXlQYXRoID09PSAnc3RyaW5nJyA/IDEgOiBrZXlQYXRoLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgaXNWaXJ0dWFsID0ga2V5VGFpbCA+IDA7XG4gICAgICAgICAgICAgICAgdmFyIHZpcnR1YWxJbmRleCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBsb3dMZXZlbEluZGV4KSwgeyBpc1ZpcnR1YWw6IGlzVmlydHVhbCwgaXNQcmltYXJ5S2V5OiAhaXNWaXJ0dWFsICYmIGxvd0xldmVsSW5kZXguaXNQcmltYXJ5S2V5LCBrZXlUYWlsOiBrZXlUYWlsLFxuICAgICAgICAgICAgICAgICAgICBrZXlMZW5ndGg6IGtleUxlbmd0aCwgZXh0cmFjdEtleTogZ2V0S2V5RXh0cmFjdG9yKGtleVBhdGgpLCB1bmlxdWU6ICFpc1ZpcnR1YWwgJiYgbG93TGV2ZWxJbmRleC51bmlxdWUgfSk7XG4gICAgICAgICAgICAgICAgaW5kZXhMaXN0LnB1c2godmlydHVhbEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoIXZpcnR1YWxJbmRleC5pc1ByaW1hcnlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVmlydHVhbEluZGV4ZXMucHVzaCh2aXJ0dWFsSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoa2V5TGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmlydHVhbEtleVBhdGggPSBrZXlMZW5ndGggPT09IDIgP1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5UGF0aFswXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlQYXRoLnNsaWNlKDAsIGtleUxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBhZGRWaXJ0dWFsSW5kZXhlcyh2aXJ0dWFsS2V5UGF0aCwga2V5VGFpbCArIDEsIGxvd0xldmVsSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleExpc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5rZXlUYWlsIC0gYi5rZXlUYWlsOyB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlydHVhbEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByaW1hcnlLZXkgPSBhZGRWaXJ0dWFsSW5kZXhlcyhzY2hlbWEucHJpbWFyeUtleS5rZXlQYXRoLCAwLCBzY2hlbWEucHJpbWFyeUtleSk7XG4gICAgICAgICAgICBpbmRleExvb2t1cFtcIjppZFwiXSA9IFtwcmltYXJ5S2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBzY2hlbWEuaW5kZXhlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgYWRkVmlydHVhbEluZGV4ZXMoaW5kZXgua2V5UGF0aCwgMCwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZmluZEJlc3RJbmRleChrZXlQYXRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGluZGV4TG9va3VwW2dldEtleVBhdGhBbGlhcyhrZXlQYXRoKV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB0cmFuc2xhdGVSYW5nZShyYW5nZSwga2V5VGFpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJhbmdlLnR5cGUgPT09IDEgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMiAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICBsb3dlcjogcGFkKHJhbmdlLmxvd2VyLCByYW5nZS5sb3dlck9wZW4gPyBkb3duLk1BWF9LRVkgOiBkb3duLk1JTl9LRVksIGtleVRhaWwpLFxuICAgICAgICAgICAgICAgICAgICBsb3dlck9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyOiBwYWQocmFuZ2UudXBwZXIsIHJhbmdlLnVwcGVyT3BlbiA/IGRvd24uTUlOX0tFWSA6IGRvd24uTUFYX0tFWSwga2V5VGFpbCksXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyT3BlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB0cmFuc2xhdGVSZXF1ZXN0KHJlcSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHJlcS5xdWVyeS5pbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXguaXNWaXJ0dWFsID8gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlcSksIHsgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cmFuc2xhdGVSYW5nZShyZXEucXVlcnkucmFuZ2UsIGluZGV4LmtleVRhaWwpXG4gICAgICAgICAgICAgICAgICAgIH0gfSkgOiByZXE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhYmxlKSwgeyBzY2hlbWE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzY2hlbWEpLCB7IHByaW1hcnlLZXk6IHByaW1hcnlLZXksIGluZGV4ZXM6IGFsbFZpcnR1YWxJbmRleGVzLCBnZXRJbmRleEJ5S2V5UGF0aDogZmluZEJlc3RJbmRleCB9KSwgY291bnQ6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlLmNvdW50KHRyYW5zbGF0ZVJlcXVlc3QocmVxKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeTogZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUucXVlcnkodHJhbnNsYXRlUmVxdWVzdChyZXEpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wZW5DdXJzb3I6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gcmVxLnF1ZXJ5LmluZGV4LCBrZXlUYWlsID0gX2Eua2V5VGFpbCwgaXNWaXJ0dWFsID0gX2EuaXNWaXJ0dWFsLCBrZXlMZW5ndGggPSBfYS5rZXlMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWaXJ0dWFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlLm9wZW5DdXJzb3IocmVxKTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVmlydHVhbEN1cnNvcihjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jb250aW51ZShrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgIT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZShwYWQoa2V5LCByZXEucmV2ZXJzZSA/IGRvd24uTUFYX0tFWSA6IGRvd24uTUlOX0tFWSwga2V5VGFpbCkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLnVuaXF1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUocGFkKGN1cnNvci5rZXksIHJlcS5yZXZlcnNlID8gZG93bi5NSU5fS0VZIDogZG93bi5NQVhfS0VZLCBrZXlUYWlsKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlydHVhbEN1cnNvciA9IE9iamVjdC5jcmVhdGUoY3Vyc29yLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU6IHsgdmFsdWU6IF9jb250aW51ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlUHJpbWFyeUtleToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKGtleSwgcHJpbWFyeUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlUHJpbWFyeUtleShwYWQoa2V5LCBkb3duLk1BWF9LRVksIGtleVRhaWwpLCBwcmltYXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGN1cnNvci5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5TGVuZ3RoID09PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlbMF0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5zbGljZSgwLCBrZXlMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXJ0dWFsQ3Vyc29yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZS5vcGVuQ3Vyc29yKHRyYW5zbGF0ZVJlcXVlc3QocmVxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjdXJzb3IpIHsgcmV0dXJuIGN1cnNvciAmJiBjcmVhdGVWaXJ0dWFsQ3Vyc29yKGN1cnNvcik7IH0pO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9IH0pO1xufVxudmFyIHZpcnR1YWxJbmRleE1pZGRsZXdhcmUgPSB7XG4gICAgc3RhY2s6IFwiZGJjb3JlXCIsXG4gICAgbmFtZTogXCJWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlXCIsXG4gICAgbGV2ZWw6IDEsXG4gICAgY3JlYXRlOiBjcmVhdGVWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlXG59O1xuXG52YXIgaG9va3NNaWRkbGV3YXJlID0ge1xuICAgIHN0YWNrOiBcImRiY29yZVwiLFxuICAgIG5hbWU6IFwiSG9va3NNaWRkbGV3YXJlXCIsXG4gICAgbGV2ZWw6IDIsXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoZG93bkNvcmUpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZG93bkNvcmUpLCB7IHRhYmxlOiBmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgICAgICB2YXIgZG93blRhYmxlID0gZG93bkNvcmUudGFibGUodGFibGVOYW1lKTtcbiAgICAgICAgICAgIHZhciBwcmltYXJ5S2V5ID0gZG93blRhYmxlLnNjaGVtYS5wcmltYXJ5S2V5O1xuICAgICAgICAgICAgdmFyIHRhYmxlTWlkZGxld2FyZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkb3duVGFibGUpLCB7IG11dGF0ZTogZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHhUcmFucyA9IFBTRC50cmFucztcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gZHhUcmFucy50YWJsZSh0YWJsZU5hbWUpLmhvb2ssIGRlbGV0aW5nID0gX2EuZGVsZXRpbmcsIGNyZWF0aW5nID0gX2EuY3JlYXRpbmcsIHVwZGF0aW5nID0gX2EudXBkYXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVxLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0aW5nLmZpcmUgPT09IG5vcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR4VHJhbnMuX3Byb21pc2UoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkZFB1dE9yRGVsZXRlKHJlcSk7IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHV0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRpbmcuZmlyZSA9PT0gbm9wICYmIHVwZGF0aW5nLmZpcmUgPT09IG5vcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR4VHJhbnMuX3Byb21pc2UoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkZFB1dE9yRGVsZXRlKHJlcSk7IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRpbmcuZmlyZSA9PT0gbm9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHhUcmFucy5fcHJvbWlzZSgncmVhZHdyaXRlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRkUHV0T3JEZWxldGUocmVxKTsgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWxldGVSYW5nZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0aW5nLmZpcmUgPT09IG5vcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGR4VHJhbnMuX3Byb21pc2UoJ3JlYWR3cml0ZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlbGV0ZVJhbmdlKHJlcSk7IH0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb3duVGFibGUubXV0YXRlKHJlcSk7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZFB1dE9yRGVsZXRlKHJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR4VHJhbnMgPSBQU0QudHJhbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyQkMSA9IHJlcS5rZXlzIHx8IGdldEVmZmVjdGl2ZUtleXMocHJpbWFyeUtleSwgcmVxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5cyQkMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJLZXlzIG1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXEgPSByZXEudHlwZSA9PT0gJ2FkZCcgfHwgcmVxLnR5cGUgPT09ICdwdXQnID8gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlcSksIHsga2V5czoga2V5cyQkMSwgd2FudFJlc3VsdHM6IHRydWUgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKHt9LCByZXEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS50eXBlICE9PSAnZGVsZXRlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEudmFsdWVzID0gX19zcHJlYWRBcnJheXMocmVxLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLmtleXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLmtleXMgPSBfX3NwcmVhZEFycmF5cyhyZXEua2V5cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RXhpc3RpbmdWYWx1ZXMoZG93blRhYmxlLCByZXEsIGtleXMkJDEpLnRoZW4oZnVuY3Rpb24gKGV4aXN0aW5nVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRleHRzID0ga2V5cyQkMS5tYXAoZnVuY3Rpb24gKGtleSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGV4aXN0aW5nVmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0geyBvbmVycm9yOiBudWxsLCBvbnN1Y2Nlc3M6IG51bGwgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS50eXBlID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcuZmlyZS5jYWxsKGN0eCwga2V5LCBleGlzdGluZ1ZhbHVlLCBkeFRyYW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXEudHlwZSA9PT0gJ2FkZCcgfHwgZXhpc3RpbmdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2VuZXJhdGVkUHJpbWFyeUtleSA9IGNyZWF0aW5nLmZpcmUuY2FsbChjdHgsIGtleSwgcmVxLnZhbHVlc1tpXSwgZHhUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IG51bGwgJiYgZ2VuZXJhdGVkUHJpbWFyeUtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gZ2VuZXJhdGVkUHJpbWFyeUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEua2V5c1tpXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByaW1hcnlLZXkub3V0Ym91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKHJlcS52YWx1ZXNbaV0sIHByaW1hcnlLZXkua2V5UGF0aCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0RGlmZiA9IGdldE9iamVjdERpZmYoZXhpc3RpbmdWYWx1ZSwgcmVxLnZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkaXRpb25hbENoYW5nZXNfMSA9IHVwZGF0aW5nLmZpcmUuY2FsbChjdHgsIG9iamVjdERpZmYsIGtleSwgZXhpc3RpbmdWYWx1ZSwgZHhUcmFucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkaXRpb25hbENoYW5nZXNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ZWRWYWx1ZV8xID0gcmVxLnZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbmFsQ2hhbmdlc18xKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd24ocmVxdWVzdGVkVmFsdWVfMSwga2V5UGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RlZFZhbHVlXzFba2V5UGF0aF0gPSBhZGRpdGlvbmFsQ2hhbmdlc18xW2tleVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnlLZXlQYXRoKHJlcXVlc3RlZFZhbHVlXzEsIGtleVBhdGgsIGFkZGl0aW9uYWxDaGFuZ2VzXzFba2V5UGF0aF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG93blRhYmxlLm11dGF0ZShyZXEpLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmYWlsdXJlcyA9IF9hLmZhaWx1cmVzLCByZXN1bHRzID0gX2EucmVzdWx0cywgbnVtRmFpbHVyZXMgPSBfYS5udW1GYWlsdXJlcywgbGFzdFJlc3VsdCA9IF9hLmxhc3RSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cyQkMS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaW1LZXkgPSByZXN1bHRzID8gcmVzdWx0c1tpXSA6IGtleXMkJDFbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3R4ID0gY29udGV4dHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpbUtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm9uZXJyb3IgJiYgY3R4Lm9uZXJyb3IoZmFpbHVyZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm9uc3VjY2VzcyAmJiBjdHgub25zdWNjZXNzKHJlcS50eXBlID09PSAncHV0JyAmJiBleGlzdGluZ1ZhbHVlc1tpXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcS52YWx1ZXNbaV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBmYWlsdXJlczogZmFpbHVyZXMsIHJlc3VsdHM6IHJlc3VsdHMsIG51bUZhaWx1cmVzOiBudW1GYWlsdXJlcywgbGFzdFJlc3VsdDogbGFzdFJlc3VsdCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0cy5mb3JFYWNoKGZ1bmN0aW9uIChjdHgpIHsgcmV0dXJuIGN0eC5vbmVycm9yICYmIGN0eC5vbmVycm9yKGVycm9yKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVSYW5nZShyZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVOZXh0Q2h1bmsocmVxLnRyYW5zLCByZXEucmFuZ2UsIDEwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVOZXh0Q2h1bmsodHJhbnMsIHJhbmdlLCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvd25UYWJsZS5xdWVyeSh7IHRyYW5zOiB0cmFucywgdmFsdWVzOiBmYWxzZSwgcXVlcnk6IHsgaW5kZXg6IHByaW1hcnlLZXksIHJhbmdlOiByYW5nZSB9LCBsaW1pdDogbGltaXQgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRQdXRPckRlbGV0ZSh7IHR5cGU6ICdkZWxldGUnLCBrZXlzOiByZXN1bHQsIHRyYW5zOiB0cmFucyB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5udW1GYWlsdXJlcyA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzLmZhaWx1cmVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZmFpbHVyZXM6IFtdLCBudW1GYWlsdXJlczogMCwgbGFzdFJlc3VsdDogdW5kZWZpbmVkIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlTmV4dENodW5rKHRyYW5zLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmFuZ2UpLCB7IGxvd2VyOiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLCBsb3dlck9wZW46IHRydWUgfSksIGxpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhYmxlTWlkZGxld2FyZTtcbiAgICAgICAgfSB9KSk7IH1cbn07XG5cbnZhciBEZXhpZSA9ICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZXhpZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX21pZGRsZXdhcmVzID0ge307XG4gICAgICAgIHRoaXMudmVybm8gPSAwO1xuICAgICAgICB2YXIgZGVwcyA9IERleGllLmRlcGVuZGVuY2llcztcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgPSBfX2Fzc2lnbih7XG4gICAgICAgICAgICBhZGRvbnM6IERleGllLmFkZG9ucywgYXV0b09wZW46IHRydWUsXG4gICAgICAgICAgICBpbmRleGVkREI6IGRlcHMuaW5kZXhlZERCLCBJREJLZXlSYW5nZTogZGVwcy5JREJLZXlSYW5nZSB9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fZGVwcyA9IHtcbiAgICAgICAgICAgIGluZGV4ZWREQjogb3B0aW9ucy5pbmRleGVkREIsXG4gICAgICAgICAgICBJREJLZXlSYW5nZTogb3B0aW9ucy5JREJLZXlSYW5nZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWRkb25zID0gb3B0aW9ucy5hZGRvbnM7XG4gICAgICAgIHRoaXMuX2RiU2NoZW1hID0ge307XG4gICAgICAgIHRoaXMuX3ZlcnNpb25zID0gW107XG4gICAgICAgIHRoaXMuX3N0b3JlTmFtZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWxsVGFibGVzID0ge307XG4gICAgICAgIHRoaXMuaWRiZGIgPSBudWxsO1xuICAgICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgICAgICBkYk9wZW5FcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzQmVpbmdPcGVuZWQ6IGZhbHNlLFxuICAgICAgICAgICAgb25SZWFkeUJlaW5nRmlyZWQ6IG51bGwsXG4gICAgICAgICAgICBvcGVuQ29tcGxldGU6IGZhbHNlLFxuICAgICAgICAgICAgZGJSZWFkeVJlc29sdmU6IG5vcCxcbiAgICAgICAgICAgIGRiUmVhZHlQcm9taXNlOiBudWxsLFxuICAgICAgICAgICAgY2FuY2VsT3Blbjogbm9wLFxuICAgICAgICAgICAgb3BlbkNhbmNlbGxlcjogbnVsbCxcbiAgICAgICAgICAgIGF1dG9TY2hlbWE6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUuZGJSZWFkeVByb21pc2UgPSBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBzdGF0ZS5kYlJlYWR5UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZS5vcGVuQ2FuY2VsbGVyID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICAgICAgICBzdGF0ZS5jYW5jZWxPcGVuID0gcmVqZWN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vbiA9IEV2ZW50cyh0aGlzLCBcInBvcHVsYXRlXCIsIFwiYmxvY2tlZFwiLCBcInZlcnNpb25jaGFuZ2VcIiwgeyByZWFkeTogW3Byb21pc2FibGVDaGFpbiwgbm9wXSB9KTtcbiAgICAgICAgdGhpcy5vbi5yZWFkeS5zdWJzY3JpYmUgPSBvdmVycmlkZSh0aGlzLm9uLnJlYWR5LnN1YnNjcmliZSwgZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBiU3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgRGV4aWUudmlwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuX3N0YXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUub3BlbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmRiT3BlbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERleGllUHJvbWlzZS5yZXNvbHZlKCkudGhlbihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiU3RpY2t5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZS5vblJlYWR5QmVpbmdGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub25SZWFkeUJlaW5nRmlyZWQucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiU3RpY2t5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYl8xID0gX3RoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJTdGlja3kpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlKGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYl8xLm9uLnJlYWR5LnVuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYl8xLm9uLnJlYWR5LnVuc3Vic2NyaWJlKHVuc3Vic2NyaWJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuQ29sbGVjdGlvbiA9IGNyZWF0ZUNvbGxlY3Rpb25Db25zdHJ1Y3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5UYWJsZSA9IGNyZWF0ZVRhYmxlQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuVHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbkNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLlZlcnNpb24gPSBjcmVhdGVWZXJzaW9uQ29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuV2hlcmVDbGF1c2UgPSBjcmVhdGVXaGVyZUNsYXVzZUNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLm9uKFwidmVyc2lvbmNoYW5nZVwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIGlmIChldi5uZXdWZXJzaW9uID4gMClcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBbm90aGVyIGNvbm5lY3Rpb24gd2FudHMgdG8gdXBncmFkZSBkYXRhYmFzZSAnXCIgKyBfdGhpcy5uYW1lICsgXCInLiBDbG9zaW5nIGRiIG5vdyB0byByZXN1bWUgdGhlIHVwZ3JhZGUuXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkFub3RoZXIgY29ubmVjdGlvbiB3YW50cyB0byBkZWxldGUgZGF0YWJhc2UgJ1wiICsgX3RoaXMubmFtZSArIFwiJy4gQ2xvc2luZyBkYiBub3cgdG8gcmVzdW1lIHRoZSBkZWxldGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcImJsb2NrZWRcIiwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoIWV2Lm5ld1ZlcnNpb24gfHwgZXYubmV3VmVyc2lvbiA8IGV2Lm9sZFZlcnNpb24pXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRGV4aWUuZGVsZXRlKCdcIiArIF90aGlzLm5hbWUgKyBcIicpIHdhcyBibG9ja2VkXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlVwZ3JhZGUgJ1wiICsgX3RoaXMubmFtZSArIFwiJyBibG9ja2VkIGJ5IG90aGVyIGNvbm5lY3Rpb24gaG9sZGluZyB2ZXJzaW9uIFwiICsgZXYub2xkVmVyc2lvbiAvIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21heEtleSA9IGdldE1heEtleShvcHRpb25zLklEQktleVJhbmdlKTtcbiAgICAgICAgdGhpcy5fY3JlYXRlVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAobW9kZSwgc3RvcmVOYW1lcywgZGJzY2hlbWEsIHBhcmVudFRyYW5zYWN0aW9uKSB7IHJldHVybiBuZXcgX3RoaXMuVHJhbnNhY3Rpb24obW9kZSwgc3RvcmVOYW1lcywgZGJzY2hlbWEsIHBhcmVudFRyYW5zYWN0aW9uKTsgfTtcbiAgICAgICAgdGhpcy5fZmlyZU9uQmxvY2tlZCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgX3RoaXMub24oXCJibG9ja2VkXCIpLmZpcmUoZXYpO1xuICAgICAgICAgICAgY29ubmVjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLm5hbWUgPT09IF90aGlzLm5hbWUgJiYgYyAhPT0gX3RoaXMgJiYgIWMuX3N0YXRlLnZjRmlyZWQ7IH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5vbihcInZlcnNpb25jaGFuZ2VcIikuZmlyZShldik7IH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVzZSh2aXJ0dWFsSW5kZXhNaWRkbGV3YXJlKTtcbiAgICAgICAgdGhpcy51c2UoaG9va3NNaWRkbGV3YXJlKTtcbiAgICAgICAgYWRkb25zLmZvckVhY2goZnVuY3Rpb24gKGFkZG9uKSB7IHJldHVybiBhZGRvbihfdGhpcyk7IH0pO1xuICAgIH1cbiAgICBEZXhpZS5wcm90b3R5cGUudmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uTnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTih2ZXJzaW9uTnVtYmVyKSB8fCB2ZXJzaW9uTnVtYmVyIDwgMC4xKVxuICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuVHlwZShcIkdpdmVuIHZlcnNpb24gaXMgbm90IGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICB2ZXJzaW9uTnVtYmVyID0gTWF0aC5yb3VuZCh2ZXJzaW9uTnVtYmVyICogMTApIC8gMTA7XG4gICAgICAgIGlmICh0aGlzLmlkYmRiIHx8IHRoaXMuX3N0YXRlLmlzQmVpbmdPcGVuZWQpXG4gICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5TY2hlbWEoXCJDYW5ub3QgYWRkIHZlcnNpb24gd2hlbiBkYXRhYmFzZSBpcyBvcGVuXCIpO1xuICAgICAgICB0aGlzLnZlcm5vID0gTWF0aC5tYXgodGhpcy52ZXJubywgdmVyc2lvbk51bWJlcik7XG4gICAgICAgIHZhciB2ZXJzaW9ucyA9IHRoaXMuX3ZlcnNpb25zO1xuICAgICAgICB2YXIgdmVyc2lvbkluc3RhbmNlID0gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2Ll9jZmcudmVyc2lvbiA9PT0gdmVyc2lvbk51bWJlcjsgfSlbMF07XG4gICAgICAgIGlmICh2ZXJzaW9uSW5zdGFuY2UpXG4gICAgICAgICAgICByZXR1cm4gdmVyc2lvbkluc3RhbmNlO1xuICAgICAgICB2ZXJzaW9uSW5zdGFuY2UgPSBuZXcgdGhpcy5WZXJzaW9uKHZlcnNpb25OdW1iZXIpO1xuICAgICAgICB2ZXJzaW9ucy5wdXNoKHZlcnNpb25JbnN0YW5jZSk7XG4gICAgICAgIHZlcnNpb25zLnNvcnQobG93ZXJWZXJzaW9uRmlyc3QpO1xuICAgICAgICB2ZXJzaW9uSW5zdGFuY2Uuc3RvcmVzKHt9KTtcbiAgICAgICAgdGhpcy5fc3RhdGUuYXV0b1NjaGVtYSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdmVyc2lvbkluc3RhbmNlO1xuICAgIH07XG4gICAgRGV4aWUucHJvdG90eXBlLl93aGVuUmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLm9wZW5Db21wbGV0ZSB8fCBQU0QubGV0VGhyb3VnaCA/IGZuKCkgOiBuZXcgRGV4aWVQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuX3N0YXRlLmlzQmVpbmdPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgZXhjZXB0aW9ucy5EYXRhYmFzZUNsb3NlZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuKCkuY2F0Y2gobm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLl9zdGF0ZS5kYlJlYWR5UHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pLnRoZW4oZm4pO1xuICAgIH07XG4gICAgRGV4aWUucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3RhY2sgPSBfYS5zdGFjaywgY3JlYXRlID0gX2EuY3JlYXRlLCBsZXZlbCA9IF9hLmxldmVsLCBuYW1lID0gX2EubmFtZTtcbiAgICAgICAgaWYgKG5hbWUpXG4gICAgICAgICAgICB0aGlzLnVudXNlKHsgc3RhY2s6IHN0YWNrLCBuYW1lOiBuYW1lIH0pO1xuICAgICAgICB2YXIgbWlkZGxld2FyZXMgPSB0aGlzLl9taWRkbGV3YXJlc1tzdGFja10gfHwgKHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXSA9IFtdKTtcbiAgICAgICAgbWlkZGxld2FyZXMucHVzaCh7IHN0YWNrOiBzdGFjaywgY3JlYXRlOiBjcmVhdGUsIGxldmVsOiBsZXZlbCA9PSBudWxsID8gMTAgOiBsZXZlbCwgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgbWlkZGxld2FyZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5sZXZlbCAtIGIubGV2ZWw7IH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERleGllLnByb3RvdHlwZS51bnVzZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc3RhY2sgPSBfYS5zdGFjaywgbmFtZSA9IF9hLm5hbWUsIGNyZWF0ZSA9IF9hLmNyZWF0ZTtcbiAgICAgICAgaWYgKHN0YWNrICYmIHRoaXMuX21pZGRsZXdhcmVzW3N0YWNrXSkge1xuICAgICAgICAgICAgdGhpcy5fbWlkZGxld2FyZXNbc3RhY2tdID0gdGhpcy5fbWlkZGxld2FyZXNbc3RhY2tdLmZpbHRlcihmdW5jdGlvbiAobXcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlID8gbXcuY3JlYXRlICE9PSBjcmVhdGUgOlxuICAgICAgICAgICAgICAgICAgICBuYW1lID8gbXcubmFtZSAhPT0gbmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGV4aWUucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkZXhpZU9wZW4odGhpcyk7XG4gICAgfTtcbiAgICBEZXhpZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBjb25uZWN0aW9ucy5pbmRleE9mKHRoaXMpLCBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgICBjb25uZWN0aW9ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgaWYgKHRoaXMuaWRiZGIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGJkYi5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgdGhpcy5pZGJkYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb3B0aW9ucy5hdXRvT3BlbiA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5kYk9wZW5FcnJvciA9IG5ldyBleGNlcHRpb25zLkRhdGFiYXNlQ2xvc2VkKCk7XG4gICAgICAgIGlmIChzdGF0ZS5pc0JlaW5nT3BlbmVkKVxuICAgICAgICAgICAgc3RhdGUuY2FuY2VsT3BlbihzdGF0ZS5kYk9wZW5FcnJvcik7XG4gICAgICAgIHN0YXRlLmRiUmVhZHlQcm9taXNlID0gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgc3RhdGUuZGJSZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGUub3BlbkNhbmNlbGxlciA9IG5ldyBEZXhpZVByb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgICAgICAgc3RhdGUuY2FuY2VsT3BlbiA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEZXhpZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaGFzQXJndW1lbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICByZXR1cm4gbmV3IERleGllUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZG9EZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gX3RoaXMuX2RlcHMuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKF90aGlzLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSB3cmFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2VFbnVtZXJhdG9yLnJlbW92ZShfdGhpcy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZXZlbnRSZWplY3RIYW5kbGVyKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgcmVxLm9uYmxvY2tlZCA9IF90aGlzLl9maXJlT25CbG9ja2VkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChoYXNBcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG5vdCBhbGxvd2VkIGluIGRiLmRlbGV0ZSgpXCIpO1xuICAgICAgICAgICAgaWYgKHN0YXRlLmlzQmVpbmdPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5kYlJlYWR5UHJvbWlzZS50aGVuKGRvRGVsZXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvRGVsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGV4aWUucHJvdG90eXBlLmJhY2tlbmREQiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRiZGI7XG4gICAgfTtcbiAgICBEZXhpZS5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZGJkYiAhPT0gbnVsbDtcbiAgICB9O1xuICAgIERleGllLnByb3RvdHlwZS5oYXNCZWVuQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGJPcGVuRXJyb3IgPSB0aGlzLl9zdGF0ZS5kYk9wZW5FcnJvcjtcbiAgICAgICAgcmV0dXJuIGRiT3BlbkVycm9yICYmIChkYk9wZW5FcnJvci5uYW1lID09PSAnRGF0YWJhc2VDbG9zZWQnKTtcbiAgICB9O1xuICAgIERleGllLnByb3RvdHlwZS5oYXNGYWlsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kYk9wZW5FcnJvciAhPT0gbnVsbDtcbiAgICB9O1xuICAgIERleGllLnByb3RvdHlwZS5keW5hbWljYWxseU9wZW5lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9TY2hlbWE7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRGV4aWUucHJvdG90eXBlLCBcInRhYmxlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBrZXlzKHRoaXMuX2FsbFRhYmxlcykubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBfdGhpcy5fYWxsVGFibGVzW25hbWVdOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRGV4aWUucHJvdG90eXBlLnRyYW5zYWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IGV4dHJhY3RUcmFuc2FjdGlvbkFyZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgRGV4aWUucHJvdG90eXBlLl90cmFuc2FjdGlvbiA9IGZ1bmN0aW9uIChtb2RlLCB0YWJsZXMsIHNjb3BlRnVuYykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcGFyZW50VHJhbnNhY3Rpb24gPSBQU0QudHJhbnM7XG4gICAgICAgIGlmICghcGFyZW50VHJhbnNhY3Rpb24gfHwgcGFyZW50VHJhbnNhY3Rpb24uZGIgIT09IHRoaXMgfHwgbW9kZS5pbmRleE9mKCchJykgIT09IC0xKVxuICAgICAgICAgICAgcGFyZW50VHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICB2YXIgb25seUlmQ29tcGF0aWJsZSA9IG1vZGUuaW5kZXhPZignPycpICE9PSAtMTtcbiAgICAgICAgbW9kZSA9IG1vZGUucmVwbGFjZSgnIScsICcnKS5yZXBsYWNlKCc/JywgJycpO1xuICAgICAgICB2YXIgaWRiTW9kZSwgc3RvcmVOYW1lcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JlTmFtZXMgPSB0YWJsZXMubWFwKGZ1bmN0aW9uICh0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZU5hbWUgPSB0YWJsZSBpbnN0YW5jZW9mIF90aGlzLlRhYmxlID8gdGFibGUubmFtZSA6IHRhYmxlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RvcmVOYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdGFibGUgYXJndW1lbnQgdG8gRGV4aWUudHJhbnNhY3Rpb24oKS4gT25seSBUYWJsZSBvciBTdHJpbmcgYXJlIGFsbG93ZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG1vZGUgPT0gXCJyXCIgfHwgbW9kZSA9PT0gUkVBRE9OTFkpXG4gICAgICAgICAgICAgICAgaWRiTW9kZSA9IFJFQURPTkxZO1xuICAgICAgICAgICAgZWxzZSBpZiAobW9kZSA9PSBcInJ3XCIgfHwgbW9kZSA9PSBSRUFEV1JJVEUpXG4gICAgICAgICAgICAgICAgaWRiTW9kZSA9IFJFQURXUklURTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXhjZXB0aW9ucy5JbnZhbGlkQXJndW1lbnQoXCJJbnZhbGlkIHRyYW5zYWN0aW9uIG1vZGU6IFwiICsgbW9kZSk7XG4gICAgICAgICAgICBpZiAocGFyZW50VHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VHJhbnNhY3Rpb24ubW9kZSA9PT0gUkVBRE9OTFkgJiYgaWRiTW9kZSA9PT0gUkVBRFdSSVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmx5SWZDb21wYXRpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuU3ViVHJhbnNhY3Rpb24oXCJDYW5ub3QgZW50ZXIgYSBzdWItdHJhbnNhY3Rpb24gd2l0aCBSRUFEV1JJVEUgbW9kZSB3aGVuIHBhcmVudCB0cmFuc2FjdGlvbiBpcyBSRUFET05MWVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50VHJhbnNhY3Rpb24gJiYgcGFyZW50VHJhbnNhY3Rpb24uc3RvcmVOYW1lcy5pbmRleE9mKHN0b3JlTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ubHlJZkNvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50VHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBleGNlcHRpb25zLlN1YlRyYW5zYWN0aW9uKFwiVGFibGUgXCIgKyBzdG9yZU5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbm90IGluY2x1ZGVkIGluIHBhcmVudCB0cmFuc2FjdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob25seUlmQ29tcGF0aWJsZSAmJiBwYXJlbnRUcmFuc2FjdGlvbiAmJiAhcGFyZW50VHJhbnNhY3Rpb24uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRUcmFuc2FjdGlvbiA/XG4gICAgICAgICAgICAgICAgcGFyZW50VHJhbnNhY3Rpb24uX3Byb21pc2UobnVsbCwgZnVuY3Rpb24gKF8sIHJlamVjdCkgeyByZWplY3QoZSk7IH0pIDpcbiAgICAgICAgICAgICAgICByZWplY3Rpb24oZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudGVyVHJhbnNhY3Rpb24gPSBlbnRlclRyYW5zYWN0aW9uU2NvcGUuYmluZChudWxsLCB0aGlzLCBpZGJNb2RlLCBzdG9yZU5hbWVzLCBwYXJlbnRUcmFuc2FjdGlvbiwgc2NvcGVGdW5jKTtcbiAgICAgICAgcmV0dXJuIChwYXJlbnRUcmFuc2FjdGlvbiA/XG4gICAgICAgICAgICBwYXJlbnRUcmFuc2FjdGlvbi5fcHJvbWlzZShpZGJNb2RlLCBlbnRlclRyYW5zYWN0aW9uLCBcImxvY2tcIikgOlxuICAgICAgICAgICAgUFNELnRyYW5zID9cbiAgICAgICAgICAgICAgICB1c2VQU0QoUFNELnRyYW5zbGVzcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3doZW5SZWFkeShlbnRlclRyYW5zYWN0aW9uKTsgfSkgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3doZW5SZWFkeShlbnRlclRyYW5zYWN0aW9uKSk7XG4gICAgfTtcbiAgICBEZXhpZS5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbiAodGFibGVOYW1lKSB7XG4gICAgICAgIGlmICghaGFzT3duKHRoaXMuX2FsbFRhYmxlcywgdGFibGVOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbnMuSW52YWxpZFRhYmxlKFwiVGFibGUgXCIgKyB0YWJsZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fYWxsVGFibGVzW3RhYmxlTmFtZV07XG4gICAgfTtcbiAgICByZXR1cm4gRGV4aWU7XG59KCkpO1xuXG52YXIgRGV4aWUkMSA9IERleGllO1xucHJvcHMoRGV4aWUkMSwgX19hc3NpZ24oX19hc3NpZ24oe30sIGZ1bGxOYW1lRXhjZXB0aW9ucyksIHtcbiAgICBkZWxldGU6IGZ1bmN0aW9uIChkYXRhYmFzZU5hbWUpIHtcbiAgICAgICAgdmFyIGRiID0gbmV3IERleGllJDEoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgcmV0dXJuIGRiLmRlbGV0ZSgpO1xuICAgIH0sXG4gICAgZXhpc3RzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IERleGllJDEobmFtZSwgeyBhZGRvbnM6IFtdIH0pLm9wZW4oKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KS5jYXRjaCgnTm9TdWNoRGF0YWJhc2VFcnJvcicsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9KTtcbiAgICB9LFxuICAgIGdldERhdGFiYXNlTmFtZXM6IGZ1bmN0aW9uIChjYikge1xuICAgICAgICByZXR1cm4gZGF0YWJhc2VFbnVtZXJhdG9yID9cbiAgICAgICAgICAgIGRhdGFiYXNlRW51bWVyYXRvci5nZXREYXRhYmFzZU5hbWVzKCkudGhlbihjYikgOlxuICAgICAgICAgICAgRGV4aWVQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH0sXG4gICAgZGVmaW5lQ2xhc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gQ2xhc3MoY29udGVudCkge1xuICAgICAgICAgICAgZXh0ZW5kKHRoaXMsIGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDbGFzcztcbiAgICB9LFxuICAgIGlnbm9yZVRyYW5zYWN0aW9uOiBmdW5jdGlvbiAoc2NvcGVGdW5jKSB7XG4gICAgICAgIHJldHVybiBQU0QudHJhbnMgP1xuICAgICAgICAgICAgdXNlUFNEKFBTRC50cmFuc2xlc3MsIHNjb3BlRnVuYykgOlxuICAgICAgICAgICAgc2NvcGVGdW5jKCk7XG4gICAgfSxcbiAgICB2aXA6IHZpcCwgYXN5bmM6IGZ1bmN0aW9uIChnZW5lcmF0b3JGbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgcnYgPSBhd2FpdEl0ZXJhdG9yKGdlbmVyYXRvckZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgICAgIGlmICghcnYgfHwgdHlwZW9mIHJ2LnRoZW4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEZXhpZVByb21pc2UucmVzb2x2ZShydik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sIHNwYXduOiBmdW5jdGlvbiAoZ2VuZXJhdG9yRm4sIGFyZ3MsIHRoaXopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBydiA9IGF3YWl0SXRlcmF0b3IoZ2VuZXJhdG9yRm4uYXBwbHkodGhpeiwgYXJncyB8fCBbXSkpO1xuICAgICAgICAgICAgaWYgKCFydiB8fCB0eXBlb2YgcnYudGhlbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gRGV4aWVQcm9taXNlLnJlc29sdmUocnYpO1xuICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0aW9uKGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjdXJyZW50VHJhbnNhY3Rpb246IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBQU0QudHJhbnMgfHwgbnVsbDsgfVxuICAgIH0sIHdhaXRGb3I6IGZ1bmN0aW9uIChwcm9taXNlT3JGdW5jdGlvbiwgb3B0aW9uYWxUaW1lb3V0KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gRGV4aWVQcm9taXNlLnJlc29sdmUodHlwZW9mIHByb21pc2VPckZ1bmN0aW9uID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgIERleGllJDEuaWdub3JlVHJhbnNhY3Rpb24ocHJvbWlzZU9yRnVuY3Rpb24pIDpcbiAgICAgICAgICAgIHByb21pc2VPckZ1bmN0aW9uKVxuICAgICAgICAgICAgLnRpbWVvdXQob3B0aW9uYWxUaW1lb3V0IHx8IDYwMDAwKTtcbiAgICAgICAgcmV0dXJuIFBTRC50cmFucyA/XG4gICAgICAgICAgICBQU0QudHJhbnMud2FpdEZvcihwcm9taXNlKSA6XG4gICAgICAgICAgICBwcm9taXNlO1xuICAgIH0sXG4gICAgUHJvbWlzZTogRGV4aWVQcm9taXNlLFxuICAgIGRlYnVnOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVidWc7IH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXREZWJ1Zyh2YWx1ZSwgdmFsdWUgPT09ICdkZXhpZScgPyBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9IDogZGV4aWVTdGFja0ZyYW1lRmlsdGVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVyaXZlOiBkZXJpdmUsIGV4dGVuZDogZXh0ZW5kLCBwcm9wczogcHJvcHMsIG92ZXJyaWRlOiBvdmVycmlkZSxcbiAgICBFdmVudHM6IEV2ZW50cyxcbiAgICBnZXRCeUtleVBhdGg6IGdldEJ5S2V5UGF0aCwgc2V0QnlLZXlQYXRoOiBzZXRCeUtleVBhdGgsIGRlbEJ5S2V5UGF0aDogZGVsQnlLZXlQYXRoLCBzaGFsbG93Q2xvbmU6IHNoYWxsb3dDbG9uZSwgZGVlcENsb25lOiBkZWVwQ2xvbmUsIGdldE9iamVjdERpZmY6IGdldE9iamVjdERpZmYsIGFzYXA6IGFzYXAsXG4gICAgbWluS2V5OiBtaW5LZXksXG4gICAgYWRkb25zOiBbXSxcbiAgICBjb25uZWN0aW9uczogY29ubmVjdGlvbnMsXG4gICAgZXJybmFtZXM6IGVycm5hbWVzLFxuICAgIGRlcGVuZGVuY2llczogKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5kZXhlZERCOiBfZ2xvYmFsLmluZGV4ZWREQiB8fCBfZ2xvYmFsLm1vekluZGV4ZWREQiB8fCBfZ2xvYmFsLndlYmtpdEluZGV4ZWREQiB8fCBfZ2xvYmFsLm1zSW5kZXhlZERCLFxuICAgICAgICAgICAgICAgIElEQktleVJhbmdlOiBfZ2xvYmFsLklEQktleVJhbmdlIHx8IF9nbG9iYWwud2Via2l0SURCS2V5UmFuZ2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGluZGV4ZWREQjogbnVsbCwgSURCS2V5UmFuZ2U6IG51bGwgfTtcbiAgICAgICAgfVxuICAgIH0pKCksXG4gICAgc2VtVmVyOiBERVhJRV9WRVJTSU9OLCB2ZXJzaW9uOiBERVhJRV9WRVJTSU9OLnNwbGl0KCcuJylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gcGFyc2VJbnQobik7IH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMsIGkpIHsgcmV0dXJuIHAgKyAoYyAvIE1hdGgucG93KDEwLCBpICogMikpOyB9KSxcbiAgICBkZWZhdWx0OiBEZXhpZSQxLFxuICAgIERleGllOiBEZXhpZSQxIH0pKTtcbkRleGllJDEubWF4S2V5ID0gZ2V0TWF4S2V5KERleGllJDEuZGVwZW5kZW5jaWVzLklEQktleVJhbmdlKTtcblxuaW5pdERhdGFiYXNlRW51bWVyYXRvcihEZXhpZS5kZXBlbmRlbmNpZXMuaW5kZXhlZERCKTtcbkRleGllUHJvbWlzZS5yZWplY3Rpb25NYXBwZXIgPSBtYXBFcnJvcjtcbnNldERlYnVnKGRlYnVnLCBkZXhpZVN0YWNrRnJhbWVGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBEZXhpZTtcbmV4cG9ydCB7IERleGllIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXhpZS5tanMubWFwXG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9