//all imports
let exp = require('express');
let mysql = require('mysql2');
let cors = require('cors')

//basic app
let app = exp();
app.listen(9000, function() {
   console.log("exp started - rest API");
})

app.get('/hello',function(req,res){
    res.send("Hello world !!");
})

app.post('/login',function(req,res){
   let uname = req.body.uname;
   let pwd = req,body.pwd;
   let query = "select * from users where username = ? and password = ?";
   con.query(query, [uname,pwd], function(err, result) {
      if(!err) {
          if(result.length === 1) 
               res.status(200).send("Login success");
          else
               res.status(200).send("Login failed"); 
      }
      else {
          res.status(500).send("could not fetch");
      }
   })
})

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

