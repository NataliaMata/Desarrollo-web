// Reloj analógico
var canvas = document.getElementById("canvas_reloj");
var objdibujo = canvas.getContext("2d");
var radio = canvas.height / 2;
objdibujo.translate(radio, radio);
radio *= 0.8;
setInterval(updateAnalogClock, 1000); 

function updateAnalogClock() {
    drawClockFace(objdibujo, radio);
    drawNumbers(objdibujo, radio);
    drawTime(objdibujo, radio);
}

function drawClockFace(objdibujo, radio) {
    objdibujo.beginPath();
    objdibujo.arc(0, 0, radio, 0, 2 * Math.PI);
    objdibujo.fillStyle = "pink";
    objdibujo.fill();
    objdibujo.strokeStyle = "palevioletred";
    objdibujo.lineWidth = radio * 0.1;
    objdibujo.stroke();
    objdibujo.beginPath();
    objdibujo.arc(0, 0, radio * 0.1, 0, 2 * Math.PI);
    objdibujo.fillStyle = 'palevioletred';
    objdibujo.fill();
}

function drawNumbers(objdibujo, radio) {
    var angulo;
    var numero;
    objdibujo.font = radio * 0.15 + "px arial";
    objdibujo.textBaseline = "middle";
    objdibujo.textAlign = "center";
    for (numero = 1; numero < 13; numero++) { 
        angulo = numero * Math.PI / 6;
        objdibujo.rotate(angulo);
        objdibujo.translate(0, -radio * 0.85);
        objdibujo.rotate(-angulo);
        objdibujo.fillText(numero.toString(), 0, 0);
        objdibujo.rotate(angulo);
        objdibujo.translate(0, radio * 0.85);
        objdibujo.rotate(-angulo);
    }
}

function drawTime(objdibujo, radio) {
    var tiempo_actual = new Date();
    var hora = tiempo_actual.getHours() % 12;
    var minutos = tiempo_actual.getMinutes();
    var segundos = tiempo_actual.getSeconds();
    hora = (hora * Math.PI / 6) + (minutos * Math.PI / (6 * 60)) + (segundos * Math.PI / (360 * 60));
    drawHand(objdibujo, hora, radio * 0.5, radio * 0.07);
    minutos = (minutos * Math.PI / 30) + (segundos * Math.PI / (30 * 60));
    drawHand(objdibujo, minutos, radio * 0.7, radio * 0.07);
    segundos = (segundos * Math.PI / 30);
    drawHand(objdibujo, segundos, radio * 0.9, radio * 0.02);
}

function drawHand(objdibujo, angulo, longitud, ancho) {
    objdibujo.beginPath();
    objdibujo.lineWidth = ancho;
    objdibujo.lineCap = "round";
    objdibujo.moveTo(0, 0);
    objdibujo.rotate(angulo);
    objdibujo.lineTo(0, -longitud);
    objdibujo.stroke();
    objdibujo.rotate(-angulo);
}

// Reloj digital
function updateDigitalClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const digitalClock = document.getElementById("digital-clock");
    digitalClock.textContent = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(updateDigitalClock, 1000);
