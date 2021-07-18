import React from "react";
import { Route } from "react-router-dom";
import AddBook from "./pages/addbook";
import BookGallery from "./pages/bookgallery";
import Home from "./pages/home";

function AppRoutes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/bookgallery" component={BookGallery} />
      <Route exact path="/addbook" component={AddBook} />
    </div>
  );
}

export default AppRoutes;
