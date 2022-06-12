import React from "react";
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";
import "./styles.css";

const Panier = () => {
  function increment() {
    document.getElementById("qty").stepUp();
  }
  function decrement() {
    document.getElementById("qty").stepDown();
  }

  return (
    <div id="panier">
      <div className="title">
        <h3 className="panier">Panier</h3>
        <div className="obj-supp">
          <h3>4 Objets</h3>
          <h3 className="suppr">
            <BsFillTrashFill />
            Supprimer séléctionner
          </h3>
        </div>
      </div>
      <div className="grid-liste">
        <div className="liste">
          <div className="flex-vignette">
            <div className="vignette">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="apercu">
                <img src="/Volant.jpg" alt="" />
              </div>
              <div className="ajout">
                <h4>
                  Volant badminton <br />
                  <span className="enStock">En stock</span>
                  <br />
                  <span>35€</span>
                </h4>
                <div className="flex-input">
                  <div className="input-qtt">
                    <button
                      type="button"
                      className="qtyminus"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      name="qty"
                      id="qty"
                      min="1"
                      max="10"
                      value="1"
                    />
                    <button
                      type="button"
                      className="qtyplus"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <div className="input-trash">
                    <BsFillTrashFill />
                  </div>
                </div>
              </div>
            </div>

            <div className="vignette">
              <div className="checkbox">
                <input type="checkbox" />
              </div>
              <div className="apercu">
                <img src="/Volant.jpg" alt="" />
              </div>
              <div className="ajout">
                <h4>
                  Volant badminton <br />
                  <span className="enStock">En stock</span>
                  <br />
                  <span>35€</span>
                </h4>
                <div className="flex-input">
                  <div className="input-qtt">
                    <button
                      type="button"
                      className="qtyminus"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      name="qty"
                      id="qty"
                      min="1"
                      max="10"
                      value="1"
                    />
                    <button
                      type="button"
                      className="qtyplus"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <div className="input-trash">
                    <BsFillTrashFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="commande">
              <h4 className="prix">
                Total : <span>35€</span>
              </h4>
              <a href="/commande">
                <button type="button" className="btn-passer">
                  Passer la commande
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
