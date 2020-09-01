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

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
