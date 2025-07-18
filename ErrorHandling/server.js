const express = require("express");
const app = express();
const Routes = require("./Routes/weatherRoutes.js")
const {Error}=require("./controller/errorMid.js")

app.use("/add/weather", Routes)

app.use(Error)

app.listen(4000, () => {
    console.log("server running on port 4000")
})