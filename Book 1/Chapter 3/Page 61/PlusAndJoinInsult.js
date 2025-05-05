//version 1
undefined
var insultsWithPlus
undefined
var names= ["John", "Edith", "Joseph", "Francis"];
undefined
var surNames= ["Penn", "Nji", "Taka", "Cho", "Anucha"];
undefined
var ages= ["20","25", "35", "50", "60","65"];
undefined
var name= names[Math.floor(Math.random() * 4)];
undefined
var surName= surNames[Math.floor(Math.random() * 5)];
undefined
var age= ages[Math.floor(Math.random() * 6)];
undefined

var insultsWithPlus = "You " + name + " " + surName + " is " + age + " years old!!!";

console.log(insultsWithPlus);



VM6741:20 You Joseph Cho is 35 years old!!!
undefined


Version 2


//version 2
undefined
var insultsWithJoin
undefined
var names= ["John", "Edith", "Joseph", "Francis"];
undefined
var surNames= ["Penn", "Nji", "Taka", "Cho", "Anucha"];
undefined
var ages= ["20","25", "35", "50", "60","65"];
undefined
var name= names[Math.floor(Math.random() * 4)];
undefined
var surName= surNames[Math.floor(Math.random() * 5)];
undefined
var age= ages[Math.floor(Math.random() * 6)];
undefined

var insultsWithJoin = "You " + name + " " + surName + " is " + age + " years old!!!";

console.log(insultsWithJoin);


VM6812:20 You John Penn is 60 years old!!!
undefined
