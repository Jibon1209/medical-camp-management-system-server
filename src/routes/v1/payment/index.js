const savePayment = require("../../../api/v1/payment/controller/savePayment");

const router = require("express").Router();

router.post("/payments", savePayment.paymentCreate);
router.post("/create-payment-intent", savePayment.paymentIntent);
module.exports = router;
