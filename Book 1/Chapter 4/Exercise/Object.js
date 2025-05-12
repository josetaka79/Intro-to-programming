//1. Defining an Object:
const person = { 
    name: 'Alice',               // key-value pair
    age: 30,
    country: 'Canada',
    'favorite color' : 'blue',    // key with a space requires quotes
    isStudent: false
}; 

//2. Accessing Object Values:
const name = person.name;
console.log("Name:", name);

//3. Retrieving All Keys from an Object:
const keys = Object.keys(person);
console.log("keys:", keys);

//4. Adding New key-value pairs:
// key with special charcters or spaces
person['occupation'] = 'Engineer';
console.log("Person-Object:", person);

//5. Update the value of 'age'
person.age=20;
console.log("Person-Age:",person.age);

//6. Adding keys with numbers or special characters requires quotes:
person['1stLanguage']='English';
console.log("Person-1stLanguage:", person['1stLanguage'];)

person['email-address'] = 'alice@example.com';
console.log("person-email:", person['email-address']);
console.log("Person-Object:", person);