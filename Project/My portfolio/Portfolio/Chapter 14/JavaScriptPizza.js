// 🔵 Breakpoint: Wait for user to click the order button
// Adds a click event listener to the "placeOrder" button
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * Gets form values, calculates prices, and displays output
 */
function placeOrder() {
    // 🔵 Breakpoint: Get form values
    // Retrieve values from form inputs
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    // Log the input values for debugging
    console.log("Form input values:", { numPizzas, typePizza, deliveryCity, birthday });

    // 🔵 Breakpoint: Get the pizza price
    // Calculate total pizza price based on quantity and type
    var orderPrice = calculatePrice(numPizzas, typePizza);
    console.log("Order price:", orderPrice);

    // 🔵 Breakpoint: Get the delivery price
    // Calculate delivery fee based on city, price, and birthday
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);
    console.log("Delivery price:", deliveryPrice);

    // 🔵 Breakpoint: Create and display output
    // Generate the output HTML to display to user
    var theOutput = "<p>Thank you for your order.</p>";

    // Show free delivery message or cost
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice + "</p>";
    }

    // Show total cost of order
    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>";

    // 🔵 Breakpoint: Output to page
    // Display the result in the "displayTotal" element
    console.log("Final output HTML:", theOutput);
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * Calculates pizza price
 * @param {number} numPizzas - The number of pizzas ordered
 * @param {string} typePizza - The type of pizza ordered
 * @returns {number} - The total price for the pizza order
 */
function calculatePrice(numPizzas, typePizza) {
    console.log("Calculating price for:", numPizzas, typePizza);
    
    // Base price: $10 per pizza
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // 🔵 Breakpoint: Determine extra charge based on pizza type
    // Add extra cost based on pizza type
    if (typePizza.toLowerCase() === "supreme") {
        extraCharge = Number(numPizzas) * 2; // $2 extra per pizza
    } else if (typePizza.toLowerCase() === "meaty") {
        extraCharge = Number(numPizzas) * 4; // $4 extra per pizza
    }

    // Add extra charge to total price
    orderPrice += extraCharge;
    console.log("Total pizza price (with extras):", orderPrice);
    return orderPrice;
}

/**
 * Calculates delivery price
 * @param {number} orderPrice - The price of the pizza order
 * @param {string} deliveryCity - The city for delivery
 * @param {string} birthday - Whether it's the customer's birthday
 * @returns {number} - The delivery cost
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    console.log("Calculating delivery with:", orderPrice, deliveryCity, birthday);

    var deliveryPrice = 0;

    // 🔵 Breakpoint: Delivery logic
    // Free delivery if:
    // - City is "Anytown" and order is over $10
    // - OR it's the user's birthday
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday.toLowerCase() === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5; // Flat $5 delivery otherwise
    }

    console.log("Final delivery price:", deliveryPrice);
    return deliveryPrice;
}