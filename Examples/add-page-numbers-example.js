import { jsPDF } from "jspdf";
import { addPageNumbers } from "../index.js";
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.addPage();
doc.text("Hello world again!", 10, 10);
doc.setFontSize(10);

// set the font size, color, and font family before calling this function
// call this function before saving the file
addPageNumbers(doc, {
  align: "center",
});

doc.save("a4.pdf");
