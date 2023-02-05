const rlno_2022_23 = require("../data/rlnomen/rlno_2022-23");

const rlnomen = (req, res) => {
  const { season } = req.query;
  switch (season) {
    case "2022-23":
      return res.status(200).json(rlno_2022_23);
    default:
      return res.status(400).json({ error: { message: 'A valid season parameter has to be provided.'}});
  }
};

module.exports = rlnomen;