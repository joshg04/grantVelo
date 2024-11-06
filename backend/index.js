const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const grantvelocity = require('./models/items.js')
const grantsGovRouter = require('./routers/grantsGov.js')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URI)

app.use("/", grantsGovRouter)

app.listen(4000, () => {
    console.log("server started at port 4000");
})
