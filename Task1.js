//Question 1
//Create a variable name and assign it a string value representing your name.

//Solution
var name = "Muzamil Aziz";
console.log(name);

//Answer Muzamil Aziz

//Question 2
//Declare a variable age and assign it a number value representing your age.

//Solution
var age = 23;
console.log("My age is " + age);

//Answer My age is 23

//Question 3
//Create a variable isStudent and assign it a boolean value indicating whether you are a
//student or not.

//Solution
var isStudent = true;
console.log(isStudent);

//Answer true

//Question 4
//Declare a variable myArray and assign it an array containing three different data types
//(e.g., string, number, boolean).

//Solution
var myArray = ["Muzamil", 23, true];

console.log("1st Value: " + myArray);

//Answer 1st Value: Muzamil 2nd Value: 45 3rd value true

//Question 5
//Check the type of null using the typeof operator.

//Solution

var num = null;
console.log(typeof num);

//Answer Object

//Question 6
//Create a variable myObject and assign it an object with properties representing your
//name, age, and student status.

//Solution

var myObject = { name: "Muzamil", age: 23 };
console.log(typeof myObject);
console.log("Name " + name + " Age " + age);

//Answer Name Muzamil Age 23

//Question 7
//Declare a variable x without assigning any value and log its value to the console. What
//do you see?

//Solution

var X;
console.log(X);

//Answer undefined

//Question 8
//Check the type of a variable that has not been declared using the typeof operator.

//Solution

var num;
console.log(typeof num);

//Answer object

//Question 9
//Create two variables, num1 and num2, and assign them number values. Add them
//together and store the result in a variable sum.

//Solution

var num1 = 9,
  num2 = 8,
  sum = 0;
sum = num1 + num2;
console.log("sum of two number is: " + sum);

//Answer sum of two number is: 17

//Question 10
//Declare a constant variable PI and assign it the value of 3.14. Can you reassign a value
//to this constant? Why or why not?

//Solution

const PI = 3.14;
console.log(PI);
//PI=2.11
//console.log(PI)

//Answer: No, because we use the const data type and it not allow to reassign the value.

//Question 11
//Declare a variable message and assign it a string value. Later, update the variable with a
//new string value.

//Solution

var message = "Hi am muzamil. How can i help You?";
message = "Updating the Context";
console.log("Message: " + message);

//Answer: Updating the context

//Question 12
//Create a variable fullName by concatenating two separate variables containing your first
//and last names.

//Solution

var first_name = "Muzamil";
var last_name = "Aziz";
var fullName = first_name + "  " + last_name;
console.log("My name is : " + fullName);

//Answer: My name is : Muzamil Aziz

//Question 13
//Create a variable isStudent and assign it a boolean value. Use the typeof operator to
//check the type of the variable.

//Solution

var isStudent = true;
console.log(typeof isStudent);

//Answer: boolean

//Question 14
// Create a variable result and assign it the value of the square root of a negative number
//using the Math.sqrt() function. Check if result is NaN.

//Solution

var result;
result = Math.sqrt(result);
console.log(typeof result);
console.log("Square root of " + result);

//Answer Square root of NAN

//question 15
//Declare a variable myFunction and assign it a function value. Use the typeof operator to
//check the type of the variable.

//Solution

var myFunction = function x() {
  "hellow";
};
console.log(typeof myFunction);

//Answer function
