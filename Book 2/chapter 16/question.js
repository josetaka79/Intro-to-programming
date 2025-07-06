 // 🔸 Declare variables to connect HTML elements to JavaScript
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

// 🔸 Create an array to store user answers
var answers = [];

// 🔸 Add an event listener to run getAnswer() when submit button is clicked
submit.addEventListener("click", getAnswer);

// 🔸 Start the story by asking the first question (index 0)
askQuestion(0);

/**
 * 🔸 askQuestion(questionNumber)
 * Displays a question based on the question number
 */
function askQuestion(questionNumber) {
    // Make the answer input box visible
    answer.style.display = "block";

    // Reset the array length to match the question number
    answers.length = questionNumber;

    // Display different questions based on current step
    switch (questionNumber) {
        case 0:
            question.innerHTML = "Are you ready to play?";
            break;
        case 1:
            question.innerHTML = "Go to Mars, or stay home?";
            break;
        case 2:
            question.innerHTML = "Risk it, or go home.";
            break;
        default:
            break;
    }
}

/**
 * 🔸 getAnswer()
 * Takes input from the user, stores it in the answers array,
 * then clears the input field and continues the story
 */
function getAnswer() {
    // Convert input to uppercase for easier comparison
    cleanInput = yourAnswer.value.toUpperCase();

    // Store the input in the answers array
    answers.push(cleanInput);

    // Clear the input field
    yourAnswer.value = "";

    // Move to the next step in the story
    continueStory(answers.length - 1);
}

/**
 * 🔸 continueStory(answerNumber)
 * Displays a part of the story or an error message based on user input
 */
function continueStory(answerNumber) {
    switch (answerNumber) {
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0); // Ask again if user says NO
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0); // Invalid input
            }
            break;
        case 1:
            if (answers[1] === "GO TO MARS") {
                story.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2);
            } else if (answers[1] === "STAY HOME") {
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd(); // End story
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1); // Invalid input
            }
            break;
        case 2:
            if (answers[2] === "RISK IT") {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd();
            } else if (answers[2] === "GO HOME") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2); // Invalid input
            }
            break;
        default:
            story.innerHTML = "The story is over!";
            break;
    }
}

/**
 * 🔸 theEnd()
 * Finalizes the story and hides the input fields
 */
function theEnd() {
    story.innerHTML += "<p>The End.</p>"; // Add ending text
    question.innerHTML = "";              // Clear question area
    answer.style.display = "none";        // Hide answer input box
}