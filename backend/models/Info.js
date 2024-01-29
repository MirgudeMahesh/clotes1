
const mongoose = require("mongoose");

const exSchema1 = new mongoose.Schema({
  // notes: String,
  // title: String,
  // date: String,
  // usermail:String
  notes: {
    type: String,
    required: true // Name is a required field
},
title: {
    type: String,
    required: true, // Email is a required field
    unique: true // Ensure email is unique
},
date: {
    type: String,
    required: true // Password is a required field
},
time: {
  type: String,
  required: true // Password is a required field
},
usermail : {
  type:String,

}
}, { collection: 'data1' });

const UserInfo = mongoose.model("Example1", exSchema1);
module.exports = UserInfo;