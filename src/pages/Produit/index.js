import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
//import Navbar from "../Navbar";

import oui from "../../images/MiraiNikki.png";

const Produit = () => {
  const [produit, setProduit] = useState([]);
  
  //Requete API qui récupère le produit
  function callRequest() {
    var get = window.location.pathname;
    var valeur = get.replace("/produit/", "");

    console.log("montre le truc : " + get);
    console.log("vrai truc : " + valeur);

    axios
      .get("http://localhost:8000/api/produit/"+valeur+"")
      .then((response) => {
        setProduit(response.data);
        console.log(setProduit);
      })
      .catch((error) => {
        console.log(error);
      });

      
  }

  let nomDuProduit = produit.map((element) => {

    var note = element.note_produit;

    return (
      <div id="produit">
      <br />
      <div className="responsive text-center">
        <img className="produit" src={"/"+element.nom_produit+".jpg"} alt="" />
        <br />
        <h2>{element.nom_produit}</h2>
        <br />
        <div className="stars text-center">
          <p>{note}/5</p>
          
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="details">
          Description
          <p>
            {element.description_produit}
          </p>
    
          <p>
            taille : {element.taille_produit}m
          </p>

          <p>
            poids : {element.taille_produit}kg
          </p>

        </div>
        <button className="btn1">Ajouter à la liste</button>
        <button className="btn2">Ajouter au panier</button>
      </div>
    </div>

    );
  });

  useEffect(() => {
    callRequest();
  }, []);

  return (
    <div className="flex-vignette">{nomDuProduit}</div>
  );

  };

export default Produit;
