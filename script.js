function openPDF() {
  var select = document.getElementById("pdfSelect");
  var pdf = select.value;
  if (pdf) {
      window.open(pdf, '_blank');
  } else {
      alert("Please select a PDF file.");
  }
}
