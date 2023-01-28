const liga1 = require('express').Router();
const liga1_2022_23 = require('../data/liga1men/liga1_2022-23');

liga1.get('/liga1', (req, res) => {
  const { season } = req.query;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (season) {
    switch (season) {
      case '2022-23':
        return res.status(200).json(liga1_2022_23);
      default:
        return res.status(400).json({ error: { message: "The season cannot be provided." }});
    }
  }
  return res.status(400).json({ error: { message: "A season parameter is missing."}});
})

module.exports = liga1;