
// console.log("Hello array thuesday");

// let fruits = ['mango', 'apple', 'banana'];
// console.log(fruits);
// console.log(fruits[0]);

// let things = ['cat', 5, {key: 'hello'}, true];
// console.log(things);
// console.log(things[2]);

// ÖVNINGAR 1-6

// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// let index = animals.indexOf("hamster");

// if (index !== -1) {
//     animals.splice(index, 1, "tiger");
// }
// console.log(animals);

// ÖVNINGAR 7

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let sum = a.map((num, index) => num + b[index]);
// console.log(sum);

// ÖVNINGAR 8

// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];
// let index = a.indexOf(3);

// if (index !== -1) {
//      // Use the spread operator to insert each element of b individually
//     a.splice(index + 1, 0, ...b);
// }
// console.log(a);

// // ÖVNINGAR 9

// let arr = ['a', 'b', 'c'];
// let clonedArr = [...arr]; 
// // you can also use: arr.slice(); Array.from(arr); arr.concat();
// // the same results but multiple ways
// console.log(clonedArr);

// ÖVNINGAR 10-15

// let fruits = ["kiwi", "apple", "pear"];
// let addFruitend = fruits.push('mango');
// console.log(fruits);
// let addFruitTop = fruits.unshift('peach');
// console.log(fruits);
// let removeTop = fruits.shift();
// console.log(fruits);
// let removeEnd = fruits.pop();
// console.log(fruits);
// fruits.splice(1, 1); // Start at index 1, remove 1 element
// console.log(fruits);
// fruits.splice(2, 0, 'mango', 'banana', 'grape');
// console.log(fruits);

// ÖVNINGAR 16

// let names = ["David", "Christoffer", "Johan", "Maja"];
// names.splice(1, 2);
// console.log(names);

// // ÖVNINGAR 17

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mirror = nums.concat([...nums].reverse());
// console.log(mirror);

// // [...nums].reverse(): This creates a reversed copy of the nums array without modifying the original array.
// // nums.concat(...): Combines the original nums array with the reversed copy.

// // ÖVNINGAR 18-22

// let str = "Supercalifragilisticexpialidocious";
// let containsN = str.includes('n');
// console.log(containsN);
// let containsX = str.includes('x');
// console.log(containsX);
// let position = str.indexOf("p");
// console.log(position);
// let take = str.slice(0, 5);
// console.log(take);
// let takeAgain = str.slice(-7);
// console.log(takeAgain);

// // ÖVNINGAR 23-24

// let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// let filteredArray = numArray.filter(num => num <= 5);

// console.log(filteredArray); // Output: [5, 1, 3]


// ÖVNINGAR 25-26

// let persons = [
//     {
//       name: "Felicia",
//       age: 12,
//     },
//     {
//       name: "Pelle",
//       age: 20,
//     },
//     {
//       name: "Peter",
//       age: 59,
//     },
//     {
//       name: "Anna",
//       age: 32,
//     },
//     {
//       name: "Jocke",
//       age: 18,
//     },
//     {
//       name: "Ella",
//       age: 3,
//     },
//   ];

  // let filterAge = persons.filter( num => num.age <= 18 ).map(num => num.name);
  // console.log(filterAge)

// ÖVNINGAR 27

// let arr = ["beta", "alfa", "gamma"];
// arr.sort();
// console.log(arr);

// ÖVNINGAR 28

// let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
// nums.sort();
// console.log(nums);

// ÖVNINGAR 29

// let persons = [
//   {
//     name: "Felicia",
//     age: 12,
//   },
//   {
//     name: "Pelle",
//     age: 20,
//   },
//   {
//     name: "Peter",
//     age: 59,
//   },
//   {
//     name: "Anna",
//     age: 32,
//   },
//   {
//     name: "Jocke",
//     age: 18,
//   },
//   {
//     name: "Ella",
//     age: 3,
//   },
// ];

// persons.sort((a, b) => b.age - a.age);
// console.log(persons);

// // ÖVNINGAR 30

// persons.reverse((a, b) => b.age - a.age);
// console.log(persons);

// // ÖVNINGAR 31

// persons.sort((a, b) => a.name.localeCompare(b.name));
// console.log(persons);

// // ÖVNINGAR 32-33

// let capitalize = persons
//   .map(person => ({
//   ...person,
//   name: person.name.toUpperCase()
// }));

// console.log(capitalize.sort((a, b) => b.name.localeCompare(a.name)));

// map creates a new array with modified elements.
// { ...person, name: person.name.toUpperCase() } 
// creates a new object for each person, preserving 
// the original properties but with name converted to uppercase.

// ÖVNINGAR 34-37

let fruits = ["apelsin", "päron", "äpple", "kiwi"];
// fruits.forEach(fruit => console.log(fruit));

// for (let fruit of fruits) {
//   console.log(fruit);
// }

for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}: ${fruits[i]}`);
}


