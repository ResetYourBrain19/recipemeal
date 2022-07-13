import {Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";


function App() {

const theme = {
  colors: {
    header: "#E0F1DD",
    main: "#00ADB5",
  footer: "#00ADB5",
  text: "white",
  }
}

  return (

    <ThemeProvider theme={theme}>

      <div className="App">

        <Navbar/>

        <Routes>  
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="details" element={<Details />}/>
        </Routes>

      </div>

     </ThemeProvider>
  );
}

export default App;
