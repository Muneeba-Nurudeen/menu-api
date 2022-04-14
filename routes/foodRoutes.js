const { Router } = require("express")
const { createFood, getMenu } = require("../controllers/foodControllers")


const router = Router()

router.route("/food").post(createFood).get(getMenu)





module.exports = router