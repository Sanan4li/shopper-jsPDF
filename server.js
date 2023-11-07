import { jsPDF } from "jspdf";
// replace this with the package name in your code
import { addPageNumbers } from "./index.js";
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.addPage();
doc.text("Hello world again!", 10, 10);
doc.setFontSize(10);

// set the font size, color, and font family before calling this function
// call this function before saving the file
// second parameter is optional as default is right
addPageNumbers(doc, {
  align: "right",
});

doc.save("a4.pdf");
