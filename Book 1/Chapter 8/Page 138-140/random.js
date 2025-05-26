// 1. Pick a random word from a list
var pickWord = function () {
    var words = ["javascript", "monkey", "amazing", "pancake", "hangman"];
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

// 2. Setup the answer array with underscores
var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

// 3. Show the player's current progress
var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

// 4. Get a guess from the player
var getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.");
};

// 5. Update the game state and return number of correct guesses
var updateGameState = function (guess, word, answerArray) {
    var correctGuesses = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            correctGuesses++;
        }
    }
    return correctGuesses;
};

// 6. Show the final answer and congratulate the player
var showAnswerAndCongratulatePlayer = function (answerArray) {
    alert("Good job! The answer was: " + answerArray.join(""));
};

// --------------------
// Main game loop
// --------------------

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess.toLowerCase(), word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);