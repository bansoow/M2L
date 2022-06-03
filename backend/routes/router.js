const router = require("express-promise-router")();

const { insertUser, selectUser } = require("../controllers/users");
const { produit } = require("../controllers/produit");
const { panier } = require("../controllers/panier");
const { listeProduit } = require("../controllers/listeProduit");

router.route("/listeProduit/").get(listeProduit);

router.route("/produit/").get(produit);

router.route("/panier/").get(panier);

router.route("/auth/").get(selectUser);

router.route("/users/").post(insertUser);

module.exports = router;
