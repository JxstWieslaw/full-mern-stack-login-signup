//MERN

//Development- Node.js server + React Sever

//Production - Node.js server + react static files

//E-Express

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
//C:\Program Files\MongoDB\Server\5.0\data\
mongoose.connect('mongodb://localhost:2701/full-mern-stack-login-signup')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.creat({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.send(user)
        res.json({status : 'ok'})
    }catch(err){
        res.json({status : 'ok'})
    } 
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})