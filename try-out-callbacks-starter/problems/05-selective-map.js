/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
    (optional if you already asked a question for this problem.)
- Explain how you are using both of the callbacks in the function.
- What do you expect each callback function to be returning?
- How many times are you calling each callback function?
*******************************************************************************/


let selectiveMap = function(arr, callback1, callback2) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback1(arr[i])) {
        result.push(callback2(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

//   In this implementation, the function takes three arguments: an array arr, and two callback functions callback1 and callback2. The function creates an empty result array and then loops through each element in arr. For each element, it calls callback1 and checks whether the result is true or false. If the result is true, it calls callback2 on the element and adds the result to the result array. If the result is false, it adds the original element to the result array.

//   Both callbacks are used to modify the elements of the input array. callback1 is used to filter the elements that should be modified (i.e., the elements for which it returns true). callback2 is used to modify the selected elements.

//   In the example implementations of isEven, isPositive, square, and flipSign, isEven and isPositive are expected to return a Boolean value indicating whether the input number satisfies the respective condition. square is expected to return the square of the input number. flipSign is expected to return the negation of the input number.

//   Each callback function is called once for each element in the input array. Therefore, if the input array has n elements, each callback function will be called n times.



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = selectiveMap;
