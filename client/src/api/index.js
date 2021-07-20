import axios from "axios";

const url = "";

export const fetchBooks = async () => await axios.get(url);

export const createBook = (newBook) => axios.post(url, newBook);
