// Dependencies
const express = require("express")

// Configuration
const app = express()

// Root/Health Check Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to My Bank Transaction App")
})

// Export App
module.exports = app