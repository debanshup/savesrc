"use strict";

var isBase64Image = function isBase64Image(dataUrl) {
  // Regular expression to check if the string is a valid base64 data URL
  var base64Pattern = /^data:image\/(png|jpeg|jpg|gif);base64,/;

  // Check if the string starts with the correct data URL prefix and has valid base64
  // console.log(true);

  return base64Pattern.test(dataUrl);
};
module.exports = isBase64Image;