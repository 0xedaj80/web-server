const net = require("net")

function newConn(socket){
    console.log("new connection", socket.remoteAddress, socket.remotePort); 
    
   socket.on('end',()=>{
     console.log("eof")
   })
   socket.on('data', (data)=>{ 
     console.log('data:', data)
     socket.write(data) 
   })


}


let server = net.createServer();
server.on("error", (err)=>{ throw err;})
server.on("connection", newConn);
server.listen({host:"127.0.0.1", port:8124});
