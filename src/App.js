import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Recuperation from './pages/Recuperation';
import Inscription from './pages/Inscription';
import MonProfil from './pages/MonProfil';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import Commande from './pages/Commande';
import NotFound from './pages/NotFound';
import Navbar from './pages/Navbar';
import ListeProduit from './pages/ListeProduit';
import './App.css';
import Recuperation2 from './pages/Recuperation2';

const App = () => {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/recuperation" element={<Recuperation />} />
          <Route path="/recuperation2" element={<Recuperation2 />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<MonProfil />} />
          <Route path="/produit/:id" element={<Produit />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/ListeProduit/:id" element={<ListeProduit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );

}

export default App;
