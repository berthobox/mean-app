var express = require('express');

var app = express();

app.set('port',3000);

var server = app.listen(app.get('port'),function(){ //funzione di callback
  var port= server.address().port;
  console.log('Magic happens on port ' + port);
}); //porta su cui xpress ascolta
