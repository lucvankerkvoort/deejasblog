// requiring mongoDB from the config folder
const mongoose = require("mongoose");

// using mongo's build in logic to create a schema constructor
const Schema = mongoose.Schema;

// The instance of the schema used for Travellers
const UserSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
console.log(UserSchema);
// We use MongoDB's build in module to create a container so we can export the schema
const User = mongoose.model("User", UserSchema);
console.log(User);

module.exports = User;
