// Problem 1: Find the Maximum Write a JavaScript function named findMax that takes an array of
// numbers as input and returns the maximum value from the array. If the array is empty, the function should
// return null.
// Example:
// findMax([3, 5, 1, 9, 2]); // Output: 9
// findMax([]); // Output: null

// function findMax() {
//   var arr = [3, 5, 1, 9, 2];
//   var max = arr[0];
//   if (arr.length != 0) {
//     for (let i = 1; i <= 4; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//     }
//   } else {
//     console.log("Array is empty");
//   }
//   return max;
// }

// var a = findMax();
// console.log("Max is " + a);

// Problem 2: Count Occurrences Write a JavaScript function named countOccurrences that takes an
// array of elements and a target element as input and returns the number of occurrences of the target
// element in the array.
// Example:
// countOccurrences([1, 2, 3, 4, 2, 1, 2], 2); // Output: 3
// countOccurrences(['a', 'b', 'c', 'a'], 'a'); // Output: 2

// function countOccurrences(a) {
//   var count = 0;
//   var target = 2;
//   var arr = [1, 2, 3, 4, 2, 1, 2];
//   for (let i = 1; i < arr.length; i++) {
//     if (target === arr[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// var b = countOccurrences();
// console.log("occurenses " + b);

// Problem 3: Reverse String Write a JavaScript function named `reverseString`
//that takes a string
// as input and returns a reversed version of the input string.
// Example:
// reverseString('Hello'); // Output: 'olleH'
// reverseString('JavaScript'); // Output: 'tpircSavaJ'

// function reverseString() {
//   var str = "Hello";
//   var a = str.length;
//   for (let i = a; i >= 0; i--) {
//     console.log(str[i]);
//   }
// }
// reverseString();

// Problem 4: Prime Numbers Write a JavaScript function named isPrime that takes a number as input
// and returns true if the number is prime, and false otherwise. A prime number is a positive integer
// greater than 1 that is divisible only by 1 and itself.
// Example:
// isPrime(7); // Output: true
// isPrime(12); // Output: false

// function isPrime(a) {
//   var num = 21;
//   var prim = true;
//   if (num === 0 || num === 1) {
//     prim = false;
//   }
//   for (let i = 2; i <= num / 2; ++i) {
//     if (num % 2 == 0) {
//       prim = false;
//       break;
//     }
//   }
//   if (prim) {
//     console.log(`${num} Prim number`);
//   } else {
//     console.log(`${num} is not Prim number`);
//   }
// }
// isPrime();

// Problem 5: Palindrome Check Write a JavaScript function named isPalindrome that takes a string
// as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word,
// phrase, number, or other sequence of characters that reads the same forward and backward, ignoring
// spaces, punctuation, and capitalization.
// Example:
// isPalindrome('racecar'); // Output: true
// isPalindrome('Hello'); // Output: false

// function isPalindrome() {
//   var str = "racecar";
//   var b = true;
//   const noSpecialChars = str.replace(/[^a-zA-Z0-9 ]/g, "");
//   var a = noSpecialChars.length;
//   for (let i = 0; i <= a / 2; i++) {
//     if (noSpecialChars[i] != noSpecialChars[a - 1 - i]) {
//       b = false;
//     } else {
//       b = true;
//     }
//   }
//   console.log(noSpecialChars);
//   if (b) console.log("Its a plaindrom");
//   else console.log("Not a palindrom");
// }
// isPalindrome();

// Problem 6: FizzBuzz Write a JavaScript function named fizzBuzz that takes a number as input and
// returns:
// • "Fizz" if the number is divisible by 3.
// • "Buzz" if the number is divisible by 5.
// • "FizzBuzz" if the number is divisible by both 3 and 5.

// • The number itself if none of the above conditions are met.
// Example:
// fizzBuzz(3); // Output: "Fizz"
// fizzBuzz(10); // Output: "Buzz"
// fizzBuzz(15); // Output: "FizzBuzz"
// fizzBuzz(8); // Output: 8

// function fizzBuzz(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else if (num % 3 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log("Not divisble by 3 ,5");
//   }
// }
// fizzBuzz(3);
// fizzBuzz(10);
// fizzBuzz(15);

// Problem 7: Factorial Write a JavaScript function named factorial that takes a positive integer as
// input and returns the factorial of that number. The factorial of a non-negative integer n is the product of
// all positive integers less than or equal to n.
// Example:
// factorial(5); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// factorial(0); // Output: 1 (0! is defined as 1)

// function factorial(num) {
//   if (num >= 0) {
//     if (num == 0) {
//       console.log("Factorial of 0 is : 1");
//     } else {
//       for (let i = num; i > 1; i--) {
//         num = num * (i - 1);
//       }
//       console.log("Factorial is " + num);
//     }
//   } else {
//     console.log("Number is Negative");
//   }
// }

// factorial(4);
// factorial(5);

// Problem 8: Fibonacci Sequence Write a JavaScript function named fibonacci that takes a positive
// integer n as input and returns an array containing the first n numbers in the Fibonacci sequence. The
// Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding
// ones.
// Example:
// fibonacci(5); // Output: [0, 1, 1, 2, 3]
// fibonacci(8); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// program to generate fibonacci series up to n terms

// take input from the user

// function fibonacci(number) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm;

//   console.log("Fibonacci Series:");

//   for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
// }
// fibonacci(4);

// Problem 9: Capitalize Words Write a JavaScript function named capitalizeWords that takes a
// string as input and returns a new string where each word in the input string is capitalized.
// Example:
// capitalizeWords('hello world'); // Output: 'Hello World'
// capitalizeWords('javascript is awesome'); // Output: 'Javascript Is Awesome'

// function capitalizeWords() {
//   const mySentence = "freeCodeCamp is an awesome resource";
//   const words = mySentence.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }

//   words.join(" ");
//   console.log(words);
// }
// capitalizeWords();

// Problem 10: Array Sum Write a JavaScript function named arraySum that takes an array of numbers
// as input and returns the sum of all the numbers in the array.
// Example:
// arraySum([1, 2, 3, 4, 5]); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
// arraySum([-1, 0, 1]); // Output: 0 (-1 + 0 + 1 = 0)

// function arraySum() {
//   var res = 0;
//   var arr = [1, 3, 2, 3, 4, 5];
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   console.log("Sum of Array is :" + res);
// }
// arraySum();
