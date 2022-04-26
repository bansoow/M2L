import React from 'react';
import Navbar from '../Navbar';
import PP from '../../images/profil_img.jpg';
import commande from '../../images/MiraiNikki.png';

import './styles.css';
import Input_email from '../../components/atoms/input/Input_email';
import Button_send from '../../components/atoms/button/Button_send';

const MonProfil = () => {
    
    return (
        <div id='MonProfil' className='text-center'>
            <img className='PP' src={PP} />
            <h2>Nom Prenom</h2>
            <br />
            <Input_email />
            <br />
            <Button_send />
            <br />
            <br/>
                <div className='responsive'>
                    <div className='commande'>
                        <h2 className='mesCommandes'>Mes commandes</h2>
                        <br />
                        <img src={commande}></img>
                        <p>Commande n*33450</p>
                        <time dateTime='13/04/2022'>13/04/2022</time>
                        <p className='p-con'>45€</p>
                    </div>
                    <div className='commande'>
                        <h2 className='voirPlus'>Voir plus</h2>
                        <br />
                        <img src={commande}></img>
                        <p>Commande n*33450</p>
                        <time dateTime='13/04/2022'>13/04/2022</time>
                        <p className='p-con'>45€</p>
                    </div>
                </div>
                <br />
                <div className='responsive'>
                        <div className='commande'>
                            <h2 className='mesCommandes'>Mes commandes</h2>
                            <br />
                            <a className='lien' href="/produit">
                            <img src={commande}></img>
                            </a>
                            <p>Commande n*33450</p>
                            <time dateTime='13/04/2022'>13/04/2022</time>
                            <p className='p-con'>45€</p>
                        </div>
                        <div className='commande'>
                            <h2 className='voirPlus'>Voir plus</h2>
                            <br />
                            <img src={commande}></img>
                            <p>Commande n*33450</p>
                            <time dateTime='13/04/2022'>13/04/2022</time>
                            <p className='p-con'>45€</p>
                        </div>
                    </div>
        </div>
    )

}

export default MonProfil;