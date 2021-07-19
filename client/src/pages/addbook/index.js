import * as Yup from "yup";
import { useFormik } from "formik";

import React, { useState } from "react";
import NewBookForm from "./NewBookForm";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link, IconButton } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { createBook } from "../../actions/books";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "30px 50px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      maxWidth: "100vw",
    },
  },
}));

// ----------------------------------------------------------------------

function AddBook() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const NewBookSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    description: Yup.string().required("Description is required"),
    published_year: Yup.number().required("Published Year is requried"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      published_year: "",
      description: "",
      imgurl: "",
    },
    validationSchema: NewBookSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        const bookdata = {
          title: values.title,
          author: values.author,
          published_year: values.published_year,
          description: values.description,
          // imgurl: imgFile,
          imgurl: values.imgurl,
        };
        await dispatch(createBook(bookdata));

        resetForm();

        setSubmitting(false);
        enqueueSnackbar("Book added to collection", { variant: "success" });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.code });
      }
    },
  });

  return (
    <>
      <Container className={classes.container}>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100vw",
            marginLeft: "80px",
          }}
        >
          <Link href="/">
            <IconButton>
              <ArrowBackRoundedIcon
                fontSize="large"
                style={{ color: "rgb(24,33,109)" }}
              />
            </IconButton>
          </Link>
        </div>
        <div style={{ minWidth: "1200px", display: "flex" }}></div>
        <NewBookForm formik={formik} />
      </Container>
    </>
  );
}

export default AddBook;
