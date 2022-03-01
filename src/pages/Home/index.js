import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import scoot from "../../images/scooter.jpg";
import images from "../../images/Gants-1.png";
import images1 from "../../images/Blouson-1.png";
import images2 from "../../images/Pantalon.png";
import Navbar from '../Navbar';
import "./styles.css";

const Home = () => {
    console.log(images);
  
    return (
      <div>
        <Container id="home">
        <img className="middle" src={scoot} />
          <Row className="mt-4">
            <Col md={6} className="center">
              <a href='/listeproduit'>
                <h2>Gants</h2>
                <img className="img" src={images} />
              </a>
            </Col>
            <Col md={6} className="center">
            <a href='/listeproduit'>
                <h2>Blouson</h2>
                <img className="img" src={images1} />
              </a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6} className="center">
            <a href='/listeproduit'>
                <h2>Pantalon</h2>
                <img className="img" src={images2} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Home;   