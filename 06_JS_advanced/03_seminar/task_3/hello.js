import { getAuthedLogin, logOutUser } from "./storage.js";
const helloEl = document.querySelector(".hello-massage");
const logOutEl = document.querySelector(".exit");

const authedUser = getAuthedLogin();
if (!authedUser) {
  alert("Вам нет доступа на эту страницу");
  location.href = "login.html";
}

helloEl.textContent = `Привет, ${authedUser}`;

logOutEl.addEventListener("click", () => {
  logOutUser();
  location.href = "login.html";
});
