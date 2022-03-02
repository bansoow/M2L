const router = require('express-promise-router')();

const { panier } = require('../controllers/users');

router.route('/')
    .get(panier);

module.exports = router;