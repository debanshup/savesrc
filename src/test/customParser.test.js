const customParser = require('../main/formatters/customParser');

describe('customParser', () => {
    test('should return "html" for document', () => {
        expect(customParser('document')).toBe('html');
    });

    test('should return "babel" for script', () => {
        expect(customParser('script')).toBe('babel');
    });

    test('should return "babel-ts" for typescript', () => {
        expect(customParser('typescript')).toBe('babel-ts');
    });
    test('should return css for stylesheet', () => {
        expect(customParser('stylesheet')).toBe('css');

    })
    test('should return json for json', () => {
        expect(customParser('json')).toBe('json');

    })
    test('should return babel for jsx', () => {
        expect(customParser('jsx')).toBe('babel');

    })
    })
    test('should return babel-ts for typescript-jsx', () => {
        expect(customParser('typescript-jsx')).toBe('babel-ts');

    })
    test('should return babel for jsx', () => {
        expect(customParser('markdown')).toBe('markdown');

    })
    test('should return yaml for yaml', () => {
        expect(customParser('yaml')).toBe('yaml');

    })

    test('should return null for unsupported resource types', () => {
        expect(customParser('image')).toBe(null);
        expect(customParser('media')).toBe(null);
        expect(customParser('font')).toBe(null);
        expect(customParser('other')).toBe(null);
    });
