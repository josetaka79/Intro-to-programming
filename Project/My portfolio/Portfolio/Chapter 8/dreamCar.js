// 🔵 Breakpoint: Create an object representing the dream car with properties
var dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
};

// 🔵 Breakpoint: Alert the type of dreamCar (should be 'object')
alert("The type of dreamCar is: " + typeof dreamCar);

// 🔵 Breakpoint: Display the price of the dream car inside the element with id 'pricetag'
document.getElementById("pricetag").innerHTML = dreamCar.price;

// 🔵 Breakpoint: Display the year of the dream car inside the element with id 'modelyear'
document.getElementById("modelyear").innerHTML = dreamCar.year;

// 🔵 Breakpoint: Set the background color of the element with id 'body' to the car's color
document.getElementById("body").style.backgroundColor = dreamCar.color;

// 🔵 Breakpoint: Display the car's make and model inside the element with id 'body'
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

// 🔵 Breakpoint: Set the background color of the element with id 'frontwheel' to bright green
document.getElementById("frontwheel").style.backgroundColor = "#7FFF00";
