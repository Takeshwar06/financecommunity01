const express=require("express")
require("dotenv").config();
const cors=require("cors")
const Razorpay=require('razorpay')
const mongoose=require("mongoose")
const member=require("./Routes/memberRoute")
const path=require("path");
const payment=require("./Routes/paymentRoute")
const app=express();

app.use(cors());
app.use(express.json()); // **
app.use(express.urlencoded({extended:true}));


app.use("/api/member",member)

app.use("/api/payment",payment);
// app.use("/api/order",orderRouter)

// static File
app.use(express.static(path.join(__dirname,"./client/build")))

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
mongoose.connect(process.env.MONGO_URL).then(
()=>{
   console.log("connect to mongo sucessfully")
}
)


const server=app.listen(process.env.PORT,()=>{
    console.log(`sever started on port ${process.env.PORT}`)
})