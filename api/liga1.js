const app = require("../app");
const route = require("../routes/liga1");

app.use("/liga1", route);

module.exports = app;