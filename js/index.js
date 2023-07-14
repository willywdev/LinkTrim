var myHeaders = new Headers();
myHeaders.append("apikey", config.MY_KEY);

var raw = "{body}";

var requestOptions = {
  method: "POST",
  redirect: "follow",
  headers: myHeaders,
  body: "willydev.de",
};

fetch("https://api.apilayer.com/short_url/hash", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
