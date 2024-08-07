const requestURL = "https://jsonplaceholder.typicode.com/users";
const body = {
  name: "Vasiliy",
  age: 30,
};

function sendRequest(method, url, body = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Что-то пошло не так");
      e.data = error;
      throw e;
    });
  });
}

/* sendRequest("GET", requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */
// sendRequest("POST", requestURL, body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const elEl = document.querySelector("form.form");
elEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  console.log(e.target);
});
