# savesrc

**savesrc** is a command-line tool that dynamically fetches and saves various resources (like HTML documents, JavaScript files, CSS stylesheets, and images) from a specified webpage.

## Features

-   **Process HTML Documents**: Fetch and save HTML documents.
-   **Process JavaScript Files**: Fetch and save JavaScript files.
-   **Process CSS Stylesheets**: Fetch and save CSS stylesheets.
-   **Process Images**: Fetch and save images from the webpage.
-   **Process All Resources**: Fetch and save all supported resource types.

## Installation


    ```bash
    npm install savesrc
    ```

## Usage

### Basic Commands

-   **Process HTML Documents**:

    ```bash
    savesrc -d
    ```

-   **Process JavaScript Files**:

    ```bash
    savesrc -s
    ```

-   **Process CSS Stylesheets**:

    ```bash
    savesrc -st
    ```

-   **Process Images**:

    ```bash
    savesrc -im
    ```

-   **Process All Supported Resources (Default)**:
    ```bash
    savesrc -a
    ```

### Options

| Option           | Description                                    |
| ---------------- | ---------------------------------------------- |
| `-d, --document` | Process HTML documents                         |
| `-s, --script`   | Process JavaScript files                       |
| `-st, --style`   | Process CSS stylesheets                        |
| `-im, --image`   | Process images                                 |
| `-a, --all`      | Process all supported resource types (default) |
| `-v, --version`  | Show version information                       |
| `-h, --help`     | Display help message                           |

### Examples

-   **Process only HTML documents**:

    ```bash
    savesrc -d <"URL">
    ```

-   **Process JavaScript and CSS files**:

    ```bash
    savesrc -s -st <"URL">
    ```

-   **Process all resource types (default)**:
    ```bash
    savesrc -a <"URL">
    ```
    _or_
    ```bash
    savesrc <"URL">
    ```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a Pull Request. See the [CONTRIBUTING](CONTRIBUTING.md) section for more details.

## Contact

For any inquiries or issues, please reach out to [debanshupanigrahi53605@gmail.com](mailto:debanshupanigrahi53605@gmail.com).
