import socketIoClient from 'socket.io-client';
import * as readline from 'node:readline/promises';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let socket = socketIoClient('http://localhost:8000');

socket.on("incoming message", (message) => {
    console.log('Received a new message: ' + message);
})

async function startApp() {
    while (true) {
        let response = await rl.question('Enter a message and hit "return" to send: ');
        socket.emit("new message", response);
    }
}
startApp();
