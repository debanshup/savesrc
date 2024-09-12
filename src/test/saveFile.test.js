const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { URL } = require('url');
const customParser = require('../main/formatters/customParser');
const saveFile = require('../main/utils/saveFile');

jest.mock('fs');
jest.mock('prettier');
jest.mock('../main/formatters/customParser');

describe('saveFile', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('test_save_html_file', async () => {
        const url = 'http://example.com/test';
        const content = '<html></html>';
        const resourceType = 'document';
        const contentType = 'text/html';
        const formattedContent = '<html>\n</html>';

        prettier.format.mockResolvedValue(formattedContent);
        customParser.mockReturnValue('html');

        await saveFile(url, content, resourceType, contentType);

        expect(prettier.format).toHaveBeenCalledWith(content, { parser: 'html' });
        expect(fs.mkdirSync).toHaveBeenCalledWith(expect.any(String), { recursive: true });
        expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), formattedContent, 'utf8');
    });

    test('test_formatting_error_handling', async () => {
        const url = 'http://example.com/test';
        const content = '<html></html>';
        const resourceType = 'document';
        const contentType = 'text/html';

        prettier.format.mockRejectedValue(new Error('Formatting error'));
        customParser.mockReturnValue('html');

        await saveFile(url, content, resourceType, contentType);

        expect(prettier.format).toHaveBeenCalledWith(content, { parser: 'html' });
        expect(fs.mkdirSync).toHaveBeenCalledWith(expect.any(String), { recursive: true });
        expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), content, 'utf8');
    });

    test('test_directory_creation_and_file_saving', async () => {
        const url = 'http://example.com/test';
        const content = 'console.log("test");';
        const resourceType = 'script';
        const contentType = 'application/javascript';
        const formattedContent = 'console.log("test");\n';

        prettier.format.mockResolvedValue(formattedContent);
        customParser.mockReturnValue('babel');

        await saveFile(url, content, resourceType, contentType);

        expect(prettier.format).toHaveBeenCalledWith(content, { parser: 'babel' });
        expect(fs.mkdirSync).toHaveBeenCalledWith(expect.any(String), { recursive: true });
        expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), formattedContent, 'utf8');
    });
});
