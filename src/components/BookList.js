import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id}></BookDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> you have no books to read.</div>
  );
};

export default BookList;
