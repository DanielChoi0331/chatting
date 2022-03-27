 //Import the express dependency
const app = require('express')();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);


//Idiomatic expression in express to route and respond to a client request
app.get('/',(req, res) => {        //get requests to the root ("/") will route here
  res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
});

app.get('/chat', (req, res) => {
  res.sendFile('chatroom.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
});




var usernames = ['holy','shit'];



httpServer.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
});


io.on('connection', (socket) => {
  socket.emit('usernames',usernames);
});