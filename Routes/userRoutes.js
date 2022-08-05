const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
const { protect} = require("../middlewares/authMiddleware");

//register a new user
router.post("/", registerUser);

//get all users
router.get("/", protect, getUsers);

//Auth user & get token
router.post("/login", authUser);

//get User Profile
router.get("/profile", protect, getUserProfile);

//Get user by Id
router.get('/:id',protect,getUserById)

//Delete a user
router.delete("/:id",protect,deleteUser)

module.exports = router;