const express=require('express');
const { ordergenerate, paymentVarification, getkey, checkPayment } = require('../controller/paymentController');

const router=express.Router();

router.post("/ordergenerate",ordergenerate);
router.post("/paymentvarification",paymentVarification);
router.post("/checkpayment",checkPayment);
router.get("/getkey",getkey);
module.exports= router;