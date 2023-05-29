const liga2_2022_23 = require("../data/liga2women/liga2_2022-23");

const liga2women = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2022-23":
      return res.status(200).json(liga2_2022_23);
    default:
      return res
        .status(400)
        .json({
          error: { message: "A valid season parameter has to be provided." }
        });
  }
};

module.exports = liga2women;
