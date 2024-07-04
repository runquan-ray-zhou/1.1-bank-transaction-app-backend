// Dependencies
const express = require("express")

// Configuration
const app = express()

// Controllers
const transactionsController = require("./controllers/transactionsController")

app.use("/transactions", transactionsController)

// Root/Health Check Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to My Bank Transaction App")
})

// Export App
module.exports = app