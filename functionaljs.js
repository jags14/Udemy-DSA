/* filter method
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArr = arr.filter((e) => e % 2 === 0);
console.log('Even Array: ', evenArr);

let filteredStringArray = ['abc', 'def', 'hi', 'ok', 'bye', 'take care'].filter((e) => e.length === 3);
console.log('filtered string array :', filteredStringArray);
*/

// Map method
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let squareMapping = arr.map((e) => e**2);
// console.log('square of each element of the arr : ',squareMapping);
let strArr = ['abc', 'def', 'hi', 'ok', 'bye', 'take care'];
let lengthMap = strArr.map((e) => e.length);
// console.log("Length of each string in the array is : ", lengthMap);

// Reduce Method
let newArr = [1, 3, 2, 4, 10, 17];
let arrSum = newArr.reduce((prev, curr) => {
    return prev + curr;
}, 0);
console.log(arrSum);

let stringarr = ['abc', 'bbc', 'd'];
console.log(stringarr.reduce((prev, curr) => {return prev + curr}, ''));