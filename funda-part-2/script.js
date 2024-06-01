'use strict';

const passTest = true;

if (passTest) console.log('I can go home');

///////////////////////////////////
// FNs

function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

//Function declarations
function calAge(year) {
    return 2037 - year;
}

const age = calAge(1995);

// Functional expression
const age2 = function calAge(year) {
  return 2037 - year;
};

const age3 = age2(1995);

const calAge4 = year => 2037 - year;

function yearsUntilRetirement(birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

/////////////////////////////
/**
 * Functions can call other functions
 * Can be an expression 
 * Arrow one liner fn are implicity returned
 */

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
   calculated based on the rules above (you can check out the code from first tip calculator challenge
   if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So create an array 'bills' containing the test data below.

3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.

4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

   TEST DATA: 125, 555 and 44

   HINT: 
   Remember that an array needs a value in each position, and that value can actually be the returned 
   value of a function! So you can just call a function as array values (so don't store the tip values 
   in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


//////////////////////////////////////////////////
//Introduction to objects
const jonas = {
    firstName: "jonas",
    age : 2037 - 1991
}

console.log(jonas.firstName);
console.log(jonas['age']);

const nana = {
    firstName: "Nana",
    birthYear: 1990,
    age: function () {
        console.log(this);
        return 2038 - this.birthYear;
    } 
}

console.log(nana.age());

//////////////////////////////////////////////////
// Iteration: the for loop

console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");

console.log("");

//for loop
// for(let rep = 1; rep <= 20; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

for(let rep = 1; rep <= 20; rep++) {
    
    if(rep === 10) {
        console.log('Hello world');
        continue;
    }

    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);


    if (rep === 15) {
        console.log(`Its too long`);
        break;
    }
}

console.log('');

for (let rep = 20; rep >= 0; rep--) {
  if (rep === 15) {
    console.log("Hello world");
    continue;
  }

  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);

  if (rep === 10) {
    console.log(`Its too long`);
    break;
  }
}

