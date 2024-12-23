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


// ! -------------------- The game -------------------- ! \\


document.getElementById('result').value = '';
let codeResult = '';

function buttonPressed(addToInput) {
    let result = document.getElementById('result');
    result.value += addToInput;
	if (addToInput == '^'){
		codeResult += '**';
	}else if (addToInput == '÷'){
		codeResult += '/';
	}else if (addToInput == '×'){
		codeResult += '*'
	}else if (addToInput == '-'){
		codeResult += '-';
	}else if (addToInput == '+'){
		codeResult += '+';
	}else if (addToInput == '.'){
		codeResult += '.';
	}else if (addToInput == 1){
		codeResult += 1;
	}else if (addToInput == 2){
		codeResult += 2;
	}else if (addToInput == 3){
		codeResult += 3;
	}else if (addToInput == 4){
		codeResult += 4;
	}else if (addToInput == 5){
		codeResult += 5;
	}else if (addToInput == 6){
		codeResult += 6;
	}else if (addToInput == 7){
		codeResult += 7;
	}else if (addToInput == 8){
		codeResult += 8;
	}else if (addToInput == 9){
		codeResult += 9;
	}else if (addToInput == 0){
		codeResult += 0;
	}
	return result, codeResult}
function braketButton(){
	const result = document.getElementById("result");
	let inputText = result.value;
	
	if (inputText.endsWith("(")) {
		result.value = inputText.slice(0, -1) + ")";
		codeResult = inputText.slice(0, -1) + ")";
	} else if (inputText.endsWith(")")) {
		result.value = inputText.slice(0, -1) + "(";
		codeResult = inputText.slice(0, -1) + "(";
	} else {
		result.value += "(";
		codeResult += '(';
	}
	
	return result, codeResult}

function clearResult() {
    let result = document.getElementById('result');
    result.value = '';
	codeResult = '';
	return result, codeResult}

function deleteLastNum(){
	let result = document.getElementById('result');
    result.value = result.value.slice(0,-1);
	codeResult = codeResult.slice(0.-1);
	return result, codeResult}


function calculate(){
	let result = document.getElementById('result');
    result.value = eval(codeResult); 
}