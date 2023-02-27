
const mongoose = require("mongoose")
require("../db/connection")
//defining schema
const createSchema = () => {
    return new mongoose.Schema({
      field1: String,
      field2: Number
    });
  }
  
  const FirstCollection = mongoose.model('FirstCollection', createSchema());
  const SecondCollection = mongoose.model('SecondCollection', createSchema());
  const ThirdCollection = mongoose.model('ThirdCollection', createSchema());
  
const playlistSchema= new mongoose.Schema({
name:String,
amount:Number,
phone:String,
gmail:String,
type:String,
paydate:Date,
date:{type:String,default:() => new Date(new Date())}

})
//Model
const Mydb=new mongoose.model("Mydb",playlistSchema)

module.exports=Mydb