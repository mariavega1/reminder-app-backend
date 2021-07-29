const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
  console.log('res',res);
  res.send('Hello World!');
});
// http://localhost:8000/
app.post('/create', (req, res) => {
  res.send('Create Reminder');
});
app.listen(port, () => {
  console.log(`====Example app listening at http://localhost:${port}=====`);
});