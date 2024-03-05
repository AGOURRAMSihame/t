const bcryptjs = require('bcryptjs');
const Users = require('../models/User');
const { response } = require('express');

const updateUser = async (req, res, next) => {
  if(req.user._id !==req.params.userId) {
    return res.json({statusCode: 403 , message:'You are not allowed to update this user'}) ;
  }
  if(req.body.password){
    req.body.password = bcryptjs.hashSync(req.body.password,10);
  }

  try {
    const updateUser = await Users.findByIdAndUpdate(req.params.userId, {
      $set: {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        password: req.body.password,
        photoProfile: req.body.photoProfile,
        affiliation: req.body.affiliation,
      },
    }, { new: true });
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    console.log(err);
    throw { statusCode: 401, message: err.message }
  }
}

const deleteUser = async (req, res, next) => {

  try {
    if (req.user._id !== req.params.userId) {
     return res.status(200).json('You are not allowed to delete this user')
    }
    await Users.findByIdAndDelete(req.params.userId);
    res.status(200).json('user has been deleted')
  } catch (err) {
    throw { statusCode: 401, message: err.message }
  }
}

const logout = (req, res) => {
  try{
    res.clearCookie('jwt').status(200).json('User has been logged out');
  }catch(err){

  }
}

module.exports = { updateUser, deleteUser ,logout};