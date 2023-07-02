const mongoose=require("mongoose");

const Images= new mongoose.Schema(
    {
    image :String
   },
   {
    collection :"ProductImage",
   }
    );
mongoose.model("ProductImage",Images);
