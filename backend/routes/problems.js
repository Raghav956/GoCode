const express=require("express");
const Problem=require("../models/Problem");
const router =express.Router();

router.get("/",async (req,res)=>{
try{
const problems=await Problem.find();
res.json(problems);
}
catch(err)
{
    res.status(500).json({error: err.message,});
}
});

router.get("/:id",async(req,res)=>
{
    try{
        const problem=await Problem.findById(req.params.id);
        res.json(problem);
    }
    catch(err)
    {
        res.status(500).json({error:err.message,});
    }
});

module.exports=router;