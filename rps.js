let r = document.getElementById("rock");
let p = document.getElementById("paper");
let s = document.getElementById("scissors");
let res = document.getElementById("result");
let rpsCounter = 0;
let computerCounter = 0;

console.log("locked and loaded");

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

function computerRps(){
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    computerCounter = x;
}


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

r.addEventListener("click", () => {
                                    rockChoice();
                                    compare(rpsCounter, computerCounter)});
p.addEventListener("click", () => {
                                    paperChoice();
                                    compare(rpsCounter, computerCounter)});
s.addEventListener("click", () => {
                                    scissorChoice();
                                    compare(rpsCounter, computerCounter)});
