var express = require('express');
var app = express();
var path = require('path');
var account = require('./modules/accountbalance.js')

app.use('/static', express.static(path.join(__dirname + '/static')));


app.get('/', function(request, response, next){
    response.sendFile(path.join(__dirname, './index.html'));

});

app.get('/balance', function(request, response, next){

  response.send(account.balance() + " $" + account.money(100,1000000));

});

app.listen(3000, function(){
  console.log("I'm listening!");
});
