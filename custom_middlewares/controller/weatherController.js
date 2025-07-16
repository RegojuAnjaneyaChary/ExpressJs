const getweatherData = (req, res) => {
    const { city, api_key } = req.query;
    if (api_key == "4567qwe45") {
        res.status(200).json({
            message: "data fetched",
            cityName: city,
            temperature: 31,
            temperature_type: "celsius"
        });
        
    } else {
        res.status(401).json({
            message: "data ftched failed due to no api key"
        })
        
    }
    
    res.send("weather data")
};
module.exports = { getweatherData };