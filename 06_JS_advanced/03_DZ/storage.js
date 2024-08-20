const lsName = "name-product";
const lsText = "text-feedback";
const lsFeedbacks = "feedbacks";
const removeFeedbackClass = "feedback__remove";
const classFeedbackList = 'border__cart';

function setFeedback(name, text) {
  const feedback = getFeedback();
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

function getFeedback() {
  const data = localStorage.getItem(lsFeedbacks);
  if (!data) {
    return [];
  }
  return JSON.parse(data);
}

function renderFeedback(container) {
  let dataHTML = "";
  const feedbackList = getFeedback();
  console.log(feedbackList);

  let tempArray = [];
  for (const feedbackEl of feedbackList) {
    tempArray.push(feedbackEl[lsName]);
  }
  let uniqFeedbackKey = [...new Set(tempArray)];
  console.log(uniqFeedbackKey);

  uniqFeedbackKey.forEach((uniqElem) => {
    dataHTML += `<div class="${classFeedbackList}">`;
    dataHTML += feedbackCartHeader(uniqElem);
    feedbackList.forEach((elem) => {
      if (uniqElem === elem[lsName]) {
        dataHTML += feedbackCartLi(elem[lsText]);
      }
    });
    dataHTML += '</div>';
  });

  container.innerHTML = dataHTML;
  removeFeedback();
}

function removeFeedback() {
  const removeFeedbackELs = document.querySelectorAll(
    `.${removeFeedbackClass}`
  );
  removeFeedbackELs.forEach((elem, i) => {
    const elemParent = elem.parentElement;
    elem.addEventListener("click", () => {
      // elemParent.remove();
      console.log(`Родительский от кнопки`);
      console.log(elemParent);
      console.log(`__________`);
      console.log(`Родительский от списка`);
      console.log(elemParent.parentElement);
      console.log(`__________`);

    });
  });
}

function feedbackCartLi(el) {
  return `<div>
  <li>${el}</li> ${feedbackButtonRemove()}
  </div>`;
}
function feedbackCartHeader(el) {
  return `<h3>${el}</h3>`;
}

function feedbackButtonRemove() {
  return `<button class="${removeFeedbackClass}">Удалить</button>`;
}

export { setFeedback, getFeedback, renderFeedback };
