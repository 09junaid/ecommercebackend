import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim:true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim:true,
  },
  password:{
    type: String,
    required: true,
    trim:true,
  },
  phone:{
    type: String,
    required: true,
    trim:true,
  },
resetPasswordToken: String,
resetPasswordExpire: Date,
  address:{
    type: String,
    required: true,
    trim:true,
  },
  role:{
    type: Number,
    default: 0,
  },
},{timestamps:true});

export default mongoose.model("User", userSchema);