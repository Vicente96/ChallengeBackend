const express = require("express");
const userController = require("../../controllers/userController");
const router = express.Router();



router.get("/", userController.getAllUsers);

router.get("/:email",userController.getOneUser);

router.get("/login/:email/:password",userController.getLogin);

router.post("/", userController.createNewUser);

router.put("/:idUser", userController.updateOneUser);

router.delete("/:idUser", userController.deleteOneUser);

module.exports = router;