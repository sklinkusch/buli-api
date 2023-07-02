const liga2_2022_23 = require("../data/liga2men/liga2_2022-23");
const liga2_2023_24 = require("../data/liga2men/liga2_2023-24");

const liga2men = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2022-23":
      return res.status(200).json(liga2_2022_23);
    case "2023-24":
      return res.status(200).json(liga2_2023_24);
    default:
      return res
        .status(400)
        .json({
          error: { message: "A valid season parameter has to be provided." }
        });
  }
};

module.exports = liga2men;
