const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const newsSchema = require("./models/newsSchema");


mongoose.connect("mongodb+srv://saieswarkumar:8688855996s@cluster0.x0jmtud.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to db");
})

const app = express();

app.use(cors({
    origin : "*"
}))

app.get("/",(req,res)=>{
    res.send("welcome to the localhost")
})

app.get("/news", async (req, res) => {
    try{
        const getData = await newsSchema.find();
        return res.json(getData);
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(8080,()=>{
    console.log("running on port 8080......")
})