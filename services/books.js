const Books = require("../models/Books");

async function getAllBooks() {
  const books = await Books.findAll();
  return books;
}

async function getBookById(id) {
  const book = await Books.findOne({
    where: {
      bookid: id,
    },
  });
  const bookDataValues = book.dataValues;
  return bookDataValues
}

async function insertBook(newBook) {
  await Books.create(newBook)
}

async function changeBook(changes, id) {
    await Books.update(changes, {
        where: {
          bookid:id
        }
      });

}

async function deleteBook(id) {
  await Books.destroy({
    where:{
      bookid:id
    }
  })
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  changeBook,
  deleteBook,
};
