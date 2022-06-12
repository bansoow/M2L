import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const [produit, setProduit] = useState([]);

  //Requete API qui récupère la liste des produits
  function callRequest() {
    axios
      .get("http://localhost:8000/api/listeCategorieProduit/")
      .then((response) => {
        setProduit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Fonction affichage des produits
  let displayProduit = produit.map((element) => {
    console.log(element);
    return (
      <Col md={6} className="center mb-3" id={element.id_produitCategorie}>
        <a href={"/listeproduit/"+element.id_produitCategorie}>
          <h2>{element.libelle_categorie}</h2>
          <img className="img" src={"/"+element.libelle_categorie+".jpg"} alt="" />
        </a>
      </Col>
    );
  });
  useEffect(() => {
    callRequest();
  }, []);
  return (
    <div>
      <Container id="home">
        <img className="middle logo" src="/m2l_logo.png" alt="logo"/>
        <Row className="mt-4">
          {produit.length === 0
            ? console.log("produit is undefined")
            : displayProduit}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
