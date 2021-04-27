const buttons = document.querySelectorAll('button')

let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;

function displaySelections(user, computer) {
    const playerSelection = document.querySelector('#selection-player')
    const computerSelection = document.querySelector('#selection-computer')

    if(user === heads) {
        playerSelection.style.color = 'green';
    }else if (user === tails) {
        playerSelection.style.color = 'blue';
    }
    if (computer === heads) {
        computerSelection.style.color = 'green'
    }else if (computer === tails) {
        computerSelection.style.color = 'blue'
    }

    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`

}

function displayRandom(random) {
    const displayRandom = document.querySelector('#image')
    console.log(random)

    if (random === 1) {
        displayRandom.style.backgroundImage = "url('./heads.png')"
    } else {
        displayRandom.style.backgroundImage = "url('./tails.png')"
    }
}

function tallySelections(random, userPick, computerPick) {
    const playerScore = document.querySelector('#player-score')
    const computerScores = document.querySelector('#computer-score')
    const winner = document.querySelector('#winner')

    if(userPick === random ) {
        userScore++
    }
    if(computerPick === random) {
        computerScore++
    }

    playerScore.textContent = `${userScore}`
    computerScores.textContent = `${computerScore}`

    if(userScore === 5 && computerScore === 5) {
        winner.innerHTML = `<h2>It is a tie</h2>`
    }else if (userScore === 5) {
        winner.innerHTML = `<h2>You Win !!!</h2>`
    }else if (computerScore === 5) {
        winner.innerHTML = `<h2>Computer Wins !!!</h2>`
    }
}

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const random = Math.round(Math.random());
        const computerPick = Math.round(Math.random());
        let computerSelection;
        if(computerPick === 1) {
            computerSelection = 'heads'
        }else{
            computerSelection = "tails"
        }
        console.log(computerSelection)
        
        const spin = document.querySelector('#image')
        spin.classList.add('animate')

        const userSelection = e.target.id;
        let userPick;
        if (userSelection === 'heads') {
            userPick = 1
        }else if(userSelection === 'tails') {
            userPick = 0
        }
        console.log(userSelection)

        displaySelections(userSelection, computerSelection);
        displayRandom(random)

        setTimeout(function() {
            tallySelections(random, userPick, computerPick);
            document.querySelector('#image').classList.remove('animate')
        }, 2000)
    })
})