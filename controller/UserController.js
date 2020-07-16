const user = require("../models/user");

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    user.create(req.body).then((dbModel) => res.json(dbModel));
  },
  findAll: function (req, res) {
    user
      .find({})
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel));
  },
  findById: function (req, res) {
    user
      .find({ _id: req.params.id })
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel));
  },
  findByUsernameAndPassword: function (req, res) {
    console.log(req.body);
    user
      .find({ username: req.body.username }, { password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => json(err));
  },
  update: function (req, res) {
    user
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel));
  },
  // we create a delete method, to remove data we will not need anymore
  delete: function (req, res) {
    user
      .findByIdAndDelete({ _id: req.params.id })
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel));
    // here we will use mongo's queries to find a specific document and delete it from the database
  },
};
