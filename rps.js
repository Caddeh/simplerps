// Playerchoice
let  playerChoice = prompt("Do you choose rock, paper or scissors?");
if (! playerChoice) {
    // Player types nothing
    document.write("<p>Bro, you gotta pick rock paper or scissors</p>");
} else {
    // Display player choice
    document.write("<p>Player 1:" + " " + playerChoice + "</p>");
}
// Computer choice
let computerChoice = Math.floor(Math.random() * 3)
console.log(computerChoice);
if (computerChoice == 0) {
    computerChoice = "rock";
} else if(computerChoice == 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Display computer choice
document.write("<p>Computer:" + " " + computerChoice + "</p>");

// Compare both choices
let compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win!";
        } else {
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "You lose! Try again.";
        } else {
            return "You win!";
        }
    }
};

// Run the compare function
let results = compare(playerChoice,computerChoice);
// Display results
document.write("<br><br>" + results);