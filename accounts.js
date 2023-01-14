
const { findAuthorById } = require("./books");

/* a function to return that returns the account object 
that has the matching Id.
 parameters:
  -an array of account objects 
  -a string ID of a single account object */

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


/* returns a sorted array of the provided account objects. 
the objects are sorted alphabetically by last name.
parameters:
  -an array of account objects. 
*/

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.lasts ? 1 : -1)); 
}




/* it returns a_number_that represents the number of times the
account's ID appears in any book's `borrows` array. 
parameters:
 -an account object.
 -an array of all book objects. */ 


function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach(book => {
    const borrowedById = borrowedById(book, account);
    count += borrowedById.length;
  })
}


/* it returns an array of book objects, including author info,
that represents all books_currently checked out_ by the given
account. _Look carefully at the object below,_ as it's not just
the book object; the author object is nested inside of it.
parameters:
-an account object. 
-an array of all book objects.
-an array of all author objects. */
 

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book => book.borrows.some(borrow => 
    (!borrow.returned && borrow.id === account.id)));
    const result = [];
    borrowedBooks.forEach(book => {
      const bookAuthor = findAuthorById(authors, books.authorId);
      result.push({
        id: book.id,
        title: book.title,
        genre: book.genre,
        authorId: book.authorId,
        author: bookAuthor,
        borrows: book.borrows,
      });
    });
    return result;
}
function borrowsById (book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
