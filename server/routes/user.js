const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/userController");

router.get("/", userContoller.view);
router.post("/", userContoller.find);
router.get("/adduser", userContoller.createUserForm);
router.post("/add-user", userContoller.createUserFunction);

router.get("/edit-user/:id", userContoller.editUser);
router.post("/edit-user/:id", userContoller.updateUser);
router.get("/delete-user/:unique_id", userContoller.deleteUser);
router.get("/view-user/:unique_id", userContoller.viewUser);

module.exports = router;