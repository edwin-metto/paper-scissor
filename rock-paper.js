const choices = ["rock", "paper", "scissors"]
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');

function playGame(playerchoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice)
    let result = "";
    if (playerchoice === computerChoice) {
        result = "its a tie!";
    }
    else {
        switch (playerchoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "you win!" : "you lose!";
                break;
            case "paper":
                result = (computerChoice === "rocck") ? "you win!" : "you lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "you win!" : "you lose!";
                break;

        }
    }
    console.log(playerchoice);
    playerdisplay.textContent = `player:${playerchoice};`
    computerdisplay.textContent = `computer:${computerChoice};`
    resultdisplay.textContent = result;
}
