const fileInput = document.querySelector("input");
downloadButton = document.querySelector("button");

downloadButton.addEventListener("click", (e) => {
  e.preventDefault();
  downloadButton.innerText = "Downloading file...";
  fetchFile(fileInput.value);
});

function fetchFile(url) {
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = "fileName";
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
      URL.revokeObjectURL(tempUrl);
      console.log(tempUrl);
      downloadButton.innerText = "Download file";
    });
}
