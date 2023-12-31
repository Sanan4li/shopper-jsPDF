# Shopper jsPDF

Shopper means 'wrapper' in urdu and this library is a wrapper around jsPDF library. It provides a simple interface to create pdf documents.

### Motivation

Working with jsPDF is a bit difficult and it takes a lot of time to create a simple pdf document. This library provides a simple interface to create pdf documents. The major issue of **[jsPDF](https://www.npmjs.com/package/jspdf)** is that it's documentation is not good and it is very difficult to understand how to use it. By using this library you can create pdf documents with given components in a few lines of code.

## Getting started

### Installation

#### Before installing you have already installed **[jsPDF](https://www.npmjs.com/package/jspdf)** as it is a dependency of this package.

```bash
 npm install shopper-jspdf
```

## Usage

### Add Page Numbers to PDF Documents

#### Add page numbers to pdf documents with a single line of code.

**_addPageNumbers(doc, options)_**

This method adds page numbers to each page. For example if you have 5 pages in your pdf document then it will add page numbers from 1 to 5 to each page. It takes two parameters. First parameter is the document object and second parameter is an object containing options. The options object is optional. If you don't pass any options then it will use default options.

### Example

```js
import { addPageNumbers } from "shopper-jspdf";

const doc = new jsPDF();
doc.text("Hello World", 10, 10);

// call this function before saving the file
// second parameter is optional and it takes an object containing options
addPageNumbers(doc, { position: "top", align: "center" });

doc.save("a4.pdf");
```

### Options

Options object takes following properties.

| Option   | Type   | Value                | Required | Default |
| -------- | ------ | -------------------- | -------- | ------- |
| position | String | top, bottom          | false    | bottom  |
| align    | String | left, right, center  | false    | right   |
| xOffset  | Number | 20,40, or any number | false    | 20      |
| yOffset  | Number | 20,40, or any number | false    | 10      |

## Want to contribute?

I would love to merge all pull requests if someone wants to contribute to this package. Please make sure you are building something useful which is not already available in this package.

## License

**MIT &copy;**

## Thanks!

Thank you for being here! Let's connect on [twitter](https://twitter.com/Sanan4li).
