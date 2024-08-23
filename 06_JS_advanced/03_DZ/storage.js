const lsName = "name-product";
const lsText = "text-feedback";
const lsFeedbacks = "feedbacks";
const removeFeedbackClass = "feedback__remove";
const classFeedbackList = "border__cart";

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
    dataHTML += "</div>";
  });

  container.innerHTML = dataHTML;
  removeFeedback();
}

function removeFeedback() {
  const feedbackList = getFeedback();
  const removeFeedbackELs = document.querySelectorAll(
    `.${removeFeedbackClass}`
  );
  removeFeedbackELs.forEach((elem, i) => {
    const elemParent = elem.parentElement;
    const lsKey = feedbackList[i][lsName]; // это ключ из localStorage
    const lsContent = feedbackList[i][lsText]; // это текст из localStorage
    const idKey = elemParent.parentElement.querySelector('h3').innerHTML; // это ключ из HTML
    const idValue = elemParent.children[0].innerHTML // это тест из HTML
  
    elem.addEventListener("click", () => {
      console.log(lsKey);
      console.log(lsContent);
      console.log(idKey);
      console.log(idValue);
      console.log('___________');

      feedbackList.forEach((element, i) => {
        console.log(element);
        console.log(i);

        // const textLs = element[lsText];
        // const nameLs = element[lsName];
        // console.log(feedbackList);
        // if (liEl === textLs) {
          // localStorage.removeItem(i);
          // console.log(feedbackList[i]);
          // elemParent.remove();
          // console.log(element[lsName]);
        // }
        // console.log(element[lsText]);
      });


/*       console.log(`Сам элемент`);
      console.log(liEl);
      console.log(`__________`);
      console.log(`Родительский от кнопки`);
      console.log(elemParent);
      console.log(`__________`);
      console.log(`Родительский от списка`);
      console.log(elemParent.parentElement);
      // console.log(lsElem);
      console.log(`__________`); */
    });
  });
}

function feedbackCartLi(el) {
  return `<div>
  <li class"li">${el}</li> ${feedbackButtonRemove()}
  </div>`;
}
function feedbackCartHeader(el) {
  return `<h3>${el}</h3>`;
}

function feedbackButtonRemove() {
  return `<button class="${removeFeedbackClass}">Удалить</button>`;
}

export { setFeedback, getFeedback, renderFeedback };
