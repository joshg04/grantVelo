const express = require('express');
const grantvelocity = require('../models/items.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const grants = await grantvelocity.find({});
        console.log(grants);
        res.json(grants);
    } catch(error){
        console.log("error");
        res.status(500).json({success:false});
    }
})

module.exports = router;


