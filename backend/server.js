// Import dotenv
require('dotenv').config()

// Create express app
const express = require('express')
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes -> Request and Response
app.get(`/`, (req, res) => {
    res.json({msg: "Welcome to the Mimemo"})
})

// Listen for requests
app.listen(process.env.PORT, ()=> {
    console.log("Listening on port ",process.env.PORT)
})