const express = require('express');

const app = express();

app.get('/mult', function(req, res){
    var op1 = req.query.op1
    var op2 = req.query.op2
    var result = op1 * op2;
    res.send(`Resultado = ${result}`)
    console.log(`Resultado = ${result}`)

});

app.listen(5000, function(){
    console.log("Listening on port 5000")
});