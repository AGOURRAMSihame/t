const express = require('express');
const passport = require('../config/passport'); 

const router = express.Router();


router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/' }),
  (req, res) => {
   
    res.redirect('http://localhost:3000/dashboard');
  }
);



module.exports = router;
