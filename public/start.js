const express = require('express');
const {resolve} = require('path');

const app = express();

app.use(require('volleyball'));

module.exports = app
  // .use(express.static('index.html'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, 'index.html')))
  .listen(process.env.PORT || 8080);
