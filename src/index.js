const express = require("express");
require("dotenv").config();
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
