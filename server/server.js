const express = require("express");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const User = require("./db/Schemas/User");
const db = require('./db/db');
const app = express ();

if(process.env.NODE_ENV === "develop"){
    const cors = require("cors")
    app.use(cors())
}

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/newUser',(req,res)=>{
    bcrypt.hash(req.body.password,5).then((hash)=>{
        const newUser = new User({
            username:req.body.username,
            passwordHash:hash,
            email:req.body.email
        })
        newUser.save().then(res.sendStatus(200)).catch((err)=>{
            console.log("eror in saving in mongo:", err)
            res.sendStatus(500)
        });
    }).catch((err)=>{
        console.log('bcrypt error:', err)
    });
})

// app.post("/api/login",(req,res)=>{

// })


module.exports = app