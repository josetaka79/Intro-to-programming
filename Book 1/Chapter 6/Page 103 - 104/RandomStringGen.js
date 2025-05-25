 // Step 1: Define the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2: Create an empty string to store the result
var randomString = "";

// Step 3: Set the desired length of the random string
var desiredLength = 6;

// Step 4: Start a while loop that continues until the string reaches the desired length
while (randomString.length < desiredLength) {

  // Breakpoint #1: Check current length of the string
  console.log("Current randomString:", randomString);

  // Step 5: Generate a random index between 0 and alphabet.length - 1
  var randomIndex = Math.floor(Math.random() * alphabet.length);

  // Breakpoint #2: Log the random index and corresponding character
  console.log("Random index:", randomIndex, "Character:", alphabet[randomIndex]);

  // Step 6: Add the character at the random index to the result string
  randomString += alphabet[randomIndex];
}

// Step 7: Log the final generated string
console.log("Final random string:", randomString);