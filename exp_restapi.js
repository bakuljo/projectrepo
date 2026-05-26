//all imports
let exp = require('express');
let mysql = require('mysql2');
let cors = require('cors')

//basic app
let app = exp();
app.listen(9000, function() {
   console.log("exp started - rest API");
})