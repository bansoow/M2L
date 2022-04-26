import React from 'react';
// eslint-disable-next-line no-unused-vars
import ImagePrincipale from '../../components/atoms/ImagePrincipale';
import Input_email from '../../components/atoms/input/Input_email';
import Button_send from '../../components/atoms/button/Button_send';

import './styles.css';

const Recuperation = () => {
    
    return (
        <div className="text-center" id="recuperation">
            <ImagePrincipale />
            <h2>Aide avec le mot de passe</h2>
            <p className='p-con'>Saisissez l'adresse e-mail associé à votre compte Scoot'heure</p>
            <Input_email />
            <br />
            <a className='lien' href="/recuperation2">
            <Button_send />
            </a>
        </div>
    )

}

export default Recuperation;