const express = require("express");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const User = require("./db/Schemas/User");
const db = require('./db/db');
const app = express ();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/newUser',(req,res)=>{
    bcrypt.hash(req.body.password,5,).then(()=>{
        const newUser = new User({
            username:req.body.username,
            passwordHash:hash,
            email:req.body.email
        })
        newItem.save().then(res.sendStatus(200)).catch((err)=>{
            console.log(err)
            res.sendStatus(500)
        });
    });
})


module.exports = app