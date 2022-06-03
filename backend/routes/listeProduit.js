const router = require('express-promise-router')();

const { listeProduit, getByCategorie } = require('../controllers/listeProduit');

router.route('/')
    .get(listeProduit);

router.route('/listeProduit/categorie/:id')
    .get(getByCategorie);

module.exports = router;