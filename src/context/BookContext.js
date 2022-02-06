import React, { createContext, useReducer, useState } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  //addbook
  const [booksfinished, setBooksfinished] = useState([]);
  const finishedBook = (id) => {
    setBooksfinished(books.filter((book) => book.id === id));
  };

  return (
    <BookContext.Provider
      value={{ books, booksfinished, finishedBook, dispatch }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
