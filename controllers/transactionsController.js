// Dependencies
const express = require("express")

const transactionsRouter = express.Router()

const transactionArray = require("../models/transaction")

// Index Route
transactionsRouter.get("/", (req, res) => {
    try{
        res.status(200).send(transactionArray)
    }
    catch(error) {
        res.status(404).json({error: `Something Went Wrong!`})
    }
})

// Export
module.exports = transactionsRouter;