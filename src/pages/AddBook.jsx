import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../Redux/booksSlice";
import { useNavigate } from "react-router-dom";
import booksData from "../Booksdata";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxBooks = useSelector((state) => state.books.books);
  const books = reduxBooks.length ? reduxBooks : booksData;
  
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!books.length) {
      console.log("Using initial books data");
    }
  }, [books]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.category || !book.description || !book.rating) {
      alert("All fields are required");
      return;
    }

    setLoading(true);
    setProgress(0);
    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        dispatch(addBook({ id: Date.now(), ...book }));
        setBook({ title: "", author: "", category: "", description: "", rating: "" });
        setLoading(false);
        navigate("/browse");
      }
    }, 100);
  };

  return (
    <div className="w-3/4 mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-[#FEAC5E] text-center mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={book.title} className="block w-full p-2 border mb-2"/>
        <input type="text" name="author" placeholder="Author" onChange={handleChange} value={book.author} className="block w-full p-2 border mb-2"/>
        <input type="text" name="category" placeholder="Genre" onChange={handleChange} value={book.category} className="block w-full p-2 border mb-2"/>
        <textarea name="description" placeholder="Description" onChange={handleChange} value={book.description} className="block w-full p-2 border mb-2"></textarea>
        <input type="number" min="0" max="5" step="0.5" name="rating" placeholder="Rating (1-5)" onChange={handleChange} value={book.rating} className="block w-full p-2 border mb-2"/>
        
        {loading ? (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-[#13beca] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        ) : (
          <button type="submit" className="bg-[#FEAC5E] text-white px-4 py-2 rounded">Add Book</button>
        )}
      </form>
    </div>
  );
};

export default AddBook;
