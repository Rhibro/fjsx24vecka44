// 1

// let book = {
//     title: '438 days',
//     author: 'Rhi',
//     numPages: 800,
// };

// console.log(book);

// 2

// class book {
//     constructor(title, author, numPages) {
//         this.title = title;
//         this.author = author;
//         this.numPages = numPages;
//     }
// }

// let bookOne = new book('438 days', 'Rhi', 999);
// let bookTwo = new book('28 days Later', 'Rhi', 999);
// let bookThree = new book('Days', 'Rhi', 999);
// console.log(bookOne);

let books = [
    { title: '438 days', author: 'Rhi', numPages: 800 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', numPages: 218 },
    { title: 'Moby Dick', author: 'Herman Melville', numPages: 635 }
  ];

// let books = [];
// books.push(bookOne, bookTwo, bookThree);
// console.log(books);

function searchTitle(books, search) {
    const found = books.find(book => book.title === search);
    return found || null;
}

console.log(books, 'Moby Dick');