var http = require('http');

// Create server object
http.createServer((req,res)=>{
    // Write response
    res.write('Hello world');
}).listen(5000, ()=>{
    console.log("Server running on 5000");
})