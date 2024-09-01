const fs = require('fs');
const path = require('path');

function getVersion() {
    const packageJsonPath = path.join(__dirname, '..', '../package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    return packageJson.version;
}
module.exports = getVersion;