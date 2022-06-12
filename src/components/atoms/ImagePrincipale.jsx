import React from 'react';
import '../../App.css';
import Scoot from '../../images/Badminton_logo.png'

function ImagePrincipale() {
    return(
        <div className='text-center'>
            <img src={Scoot} alt='scoot' className="logo"/>
            <br />
            <h1 className='h1'>Scoot'heure</h1>
            <br />
        </div>
    )
}

export default ImagePrincipale;