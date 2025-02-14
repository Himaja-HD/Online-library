import { Link } from "react-router-dom";
import Cover from "../assets/book_reader.svg";
import f from "../assets/genre/f.png";
import nf from "../assets/genre/n-f.jpg";
import sci from "../assets/genre/sc-fi.png";
import mys from "../assets/genre/mystery.jpg";
import bio from "../assets/genre/biography.jpg";
import books from "../Booksdata";

const categories = [
  { title: "Fiction", img: f },
  { title: "Non-Fiction", img: nf },
  { title: "Sci-Fi", img: sci },
  { title: "Mystery", img: mys },
  { title: "Biography", img: bio },
];

const Home = () => (
  <div className="relative w-full">
    <div
      className="flex-grow p-6 mb-30 flex flex-col relative top-20 bg-cover bg-center bg-no-repeat h-[50vh]"
      style={{
        backgroundImage: `url(${Cover})`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="items-start bg-gradient-to-r from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] bg-clip-text text-transparent text-6xl font-bold px-4 text-left">
        Welcome to the <br /> Online Library
      </h1>
    </div>
    <hr className="h-1 bg-[#FEAC5E] border-none" />
    <h2 className="p-6 text-3xl text-[#13beca] text-center font-semibold mb-2">
      Book Categories
    </h2>

    <div className="flex justify-around p-3 mt-6 mb-25">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-auto bg-white shadow-md rounded-lg p-3 text-center transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-28 h-20 rounded-full"
          />
          <h4 className="mt-2 text-[#ed7403] text-sm font-semibold">
            {category.title}
          </h4>
        </div>
      ))}
    </div>

    <hr className="h-1 bg-[#FEAC5E] border-none w-1/2 mx-auto" />
<div className="mt-10 mb-20">
    <h2 className="p-6 text-3xl text-[#13beca] text-center font-semibold my-8">
      Popular Books
    </h2>
    <div className="flex flex-wrap justify-center gap-6 mx-20">
      {books.slice(0, 5).map((book) => (
        <div
          key={book.id}
          className="w-64 bg-white shadow-md rounded-lg  flex items-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            src={book.img}
            alt={book.title}
            className="w-25 h-25 rounded-sm"
          />
          <div className="flex flex-col px-6">
          <span className="text-lg text-[#ed7403] font-medium text-center ">{book.title}</span>
          <Link
            to={`/book/${book.id}`}
            className="mt-4 ml-8 text-[#13beca] font-bold text-right hover:underline text-xs"
          >
            View Details
          </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
);

export default Home;
