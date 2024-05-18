// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.
function squareNumbers(numbers) {
    return numbers.map(function(number) {
      return number * number;
    });
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const squaredArray = squareNumbers(inputArray);
  console.log(squaredArray); // Output: [1, 4, 9, 16, 25]
  