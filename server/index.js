//MERN

//Development- Node.js server + React Sever

//Production - Node.js server + react static files

//E-Express

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.models')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
//C:\Program Files\MongoDB\Server\5.0\data\
mongoose.connect('mongodb://localhost:2701/full-mern-stack-login-signup')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.create({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.send(user)
        res.json({status : 'ok'})
    }catch(err){
        res.json({status : 'error', error: 'Duplicate email'})
    } 
})
app.post('/api/login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if(user){
            const token = jwt.sign(
                {               
                    name: user.name,
                    email: user.email,
                },
                'secret123'
            )
            return res.json({status : 'ok', user: token})
        }else{
            return res.json({status : 'error', user: false})
        }
    
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})