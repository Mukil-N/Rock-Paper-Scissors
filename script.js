document.addEventListener('DOMContentLoaded',()=> {
    const rockbtn = document.querySelector('#rock');
    const paperbtn = document.querySelector('#paper');
    const scissorsbtn = document.querySelector('#scissors');
    const resultDiv = document.querySelector('#result');
    const finalresultDiv = document.querySelector('#finalresult');

    let playerscore = 0;
    let computerscore = 0;

    rockbtn.addEventListener('click',()=>{
        playGame('rock');
    });
    paperbtn.addEventListener('click',()=>{
        playGame('paper');
    });
    scissorsbtn.addEventListener('click',()=>{
        playGame('scissors');
    });

    function playGame(playerChoice){
        const computerChoice = getComputerChoice();
        const winner = playround(playerChoice,computerChoice);

        if(winner === "player")
        {
            playerscore++;
        }
        else if(winner === "computer")
        {
            computerscore++;
        }

        displayResult(playerChoice,computerChoice,winner);

        if(playerscore === 5 || computerscore === 5){
            displayFinalResult();
            resetGame();
        }
    }

    function getComputerChoice(){
        const choices = ['rock','paper','scissors'];
        const randomin = Math.floor(Math.random()*3);
        return choices[randomin];
    }
    function playround(player,computer){
        if(player == computer)
        {
            return "tie";
        }
        else if(player === "rock" && computer === "scissors" ||
                player === "paper" && computer === "rock" ||
                player === "scissors" && computer === "paper"){
                    return "player";
                }
        else{
            return "computer";
        }
    }

    function displayResult(playerChoice,computerChoice,winner){
        resultDiv.innerHTML = `
            You chose: ${playerChoice} <br>
            Computer chose: ${computerChoice} <br>
            ${winner === "tie" ? "It's a tie!" : winner === "player" ? "You win this round!" : "Computer win this round!"} <br>
            <br>
            Scores:<br>
            You: ${playerscore} <br>
            Computer: ${computerscore}`;
    }
    
    function displayFinalResult()
    {
        if(playerscore === 5){
            finalresultDiv.innerHTML = "You win the game!";
        }
        else{
            finalresultDiv.innerHTML = "Computer win the game";
        }
    }

    function resetGame()
    {
        playerscore = 0;
        computerscore = 0;
    }
});