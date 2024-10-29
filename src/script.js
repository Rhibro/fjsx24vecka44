
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

let fruits = ["kiwi", "apple", "pear"];
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

let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);
console.log(names);

// ÖVNINGAR 17

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mirror = nums.concat([...nums].reverse());
console.log(mirror);

// [...nums].reverse(): This creates a reversed copy of the nums array without modifying the original array.
// nums.concat(...): Combines the original nums array with the reversed copy.

// ÖVNINGAR 18-22

let str = "Supercalifragilisticexpialidocious";
let containsN = str.includes('n');
console.log(containsN);
let containsX = str.includes('x');
console.log(containsX);
let position = str.indexOf("p");
console.log(position);
let take = str.slice(0, 5);
console.log(take);
let takeAgain = str.slice(-7);
console.log(takeAgain);

// ÖVNINGAR 23

let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
let filteredArray = numArray.filter(num => num <= 5);

console.log(filteredArray); // Output: [5, 1, 3]


// ÖVNINGAR 24

let persons = [
    {
      name: "Felicia",
      age: 12,
    },
    {
      name: "Pelle",
      age: 20,
    },
    {
      name: "Peter",
      age: 59,
    },
    {
      name: "Anna",
      age: 32,
    },
    {
      name: "Jocke",
      age: 18,
    },
    {
      name: "Ella",
      age: 3,
    },
  ];

  let filterAge = persons.filter( num => num.age >= 18 ).map(num => num.name);
  console.log(filterAge)
// ÖVNINGAR 25
// ÖVNINGAR 26
// ÖVNINGAR 27
// ÖVNINGAR 28
// ÖVNINGAR 29
// ÖVNINGAR 30
// ÖVNINGAR 31
// ÖVNINGAR 32
// ÖVNINGAR 33
// ÖVNINGAR 34
// ÖVNINGAR 35
// ÖVNINGAR 36
// ÖVNINGAR 37

