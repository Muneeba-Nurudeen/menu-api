const { Router } = require("express")
const { protect } = require("../middlewares/authMiddleware");
const { createFood, getMenu } = require("../controllers/foodControllers")


const router = Router()

router.route("/food").post(protect, createFood).get(protect, getMenu);





module.exports = (router)