const router = require('express').Router();
const {addUser,selectUser,UpdateUimg,updateOne,deleteOne} = require("../controllers/user.controller");

router.get("/",selectUser);
router.post("/",addUser);
router.put("/userimages/:id",UpdateUimg);
router.put("/:id",updateOne);
router.delete("/:id",deleteOne);

module.exports = router;