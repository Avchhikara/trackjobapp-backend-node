const bcrypt = require("bcrypt");

// TODO: Add email sending feature
// TODO: Add logic to sent verification email again if the user try to register and has already registered but hadn't verified their email and respond with a success message.

module.exports = async (req, res, User) => {
  try {
    await new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    }).save();
    res.status(200).json({
      message: `${req.body.name} your registration is successful, please verify your email by clicking on the link we've just sent you to ${req.body.email}. Can't wait to see you inside ;)`,
    });
  } catch (err) {
    res.status(400).json({
      message:
        err.code === 11000
          ? `${
              req.body.name || "Hi"
            } it seems that you've registered before with email ${
              req.body.email
            }. Please try resetting the password if you've forgot it!`
          : "Some error has occurred, please contact us if the problem persist",
    });
    // TODO: Some logic here to do with the error rather than just logging
    console.log(err);
  }
};
