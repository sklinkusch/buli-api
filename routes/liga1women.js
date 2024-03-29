const wliga1_2022_23 = require("../data/liga1women/liga1_2022-23");
const wliga1_2023_24 = require("../data/liga1women/liga1_2023-24");

const liga1women = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2023-24":
      return res.status(200).json(wliga1_2023_24);
    case "2022-23":
      return res.status(200).json(wliga1_2022_23);
    default:
      return res
        .status(400)
        .json({
          error: { message: "A valid season parameter has to be provided." }
        });
  }
};

module.exports = liga1women;
