// * Code from API Documentation
var myHeaders = new Headers();
myHeaders.append("apikey", config.MY_KEY);
let urlResult = undefined;

// * Getting DOM Elements
const inputField = document.querySelector("[data-js='inputField']");
const outputField = document.querySelector("[data-js='outputField']");
const formElement = document.querySelector("[data-js='formElement']");
const loadingIcon = document.querySelector("[data-js='loadingIcon']");
const userMessage = document.querySelector("[data-js='usermsg']");
const copyButton = document.querySelector("[data-js='copyBtn']");
let p = document.createElement("p");

// * Starting DOM Manipulation
window.addEventListener("load", () => formElement.reset());

formElement.addEventListener("submit", () => {
  loadingIconInsert();
  requestOptions.body = inputField.value;
  getShortURL();
  p.remove();
});

copyButton.addEventListener("click", () => {
  if (outputField.value.length === 0) {
    userMessage.appendChild(p);
    p.className = "errorMessage";
    console.log(p);
    p.textContent = "There is nothing to copy 😥";
  } else {
    outputField.select();
    outputField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputField.value);
    userMessage.appendChild(p);
    p.textContent = "URL copied! 📋";
    p.className = "copyMessage";
  }
});

// * FUNCTIONS
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

//* Code from API Documentation
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
