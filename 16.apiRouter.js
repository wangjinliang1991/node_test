const express = require('express')
const router = express.Router

router.get('/get', (req,res)=>{
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET success',
        data: query
    })
})

module.exports = router