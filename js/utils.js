//& Función para generar una cadena aleatoria
export const cadenaAleatoria = longitud => {
    const diccionario = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < longitud; i++) {
        aleatoria += diccionario.charAt(Math.floor(Math.random() * diccionario.length));
    }
    return aleatoria;
};

//& Añade un mes desde que se ejecuta la función a la cookie
export function changeExpireDate(cookieName, cookieValue, newTime) {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + newTime;
    now.setTime(expireTime);
    let cookieExpireDate = now.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + cookieExpireDate;
}

//& Función para obtener una cookie específica
export function getCookie(cookieName) {
    let nombre = cookieName + "=";
    let cookiesAlmacenadas = document.cookie.split(';');

    for (let i = 0; i < cookiesAlmacenadas.length; i++) {
        let cookie = cookiesAlmacenadas[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombre) == 0) {
            return cookie.substring(nombre.length, cookie.length);
        }
    }
    return "";
}