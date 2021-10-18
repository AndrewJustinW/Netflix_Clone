const router = require("express").Router();
const User = require("../models/User")

// REGISTER USER
router.post("/register", (req, res) => {

    const newUser = new User({
        username: req.body.username,
        password:
})

})