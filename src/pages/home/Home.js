import React from 'react'
import { useState,useEffect } from 'react'
import Form, { Main, SearchBar } from './style'
import { mealOptions } from '../../data'
import Select, {components} from "react-select";
import axios from 'axios';
import Approuter from '../../router/Approuter';
import Recipecard from './Recipecard';

const Home = () => {
const [isSubmit, setIsSubmit] = useState(false)
const [tutorials, setTutorials] = useState([])

const [inputValue, setInputValue] = useState("");
const [inputValuemeal, setInputValuemeal] = useState("");

const url = 'https://api.edamam.com/search?q=${query}&app_id=${afe7b890}&app_key=${e72adfeec2494c4cfc11323caeaa0c41}&mealType=${meal}'

const getTutorials =async(query,meal)=>{
  try {
      const data = await axios(`https://api.edamam.com/search?q=${query}&app_id=afe7b890&app_key=e72adfeec2494c4cfc11323caeaa0c41&mealType=${meal}`)
setTutorials(data.data.hits)
console.log(data.data.hits);
  } catch (error) {
     console.log(error);
      }
}


  useEffect(() => {
    getTutorials(inputValuemeal,inputValue);
  }, []);

const handleChange = (value)=>{
console.log(value.value);
setInputValue(value.value);

}

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log("taget val:",inputValuemeal);
  getTutorials(inputValuemeal, inputValue);
  setIsSubmit(true)

}

  return (
<Main>

<SearchBar>
    <p>Food App</p> 
    <Form onSubmit={handleSubmit}>
    {
      console.log(inputValue)}
      {
      console.log(inputValuemeal)
    }
        <input onChange={(e)=>{setInputValuemeal(e.target.value)}} type="search" name="search" id="search" />
        <button style={{margin:'0 5px'}} type="submit">Search</button>
        <Select onChange={handleChange} options={mealOptions} label="please"></Select>
        

    </Form>
</SearchBar>
{isSubmit && <Recipecard  tutorials={tutorials}/>}
  </Main>
  )
}

export default Home