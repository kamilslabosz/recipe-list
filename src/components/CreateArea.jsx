import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AddIcon from '@mui/icons-material/Add';
import Button from 'react-bootstrap/Button';


function CreateArea(props) {
    
    const [allIngredients, setAllIngredients] = useState([])

    
    const [ingredient, setIngredient] = useState({
        name: "",
        volume: "",
        unit: ""
    })

    const [recipe, setRecipe] = useState({
        title: "",
        preparation: "",
        ingredients: allIngredients,
    });

    function handleChangeRecipe(event) {
        const { name, value } = event.target;
        setRecipe((prevRecipe) => {
            return {
                ...prevRecipe,
                [name]: value
            };
        });
    }

    function handleChangeIngredient(event) {
        const { name, value } = event.target;
        setIngredient((prevIngredient) => {
            return {
                ...prevIngredient,
                [name]: value
            };
        });
    }

    function submitRecipe(allIngredients){
        console.log(allIngredients);
        props.onAdd(recipe);
        setRecipe({
            title: "",
            preparation: "",
            ingredients: allIngredients
        });
        setAllIngredients([])
    }

    function addIngredient(){
        setAllIngredients((prevIngredients) => [...prevIngredients, ingredient])
        setIngredient({
            name: "",
            volume: "",
            unit: ""
        })
    }

    const [render, setRender] = useState(false);

    function startRecipe() {
        setRender(true);
  }

  return (
      <div>
      <h1 onClick={startRecipe}>Click Here to add recipe!</h1>
      {render && 
      (<Form>
        <Form.Group>
        <Form.Control 
            type="text"
            name="title"
            onChange={handleChangeRecipe}
            value={recipe.title}
            placeholder="Name of the recipe"
        />
        <Form.Text className="text-muted">
          So you can find it easily!
        </Form.Text>
        </Form.Group>
        <Form.Group>
        <Form.Control 
          as="textarea"
          name="preparation"
          onChange={handleChangeRecipe}
          value={recipe.preparation}
          placeholder="Step by step preparation"
          style={{ height: '100px' }}
        />
        <Row className="align-items-center">
        <Col xs="auto">
        <Form.Control 
          type="text"
          name="name"
          onChange={handleChangeIngredient}
          value={ingredient.name}
          placeholder="Add ingredient"
        />
        </Col>
        <Col xs="1">
        <Form.Control 
          type="number"
          name="volume"
          onChange={handleChangeIngredient}
          value={ingredient.volume}
          placeholder="Volume"
        />
        </Col>
        <Col xs="2">
        <Form.Select
        value={ingredient.unit}
        onChange={handleChangeIngredient}
        name="unit"
        >
            <option>Pick unit</option>
            <option value="g">Grams</option>
            <option value="kg">Kilograms</option>
            <option value="ml">Militer</option>
            <option value="l">Liter</option>
            <option value="piece">Piece</option>
        </Form.Select>
        </Col>
        <Col xs="1"><AddIcon onClick={addIngredient} /></Col>
        </Row>
        </Form.Group>
        
        {allIngredients.map((ingredientItem, index) => {
            return (
                <p key={index} id={index}>
                {ingredientItem.name} {ingredientItem.volume} {ingredientItem.unit}
                </p>
            )
        })}
        <Button variant="success" onClick={submitRecipe}>Add Recipe</Button>{' '}

  </Form>
  )}
  </div>
  )
}

export default CreateArea;
