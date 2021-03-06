const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

exports.create = function(blog){
 return Blog.create(blog);
};

exports.find = function(query){
  return Blog.find(query).select('categories title');
};

exports.findById = function(id){
  return Blog.findById(id);
};
