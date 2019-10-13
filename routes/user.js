const express = require('express')
const router = express.Router();

router.post('/login', (req, res, next) => {
    const {username, password} = req.body
    console.log(req.body)
    console.log(username)
    console.log(password)
    res.json({
        errno: 0,
        data: {
            username,
            password
        }
    })
})

module.exports = router