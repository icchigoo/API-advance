const express = require("express");
const dbConnect = require("./config/dbconnect");
const app = express();
const authRouter=require("./routes/authRoute");
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/user", authRouter);


app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});

