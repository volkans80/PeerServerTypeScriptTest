import express = require('express');
import { ExpressPeerServer } from 'peer';

const app = express();

let server = app.listen(3000, function () {
    console.log('Listening...');
});

let peerServer = ExpressPeerServer(server, {
    key: 'test'
});

//@ts-ignore
app.use('/peerjs',peerServer);