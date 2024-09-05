const prettier = require("prettier");
const fs = require("fs");
const path = require("path");
const customParser = require('../formatters/customParser');

// Function to save the file locally and format it with Prettier
async function saveFile(url, content, resourceType, contentType) {
    const parsedUrl = new URL(url);

    // filepath defined first
    let filePath = path.join(
        parsedUrl.hostname,
        parsedUrl.pathname
            .replace(/[\/\\]/g, "_")    // handle naming conflicts
    );

    // if a file is html
    if (['document'].includes(resourceType) || ['text/html'].includes(contentType)) {
        if (!path.extname(filePath)) {
            filePath = `${filePath}.html`;
        }
    }

    const parser = customParser(resourceType);

    let formattedContent = content; // defined first (if not formatted, it  will return original)

    if (parser) {
        // Only format if a valid parser is determined
        try {
            formattedContent = await prettier.format(content, { parser });
        } catch (error) {
            // console.error(`Error formatting file ${filePath}:`, error.message);
            console.log('error formatting file. Type' + resourceType + '\nPath:' + filePath);

        }
    }


    try {
        // Create directories if they don't exist
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // Write the formatted content to a file
        fs.writeFileSync(filePath, formattedContent, "utf8");
        console.log('saving ' + path.basename(filePath));

    } catch (error) {
        console.log('error saving type: ' + resourceType + '\nPath: ' + filePath);
        // console.log(error);



        // console.log("Error saving file "+filePath+' '+ error);
    }
}

module.exports = saveFile 