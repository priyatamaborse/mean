var fs = require('fs');

var a =fs.readFileSync('./One.txt',(err,data)=>{
if(err) throw err;
console.log(data.toString());
});

var b = fs.readFileSync('./Two.txt',(err,data)=>{
if(err) throw err;
console.log(data.toString());
});

var c= fs.readFileSync('./Three.txt',(err,data)=>{
if(err) throw err;
console.log(data.toString());
});

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());