var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);
console.log("server runnig at http://localhost/");

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', function (socket) {

    //1. Calling a function on the client
    socket.emit('Ping');

    //2. Calling a function on the client with a number parameter
    //socket.emit('Ping',100);

    //3. Calling a function on the client with a string parameter
    //socket.emit('Ping', 'this is a string');

    //4. Calling a function on the client with an object parameter
    //socket.emit('Ping', {myObjectKey: 'my object value as a string'});

    //5
    //socket.on('Pong', function () {
    //    console.log('Pong');
    //});

    //6
    //socket.on('Pong', function (data) {
    //    console.log('Pong : ' + data);
    //});

    //7
    //socket.on('Pong', function (data) {
    //    console.log('Pong : ' + data.anotherObjectKey);
    //});

    //8 Ping Pong
    //socket.emit('Ping', 0);
    //socket.on('Pong', function (data) {
    //    console.log('Pong : ' + data);
    //    data++;
    //    socket.emit('Ping', data);
    //});

    //9 setTimeout
    //setTimeout(function () { socket.emit('Ping', 0); }, 1000);
    //socket.on('Pong', function (data) {
    //    console.log('Pong : ' + data);
    //    data++;
    //    setTimeout(function () { socket.emit('Ping', data); }, 1000);
    //});

    //10 setInterval
    setInterval(function () { socket.emit('Ping', 'This is a Ping from the server'); },2000);

});















//var socketIDCounter = 0;  //global variable

//io.on('connection', function (socket) {

//    //keeping track of clients, and supplying individual data
//    var thisSocketID = socketIDCounter; //local variable
//    socketIDCounter++;

//    var counter = 0;
//    //sending a number
//    socket.emit('WriteNumber', 100);

//    //sending a string
//    socket.emit('WriteString', 'this is a string');

//    //sending an object
//    socket.emit('WriteObject', { myObjectsKey: 'My Objects Value' });

//    //creating an alert on the client
//    //socket.emit('CreateAlert', 'This is a PANIC ALERT!');

//    //creating a delayed alert on the client
//    //setTimeout(function () { socket.emit('CreateAlert', 'This is a PANIC alert'); }, 10000);
//    //setTimeout(function () { socket.emit('CreateAlert', 'I am going to send you to biizii.com and there is nothing you can do about it'); }, 5000);
//    //setTimeout(function () { socket.emit('EvalFunction', 'location.href="http://seanwasere.com";'); }, 6000);


//    //functions called from client
//    //a function that the client triggers
//    socket.on('ping', function (data) {
//        console.log(data.property1);
//        socket.emit('pong', { property2: 'i got your ping. thanks' });
//    });

//    //all connected sockets will getthis message
//    var TimedEvent = setInterval(function () {
//        counter++;
//        socket.volatile.emit('updateCounter', counter);
//        console.log("socket " + thisSocketID + " : counter=" + counter);
//    }, 1000);

//    //for tidying things up when a client disconnects
//    socket.on('disconnect', function () {
//        clearInterval(TimedEvent);
//    });


//});



