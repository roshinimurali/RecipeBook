import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},

},{Timestamp:true}
)

const Users=mongoose.model('Users',usersSchema)
export default Users;