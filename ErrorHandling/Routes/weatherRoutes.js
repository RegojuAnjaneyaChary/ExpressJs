const express = require("express")
const Router = express.Router()
const { getWeather } = require("../controller/weathetcontroller.js");
const {data} = require("../controller/weathetcontroller.js")

Router.get("/", getWeather)
Router.get("/data",data)

module.exports =Router