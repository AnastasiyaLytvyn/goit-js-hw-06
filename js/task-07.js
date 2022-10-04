const inputRef = document.querySelector("#font-size-control");
const textSpanRef = document.querySelector("#text");

inputRef.addEventListener('input', () => {
    textSpanRef.style.fontSize = inputRef.value + 'px';
});