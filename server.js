
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/public')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json({ type: 'applications/json' }));

app.post('/', (req, res) => {
  const message = `Hello ${req.body.first} ${req.body.last}!`;
  res.json(message);
});

const listener = app.listen(8080, () => console.log(`app listening on port: ${listener.address().port}`));