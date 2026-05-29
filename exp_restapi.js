//all imports
let exp = require('express');
let mysql = require('mysql2');
let cors = require('cors')

//basic app
let app = exp();
app.listen(9000, function() {
   console.log("exp started - rest API");
})


//db connect
let con = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"knowitdb"
})
con.connect(function(err) {
   if(!err)
      console.log("db connected");
   else
      console.log("db connection failed")
})

//routes
app.get('/hello',function(req,res){
    res.send("Hello world !!");
})

app.post('/login', function(req,res){
     //middleware
     let unm = req.body.uname;
     let pwd = req.body.password;
     console.log(unm+" : "+pwd)
     let query = "select * from users where username = ? and password = ?";
     con.query(query,[unm,pwd],function(err,result) {
        if(!err){
            if(result.length === 1){
               res.status(200).send("login success")
            }
            else
               res.status(200).send("login failed")
        }
        else
           res.status(500).send("could not fetch");
    }) 
})


//genral route
app.all('/*splat', function(req,res) {
    res.send("Invalid URL");
})


