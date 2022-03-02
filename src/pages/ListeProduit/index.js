import React, { useState } from "react";
import images from '../../images/Gants-1.png';
import './styles.css';
import axios from "axios";

const ListeProduit = () => {
  const [produit, setProduit] = useState([]);  
  axios
    .get('http://localhost:8000/api/listeProduit/')
    .then((response) => {setProduit(response.data)})
    .catch((error) => {console.log(error);});

  let nomProduit = (
    produit.map(element => {
    return <h4>{element.nom_produit}</h4>
    return <h6>{element.marque_produit}</h6>
  })
  )
  let marqueProduit = (
    produit.map(element => {
      return <h6>{element.marque_produit}</h6>
    })
  )
  let prixProduit = (
    produit.map(element => {
      return <h3>{element.prix_produit}</h3>
    })
  )
  return (
      <div id="listeProduit">
        <div className="liste">
          <div className="title">
            <h2>Gants moto</h2>
            <h2>Voir plus</h2>
          </div>
          <div className='flex-vignette'>
            <div className="vignette">
              <a className="redirect" href="/produit">
              <img src={images} />
              </a>
              <div className="subTitle">
                <div>
                  {nomProduit}
                  {marqueProduit}
                </div>
                <div className='price'>
                  {prixProduit}
                </div>
              </div>
            </div>
            <div className="vignette">
              <a className="redirect" href="/produit">
              <img src={images} />
              </a>
              <div className="subTitle">
                <div>
                  <h4>Gants jet D30 noir</h4>
                  <h6>PARIS 17 - il y a deux jours</h6>
                </div>
                <div className='price'>
                  <h3>12€</h3>
                </div>
              </div>
            </div>
            <div className="vignette">
              <a className="redirect" href="/produit">
              <img src={images} />
              </a>
              <div className="subTitle">
                <div>
                  <h4>Gants jet D30 noir</h4>
                  <h6>PARIS 17 - il y a deux jours</h6>
                </div>
                <div className='price'>
                  <h3>12€</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="liste">
          <div className="title">
            <h2>Gants été</h2>
            <h4>Voir plus</h4>
          </div>
          <div className="vignette">
            <a className="redirect" href="/produit">
            <img src={images} />
            </a>
            <div className="subtTitle">
              <div>
                <h4>Gants jet D30 noir</h4>
                <h6>PARIS 17 - il y a deux jours</h6>
              </div>
              <div>
                <h3>12€</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="liste">
          <div className="title">
            <h2>Gants hiver</h2>
            <h4>Voir plus</h4>
          </div>
          <div className="vignette">
            <a className="redirect" href="/produit">
            <img src={images} />
            </a>
            <div className="subtTitle">
              <div>
                <h4>Gants jet D30 noir</h4>
                <h6>PARIS 17 - il y a deux jours</h6>
              </div>
              <div>
                <h3>12€</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ListeProduit;