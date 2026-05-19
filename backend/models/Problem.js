const mongoose=require("mongoose");
const problemSchema=new mongoose.Schema(
    {
        title:String,
        difficulty: String,
        sampleInput:String,
        sampleOutput:String,
        hiddenTestCases:[
            {
                input:String,
                output:String,
            },
        ],
    }
);
module.exports=mongoose.model("Problem",problemSchema);