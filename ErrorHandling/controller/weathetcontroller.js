const getWeather = (req, res) => {
    res.send("wetaher report data")
}


const data = (req,res,next) => {
    try {
         res.json(citydata)
    } catch (err) {
        next(err)
    }
}
module.exports = {getWeather,data}