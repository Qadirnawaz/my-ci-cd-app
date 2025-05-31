const express = require('express');
const app = express();
const port = 3000; // Your application will run on this port

app.get('/', (req, res) => {
  res.send('Hello from COMSATS DevOps Assignment! Deployed via Jenkins on Azure!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
