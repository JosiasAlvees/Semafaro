const img = document.getElementById('imagem');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    stop();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorIndex < 2) {
        colorIndex++
    }else {
        colorIndex = 0;
    }
}

const ChangeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color] ();
    nextIndex();
} 

const stop = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red':    ( ) => img.src='./imagem/vermelho.png',
    'yellow': ( ) => img.src='./imagem/amarelo.png',
    'green':  ( ) => img.src='./imagem/verde.png',
    'automatic': () => intervalId = setInterval(ChangeColor, 2000)
}

buttons.addEventListener('click', trafficLight);