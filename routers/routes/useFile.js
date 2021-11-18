const express = require("express");
const { oneuswer, alluser } = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", oneuswer);
userRouter.get("/Viewallusers", alluser);

module.exports = userRouter;
