const totalRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalRef.length}`);

const titleRef = totalRef.forEach((elem) => {
    const titleRef = elem.querySelector("h2");
    const sumRef = elem.querySelectorAll("li");
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${sumRef.length}`);
});
