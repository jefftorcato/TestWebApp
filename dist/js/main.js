var socket = io();
socket.on('server-client', function(data) {document.write(data)});