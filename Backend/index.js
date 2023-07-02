const express = require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const jwt=require("jsonwebtoken");
const multer=require("multer");
const fs = require("fs");
const JWT_SECRET="nsdvbsdvhsgshdgshdgshdgh()kjsbdhsdgsjsbndnh231122"

const mongourl="mongodb+srv://Manish2930:Manish@manish.nwa3k1c.mongodb.net/";
mongoose
.connect(mongourl,{
    useNewUrlParser:true

})
.then(() => {
    console.log("Connect To Databse");
})
.catch((e)=> console.log(e));


require("./db/User");
require("./db/Products");
require("./db/Images");
const Product=mongoose.model("productsadd");
const Images=mongoose.model("ProductImage");
const User=mongoose.model("Products");


const storage =multer.diskStorage  ({
    destination: (req, file, cb) => {
      cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });

app.post("/uploadfile", upload.single("testImage"), (req, res) => {
 
    
    console.log(req.file);
  const saveImage =  Product({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});




app.get("/images",async(req,res)=>{

  try{
    await Product.find({}).then(data=>{
        res.send({status:"ok",data:data})
   
  } )}
    catch(error){

    }
})




app.post("/upload-imagee",async(req,res)=>{
    const{base64}=req.body;
    try{
        Product.create({image:base64});
      res.send({Status:"ok"})
  
    }
    catch(error){
      res.send({Status:"Error",data :error})
    }
  })
  
  app.get("/get-imagee",async(req,res)=>{
    const{base64}=req.body;
    try{
        Product.find({}).then(data=>{
      res.send({Status:"Ok",data :data})
  
     })
    }
    catch(error){
      res.send({Status:"Error",data :error})
    }
  })






app.post("/registercomm",async (req,res)=>{

    let user=new User(req.body);
    let result=await user.save();
    res.send(result);

    });

app.post("/login",async(req,res)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body).select("Password");
        if(user){
            res.send(user)
        }
        else{
            res.send({result:"No User Found"});
        }
    }
    else{
        res.send({result:"No User Found"});
    }
  
   
});




app.post("/add-product",async(req,res)=>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result);

})

app.get("/products",async(req,res)=>{

    let Products=await Product.find();
    if(Products.length>0){
        res.send(Products)
    }
    else{
        res.send({result:"No Product Found"})
    }
})

app.delete("/products/:id",async(req,res)=>{

    const result=await Product.deleteOne({_id:req.params.id})
    res.send(result);

})

app.get("/product/:id",async(req,res)=>{
    let result=await Product.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }
    else{
        res.send({result : "no record found"})
    }

})


app.put("/product/:id",async(req,res)=>{
    let result =await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)

})


app.get("/search/:key",async(req,res)=>{
    let result=await Product.find({
        "$or": [
            {name:{$regex: req.params.key}},
            {price:{$regex: req.params.key}},
            {category:{$regex: req.params.key}},
            {compnayname:{$regex: req.params.key}},
        ]
    });
    res.send(result);

})



//Login Other

{
    require("./SignupInfo")

const User=mongoose.model("SignupStuds");

app.post("/Signup",async (req,res)=>{
   
    const {fname,lastname,emailadd,password}=req.body;

       try{
        const oldUser =await User.findOne({emailadd});
        if(oldUser){
           return  res.json({error:"User Exists"});
        }
        await User.create({
            fname,
            lastname,
            emailadd,
            password,
        });
        res.send({status :"Ok"});
    }
    catch(error){
        res.send({status :"Error"});
    }

    });


    
    app.post("/loginuser", async (req, res) => {
        const {emailadd, password } = req.body;
      
        const user = await User.findOne({ emailadd });

        if (!user) {
          return res.json({ error: "User Not found" });
        }
      
    
       
          const token = jwt.sign({emailadd: user.emailadd}, JWT_SECRET);
          
          if (res.status(201)) {
            return res.json({ status: "ok", data: token });
          }
           else {
            return res.json({ error: "error" });
          }
       
        
          res.json({ status: 'error', error: "InvAlid Password" }); 
      });


    }

app.listen(3001,()=> {
    console.log("Server Started");
})
