const inputRef = document.querySelector('#validation-input');
const inputLengthRef = inputRef.getAttribute("data-length");

inputRef.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length == inputLengthRef) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    }
    else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
});
console.log(inputRef);
console.log(inputLengthRef)