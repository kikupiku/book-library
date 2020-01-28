let book;

let formOpener = document.getElementById('new-book');
let form = document.getElementById('form');
let cancel = document.getElementById('cancel');
let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let pagesNumber = document.getElementById('no-of-pages');
let read = document.getElementById('read');
let notRead = document.getElementById('not-read');
let submit = document.getElementById('submit');
let textareaTitle = document.getElementById('book-title');
let textareaAuthor = document.getElementById('book-author');
let textareaPages = document.getElementById('no-of-pages');
let ifRead = document.getElementsByName('readStatus');
let library = document.getElementById('library-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = pages;
  this.readOrNot = read;

  if (read === true) {
    this.readOrNot = 'already read';
  } else {
    this.readOrNot = 'not read yet';
  }
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true);
let house = new Book('This House is Haunted', 'John Boyne', 333, true);
let hard = new Book('Hard Sayings', 'Trent Horn', 276, false);

let myLibrary = [hobbit, house, hard];

render();
addBookToLibrary();
removeBook();

function render() {
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

    bookshelf.className += 'book-item ';
    bookshelf.className += `book-item${i + 1}`;
    library.appendChild(bookshelf);

    let removeOption = document.createElement('button');
    removeOption.innerHTML = 'remove';
    removeOption.className += 'delete-button ';
    removeOption.className += `delete-button${i + 1}`;

    bookshelf.appendChild(removeOption);
  }
}

function addBookToLibrary() {
  submit.addEventListener('click', () => {
    form.style.display = 'none';
    let readStatus;
    book = new Book(bookTitle.value, bookAuthor.value, pagesNumber.value, readStatus);

    if (ifRead[0].checked) {
      book.readOrNot = 'already read';
    } else if (ifRead[1].checked) {
      book.readOrNot = 'not read yet';
    } else {
      book.readOrNot = 'not determined';
    }

    if (bookAuthor.value === '') {
      book.author = 'Anonymous, I guess';
    }

    if (pagesNumber.value === '') {
      book.noOfPages = 'didn\'t check';
    }

    if (bookTitle.value === '') {
      alert('Try again but this timme put the title in.');
      form.style.display = 'block';
    } else {
      myLibrary.push(book);
    }

    library.innerHTML = '';
    render();
    clearForm();
    removeBook();
  });
}

// FORM CREATION-------------------------------------------------------------

formOpener.addEventListener('click', () => {
  form.style.display = 'block';
});

cancel.addEventListener('click', () => {
  form.style.display = 'none';
  clearForm();
});

function clearForm() {
  textareaTitle.value = '';
  textareaAuthor.value = '';
  textareaPages.value = '';
  read.checked = false;
  notRead.checked = false;
}

function removeBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    let deleteCandidateBtn = document.getElementsByClassName(`delete-button${i + 1}`);
    let bookToBeRemoved = document.getElementsByClassName(`book-item${i + 1}`);

    deleteCandidateBtn[0].addEventListener('click', () => {
      library.removeChild(bookToBeRemoved[0]);
      myLibrary.splice(i, 1);
    });
  }
}
