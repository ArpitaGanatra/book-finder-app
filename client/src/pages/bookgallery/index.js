import React, { useState } from "react";

import BookCard from "./BookCard";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import {
  Grid,
  TextField,
  InputAdornment,
  SvgIcon,
  CircularProgress,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
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
    // border: none;
  
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
    flexGrow: 1,
    padding: "40px",
    width: "100%",
  },
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
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  searchbox: {
    display: "flex",

    marginBottom: "35px",
    borderBottom: "2px solid rgb(24,33,109)",
    padding: "35px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: " space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  pageheading: {
    fontSize: "24px",
    color: "rgb(24,33,109)",
    fontWeight: 600,
    fontFamily: "'Plus Jakarta Display'",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
}));

function BookGallery() {
  const classes = useStyles();

  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);

  console.log("dff", books);

  const [filters, setFilters] = useState({
    hasAcceptedMarketing: null,
    isProspect: null,
    isReturning: null,
  });

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const applyFiltersforbook = (list_object, query, filters, properties) => {
    return list_object.filter((selectedobject) => {
      let matches = true;

      if (query) {
        let containsQuery = false;

        properties.forEach((property) => {
          if (
            selectedobject[property].toLowerCase().includes(query.toLowerCase())
          ) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
      }

      Object.keys(filters).forEach((key) => {
        const value = filters[key];

        if (value && selectedobject[key] !== value) {
          matches = false;
        }
      });

      return matches;
    });
  };

  const filteredBooks = applyFiltersforbook(books, query, filters, ["title"]);

  return (
    <Container className={classes.container}>
      <div className={classes.root}>
        <div className={classes.searchbox}>
          <div className={classes.pageheading}>Find your favorite books</div>
          <StyledTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            onChange={handleQueryChange}
            placeholder="Search...."
            value={query}
            variant="outlined"
            size="medium"
            fullwidth
          />
        </div>

        {filteredBooks.length === 0 ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={3}>
            {filteredBooks.map((book) => (
              <Grid item xs={12} lg={6} key={book.id}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Container>
  );
}

export default BookGallery;
