"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var saveFile = require("../main/utils/saveFile");
var fs = require("fs");
var path = require("path");
var prettier = require("prettier");
var customParser = require("../main/formatters/customParser");

// Mock the fs, prettier, and customParser modules to control their behavior in tests
jest.mock("fs");
jest.mock("prettier");
jest.mock("../main/formatters/customParser");
describe("saveFile", function () {
  // Clear all mocks before each test to ensure no state is carried over between tests
  beforeEach(function () {
    jest.clearAllMocks();
  });

  // Test case: Saving a formatted HTML file
  test("should save a formatted HTML file", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, content, resourceType, contentType, filePath;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://example.com/index"; // The URL of the resource
          content = "<html></html>"; // The raw HTML content
          resourceType = "document"; // The type of resource (used for determining the parser)
          contentType = "text/html"; // The MIME type of the content
          // Mock the custom parser to return "html" indicating the content is HTML
          customParser.mockReturnValue("html");
          // Mock Prettier to return a formatted version of the HTML
          prettier.format.mockResolvedValue("<html>\n</html>");

          // Call the saveFile function with the above parameters
          _context.next = 8;
          return saveFile(url, content, resourceType, contentType);
        case 8:
          // Expected file path where the content should be saved
          filePath = path.join("src", "example.com", "_index.html"); // Verify that the custom parser was called with the correct resource type
          expect(customParser).toHaveBeenCalledWith(resourceType);
          // Verify that Prettier was called to format the content using the HTML parser
          expect(prettier.format).toHaveBeenCalledWith(content, {
            parser: "html"
          });
          // Verify that the necessary directories were created recursively
          expect(fs.mkdirSync).toHaveBeenCalledWith(path.dirname(filePath), {
            recursive: true
          });
          // Verify that the formatted content was written to the correct file path
          expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, "<html>\n</html>", "utf8");
          expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // Ensure the file write operation occurred exactly once
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  // Test case: Saving a file without formatting if no parser is found
  test("should save a file without formatting if no parser is found", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var url, content, resourceType, contentType, filePath;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // Set up inputs
          url = "https://example.com/script.js"; // URL of the JavaScript file
          content = "console.log('Hello, world!');"; // Raw JavaScript content
          resourceType = "script"; // Resource type is script
          contentType = "application/javascript"; // MIME type is JavaScript
          // Mock the custom parser to return null, meaning no formatting should be applied
          customParser.mockReturnValue(null);

          // Call the saveFile function with the above parameters
          _context2.next = 7;
          return saveFile(url, content, resourceType, contentType);
        case 7:
          // Expected file path where the content should be saved
          filePath = path.join("src", "example.com", "_script.js"); // Verify that the custom parser was called with the correct resource type
          expect(customParser).toHaveBeenCalledWith(resourceType);
          // Verify that Prettier was not called since no parser was found
          expect(prettier.format).not.toHaveBeenCalled();
          // Verify that the necessary directories were created recursively
          expect(fs.mkdirSync).toHaveBeenCalledWith(path.dirname(filePath), {
            recursive: true
          });
          // Verify that the raw content was written to the correct file path
          expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, content, "utf8");
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));

  // Test case: Handling formatting errors gracefully
  test("should handle formatting errors gracefully", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var url, content, resourceType, contentType, filePath;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // Set up inputs
          url = "https://example.com/index"; // URL of the resource
          content = "<html></html>"; // Raw HTML content
          resourceType = "document"; // Resource type is document (HTML)
          contentType = "text/html"; // MIME type is HTML
          // Mock the custom parser to return "html"
          customParser.mockReturnValue("html");
          // Mock Prettier to throw an error when attempting to format the content
          prettier.format.mockRejectedValue(new Error("Formatting error"));

          // Call the saveFile function with the above parameters
          _context3.next = 8;
          return saveFile(url, content, resourceType, contentType);
        case 8:
          // Expected file path where the content should be saved
          filePath = path.join("src", "example.com", "_index.html"); // Verify that Prettier was called to format the content using the HTML parser
          expect(prettier.format).toHaveBeenCalledWith(content, {
            parser: "html"
          });
          // Verify that the raw content was written to the correct file path despite the formatting error
          expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, content, "utf8");
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));

  // Test case: Handling file saving errors gracefully
  it("should handle file saving errors gracefully", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var url, content, resourceType, contentType, filePath;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          // Set up inputs
          url = "https://example.com/index"; // URL of the resource
          content = "<html></html>"; // Raw HTML content
          resourceType = "document"; // Resource type is document (HTML)
          contentType = "text/html"; // MIME type is HTML
          // Mock the custom parser to return "html"
          customParser.mockReturnValue("html");
          // Mock Prettier to return a formatted version of the HTML
          prettier.format.mockResolvedValue("<html>\n</html>");
          // Mock fs.writeFileSync to throw an error when attempting to save the file
          fs.writeFileSync.mockImplementation(function () {
            throw new Error("File saving error");
          });

          // Call the saveFile function with the above parameters
          _context4.next = 9;
          return saveFile(url, content, resourceType, contentType);
        case 9:
          // Expected file path where the content should be saved
          filePath = path.join("src", "example.com", "_index.html"); // Verify that the formatted content was attempted to be written to the correct file path
          expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, "<html>\n</html>", "utf8");
          expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // Ensure the file write operation was attempted exactly once
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
});