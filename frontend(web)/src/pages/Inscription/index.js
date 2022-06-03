import axios from "axios";
import React, { useState } from "react";
import ImagePrincipale from "../../components/atoms/ImagePrincipale";
import validator from 'validator';

import "./styles.css";

const Inscription = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      if (event.target[3].value === event.target[4].value) {
        axios
          .post("http://localhost:8000/api/users/", {
            prenom: event.target[0].value,
            nom: event.target[1].value,
            email: event.target[2].value,
            mdp: event.target[3].value,
          })
          .then((response) => {
            setData(response);
          });
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
      } else {
        alert("Mot de passe non identique");
      }
    } else {
      alert("Formulaire non valide");
    }
  };

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {

    if(validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
    })) {
      setErrorMessage('Mot de passe fort')
    } else {
      setErrorMessage('Mot de passe faible')
    }
  }

  const [data, setData] = useState([]);

  return (
    <div className="text-center" id="inscription">
      <ImagePrincipale />
      <h2>Inscription</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" className="m-2 p-2" placeholder="Prenom" required />
        <br />
        <input type="text" className="m-2 p-2" placeholder="Nom" required />
        <br />
        <input type="email" className="m-2 p-2" placeholder="Email" required />
        <br />
        <input
          type="password"
          onChange={(e) => validate(e.target.value)}
          className="m-2 p-2"
          placeholder="Mot de passe"
          required
        />
        <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
        <br />
        <input
          type="password"
          className="m-2 p-2"
          placeholder="Retappez le mot de passe"
        />
        <br />
        <br />
        <button type="submit" className="btn">
          Inscription
        </button>
      </form>
      <p className="p-con">
        Déjà un compte ?{" "}
        <a className="lien" href="/connexion">
          Connexion
        </a>
      </p>
    </div>
  );
};

export default Inscription;