const body = document.body;

const randomButton = document.querySelector('.random-button');
const screen = document.querySelector('.screen');

const rangeRed = document.querySelector('.red');
const rangeGreen = document.querySelector('.green');
const rangeBlue = document.querySelector('.blue');

let red = 128;
let green = 128;
let blue = 128;

// console.log(red.toString(16));

function randomColor() {
	red = Math.round(Math.random() * 255);
	blue = Math.round(Math.random() * 255);
	green = Math.round(Math.random() * 255);

	rangeRed.value = red;
	rangeBlue.value = blue;
	rangeGreen.value = green;

	createBackground();
}

randomButton.addEventListener('click', randomColor);
// 1. Z czego zbudowany jest hex?
// 2. Czy range ma value?

// body.style.background = 'rgb(red, green, blue)';

// rgb(red, green, blue)

function createBackground() {
	const background = `rgb(${red}, ${green}, ${blue})`;

	body.style.background = background;

	const text = `#${red.toString(16).padStart(2, 0)}${green.toString(16).padStart(2, 0)}${blue
		.toString(16)
		.padStart(2, 0)}`;

	screen.textContent = text;
}

rangeRed.addEventListener('input', event => {
	red = parseInt(event.target.value);
	createBackground();
});

rangeGreen.addEventListener('input', event => {
	green = Number(event.target.value);
	createBackground();
});

rangeBlue.addEventListener('input', event => {
	blue = +event.target.value;
	createBackground();
});

//1. Zrobić to samo tylko z pozostałymi suwakami.
//2. Wrzucić zmiany na githuba.
