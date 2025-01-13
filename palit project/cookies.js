const cookieBox = document.querySelector(".cookies"),  // Use the correct class
buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.split('; ').some(item => item.startsWith('palitracookies='))) return;// Check if the cookie is already set

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
  button.addEventListener("click", () => {
  cookieBox.classList.remove("show");

  if (button.id === "acceptBtn") {
  // Set the cookie for 1 month (max-age calculation)
  document.cookie = "palitracookies=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/;";
  }
  });
 });
};

// Call executeCodes function when the page has finished loading
window.addEventListener("DOMContentLoaded", executeCodes);
