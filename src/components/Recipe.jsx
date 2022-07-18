import React from "react";

function Recipe(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.preparation}</p>
      {props.ingredients.map((ingredientItem, index) => {
            return (
                <p key={index} id={index}>
                {ingredientItem.name} {ingredientItem.volume} {ingredientItem.unit}
                </p>
            )
        })}
      <button onClick={handleClick}>
      <h1>X</h1>
      </button>
    </div>
  );
}

export default Recipe;
