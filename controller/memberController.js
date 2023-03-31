const Members=require("../model/memberModel");

module.exports.getAllMembers=async(req,res,next)=>{
    try {
      const data=await Members.find();
      res.json(data);
    } catch (error) {
     next(error);  
    }
}

module.exports.addMember=async(req,res,next)=>{
    try {

        const { firstName,lastName,email,phone,acount,adhar,orderId,pan,password,country,state,gender}=req.body;
    const data = await Members.create({
        firstName,lastName,email,phone,acount,adhar,pan,password,country,state,gender,orderId
    });
    if(data){
        return res.json({msg:"member added successfully"});
    }
    return res.json({msg:"Failed to add member to the database."});
        
    } catch (error) {
        next(error)
    }
}

module.exports.checkOrderId=async(req,res,next)=>{
    try {
        const {referenceNum}=req.body;
        const data=await Members.find({orderId:referenceNum})
        res.json(data);
    } catch (error) {
        next(error)
    }
}
module.exports.login=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        const data=await Members.find({email,password})
        res.json(data);
    } catch (error) {
        next(error)
    }
}
