const router = require('express').Router();
const {selectPost,addpost,updateOnepost,Updatepost,deletepost} = require("../controllers/post.controller");

router.get("/", selectPost);
router.post("/:id",addpost);
router.put("/:id", updateOnepost );
router.put("/images/:id", Updatepost);
router.delete("/:id",deletepost);

module.exports = router;
