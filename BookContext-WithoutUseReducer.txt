import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "Patrick Rothfuss", id: 1 },
    { title: "the final empire", author: "Brandon Sanderson", id: 2 },
  ]);

  const [booksfinished, setBooksfinished] = useState([]);

  //addbook
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooksfinished(books.filter((book) => book.id === id));
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, booksfinished }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
