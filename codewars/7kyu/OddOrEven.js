// Odd or Even?

/*
Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.
Give your answer in string format as 'odd' or 'even'.
If the input array is empty consider it as: [0] (array with a zero).

Example:
oddOrEven([0]) returns "even"
oddOrEven([2, 5, 34, 6]) returns "odd"
oddOrEven([0, -1, -5]) returns "even"

Have fun!

*/

function oddOrEven(array){
   return array.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
