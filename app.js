const express= require("express");
const bodyParser= require("body-parser");
const date = require(__dirname+"/date.js");
const app= express();
let items= ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){

  let day= date();
   res.render("list", {kindofday: day, itemLists:items});

});

app.post("/", function(req, res){
  let item=req.body.newItem;
  items.push(item);
  res.redirect("/");
})


app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
