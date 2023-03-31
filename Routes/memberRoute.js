const {getAllMembers,getMember, addMember, checkOrderId, login}=require("../controller/memberController")
const router=require("express").Router();

router.get("/getallmember",getAllMembers);
router.post("/addmember",addMember);
router.post("/checkorderid",checkOrderId);
router.post("/login",login);
// router.post("/getmember",getMember);


module.exports=router;