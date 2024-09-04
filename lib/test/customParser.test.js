"use strict";

var customParser = require('../main/formatters/customParser');
describe('customParser', function () {
  test('should return "html" for document', function () {
    expect(customParser('document')).toBe('html');
  });
  test('should return "babel" for script', function () {
    expect(customParser('script')).toBe('babel');
  });
  test('should return "babel-ts" for typescript', function () {
    expect(customParser('typescript')).toBe('babel-ts');
  });
  test('should return css for stylesheet', function () {
    expect(customParser('stylesheet')).toBe('css');
  });
  test('should return json for json', function () {
    expect(customParser('json')).toBe('json');
  });
  test('should return babel for jsx', function () {
    expect(customParser('jsx')).toBe('babel');
  });
});
test('should return babel-ts for typescript-jsx', function () {
  expect(customParser('typescript-jsx')).toBe('babel-ts');
});
test('should return babel for jsx', function () {
  expect(customParser('markdown')).toBe('markdown');
});
test('should return yaml for yaml', function () {
  expect(customParser('yaml')).toBe('yaml');
});
test('should return null for unsupported resource types', function () {
  expect(customParser('image')).toBe(null);
  expect(customParser('media')).toBe(null);
  expect(customParser('font')).toBe(null);
  expect(customParser('other')).toBe(null);
});