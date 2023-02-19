const router = require('express').Router();
const {selectAll,saveUser,verifyUser,UpdateUimg,updateOne,deleteOne} = require("../controllers/user.controller");
const authenticateToken = require("../middleware")

router.get("/", authenticateToken, selectAll);
router.post("/SignUp",saveUser)
router.post("/SignIn",verifyUser)
router.put("/userimages/:id",UpdateUimg);
router.put("/:id",updateOne);
router.delete("/:id",deleteOne);

module.exports = router;
