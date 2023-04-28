const express=require("express");
const bodyParser=require("body-parser");


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({Extended:true}));
app.use('/public', express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/index.html");
});




app.listen(3000,function(){
  console.log("Server is running on 3000");
});
