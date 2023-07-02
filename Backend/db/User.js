

const mongoose=require("mongoose");

const UserDetailsSchma= new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
   },
   {
    collection :"Products",
   }
    );
mongoose.model("Products",UserDetailsSchma);


