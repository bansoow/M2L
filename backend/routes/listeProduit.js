const router = require('express-promise-router')();

const { listeProduit } = require('../controllers/users');

router.route('/')
    .get(listeProduit);

module.exports = router;