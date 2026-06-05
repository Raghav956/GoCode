const auth =
  require("../middleware/auth");
const express=require("express");
const Groq = require("groq-sdk");
const User = require("../models/User");
const router =express.Router();
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});
router.post("/review",auth,async(req,res)=>{
try{
const{language,code,}=req.body;
const user =
  await User.findById(
    req.user.id
  );

if (!user) {
  return res.status(404).json({
    error: "User not found",
  });
}
if (
  user.aiReviewsToday === undefined
) {
  user.aiReviewsToday = 0;
}

if (
  !user.lastReviewReset
) {
  user.lastReviewReset =
    new Date();
}

await user.save();

const now = new Date();

const oneDay =
  24 * 60 * 60 * 1000;

if (
  now - user.lastReviewReset >
  oneDay
) {
  user.aiReviewsToday = 0;
  user.lastReviewReset = now;

  await user.save();
}

if (
  user.aiReviewsToday >= 10
) {
  return res.status(429).json({
    error:
      "Daily AI review limit reached.",
  });
}


if(!code){
    return res.status(400).json({error:"Code is required",});
}
if (code.length > 15000) {
  return res.status(400).json({
    error:
      "Code exceeds maximum size limit."
  });
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
    model: "llama-3.3-70b-versatile",
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
user.aiReviewsToday += 1;
await user.save();
return res.json({success:true,review,});
}
catch (err) {

  console.error(
    "AI Review Error:",
    err
  );

  return res.status(500).json({
    error:
      "AI review is temporarily unavailable.",
  });
}
});
module.exports=router;
