//Variables
let userChoice;
let computerChoice;
let result;
let score = 0;

//Variables linked with id's from the HTML file:
//Display
const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('scorePoints');

//Buttons
const possibleChoices = document.querySelectorAll('button');
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    GenerateComputerChoice();
    GetResult();
}))

//Function to generate computer choices with random choices
function GenerateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1; //or possibleChoices
   
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

//Funnction to get the results if you win or loose or is it a draw.
function GetResult(){
    if(computerChoice === userChoice){
        result = "It is a draw";
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "You Win!";
        score++;
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = "You Loose!";
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = "You Win!";
        score++;
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "You Loose!";
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = "You Win!";
        score++;
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = "You Loose!";
    }

    resultDisplay.innerHTML = result
    scoreDisplay.innerHTML = score;
}


