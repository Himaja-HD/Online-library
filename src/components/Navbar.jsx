import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] text-white font-bold p-6 flex justify-between items-center">
    <Link to="/">
      <h1 className="text-2xl font-bold">Online Library</h1>
    </Link>
    <div className="flex gap-6">
      <Link to="/" className="hover:text-lg hover:underline">Home</Link>
      <Link to="/browse" className="hover:text-lg hover:underline">Browse Books</Link>
      <Link to="/add" className="hover:text-lg hover:underline">Add Book</Link>
    </div>
  </nav>
);

export default Navbar;