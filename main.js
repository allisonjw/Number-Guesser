var randomNum = 0;
var minInput = document.querySelector('#min-input-field');
var maxInput = document.querySelector('#max-input-field');
var updateBtn = document.querySelector('#update-btn');
var minNum = document.querySelector('.min-number');
var maxNum = document.querySelector('.max-number');
var name1Input = document.querySelector('.name-1-input');
var name2Input = document.querySelector('.name-2-input');
var guess1Input = document.querySelector('.guess-1-input');
var guess2Input = document.querySelector('.guess-2-input');
var submitBtn = document.querySelector('.submit-guess-button');
var resetBtn = document.querySelector('#reset-button');
var clearBtn = document.querySelector('#clear-button');
var currentGuess1 = document.querySelector('#chall-number-1');
var currentGuess2 = document.querySelector('#chall-number-2');

updateBtn.addEventListener('click', setNumRange);
submitBtn.addEventListener('click', handleSubmit);

//FYI: input fields store in strings and parseInt() will turn into number

  // ****PHASE ONE***********

//update button will generate a random number from min and max range inputs and will be displayed in current range spans in paragraph

function genRanNumber(min, max) {
  var num1 = Math.ceil(min);
  var num2 = Math.floor(max);
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};

function setNumRange(event) {
  event.preventDefault();
  var minNumber = parseInt(minInput.value);
  var maxNumber = parseInt(maxInput.value);
  minNum.innerText = minNumber;
  maxNum.innerText = maxNumber;

  console.log(randomNum);
  // genRanNumber(1, 100);
  // console.log(genRanNumber(minNumber, maxNumber));
  randomNum = genRanNumber(minNumber, maxNumber);

  console.log(randomNum);
};

//name input fields can accept alpha-numeric character and guess input field can accept ONLY numeric value.
//when player hits submit button the names and current guesses will be displayed in latest 
// score(score display article).

function handleSubmit(event) {
  event.preventDefault();
  currentGuess1.innerText = parseInt(guess1Input.value);
  console.log(currentGuess1.innerText);
  currentGuess2.innerText = parseInt(guess2Input.value);
  console.log(currentGuess2.innerText);
}

//   name1Input.innerText = 
//   console.log(name1Input.value);
//   console.log(name2Input.value)
// }

function updateChallName() {

}

function updateChallGuess() {

}

//error messages should be displayed in latest score section underneath current guess
//of: "that's too high" or "that's too low". When player guesses right "BOOM" is
//displayed and new card is created in the left section

function checkGuessMessages() {

}

function displayWinnerCard() {

}


//clear button clears the 4 input fields(guesses and names) but
//does NOT reset the random number. Button is disabled if there is 
//if inputs are empty

function handleClear() {

}

//reset button will clear the game and reset the random number. If
//nothing to rest the button will be disabled.

function handleReset() {

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

