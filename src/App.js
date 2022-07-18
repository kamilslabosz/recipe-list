import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import SiteNavbar from "./components/Navbar";
import SiteFooter from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Recipe from "./components/Recipe";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);

  function addRecipe(newRecipe) {
    console.log(newRecipe);
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
        <CreateArea onAdd={addRecipe}/>
        {allRecipes.map((recipeItem, index) => {
            return (
              <Container className="mb-4 bg-light rounded-3">
              <Recipe
                key={index}
                id={index}
                title={recipeItem.title}
                preparation={recipeItem.preparation}
                ingredients={recipeItem.ingredients}
                onDelete={deleteRecipe}
                />
                </Container>
              )
          })}
        
      </Container>
      <SiteFooter />
    </div>
  );
}

export default App;
