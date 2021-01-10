const mongoose = require("mongoose");
const Transaction = require("./transaction");

// mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

const customrSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    Balance: Number,
    transactions:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Transaction"}],
    avatar:String,
    contact:Number,
    about:String
});

const Customer = mongoose.model("Customer", customrSchema);

module.exports = Customer;