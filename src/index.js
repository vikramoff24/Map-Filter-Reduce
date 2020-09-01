var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var newNumbers1 = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers1);

// Map - forEach Implementation
var newNumbers2 = [];
numbers.forEach(function (x) {
  newNumbers2.push(x * 2);
});
console.log(newNumbers2);

//Filter - Create a new array by keeping the items that return true.

var newNumbers3 = numbers.filter(function (x) {
  return x >= 5;
});
console.log(newNumbers3);

//Filter - for each implementation

var newNumbers4 = [];
numbers.forEach(function (x) {
  if (x >= 5) {
    newNumbers4.push(x);
  }
});
console.log(newNumbers4);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber5 = numbers.reduce(function (accumulator, currentNumber) {
  //here acumulator takes valur of first index of array and current number takes valure of
  // 2nd index of an array at first iteration.
  return accumulator + currentNumber;
});
console.log(newNumber5);

//for each implementation of reduce

var newNumbers6 = 0;

numbers.forEach(function (currentNumber) {
  newNumbers6 += currentNumber;
});
console.log(newNumbers6);

// New ES6 features

//Find - find the first item that matches from an array.

var newNumbers7 = numbers.find(function (num) {
  return num > 30;
});
console.log(newNumbers7);

//FindIndex - find the index of the first item that matches.

var newNumbers8 = numbers.findIndex(function (index) {
  return index > 30;
});

console.log(newNumbers8);
