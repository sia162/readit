import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
