let rotationInterval; // Variable para almacenar el intervalo de rotación
let isRotationPaused = false; // Variable para controlar si la rotación está pausada o no
let rotationDirection = 1; // Variable para almacenar la dirección de la rotación (1 = hacia adelante, -1 = hacia atrás)

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourFace = document.querySelector('.front');
    const minuteFace = document.querySelector('.right');
    const secondFace = document.querySelector('.top');
    
    hourFace.textContent = padZero(hours);
    minuteFace.textContent = padZero(minutes);
    secondFace.textContent = padZero(seconds);
    
    const hourRotation = (hours % 12) * 30;
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;
    
    document.querySelector('.cube').style.transform = `rotateX(${hourRotation}deg) rotateY(${minuteRotation}deg) rotateZ(${secondRotation}deg)`;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

// Función para iniciar la rotación automática del cubo al cargar la página
function startRotation() {
    rotationInterval = setInterval(updateClock, 1000);
}

// Función para detener o reanudar la rotación del cubo
function toggleRotation() {
    if (isRotationPaused) {
        startRotation();
    } else {
        clearInterval(rotationInterval);
    }
    isRotationPaused = !isRotationPaused;
}

// Función para cambiar la dirección de la rotación
function changeRotationDirection() {
    rotationDirection *= -1;
}

// Función para girar el cubo hacia la dirección en la que se hizo clic
function rotateCube(event) {
    const cube = document.querySelector('.cube');
    const cubeRect = cube.getBoundingClientRect();
    const clickX = event.clientX - cubeRect.left - cubeRect.width / 2;
    const clickY = event.clientY - cubeRect.top - cubeRect.height / 2;
    const angleX = -clickY / cubeRect.height * 360; // Ángulo de rotación en el eje X
    const angleY = clickX / cubeRect.width * 360; // Ángulo de rotación en el eje Y
    
    if (event.target.classList.contains('cube')) {
        toggleRotation();
    } else {
        cube.style.transition = 'transform 1s';
        cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        changeRotationDirection();
    }
}

// Iniciar la rotación automática del cubo al cargar la página
startRotation();

// Asignar el evento click a la función rotateCube cuando se haga clic en el cubo
document.querySelector('.cube').addEventListener('click', rotateCube);
