const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middlewares for every request 
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))

// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/expenses", {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})

// Routes - Endpoints
app.use("/expenses", require('./routes/expenseRouter.js'))

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})