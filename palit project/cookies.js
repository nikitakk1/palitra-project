const cookieBox = document.querySelector(".cookies"),
buttons = document.querySelectorAll(".button");

const coookiecreate = () => {
  if (document.cookie.split('; ').some(item => item.startsWith('palitracookies='))) return;// დაადგენს თუ ქუქი უკვე დარეგისტრირდა

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
  button.addEventListener("click", () => {
  cookieBox.classList.remove("show");

  if (button.id === "acceptBtn") {
  document.cookie = "palitracookies=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/;";
  }
  });
 });
};

// როდესაც გვერდი სრულად დაიტვირთება, და შემდეგ გამოიძახებს coookiecreate ფუნქციას.
window.addEventListener("DOMContentLoaded", coookiecreate);
