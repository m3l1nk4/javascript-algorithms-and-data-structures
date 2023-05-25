// ES5
// const myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };

// ES6 - variation 1
// const myConcat = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// ES6 - variation 2
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
