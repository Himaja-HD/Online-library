import { createSlice } from "@reduxjs/toolkit";
import booksData from "../Booksdata"; 

const getStoredBooks = () => {
  return JSON.parse(localStorage.getItem("books")) || [];
};


const initialState = {
  books: [...booksData, ...getStoredBooks()]
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.books.filter(book => !booksData.some(b => b.id === book.id))));
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
