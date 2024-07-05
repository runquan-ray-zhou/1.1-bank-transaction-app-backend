// Dependencies
const express = require("express")
const cors = require("cors")

// Configuration
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Controllers
const transactionsController = require("./controllers/transactionsController")

app.use("/transactions", transactionsController)

// Root/Health Check Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to My Bank Transaction App")
})

// 404 Page Not Found
app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found" });
});


// Export App
module.exports = app