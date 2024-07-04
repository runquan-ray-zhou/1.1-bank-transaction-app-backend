// Dependencies
const express = require("express")

const transactionsRouter = express.Router()

const transactionArray = require("../models/transaction")

// Index Route
transactionsRouter.get("/", (req, res) => {
    res.status(200).send(transactionArray)
})

// Export
module.exports = transactionsRouter;