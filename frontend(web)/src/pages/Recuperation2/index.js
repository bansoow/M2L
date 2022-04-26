import React from 'react';
// eslint-disable-next-line no-unused-vars
import ImagePrincipale from '../../components/atoms/ImagePrincipale';
import Input_old_password from '../../components/atoms/input/Input_old_password';
import Input_new_password from '../../components/atoms/input/Input_new_password';
import Button_reset from '../../components/atoms/button/Button_reset';

import './styles.css';

const Recuperation2 = () => {
    
    return (
        <div className="text-center" id="recuperation2">
            <ImagePrincipale />
            <h2>Aide avec le mot de passe</h2>
            <p className='p-con'>Retapez votre nouveau mot de passe</p>
            <br />
            <Input_new_password />
            <br />
            <Input_new_password />
            <br />
            <br />
            <a className='lien' href="/connexion">
            <Button_reset />
            </a>
        </div>
    )
    
}

export default Recuperation2;