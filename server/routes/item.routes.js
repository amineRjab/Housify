const router = require('express').Router();
const itemController = require("../controllers/item.controller");
const authenticateToken = require("../middleware")

router.get("/", authenticateToken, itemController.selectAll);
router.post("/SignUp",itemController.saveUser)
router.post("/SignIn",itemController.verifyUser)


module.exports = router;
