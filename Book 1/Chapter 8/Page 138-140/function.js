// Function to add two numbers
    function add(a, b) {
      return a + b;
    }

    // Function to multiply two numbers
    function multiply(a, b) {
      return a * b;
    }

    // Now use these to solve: 36325 * 9824 + 777
    const product = multiply(36325, 9824);   // First part: multiplication
    const result = add(product, 777);        // Second part: addition

    // Output the result
    console.log("Result:", result);
    alert("The result is: " + result);
  