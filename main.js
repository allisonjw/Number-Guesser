var randomNum = null;
var minInput = document.querySelector('#min-input-field');
var maxInput = document.querySelector('#max-input-field');
var updateBtn = document.querySelector('#update-btn');
var updateMinNumHTML = document.querySelector('.min-number');
var updateMaxNumHTML = document.querySelector('.max-number');
var name1Input = document.querySelector('.name-1-input');
var name2Input = document.querySelector('.name-2-input');
var guess1Input = document.querySelector('.guess-1-input');
var guess2Input = document.querySelector('.guess-2-input');
var submitBtn = document.querySelector('.submit-guess-button');
var resetBtn = document.querySelector('#reset-button');
var clearBtn = document.querySelector('#clear-button');
var player1Name = document.querySelector('#player-1-name');
var player2Name = document.querySelector('#player-2-name');
var currentGuess1 = document.querySelector('#chall-number-1');
var currentGuess2 = document.querySelector('#chall-number-2');
var resultMsg1 = document.querySelector('.challenger-1-result-message');
var resultMsg2 = document.querySelector('.challenger-2-result-message');
var cardField = document.querySelector('.right-section');
var invalidRangeError = document.querySelector('.error-message-1');
var noName1Msg = document.querySelector('.error-message-2');
var noName2Msg = document.querySelector('.error-message-4');
var noGuess1Msg = document.querySelector('.error-message-3');
var noGuess2Msg = document.querySelector('.error-message-5');
var winner;
var loser;

updateBtn.addEventListener('click', setNumRange);
submitBtn.addEventListener('click', handleSubmit);
clearBtn.addEventListener('click', handleClear);
resetBtn.addEventListener('click', handleReset);
minInput.addEventListener('keyup', toggleUpdate);
maxInput.addEventListener('keyup', toggleUpdate);
name1Input.addEventListener('keyup', enableButtons);
name2Input.addEventListener('keyup', enableButtons);
guess1Input.addEventListener('keyup', enableButtons);
guess2Input.addEventListener('keyup', enableButtons);
cardField.addEventListener('click', deleteCard)

document.addEventListener('DOMContentLoaded', function () {
  var minNum = 1;
  var maxNum = 100;
  randomNum = genRanNumber(1, 100);
});

function genRanNumber(min, max) {
  var num1 = Math.ceil(min);
  var num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

function setNumRange(event) {
  event.preventDefault();
  var minNumber = parseInt(minInput.value);
  var maxNumber = parseInt(maxInput.value);

  if (!errorMinMaxRange()) {
    updateMinNumHTML.innerText = minNumber;
    updateMaxNumHTML.innerText = maxNumber;
    randomNum = genRanNumber(minNumber, maxNumber);
  }
};

function handleSubmit(event) {
  event.preventDefault();
  var isName1Empty = emptyName1();
  var isName2Empty = emptyName2();
  var isGuess1Empty = emptyGuess1();
  var isGuess2Empty = emptyGuess2();
  var isOutsideRange1 = outsideRangeChall1();
  var isOutsideRange2 = outsideRangeChall2();

  if (!isName1Empty && !isName2Empty && !isGuess1Empty && !isGuess2Empty && !isOutsideRange1 && !isOutsideRange2) {
    
    displayGuessMessage();
    determineWinner();
    updateHTML();
  }
  toggleClear();
  toggleReset();
}

function updateHTML() {
  currentGuess1.innerText = parseInt(guess1Input.value);
  currentGuess2.innerText = parseInt(guess2Input.value);
  player1Name.innerText = name1Input.value;
  player2Name.innerText = name2Input.value;
}

function displayGuessMessage() {
  if (parseInt(currentGuess1.value) > randomNum) {
    resultMsg1.innerText = "That's too high"; 
  } else if (parseInt(currentGuess1.value) < randomNum) {
    resultMsg1.innerText = "That's too low";
  } else {
    resultMsg1.innerText = "BOOM!";
  }

  if (parseInt(currentGuess2.value) > randomNum) {
    resultMsg2.innerText = "That's too high"; 
  } else if (parseInt(currentGuess2.value) < randomNum) {
    resultMsg2.innerText = "That's too low";
  } else {
    resultMsg2.innerText = "BOOM!";
  }
};  

function determineWinner() {
  if (parseInt(currentGuess1.value) === randomNum) {
    var winner = name1Input.value;
    var loser = name2Input.value;
    displayWinnerCard(winner, loser);
  }
  if (parseInt(currentGuess2.value) === randomNum) {
    var winner = name2Input.value;
    var loser =  name1Input.value;
    displayWinnerCard(winner, loser);
  }
}

function displayWinnerCard(winner, loser) {
  var newCard = `<article class="winner-card">
          <h4><span class="card-chall-1">${winner}</span>vs<span class="card-chall-2">${loser}</span><h4>
        <hr />
        <h3 class="winner-name">${winner}</h3>
        <p class="winner-text">Winner</p>
        <hr />
        <footer class="card-footer">
          <div><span class="winner-number-of-guesses">47 class="winner-time">1.35</span>minutes<button type="button" class="winner-close-button">X</button></div>
        </footer>  
      </article>`
      cardField.insertAdjacentHTML('afterbegin', newCard);  
};

function deleteCard(e) {
  if (e.target.className === 'winner-close-button') {
    e.target.closest('article').remove();
  }
}

function handleClear() {
  event.preventDefault();
  document.querySelector('.min-range-form').reset();
  document.querySelector('.max-range-form').reset();
  document.querySelector('.challenger-1-form').reset();
  document.querySelector('.challenger-2-form').reset();
  toggleClear();
}

function toggleClear() {
  clearBtn.disabled = !clearBtn.disabled;
}

function toggleUpdate() {
  updateBtn.disabled = false;
}

function handleReset() {
  event.preventDefault();
  document.querySelector('.min-number').innerText = '1';
  document.querySelector('.max-number').innerText = '100';
  counter = 0;
  handleClear();
  toggleReset();
  randomNum = genRanNumber(1, 100);
}
	
function toggleReset() {
  resetBtn.disabled = !resetBtn.disabled;
}

function enableButtons () {
  submitBtn.disabled = false;
  clearBtn.disabled = false;
}

function errorMinMaxRange() {
  if (minInput.value === '' || maxInput.value === '') {
    invalidRangeError.innerText = ' Please set a min and max range';
    invalidRangeError.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`);
    return true;
  }
  else if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
    invalidRangeError.innerHTML = ' Min range must be smaller than max range';
    invalidRangeError.insertAdjacentHTML('afterbegin', `<img src="images/error-icon.svg" class="error-img">`)
    minInput.classList.add('pink-error-box');
    maxInput.classList.add('pink-error-box');
    return true;
  } else { 
    invalidRangeError.innerText = "";
    minInput.classList.remove('pink-error-box');
    maxInput.classList.remove('pink-error-box');
    return false;
  }
}
 
function outsideRangeChall1 () {
  var wrongGuessInput = document.querySelector('.error-message-3');
  if (parseInt(guess1Input.value) <= minInput.value || (parseInt(guess1Input.value) >= maxInput.value)) {
    guess1Input.classList.add ('pink-error-box');
    wrongGuessInput.innerText = 'Enter a number within the current range';
    wrongGuessInput.insertAdjacentHTML('afterbegin', `<img src="images/error-icon.svg" class="error-img">`);
    return true;
  } else {
    guess1Input.classList.remove('pink-error-box');
    return false;
  }
}

function outsideRangeChall2 () {
  var wrongGuessInput = document.querySelector('.error-message-5');
  if (parseInt(guess2Input.value) <= minInput.value || (
    parseInt(guess2Input.value) >= maxInput.value)) {  
    guess2Input.classList.add ('pink-error-box');
    wrongGuessInput.innerText = 'Enter a number within the current range';
    wrongGuessInput.insertAdjacentHTML('afterbegin', `<img src="images/error-icon.svg" class="error-img">`);
    return true;
  } else {
    guess2Input.classList.remove('pink-error-box');
    return false;
  }
}

function guessNotNumber() {

}

function emptyName1() {
 if (name1Input.value === '') {
   noName1Msg.innerText = ' Please enter player name';
   noName1Msg.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`)
   name1Input.classList.add('pink-error-box');
   return true;
 } else {
   noName1Msg.innerText = "";
   name1Input.classList.remove('pink-error-box');
   return false;
  }
}

function emptyName2() {
  if (name2Input.value === '') {
   noName2Msg.innerText = ' Please enter player name';
   noName2Msg.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`)
   name2Input.classList.add('pink-error-box');
   return true;
  } else {
   noName2Msg.innerText = "";
   name2Input.classList.remove('pink-error-box');
   return false;
  }
}

function emptyGuess1() {
 if (guess1Input.value === '') {
   noGuess1Msg.innerText = ' Please enter a guess';
   noGuess1Msg.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`)
   guess1Input.classList.add('pink-error-box');
   return true;
  } else {
   noGuess1Msg.innerText = "";
   guess1Input.classList.remove('pink-error-box');
   return false;
  }
}

function emptyGuess2() {
 if (guess2Input.value === '') {
   noGuess2Msg.innerText = ' Please enter a guess';
   noGuess2Msg.insertAdjacentHTML('afterbegin', `<img src='images/error-icon.svg' class="error-img">`)
   guess2Input.classList.add('pink-error-box');
   return true;
 } else {
   noGuess2Msg.innerText = "";
   guess2Input.classList.remove('pink-error-box');
   return false;
  }
}

