// Initialize the 'calculate' object from localStorage or use default values if it doesn't exist
let calculate = JSON.parse(localStorage.getItem('calculate')) || { wins: 0, losses: 0, ties: 0 };

// Update the UI with stored values on page load
document.getElementById('wins').textContent = calculate.wins;
document.getElementById('losses').textContent = calculate.losses;
document.getElementById('ties').textContent = calculate.ties;

// Function to play the game
function playGame(playerMove) {
  const computerMove = pickComputerMover(); // Get computer's move

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

  // Update the calculate object based on the result
  if (result === 'You win') {
    calculate.wins += 1;
  } else if (result === 'You lose') {
    calculate.losses += 1;
  } else if (result === 'It\'s a tie') {
    calculate.ties += 1;
  }

  // Update the score display in HTML
  document.getElementById('wins').textContent = calculate.wins;
  document.getElementById('losses').textContent = calculate.losses;
  document.getElementById('ties').textContent = calculate.ties;

  // Save the updated 'calculate' object to localStorage
  localStorage.setItem('calculate', JSON.stringify(calculate));

  // Show the result to the user in the alert box
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n
  Wins: ${calculate.wins}, Losses: ${calculate.losses}, Ties: ${calculate.ties}`);
}

// Function to pick the computer's move
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
function resetGame() {
    // Reset the 'calculate' object
    calculate.wins = 0;
    calculate.losses = 0;
    calculate.ties = 0;
  
    // Update the UI
    document.getElementById('wins').textContent = calculate.wins;
    document.getElementById('losses').textContent = calculate.losses;
    document.getElementById('ties').textContent = calculate.ties;
  
    // Clear the localStorage data
    localStorage.removeItem('calculate');
  }
  