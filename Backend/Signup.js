const express = require("express");
const App=express();
const mongoose=require("mongoose");
App.use(express.json());
const cors=require("cors");
App.use(cors());
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");

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


require("./SignupInfo")

const User=mongoose.model("SignupStuds");

App.post("/Signup",async (req,res)=>{
   
    const {fname,lastname,emailadd,password}=req.body;
    const encryptedPassword = await bcrypt.hash(password, 10); 
       try{
        const oldUser =await User.findOne({emailadd});
        if(oldUser){
           return  res.json({error:"User Exists"});
        }
        await User.create({
            fname,
            lastname,
            emailadd,
            password:encryptedPassword,
        });
        res.send({status :"Ok"});
    }
    catch(error){
        res.send({status :"Error"});
    }

    });


    
    App.post("/loginuser", async (req, res) => {
        const {emailadd, password } = req.body;
      
        const user = await User.findOne({ emailadd });

        if (!user) {
          return res.json({ error: "User Not found" });
        }
      
    
        if (await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({emailadd: user.emailadd}, JWT_SECRET);
          
          if (res.status(201)) {
            return res.json({ status: "ok", data: token });
          }
           else {
            return res.json({ error: "error" });
          }
       
        }
          res.json({ status: 'error', error: "InvAlid Password" }); 
      });


      App.post("/userData", async (req, res) => {
        const { token } = req.body;
        try {
          const user = jwt.verify(token, JWT_SECRET, (err, res) => {
            if (err) {
              return "token expired";
            }
            return res;
          });
          console.log(user);
          if (user == "token expired") {
            return res.send({ status: "error", data: "token expired" });
          }
      
          const useremail = user.emailadd;
          User.findOne({ emailadd: useremail })
            .then((data) => {
              res.send({ status: "ok", data: data });
            })
            .catch((error) => {
              res.send({ status: "error", data: error });
            });
        } catch (error) { }
      });


      App.get("/getAllUser", async (req, res) => {
        try {
          const allUser = await User.find({});
          res.send({ status: "ok", data: allUser });
        } catch (error) {
          console.log(error);
        }
      });





App.post("/deleteUser" , async (req,res) => {
  const {userid} =req.body;

  try{
  

    User.deleteOne({_id: userid});
    res.send({status:"Ok", data:"Deleted"},
    );
 
  
  } catch (error){
    console.log(error);
  }
});





// App.delete('/api:id', (req, res) => {
//   SignupInfo.findByIdAndRemove(req.params.id)
//     .then(() => res.json({ message: 'Document deleted successfully' }))
//     .catch(error => res.status(500).json({ error: 'Error deleting document', details: error }));
// });


App.listen(3001,()=> {
    console.log("Server Started");
})
