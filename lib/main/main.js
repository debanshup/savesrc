#!/usr/bin/env node
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() { } function GeneratorFunction() { } function GeneratorFunctionPrototype() { } var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a; ;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var puppeteer = require("puppeteer");
var saveFile = require("../main/utils/saveFile");
var _require = require("commander"),
    Command = _require.Command;
var getVersion = require('../main/utils/version');
// const isBase64Image = require('./utils/helper')
// const decodeBase64 = require('./utils/decoder')
var program = new Command();

// handle commands
program.addHelpText('beforeAll', 'savesrc v' + getVersion());
program.name('savesrc').version(getVersion(), "-v, --version", "Display version").option("-d, --document", "Process only HTML documents").option("-s, --script", "Process only JavaScript files").option("-st, --style", "Process only CSS stylesheets").option("-im, --image", "Process only images").option("-a, --all", "Process all resources (default)").helpOption("-h, --help", "Display help");
program.addHelpText('afterAll', "\n    Examples:\n      savesrc -d <URL>          Process only HTML documents from the URL\n      savesrc -s -st <URL>      Process JavaScript and CSS files from the URL\n      savesrc -a <URL>          Process all resource types from the URL\n    ");
program.parse(process.argv);
var options = program.opts();

// Main function to launch Puppeteer and capture website content
_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var url, browser, page;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                url = program.args[0]; // URL to process
                if (!url) {
                    console.error("Please provide a URL.");
                    process.exit(1);
                }
                _context2.next = 4;
                return puppeteer.launch({
                    headless: "shell"
                });
            case 4:
                browser = _context2.sent;
                _context2.next = 7;
                return browser.newPage();
            case 7:
                page = _context2.sent;
                _context2.next = 10;
                return page.setRequestInterception(true);
            case 10:
                page.on("request", function (request) {
                    request["continue"](); // Continue with the request
                });

                // Listen for responses and save them if they are HTML, CSS, or JS files
                try {
                    page.on("response", /*#__PURE__*/function () {
                        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
                            var resourceType, content, contentType, _contentType, _contentType2, _contentType3, _contentType4;
                            return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                        resourceType = response.request().resourceType();
                                        if (!response.ok()) {
                                            _context.next = 70;
                                            break;
                                        }
                                        _context.prev = 2;
                                        if (!(options.document && resourceType === "document")) {
                                            _context.next = 12;
                                            break;
                                        }
                                        _context.next = 6;
                                        return response.text();
                                    case 6:
                                        content = _context.sent;
                                        // Handle text-based content
                                        contentType = response.headers()["content-type"];
                                        _context.next = 10;
                                        return saveFile(response.url(), content, resourceType, contentType);
                                    case 10:
                                        _context.next = 62;
                                        break;
                                    case 12:
                                        if (!(options.script && resourceType === "script")) {
                                            _context.next = 21;
                                            break;
                                        }
                                        _context.next = 15;
                                        return response.text();
                                    case 15:
                                        content = _context.sent;
                                        // Handle text-based content
                                        _contentType = response.headers()["content-type"];
                                        _context.next = 19;
                                        return saveFile(response.url(), content, resourceType, _contentType);
                                    case 19:
                                        _context.next = 62;
                                        break;
                                    case 21:
                                        if (!(options.style && resourceType === "stylesheet")) {
                                            _context.next = 30;
                                            break;
                                        }
                                        _context.next = 24;
                                        return response.text();
                                    case 24:
                                        content = _context.sent;
                                        // Handle text-based content
                                        _contentType2 = response.headers()["content-type"];
                                        _context.next = 28;
                                        return saveFile(response.url(), content, resourceType, _contentType2);
                                    case 28:
                                        _context.next = 62;
                                        break;
                                    case 30:
                                        if (!(options.image && resourceType === "image")) {
                                            _context.next = 39;
                                            break;
                                        }
                                        _context.next = 33;
                                        return response.buffer();
                                    case 33:
                                        content = _context.sent;
                                        // Handle binary content
                                        _contentType3 = response.headers()["content-type"];
                                        _context.next = 37;
                                        return saveFile(response.url(), content, resourceType, _contentType3);
                                    case 37:
                                        _context.next = 62;
                                        break;
                                    case 39:
                                        if (!(options.all || !options.document && !options.script && !options.style && !options.image && !options.all)) {
                                            _context.next = 62;
                                            break;
                                        }
                                        if (!["document", "stylesheet", "script", "xhr", "fetch"].includes(resourceType)) {
                                            _context.next = 46;
                                            break;
                                        }
                                        _context.next = 43;
                                        return response.text();
                                    case 43:
                                        content = _context.sent;
                                        _context.next = 59;
                                        break;
                                    case 46:
                                        if (!["image", "media", "font", "other"].includes(resourceType)) {
                                            _context.next = 52;
                                            break;
                                        }
                                        _context.next = 49;
                                        return response.buffer();
                                    case 49:
                                        content = _context.sent;
                                        _context.next = 59;
                                        break;
                                    case 52:
                                        if (!["prefetch", "preflight"].includes(resourceType)) {
                                            _context.next = 57;
                                            break;
                                        }
                                        console.log("Skipping ".concat(resourceType, " request: ").concat(response.url()));
                                        return _context.abrupt("return");
                                    case 57:
                                        console.log("Unhandled resource type: ".concat(resourceType, " for ").concat(response.url()));
                                        return _context.abrupt("return");
                                    case 59:
                                        _contentType4 = response.headers()["content-type"];
                                        _context.next = 62;
                                        return saveFile(response.url(), content, resourceType, _contentType4);
                                    case 62:
                                        _context.next = 68;
                                        break;
                                    case 64:
                                        _context.prev = 64;
                                        _context.t0 = _context["catch"](2);
                                        console.log("Error processing ".concat(resourceType, " resource from ").concat(response.url(), ": ").concat(_context.t0));
                                        return _context.abrupt("return");
                                    case 68:
                                        _context.next = 71;
                                        break;
                                    case 70:
                                        console.log("Skipping failed request: ".concat(response.url(), " with status ").concat(response.status()));
                                    case 71:
                                    case "end":
                                        return _context.stop();
                                }
                            }, _callee, null, [[2, 64]]);
                        }));
                        return function (_x) {
                            return _ref2.apply(this, arguments);
                        };
                    }());
                } catch (error) {
                    console.log("something went wrong! failed to process response " + error);
                }
                _context2.prev = 12;
                _context2.next = 15;
                return page["goto"](url, {
                    timeout: 0
                });
            case 15:
                _context2.next = 20;
                break;
            case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](12);
                console.error("Navigation failed " + _context2.t0);
            case 20:
                _context2.prev = 20;
                _context2.next = 23;
                return browser.close();
            case 23:
                return _context2.finish(20);
            case 24:
            case "end":
                return _context2.stop();
        }
    }, _callee2, null, [[12, 17, 20, 24]]);
}))();