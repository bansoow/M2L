import React from 'react';
import Navbar from '../Navbar';
import Gants from '../../images/Gants-1.png';

import './styles.css';

const Commande = () => {
    
    return (
        <div id="commande">
            <button className='btn-retour'>Retour</button>
            <div className='h2'>
                <h2>Passer la commande</h2>
            </div>

            <div id='container-produit'>
                <div class="produit">
                    <div class="description">
                        <p class="gras">Metal Earrings</p>
                        <span class="gras">35€</span>
                        <span class="droite">En stock</span>
                        <br /><span class="nombre">Quantité : 2</span>
                    </div>
                    <img src={Gants} alt='image gants'></img>
                </div>

                <div className="produit">
                    <div className="description">
                        <p className="gras">Metal Earrings</p>
                        <span className="gras">35€</span>
                        <span className="droite">En stock</span>
                        <br /><span class="nombre">Quantité : 2</span>
                    </div>
                    <img src={Gants} alt='image gants'></img>
                </div>
            </div>

            <br />

            <div className="reservation">
                <p className="gras">Réservation</p>
                <button type='button'>Confirmer</button>
            </div>

        </div>
    )

}

export default Commande;