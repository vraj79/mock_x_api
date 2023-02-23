const express = require("express");
const UserModel = require("../models/user/userModel");

const UserRoute = express.Router();

UserRoute.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.send("user already exists");
    }
    const user = new UserModel({ name, email, password });
    await user.save();
    res.status(201).send("User Created Successfully");
  } catch (error) {
    res.send({ error });
  }
});

UserRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      if (user.password === password) {
        res.send("Logged in Successfully");
      } else {
        res.send("Wrong Password");
      }
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.send({ error });
  }
});

module.exports = UserRoute;
