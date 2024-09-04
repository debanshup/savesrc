const saveFile = require("../main/utils/saveFile"); 
const fs = require("fs"); 
const path = require("path"); 
const prettier = require("prettier"); 
const customParser = require("../main/formatters/customParser"); 

// Mock the fs, prettier, and customParser modules to control their behavior in tests
jest.mock("fs");
jest.mock("prettier");
jest.mock("../main/formatters/customParser");

describe("saveFile", () => {
    // Clear all mocks before each test to ensure no state is carried over between tests
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test case: Saving a formatted HTML file
    test("should save a formatted HTML file", async () => {
        const url = "https://example.com/index"; // The URL of the resource
        const content = "<html></html>"; // The raw HTML content
        const resourceType = "document"; // The type of resource (used for determining the parser)
        const contentType = "text/html"; // The MIME type of the content

        // Mock the custom parser to return "html" indicating the content is HTML
        customParser.mockReturnValue("html");
        // Mock Prettier to return a formatted version of the HTML
        prettier.format.mockResolvedValue("<html>\n</html>");

        // Call the saveFile function with the above parameters
        await saveFile(url, content, resourceType, contentType);

        // Expected file path where the content should be saved
        const filePath = path.join(
            "src",
            "example.com",
            "_index.html"
        )

        // Verify that the custom parser was called with the correct resource type
        expect(customParser).toHaveBeenCalledWith(resourceType);
        // Verify that Prettier was called to format the content using the HTML parser
        expect(prettier.format).toHaveBeenCalledWith(content, { parser: "html" });
        // Verify that the necessary directories were created recursively
        expect(fs.mkdirSync).toHaveBeenCalledWith(path.dirname(filePath), { recursive: true });
        // Verify that the formatted content was written to the correct file path
        expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, "<html>\n</html>", "utf8");
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // Ensure the file write operation occurred exactly once
    });

    // Test case: Saving a file without formatting if no parser is found
    test("should save a file without formatting if no parser is found", async () => {
        // Set up inputs
        const url = "https://example.com/script.js"; // URL of the JavaScript file
        const content = "console.log('Hello, world!');"; // Raw JavaScript content
        const resourceType = "script"; // Resource type is script
        const contentType = "application/javascript"; // MIME type is JavaScript

        // Mock the custom parser to return null, meaning no formatting should be applied
        customParser.mockReturnValue(null);

        // Call the saveFile function with the above parameters
        await saveFile(url, content, resourceType, contentType);

        // Expected file path where the content should be saved
        const filePath = path.join(
            "src",
            "example.com",
            "_script.js"
        );

        // Verify that the custom parser was called with the correct resource type
        expect(customParser).toHaveBeenCalledWith(resourceType);
        // Verify that Prettier was not called since no parser was found
        expect(prettier.format).not.toHaveBeenCalled();
        // Verify that the necessary directories were created recursively
        expect(fs.mkdirSync).toHaveBeenCalledWith(path.dirname(filePath), { recursive: true });
        // Verify that the raw content was written to the correct file path
        expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, content, "utf8");
    });

    // Test case: Handling formatting errors gracefully
    test("should handle formatting errors gracefully", async () => {
        // Set up inputs
        const url = "https://example.com/index"; // URL of the resource
        const content = "<html></html>"; // Raw HTML content
        const resourceType = "document"; // Resource type is document (HTML)
        const contentType = "text/html"; // MIME type is HTML

        // Mock the custom parser to return "html"
        customParser.mockReturnValue("html");
        // Mock Prettier to throw an error when attempting to format the content
        prettier.format.mockRejectedValue(new Error("Formatting error"));

        // Call the saveFile function with the above parameters
        await saveFile(url, content, resourceType, contentType);

        // Expected file path where the content should be saved
        const filePath = path.join(
            "src",
            "example.com",
            "_index.html"
        );

        // Verify that Prettier was called to format the content using the HTML parser
        expect(prettier.format).toHaveBeenCalledWith(content, { parser: "html" });
        // Verify that the raw content was written to the correct file path despite the formatting error
        expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, content, "utf8");
    });

    // Test case: Handling file saving errors gracefully
    it("should handle file saving errors gracefully", async () => {
        // Set up inputs
        const url = "https://example.com/index"; // URL of the resource
        const content = "<html></html>"; // Raw HTML content
        const resourceType = "document"; // Resource type is document (HTML)
        const contentType = "text/html"; // MIME type is HTML

        // Mock the custom parser to return "html"
        customParser.mockReturnValue("html");
        // Mock Prettier to return a formatted version of the HTML
        prettier.format.mockResolvedValue("<html>\n</html>");
        // Mock fs.writeFileSync to throw an error when attempting to save the file
        fs.writeFileSync.mockImplementation(() => {
            throw new Error("File saving error");
        });

        // Call the saveFile function with the above parameters
        await saveFile(url, content, resourceType, contentType);

        // Expected file path where the content should be saved
        const filePath = path.join(
            "src",
            "example.com",
            "_index.html"
        );

        // Verify that the formatted content was attempted to be written to the correct file path
        expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, "<html>\n</html>", "utf8");
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // Ensure the file write operation was attempted exactly once
    });
});
