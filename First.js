var name="yash";
var location=1;
console.log("Name "+name+" Location "+location);
module.exports= {name,location};
var arr = ['test','java',1];
var funArr = new Function("arr", arr);
module.exports={funArr};