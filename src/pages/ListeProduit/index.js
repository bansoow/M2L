import React, { useState, useEffect } from "react";
import images from "../../images/Gants-1.png";
import "./styles.css";
import axios from "axios";

const ListeProduit = () => {
  const [produit, setProduit] = useState([]);

  //Requete API qui récupère la liste des produits
  function callRequest() {
    axios
      .get("http://localhost:8000/api/listeProduit/")
      .then((response) => {
        setProduit(response.data);
        console.log(setProduit);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let nomProduit = produit.map((element) => {
    return (
      <div className="vignette">
        <a className="redirect" href="/produit">
          <img src={images} alt="" />
        </a>
        <div className="subTitle">
          <div>
            <h4>{element.nom_produit}</h4>
            <h6>{element.marque_produit}</h6>
          </div>
          <div className="price">
            <h3>{element.prix_produit}€</h3>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    callRequest();
  }, []);

  return (
    <div id="listeProduit">
      <div className="liste">
        <div className="title">
          <h2>Gants moto</h2>
          <h2>Voir plus</h2>
        </div>
        <div className="flex-vignette">{nomProduit}</div>
      </div>
    </div>
  );
};

export default ListeProduit;
