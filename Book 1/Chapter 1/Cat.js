// Define a function named drawCats that takes one argument: howManyTimes
var drawCats = function (howManyTimes) {
    // Use a for loop to repeat the following block of code 'howManyTimes' times
    for (var i = 0; i < howManyTimes; i++) {
      // Print the current loop index followed by a cat face
      console.log(i + " =^.^=");
    }
  };
  
  // Call the drawCats function with the value 10
  // This will print 10 cat faces with their corresponding index numbers
  drawCats(10); // You can change 10 to any other number to draw more or fewer cats