import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import SiteNavbar from "./components/Navbar";
import SiteFooter from "./components/Footer";

import "./App.css";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);

  function addRecipe(newRecipe) {
    setAllRecipes((prevValues) => [...prevValues, newRecipe]);
  }

  function deleteRecipe(id) {
    setAllRecipes((prevValues) =>
      prevValues.filter((item, index) => index !== id)
    );
  }

  return (
    <div>
      <SiteNavbar />
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">Welcome To React-Bootstrap</h1>
        </Container>
      </Container>
      <SiteFooter />
    </div>
  );
}

export default App;
