var btn = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var Url = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return Url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("An error occured", error)
    alert("Something went wrong ;)...try after sometime");

}

function callBack() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText)).then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};
btn.addEventListener("click", callBack);