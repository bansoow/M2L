import React from "react";
import Navbar from "../Navbar";

import "./styles.css";
import produit from "../../images/MiraiNikki.png";

const Produit = () => {
  return (
    <div id="produit">
      <br />
      <div className="responsive text-center">
        <img className="produit" src={produit} />
        <br />
        <h2>GANTS TOUCHY NOIR</h2>
        <br />
        <div className="stars text-center">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            hendrerit massa, vitae fringilla risus. Praesent a lobortis tellus,
            et tincidunt sem. Quisque et dolor vitae enim posuere semper. Etiam
            pellentesque, dui vel mattis tincidunt, sem ipsum molestie sapien,
            ac consectetur est ligula vitae mauris. Aliquam scelerisque blandit
            sapien et semper. In vulputate vehicula tellus sed volutpat. Quisque
            a auctor tellus. Donec nec posuere leo.
          </p>
        </div>
        <button className="btn1">Ajouter à la liste</button>
        <button className="btn2">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default Produit;
