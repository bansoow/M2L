import axios from "axios";
import React from "react";
import ImagePrincipale from "../../components/atoms/ImagePrincipale";

import "./styles.css";

const Connexion = () => {
  const login = (mail, password) => {
    return axios
      .post("http://localhost:8000/api/auth/", {
        mail,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  return (
    <div className="text-center" id="connexion">
      <ImagePrincipale />
      <h2>Connexion</h2>
      <form onSubmit={login}>
        <br />
        <input type="email" className="m-2 p-2" placeholder="Email" />
        <br />
        <input type="password" className="m-2 p-2" placeholder="Mot de passe" />
        <br />
        <br />
        <button className="btn">Connexion</button>
      </form>
      <p className="p-con">
        Pas de compte ?{" "}
        <a className="lien" href="/inscription">
          Inscription
        </a>
      </p>
    </div>
  );
};

export default Connexion;