const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;
    if (email.value == "" || password.value == "") {
        alert("Всі поля повинні бути заповнені");
    } else {
            console.log({"email": email.value, "password": password.value});
            formRef.reset();
        
    }
};





// const form = document.querySelector(".login-form");
// form.addEventListener("submit", (event) => { // обов'язково передаєм event параметром
//     event.preventDefault(); //недаємо перезавантажити сторінку
//     const {elements: { email, password }} = event.currentTarget; //отримуємо значення полів форми
//     if (email.value === "" || password.value === "") { //перевіряємо чи є пусті поля
//       alert("Всі поля повинні бути заповнені!");
//     } else {
//     console.log({ "email": email.value, "password": password.value });//виводимо об'єкт в консоль
//       form.reset();//скидаємо форму
//     }
//   });