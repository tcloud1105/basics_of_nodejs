// var Person = require('./person');

// const person1 = new Person("cedric",35);
// person1.greeting();

//..........LOGGER..........//
// Logger = require('./logger');

// const logger = new Logger();

// logger.on('message',(data)=>console.log('Called listener:' ,data));

// logger.log('hello world')

//--------SERVER-----//
const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer((req,res)=>{
//    if(req.url==='/'){
//        fs.readFile(path.join(__dirname,'public','index.html'),(err, content)=>{
//         if(err) throw err;
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(content);
//        })  
//    }

//    if(req.url==='/about'){
//     fs.readFile(path.join(__dirname,'public','about.html'),(err, content)=>{
//      if(err) throw err;
//      res.writeHead(200,{'Content-Type':'text/html'});
//      res.end(content);
//     })  
// }

// if(req.url==='/api/data'){
//     const users = [
//         {name:'Bob Smith', age:40},
//         {name:'Fotso Cedric', age:31}
//     ]
//     res.writeHead(200,{'Content-Type':'application/json'});
//      res.end(JSON.stringify(users));
// }
// if(req.url==='/api/data'){
//     fs.readFile(path.join(__dirname,'public','data.json'),(err, content)=>{
//      if(err) throw err;
//      res.writeHead(200,{'Content-Type':'application/json'});
//      res.end(JSON.stringify(content));
//     })  
// }

// Build File Path
let filePath = path.join(__dirname, 'public',req.url==='/'?'index.html':req.url);
console.log(filePath);

// Extension of file
let extname = path.extname(filePath);

// Initial Content Type
let contentType = "text/html";

// check ext and set content type
switch(extname){
  case '.js':
     contentType ='text/javascript';
     break;
  case '.css':
     contentType = 'text/css';
     break;
  case '.json':
     contentType = 'application/json';
     break;
  case '.png':
      contentType = 'image/png';
      break;
  case '.jpg':
      contentType = 'image/jpg';
      break;
}

// Read File
fs.readFile(filePath, (err, content)=>{
    if(err){
        if(err.code =='ENOENT'){
            // Page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content,'utf8');
            })
        }else{
            // Some server error
            res.writeHead(500);
            res.end(`Server error ${err.code}`)
        }
    }else{
        // Success
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(content,'utf8');
    }
})
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})