
function playRound(player, computer){
    let winMap = new Map([[0, 2], [1, 0], [2, 1]]);
    let loseMap = new Map([[0, 1], [1, 2], [2, 0]]);
    let wordMap = new Map([[0, "Rock"], [1, "Paper"], [2, "Scissors"]]);

    let returnMessage = "";
    let winner = player;
    let loser = computer;
    let outcome = " beats "

    let result = 0;
    if(winMap.get(player) == computer){
        returnMessage+= "You Win! ";
    }
    else if(loseMap.get(player) == computer){
        returnMessage+= "You Lost! ";
        winner = computer;
        loser = player;
        result = 1;
    }
    else{
        returnMessage+= "Tie! ";
        outcome = " ties "
        result = 2;
    }
    //console.log(player + " " + computer);
    returnMessage+= wordMap.get(winner) + outcome + wordMap.get(loser);
    //const resultsBox = document.querySelector('#results');
    const resultBox = document.getElementById("results")
    //document.getElementById("p1").innerHTML = "New text!";    
    resultBox.innerHTML = returnMessage;

    return result;
    //console.log(returnMessage);
}

function updateWL(wlt){
    document.getElementById("wins").innerHTML = "Wins: " + wlt[0]
    document.getElementById("losses").innerHTML = "Losses: " + wlt[1]
    document.getElementById("ties").innerHTML = "Ties: " + wlt[2]

    if(wlt[0] == 5){
        alert("You win!")
    }
    else if(wlt[1] == 5){
        alert("Computer wins!")
    }
}

function game(){
    let choiceMap = new Map([["rock", 0], ["paper", 1], ["scissors", 2]]);
    let input;

    let wlt = [0,0,0]
    let gamesplayed = 0

    const RockBtn = document.querySelector('#rock');
    const PaperBtn = document.querySelector('#paper');
    const ScissorsBtn = document.querySelector('#scissors');

    let result = 0;

    RockBtn.addEventListener('click', () => {
        result = playRound(0, Math.floor(Math.random() * choiceMap.size))
        gamesplayed++
        wlt[result]++;
        updateWL(wlt);
    });
    PaperBtn.addEventListener('click', () => {
        result = playRound(1, Math.floor(Math.random() * choiceMap.size))
        gamesplayed++
        wlt[result]++;
        updateWL(wlt);
    });
    ScissorsBtn.addEventListener('click', () => {
        result = playRound(2, Math.floor(Math.random() * choiceMap.size))
        gamesplayed++
        wlt[result]++;
        updateWL(wlt);
    });

    /**
    for(let i = 0; i < 5; i++){
        while(1){
            input = prompt("Rock, Paper or Scissors?").toLowerCase();
            if(choiceMap.has(input)){
                break;
            }
        }
        console.log("Game " + (i + 1));
        playRound(choiceMap.get(input), Math.floor(Math.random() * choiceMap.size));
    }
    **/


}

game();


