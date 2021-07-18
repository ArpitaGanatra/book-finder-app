import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "rgb(23 31 114 / 20%) 0px 16px 30px",
    borderRadius: "31px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: "225px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
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

  title: {
    textAlign: "justify",
    display: " -webkit-box",
    "-webkit-line-clamp": "1",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  moreDetails: {
    fontFamily: "Plus Jakarta Display, serif",
    background: "#fff",
    color: "rgb(46, 24, 106)",
    fontSize: "1rem",
    fontWeight: 700,
    width: "100%",

    borderRadius: "4px",
    padding: "13px 0px",
    cursor: "pointer",
    marginTop: "0.625rem",
    maxWidth: "180px",
    transition: "all 0.3s ease-in-out 0s",

    textDecoration: "none",
  },
}));

function BookCard(book) {
  const classes = useStyles();

  const { title, author, description, published_year, imgurl } = book.book;

  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.cover}>
          {imgurl ? (
            <img
              style={{ height: "100%", width: "230px" }}
              src={imgurl}
              alt="book"
            ></img>
          ) : (
            <img
              style={{ height: "100%", width: "230px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"
              alt="book"
            ></img>
          )}
        </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.title}>
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              style={{ display: "flex" }}
            >
              <i>{`By ${author}`}</i>
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              {published_year}
            </Typography>
            <div
              className={classes.description}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              {description}
            </div>
          </CardContent>

          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.moreDetails}

              // onClick={handleClick}
            >
              More Details
            </Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}

export default BookCard;
