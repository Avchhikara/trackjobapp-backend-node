const getCookies = require("./../../utils/getCookies");

module.exports = async (req, res, Application) => {
  try {
    //First getting the cookies value
    const token = req.body.token;
    if (!token) {
      throw new Error(
        "Unable to find any applications, please try logging in again!!"
      );
      //   throw new Error("Please login first");
    }
    const data = await Application.find(
      {
        user_id: token,
      },
      "-_id -user_id -__v"
    );
    res.status(200).json({
      message: "Fetched successfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
