// Generate a random number between 1 and 100

let randomNumber = parseInt((Math.random()*100) + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')
const lowOrHi = document.querySelector('.lowOrHi')
const p = document.createElement('p')
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    available(guess);
  })
}

function available(guess) {
  if(isNaN(guess)) {
    alert('please input a number')
  }else if(guess <= 0) {
    alert('please input a number greater than 0')
  }else if(guess > 100) {
    alert('Please input a number smaller than 100')
  }else {
    // previousGuesses.push(guess);
    displayGuesses(guess);
    if(numGuesses === 11) {
      alert(`times use out of, the right number is ${randomNumber}`);
      endGame();
    }else {
      checkGuesses(guess);
    }
  }
}

function checkGuesses(guess) {
  if(guess === randomNumber) {
    displayMessage(`You get the right answer! `)
    endGame();
  }else if(guess < randomNumber) {
    displayMessage(`Too low, Try again!`)
  }else if(guess > randomNumber) {
    displayMessage(`Too high, Try again!`)
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function displayGuesses(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button');
  p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
  startOver.appendChild(p);
  playGame = false;
  gameStart();
}

function gameStart() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function() {
    randomNumber = parseInt((Math.random() * 100) + 1)
    lowOrHi.innerHTML = '';
    guessSlot.innerHTML = '';
    userInput.removeAttribute('disabled', '');
    startOver.removeChild(p)
    numGuesses = 1;
    remaining.innerHTML = `${11 - numGuesses}`
    playGame = true;
  })
}