import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ListeProduit = (props) => {
  const [produit, setProduit] = useState([]);
  const { id } = useParams;

  console.log();

  //Requete API qui récupère la liste des produits
  function callRequest(id) {
    console.log(id)
    axios
      .get(`http://localhost:8000/api/listeProduit/categorie/${id}`)
      .then((response) => {
        setProduit(response.data);
        console.log(setProduit);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    callRequest();
  }, []);

    return (
      <div>
        
      {produit.map((element) => (

        <div id="listeProduit">
        <div className="liste">
          <div className="title">
            <h2>{element.nom_produit}</h2>
          </div>
        <div className="vignette">
          <a className="redirect" href="/produit">
            <img className="img" src={`/images/${element.nom_produit}.jpg`.split(' ').join('_')} alt="missing" />
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
        </div>
        </div>
      ))}
      </div>
  );
};

export default ListeProduit;