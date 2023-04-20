const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const fs = require("fs/promises");
global.basedir = __dirname;

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLogger));
app.use(async (req, res, next) => {
  const date = new Date().toString().slice(0, 25);
  const { method, url } = req;
  await fs.appendFile(".server.log", `${date} ${method} ${url}\n `);
  next();
});
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/api/users", authRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
