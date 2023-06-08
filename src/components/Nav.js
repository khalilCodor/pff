import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Nav.css"




const Nav = () => {
  const navigate = useNavigate();




  // LOGO  click 
const OnLogoClick = useCallback(() => {
  navigate("/");
}, [navigate]);





// acceuil click 
  const OnAcceuilClick = useCallback(() => {
    navigate("/");
  }, [navigate]);





// rechercheer click
  const OnRechercherClick = useCallback(() => {
    navigate("/reservation");
  }, [navigate]);





// wallet click
const OnWalletClick = useCallback(() => {
  navigate("/a-propos-de");
}, [navigate]);




 // publier click
  const OnPublierClick = useCallback(() => {
    navigate("/ListResrvation");
  }, [navigate]);




  // contact click

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);


   // contact Login

   const OnLoginClick = useCallback(() => {
    navigate("/Login");
  }, [navigate]);

  

  return (
    <div className="navbar">
      <h1 className="the-river1" onClick={OnLogoClick}> Klaxon</h1>

      <div className="MyLinks">
        <Link to="/" className="MyLink" onClick={OnAcceuilClick}>  Accueil</Link>


        <Link to="/Rechercher" className="MyLink" onClick={OnRechercherClick}> Rechercher </Link>


        <Link to="/Wallet" className="MyLink" onClick={OnWalletClick} > Wallet  </Link>



         <Link to="/PublierTrajet" className="MyLink" onClick={OnPublierClick}> Publier-un-traajet </Link>

       
        <Link to="/Contact" className="MyLink" onClick={onContactClick}>Contact </Link>
        <Link to="/Login" className="MyLink" onClick={OnLoginClick}>Login </Link>

        
      </div>
      <div className="rectangle-group">
        <select className="language_select">
          <option value="FR">FR</option>
        </select>
      </div>
      
    </div>
  );
};

export default Nav;









