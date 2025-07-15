const express = require("express");
const app = express()
const fs = require('fs')

// middleware creation
console.log(express.json());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

console.log("hello ");

//logger middleware

app.use((req, res, next) => {
    const data = {
        method:req.method,
        endpoint:req.url
    }


    console.log(req.method, req.url)
    fs.appendFileSync("./logger.log", JSON.stringify(data));
    next()
    
})
//request modify ability
app.use((req, res, next) => {
    req.body = {};
    next();
 })

//
app.post('/add', (req, res) => {
    res.json(req.body);
})



const port = 4000
app.listen(port, ()=>{console.log("server started.." + port)})