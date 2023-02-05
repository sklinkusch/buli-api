// general prerequisites for rest api
const express = require('express');
const app = express();

// import of middlewares
const corsHeader = require("./middleware/cors-header");

// match data
const liga1men = require('./routes/liga1men');
const liga1women = require('./routes/liga1women');
const liga2men = require("./routes/liga2men");
const liga3men = require("./routes/liga3men");

// specify port for development
const port = 3500;

// middlewares
app.use((req, res, next) => corsHeader(req, res, next));

// endpoints
app.get("/liga1men", (req, res) => liga1men(req, res));
app.get("/liga1women", (req, res) => liga1women(req, res));
app.get("/liga2men", (req, res) => liga2men(req, res));
app.get("/liga3men", (req, res) => liga3men(req, res));

// default endpoint (is called if none of the others is matched)
app.all('*', (req, res) => {
  return res.status(404).json({ error: { message: 'This endpoint does not exist.' }});
});

// listening (for development)
app.listen(port, () => {`Listening to requests on port ${port} ...`});