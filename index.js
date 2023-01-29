const express = require('express');
const app = express();
const liga1_2022_23 = require('./data/liga1men/liga1_2022-23');

const port = 3500;

app.get("/", (req, res) => {
  const { season, liga } = req.query;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  switch (liga) {
    case 'liga1':
      switch (season) {
        case '2022-23':
          res.status(200).json(liga1_2022_23);
        default:
          res.status(400).json({ error: { message: 'A valid season parameter has to be provided.'}});
      }
    default:
      res.status(400).json({ error: { message: 'A valid liga parameter has to be provided.' }});
  }
})

app.listen(port, () => {`Listening to requests on port ${port} ...`});