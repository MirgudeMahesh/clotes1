
const mongoose = require("mongoose");

const exSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true},
    
mail: {
    type: String,
    required: true, // Email is a required field
    unique: true // Ensure email is unique
},

}, { collection: 'temp' });

const Temp = mongoose.model("Example3", exSchema);
module.exports = Temp;
