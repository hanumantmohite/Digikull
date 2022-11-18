//const catchAsyncErrors = require("../../../../FULLSTACK/BackEnd/Backend-final/middleware/catchAsyncErrors");
const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email },
    { name: name !== "" ? name : email.split("@")[0], picture },
    { new: true }
  );
  if (user) {
    // console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    // console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};

exports.currentUser = (req, res) => {
  // console.log(req.user.email);
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};

exports.getAllUser = async (req, res) => {
  const user = await User.find();
  // console.log(user);
  res.json(user);
};

exports.updateProFile = async (req, res, next) => {
  // console.log(req.body.name);
  // console.log(req.body.id);
  const newUserData = {
    name: req.body.name,
  };
  // wehave to add cludinary later...

  const user = await User.findByIdAndUpdate(req.body.id, newUserData);

  res.json(user);
};

exports.deleteProfile = async (req, res) => {
  console.log(req.body._id);
  const user = await User.findByIdAndDelete(req.body._id);

  res.json(user);
};
