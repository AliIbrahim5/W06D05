const userModel = require("./../../db/models/userSchema");
const mongoose = require("mongoose");

const oneuswer = (req, res) => {
  const { username, email } = req.body;

  const newUser = new userModel({
    username,
    email,
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const alluser = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { oneuswer, alluser };
