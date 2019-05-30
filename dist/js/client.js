function MyClient() {
 
}

MyClient.prototype.init = function () {
    var address = 'http://192.168.1.35:2017';
    console.log("Connecting to: " + address);
    this.socket = io.connect(address);
    this.socket.on('connect', function(){
        console.log("Connected to socket!");
        this.socketIsConnected = true;

        this.socket.on('disconnect', function(){
            console.log("Disconnected from socket!")
            this.socketIsConnected = false;
        });
        this.socket.on('data', this.onDataReceived)
    });
}

MyClient.prototype.onDataReceived = function (data) {
    console.log("RECEIVED SOMETHING");
    document.write(data);
}