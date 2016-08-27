const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const db = require('./db');
const blogRouter = require('./routers/blogs');
const app = express();
const port = process.env.PORT || 3030;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use('/blogs',blogRouter);
app.listen(port,function(){
  console.log('app is running on:' + port);
});
