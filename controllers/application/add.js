const mongoose = require("mongoose");
const getCookies = require("./../../utils/getCookies");
const User = require("./../../db/index").User;

module.exports = async (req, res, Application) => {
  try {
    const token = getCookies(req.headers.cookie).token || req.body.token;
    //First checking that user exist
    if (
      !token ||
      !(await User.exists({
        _id: new mongoose.Types.ObjectId(token),
      }))
    ) {
      throw new Error(`Unauthorised, please login again!`);
    }

    const application = await new Application({
      ...req.body,
      user_id: token,
    }).save();
    res.status(200).send({
      message: "Saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
    console.log(err);
  }
};
