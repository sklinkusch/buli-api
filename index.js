// general prerequisites for rest api
const express = require('express');
const app = express();

// match data
const liga1men = require('./routes/liga1men');
const liga1women = require('./routes/liga1women');

// specify port for development
const port = 3500;

// endpoints
app.get("/liga1men", (req, res) => liga1men(req, res));
app.get("/liga1women", (req, res) => liga1women(req, res));

// default endpoint (is called if none of the others is matched)
app.all('*', (req, res) => {
  return res.status(404).json({ error: { message: 'This endpoint does not exist.' }});
});

// listening (for development)
app.listen(port, () => {`Listening to requests on port ${port} ...`});