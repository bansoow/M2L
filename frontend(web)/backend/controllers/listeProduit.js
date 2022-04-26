const pool = require('../config/database');

module.exports = {
    listeProduit: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('select * from t_categorie INNER JOIN t_produit ON t_categorie.id_categorie = t_produit.idcategorie_produit;');
            return res.status(200).json( result )
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    },
    getByCategorie: async (req, res, next) => {
        let connexion;
        try {
            connexion = await pool.getConnection();
            const result = await connexion.query('select * from t_produit INNER JOIN t_categorie ON t_produit.id_produit = t_categorie.id_categorie WHERE t_categorie.id_categorie = '+ req.params.id);
            return res.status(200).json( result )
        } catch (error) {
            return res.status(400).json({ error: error.message });
        } finally {
            if (connexion) connexion.end()
        }
    }

}