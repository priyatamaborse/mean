var mysql = require('mysql');
var bodyparser = require('body-parser');

var express = require('express');
var app = express();

app.listen(3000);
console.log("server connected on port 3000");

var con = mysql.createConnection({
host:"localhost",
user: "root",
password: "root",
database:"test1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//var sql1 = "create database test1";
//var sql2 = "create table table2(id int,name varchar(20))";
//var sql3 = "insert into table2 values (1,'priya')";
//con.query(sql3,function(err,res){
  //if (err) throw err;
  //console.log("table created");
//});

/*
app.get('/',function(req,res){
var name ="priya";
var add = "magarpatta";
var arr = ['a','b','c'];
//res.json([name,add]);
res.json(arr);

//res.send("Hello welcome to rest api");

});

*/
//app.get()
var students = [
{
id:1,
name:"priya",
add:"magarpatta"
},

{
id:2,
name:"megha",
add:"pune"
},
{
id:3,
name:"divya",
add:"nagar"
}
];

/*
app.get('/about',function(req,res){

res.send("Hello welcome to rest api Hello welcome to rest api Hello welcome to rest api Hello welcome to rest api");
});

app.get('/students',function(req,res){
res.json(students);
});

app.post('/student',function(req,res){
students.push(req.body);
app.use(bodyparser.json());
res.end("yes");
});
*/

app.use(bodyparser.json());
app.get('/emp',function(req,res){
con.query('select * from emp',function(err,rows){
  if (err) throw err;
else
res.send(rows);
})});


app.get('/students',function(req,res){
res.json(students);
});

app.put('/update/:id',function(req,res){
var stud = req.body;
console.log("***"+students[0].id);
for(var i=0 ;i<students.length-1;i++){
	if(req.params.id == students[i].id){
		students[i].id = stud.id;
		students[i].name = stud.name;
		students[i].add = stud.add;
		console.log(stud.id+" "+stud.name);
	}
}
 res.end(res.json());
});



