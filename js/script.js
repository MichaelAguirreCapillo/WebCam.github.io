let btnEncenderCamara = document.querySelector('#btnEncendarCamara');
let btnCambiarCamara = document.querySelector('#btnCambiarCamara');


let video = document.querySelector('#video');
let canvas = document.querySelector('#canvas');

let isFaceUser = true;
var mostrarStream;

btnEncenderCamara.onclick = AbrirCamara;
btnCambiarCamara.onclick = CambiarCamara;

//si no soporta el navegador se deshabilita el boton
let soporte = navigator.mediaDevices.getSupportedConstraints();
if (soporte['facingMode'] === true) {
    btnCambiarCamara.disabled = false;
}

function AbrirCamara(){
// compatibildad con los navegadores
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

navigator.mediaDevices.getUserMedia({video:{},
    facingMode : isFaceUser?'user':'enviroment'
}).then(function(straeam){
    mostrarStream = straeam;
    video.srcObject = straeam;
    video.play();
});

}


function CambiarCamara(){
    mostrarStream.getTracks().forEach(t => {
        t.stop();
    });

    isFaceUser = !isFaceUser;
    console.log('isFaceUser',isFaceUser);
    AbrirCamara();
}

