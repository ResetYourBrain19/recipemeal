import React from 'react'
import { FoodImg } from '../home/style';
import {useLocation} from "react-router-dom";

const Details = () => {
  const recipe = useLocation();
 
  const {label,image} = recipe;
  console.log(label);
  return (
    <div>Details
    {label}
   
    Lorem, ipsum dolor sit ame
    </div>
  )
}

export default Details