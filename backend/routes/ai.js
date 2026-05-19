const express=require("express");
const openAI=require("openai");
const router =express.Router();
const client=new openAI({
apiKey:process.env.OPENAI_API_KEY
});
router.post("/review",async(req,res)=>{
try{
const{language,code,}=req.body;
if(!code){
    return res.status(400).json({error:"Code is required",});
}
const prompt=`You are an expert competetive programming and software engineering reviewer.
Review the following ${language} code.
Give:
1. Bugs
2. Logic mistakes
3. Time complexity
4. Space complexity
5. Optimizations
6. Best practices
7. Edge cases missed
Keep response begineer friendly.
Code:
${code}
`;
const response=await client.chat.completions.create({
    model:"gpt-4.1-mini",
    messages:[
        {
            role:"system",
            content:"You are an expert code reviewer,",
        },
        {
            role:"user",
            content:prompt,
        },
    ],
    temperature:0.3,
});
const review=response.choices[0].message.content;
return res.json({success:true,review,});
}
catch(err)
{
return res.status(500).json({error:err.message,});
}
});
module.exports=router;