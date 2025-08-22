// 🔵 Breakpoint: Get the "Print" button and attach event listener
var printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

// 🔵 Breakpoint: Get the "Add" button and attach event listener
var addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);

// 🔵 Breakpoint: Initialize empty list and get display area
var myList = [];
var myListArea = document.getElementById("wishList");

/**
 * 🔵 Breakpoint: Start of addTheThing()
 * Called when the user clicks the "Add" button.
 */
function addTheThing() {
    var theThing = document.getElementById("iWant");  // 🔵 Breakpoint: Get input value
    addToTheList(theThing);                           // 🔵 Breakpoint: Call to add item
    resetInput(theThing);                             // 🔵 Breakpoint: Clear input field
}

/**
 * 🔵 Breakpoint: Start of addToTheList()
 * Adds new item to array and displays it
 */
function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value); // 🔵 Breakpoint: Add item to myList array

    var newListItem = document.createElement("li");   // 🔵 Breakpoint: Create new <li>
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);              // 🔵 Breakpoint: Append to list in UI
}

/**
 * 🔵 Breakpoint: Reset input field
 * Clears the input field after adding
 */
function resetInput(inputToReset) {
    inputToReset.value = "";
}

/**
 * 🔵 Breakpoint: Start of printView()
 * Formats list and opens print dialog
 */
function printView() {
    var listPage = document.getElementById("listPage"); // 🔵 Breakpoint: Get print section
    var formArea = document.getElementById("formArea"); // 🔵 Breakpoint: Get form section

    formArea.style.display = "none";        // 🔵 Breakpoint: Hide form
    listPage.className = "print";           // 🔵 Breakpoint: Apply print class

    myListArea.innerHTML = "";              // 🔵 Breakpoint: Clear current list display
    myList.sort();                          // 🔵 Breakpoint: Sort list alphabetically

    // 🔵 Breakpoint: Loop to display sorted list
    for (var i = 0; i < myList.length; i++) {
        myListArea.innerHTML += "<li>" + myList[i] + "</li>";
    }

    window.print();                         // 🔵 Breakpoint: Trigger print dialog
}
