const express=require('express');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
console.log("User model:", User);
const router=express.Router();

router.post('/register',async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await
        bcrypt.hash(password,salt);
        const newUser=new User({name,email,password:hashedPassword});
        await newUser.save();
        res.status(201).json({message:'User registered succesfully'});
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
});


router.post('/login',async(req,res)=>{
    try{
        console.log(req.body);
        const {email,password}=req.body;
        const user=await User.findOne({email});
         console.log(user);
        if(!user) return res.status(400).json({message:'User not found'});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'Invalid credentials'});
        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token,userId:user._id});
    }catch(error)
    {
        res.status(500).json({error:error.message});
    }
})
module.exports=router;