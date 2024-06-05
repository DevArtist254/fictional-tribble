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

for(const [i, movement] of movements.entries()) {
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('');

movements.forEach((el, i, arr) => {
    if (el > 0) {
      console.log(`Movement ${i + 1}: You deposited ${el}`);
    } else {
      console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
    }
}) 














































