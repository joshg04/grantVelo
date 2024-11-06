const mongoose = require('mongoose')

const grantSchema = new mongoose.Schema({
    _id: {type: String},
    title: {type: String},
    location: {type: String},
    category: {type: String},
    awardCeiling: {type: String},
})

module.exports = mongoose.model('grantvelocity', grantSchema, 'grantvelocity')


