import {getCookie} from "./utils.js";
let spanUser = document.querySelector("#usuario");
let tableElement = document.querySelector("#tabla");
let cookiesAlmacenadas = document.cookie.split(';');


for (let i = 0; i < cookiesAlmacenadas.length; i++) {
    let cookie = cookiesAlmacenadas[i];
    while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
    }

    
    let cookieValue = cookie.split("=")[1];
    let cookieName = cookie.split("=")[0];

    if(cookieName == "undefined"){
        cookieName = "";
        cookieValue = "";
    }
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdValue = document.createElement("td");
    tdName.innerHTML = cookieName;
    tdValue.innerHTML = cookieValue;
    tr.appendChild(tdName);
    tr.appendChild(tdValue);
    tableElement.appendChild(tr);
}

spanUser.innerHTML = getCookie("usuarioreal");

if(getCookie("isLoggedIn") == false){
    location.href="../index.html";
}