var randomNum = null;
var minNum = 1
var maxNum = 100
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

minInput.focus();

updateBtn.addEventListener('click', setNumRange);
submitBtn.addEventListener('click', handleSubmit);
clearBtn.addEventListener('click', handleClear);
resetBtn.addEventListener('click', handleReset);
name1Input.addEventListener('keyup', enableClear);
name2Input.addEventListener('keyup', enableClear);
guess1Input.addEventListener('keyup', enableClear);
guess2Input.addEventListener('keyup', enableClear);

//FYI: input fields store in strings and parseInt() will turn into number

// ****PHASE ONE***********


//function declaration that generates a random number

function genRanNumber(min, max) {
  var num1 = Math.ceil(min);
  var num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

//places the values received in the min and max range inputs into the paragraph text in the second card, also reassigns the random number generated to randomNum

function setNumRange(event) {
  event.preventDefault();
  var minNumber = parseInt(minInput.value);
  var maxNumber = parseInt(maxInput.value);
  updateMinNumHTML.innerText = minNumber;
  updateMaxNumHTML.innerText = maxNumber;

  console.log(randomNum);
  // genRanNumber(1, 100);
  // console.log(genRanNumber(minNumber, maxNumber));
  randomNum = genRanNumber(minNumber, maxNumber);

  // console.log(randomNum);
};

//name input fields can accept alpha-numeric character and guess input field can accept ONLY numeric value.
//when player hits submit button the names and current guesses will be displayed in latest 
// score(score display article).

//places the values of the player's guesses into the current guess spot on the third card, also invokes the function displayGuessMessage

function handleSubmit(event) {
  event.preventDefault();
  currentGuess1.innerText = parseInt(guess1Input.value);
  currentGuess2.innerText = parseInt(guess2Input.value);
  player1Name.innerText = name1Input.value;
  player2Name.innerText = name2Input.value;
  name1Input.innerText = parseInt(guess2Input.value);
  displayGuessMessage();
  resetBtn.disabled = false;
  clearBtn.disabled = false;
}

function updateChallName() {

}

function updateChallGuess() {

}

//conditional logic that compares the numeric values of the current guesses to the random number generated and then populates the 'too high', 'too low', 'BOOM!' message on the third card, also needs to invoke the function to create the winning card on the right

function displayGuessMessage() {
  if (parseInt(currentGuess1.value) > randomNum) {
    resultMsg1.innerText = "That's too high"; 
  } else if (parseInt(currentGuess1.value) < randomNum) {
    resultMsg1.innerText = "That's too low";
  } else {
    resultMsg1.innerText = "BOOM!";
    //function to populate card here
  }

  if (parseInt(currentGuess2.value) > randomNum) {
    resultMsg2.innerText = "That's too high"; 
  } else if (parseInt(currentGuess2.value) < randomNum) {
    resultMsg2.innerText = "That's too low";
  } else {
    resultMsg2.innerText = "BOOM!";
    //function to populate card here
  }
};  

function checkGuessMessages() {

}

function displayWinnerCard() {

}


//clear button clears the 4 input fields (guesses and names) but does NOT reset the random number - button is disabled if there are no values in the form fields

function handleClear() {
  event.preventDefault();
  document.querySelector('.challenger-1-form').reset();
  document.querySelector('.challenger-2-form').reset();
  disableClear();
}

function disableClear() {
  clearBtn.disabled = true;
}

function enableClear() {
  clearBtn.disabled = false;
}

//reset button will clear the game and reset the random number - button is disabled if there are no values to reset in the form fields

function handleReset() {
  event.preventDefault();
  document.querySelector('.min-range-form').reset();
  document.querySelector('.max-range-form').reset();
  document.querySelector('.challenger-1-form').reset();
  document.querySelector('.challenger-2-form').reset();
  document.querySelector('.min-number').innerText = '1';
  document.querySelector('.max-number').innerText = '100';
  disableReset();
  randomNum = genRanNumber(1, 100);
}
	
function disableReset() {
  resetBtn.disabled = true;
}

function checkform() {
  var f = document.forms["theform"].elements;
  var canreset = true;
  for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
}
  if (canreset) {
    document.getElementById('resetBtn').disabled = false;
    }
  else {
    document.getElementById('resetBtn').disabled = 'disabled';
    }
}

function disableButtons() {

}
  // ****PHASE TWO***********

//if the update button is clicked and either the min or max range input is left blank a pink error 
//message will be displayed. Messge will be under input box of "please set a min and max range" with 
// the error icon
function errorEmptyRange() {

}


//if guessed number in not within defined min/max range when submit button is clicked
//a pink error message should be diplayed under input box of "guess is higher than range" or "guess 
// is lower than range" 
function errorGuessTooHigh() {

}

function errorGuessTooLow() {

}

//if submit button is clicked and name is blank a pink error message of "please enter player name!"
//will be displayed under input box

function errorEmptyName() {

}

