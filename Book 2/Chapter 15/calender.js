// 🔵 Breakpoint: Get today's date element
var todayDate = document.getElementById("todaysdate");

// 🔵 Breakpoint: Get the button to check what to do
var todoButton = document.getElementById("whattodo");

// 🔵 Breakpoint: Add a click listener to the button
todoButton.addEventListener("click", displayActivity);

// 🔵 Breakpoint: Create a new Date object
var d = new Date();

// 🔵 Breakpoint: Display today's date on page load
displayDate();

/**
 * 🔵 Breakpoint: Start of displayDate()
 * Displays the current date in the "todaysdate" element
 */
function displayDate() {
    todayDate.innerHTML = d.toDateString(); // ✍️ Convert date to a readable string
}

/**
 * 🔵 Breakpoint: Start of displayActivity()
 * Suggests an activity based on the current day of the week
 */
function displayActivity() {
    // 🔵 Breakpoint: Get day of the week (0 = Sunday, 6 = Saturday)
    var dayOfweek = d.getDay();

    // 🔵 Breakpoint: Declare message variable
    var youshould;

    // 🔵 Breakpoint: Set message based on the day
    switch (dayOfweek) {
        case 0: // Sunday
            youshould = "Take it easy. You've earned it.";
            break;
        case 1: // Monday
            youshould = "Gotta do what ya gotta do!";
            break;
        case 2: // Tuesday
            youshould = "Take time to smell the roses!";
            break;
        case 3: // Wednesday
            youshould = "Don't forget to eat breakfast!";
            break;
        case 4: // Thursday
            youshould = "Learn something new today!";
            break;
        case 5: // Friday
            youshould = "Make a list of things you like to do.";             break;
        case 6: // Saturday
            youshould = "Relax — it's the weekend!";
            break;
        default:
            youshould = "Hmm. something has gone wrong.";
            break;
    }

    // 🔵 Breakpoint: Display the activity suggestion
    document.getElementById("thingToDo").innerHTML = youshould;
}
