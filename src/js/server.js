require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.static(`./dist/`));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
