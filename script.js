let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertWord(word){
   return word === 'r'? 'ROCK' : word === 'p' ? 'PAPER' : 'SCISSORS'
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const usercheck = 'user'.fontsize(3).sup(); // sup()글자 위로, sub()글자 아래로
    const compcheck = 'comp'.fontsize(3).sup();
    
    document.querySelector('.score-board').classList.add('congratulations');
    setTimeout(function(){document.querySelector('.score-board').classList.remove('congratulations')},800);

    result_p.innerHTML = `${convertWord(user)}${usercheck} vs ${convertWord(computer)}${compcheck} You Win!`;
}
function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const usercheck = 'user'.fontsize(3).sup(); // sup()글자 위로, sub()글자 아래로
    const compcheck = 'comp'.fontsize(3).sup();
    result_p.innerHTML = `${convertWord(user)}${usercheck} vs ${convertWord(computer)}${compcheck} You lost!`;
}
function draw(user, computer){
    const usercheck = 'user'.fontsize(3).sup(); // sup()글자 위로, sub()글자 아래로
    const compcheck = 'comp'.fontsize(3).sup();
    result_p.innerHTML = `${convertWord(user)}${usercheck} vs ${convertWord(computer)}${compcheck} draw!`;
}

function game(userChoice){
   const computerChoice = getComputerChoice();

   switch(userChoice + computerChoice){
       case 'pr':
       case 'rs':
       case 'sp':
           win(userChoice, computerChoice);
           break;
       case 'rp':
       case 'sr':
       case 'ps':
           lose(userChoice, computerChoice);
           break;
       case 'pp':
       case 'rr':
       case 'ss':
           draw(userChoice, computerChoice);
           break;
   }
}

function main(){
    rock_div.addEventListener('click', e => {
        game("r")
    });
    paper_div.addEventListener('click', e => {
        game("p")
    });
    scissors_div.addEventListener('click', e => {
        game("s")
    });
}
 main();
