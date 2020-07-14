const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      default: "",
    },
    abbr: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

var Leaders = mongoose.model("Leader", leaderSchema);

module.exports = Leaders;
