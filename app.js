const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yuraj:yuraj@cluster0.qykbm4d.mongodb.net/?retryWrites=true&w=majority')
.then(
  ()=>{
    console.log('connection success')
  }
).catch(
  ()=>{console.log('connection fail')}
)

const msgSchema = mongoose.Schema({
  name:String,
  message:String
})

const message = mongoose.model('msg',msgSchema)

// const msg = new message({
//   name:'new person',
//   message:'new message'
// })

// msg.save()

const read = async()=>{
  const result = await message.find()
  console.log(result)
}

read()


