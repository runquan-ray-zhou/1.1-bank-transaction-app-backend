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
        // res.status(404).json({error: `Transaction with id ${id} does not exist.`})
        res.send("Cannot find any Transaction with this id: " + id)
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

// Delete Route
transactionsRouter.delete("/:id", (req, res) => {
    const { id } = req.params
    const transactionToDeleteIndex = transactionArray.findIndex((transaction) => transaction.id === Number(id))
    if (transactionToDeleteIndex !== -1) {
        transactionArray.splice(transactionToDeleteIndex, 1)
        res.redirect("/transactions")
    } 
    else {
        res.status(404).json({error: `Transaction with id ${id} does not exist.`})
    }
})

// Update Route
transactionsRouter.put("/:id", (req, res) => {
    const { id } = req.params
    const transactionToUpdateIndex = transactionArray.findIndex((transaction) => transaction.id === Number(id))
    if (transactionToUpdateIndex !== -1) {
        transactionArray[transactionToUpdateIndex] = req.body
        res.status(200).json(transactionArray[transactionToUpdateIndex])
    } else {
        res.status(404).json({error: `Transaction with id ${id} does not exist.`})
    }
})

// Export
module.exports = transactionsRouter;