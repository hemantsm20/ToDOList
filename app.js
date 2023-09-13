//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const port = process.env.PORT || 3001;


const app = express();

app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://meenahemant2002:2002@cluster1.0q7bwlt.mongodb.net/toDoListDb?retryWrites=true&w=majority",{useNewUrlParser:true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const itemSchema = new mongoose.Schema({
  name: String
});

const customListSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const Item = mongoose.model("item",itemSchema);

const List = mongoose.model("list",customListSchema);

const item1 = new Item({
  name:"brushing"
});

const item2 = new Item({
  name:"bathing"
});

const item3 = new Item({
  name:"break fast"
});

const defaultItems = [item1,item2,item3];

app.get("/", async function(req, res) {
  
  var foundItems = await Item.find({}); //make it variable because it will change 

  if(foundItems.length === 0){       //use length here instead of size
    console.log("hi");
    Item.insertMany(defaultItems);
    foundItems = await Item.find({});
  }

  res.render("list", {listTitle: "Today", newListItems: foundItems});

});

app.get("/:customListName", async function(req,res){
  
  const customListName = _.capitalize(req.params.customListName);
  const foundList = await List.findOne({ name: customListName });

  if(!foundList){
    const newList = new List({
      name:customListName,
      items: defaultItems
    });

    newList.save();

    res.redirect("/"+customListName);
  }else{
    res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
  }

});

app.post("/", async function(req, res){

  const itemName = req.body.newItem;
  const listname = req.body.list;

  const found = await List.findOne({name : listname});

  const item = new Item({
    name: itemName
  });

  if(!found){

    item.save();
    res.redirect("/");

  }else{
    found.items.push(item);
    found.save();

    res.redirect("/" + listname);
  }

});

app.post("/delete", function(req,res){
  const checked_item_id = req.body.checkbox;
  const listname = req.body.listname;

  if(listname === "Today"){
    Item.findByIdAndDelete(checked_item_id).exec();
    res.redirect("/");
  }else{
    List.findOneAndUpdate({name:listname},{$pull:{items:{_id:checked_item_id}}}).exec();
    res.redirect("/"+listname);
  }

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});










