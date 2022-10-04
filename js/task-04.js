let counterValue = 0;

const decRef = document.querySelector('[data-action="decrement"]');
const incRef = document.querySelector('[data-action="increment"]');
const valRef =document.querySelector("#value")


decRef.addEventListener('click', (event) => {
    counterValue -= 1;
    valRef.textContent = counterValue;

});

incRef.addEventListener('click', (event) => {
    counterValue += 1;
    valRef.textContent = counterValue;
});