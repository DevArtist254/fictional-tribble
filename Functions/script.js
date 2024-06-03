'use strict';

///////////////////////////////////
// //Default parameters
// const bookings = [];

// const createBookings = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ) {
//     // Es5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     //console.log(booking);

//     bookings.push(booking);
// }


// createBookings('LH123');
// createBookings('KD254', 2, 800);
// createBookings('PG23', 2);
// createBookings('JF546', 6);

// console.log(bookings);

//////////////////////////////////////////
// How passing arguments works: Values vs Refs

// const flight = 'LH234';
// const jonas = {
//     name: 'Kevin wasonga',
//     passport: 23425366
// }

// const checkIn = function (flightNum, passengers) {
//     flightNum = 'LH999';
//     passengers.name = 'Mr. ' + passengers.name;

//     if (passengers.passport === 23425366) {
//         console.log("CHECKED IN");
//     } else {
//         console.log("WRONG PASSPORT!");
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person) {
//     person.passport = 908327092610;
// }

// newPassport(jonas);
// checkIn(flight, jonas);

/////////////////////////////////////////////
// Functions accepting callback functions


// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function(str, fn){

//     console.log(`Original string: ${str}`);
//     console.log(`Transformer string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);

// console.log('');

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//     console.log('Hello world');
// }

//['a','b','c'].forEach(high5);

///////////////////////////////////////////
// //Fn returning fns
// const greet = function name(greet) {
//     greet += 10;

//     return function (name) {
//         console.log(`${greet} ${name}`);
//     }
// }

// greet(10)('hello');
// greet(20)("world");


////////////////////////////////////////////////////
// Fn as obj with an undefined this pointing towards the right obj 
// Use call, apply and bind

// const lufthansa = {
//     airline: 'Luthansa',
//     iataCode: 'LH',
//     bookings: []
// }




// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// //Call
// const book = function(flightNum, fname){
//         console.log(
//             `${fname} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );

//         this.bookings.push({
//           flight: `${this.iataCode}${flightNum}`,
//           fname,
//         });
//     };

// book.call(lufthansa, 234, "Jonas Sch");
// book.call(lufthansa, 254, "Kevin wasonga");
// book.call(eurowings, 267, "Sarah K");

// const flightData = [583, "Mary cooper"];
// book.apply(swiss, flightData);

// const bookLX = book.bind(swiss);
// bookLX(2342, "Elijah Weas")

// console.log(lufthansa.bookings);
// console.log(eurowings.bookings);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/























































