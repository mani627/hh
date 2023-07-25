const mongoose = require('mongoose');
const connection= require('../Connection/Connection')




// Schema for User_Details
const User_Details = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Emp_Id:Number,
    Email:String,
    Password:String,
    Profile_Img:{ type : String, default: ()=>null },
    Role:String,
    CreatedOn:{ type : Date, default: ()=>new Date() },
    IsActive:Boolean
})



const User_Details_Schema= connection.model("App X User_Details", User_Details);

module.exports=User_Details_Schema