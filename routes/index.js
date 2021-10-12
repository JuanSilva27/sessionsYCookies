var express = require('express');
var router = express.Router();
let { index, validarRegister,user,destroy }=require("../controllers/indexControler")
let validate = require("../middlewares/validate")
/* GET home page. */
router.get('/', index);
router.post("/",validate, validarRegister)



router.get("/user",user)


router.get("/destroy",destroy)

module.exports = router;
