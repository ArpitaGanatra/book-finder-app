import BookModel from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const bookModel = await BookModel.find();
    // console.log(bookModel);
    res.status(200).json(bookModel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  const book = req.body;
  const newBook = new BookModel(book);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
