const express = require("express");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path')
const User = require("./db/Schemas/User");
const db = require('./db/db');
const app = express ();

if(process.env.NODE_ENV === "develop"){
    const cors = require("cors")
    app.use(cors())
}

app.use(express.static('public'))

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
        newUser.save()
        .then((data)=>{res.sendStatus(200)})
        .catch((err)=>{
            res.sendStatus(406)
        });
    }).catch((err)=>{
        console.log('bcrypt error:', err)
    });
})

app.post("/api/login",(req,res)=>{
    User.findOne({username:req.body.username}).then((user)=>{
        if(user){
            bcrypt.compare(req.body.password, user.passwordHash, function(err, result) {
                if(result){
                    res.send({username:user.username,cameras:user.cameras})
                }
                else res.sendStatus(401)
            });
        }
        else{
            res.sendStatus(401)
        }
    })
})

app.post("/api/addCamera",(req,res)=>{
    console.log(req.body.username)
    const user = User.findOneAndUpdate({username:req.body.username},{$push: {cameras: {url:req.body.url,active:true}}},(err,doc)=>{})
})

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

module.exports = app