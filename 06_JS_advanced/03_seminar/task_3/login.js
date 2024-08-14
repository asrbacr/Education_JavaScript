import { loginUser } from "./storage.js";

const loginEl = document.querySelector(".login");
const passwordEl = document.querySelector(".password");
const loginBtnEl = document.querySelector(".login-btn");

loginBtnEl.addEventListener("click", (e) => {
  const login = loginEl.value;
  const password = passwordEl.value;

  try {
    loginUser(login, password);
    location.href = "hello.html";
  } catch (error) {
    // по хорошему обработать эту ошибку выводом текста, например рядом с кнопкой (в div)
    alert(error.massage);
  }
});
