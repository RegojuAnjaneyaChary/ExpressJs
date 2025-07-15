function loginController(req, res) {
    const userdata = {email:"vineeth@gmail.com", password:"@1234"}
    const { email, password } = req.body;
const profile = email === userdata.email && password === userdata.password ? "login successs": "login failed"
return res.send(profile)

} 

module.exports = { loginController };