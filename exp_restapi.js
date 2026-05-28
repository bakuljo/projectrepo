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

