import axios from "axios";

const url = "/books";

export const fetchBooks = async () => await axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);
