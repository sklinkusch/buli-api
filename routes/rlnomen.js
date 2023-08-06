const rlno_2022_23 = require("../data/rlnomen/rlno_2022-23");
const rlno_2023_24 = require("../data/rlnomen/rlno_2023-24");

const rlnomen = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2022-23":
      return res.status(200).json(rlno_2022_23);
    case "2023-24":
      return res.status(200).json(rlno_2023_24);
    default:
      return res
        .status(400)
        .json({
          error: { message: "A valid season parameter has to be provided." }
        });
  }
};

module.exports = rlnomen;
