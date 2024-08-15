const lsName = "name-product";
const lsText = "text-feedback";
const lsFeedbacks = "feedbacks";
const feedback = [];

function setFeedback(name, text) {
  const nameValue = name.value;
  const textValue = text.value;

  if (nameValue === "" || textValue === "") {
    throw new Error("Заполните все поля");
  }
  feedback.push({
    [lsName]: nameValue,
    [lsText]: textValue,
  });
  localStorage.setItem(lsFeedbacks, JSON.stringify(feedback));
}

export { setFeedback };
