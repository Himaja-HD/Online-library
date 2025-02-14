import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
    <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 text-[#13beca] hover:underline text-lg">
      Go back to Home
    </Link>
  </div>
);

export default PageNotFound;
