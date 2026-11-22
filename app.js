const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/students', router)

module.exports = app