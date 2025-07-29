const body = document.body;

const randomButton = document.querySelector('.random-button');
const screen = document.querySelector('.screen');

const rangeRed = document.querySelector('.red');
const rangeGreen = document.querySelector('.green');
const rangeBlue = document.querySelector('.blue');

// 1. Z czego zbudowany jest hex?
// 2. Czy range ma value?

// body.style.background = 'red';

rangeRed.addEventListener('input', event => {
	console.log(event.target.value);
});

rangeGreen.addEventListener('input', event => {
	console.log(event.target.value);
});

rangeBlue.addEventListener('input', event => {
	console.log(event.target.value);
});

//1. Zrobić to samo tylko z pozostałymi suwakami. 
//2. Wrzucić zmiany na githuba. 