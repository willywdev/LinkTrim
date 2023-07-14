/* Code from API Documentation */
var myHeaders = new Headers();
myHeaders.append("apikey", config.MY_KEY);
let urlResult = undefined;
/* * Getting DOM Elements */
const inputField = document.querySelector("[data-js='inputField']");
const outputField = document.querySelector("[data-js='outputField']");
const formElement = document.querySelector("[data-js='formElement']");
const loadingIcon = document.querySelector("[data-js='loadingIcon']");

window.addEventListener("load", () => formElement.reset());
/* Starting DOM Manipulation */
formElement.addEventListener("submit", () => {
  loadingIconInsert();
  requestOptions.body = inputField.value;
  getShortURL();
});

function loadingIconInsert() {
  let img = document.createElement("img");
  loadingIcon.appendChild(img);
  img.src = "assets/Eclipse-1s-64px.svg";
  img.classList.add("loading-icon");
}

function deletingIcon() {
  let img = document.querySelector(".loading-icon");
  img.remove();
}
/* Code from API Documentation */

var requestOptions = {
  method: "POST",
  redirect: "follow",
  headers: myHeaders,
  body: "",
};
const getShortURL = () => {
  fetch("https://api.apilayer.com/short_url/hash", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const jsonResult = JSON.parse(result);
      outputField.value = jsonResult.short_url;
    })
    .then(deletingIcon())
    .catch((error) => console.log("error", error));
};
