// DOM

const frontTitle = document.getElementById('front-end-title');
const backTitle = document.getElementById('back-end-title');

frontTitle.addEventListener('click', function() {
    const frontText = document.getElementById('answer-text');
    frontText.innerText = "HTML5 layout and CSS responsive design. DOM handling and performance through Javascript (ES6+) and Vue.js 🤓.";
});

backTitle.addEventListener('click', function() {
    const backText = document.getElementById('answer-text');
    backText.innerText = "API REST development using Node.js and Express.js. Deploy with Heroku/Netlify. PostgreSQL as database and Sequelize as ORM. Passport.js and JWT as authentication and authorización protocols. 💻";
});