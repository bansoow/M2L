import React from 'react';
import Button_connect from '../../components/atoms/button/Button_connect';
import ImagePrincipale from '../../components/atoms/ImagePrincipale';
import Input_email from '../../components/atoms/input/Input_email';
import Input_password from '../../components/atoms/input/Input_password';

import './styles.css';

const Connexion = () => {
    
    return (
        <div className='text-center' id='connexion'>
            <ImagePrincipale />
            <h2>Connexion</h2>
            <br />
            <Input_email />
            <br />
            <Input_password />
            <br />
            <p className='p-con'>Mot de passe oublié ? <a className='lien' href="/recuperation">Récupération du mot de passe</a></p>
            <a className='lien' href="/">
            <Button_connect />
            </a>
            <p className='p-con'>Pas de compte ? <a className='lien' href="/inscription">Inscription</a></p> 
        </div>
    )
    
}

export default Connexion;