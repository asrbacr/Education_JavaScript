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

  // uniqFeedbackKey.forEach((el) => {
  //   feedbackCart(el);
  // });
  
  uniqFeedbackKey.forEach((uniqElem, i) => {
    dataHTML += `<h3>${uniqElem}</h3>`;
    feedbackList.forEach((elem, j) => {
      if (uniqElem === elem[lsName]) {
        dataHTML += `<li>${elem[lsText]}</li>`;
        // console.log(elem[lsText]);
        // feedbackList(elem);
      }
      
    });
    
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
  // let cartListHTML = ``;
  // el.forEach((elLi) => {
    // cartListHTML += `<li class="feedback__li">${el[lsText]}</li>`;
  // });
  // return cartListHTML;
  return `<li>${el[lsText]}</li>`;
}

function feedbackCart(el) {
  return `<h3>${el}</h3>`;
}
export { setFeedback, getFeedback, renderFeedback };
