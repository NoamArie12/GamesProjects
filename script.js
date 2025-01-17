// The redirect function that redirect the user to a game from the input
function redirect() {
    let inputText = document.getElementById('inputText').value;
    inputText = inputText.toLowerCase();
    if (inputText === 'x vs o') {
        window.location.href = 'XvsO.html';

    }else if (inputText === 'flip a coin') {
        window.location.href = 'FlipCoin.html';

    }else if (inputText === 'calculator') {
        window.location.href = 'Calculator.html';

    }else if ((inputText === 'guess number') && (inputText === 'number guess')) {
        window.location.href = 'NumberGuessing.html';
    }
    else {
        console.log('Hello');
    }
}
document.getElementById('inputText').addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase().trim();
    const NotFindGame = document.getElementById('NotFindGame');

    // Importing the games widgets
    const games = {
        'xvso': { element: document.getElementById('xvso'), name: 'x vs o' },
        'calculator': { element: document.getElementById('calculator'), name: 'calculator' },
        'flipcoin': { element: document.getElementById('flipcoin'), name: 'flip a coin' }
    };

    let foundMatch = false;

    // Iterate through each game to check if the value matches
    for (let key in games) {
        const game = games[key];
        if (game.name.toLowerCase().includes(value)) {
            // Show the matching game and hide others
            game.element.style.display = 'block';
            foundMatch = true;
        } else {
            game.element.style.display = 'none';
        }
    }

    // Handle "Not Find Game" message
    if (foundMatch) {
        NotFindGame.style.display = 'none';
    } else {
        NotFindGame.style.display = value === '' ? 'none' : 'block';
    }

    // If the input is empty, show all games
    if (value === '') {
        Object.values(games).forEach(game => {
            game.element.style.display = 'block';
        });
        NotFindGame.style.display = 'none';
    }

    console.log(value);
});


// The redirect key that do when you click the enter key
document.getElementById('inputText').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirect();
    }
});

//The click on the logo
function mainHTML() {
    window.location.href = 'index.html';
}

//The sideBar Collapsed and Expend
const showMoreCategory = document.getElementById('showMoreCategory');
const sidebar = document.getElementById('sidebar');

showMoreCategory.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const content = document.getElementById("content");

    if (sidebar.classList.contains('collapsed')) {
        content.style.marginLeft = "20px";
    } else {
        content.style.marginLeft = "200px";
    }
});


// ! -------------------- Toggle theme -------------------- ! \\

// On page load, set the theme and icon colors based on localStorage
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'LightTheme';
    document.body.classList.toggle('DarkTheme', theme === 'DarkTheme');
    document.getElementById('LightThem').style.color = theme === 'DarkTheme' ? 'rgb(132, 132, 132)' : 'rgb(255, 255, 255)';
    document.getElementById('DarkThem').style.color = theme === 'DarkTheme' ? 'rgb(255, 255, 255)' : 'rgb(132, 132, 132)';
});

// Toggle the theme and save the settings
function toggleTheme() {
    const newTheme = document.body.classList.toggle('DarkTheme') ? 'DarkTheme' : 'LightTheme';
    localStorage.setItem('theme', newTheme);
    document.getElementById('LightThem').style.color = newTheme === 'DarkTheme' ? 'rgb(132, 132, 132)' : 'rgb(255, 255, 255)';
    document.getElementById('DarkThem').style.color = newTheme === 'DarkTheme' ? 'rgb(255, 255, 255)' : 'rgb(132, 132, 132)';
}



// ! -------------------- The games widgets -------------------- ! \\


// The X vs O function
    function xvsoclick(){
        window.location.href = 'XvsO.html';
    }
// The Calculator function
    function calculatorclick(){
        window.location.href = 'Calculator.html';
    }

// The Flip A Coin function
    function flipcoinclick(){
        window.location.href = 'FlipCoin.html';
    }
// The Number Guessing function
    function numberguessclick(){
        window.location.href = 'NumberGuessing.html';
    }