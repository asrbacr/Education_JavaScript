const lsName = "name-product";
const lsText = "text-feedback";
const lsFeedbacks = "feedbacks";

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
  // console.log(tempArray);
  console.log(uniqFeedbackKey);

  uniqFeedbackKey.forEach((el) => {
    dataHTML += `<h3>${el}</h3>`;
    feedbackCart(el);
  });
  
  // feedbackList.forEach((elemList) => {
  //   // console.log(feedbackCart(elemList));
  //   dataHTML += feedbackCart(elemList);
  // });

  // console.log(dataHTML);
  container.innerHTML = dataHTML;
  // console.log(container);
}
  
function feedbackList(el) {
  let cartListHTML = ``;
  // el.forEach((elLi) => {
    cartListHTML += `<li class="feedback__li">${el[lsText]}</li>`;
  // });
  return cartListHTML;
}

function feedbackCart(el) {
  return `<div>
  ${el[lsName]} - ${el[lsText]}
  </div>
  `;
  // <ul class="feedback__list">
  // ${feedbackList(el)}
  // </ul>
}
export { setFeedback, getFeedback, renderFeedback };
