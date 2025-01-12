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


let winning = 'False';
let currentMove = 'X';

let one = '';
let two = '';
let three = '';
let four = '';
let five = '';
let six = '';
let seven = '';
let eight = '';
let nine = '';

function won(){
    const title = document.getElementById('title')
    const boxes = document.querySelectorAll(".box");
    const moveParagraph = document.getElementById('move');
    const reloadButton = document.getElementById('reloadButton')

    if (
        (one === 'X' && two === 'X' && three === 'X') ||
        (four === 'X' && five === 'X' && six === 'X') ||
        (seven === 'X' && eight === 'X' && nine === 'X') ||
        (one === 'X' && four === 'X' && seven === 'X') ||
        (two === 'X' && five === 'X' && eight === 'X') ||
        (three === 'X' && six === 'X' && nine === 'X') ||
        (one === 'X' && five === 'X' && nine === 'X') ||
        (three === 'X' && five === 'X' && seven === 'X')
    ) {
        title.innerHTML = "!X Won!";
        boxes.forEach(button => button.disabled = true);
        moveParagraph.style.display = 'none';
        reloadButton.style.display = 'block';
        Draw();
    } else if (
        (one === 'O' && two === 'O' && three === 'O') ||
        (four === 'O' && five === 'O' && six === 'O') ||
        (seven === 'O' && eight === 'O' && nine === 'O') ||
        (one === 'O' && four === 'O' && seven === 'O') ||
        (two === 'O' && five === 'O' && eight === 'O') ||
        (three === 'O' && six === 'O' && nine === 'O') ||
        (one === 'O' && five === 'O' && nine === 'O') ||
        (three === 'O' && five === 'O' && seven === 'O')
    ) {
        title.innerHTML = "!O Won!";
        boxes.forEach(button => button.disabled = true);
        moveParagraph.style.display = 'none';
        reloadButton.style.display = 'block';
        Draw();
    }
    return winning;
}
function tie(){
    const title = document.getElementById('title')
    const boxes = document.querySelectorAll(".box");
    const moveParagraph = document.getElementById('move');
    const reloadButton = document.getElementById('reloadButton')
    if (one !== '' && two !== '' && three !== '' && four !== '' && five !== '' && six !== '' && seven !== '' && eight !== '' && nine !== '') {
            if (winning !== 'True') {
                title.innerHTML = "Its a tie";
                boxes.forEach(button => button.disabled = true);
                moveParagraph.style.display = 'none';
                reloadButton.style.display = 'block';
            }
    }
}

function toggleMove(){
    if (currentMove === 'X') {
        currentMove = 'O';
        document.getElementById('move').innerText = 'O move';
    } else if (currentMove === 'O') {
        currentMove = 'X';
        document.getElementById('move').innerText = 'X move';
    }
    return currentMove;
}

function first(){
    if (currentMove === 'X') {
        if (one === '') {
            one = 'X';
            document.getElementById('one').innerHTML = one;
            toggleMove();
            tie();
        }else if (one === 'X') {}
            console.log('try again');

    } else if (currentMove === 'O') {
        if (one === '') {
            one = 'O';
            document.getElementById('one').innerHTML = one;
            toggleMove();
            tie();
        } else if (one === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, one];
}
function second(){
    if (currentMove === 'X') {
        if (two === '') {
            two = 'X';
            document.getElementById('two').innerHTML = two;
            toggleMove();
            tie();
        } else if (two === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (two === '') {
            two = 'O';
            document.getElementById('two').innerHTML = two;
            toggleMove();
            tie();
        } else if (two === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, two];
}
function third(){
    if (currentMove === 'X') {
        if (three === '') {
            three = 'X';
            document.getElementById('three').innerHTML = three;
            toggleMove();
            tie();
        } else if (three === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (three === '') {
            three = 'O';
            document.getElementById('three').innerHTML = three;
            toggleMove();
            tie();
        } else if (three === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, three];
}
function fourth(){
    if (currentMove === 'X') {
        if (four === '') {
            four = 'X';
            document.getElementById('four').innerHTML = four;
            toggleMove();
            tie();
        } else if (four === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (four === '') {
            four = 'O';
            document.getElementById('four').innerHTML = four;
            toggleMove();
            tie();
        } else if (four === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, four];
}
function fifth(){
    if (currentMove === 'X') {
        if (five === '') {
            five = 'X';
            document.getElementById('five').innerHTML = five;
            toggleMove();
            tie();
        } else if (five === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (five === '') {
            five = 'O';
            document.getElementById('five').innerHTML = five;
            toggleMove();
            tie();
        } else if (five === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, five];
}
function sixth(){
    if (currentMove === 'X') {
        if (six === '') {
            six = 'X';
            document.getElementById('six').innerHTML = six;
            toggleMove();
            tie();
        } else if (six === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (six === '') {
            six = 'O';
            document.getElementById('six').innerHTML = six;
            toggleMove();
            tie();
        } else if (six === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, six];
}
function seventh(){
    if (currentMove === 'X') {
        if (seven === '') {
            seven = 'X';
            document.getElementById('seven').innerHTML = seven;
            toggleMove();
            tie();
        } else if (seven === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (seven === '') {
            seven = 'O';
            document.getElementById('seven').innerHTML = seven;
            toggleMove();
            tie();
        } else if (seven === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, seven];
}
function eighth(){
    if (currentMove === 'X') {
        if (eight === '') {
            eight = 'X';
            document.getElementById('eight').innerHTML = eight;
            toggleMove();
            tie();
        } else if (eight === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (eight === '') {
            eight = 'O';
            document.getElementById('eight').innerHTML = eight;
            toggleMove();
            tie();
        } else if (eight === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, eight];
}
function ninth(){
    if (currentMove === 'X') {
        if (nine === '') {
            nine = 'X';
            document.getElementById('nine').innerHTML = nine;
            toggleMove();
            tie();
        } else if (nine === 'X') {
            console.log('try again');
        }
    } else if (currentMove === 'O') {
        if (nine === '') {
            nine = 'O';
            document.getElementById('nine').innerHTML = nine;
            toggleMove();
            tie();
        } else if (nine === 'O') {
            console.log('try again');
        }
    }
    won()
    return [currentMove, nine];
}