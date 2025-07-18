const Error = (err,req,res,next) => {
    res.status(400).send("not found api")
}

module.exports={Error}