
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// // mongodb+srv://mahesh_5402:Maheshkumar@cluster0.2mijrua.mongodb.net/
// //mongodb://localhost:27017/mahesh
// // Connect to MongoDB using Mongoose
// mongoose.connect('mongodb://mongodbatls/deploymydb', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => console.log("Connection success"))
//   .catch(err => console.log(err));
// app.js or index.js

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// ... rest of your code ...

// Define a Mongoose schema and model
const exSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number
}, { collection: 'deployt1' });

const MaheshModel = mongoose.model("Example", exSchema);

// Define an Express route to handle a GET request
app.get('/getData', async (req, res) => {
  try {
    // Use Mongoose find method to retrieve documents
    const data = await MaheshModel.find();
    
res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
//putdata
app.get('/putData', async (req, res) => {
  try {
    // Use Mongoose find method to retrieve documents
    const z = new MaheshModel({
      name: "xxxx",
      height: 6.9,
      weight: 69
    });
  
  // // Using promises
  z.save()
    
res.send("success");
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
// const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



  