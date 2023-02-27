const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//cors error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Bodyparser middleware, undefined n mile
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://arif:tSt0CJFEg2GgqJQs@cluster0.ufr2nrv.mongodb.net/dynamic?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(()=>console.log("success"));
const createSchema = () => {
  return new mongoose.Schema({
    username: String
  });
}
// Create a new database for each registration
app.post('/register',async (req, res) => {
const  {username}=req.body
console.log({username})
const FirstCollection = mongoose.model(username, createSchema());
var savetodo=new FirstCollection({//instance of our collection to save
username:req.body.username
 
})
// await savetodo.save();
const data= await mongoose.model(username).find()
console.log(`from database=>${data}`)
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));