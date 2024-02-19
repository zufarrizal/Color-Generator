document.addEventListener("DOMContentLoaded", function () {
  const colorPicker = document.getElementById("colorPicker");
  const colorCode = document.getElementById("colorCode");
  const copyButton = document.getElementById("copyButton");
  const body = document.body;

  colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;
    colorCode.textContent = selectedColor;
    body.style.backgroundColor = selectedColor; // Mengatur latar belakang halaman
  });

  copyButton.addEventListener("click", function () {
    const codeToCopy = colorCode.textContent;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        alert("Color code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
