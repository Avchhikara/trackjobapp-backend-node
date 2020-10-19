const getCookies = require("./../../utils/getCookies");

module.exports = async (req, res, Application) => {
  try {
    const application = await new Application({
      ...req.body,
      user_id: getCookies(req.headers.cookie).token,
    }).save();
    res.status(200).send({
      message: "Saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
