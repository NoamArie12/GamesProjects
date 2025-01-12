// The navigate to the main page function
function navigateToPage() {
    window.location.href = "index.html";
}
// The reload function
function reload() {
    location.reload();
}

// The click on the logo
function mainHTML() {
    window.location.href = 'index.html';
}

// The random number function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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


// ! -------------------- The confetti -------------------- ! \\


let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;


// ! -------------------- The game -------------------- ! \\


// Creating the variables
let clue, minNum, maxNum, computerNum, tryCountP, reloadButton, newTarget,ChosenTargetParagraph, guessButton,theChosenNumber, title, theGame;
let tryCount = 0;

// Import all of the variables ^
function getVariables() {

    theGame = document.getElementById('TheGame'); // The Game import
    title = document.getElementById('Title'); // Title import
    subTitle = document.getElementById('SubTitle'); // Sub Title import
    chosenTargetParagraph = document.getElementById('ChosenTargetParagraph'); // Chosen Target Paragraph import
    newTarget = document.getElementById('NewTarget'); // New Target import
    clue = document.getElementById('Clue'); // Clue import
    guessButton = document.getElementById('GuessButton')
    tryCountP = document.getElementById('TryCount'); // Try Count import
    reloadButton = document.getElementById('ReloadButton') // Reload Button import
    theChosenNumber = document.getElementById('TheChosenNumber'); // The Chosen Number import

    minNum = parseInt(document.getElementById('MinNumber').value.trim()); // Minimum number import
    maxNum = parseInt(document.getElementById('MaxNumber').value.trim()); // Maximum number import

    if (isNaN(minNum) || isNaN(maxNum) || minNum === "" || maxNum === "" || minNum > maxNum) {
        clue.innerHTML = "Please enter valid numbers (Min <= Max).";
        return;
    }

    computerNum = getRandomInt(minNum, maxNum); // Random computer number
    console.log(computerNum);
}

// Run the getVariables() function
getVariables();

// The Guess function
function GuessFunc() {
    tryCount += 1;

    let userNum = parseInt(document.getElementById('GuessField').value.trim()); // User chosen number import

    // Check if all of the user inputs are OK
    if (isNaN(userNum)) {
        clue.innerHTML = "Please enter a valid number.";
        return;
    }

    // Game logic

    if (userNum > computerNum) {
        clue.innerHTML = 'The number is less than ' + userNum;
    } else if (userNum < computerNum) {
        clue.innerHTML = 'The number is greater than ' + userNum;
    } else if (userNum === computerNum) {
        theGame.style = 'width: 525px; height: 275px;';
        title.innerHTML = '!You\'re right!';
        title.style = 'margin-top: 25px;';
        clue.style = 'display: none;';
        tryCountP.innerHTML = 'Its took you: ' + tryCount + ' attempts';
        tryCountP.style = 'display: block;';
        reloadButton.style = 'display: block;';
        newTarget.style = 'display: none;';
        chosenTargetParagraph.style = 'display: none;';
        subTitle.style = 'display: none;';
        document.getElementById('GuessField').style = 'display: none;'
        guessButton.style = 'display: none;';
        
        const theChosenNumberElem = document.getElementById('TheChosenNumber');
        theChosenNumberElem.style = 'display: block;';
        theChosenNumberElem.textContent = 'The number was: ' + String(computerNum);

        // Drawing the conffeti
        Draw()
    }
}
// The redirect key that do when you click the enter key
document.getElementById('GuessField').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        GuessFunc();
    }
});