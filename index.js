require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000; // or any other available port

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at chai and code</h1>');
});

app.get('/twitter', (req, res) => {
  res.send('Nancydotcom');
});
app.get('/youtube', (req,res) => {
  res.send('chai or code');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
