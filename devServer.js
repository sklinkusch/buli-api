const app = require('./app');
const routes = require('./routes/router');

const port = 8888;

app.use('/', routes);

app.listen(port, () => { 
  console.log(`Listening to requests on http:localhost:${port}`);
});