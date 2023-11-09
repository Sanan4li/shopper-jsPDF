const addPageNumbers = (doc, options) => {
  const pageHeight = doc.internal.pageSize.height;
  let xOffset = options?.xOffset || 20;
  let yOffset = options?.yOffset || 10;
  let xPosition = doc.internal.pageSize.width - xOffset;
  let yPosition = pageHeight - 8;

  // setting the alignment of the page numbers along x axis
  if (options?.align == "center") {
    xPosition = doc.internal.pageSize.width / 2 + yOffset;
  } else if (options?.align == "left") {
    xPosition = xOffset;
  }

  // setting the position of the page numbers along y axis
  if (options?.position == "top") {
    yPosition = yOffset;
  } else {
    yPosition = pageHeight - yOffset;
  }

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(
      "Page " + String(i) + " of " + String(pageCount),
      xPosition,
      yPosition,
      {
        align: "center",
      }
    );
  }
};

export default addPageNumbers;
