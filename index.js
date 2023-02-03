const express = require('express');
const app = express();
const mliga1_2022_23 = require('./data/liga1men/liga1_2022-23');
const wliga1_2022_23 = require('./data/liga1women/liga1_2022-23');

const port = 3500;

app.get("/", (req, res) => {
  const { season, liga } = req.query;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  switch (liga) {
    case 'liga1':
      switch (season) {
        case '2022-23':
          return res.status(200).json(mliga1_2022_23);
        default:
          return res.status(400).json({ error: { message: 'A valid season parameter has to be provided.'}});
      }
    default:
      return res.status(400).json({ error: { message: 'A valid liga parameter has to be provided.' }});
  }
})

app.get("/liga1women", (req, res) => {
  const { season } = req.query;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  switch (season) {
    case '2022-23':
      return res.status(200).json(wliga1_2022_23);
    default:
      return res.status(400).json({ error: { message: 'A valid season parameter has to be provided.' }});
  }
})

app.listen(port, () => {`Listening to requests on port ${port} ...`});