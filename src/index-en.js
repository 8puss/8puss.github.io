// DOM

const frontTitle = document.getElementById('front-end-title');
const backTitle = document.getElementById('back-end-title');

frontTitle.addEventListener('click', function() {
    const frontText = document.getElementById('answer-text');
    frontText.innerText = "HTML5 layout and CSS responsive design. DOM handling and performance through Javascript (ES6+).";
});

backTitle.addEventListener('click', function() {
    const backText = document.getElementById('answer-text');
    backText.innerText = "API REST development using Node.js and Express.js. Deploy with Heroku";
});