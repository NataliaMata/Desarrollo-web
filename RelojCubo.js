let rotationInterval;
let isRotationPaused = false;
let rotationDirection = 1;

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourFace = document.querySelector('.front');
    const minuteFace = document.querySelector('.right');
    const secondFace = document.querySelector('.top');
    
    hourFace.textContent = padZero(hours)
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

function startRotation() {
    rotationInterval = setInterval(updateClock, 1000);
}

function toggleRotation() {
    if (isRotationPaused) {
        startRotation();
    } else {
        clearInterval(rotationInterval);
    }
    isRotationPaused = !isRotationPaused;
}

function changeRotationDirection() {
    rotationDirection *= -1;
}

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

startRotation();

document.querySelector('.cube').addEventListener('click', rotateCube);
