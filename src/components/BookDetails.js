import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch, finishedBook } = useContext(BookContext);
  const handleRemove = () => {
    finishedBook(book.id);
    dispatch({ type: "REMOVE_BOOK", id: book.id });
  };

  return (
    <li onClick={handleRemove}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
