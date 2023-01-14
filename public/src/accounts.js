
<<<<<<< 34b635edb46aae41dba2bd5f32d8697e9de44de4

=======
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) =>
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
}
>>>>>>> fixed error

function getTotalNumberOfBorrows(account, books) {
  

  let result = 0;
  const booksBorrowedByAccount = books.forEach((book) => {
    if (!!book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
          result++;
        }
        console.log(accounts.id);
        console.log(account.id);
      });
    }
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  
  const borrowedBooks = [];

<<<<<<< 34b635edb46aae41dba2bd5f32d8697e9de44de4
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
=======
  books.forEach((book) => {
    let bookBorrows = book.borrows;

    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;
>>>>>>> fixed error
}

function sortAccountsByLastName(accounts) {}

<<<<<<< 34b635edb46aae41dba2bd5f32d8697e9de44de4
function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}
=======
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}
>>>>>>> fixed error

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};