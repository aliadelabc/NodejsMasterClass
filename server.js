const express = require("express");
const ENV = require("dotenv");

//load ENV variables
ENV.config({ path: "./config/config.env" });
//app intialize
const app = express();
//intalize PORT
const PORT = process.env.PORT || 5000;
//run server
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode at PORT ${PORT}`
  );
});
