// 🔵 Breakpoint: Declare days of the week
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];  // Array of weekdays

// 🔵 Breakpoint: Declare possible weather conditions
var weather = [
  "Sunny", "Partly Sunny", "Partly Cloudy",
  "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"
];  // Array of possible weather types

// 🔵 Breakpoint: Set temperature range
var maxTemp = 100;  // Maximum possible temperature
var minTemp = 0;    // Minimum possible temperature

// 🔵 Breakpoint: Start generating weather forecast
generateWeather();  // Call the function to display the forecast

// 🔵 Breakpoint: Define the function that generates weather
function generateWeather() {
  for (var i = 0; i < days.length; i++) {

    // 🔵 Breakpoint: Select random weather for the day
    var weatherToday = weather[Math.floor(Math.random() * weather.length)];
    // debugger;

    // 🔵 Breakpoint: Generate random temperature within the range
    var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    // debugger;

    // 🔵 Breakpoint: Add the weather info to the web page
    document.getElementById("5DayWeather").innerHTML += 
      "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + 
      days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + 
      " degrees.</div>";
  }
}