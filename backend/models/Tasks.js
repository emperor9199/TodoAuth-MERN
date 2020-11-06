const mongoose = require("mongoose");

const Tasks = mongoose.Schema({
  taskname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tasks", Tasks);
