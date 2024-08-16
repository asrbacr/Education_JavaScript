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
  const dataHTML = "";
  const feedbackList = getFeedback();
  console.log(feedbackList);
  feedbackList.forEach(elemList => {
    console.log(feedbackCart(elemList));
    // dataHTML += feedbackCart(elemList);
  });

  console.log(dataHTML);
  // container.innerHTML = feedbackCart(dataHTML);
  console.log(container);
}

function feedbackList(el) {
  let cartListHTML = ``;
  el.forEach((elLi) => {
    cartListHTML += `<li class="feedback__li">${elLi.text}</li>`;
  });
  return cartListHTML;
}

function feedbackCart(el) {
  return `
  ${el[lsName]} ${el[lsText]}
  `
  // return `<div class="feedback">
  //     <h3 class="product">${[lsName].el}</h3>
  //     <ul class="feedback__list">
  //       ${feedbackList(el)}
  //     </ul>

  //     <form action="#">
  //       <input class="feedback__input" type="text" name="add_feedback" required />
  //       <input class="feedback__button" type="button" value="Добавить отзыв" />
  //     </form>
  //   </div>`;
}
export { setFeedback, getFeedback, renderFeedback };
