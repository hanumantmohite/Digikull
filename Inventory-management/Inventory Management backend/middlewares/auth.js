const admin = require("../firebase");
const User = require("../models/user");

let data = {};
exports.authCheck = async (req, res, next) => {
  console.log(req.headers); // token
  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.user);
    // console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
};

exports.adminCheck = async (req, res, next) => {
  // console.log(req.user);
  const { email } = req.user;
  const adminUser = await User.findOne({ email }).exec();

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "Admin resource. Access denied.",
    });
  } else {
    next();
  }
};