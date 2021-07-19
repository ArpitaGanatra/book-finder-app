import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";

import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardroot: {
    display: "flex",
    boxShadow: "rgb(23 31 114 / 20%) 0px 16px 30px",
    borderRadius: "31px",
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
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
    // padding: "13px 0px",
    cursor: "pointer",
    // marginTop: "0.625rem",
    maxWidth: "180px",
    transition: "all 0.3s ease-in-out 0s",

    textDecoration: "none",
  },
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogcontentroot: {
    flexGrow: 1,
  },
  dialogImg: {
    height: "500px",
    width: "500px",
    [theme.breakpoints.down("md")]: {
      height: "50vh",
      width: "90vw",
    },
  },
  dialogContent: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  dialogInfo: {
    maxWidth: "750px",
    padding: "0px 20px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100vw",
      padding: "0px 0px",
    },
  },
}));

function BookCard(book) {
  const classes = useStyles();
  const theme = useTheme();
  const { title, author, description, published_year, imgurl } = book.book;

  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const DialogTitle = withStyles((props) => {
  //   const { children, classes, onClose, ...other } = props;
  //   return (
  //     <MuiDialogTitle disableTypography className={classes.root} {...other}>
  //       <Typography variant="h6">{children}</Typography>
  //       {onClose ? (
  //         <IconButton
  //           aria-label="close"
  //           className={classes.closeButton}
  //           onClick={onClose}
  //         >
  //           <CloseIcon />
  //         </IconButton>
  //       ) : null}
  //     </MuiDialogTitle>
  //   );
  // });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
        maxWidth="lg"
        classes={{
          MuiDialog: classes.MuiDialog, // class name, e.g. `root-x`
          paperWidthLg: classes.paperWidthLg, // class name, e.g. `disabled-x`
        }}
      >
        <DialogTitle
          style={{ height: "30px" }}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.dialogContent}>
            <div>
              {imgurl ? (
                <img className={classes.dialogImg} src={imgurl}></img>
              ) : (
                <img
                  className={classes.dialogImg}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDj4OgRgtZXmDJBJs-lSvQxIy_65ONomt7Q&usqp=CAU"
                ></img>
              )}
            </div>
            <div className={classes.dialogInfo}>
              <div>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{
                    textAlign: "justify",
                  }}
                >
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
                <div>{description}</div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

      <Card className={classes.cardroot}>
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

          <CardActions style={{ padding: "0px", paddingLeft: "16px" }}>
            <Button
              size="small"
              color="primary"
              className={classes.moreDetails}
              onClick={handleClickOpen}
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
