import { getAuthedLogin, logOutUser } from "./storage";
const helloEl = document.querySelector(".hello-massage");
const logOutEl = document.querySelector(".exit"); 

const authedUser = getAuthedLogin();
if (!authedUser) {
  alert("Вам нет доступа на эту страницу");
  location.href = "login.html";
}

helloEl.textContent = `Привет, ${authedUser}`;

logOutEl.addEventListener('click', () => {
    logOutEl()
    location.href = "login.html";
})