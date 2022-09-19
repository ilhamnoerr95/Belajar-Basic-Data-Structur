/*
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
*/

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
total = total + 2;
total = total + 3;
total += 4;
total += 5;
total += 6;


console.log(total)

// for (var i = 0; i < myArr.length; i++) {
//   console.log(myArr[i])
//   // console.log(total += myArr[i])
// }

// console.log(myArr.length);


// * NESTING FOR LOOPS

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
/*
    ----------------------------------------
 */ 
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
      for(let i = 0; i< arr.length; i++){
            let data = arr[i]
            // console.log(arr[i])
          for(let j=0; j< data.length; j++){
            let dataso = data[j]
            // console.log(dataso)
            // return dataso
            // product += dataso
            product = product * dataso
          }
      }
    // Only change code above this line
    console.log(product)
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*
    REPLACE LOOPS USING RECURSION
    SEMUA KONDISI RECURSIVE MEMBUTUHKAN KONDISI UTAMA SEHINGGA FUNGSI AKAN BERHENTI

*/

function sum(arr, n) {

  // Only change code below this line
 if (n <= 0) {
      return 1;
    } else {
      /*
      However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. 
      That means you can rewrite multiply in terms of itself and never need to use a loop.
      */
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}

console.log(sum([2, 3, 4, 5], 3))


/**
 * //* CARA PERHITUGAN RECURISVE
 * sum([2,3,4]2)
 * [ 2, 3, 4 ]1 + 3 'arr[n-1] indeks 1'
 * [ 2, 3, 4 ]0 + (3 + 2) 'arr[n-1] indeks 0'
 * 2 + 5 = 7
 */

// RECURSIVE AGAIN
// SOLUTION 1
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// SOLUTION 2


function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

// SOLUTION 3

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}


// SOLUTION 4

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

countdown(10)