// import logo from './logo.svg';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


import Acceuil from "./components/Acceuil"
import Nav from "./components/Nav";
import Rechercher from "./components/Rechercher";
import PublierTrajet from "./components/Publier-un-traajet";
import Wallet from "./components/Wallet";
import Contact from "./components/Contact";
import Login from "./components/Login";





function App() {
  return (  
    <BrowserRouter>
    
    <Nav/>
    
    
    <Routes>
    <Route path="/" element={<Acceuil/>} />
    <Route path="/Rechercher" element={<Rechercher/>} />
    <Route path="/Wallet" element={<Wallet/>} />
    <Route path="/PublierTrajet" element={<PublierTrajet/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Login" element={<Login/>} />

    </Routes>
    </BrowserRouter>



  );
}

export default App;
