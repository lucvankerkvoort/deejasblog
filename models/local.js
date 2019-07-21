// requiring mongoDB from the config folder
var mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
var Schema = mongoose.Schema;

// The schema instance used for Locals
var LocalSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Username is required"
  },
  password: {
    type: String,
    required: "String is required",
    validation: [
      function(input) {
        return input.length >= 8 || input.length <= 20;
      },
      "Password is not long enough"
    ]
  },
  Address: {
    street: {
      type: String,
      trim: true,
      required: true
    },
    postal: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  }
});

// We use MongoDB's build in module to create a container so we can export the schema
var Local = mongoose.model("Local", LocalSchema);

module.exports = Local;
