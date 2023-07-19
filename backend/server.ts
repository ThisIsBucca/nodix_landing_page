
const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", true);
       
//! 'mongodb://127.0.0.1:27017/ratibaDB'
//!  "mongodb+srv://buccasaprezdz2001:1975!ACTIVE=definetlytrue@cluster0.umvevcp.mongodb.net/ratibaDB"

mongoose.connect(
    'mongodb://127.0.0.1:27017/ratibaDB' , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("mongodb is connected successfully");
        }
    }
);

const ratibaSchema = new mongoose.Schema({
    ratiba_ya_leo: String,
    kwanza:String,
    pili:String,
    tatu:String
});

const Ratiba = mongoose.model("Ratiba", ratibaSchema);

const warning = "Hatuna taarifa yoyote ya usafili leo";
let ratiba_ya_leo = warning;

const today = new Ratiba({
    ratiba_ya_leo : ratiba_ya_leo,
    kwanza:'1',
    pili:'2',
    tatu:'3'
});

today.save();

app.get('/api/data', (req, res) => { 

  // Handle the API request and send the response
  res.json({ message:today.kwanza }); 
});

app.listen(3001, () => {
  console.log('Backend server is running on http://localhost:3001');
});
