const { Schema } = require( 'mongoose' );

blogSchema = new Schema({
  title:String,
  categories: String,
  content:String,
  create_at:Date,
  update_at:Date
});

blogSchema.pre('save',function(next){
  const now = new Date();
  if(!this.create_at)
    this.create_at = now;
  this.update_at = now;
  next();
});

module.exports = blogSchema;
