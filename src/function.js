// 1

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];
// for (let i = 0; i < numbers.length; i++ ) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     }
// }
// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);

// 2

// let books = [
//     { author: 'Oscar Wilde', title: 'The importance of being earnest'},
//     { author: 'Lewis Carroll', title: 'Alice in wonderland'},
//     { author: 'Jules Verne', title: 'Around the world in eighty days'},
//     { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
//     ]

// let Verne = books.filter(book => book.author === 'Jules Verne');

// console.log(Verne);

// 3

// let people = [
//     { age: 10, name: 'Gun-Britt'},
//     { age: 20, name: 'Conny'},
//     { age: 30, name: 'Aurora'},
//     { age: 40, name: 'Kalle'},
//     { age: 55, name: 'Max'},
//   ]

//   let ageSum = people.reduce((sum, person) => sum + person.age, 0);
//   console.log(ageSum);

// 4

// let numbers = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

// let highestNum = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
// console.log(highestNum);

// max is the accumulator to keep track of the highest number
// current represents each number in the array as reduce() iterates through
// the formula is: if current is greater than max, it becomes the new max
// if not, max remains the same
// (numbers[0]) the initial value is 0

// 5

// let books = [
//     { author: 'Oscar Wilde', title: 'The importance of being earnest'},
//     { author: 'Lewis Carroll', title: 'Alice in wonderland'},
//     { author: 'Jules Verne', title: 'Around the world in eighty days'},
//     { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
//   ]

// let bookTitles = books.map(book => book.title);
// console.log(bookTitles);

// 6 

// let people = [
//     { age: 10, name: 'Gun-Britt'},
//     { age: 20, name: 'Conny'},
//     { age: 30, name: 'Aurora'},
//     { age: 40, name: 'Kalle'},
//     { age: 55, name: 'Max'},
//   ]

// let underForty = people.every(person => person.age < 40);
// console.log(underForty);

// 7

let travel = [
    {continent: 'Asia', country: 'China'},
    {continent: 'Europe', country: 'Sweden'},
    {continent: 'North America', country: 'Canada'},
    {continent: 'South America', country: 'Brazil'},
    {continent: 'Africa', country: 'Tanzania'},
    {continent: 'Africa', country: 'Egypt'},
    {continent: 'Asia', country: 'India'},
    {continent: 'North America', country: 'Mexico'},
    {continent: 'South America', country: 'Peru'},
    {continent: 'Europe', country: 'Switzerland'}
]

let countryName = travel.map(place => place.country);
console.log(countryName);
let continentName = travel.map(places => places.continent);
console.log(continentName);
let european = travel
    .filter(location => location.continent === 'Europe')
    .map(location => location.country);
console.log(european);