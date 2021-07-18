import express from "express";
const router = express.Router();
import { getBooks, createBook } from "../controllers/books.js";

router.get("/", getBooks);
router.post("/", createBook);

export default router;
