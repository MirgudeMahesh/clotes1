const mongoose=require('mongoose')
const port = process.env.PORT || 3000;
const connection=()=>{
mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});}
module.exports=connection;