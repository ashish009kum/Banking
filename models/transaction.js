const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

const transactionSchema = new mongoose.Schema({
    Date:Date,
    amount:Number,
    Description:String,
    comment:String
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;