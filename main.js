var minInput = document.getElementById('min-input-field');
var maxInput = document.getElementById('max-input-field');
var updateBtn = document.getElementById('update-button');
var minNum = document.querySelector('.min-number');
var maxNum = document.querySelector('.max-number');
var name1Input = document.getElementById('name-1-input');
var name2Input = document.getElementById('name-2-input');
var guess1Input = document.getElementById('guess-1-input');
var guess2Input = document.getElementById('guess-2-input');
var submitBtn = document.getElementById('submit-guess-button')
var resetBtn = document.getElementById('reset-button');
var clearBtn = document.getElementById('clear-button');

updateBtn.addEventListener('click', setNumRange);
updateBtn.addEventListener('click', genRanNumber);

//FYI: input fields store in strings and pareseInt() will turn into number

  // ****PHASE ONE***********

//update button will generate a random number from min and max range inputs and will
//be displayed displayed in current range spans in paragraph

function genRanNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max- min + 1)) + min;
console.log(getRanNumber(3, 5));
};

function setNumRange() {
	minNum.innerText = parseInt(minInput.value);
	maxNum.innerText = parseInt(maxInput.value);
}

//name input fields can accept alpha-numeric character and guess input field can accept ONLY numeric value.
//when player hits submit button the names and current guesses will be displayed in latest 
// score(score display article).

function handleSubmit() {

}

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

