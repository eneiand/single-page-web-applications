/*
 * app.js - Hello World
*/

/*jslint         node    : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white : true
*/
/*global */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
  countUp,
  http    = require( 'http'    ),
  express = require( 'express' ),
  socketIo = require( 'socket.io' ),
    
  app     = express(),
  server  = http.createServer( app ),
  io = socketIo.listen(server),
  countIdx = 0;
// ------------- END MODULE SCOPE VARIABLES ---------------


countUp = function() {
  countIdx++;
  console.log(countIdx);
  io.sockets.send( countIdx );
};


// ------------- BEGIN SERVER CONFIGURATION ---------------
app.configure( function() {
  app.use( express.static( __dirname + '/' ) );
});


app.get( '/', function ( request, response ) {
  response.redirect( '/socket.html' );
});

// -------------- END SERVER CONFIGURATION ----------------

// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
   server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------

setInterval( countUp, 1000 );