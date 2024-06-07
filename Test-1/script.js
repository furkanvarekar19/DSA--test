// Question 1:
// Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.
;

// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log("even");
//     }else{
//       console.log("odd");
//     }
// }


// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number.

// let number = 4;
// let i = 1;
// let temp = 1;

// while(i<number){
//     temp = temp*i
//     i++
// }
// console.log(temp);


// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the 
// numbers using a for loop.

// let array = [1,2,3,4,5]

// function sumofarray(array){
//     var sum = 0;
//     for(var i = 0; i<=array.length; i++){
//       sum +=i

//     }
//    console.log(sum);
// }
// sumofarray(array);


// Question 4:

// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.

//   function fibonacci(number){
//    var a = 0;
//    var b = 1;
//    console.log(a);
//    console.log(b);
//    var c;
//    c= a+b;

//     while (c<=number) {
//         console.log(c);
//         a= b;
//         b=c;
//         c = a+b
//     }

//   }
//   fibonacci(8)


// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array 
// with only the strings that have a length greater than 5 characters.

// var array = ["virat","rohit","risabh","furkan"];
// var array2 = [];
//  function lenthofarray(array){
//    for(let i = 0;i<array.length;i++){
//     if(array[i].length>5){
//       array2 = array[i];
//   }
//     return array2;

//    }
//   }
//   console.log(lenthofarray(array));

// Question 6:
// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.

// let number = 11;
// function primenumber (number){
//   for(let i = 0; i<10;i++){
//     if(number%i === 0){
//       return false;
//     }else{
//       return true;

//     }

//   }
// }
//  console.log(primenumber(number));


// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.

// var numbersum = 0;
// for( var i = 1; i<1000;i++){
//   // console.log(numbersum);
//   if(i%3==0 && i%5==0){
//     numbersum =numbersum+i;
//     // console.log(i);
//   }
// }
// console.log(i);

// Question 8:

// Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.

// let strings = "furkan";
// var newstring = "";
// function reverse(strings){
//   for(let i = strings.length-1;i>=0;i--){

//      newstring += strings[i];
   
//   }
//   return newstring;
// }

// console.log(reverse(strings));


// Question 10:
// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two numbers in the array.

// array=[1,2,3,4,5,6,7,8,9,10]
//  function maxdifference(array){
//     min=99999999;
//     max=0;
//     for(i =0;i<array.length;i++){
//         // console.log(array[i]);
//         if(array[i]<min){
//             min = array[i];    
//         }
//         else if(array[i]>max){
//             max = array[i];    

//         }
//     }
//     return max-min;

//  }
//  const array1 = maxdifference(array);
//  console.log("minimum number :", min);
//  console.log("maximum number :", max);
//  console.log("max difference between two number is :", array1);




