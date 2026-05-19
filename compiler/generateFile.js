const fs=require("fs");
const path=require("path");
const {v4:uuid}=require("uuid");
console.log(__dirname);
const dirCodes=path.join(__dirname,"codes");
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}
const generateFile=(language,code)=>{
    const jobID=uuid();
 let filename;
    if(language==='java')
    {
        filename="Main.java"
    }
    
    else{ filename=`${jobID}.${language}`;
}
    const filepath=path.join(dirCodes,filename);
    fs.writeFileSync(filepath,code);
    return filepath;
};
module.exports={
    generateFile,
};