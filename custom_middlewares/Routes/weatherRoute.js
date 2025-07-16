const express = require("express");
const router = express.Router();
const {getweatherData}= require("../controller/weatherController.js")
const {checkAPI_key}=require('../middlewares/weatherMiddleware.js')


router.get("/", (req, res, next) => {
    const { api_key } = req.query
    if (api_key === "4567qwe45") {
        next()
    } else {
        res.status(401).json({
            message: "invalid api_key"
        });
    }
    
}  ,getweatherData)

module.exports = router;