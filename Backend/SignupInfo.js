const mongoose=require("mongoose");

const UserDetailsSchma= new mongoose.Schema(
    {
    fname:String,
    lastaname:String,
    emailadd:String,
    password :String
   },
   {
    collection :"Signup",
   }
    );
mongoose.model("SignupStuds",UserDetailsSchma);
