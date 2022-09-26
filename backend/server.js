import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

let app = express();
let server = http.createServer(app);

let io = new Server(server);

io.on('connection', socket => {
    console.log('A new client has connected');

    // socket.emit('greeting', 'Hello client!');

    socket.on('new message', data => {
        console.log('The client says: ' + data);
        io.emit("incoming message", 'Hi Again!');
    })
})

server.listen(process.env.PORT || 8000, () => {
    console.log('Server is listening on a port');
});