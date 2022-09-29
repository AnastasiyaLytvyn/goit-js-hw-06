const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = ingredients.map(elem => {
  const liRef = document.createElement("li");
  liRef.textContent = elem;
  liRef.classList.add("item");
  return liRef;
});


const listRef = document.querySelector("#ingredients");
listRef.append(...ingredientsRef);
console.log(listRef);
