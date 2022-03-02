import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Notes from "../Notes";
import scoot from "../../images/scooter.jpg";
import images from "../../images/Gants-1.png";
import images1 from "../../images/Blouson-1.jpg";
import images2 from "../../images/Pantalon.jpg";
import "./styles.css";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    axios
      .get('localhost:8000/api/listeProduit/')
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setNotes(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
    console.log(images);
    return (
      <div>
        <Container id="home">
        <h1>Using Axios</h1>
      {notes && <Notes data={notes} />}
      {isError && <div>Error fetching data.</div>}
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