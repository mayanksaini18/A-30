import express from "express";
// import mongoose from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const app = express();
app.use(express.json());

const SECRET = "mayank_secret_key";
const USERS=[];

const port = 3000;

app.get('/', (req, res) => {
  res.send('auth learning!');
});


app.post("/signup", async(req , res)=>{
 const {email,password} = req.body;
 const hashed = await bcrypt.hash(password , 10);
 USERS.push({email,password:hashed});
 res.json({msg:"user created"})
})

app.post("/Login", async(req  ,res)=>{
 const {email,password} = req.body;
 const user = USERS.find((user)=>user.email===email);
 if (! user ) return res.status(400).json({msg :"user not found"})
 const isMatch = await bcrypt.compare(password , user.password);
 if(!isMatch) return res.status(400).json({msg:"Invalid password"})
    const token = jwt.sign({email:user.email},SECRET,{expiresIn:"1h"})

    res.json({token})
})
//middleware
function auth(req , res , next){
    const token = req.headers.authorization;
    
    if(!token) return res.status(401).json({msg:"Unauthorized"});
    
    const tokenData = token.split(" ")[1];
    try{
        const decode = jwt.verify(tokenData, SECRET);
        req.user = decode;
        next();
    }
    catch(err){
     res.status(401).json({msg:"invalid tojken"});
    }
}

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});