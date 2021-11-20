const userModel = require("./../../db/models/userSchema");
const mongoose = require("mongoose");

const oneuswer = (req, res) => {
  const { username, email,password, phone,age } = req.body;

  const newUser = new userModel({
    username,
    email,
    password,
    phone,
    age,

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
  // userModel
  //   .find({})
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
  newUser
  .find({})
  .where("age")
  .gt(20)
  .lt(30) 
  .sort({ age: -1 }) 
  .select("userName age") 
  .exec() 
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
};

module.exports = { oneuswer, alluser };
