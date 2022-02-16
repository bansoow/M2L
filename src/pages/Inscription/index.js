import React from 'react';
import Input_email from '../../components/atoms/input/Input_email';
import Input_password_retype from '../../components/atoms/input/input_password_retype';
import Input_password from '../../components/atoms/input/Input_password';
import ImagePrincipale from '../../components/atoms/ImagePrincipale';
import Button_register from '../../components/atoms/button/Button_register';

const Inscription = () => {
    
    return (
        <div className="text-center">
            <ImagePrincipale />
            <h2>Inscription</h2>
            <br />
            <br />
            <Input_email />
            <br />
            <Input_password />
            <br />
            <Input_password_retype/>
            <br />
            <br />
            <a className='lien' href="/">
            <Button_register />
            </a>
            <p className='p-con'>Déjà un compte ? <a className='lien' href="/connexion">Connexion</a></p>
        </div>
    )

}

export default Inscription;