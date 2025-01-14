//emailisi shemowmeba
document.getElementById("validate-button").addEventListener("click", function () {
    const emailInput = document.getElementById("email").value;     //value  იღებს იმ ტექსტს, რაც მომხმარებელმა შეიყვანა ელფოსტის ველში.
    const errorMessage = document.getElementById("error-message");

    const emailshemow = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailshemow.test(emailInput)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }

   
});

//paroli
const input = document.querySelector("input[type='password']");
const showHide = document.querySelector(".show_hide");
const indicator = document.querySelector(".indicator");
const text = document.querySelector(".text");

//ხილვადობა და დამალვა პაროლის 
showHide.addEventListener("click", () => {
    const isPassword = input.type === "password";     //ამოწმებს, არის თუ არა პაროლის ველის ტიპი password (დაფარული).
    input.type = isPassword ? "text" : "password";   //თუ ველი არის password, ტიპი იცვლება text-ზე (პაროლი ხილული ხდება). თუ ველი არის text, იცვლება password-ზე .
    showHide.classList.toggle("fa-eye");       //ხილვადობა და დამალვა
    showHide.classList.toggle("fa-eye-slash");
});

// Password Strength Indicator
const patterns = {
    alphabet: /[a-zA-Z]/,
    numbers: /[0-9]/,
    special: /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/
};

input.addEventListener("keyup", () => {
    const val = input.value;                           //რომელიც გამოიყენება კლასების ავტომატურად დამატებასა ან მოხსნაზე ელემენტისთვის.
    indicator.classList.toggle("active", val !== ""); // toggle კლასის "active" დაემატება თუ value არის ცარიელი , 

    if (val.match(patterns.alphabet) && val.match(patterns.numbers) && val.match(patterns.special) && val.length >= 7) {
        text.textContent = "პაროლი ძლიერია";
        input.style.borderColor = "#22C32A";
    } else if (val.match(patterns.alphabet) && val.match(patterns.numbers) && val.length >= 6) {
        text.textContent = "პაროლი საშუალოა";
        input.style.borderColor = "#cc8500";
    } else if (val.match(patterns.alphabet) || val.match(patterns.numbers) || val.match(patterns.special)) {
        text.textContent = "პაროლი სუსტია";
        input.style.borderColor = "#FF6333";
    } else {
        input.style.borderColor = "#A6A6A6";
    }
});
//paroli

