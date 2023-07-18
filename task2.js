//Question 1
//Write an arithmetic expression that calculates the area of a rectangle with a width of 5 and a height
//of 8.

//Sol

var length = 8,
  width = 5,
  area = 0;
area = length * width;
console.log(`Area of Rectangle : ${area}`);

// Answer Area of Rectangle : 40

//Question 2
//Create a comparison expression that checks if two numbers are equal.

//Sol

var a = 5;
var b = 5;
console.log(a === b);

//Answer  True

//Question 3
//Write a logical expression that checks if a number is both greater than 5 and less than 10.

var num = 7;
console.log(num > 5 && num < 10);

//Answer True

//Question 4
//Concatenate two strings using the concatenation operator.

var a = "hello";
var b = "world";

console.log(a + " " + b);

//Answer hello world

//Question 5
//Increment a variable counter by 1 using the increment operator.

var counter = 6;
counter++;
console.log(counter);

//Answer 7

//Question 6
//Decrement a variable counter by 1 using the decrement operator.

var counter = 6;
counter--;
console.log(counter);

//Answer 5

//Question 7
//Calculate the remainder when dividing 17 by 3 using the remainder operator (%).

var num = 17;

console.log(`Remainder of ${num} is : ${num % 3}`);

//Answer Remainder of 17 is : 2

//Question 8
//Assign the value of 10 to a variable x and use the addition assignment operator to add 5 to x.

var x = 10;
x += 5;
console.log(`Sum is : ${x}`);

//Answer Sum is : 15

//Question 9
//Write a comparison expression using the strict equality operator that checks if a number and a
//string are equal.

var num = 5;
var num1 = "5";
console.log(num == num1);
console.log(num === num1);

//Answer True False

//Question 10
//Use the ternary operator to check if a variable isRaining is true. If true, assign the value "Take
//an umbrella" to a variable advice; otherwise, assign "Enjoy the day" to advice.

var isRaining = true;

var x = isRaining ? "Take umberella" : "Enjoy the day";
console.log(x);

//Answer Take umberella
