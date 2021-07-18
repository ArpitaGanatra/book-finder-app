import axios from "axios";

const url = "http://localhost:5000/books";

export const fetchBooks = async () => await axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);
