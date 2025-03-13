const calculate = {
    wins: 0,
    losses: 0,
    ties: 0
}

function playGame(playerMove) {
    const computerMove = pickComputerMover(); // Fixed function call

    let result = "";
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose';
      } else if (computerMove === 'paper') {
        result = 'You win';
      } else {
        result = 'It\'s a tie';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win';
      } else if (computerMove === 'paper') {
        result = 'It\'s a tie';
      } else {
        result = 'You lose';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'It\'s a tie';
      } else if (computerMove === 'paper') {
        result = 'You lose';
      } else {
        result = 'You win';
      }
    }

    if (result == 'You win') {
        calculate.wins += 1;
    } else if (result == 'You lose') {
        calculate.losses += 1;
    } else if (result == 'It\'s a tie') {
        calculate.ties +=1
    }
    


    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${calculate.wins}, Losses: ${calculate.losses}, Ties: ${calculate.ties}`);
  }

  function pickComputerMover() {
    const randomNumber = Math.random();

    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else {
      computerMove = 'scissors';
    }
    return computerMove;
  }