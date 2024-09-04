"use strict";

var fs = require('fs');
var path = require('path');
function getVersion() {
  var packageJsonPath = path.join(__dirname, '..', '..', '../package.json');
  var packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  return packageJson.version;
}
module.exports = getVersion;