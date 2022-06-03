const pool = require("../config/database");

module.exports = {
  insertUser: async (req, res, next) => {
    let connexion;
    try {
      connexion = await pool.getConnection();
      const { prenom, nom, email, mdp } = req.body;

      console.log("info", nom);
      const result = await connexion.query(
        "INSERT INTO t_client (`nom_client`,`prenom_client`,`mail_client`,`mdp_client`) VALUES ('" +
          nom +
          "','" +
          prenom +
          "','" +
          email +
          "','" +
          mdp +
          "');"
      );
      console.log(result);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    } finally {
      if (connexion) connexion.end();
    }
  },
  selectUser: async (req, res, next) => {
    let connexion;
    try {
      connexion = await pool.getConnection();
      const { email, mdp } = req.body;
      const result = await connexion.query(
        "SELECT mdp_client FROM t_client WHERE mail_client = '" + email + ";"
      );
      if (mdp === result) {
        return true;
      }
      console.log(result);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    } finally {
      if (connexion) connexion.end();
    }
  },
};
