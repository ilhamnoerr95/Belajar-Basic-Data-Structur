// let coba = document.getElementsByClassName('coba')

// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// Declare the myGlobal variable below this line
// var myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   oopsGlobal = 5
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// var sum = 0;
// function addSum(num) {
//   var sum = 2;
//   sum = sum + num;
//   // return sum
//   console.log(sum)

//   // return num
// }
// addSum(3);
// console.log(sum)


// * STAND IN LINE
function nextInLine(arr, item) {
  // Only change code below this line
    var a = arr.push(item);
//  console.log('arr',arr)
  // var removed = arr.shift();
  // console.log('removed', removed)
  // return removed;
  return a 
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log(nextInLine(testArr, 7));
// console.log(nextInLine(testArr, 6));
// console.log(nextInLine(testArr, 6));

// console.log(testArr)
// const dihapus = nextInLine(testArr, 6)
// console.log(dihapus)

console.log("After: " + JSON.stringify(testArr));


//* BOOLEAN
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue){
    return console.log("Yes, that was true")
  }
  return console.log("No, that was false")


  // Only change code above this line

}

trueOrFalse(true)
trueOrFalse(false)

// * EQUALITY OPERATOR == & === 

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return console.log("Not Equal");
  }
  return console.log("Equal");
}

testStrictNotEqual(17);
testStrictNotEqual(10);


function testLessThan(val) {
  if (val < 25) {  // Change this line
    return console.log("Under 25");
  }

  if (val < 55) {  // Change this line
    return console.log("Under 55");
  }

  return "55 or Over";
}

testLessThan(10);
testLessThan(35);

// LOGICAL OR  ||
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 16 || val < 11 ) {
    return console.log("Outside");
  }


  // Only change code above this line
  return console.log("Inside");
}

testLogicalOr(15);

// * IF ELLSE 
// let ifElseAja = document.getElementById('coba')

// function foo(x) {
//   if (x < 1) {
//     return ifElseAja.innerHTML = "Less than one";
//   } else if (x < 2) {
//     return ifElseAja.innerHTML = "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }

// foo(0)

// * SWITCH CASE 

let switCase = document.getElementById('coba')

const cobaAja  = (key)=>{
  let apa = ""
  switch (key) {
    case 1:
    case 2:
    case 3:
      apa = "low";
      break;
    case 4:
    case 5:
    case 6:
      apa = "mid";
      break;
    default:
      apa = "default"
      break;
  }
  return switCase.innerHTML = apa;
}

cobaAja(3)


// SWITCH AND ELSE
var count = 0;

function cc(card) {
  // Only change code below this line
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
     count--
     break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
 
  // Only change code above this line
}

cc(10); cc('j'); cc('q'); cc('k'); cc('a');
console.log('count', count)


//  belajar objek

function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj[checkProp]){
    return console.log(obj[checkProp])
  } 
  else {
    return 'Not Found'
  }
  // Only change code above this line
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")