const Article = require("../models/Article");


const create = async (req, res, next) => {
  console.log(req.user)
  if(!req.user.isAdmin){
    return res.status(200).json('You are not allowed to create an Article')
  }
  const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g,'-');
  const newArticle = new Article({
    ...req.body,slug,userId:req.user._id
  })
  try{
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);

  }catch(err){
    next(err);
  }
}

module.exports = { create };