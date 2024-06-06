/////////////////////////
//Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE 
/**
 * - doest mutate the original array
 * - arr.slice(+Removes from the begininig, +Removes from the end)
 * - arr.slice(-Removes every thing till the end)
 * 
 */

//console.log([...arr]);


// SPLICE - mutates the original array


//console.log(arr.splice(2));

// Reverse - Reverse and mutates the original array

// console.log(arr.reverse());

// JION - Does not mutate the original array but returns 

//console.log(arr.join('-'));

//console.log(arr);


////////////////////////////
// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i, movement] of movements.entries()) {
//     if(movement > 0){
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     }else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }

// console.log('');

// movements.forEach((el, i, arr) => {
//     if (el > 0) {
//       console.log(`Movement ${i + 1}: You deposited ${el}`);
//     } else {
//       console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
//     }
// }) 


// console.log('');

// ////////////////////////////////////////
// //The map method - returns a new array

// const euroToUsd = 1.1;

// const movementUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// console.log(movementUSD);
// console.log(movements);

// ////////////////////////////////////////
// //The filter method

// const deposits = movements.filter(function (el, i, arr) {
//   return el > 0;
// })

// const withdrawals = movements.filter(el => el < 0);

// console.log(deposits);
// console.log(withdrawals);


////////////////////////////////
// The find - returns the first element found from base 0 

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);

// //Some
// const anyDeposits = movements.some(mov => mov === -130);

// console.log(anyDeposits);

// // Every 
// const deposits = movements.every((mov) => mov > 0);

// console.log(deposits);

// // flat
// const arr23 = [[1, 2, 3], [4, 5, [5.3, 5.6], 6]];

// console.log(arr23.flat());


////////////////////////////
//Sorting String 
// const owners = ['Jonas', 'Zach', 'Adam', 'Marth'];
// 
console.log(owners.sort());
// 
// const num = [1, 2, 3, 4, 5, 6, 7];
// 
// console.log(num.sort((a, b) => b - a));
// 
// 

































