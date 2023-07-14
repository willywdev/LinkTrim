/* Code from API Documentation */
var myHeaders = new Headers();
myHeaders.append("apikey", config.MY_KEY);
let urlResult = undefined;
/* * Getting DOM Elements */
const inputField = document.querySelector("[data-js='inputField']");
const outputField = document.querySelector("[data-js='outputField']");
const formElement = document.querySelector("[data-js='formElement']");
window.addEventListener("load", () => formElement.reset());
/* Starting DOM Manipulation */
formElement.addEventListener("submit", () => {
  requestOptions.body = inputField.value;
  console.log(requestOptions.body);
  getShortURL();
});
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
    .then((outputField.value = "Waiting"))
    .then((result) => {
      const jsonResult = JSON.parse(result);
      console.log(jsonResult);
      outputField.value = jsonResult.short_url;
    })
    .catch((error) => console.log("error", error));
};
