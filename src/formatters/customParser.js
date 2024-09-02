function customParser(resourceType) {
  switch (resourceType) {
    case 'document':
      return 'html';
    case 'script':
      return 'babel';
    case 'typescript':
      return 'babel-ts';
    case 'stylesheet':
      return 'css';
    case 'json':
      return 'json';
    case 'javascript':
      return 'babel';
    case 'jsx':
      return 'babel';
    case 'typescript-jsx':
      return 'babel-ts';
    case 'markdown':
      return 'markdown';
    case 'yaml':
      return 'yaml';
    default:
      return null; // If the resource type is not recognized
  }
}


module.exports = customParser 