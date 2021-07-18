import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  published_year: String,
  selectedFile: String,
  description: String,
  imgurl: String,
});

const BookModel = mongoose.model("BookModel", bookSchema);
export default BookModel;
