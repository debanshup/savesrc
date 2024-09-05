## Contributing to savesrc

First off, thank you for considering contributing to **savesrc**! Your help is highly appreciated. Below you'll find a guide to get started with contributing.

### How to Contribute

1. **Fork the repository** and create your branch from `main`.
2. **Clone** your fork to your local machine and navigate to the project directory:
    ```bash
    git clone https://github.com/debanshup/savesrc.git
    cd savesrc
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Make your changes** and **add tests** if necessary.
5. **Commit your changes**:
    ```bash
    git commit -m "Your descriptive commit message"
    ```
6. **Push your branch** to GitHub:
    ```bash
    git push origin your-branch-name
    ```
7. **Create a Pull Request** on GitHub.

### File Tree and Purpose

Here’s an overview of the project structure:

```bash
src/
├── main/
│   ├── formatters/
│   │   └── customParser.js
│   ├── utils/
│   │   ├── saveFile.js
│   │   ├── version.js
│   │   ├── decodeBase64Image.js
│   │   └── isBase64Image.js
│   └── main.js
├── test/
│   ├── saveFile.test.js
│   ├── customParser.test.js
│   └── version.test.js
package.json
```

### Files and Their Purpose

### `src/`

This is the main source directory for your application, containing all the code required to run your CLI tool.

#### `src/main/formatters/`

This directory contains modules responsible for parsing and formatting the data retrieved by the application.

-   **`customParser.js`**:
    It is likely used to format or transform the data before it is saved.

#### `src/main/utils/`

This directory contains utility functions that are used across the application for various helper tasks.

-   **`saveFile.js`**:
    This module provides a function to save the fetched and processed data to a file.

-   **`version.js`**:
    It is used to handle the `-v, --version` command, which displays the version information to the user.

-   **`decodeBase64Image.js`**:
    Function is not properly implemented
    
-   **`isBase64Image.js `**:
    Function is not properly implemented

### `src/main/main.js`

This is the main entry point.

### Testing

Before submitting a pull request, ensure that all tests pass by running:

```bash
npm test
```

### Code Style

Please adhere to the existing coding style and conventions. If the project uses a linter, make sure to run it before committing:

```bash
npm run lint
```

### Reporting Issues

If you find a bug or have a feature request, please [open an issue](https://github.com/debanshup/savesrc/issues) on GitHub.
