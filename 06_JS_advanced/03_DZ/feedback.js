const nameProductEl = document.querySelector(".name-product");
const textFeedbackEl = document.querySelector(".text-feedback");
const sendFeedbackEl = document.querySelector(".send-feedback");
const lsName = "name-product";
const lsText = "text-feedback";
const lsFeedbacks = "feedbacks";
const feedback = [];
const errorEl = '<div>Заполните все поля</div>'


sendFeedbackEl.addEventListener("click", () => {
    const nameProduct = nameProductEl.value;
  const textFeedback = textFeedbackEl.value;
  if (nameProduct !== "" && textFeedback !== "") {
    feedback.push({
          [lsName]: nameProduct,
          [lsText]: textFeedback,
    });
    localStorage.setItem(lsFeedbacks, JSON.stringify(feedback));
  } else {
    sendFeedbackEl.append(errorEl);
}
});
