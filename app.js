const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello app working');
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})