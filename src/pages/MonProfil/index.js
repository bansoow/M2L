import React, { useEffect, useState } from "react";
//import Navbar from "../Navbar";
import PP from "../../images/profil_img.jpg";

import "./styles.css";
import Button_send from "../../components/atoms/button/Button_send";
import axios from "axios";

const MonProfil = () => {
  const [profil, setProfil] = useState([]);

  //Requete API qui récupère la liste des produits
  function callRequest() {
    axios
      .get("http://localhost:8000/api/listeProduit/")
      .then((response) => {
        setProfil(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    callRequest();
  }, []);

  return (
    <div id="MonProfil" className="text-center">
      <img className="PP" src={PP} />
      <h2>Nom Prenom</h2>
      <br />
      <input type="email" className="m-2 p-2" placeholder="Email" />
      <br />
      <Button_send />
      <br />
      <br />
      <div className="responsive">
        <div className="commande">
          <h2 className="mesCommandes">Mes commandes</h2>
          <br />
          <img src="/lorraine.jpg"></img>
          <p>Commande n*33450</p>
          <time dateTime="13/04/2022">13/04/2022</time>
          <p className="p-con">45€</p>
        </div>
        <div className="commande">
          <h2 className="voirPlus">Voir plus</h2>
          <br />
          <img src="/lorraine.jpg"></img>
          <p>Commande n*33450</p>
          <time dateTime="13/04/2022">13/04/2022</time>
          <p className="p-con">45€</p>
        </div>
      </div>
    </div>
  );
};

export default MonProfil;
