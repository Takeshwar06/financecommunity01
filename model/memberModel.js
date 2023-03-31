const mongoose=require("mongoose")

const memberSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    acount:String,
    adhar:String,
    pan:String,
    password:String,
    gender:String,
    country:String,
    state:String,
    orderId:String,
    date:{
        type:Date,
        default:Date.now
    },
});
module.exports= mongoose.model("Members",memberSchema);