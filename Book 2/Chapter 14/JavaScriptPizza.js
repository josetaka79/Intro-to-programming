 // 🔵 Breakpoint: Wait for user to click the order button
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * Gets form values, calculates prices, and displays output
 */
function placeOrder() {
    // 🔵 Breakpoint: Get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    console.log("Form input values:", { numPizzas, typePizza, deliveryCity, birthday });

    // 🔵 Breakpoint: Get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);
    console.log("Order price:", orderPrice);

    // 🔵 Breakpoint: Get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);
    console.log("Delivery price:", deliveryPrice);

    // 🔵 Breakpoint: Create and display output
    var theOutput = "<p>Thank you for your order.</p>";

    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: $" + deliveryPrice + "</p>"; // ✅ FIX: close <p> tag
    }

    theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice) + "</p>"; // ✅ FIX: close <p> tag

    // 🔵 Breakpoint: Output to page
    console.log("Final output HTML:", theOutput);
    document.getElementById("displayTotal").innerHTML = theOutput;
}

/**
 * Calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {
    console.log("Calculating price for:", numPizzas, typePizza);
    
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    // 🔵 Breakpoint: Determine extra charge based on pizza type
    if (typePizza.toLowerCase() === "supreme") {
        extraCharge = Number(numPizzas) * 2;
    } else if (typePizza.toLowerCase() === "meaty") {
        extraCharge = Number(numPizzas) * 4;
    }

    orderPrice += extraCharge;
    console.log("Total pizza price (with extras):", orderPrice);
    return orderPrice;
}

/**
 * Calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    console.log("Calculating delivery with:", orderPrice, deliveryCity, birthday);

    var deliveryPrice = 0;

    // 🔵 Breakpoint: Delivery logic
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday.toLowerCase() === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    console.log("Final delivery price:", deliveryPrice);
    return deliveryPrice;
}