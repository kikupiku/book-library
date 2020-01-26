let book;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = pages;
  this.readOrNot = read;
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);
let haus = new Book('Haus der Geister', 'John Boyne', 333, true);

let myLibrary = [hobbit, haus];

function addBookToLibrary() {
  let bookTitle = document.getElementById('book-title');
  let bookAuthor = document.getElementById('book-author');
  let pagesNumber = document.getElementById('no-of-pages');
  let read = document.getElementById('read');
  let notRead = document.getElementById('not-read');
  let submit = document.getElementById('submit');

  let ifRead = document.getElementsByName('readStatus');

  submit.addEventListener('click', () => {
    if (ifRead[0].checked) {
      ifRead = read.value;
    } else if (ifRead[1].checked) {
      ifRead = notRead.value;
    }

    book = new Book(bookTitle.value, bookAuthor.value, pagesNumber.value, ifRead);
    myLibrary.push(book);
  });
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
