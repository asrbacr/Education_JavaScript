import { getUsers, registerUser } from "./storage.js";

const loginEl = document.querySelector(".login");
const passwordEl = document.querySelector(".password");
const registrationEl = document.querySelector(".registration");

registrationEl.addEventListener("click", (e) => {
  const login = loginEl.value;
  const password = passwordEl.value;
  const users = getUsers();

  if (users.some((user) => user.login === login)) {
    alert("Такой пользователь уже существует");
    return;
  } else {
    users.push({ login, password });
    localStorage.setItem(lsUsersKey, JSON.stringify(users));
  }

  location.href = "login.html";
});
