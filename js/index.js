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
  requestOptions.body = inputField.value;
  console.log(requestOptions.body);
  getShortURL();
});

function loadingIconInsert() {
  let img = document.createElement("img");
  loadingIcon.appendChild(img);
  img.src = "assets/Eclipse-1s-64px.svg";
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
      console.log(jsonResult);
      outputField.value = jsonResult.short_url;
    })
    .catch((error) => console.log("error", error));
};
