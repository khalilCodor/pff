import React, { useState } from "react";
import '../Styles/Acceuil.css'

function Acceuil() {
  const [formData, setFormData] = useState({
    depart: "",
    destination: "",
    date: "",
    number: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Do something with the form data here, like send it to a server
  };

  return (
    <div className="reservation-form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container input-container-left-border">
          <select
            name="depart"
            value={formData.depart}
            onChange={handleInputChange}
            className="select-input"
          >
            <option value="">Départ</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
          </select>
        </div>
        <div className="input-container input-container-left-border">
          <select
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            className="select-input"
          >
            <option value="">Destination</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
          </select>
        </div>
        <div className="input-container input-container-left-border">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="date-input"
          />
        </div>
        <div className="input-container input-container-left-border">
            
          <input type="number" name="number" value={formData.number}onChange={handleInputChange} className="number-input" placeholder="number" />
        </div>
        <button type="submit" className="search-button">Rechercher</button>
      </form>

      <div className="cards-container">
        <div className="card">
          <h2 className="card-title">Petits Prix</h2>
          <p className="card-text">Eu ainim mollit eiusmod eiusmod magna Lorem est dolor quis reprehenderit dolore labore Lorem amet consectetur ipsum sint.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Trouver Votre Conducteurs</h2>
          <p className="card-text">Eu ainim mollit eiusmod eiusmod magna Lorem est dolor quis reprehenderit dolore labore Lorem amet consectetur ipsum sint.</p>
        </div>
        <div className="card">
          <h2 className="card-title">Vos Trahets Préférés</h2>
          <p className="card-text">Eu ainim mollit eiusmod eiusmod magna Lorem est dolor quis reprehenderit dolore labore Lorem amet consectetur ipsum sint.</p>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;

