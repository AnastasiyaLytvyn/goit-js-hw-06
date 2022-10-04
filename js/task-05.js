const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange() {
  if (inputRef.value) {
    outputRef.textContent = inputRef.value;
  } else {
    outputRef.textContent = "Anonymous";
  }
}
