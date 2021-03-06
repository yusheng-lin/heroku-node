const express = require('express');
const service = require('../services/blogService');
const router = express.Router();

router.get('/',function(req,res){
 service.find({})
  .then(blogs => res.json(blogs))
  .catch(err => res.json({err}));
});

router.post('/',function(req,res){
  const blog  = req.body;
  service.create(blog)
  .then(blog => res.status(201).json(blog))
  .catch(err => res.json({err}));
});

router.get('/:id',function(req,res){
  service.findById(req.params.id)
  .then(blog => res.json(blog))
  .catch(err => res.json({err}));
});

module.exports =router;
