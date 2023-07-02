

const mongoose=require("mongoose");

const ProductSchma= new mongoose.Schema(
    {
        name:String,
        price:String,
        category:String,
        userId:String,
        // img:{
        //     data:Buffer,
        //     contentType:String
        // }
        image :String
       
   },
   {
    collection :"productsadd",
   }
    );
mongoose.model("productsadd",ProductSchma);


