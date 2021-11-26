
function playRound(player, computer){
    let winMap = new Map([[0, 2], [1, 0], [2, 1]]);
    let loseMap = new Map([[0, 1], [1, 2], [2, 0]]);
    let wordMap = new Map([[0, "Rock"], [1, "Paper"], [2, "Scissors"]]);

    let returnMessage = "";
    let winner = player;
    let loser = computer;
    let outcome = " beats "
    if(winMap.get(player) == computer){
        returnMessage+= "You Win! ";
        
    }
    else if(loseMap.get(player) == computer){
        returnMessage+= "You Lost! ";
        winner = computer;
        loser = player;
    }
    else{
        returnMessage+= "Tie! ";
        outcome = " ties "
    }
    //console.log(player + " " + computer);
    returnMessage+= wordMap.get(player) + outcome + wordMap.get(computer);
    console.log(returnMessage);
}



function game(){
    let choiceMap = new Map([["rock", 0], ["paper", 1], ["scissors", 2]]);
    let input;
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



}

game();


