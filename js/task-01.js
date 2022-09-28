const total = document.querySelectorAll(".item");
console.log(`Number of categories: ${total.length}`);

const title = total.forEach((elem) => {
    const titleEl = elem.querySelector("h2");
    const sumEl = elem.querySelectorAll("li");
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${sumEl.length}`);
});
