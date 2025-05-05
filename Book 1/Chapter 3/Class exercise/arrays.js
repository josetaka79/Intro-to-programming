//1.creating array

var fruits = ['apple', 'banana', 'cherry'];

//2. Indexing:
//Each item in an array is assigned a position number(index)
//Starting from 0
console.log("value:", fruits[0]);

//3. Changing Elements:
//Update an array items by specifying its index and setting a new value
    fruits[1]='blueberry';
    console.log("new value:",fruits);

//4. Mixing Data Types and getting value 2:
var mixedArray = [42, 'hello', true, {name: 'John'}, [1,2,3]];
    console.log("value:", mixedArray[4][1]);

//5. Finding Length    
 console.log("Fruits Length:", fruits.length);

 //6. Adding Elements: Append new items to the end of the array.
    fruits.push('date');
    console.log("After-appending:", fruits);

//7. Removing Elements:
//Remove items from the end or a specific position in the array.
console.log(fruits.pop());
console.log("After-pop:", fruits);

//8. Joining Arrays:
var allFruits = fruits.concat(mixedArray);
console.log("concat:",allFruits);

//9. Finding Index:
console.log("Index-of:", fruits.indexOf('cherry'));

//10. Turning into a string:
// convert the array into a single string with elements separated by a comma.
var fruitString = fruits.join(',');
console.log("converted:",fruitString);

//11. Building with: Add new items to the end of the array.
var numbers = [];
numbers.push(1,2,3);
console.log("Numbers Array:",numbers);

//12. Adding to the beginning of the array:
numbers.unshift(8);
console.log("Added:",numbers);
