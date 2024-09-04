async function decodeBase64Image(dataURL) {
    const base64Data = dataURL.split(',')[1];

    // Convert base64 to binary buffer
    return Buffer.from(base64Data, 'base64');

}

module.exports = decodeBase64Image