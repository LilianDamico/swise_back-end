console.clear();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(express.json());
app.use(cors());
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/login", require("./routes/login.routes"));

app.listen(port, function () {
  console.log(
    "\n----------------------------------------------------------------\nServer running on port " +
      port +
      " - NODE_ENV = " +
      process.env.NODE_ENV +
      "\n----------------------------------------------------------------\n"
  );
});
