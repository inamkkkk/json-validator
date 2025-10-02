const express = require('express');
const bodyParser = require('body-parser');
const validationRoutes = require('./routes/validationRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', validationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});