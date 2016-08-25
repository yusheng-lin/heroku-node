const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

const router = express.Router();

router.use(function(req,res,next){
  console.log(req.method,req.url);
    // continue doing what we were doing and go to the route
  next();
});

router.get('/',function(req,res){
  res.render('index');
});


// apply the routes to our application
app.use('/', router);

app.listen(port,function(){
  console.log('app is running on:' + port);
});
