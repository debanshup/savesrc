const getVersion = require('../main/utils/version');

describe('getVersion', () => {
  test('should return the correct version', () => {
    const version = getVersion();
    expect(version).toBe('1.0.0'); // Replace with your actual version
  });
});
