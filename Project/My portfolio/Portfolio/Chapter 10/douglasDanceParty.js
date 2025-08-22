// Get the button element and attach a click event listener
var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

// Function to run when the button is clicked
function replaceIt() {
    // 📍 BREAKPOINT: Start of function execution
    var storyDiv = document.getElementById("story");

    // Get all input values and wrap them in a span for styling
    var adj1 = "<span class='replacement'>" + document.getElementById("adj1").value + "</span>";
    var verbIng = "<span class='replacement'>" + document.getElementById("verbIng").value + "</span>";
    var roomInHouse = "<span class='replacement'>" + document.getElementById("roomInHouse").value + "</span>";
    var color = "<span class='replacement'>" + document.getElementById("color").value + "</span>";
    var nounPlural = "<span class='replacement'>" + document.getElementById("nounPlural").value + "</span>";
    var pastVerb = "<span class='replacement'>" + document.getElementById("pastVerb").value + "</span>";
    var beverage = "<span class='replacement'>" + document.getElementById("beverage").value + "</span>";
    var musicType = "<span class='replacement'>" + document.getElementById("musicType").value + "</span>";
    var diffRoom = "<span class='replacement'>" + document.getElementById("diffRoom").value + "</span>";
    var exclamation = "<span class='replacement'>" + document.getElementById("exclamation").value + "</span>";
    var pastVerb2 = "<span class='replacement'>" + document.getElementById("pastVerb2").value + "</span>";
    var adjDance = "<span class='replacement'>" + document.getElementById("adjDance").value + "</span>";
    var animal = "<span class='replacement'>" + document.getElementById("animal").value + "</span>";
    var city = "<span class='replacement'>" + document.getElementById("city").value + "</span>";
    var verb = "<span class='replacement'>" + document.getElementById("verb").value + "</span>";

    // 📍 BREAKPOINT: Check if inputs were retrieved correctly
    console.log("Inputs collected:", { adj1, verbIng, roomInHouse });

    // Build the story using the collected inputs
    var theStory = "<h1>Douglas's Dance Party</h1>";
    theStory += "One " + adj1 + " day, ";
    theStory += "Douglas was " + verbIng;
    theStory += " in his " + roomInHouse;
    theStory += ", reading a book about " + color + " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb + " his " + beverage;
    theStory += ", he heard " + musicType + " music playing in the " + diffRoom + ".<br><br>";
    theStory += exclamation + "! he exclaimed, as he ";
    theStory += pastVerb2 + " down the stairs to join the " + adjDance + " party.<br><br>";
    theStory += "Douglas danced the " + animal;
    theStory += " Dance, the " + city + " Shake,";
    theStory += " and took the prize for dancing the best Electric " + verb + ".<br><br>";

    // 📍 BREAKPOINT: Final story output
    console.log("Final story:", theStory);

    // Display the final story
    storyDiv.innerHTML = theStory;
}