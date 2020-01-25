let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = pages;
  this.readOrNot = read;

  let readStatus;

  if (read === true) {
    readStatus = 'already read';
  } else {
    readStatus = 'not read yet';
  }

  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' pages, ' + ', ' + readStatus;
  }

}

function addBookToLibrary() {
  
}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 456, true);

document.getElementById('demo').innerHTML = hobbit.info();
