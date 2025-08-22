// Declare a variable to store the secret number
let secret;

// Initialize the game when the page loads
function initGame() {
    // Generate a random number between 1 and 20
    secret = Math.floor(Math.random() * 20) + 1;

    // Clear the previous message and input
    document.getElementById("message").textContent = " ";
    document.getElementById("userGuess").value = " ";
}

// Function to check the user's guess
function checkGuess() {
    // Get the user's input and convert to integer
    const guess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");

    // Check if input is invalid or out of range
    if (isNaN(guess) || guess < 1 || guess > 20) {
        message.textContent = " Please enter a number between 1 and 20.";
        message.className = "fail";
        return;
    }

    // Check if the guess is correct
    if (guess === secret) {
        message.textContent = "🎉 Correct Guess!";
        message.className = "success";
    }
    // If guess is too low
    else if (guess < secret) {
        message.textContent = "❌ Too low. Try again.";
        message.className = "fail";
    }
    // If guess is too high
    else {
        message.textContent = "❌ Too high. Try again.";
        message.className = "fail";
    }
}