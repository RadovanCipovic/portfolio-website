// document.getElementById("downloadBtn").addEventListener("click", function () {
//   const pdfUrl = "https://sapphire-arabelle-30.tiiny.site";
//   const a = document.createElement("a");
//   a.href = pdfUrl;
//   a.download = pdfUrl.split("/").pop();
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });

function pdfDownload() {
  const pdfUrl = "https://sapphire-arabelle-30.tiiny.site";
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = pdfUrl.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
