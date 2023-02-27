// require('dotenv').config({ path: `${__dirname}/../../.env` });



const url=process.env.MONGO_URL
console.log(url)
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://arif:tSt0CJFEg2GgqJQs@cluster0.ufr2nrv.mongodb.net/mern?retryWrites=true&w=majority")
.then(()=>console.log("connection successfull ok"))
.catch((err)=>console.log("******************************",err))
