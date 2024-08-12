import { getUsers } from "./storage.js";

const loginEl = document.querySelector(".login");
const passwordEl = document.querySelector(".password");
const loginBtnEl = document.querySelector(".login-btn");

loginBtnEl.addEventListener("click", (e) => {
  const login = loginEl.value;
  const password = passwordEl.value;
    const users = getUsers();

  if (users) {
    const parsedUsers = JSON.parse(users);
    if (users.some((user) => user.login === login)) {
      alert("Такой пользователь уже существует");
      return;
    }
    users.push({ login, password });
    localStorage.setItem(lsUsersKey, JSON.stringify(users));
  } else {
    localStorage.setItem(lsUsersKey, JSON.stringify([{ login, password }]));
  }

  location.href = "login.html";
});
