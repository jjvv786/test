const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')

const PORT=process.env.PORT
const MONGO_URL='mongodb+srv://yuraj:yuraj@cluster0.qykbm4d.mongodb.net/?retryWrites=true&w=majority'


const message_schema = mongoose.Schema({
  name:String,
  message:String
})

const message = mongoose.model('msg',message_schema)

const addMsg = async()=>{
  await message.insertMany([{
    name:'rr',
    message:'ll'
  }])
}

const get_message = async ()=>{
  const respon = await message.find()
  console.log(respon)
  return (respon)
}

const app=express()
app.use(express.json())
// app.use(cors())

app.get('/message',async(req,res)=>{
  const tmp = await message.find()
  res.json(tmp)
})

app.post('/message',(req,res)=>{
  const name=req.body.name
  const mes = req.body.mes
  message.insertMany([{
    name:name,
    message:mes
  }])
  res.json({status:'ok'})
})

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('mongo connected')
    app.listen(PORT)
    // addMsg()
})
.catch((error)=>{console.log(error)})