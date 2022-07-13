import styled from 'styled-components';

const Form = styled.form`
display:flex;
justify-content:center;
border: 1px black solid;
width:430px;
padding:5px;

`;

export const SearchBar = styled.div`
margin:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
export const Main = styled.div `
display:flex;
flex-direction:column;
align-items:center;
justify-content:start;
background-color:  #00ADB5;
/* background-color: ${({theme})=> theme.colors.main } */
height:calc(100vh - 48px);
`;

export const CardContainer = styled.div `
display:grid;
grid-template-columns: auto auto auto auto;
grid-template-rows:auto auto auto
align-items : center;
justify-content:center;
background-color:  green;

`;

export const Cards =styled.div`
    background-color: #00ADB5;
    width : 200px;
    height : 200px;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.7)`;

export const FoodImg = styled.img`
width: 100px;
padding: 1 rem;
margin:5px`;




export default Form;
