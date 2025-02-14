import rk from "./assets/books/rk.jpg";
import ha from "./assets/books/harry.jpg";
import al from "./assets/books/alchemist.jpg";
import ta from "./assets/books/tata.jpg";
import my from "./assets/books/1984.jpg";

const books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", img: ha, rating: 4.9, description: "A young wizard embarks on a journey of magic, friendship, and adventure, facing dark forces and discovering his true destiny." },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", img: al, rating: 4.7, description: "A shepherd boy travels to find treasure, learning profound life lessons about dreams, fate, and personal legends along the way." },
  { id: 3, title: "1984", author: "George Orwell", category: "Fiction", img: my, rating: 4.8, description: "A dystopian society under constant surveillance where independent thought is suppressed, showcasing the dangers of totalitarianism and propaganda." },
  { id: 4, title: "My Dateless Diary", author: "R.K. Narayan", category: "Biography", img: rk, rating: 4.5, description: "A collection of witty and insightful observations by the author during his travels in America, capturing cultural contrasts and personal experiences." },
  { id: 5, title: "Ratan Tata", author: "Thomas Mathew", category: "Biography", img: ta, rating: 4.6, description: "An inspiring account of the life and achievements of Ratan Tata, a visionary businessman and philanthropist shaping India's industrial landscape." },
  { id: 6, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", img: "du", rating: 4.8, description: "A futuristic epic set on a desert planet, where politics, power, and survival intertwine in an interstellar struggle for control." },
  { id: 7, title: "Becoming", author: "Michelle Obama", category: "Biography", img: "be", rating: 4.9, description: "A memoir reflecting on the former First Lady's life journey, from childhood to the White House, filled with resilience and hope." },
  { id: 8, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", img: "sa", rating: 4.8, description: "An insightful exploration of human history, evolution, and culture, analyzing how Homo sapiens came to dominate the world." },
  { id: 9, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", img: "gg", rating: 4.6, description: "A tragic story of love, wealth, and the American Dream, set in the Roaring Twenties, revealing the era's moral decay." },
  { id: 10, title: "Brave New World", author: "Aldous Huxley", category: "Sci-Fi", img: "bnw", rating: 4.7, description: "A chilling vision of a future society controlled by technology, conditioning, and pleasure, questioning the cost of stability and happiness." },
  { id: 11, title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", img: "sj", rating: 4.8, description: "An in-depth biography of the visionary Apple co-founder, detailing his creative genius, struggles, and revolutionary impact on technology." },
  { id: 12, title: "Educated", author: "Tara Westover", category: "Biography", img: "ed", rating: 4.7, description: "A memoir of a woman who escapes a strict, survivalist upbringing and pursues education, transforming her life against all odds." },
  { id: 13, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", img: "cr", rating: 4.5, description: "A rebellious teenager's journey through New York City, capturing themes of alienation, identity, and the struggles of growing up." },
  { id: 14, title: "Cosmos", author: "Carl Sagan", category: "Sci-Fi", img: "co", rating: 4.9, description: "An enlightening journey through the universe, blending science, philosophy, and wonder to explore the vastness of space." },
  { id: 15, title: "Born a Crime", author: "Trevor Noah", category: "Biography", img: "bc", rating: 4.8, description: "A comedian's memoir of growing up in apartheid South Africa, navigating identity, humor, and resilience in a divided world." }
];

export default books;
