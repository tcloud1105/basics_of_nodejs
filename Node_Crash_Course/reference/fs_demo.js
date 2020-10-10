const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//     if(err) throw err;
//     console.log("folder created");
// })

// create and write a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!!!',(err)=>{
//     if(err) throw err;
//     console.log("file created");

//     // File append
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love nodejs',(err)=>{
//         if(err) throw err;
//         console.log("Content added...");
//     })
// })

// read a file
fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', ( err, data)=>{
    if(err) throw err;
    console.log(data);
})

// rename a file
fs.rename(path.join(__dirname,'/test','hello.txt'), path.join(__dirname,'/test','helloworld.txt'), ( err)=>{
    if(err) throw err;
    console.log("file renamed...");
})
