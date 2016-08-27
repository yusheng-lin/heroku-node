const mongoose = require('mongoose');
const blog = require('./models/blog');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://yusheng:yushenglin@ds017165.mlab.com:17165/mongo');

mongoose.model('Blog',blog);

module.exports = mongoose;
