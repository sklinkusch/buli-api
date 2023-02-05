const liga3_2022_23 = require("../data/liga3men/liga3_2022-23");

const liga3men = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2022-23":
      return res.status(200).json(liga3_2022_23);
    default:
      return res.status(400).json({ error: { message: 'A valid season parameter has to be provided.'}});
  }
};

module.exports = liga3men;