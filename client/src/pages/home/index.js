import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import homeimg from "../../homeimg.jpg";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto",
    padding: "0px 60px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      padding: "0px 0px",
    },
  },
  contentsection: {
    position: "relative",
    padding: "10rem 0px 8rem",
  },
  animate: {
    position: "relative",
    animationDuration: "1000ms",
    animationTimingFunction: "ease",
    animationDelay: "0ms",
    animationName: "animation-9e64fq",
    animationDirection: "normal",
    animationFillMode: "both",
    animationIterationCount: "1",
  },
  wrapper: {
    rowGap: "0px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexFlow: "row wrap",
  },
  leftcontent: {
    position: "relative",
    maxWidth: "540px",
  },
  buttons: {
    display: "flex",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    maxWidth: "75%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      padding: " 0px 20px",
    },
  },
  heading: {
    fontFamily: "Plus Jakarta Display, serif",
    color: "rgb(24, 33, 109)",
    fontSize: "56px",
    lineHeight: 1.18,
    fontWeight: 500,
    marginTop: "0",
    marginBottom: ".5em",
    textAlign: "initial",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  },
  subheading: {
    fontFamily: "Plus Jakarta Display, serif",
    margin: "1.5rem 0px 2rem",
    color: "rgb(24, 33, 109)",
    fontSize: "21px",
    lineHeight: 1.41,
    textAlign: "initial",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  button_link: {
    fontSize: "1rem",
    fontWeight: 700,
    width: "100%",
    border: "1px solid rgb(237, 243, 245)",
    borderRadius: "4px",
    padding: "13px 0px",
    cursor: "pointer",
    marginTop: "0.625rem",
    maxWidth: "180px",
    transition: "all 0.3s ease-in-out 0s",
    boxShadow: "rgb(23 31 114 / 20%) 0px 16px 30px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "151px",
    },
  },
  gridcontainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <section className={classes.contentsection}>
        <div className={classes.animate}>
          <Grid container className={classes.gridcontainer}>
            <Grid item xs={12} sm={6}>
              <img
                style={{ width: "100%" }}
                src={homeimg}
                alt="left section cover"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftcontent}>
                <Typography className={classes.heading}>
                  Search Your Favorite Books @BookFinder App
                </Typography>
                <p className={classes.subheading}>
                  “Books are the ultimate Dumpees: put them down and they’ll
                  wait for you forever; pay attention to them and they always
                  love you back.”
                </p>
                <div className={classes.buttons}>
                  <Link
                    to="/bookgallery"
                    className={classes.button_link}
                    style={{
                      fontFamily: "Plus Jakarta Display, serif",
                      background: "rgb(46, 24, 106)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Explore Books
                  </Link>
                  <Link
                    to="/addbook"
                    className={classes.button_link}
                    style={{
                      fontFamily: "Plus Jakarta Display, serif",
                      background: "#fff",
                      color: "rgb(46, 24, 106)",
                    }}
                  >
                    Add Book
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default Home;
