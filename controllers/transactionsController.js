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
    const transaction = transactionArray.find((transaction) => transaction.id === Number(id))
    if (transaction) {
            res.status(200).send(transaction)
    } else {
        res.status(404).json({error: `Transaction with id ${id} does not exist.`})
    }
})

// Create Route
transactionsRouter.post("/", (req, res) => {
    const currentTransaction = {id: transactionArray.length + 1, ...req.body}
    transactionArray.push(currentTransaction)
    try{
        res.status(201).send(transactionArray[transactionArray.length - 1])
    }
    catch(error) {
        res.status(404).json({error: `Something Went Wrong!`})
    }
})

// Export
module.exports = transactionsRouter;