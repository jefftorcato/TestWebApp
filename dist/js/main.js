var socket = io("http://192.168.1.35");
socket.on('server-client', function(data) {document.write(data)});