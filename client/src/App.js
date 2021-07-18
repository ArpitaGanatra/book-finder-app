import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "./actions/books";
import { SnackbarProvider } from "notistack";

// import { Router } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <SnackbarProvider>
        <Router>
          <AppRoutes />
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
