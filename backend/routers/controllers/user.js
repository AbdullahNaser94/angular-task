const userSchema = require("../../db/models/user");
const bcrypt = require("bcrypt");

//REGISTER
const register = async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new userSchema({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json({ message: "create user", result: user });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  register
};
