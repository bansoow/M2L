import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import scoot from "../../images/scooter.jpg";
import images from "../../images/Gants-1.png";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const [produit, setProduit] = useState([]);

  //Requete API qui récupère la liste des produits
  function callRequest() {
    axios
      .get("http://localhost:8000/api/listeProduit/")
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
      <Col md={6} className="center mb-3">
        <a href="/listeproduit">
          <h2>{element.nom_produit}</h2>
          <img className="img" src={images} alt="" />
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
        <img className="middle" src={scoot} alt="" />
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
