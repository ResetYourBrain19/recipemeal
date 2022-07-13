import Button, { Div, LogoText } from "./style";
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
<Div>
<LogoText primary>
    <LogoText>
      &lt;ED8EN/&gt;
    </LogoText>

      <div>
          <Button style = {{color: '#00ADB5'}} >  <Link style={{textDecoration: 'none'}} to = "/" > RECIPE</Link>  </Button> 
      </div>
</LogoText>  
    
   <div>
      <Button> <Link style={{textDecoration: 'none'}} to = "about" > ABOUT </Link> </Button>
      <Button> <a style={{textDecoration:'none'}} href = "https://github.com" target = "_blank" rel="noreferrer"> GITHUB </a> </Button>
      <Button > <Link style={{textDecoration: 'none'}} to = "/" > LOGOUT</Link> </Button>
   </div>
</Div>
  )
}

export default Navbar