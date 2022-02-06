import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>read it.</h1>
      <p>total {books.length} books.</p>
    </div>
  );
};

export default Navbar;
