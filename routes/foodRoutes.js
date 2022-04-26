const { Router } = require("express")
const { protect, admin } = require("../middlewares/authMiddleware");
const { createFood, getMenu } = require("../controllers/foodControllers")


const router = Router()

router.route("/food").post(protect, admin, createFood).get(protect, getMenu);





module.exports = (router)