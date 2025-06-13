
var people = ["Josephine", "Edith", "Ncha", "Khan", "Anucha", "Desmond"];
console.log(people);
var otherpeople = ["kate", "Mary", "Naome", "James", "Adam", "Mike"];
console.log(otherpeople);

var people = people.concat(otherpeople);
console.log(people);
 //people = people.indexOf("Naome");
 //console.log(people);
 // people = people.lastIndexOf("adam");
 // people = people.join(" # ");
 //people = people.pop();
 //people.pop();
  //people = people.push("Teddy");
 //  people.push("Teddy");
 //people = people.reverse();
  //people.shift();
   //people.unshift("Teddy");
  // people = people.slice(0,3);
  // people = people.sort();
   people.splice(1,0,"Cathy");
 console.log(people);
document.getElementById("peopleIKnow").innerHTML =  people.toString();
