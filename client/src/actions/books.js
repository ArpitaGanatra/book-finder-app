import * as api from "../api";
import { FETCH_ALL, CREATE } from "../constants/actionTypes";

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
