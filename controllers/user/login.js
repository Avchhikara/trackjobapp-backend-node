const bcrypt = require("bcrypt");

module.exports = async (req, res, User) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please provide all values");
    }
    // getting the user
    let user = await User.find({
      email,
    });
    user = user[0];

    //checking user exist
    if (!user) {
      throw new Error(
        `No user with email: ${email} exists! Please register first.`
      );
    }
    //Checking verfied
    if (!user.verified) {
      throw new Error(
        `${user.name}, it seems that you've not verified your email. Please verify it by clicking on the link we've sent you to email ${user.email}. Tip: Also check spam folder if unable to find email`
      );
    }

    // checking the password
    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error(
        `${user.name}, password you've entered doesn't seems to be right. If you have forgot the password, you can always reset it ;)`
      );
    }

    // setting the cookie
    res.cookie("token", user._id, {
      maxAge: 30 * 24 * 60 * 60, // aka 1 month
    });
    // Sending the id
    res.status(200).json({
      message: "Logged in successfully!",
      token: user._id,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
