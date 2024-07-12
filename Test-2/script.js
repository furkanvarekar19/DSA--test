// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

//  array=[1,2,3,4,5,8];
// array1=[];
// function square(array){
//     for(var i=0;i<array.length;i++){
//         // console.log(array[i])
//         var squre1=array[i]*array[i];
//         array1.push(squre1);
//     }
//     return array1
// }

// const array2=square(array);
// console.log(array2);

// Q.2 
//  Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

//  function palinDrome(name){
//      var str = "";
//      for(let i=name.length-1;i>0;i--){
//       // console.log(name[i]);
//       str+=name[i];

//      }
//      if(name === str){
//       console.log("true");
//      }else{
//       console.log("false");
//      }
//  }
//  palinDrome("madam");

// Q.3 
  // Write a JavaScript function that takes two arrays as input and returns a new array that contains
  //  only the elements that are present in both

//     array=[1,2,3,4];
// array1=[3,4,5,6];

// array2=[]

// function present(array,array1){
//     for(var i=0;i<array.length;i++){
//         for(var k=0;k<array1.length;k++){
//             // console.log(array1[i],array2[k])
//             if(array[i]===array1[k]){
//                 array2.push(array[i])
//             }
//         }
//     }
//     return array2;
// }

// console.log(present(array,array1));

// const finalarray=present(array,array1);
// console.log(finalarray);

// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that
//  key in the object. If the key does .
  
//  function getvlaue(obj,key) {
//    if(key in obj){
//     return obj[key];
//    }else{
//     return 'key does not exices';
//    }
//   };
//    const person ={
//     name:'furkan',
//     lasname : 'varekar',
//     age : 18,
//    }
  
//  console.log(getvlaue(person,"name"));
//    console.log(getvlaue(person,"age"));
//    console.log(getvlaue(person,"lasname"));
//    console.log(getvlaue(person,"city"));
//    console.log(getvlaue(person,"number"));



// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.

// var number2=[];
// function arrayDigit(number){
//     var number1;
//     number1=number.toString();
//     for(var i=0;i<number1.length;i++){
//         number3=i+1;
//         number2.push(number3)
//     }
//     // number3=number1.split('')
    
//     return number2;
// }
// // const numarray=arrayDigit(12345);
// // console.log(numarray)
// console.log(arrayDigit(12345));

// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// function dupStr(inputString) {
//   let dupString = "";
//   for (let i = 0; i < inputString.length; i++) {
//       dupString += inputString[i] + inputString[i];
//   }

//   return dupString; 
// }

// const result = "hello";
// const output = dupStr(result);

// console.log(output); 

// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values
//  associated with that key from each object.

// var obj1 = [{name:"Alice"},{name:"Bob"},{name:"Charlie"}];
// function getKeyValue(){
//     for (let key in obj1) {
//         console.log(obj1[key]);
//       }
// }
// getKeyValue(obj1);

// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of 
// words in the sentence.

// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// Input=[10, 2, 14, 5, 7];
// function secondSmall(Input){
//   Input.sort((a,b)=>a-b);
//     return Input[1];
// }

// console.log(secondSmall(Input));

// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the
//  format "YYYY-MM-DD".

//  function formatDate(date) {
//   let year = date.getFullYear();
//   // let month = (date.getMonth() + 1).toString().padStart(2, '0');
//   let month = date.getMonth();

//   let day = date.getDate();

//   return `${year}-${month}-${day}`;
// }

// // Example usage:
// let date = new Date();
// console.log(formatDate(date));

