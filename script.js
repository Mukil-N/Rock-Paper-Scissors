function getcomputerchoice() {
    const choices = ["rock","paper","scissors"];
    const randomindex = Math.floor(Math.random()*3);
    return choices[randomindex];

}
function gethumanchoice() {
    const choices = ["rock","paper","scissors"];
    let choice = prompt("Enter Your Choice: ").toLowerCase();
    return choice;
}

function playround(humanchoice,computerchoice)
{
    if(humanchoice == computerchoice) {
        return "tie";
    }
    else if ((humanchoice == 'rock'&& computerchoice == 'scissors') ||
             (humanchoice == 'paper' && computerchoice == 'rock') ||
             (humanchoice == 'scissors' && computerchoice == 'paper')) 
             {
                return "humanchoice";
            }
    else {
        return "computerchoice";
    }

}
function playgame()
{
    let humanscore = 0;
    let computerscore = 0;
    for(let round = 1;round<=5;round++)
    {
        const humanselection = gethumanchoice();
        const computerselection = getcomputerchoice();
        console.log(`You choose: ${humanselection}`);
        console.log(`computer chose: ${computerselection}`);
        const win = playround(humanselection,computerselection);
        if(win == "humanchoice") {
            console.log("You win this round");
            humanscore++;
        }
        else if(win == "computerchoice")
        {
            console.log("Computer win this round");
            computerscore++;
        }
        else {
            console.log("It's a tie");
        }
    }
    console.log("Game Over!");
    console.log(`Final score - You: ${humanscore} , Computer: ${computerscore}`);
    if(humanscore>computerscore)
    {
        console.log("You win this game");
    }
    else if(computerscore > humanscore)
    {
        console.log("computer win this game");
    }
    else {
        console.log("The game is a tie");
    }
}
playgame();
let playAgain = prompt("Do tou want to play again? (yes/no):").toLowerCase();
if(playAgain == 'yes'){
    playgame();
}
else {
    console.log("Thanks for playing!");
}