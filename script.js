let book;

let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let pagesNumber = document.getElementById('no-of-pages');
let read = document.getElementById('read');
let notRead = document.getElementById('not-read');
let submit = document.getElementById('submit');
let ifRead = document.getElementsByName('readStatus');
let library = document.getElementById('library-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = pages;
  this.readOrNot = read;
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'already read');
let haus = new Book('This House is Haunted', 'John Boyne', 333, 'already read');

let myLibrary = [hobbit, haus];

myrender();

function addBookToLibrary() {
  submit.addEventListener('click', () => {
    form.style.display = 'none';
    if (ifRead[0].checked) {
      ifRead = read.value;
    } else if (ifRead[1].checked) {
      ifRead = notRead.value;
    }

    book = new Book(bookTitle.value, bookAuthor.value, pagesNumber.value, ifRead);
    myLibrary.push(book);
    library.innerHTML = '';
    myrender();
  });
}

function myrender() {
  let librLength = myLibrary.length;

  for (let i = 0; i < librLength; i++) {
    let bookshelf = document.createElement('div');
    let currentBook = myLibrary[i];
    [
      { 'Book Title: ': currentBook.title },
      { 'Book Author: ': currentBook.author },
      { 'Number of Pages: ': currentBook.noOfPages },
      { 'Read Status: ': currentBook.readOrNot },
    ].forEach((trait) => {
      let p = document.createElement('p');

      let prefix = Object.keys(trait)[0];
      let suffix = Object.values(trait)[0];
      p.textContent = prefix + suffix;
      bookshelf.appendChild(p);
    });

    // let valueArray = Object.values(myLibrary[i]);
    bookshelf.setAttribute('class', 'book-item');
    library.appendChild(bookshelf);

    // bookshelf.appendChild(description);
    // description.textContent = 'Book Title: ' + myLibrary[i].title;
    // description.setAttribute('class', 'book-info');
  }
}

addBookToLibrary();

// FORM CREATION-------------------------------------------------------------
let formOpener = document.getElementById('new-book');
let form = document.getElementById('form');
let cancel = document.getElementById('cancel');

formOpener.addEventListener('click', () => {
  form.style.display = 'block';
});

cancel.addEventListener('click', () => {
  form.style.display = 'none';
});
