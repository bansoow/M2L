import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import scoot from "../../images/scooter.jpg";
import images from "../../images/Gants-1.png";
import images1 from "../../images/Blouson-1.jpg";
import images2 from "../../images/Pantalon.jpg";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const [produit, setProduit] = useState([]);  
    axios
      .get('http://localhost:8000/api/listeProduit/')
      .then((response) => {setProduit(response.data)})
      .catch((error) => {console.log(error);});

  let displayProduit = (
    produit.map(element => {
      return <h1>{element.nom_client}</h1>
    })
  )
    return (
      <div>
        <Container id="home">
          {produit.length === 0 ? console.log("produit is undefined") : displayProduit }
          
            
        <img className="middle" src={scoot} alt=""/>
          <Row className="mt-4">
            <Col md={6} className="center">
              <a href='/liste-des-produits'>
                <h2>Gants</h2>
                <img src={images} alt="" />
              </a>
            </Col>
            <Col md={6} className="center">
            <a href='/liste-des-produits'>
                <h2>Blouson</h2>
                <img src={images1} alt="" />
              </a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6} className="center">
            <a href='/liste-des-produits'>
                <h2>Pantalon</h2>
                <img src={images2} alt="" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Home;   