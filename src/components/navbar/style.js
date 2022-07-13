import styled from "styled-components";


const Button = styled.button `
color: #00ADB5;
background-color: #E0F1DD;
border:none;
margin:5px 10px;
text-decoration: none;
`
export const Div = styled.div `
background-color: #E0F1DD;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size:1.5rem;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  color: #00ADB5;
  text-decoration: none;

`;


export const LogoText = styled.div `
color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 1.2rem;

  font-family: ${(primary) => (primary ? "'Roboto', sans-serif" : "'Edu TAS Beginner', cursive")
  }

`;

export default Button;