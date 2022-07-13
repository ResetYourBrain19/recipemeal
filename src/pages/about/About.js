import React from 'react'
import Div, { AboutText, Span, WorkingDiv } from './style'
import coding from "../../assets/coding.svg"


const About = () => {
  return (
<Div>
<WorkingDiv  src={coding}/>
<div>
  About Software Developer <Span>ED BEN</Span> 
</div>
<AboutText>
  <p>I'm Ed</p>
  <p>I'm currently learning Full-Stack Development Languages</p>
  <p>I've already known JS,ReactJS, ReactNative,MangoDB, SQL, Python,AWS Services.</p>
  <p> <Span primary>Send email:</Span> edwardbenexyz@gmail.com </p>
</AboutText>

</Div>
  )
}

export default About