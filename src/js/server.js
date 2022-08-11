require('dotenv').config();
const express = require('express');

const app = express();
const { PORT } = process.env;

app.use(express.static(`./dist/`));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}!`);
});
