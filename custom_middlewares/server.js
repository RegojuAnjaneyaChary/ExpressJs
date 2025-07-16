const express = require("express");
const app = express();

const weatherRoute = require("./Routes/weatherRoute.js")
 app.use("/api/v1.0/weather", weatherRoute)



app.listen(5000, () => {
    console.log("server running on port 5000")
})