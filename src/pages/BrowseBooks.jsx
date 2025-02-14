import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import booksData from "../Booksdata";

const BrowseBooks = () => {
  const { category } = useParams();
const reduxBooks = useSelector((state) => state.books.books);
const books = reduxBooks.length ? reduxBooks : booksData;
const [search, setSearch] = useState("");

  const filteredBooks = books
    .filter((book) => !category || book.category.toLowerCase() === category.toLowerCase()) 
    .filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Browse Books</h1>

      <div className="relative w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full p-2 pl-10 border hover:border-[#13beca] rounded-md mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-2xl text-center py-2 text-[#FEAC5E] font-semibold">{book.title}</h2>
              <p className="text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-500">{book.category}</p>
              <Link to={`/book/${book.id}`} className="text-[#13beca] mt-2 hover:underline">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-red-500 font-medium">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
