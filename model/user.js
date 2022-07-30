import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{type:String,
    required:true},
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);

const user = mongoose.model('user', userSchema);
export default user;