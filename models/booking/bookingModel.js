const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "flight" },
});

const BookingModel=mongoose.model("booking",BookingSchema);

module.exports = BookingModel;