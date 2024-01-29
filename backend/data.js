require('dotenv').config();
const MaheshModel=require('./models/Credentials')
const express = require('express');
const mongoose = require('mongoose');
const connection=require('./cnct')
const app = express();
const Temp=require('./models/Temp')
const UserInfo=require('./models/Info')
const cors=require('cors');
const { userInfo } = require('os');

// const path=require('path')
// const hbs=require('hbs')
// const path1=path.join(__dirname,'./views')
// console.log(path1)
// app.set('view engine','hbs');
// app.set('views',path1)
app.use(cors());
app.use(express.json())

connection();

app.get("/getData", async(req,res)=>{
  try {
    const data = await MaheshModel.find();
     res.send(data)
    }

   catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

})





app.post('/putData', async (req, res) => {
  const dataToInsert = req.body;
  const xx=await MaheshModel.findOne({"mail":dataToInsert.mail})
 
  if (xx) {
    // If the entry already exists, send an appropriate response
    return res.status(400).send("Entry already exists");
  }
  
else{
  try {
    
 
    const newRecord = new MaheshModel(dataToInsert);

    await newRecord.save();

    res.status(201).send("success");
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  
}
});

//getinfo
app.post("/sendInfo",async(req,res)=>{
  try{
  const E_mail=req.body;
const yy=new UserInfo(E_mail)
  yy.save();
 res.status(201).send("success")
  }
  catch(error){
    res.status(500).send('Internal Server Error');
  }

})


app.post("/getNotes",async(req,res)=>{
const x=req.body;
const entire_info=await UserInfo.find({"usermail":x.usermail});

if(entire_info){
  res.send(entire_info);
}
else{
  res.send("internal error")
}

}
)



app.post('/delNotes',async(req,res)=>{
const entryId  = req.body;

  try {
    // Assuming you have a MongoDB collection named 'notes'
    const result = await UserInfo.deleteOne({ time: entryId.pid });

    // Check if the delete operation was successful
    if (result.deletedCount === 1) {
      res.status(200).json( 'Entry deleted successfully' );
    } else {
      res.status(404).json(  'Entry not found' );
    }
  } catch (error) {
    console.error('Error deleting entry: ', error);
    res.status(500).json( 'Internal server error' );
  }
})

/////
app.post('/savetemp',(req,res)=>{
  const t=req.body;
  const x=new Temp(t);
  x.save()
  res.send("success")
})

app.get('/gettemp', async (req,res)=>{
  
  const x=await Temp.findOne({})
 
  res.send(x);
})
app.get('/droptemp',async(req,res)=>{

 const x= await Temp.deleteMany({})
  res.send("success")
})
const port=8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



  