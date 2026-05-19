const fs=require("fs");
const path=require("path");
const {v4:uuid}=require("uuid");
console.log(__dirname);
const dirInputs=path.join(__dirname,"inputs");
if(!fs.existsSync(dirInputs)){
    fs.mkdirSync(dirInputs,{recursive:true});
}
const generateInputFile=(input)=>{
    const jobID=uuid();
 const input_filename=`${jobID}.txt`;
    

    const input_filepath=path.join(dirInputs,input_filename);
    fs.writeFileSync(input_filepath,input);
    return input_filepath;
};
module.exports={
    generateInputFile,
};