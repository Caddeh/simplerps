let r = document.getElementById("rock");
let p = document.getElementById("paper");
let s = document.getElementById("scissors");
let res = document.getElementById("result");
let rpsCounter = 0;
let computerCounter = 0;

console.log("locked and loaded");

//When the player clicks an option, update the counter and make computer play RPS
function rockChoice(){
    rpsCounter = 0;
    console.log(rpsCounter);
    computerRps()
}

function paperChoice(){
    rpsCounter = 1;
    console.log(rpsCounter);
    computerRps()
}

function scissorChoice(){
    rpsCounter = 2;
    console.log(rpsCounter);
    computerRps()
}

//Pick a random number between 0 and 2 and put into computerCounter
function computerRps(){
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    computerCounter = x;
}

//compare rpsCounter and computerCounter, 0 = rock, 1 = paper, 2 = scissors
function compare(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        res.innerHTML = "Bruh, not cool. Tie";
        console.log("tie")
    }
    if (playerChoice === 0 && computerChoice === 1){
        res.innerHTML = "Sike, paper covers rock. You lose"
    }
    if (playerChoice === 0 && computerChoice === 2) {
        res.innerHTML = "Wtf, how are you so good at this. You win, rock beats scissors"
    }
    if (playerChoice === 1 && computerChoice === 0){
        console.log(rpsCounter, computerCounter, "win");
        res.innerHTML = "I guess i lose, paper covers rock"
    }
    if (playerChoice === 1 && computerChoice === 2){
        res.innerHTML = "Haha, i cut you. You lose"
    }
    if (playerChoice === 2 && computerChoice === 0){
        res.innerHTML = "Bro, are you even trying? Rock beats scissor, you lose"
    }
    if (playerChoice === 2 && computerChoice === 1){
        res.innerHTML = "Ouch dude, scissors cut paper. You win"
    }
}

//add eventlisteners for each choice
r.addEventListener("click", () => {
                                    rockChoice();
                                    compare(rpsCounter, computerCounter)});
p.addEventListener("click", () => {
                                    paperChoice();
                                    compare(rpsCounter, computerCounter)});
s.addEventListener("click", () => {
                                    scissorChoice();
                                    compare(rpsCounter, computerCounter)});
