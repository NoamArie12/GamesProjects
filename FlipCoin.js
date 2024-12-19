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
/*The redirect key that do when you click the space key
    addEventListener('keydown', function(event) {
    if (event.key === 'Space') {
        flip();
    }
    });
*/

// The toggle dropdown
    const coinchange = document.getElementById('coinchange');
    const moreOptions = document.getElementById('moreOptions');
    const backround = document.getElementById('backround');
    const coinNum = document.getElementsByClassName('coinNum');

    coinchange.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle dropdown visibility
        const isVisible = moreOptions.style.display === 'block';
        moreOptions.style.display = isVisible ? 'none' : 'block';
        backround.style.display = isVisible ? 'none' : 'block';
    });
    backround.addEventListener('click', () => {
        moreOptions.style.display = 'none';
        backround.style.display = 'none';
    });
    Array.from(coinNum).forEach((element) => {
        element.addEventListener('click', () => {
            moreOptions.style.display = 'none';
            backround.style.display = 'none';
        });
    });

// The change the coin image
let coin = 0;

function CCU1(){
    coin = 1;
}
function CCU2(){
    coin = 2;
}
function CCU3(){
    coin = 3;
}
function CCP1(){
    coin = 4
}
function CCP2(){
    coin = 5;
}
function CCP3(){
    coin = 6;
}
function CCI1(){
    coin = 7;
}
function CCI2(){
    coin = 8;
}
function CCI3(){
    coin = 9;
}

// The change the time of the coin picker



// ! -------------------- The game -------------------- ! \\

function  getRandomNumber() {
    num = Math.floor((Math.random() * 100) + 1);
    return num
}

function flip() {

    getRandomNumber()
    let flipImg = document.getElementById("coinImg");

    setTimeout(() => {
        flipImg.src = 'images/Hand-1.png';
    }, 250);

    setTimeout(() => {
        flipImg.src = 'images/Hand-2.png';
    }, 1000);

    setTimeout(() => {
        if (num > 50){
            if (coin === 1) {
                flipImg.src = 'images/0.1-Euro-1.png';
            }else if (coin === 2){
                flipImg.src = 'images/1-Euro-1.png';
            }else if (coin === 3){
                flipImg.src = 'images/2-Euro-1.png';
            }else if (coin === 4){
                flipImg.src = 'images/0.1-Pound-1.png';
            }else if (coin === 5){
                flipImg.src = 'images/1-Pound-1.png';
            }else if (coin === 6){
                flipImg.src = 'images/2-Pound-1.png';
            }else if (coin === 7){
                flipImg.src = 'images/0.1-INS-1.png';
            }else if (coin === 8){
                flipImg.src = 'images/1-INS-1.png';
            }else if (coin === 9){
                flipImg.src = 'images/10-INS-1.png';
            }else {
                flipImg.src = 'images/Org-1.png'
            }
        }
        else{
            if (coin === 1){
                flipImg.src = 'images/0.1-Euro-2.png';
            }else if (coin === 2){
                flipImg.src = 'images/1-Euro-2.png';
            }else if (coin === 3){
                flipImg.src = 'images/2-Euro-2.png';
            }else if (coin === 4){
                flipImg.src = 'images/0.1-Pound-2.png';
            }else if (coin === 5){
                flipImg.src = 'images/1-Pound-2.png';
            }else if (coin === 6){
                flipImg.src = 'images/2-Pound-2.png';
            }else if (coin === 7){
                flipImg.src = 'images/0.1-INS-2.png';
            }else if (coin === 8){
                flipImg.src = 'images/1-INS-2.png';
            }else if (coin === 9){
                flipImg.src = 'images/10-INS-2.png';
            }else {
                flipImg.src = 'images/Org-2.png';
            }
        }
    }, 1750);
}