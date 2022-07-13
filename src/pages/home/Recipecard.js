import React from 'react'
import { Button } from 'react-bootstrap';
import Details from '../details/Details';
import { CardContainer, Cards, FoodImg } from './style';
import {useNavigate, useLocation} from "react-router-dom";

const Recipecard = ({tutorials}) => {

  const navigate = useNavigate();

return(
 <CardContainer>
{tutorials?.map(({recipe}, index)=>{
  const {label,image} = recipe;

  return (

    <Cards>
                    <div >
                <p>
                    {label}
                </p>
            </div>
             <div >
                <FoodImg src={image}/>
            </div>
            <div>
              <Button onClick={()=>navigate ("/details/", {recipe})  }>Learn More</Button>
            </div>
       
    </Cards>

)
  
})
}
</CardContainer>
)

    




}

export default Recipecard