import { getCookie, changeExpireDate, cadenaAleatoria } from "./utils.js";

let botonElement = document.querySelector("#boton");
let usernameElement = document.querySelector("#username");
let spanUser = document.querySelector("#spanUser");
const oneDay = 24 * 60 * 60 * 1000;
const oneMonth = oneDay * 30;


document.cookie = `usuario=${cadenaAleatoria(64)}`;
document.cookie = `carrito=0;max-age=${oneMonth}` ;
document.cookie = "usuarioreal=";
document.cookie = 'isLoggedIn=false';

if(getCookie("isLoggedIn") == "true"){
    location.href="../index.html";
}

//& evento Click del botón
botonElement.addEventListener("click", function () {
    document.cookie = "isLoggedIn=true";
    document.cookie = `usuarioreal=${usernameElement.value}`;
    document.cookie = changeExpireDate("carrito", 0, oneMonth);
    location.href = "../login.html";
});