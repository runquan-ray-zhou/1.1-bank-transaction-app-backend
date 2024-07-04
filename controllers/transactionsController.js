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

// Show Route
transactionsRouter.get("/:id", (req, res) => {
    const { id } = req.params
    const currentTransaction = transactionArray.find((transaction) => transaction.id === Number(id))
    if (currentTransaction) {
            res.status(200).send(currentTransaction)
    } else {
        res.status(404).json({error: `Transaction with id ${id} does not exist.`})
    }
})

// Export
module.exports = transactionsRouter;