// function customParser(resourceType) {
//   // if (filePath.endsWith(".html")) {

//   //   return "html";
//   // }
//   // if (filePath.endsWith(".css")) {

//   //   return "css";
//   // }
//   // if (filePath.endsWith(".js")) {

//   //   return "babel"; // 'babel' parser is used for JavaScript
//   // }
//   // if (filePath.endsWith(".ts")) {

//   //   return "babel-ts"; // 'babel' parser is used for JavaScript
//   // }
//   // return null; // if file is unrecognized
//   if (['document'].includes(resourceType)) {
//     return 'html';

//   } else if (['script'].includes(resourceType)) {
//     return 'babel'

//   } else if (['typescript'].includes(resourceType)) {
//     return 'babel-ts'

//   } else {
//     return null
//   }
// }
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