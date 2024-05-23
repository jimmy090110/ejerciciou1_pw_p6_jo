const resC = "Felicitaciones, has seleccionado la opción correcta";
const resI = "Pokémon incorrecto, intentalo nuevamente";

let puntaje = 0;
let intentos = 0;

function verificar(option) {

    intentos++;
    let imagen = document.getElementById('idImagen');
    let letraC = document.getElementById('idRespesta');
    let letraI = document.getElementById('idRespesta');

    if (option == 4) {
        imagen.src = "../img/pcolor.jpg";
        letraC.style.background = "blue";
        letraC.style.fontFamily = "'Times New Roman', Times, serif";
        letraI.style.border = "solido";
        document.getElementById('idRespesta').innerText = resC;
        switch (intentos) {
            case 1:
                puntaje += 5;
                break;
            case 2:
                puntaje += 3;
                break;
            case 3:
                puntaje += 1;
                break;
            default:
                break;

        }


    } else {
        letraI.style.fontFamily = "'Times New Roman', Times, serif";
        letraI.style.background = "red";
        letraI.style.border = "solido";
        document.getElementById('idRespesta').innerText = resI;

    }

    document.getElementById('idPuntaje').innerText = "Puntos:" + puntaje;
    document.getElementById('idIntentos').innerText = "Intentos:" + intentos;

}
function reiniciar() {
    document.getElementById('idRespesta').innerText = "";
    let imagen = document.getElementById('idImagen');
    imagen.src = "../img/pnegro.jpg";
    puntaje = 0;
    intentos = 0;
    document.getElementById('idPuntaje').innerText = "Puntos:" + puntaje;
    document.getElementById('idIntentos').innerText = "Intentos:" + intentos;

}