const express = require("express");
const app = express();
import bodyParser from "body-parser";
const dotenv = require('dotenv').config();
const PORT = process.env.PORT | 4000;



app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
