const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  conformPassword: {
    type: String,
    required: true
  },

})

const register = new mongoose.model("Register", employeeSchema)
module.exports = register