const express = require('express');
const {updateUser,deleteUser,logout} = require('../controllers/UserController.js'); 
const authenticate = require('../middleware/authenticate.js'); 


const router = express.Router();


router.put('/update/:userId', authenticate,updateUser);
router.delete('/delete/:userId', authenticate,deleteUser);
router.post('/logout',logout);


module.exports = router;