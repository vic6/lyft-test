const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({ 'message': 'The method is not allowed for the requested URL.'});
});

app.post('/test', (req, res) => {
  const body = req.body;
  const total = String(body.x + body.y);
  res.send(total);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
