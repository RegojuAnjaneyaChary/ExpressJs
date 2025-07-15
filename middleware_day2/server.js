const express = require("express")
const app = express();
const {getProducts} = require("./controllers/apicontroller.js")
const authRoutes = require("./Routes/authRoutes.js")
const productRoutes = require("./Routes/productRoutes.js")


app.use(express.json());//data get from body as json


app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/products", productRoutes)
app.get("/api/products", getProducts)

app.listen(8000, () => {
    console.log("server started in 8000 port")
})