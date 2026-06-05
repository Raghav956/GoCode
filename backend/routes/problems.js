const express=require("express");
const Problem=require("../models/Problem");
const router =express.Router();
console.log("INSIDE");
router.get("/",async (req,res)=>{
    try{
console.log("INSIDE problems");
const problems=await Problem.find().select("-hiddenTestCases");
res.json(problems);
}
catch(err)
{
    console.log("INSIDE problems error");
    res.status(500).json({error: err.message,});
}
});

router.get("/:id",async(req,res)=>
{
    try{
        const problem=await Problem.findById(req.params.id).select("-hiddenTestCases");
        res.json(problem);
    }
    catch(err)
    {
        res.status(500).json({error:err.message,});
    }
});

module.exports=router;
