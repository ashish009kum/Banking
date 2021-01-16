const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/banking", { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => {
//         console.log("connected");
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

const databSchema = new mongoose.Schema({
    Date: Date,
    payment: String
});

const Datab = mongoose.model("Datab", databSchema);

module.exports = Datab;