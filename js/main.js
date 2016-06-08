function getInputValue() {
    var inputbox = document.getElementById("inputbox");
    return inputbox.value;
}
function activity() {
    var inputboxValue = getInputValue();
    if (inputboxValue !== "") {
        doitem(inputboxValue);
        clean();
    }
}
function doitem(chat) {
    var list = document.getElementById("yo-msg");
    //Crear el elemento
    var elemento = document.createElement("ul");
    var texto = document.createElement("p");
    texto.innerHTML = chat;
    elemento.appendChild(texto);
    list.appendChild(elemento);
}
function clean() {
    var inputbox = document.getElementById("inputbox");
    inputbox.value = "";
    inputbox.focus();
}