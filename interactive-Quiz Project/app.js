var questions = [
  {
      question: 'What is the baby of a moth known as?',
      choices: ['baby', 'infant', 'kit', 'larva'],
      correctAnswer: 3
  },
  {
      question: 'What is the adult of a kid called?',
      choices: ['calf', 'doe', 'goat', 'chick'],
      correctAnswer: 2
  },
  {
      question: 'What is the young of buffalo called?',
      choices: ['calf', 'baby', 'pup', 'cow'],
      correctAnswer: 0
  },
  {
      question: 'What is a baby alligator called?',
      choices: ['baby', 'gator', 'hatchling', 'calf'],
      correctAnswer: 1
  },
  {
      question: 'What is a baby goose called?',
      choices: ['gooser', 'gosling', 'gup', 'pup'],
      correctAnswer: 1
  }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function() {
  displayQuestion();
  var quizMessage = document.querySelector('.quizMessage');
  quizMessage.style.display = 'none';
  var nextBtn = document.querySelector('.nextButton');
  nextBtn.addEventListener('click', function(e) {
    // console.log('1');
    
     

    if(!quizOver) {
      var btnChecked = document.querySelector('input[type=radio]:checked');
      if(btnChecked === null) {
        quizMessage.innerHTML = 'Please choose an answer';
        quizMessage.style.display = 'block';
      }else {
        // console.log(btnChecked.value);
      if(parseInt(btnChecked.value) === questions[currentQuestion].correctAnswer) {
        quizMessage.style.display = 'none';
        correctAnswers++;
        // console.log(correctAnswers);
      }
      currentQuestion++;
      if(currentQuestion < questions.length) {
        displayQuestion();
      }else {
        quizOver = true;
        displayScore();
        nextBtn.innerHTML = 'Play Again?'
      }
      } 
    }else {
      quizOver = false;
      resetQuiz();
      displayQuestion();
    }
  })
})

function displayQuestion() {
  var questionList = document.querySelector('.quizContainer > .question');
  var question = questions[currentQuestion].question;
  var choiceList = document.querySelector('.quizContainer > .choiceList');
  var numchoice = questions[currentQuestion].choices.length;

  questionList.innerHTML = question;
  choiceList.innerHTML = '';

  var choice;
  for(let i = 0; i < numchoice; i++) {
    choice = questions[currentQuestion].choices[i];
    var li = document.createElement('li');
        li.innerHTML = '<li><input type="radio" value="' + i + '"name="dynradio" />' + choice + '</li>'
    choiceList.appendChild(li);
  }
}

function displayScore() {
  var result = document.querySelector('.result');
  result.style.display = 'block';
  result.innerHTML = 'You Score: ' + correctAnswers + ' out of ' + questions.length;
}

function resetQuiz() {
  correctAnswers = 0;
  currentQuestion = 0;
  hideScore();
}

function hideScore() {
  document.querySelector('.result').style.display = 'none'
}