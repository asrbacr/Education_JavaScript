import { setFeedback } from "./storage.js";

const nameProductEl = document.querySelector(".name-product");
const textFeedbackEl = document.querySelector(".text-feedback");
const sendFeedbackEl = document.querySelector(".send-feedback");
const errorEl = document.querySelector(".error");

sendFeedbackEl.addEventListener("click", () => {
  try {
    setFeedback(nameProductEl, textFeedbackEl);
  } catch (error) {
    errorEl.innerHTML = error.message;
  }
});

const delError = (elem) => {
  elem.addEventListener("click", () => {
    errorEl.innerHTML = "";
  });
};

delError(nameProductEl);
delError(textFeedbackEl);
