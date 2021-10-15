// DOM

const frontTitle = document.getElementById('front-end-title');
const backTitle = document.getElementById('back-end-title');

frontTitle.addEventListener('click', function() {
    const frontText = document.getElementById('answer-text');
    frontText.innerText = "Maquetación con HTML5 y responsive design con CSS3. Manipulación del DOM y funcionamiento con Javascript (ES6+).";
});

backTitle.addEventListener('click', function() {
    const backText = document.getElementById('answer-text');
    backText.innerText = "Desarrollo de una API REST con Node.js y Express.js. Deploy en Heroku";
});