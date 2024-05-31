// /* Linking a JS file */

// //String sequence of char to be used in a string
// let js = "amazing";

// //Ability to do Math with intergers and decimals
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// // Values and variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName.toLowerCase());
// console.log(firstName);

// // Naming conventions
// let kevin_wasonga = "JM";
// let $fn = 27;

// let person = "Muruka";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// //Data types

// let jsIsFun = true;
// let year;

// console.log(typeof jsIsFun); //boolean
// console.log(typeof 23); // number - floating point number
// console.log(typeof "Jonas"); //string

// console.log(year); //variable with on value

// year = 1991;
// console.log(year);

// console.log(typeof null); // an empty object instance


// //Basic math operators
// const now = 2037;
// const ageKev = now - 1991;

// // 2 ** 3 means 2 to the power of 3

// console.log(job1 + ' ' + job2); // + joins other operators

// let x = 10 + 5; // 15
// x += 10; //x = x + 10 (25)
// x *= 4; // x = x * 4 (100)

// x++; // x = x + 1;
// x--;
// x--;

// console.log(x);

// // Comparison operator
// console.log(now < ageKev);

// const isFullAge = now >= ageKev;

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using 
the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//1. Store Mark's and John's mass and height in variables

/*

const mark1 = {
    weight : 78,
    tall: 1.69,
}


const john1 = {
  weight: 92,
  tall: 1.95,
};

const mark2 = {
  weight: 95,
  tall: 1.88,
};

const john2 = {
  weight: 85,
  tall: 1.76,
};


function hasHigherBMI(john, mark) {
    let johnBMI = john.weight / (john.tall * john.tall);
    let markBMI = mark.weight / (mark.tall * mark.tall);
    

    let message = "";

    if (johnBMI > markBMI) {
      message = "John has a higher BMI count"
    } else if (johnBMI < markBMI) {
      message = "Mark has a higher BMI count"
    }

    return message;
}

console.log(hasHigherBMI(john1, mark1));
console.log(hasHigherBMI(john2, mark2));

*/

///////////////////////////////////////////////
// Strings & template literals

// const firstName = "Kevin";
// const job1 = "teacher";
// const birthYear = 1995;


// const kev = `I'm ${firstName}, a ${birthYear} job ${job1}`;

// ////////////////////////////////////////
// //Making Decisions: if / else statement

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving a car");
// } else {
//   console.log("Sarah can start driving a car");
// }

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// const mark1 = {
//   weight: 78,
//   tall: 1.69,
// };

// const john1 = {
//   weight: 92,
//   tall: 1.95,
// };

// const mark2 = {
//   weight: 95,
//   tall: 1.88,
// };

// const john2 = {
//   weight: 85,
//   tall: 1.76,
// };

// function hasHigherBMI(john, mark) {
//   let johnBMI = john.weight / (john.tall * john.tall);
//   let markBMI = mark.weight / (mark.tall * mark.tall);

//   let message = "";

//   if (johnBMI > markBMI) {
//     message = `John has a higher BMI count ${johnBMI}'s`;
//   } else if (johnBMI < markBMI) {
//     message = `Mark has a higher BMI count at ${markBMI}'s`;
//   }

//   return message;
// }

// console.log(hasHigherBMI(john1, mark1));
// console.log(hasHigherBMI(john2, mark2));


// //////////////////////////////////////////////////
// //Type Conversion and coercion


// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);


// ////////////////////////////////////////////////
// //Truthy & falsy values

// // 5 falsy values: 0, '', undefined, null, NaN

// console.log('');

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(null));

// //////////////////////////////////
// //Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// //All should be true

// if (hasDriversLicense & hasDriversLicense & !isTired) {
//   console.log("The person is able to drive");
// } 

// if (hasDriversLicense & hasDriversLicense & isTired) {
//   console.log("Some one else should drive");
// }

// //Looking for one truth

// if (hasDriversLicense || hasGoodVision) {
//   console.log("Should be one on the road");
// }


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with
 the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
 Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher
 score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test 
 for minimum score, as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and
 both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphinsTest1 = [96, 108, 89];
// const kolalasTest1 = [88, 91, 110];

// const dolphinsTest2 = [97, 112, 101];
// const kolalasTest2 = [109, 95, 123];

// const dolphinsTest3 = [97, 112, 101];
// const kolalasTest3 = [109, 95, 106];

// function averageScore(arr) {

//   let sum = 0;

//   for(let i = 0;i <= arr.length - 1;i++){
//     const el = arr[i];

//     sum += el;
//   }

//   return sum / arr.length;
// }


// function whoWon (dt, kt){
//   if ((dt > 100) & (dt != kt)) {
//     console.log("The dolphins have won it!!");
//   } else if ((kt > 100) & (kt != dt)) {
//     console.log("The koalas have won it!!");
//   } else if (kt === dt) {
//     console.log("It's a draw");
//   } else {
//     console.log("Nobody won!!");
//   }
// }

// whoWon(averageScore(dolphinsTest1), averageScore(kolalasTest1));
// whoWon(averageScore(dolphinsTest2), averageScore(kolalasTest2));
// whoWon(averageScore(dolphinsTest3), averageScore(kolalasTest3));


/////////////////////////////////////////////////
// The switch statement

const day = 'friday';

switch(day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to a coding meeting');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'thursday':
  case 'friday':
    console.log("Record videos");
    break;
  default:
    console.log('Not a valid day');
}


console.log('');
//Strings need expression to be built 

let age = 21;

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, 
it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. 
   It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
   and then try to convert it to a ternary operator!)
   
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
   Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


























