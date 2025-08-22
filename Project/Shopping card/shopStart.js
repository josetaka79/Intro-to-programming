// Array of item numbers
var nums = [1, 2, 3, 4];

// Array of item names
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];

// Prices for each item
var prices = [7.5, 9.5, 8.5, 7.5];

// Quantities of each item selected
var quantities = [0, 0, 0, 0];

// Total cost for each item (price × quantity)
var totals = [0.0, 0.0, 0.0, 0.0];

// Total cost for the entire order
var totalOrderAmt = 0;

/**
 * Add one item to the selected quantity
 * @param {number} x - index of the item
 */
function add_selection(x) {
    quantities[x] += 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];
    display_all();
}

/**
 * Remove one item from the selected quantity
 * @param {number} x - index of the item
 */
function remove_selection(x) {
    if (quantities[x] > 0) {
        quantities[x] -= 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        display_all();
    }
}

function checkout() {
    document.getElementById("Check Out total").innerHTML = "<p><strong>Total Order Amount: R " + totalOrderAmt.toFixed(2) + "</strong></p>";

}

/**
 * Display the entire item list, quantities, buttons, and totals
 */
function display_all() {
    var myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>Num</th><th>Item</th><th>Price (R)</th><th>Quantity</th><th>Total (R)</th><th>Add</th><th>Remove</th>";
    myTable += "</tr>";

    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + nums[i] + "</td>";
        myTable += "<td>" + items[i] + "</td>";
        myTable += "<td>" + prices[i].toFixed(2) + "</td>";
        myTable += "<td>" + quantities[i] + "</td>";
        myTable += "<td>" + totals[i].toFixed(2) + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    // myTable += "<p><strong>Total Order Amount: R " + totalOrderAmt.toFixed(2) + "</strong></p>";

    document.getElementById("demo").innerHTML = myTable;
}