"use strict";

var getVersion = require('../main/utils/version');
describe('getVersion', function () {
  test('should return the correct version', function () {
    var version = getVersion();
    expect(version).toBe('1.0.0'); // Replace with your actual version
  });
});