let targetNum = 0;
const userGuess = document.getElementById('user-guess');
const roundNum = document.getElementById('round-number');
const compGuess = document.getElementById('computer-guess');
const userScore = document.getElementById('user-score');
const compScore = document.getElementById('computer-score');
const showTarget = document.getElementById('target-number');
const compWin = document.getElementById('computer-wins');
const guessBtn = document.getElementById('guess');
const nextRoundBtn = document.getElementById('next-round')

guessBtn.addEventListener('click', () => {
  targetNum = generateTarget();

  const usersGuess = userGuess.value;
  const compsGuess = Math.floor(Math.random() * 10);

  // Show the computer guess and the target number
  compGuess.innerText = compsGuess;
  showTarget.innerText = targetNum;
  
  // Determine if the human or computer wins
  const boolWinner = compareGuesses(usersGuess, compsGuess, targetNum);
  const winner = boolWinner ? 'human' : 'computer';

  // Update the correct score
  updateScore(winner);

  // Show the winner
  if (boolWinner) {
    guessBtn.innerText = 'You Win!';
    guessBtn.classList.toggle('winning-text');
  } else {
    compWin.innerText = 'Computer Wins!';
  }

  // Show scores
  userScore.innerText = humanScore;
  compScore.innerText = computerScore;
  
  // Disable buttons
  guessBtn.setAttribute('disabled', true);
  nextRoundBtn.removeAttribute('disabled');
});

nextRoundBtn.addEventListener('click', () => {
  advanceRound();

  // Show new round number
  roundNum.innerText = currentRoundNumber;

  nextRoundBtn.setAttribute('disabled', true);
  guessBtn.removeAttribute('disabled');

  // Reset input box and the target number display:
  showTarget.innerText = '?';
  guessBtn.innerText = 'Guess a Number';
  userGuess.value = 0;
  compGuess.innerText = '?';
  compWin.innerText = '';
  guessBtn.classList.remove('winning-text');
});

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');

addBtn.addEventListener('click', () => {
  userGuess.value = +userGuess.value + 1;
  change(userGuess.value);
});

subtractBtn.addEventListener('click', () => {
  userGuess.value = +userGuess.value - 1;
  change(userGuess.value);
});

const change = value => {
  if (value > 0 && value <= 9) {
    subtractBtn.removeAttribute('disabled');
    addBtn.removeAttribute('disabled');
  } else if (value > 9) {
    addBtn.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractBtn.setAttribute('disabled', true);
  }
}

userGuess.addEventListener('input', function(e) {
  change(e.target.value);
});
