const express = require('express');
const {create} = require('../controllers/ArticleController'); 
const authenticate = require('../middleware/authenticate'); 


const router = express.Router();

router.post('/create', authenticate,create);



module.exports = router;