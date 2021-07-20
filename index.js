import express from "express";
// import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/books.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: "true",
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

// Accessing the path module
const path = require("path");

// Step 1:
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}
// Step 2:
// app.get("*", function (req, resp) {
//   response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
