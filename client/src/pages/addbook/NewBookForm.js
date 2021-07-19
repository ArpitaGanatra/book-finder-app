import clsx from "clsx";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, FormikProvider } from "formik";

import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import emptyimg from "./img_empty_state.jpg";
import FileBase64 from "react-filebase64";

// ----------------------------------------------------------------------

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    
    display:none;
  }

  .MuiInputBase-root {
    background-color: white;
    border-radius: 31px;
    font-family:Plus Jakarta Display;
    
    color:rgb(24, 33, 109) &:hover fieldset {
      border-color: rgb(24, 33, 109);
    }
    &.Mui-focused fieldset {
      border-color: rgb(24, 33, 109);
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiInputBase-input:invalid {
    height: 25px;
  }
  .MuiInputLabel-formControl {
    top: 1px;
    left: 16px;
    font-size:18px
    font-family:Plus Jakarta Display;
  }
  .PrivateNotchedOutline-legendLabelled-8{
    top: -10px;
    display:none
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  margin: {
    marginBottom: theme.spacing(3),
  },
  helperText: {
    padding: theme.spacing(0, 2),
  },

  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  content: {
    flex: "1 0 auto",
    textAlign: "justify",
    display: " -webkit-box",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  cover: {
    height: "225px",
  },
  title: {
    display: " -webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  description: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    justifyContent: "flex-start",
    textAlign: "justify",

    display: " -webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  cardroot: {
    display: "flex",
    minWidth: "100%",
  },
  leftgrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  formcard: {
    padding: "40px",
    backgroundColor: "#f2f2f2",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  cardcontent_title: {
    color: "rgb(24, 33, 109)",
    fontSize: "30px",
    fontWeight: "500",
    fontFamily: "Plus Jakarta Display, Serif",
    textTransform: "uppercase",
    textAlign: "center",
  },
  moreDetails: {
    fontFamily: "Plus Jakarta Display, serif",
    background: "#fff",
    color: "rgb(46, 24, 106)",
    fontSize: "1rem",
    fontWeight: 700,
    width: "100%",

    borderRadius: "4px",
    // padding: "13px 0px",
    cursor: "pointer",
    // marginTop: "0.625rem",
    maxWidth: "180px",
    transition: "all 0.3s ease-in-out 0s",

    textDecoration: "none",
  },
}));

// ----------------------------------------------------------------------

NewPostForm.propTypes = {
  formik: PropTypes.object.isRequired,
  onOpenPreview: PropTypes.func,
  className: PropTypes.string,
};

function NewPostForm({
  formik,
  imgFileData,
  onOpenPreview,
  className,
  ...other
}) {
  const classes = useStyles();
  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
  } = formik;
  const [imgurl1, setimgurl1] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={6} className={classes.leftgrid}>
          <Card className={classes.cardroot}>
            <CardMedia className={classes.cover}>
              {imgurl1 ? (
                <img
                  style={{ height: "100%", width: "230px" }}
                  src={imgurl1}
                  alt="book"
                ></img>
              ) : (
                <img
                  style={{ height: "100%", width: "230px" }}
                  src={emptyimg}
                  alt="book"
                ></img>
              )}
            </CardMedia>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  component="h5"
                  variant="h5"
                  className={classes.title}
                >
                  {values.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  style={{ display: "flex" }}
                >
                  <i>{`By ${values.author}`}</i>
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  style={{ display: "flex", marginBottom: "10px" }}
                >
                  {values.published_year}
                </Typography>
                <div
                  className={classes.description}
                  textOverflow="ellipsis"
                  overflow="hidden"
                >
                  {values.description}
                </div>
              </CardContent>

              <CardActions style={{ padding: "0px", paddingLeft: "16px" }}>
                <Button
                  size="small"
                  color="primary"
                  className={classes.moreDetails}
                >
                  More Details
                </Button>
              </CardActions>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Card className={classes.formcard}>
            <CardContent>
              <p className={classes.cardcontent_title}>
                Add a book to collection
              </p>
              <FormikProvider value={formik}>
                <Form
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className={clsx(classes.root, className)}
                  {...other}
                >
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    label="Book Title"
                    {...getFieldProps("title")}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                    className={classes.margin}
                    required
                  />
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    label="Book Author"
                    {...getFieldProps("author")}
                    error={Boolean(touched.author && errors.author)}
                    helperText={touched.author && errors.author}
                    className={classes.margin}
                    required
                  />
                  <StyledTextField
                    fullWidth
                    variant="outlined"
                    label="Published Year"
                    {...getFieldProps("published_year")}
                    error={Boolean(
                      touched.published_year && errors.published_year
                    )}
                    helperText={touched.published_year && errors.published_year}
                    className={classes.margin}
                    required
                  />

                  <StyledTextField
                    fullWidth
                    multiline
                    variant="outlined"
                    rows={5}
                    label="Description"
                    {...getFieldProps("description")}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                    className={classes.margin}
                  />

                  <div className={classes.margin}>
                    <FileBase64
                      multiple={false}
                      onDone={({ base64 }) => {
                        setFieldValue("imgurl", base64);
                        setimgurl1(base64);
                      }}
                    />
                  </div>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      pending={isSubmitting}
                      style={{
                        backgroundColor: "rgb(24,33,109)",
                        padding: " 0px 20px",
                        height: "62px",
                        minWidth: "125px",

                        borderRadius: "31px",
                        color: "#fff",
                      }}
                    >
                      Post
                    </Button>
                  </Box>
                </Form>
              </FormikProvider>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default NewPostForm;
