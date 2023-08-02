// Question1
//  Given an array of numbers, use the map function to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];
const newNum = numbers.map((curEle) => curEle * 2);
console.log(newNum);

// Answer: 2,4,6,8,10

// Question 2
//  Extracting even numbers
// const numbers = [1, 2, 3, 4, 5];
// const evennum = numbers.map((curEle) => {
//   return curEle % 2 === 0;
// });
// console.log(evennum);

//Question 3
//Given an array of objects with 'name' properties, use the map function to create a new array where each
//name is capitalized (first letter in uppercase, rest in lowercase).
// const people = [
//   { name: "john", age: 28 },
//   { name: "JANE", age: 24 },
//   { name: "aLiCe", age: 30 },
// ];

// const newname = people.map((curEle) => {
//   let name =
//     curEle.name.charAt(0).toUpperCase() + curEle.name.slice(1).toLowerCase();
//   return { ...people };
// });
// console.log(newname);

// Question 4
// Filter objects by age
// Given an array of objects with 'name' and 'age' properties, use the filter function to create a new array
// containing only people above a certain age (e.g., 25).
// const people = [
//   { name: "John", age: 28 },
//   { name: "Jane", age: 24 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 22 },
// ];
// const newName = people
//   .filter((CurEle) => CurEle.age > 25)
//   .map((CurEle) => CurEle.name);
// console.log(newName);

// Task 5: Extracting titles from objects
// Given an array of book objects with 'title' and 'author' properties, use the map function to create a
// new array containing only the titles of the books.
// const books = [
//   { title: "Harry Potter", author: "J.K. Rowling" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
// ];

// const title = books.map((CurEle) => {
//   return CurEle.title;
// });
// console.log(title);

// Task 6: Filter and calculate discounted prices
// Given an array of products with 'name', 'price', and 'discount' properties, use the filter function to
// create a new array containing only the products that have a discount greater than 10%. Then, use the map
// function to calculate the discounted prices for each of those products.

// const products = [
//   { name: "Laptop", price: 1000, discount: 0.2 },
//   { name: "Phone", price: 500, discount: 0.1 },
//   { name: "Tablet", price: 300, discount: 0.05 },
//   { name: "Headphones", price: 80, discount: 0.15 },
// ];
// const disc = products
//   .filter((curEle, index, array) => {
//     let val = curEle.discount >= 0.1;
//     return val;
//   })
//   .map((curEle, index, array) => {
//     let pr = curEle.discount * curEle.price;
//     let res = curEle.price - pr;
//     let output = console.log(curEle.name + "  " + res);

//   });

// Task 7: Extract names with more than 5 characters
// Given an array of names, use the filter function to create a new array containing only the names with
// more than 5 characters. Then, use the map function to capitalize the first letter of each of those names.

// const names = ["john", "emma", "michael", "sophia", "alexander"];
// const nam = names
//   .filter((curEle) => curEle.length > 5)
//   .map(
//     (curEle) => curEle.charAt(0).toUpperCase() + curEle.slice(1).toLowerCase()
//   );
// console.log(nam);

// Task 8: Filter and calculate total cost
// Given an array of orders with 'product', 'quantity', and 'price' properties, use the filter function to
// create a new array containing only the orders with quantity greater than 5. Then, use the map function to
// calculate the total cost for each of those orders.
// Input:
// const orders = [
//   { product: "Laptop", quantity: 2, price: 1000 },
//   { product: "Mouse", quantity: 10, price: 25 },
//   { product: "Keyboard", quantity: 8, price: 50 },
//   { product: "Monitor", quantity: 3, price: 200 },
// ];

// const num = orders
//   .filter((curEle) => curEle.quantity > 5)
//   .map((curEle) => {
//     return curEle.price * curEle.quantity;
//   });
// console.log(num);

// Task 9: Filter and extract specific properties
// Given an array of people with 'name', 'age', and 'city' properties, use the filter function to create a new
// array containing only the people who are above 30 years old. Then, use the map function to extract only
// their names.
// Input:
// const people = [
//   { name: "John", age: 28, city: "New York" },
//   { name: "Jane", age: 35, city: "Chicago" },
//   { name: "Alice", age: 42, city: "San Francisco" },
//   { name: "Bob", age: 25, city: "Seattle" },
// ];
// const val = people
//   .filter((curEle) => curEle.age > 30)
//   .map((curEle) => {
//     return curEle.name;
//   });
// console.log(val);
