import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import booksData from "../Booksdata";

const BookDetails = () => {
  const { id } = useParams();
const reduxBooks = useSelector((state) => state.books.books);
const books = reduxBooks.length ? reduxBooks : booksData;
const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h1 className="text-center text-red-500 text-2xl">Book Not Found</h1>;
  }

  return (
    <div className="text-center">
      <div className="w-3/4 mx-auto mt-30 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold">Title: {book.title}</h1>
        <p className="text-gray-600 text-lg"><b>Written by: </b>{book.author}</p>
        <p className="text-gray-500"><b>Genre:</b> {book.category}</p>
        <p className="text-gray-700 mt-4"><b>Description:</b> {book.description}</p>
        <p className="text-yellow-500 text-xl font-semibold mt-2"><b>Rating:</b>{book.rating} / 5</p>
      </div>
      <Link to="/browse" className="mt-10 inline-block bg-[#13beca] text-white px-4 py-2 rounded hover:bg-[#85cdf3] hover:font-bold">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
