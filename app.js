const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatLogger));
app.use(cors());

app.use("/api/contacts", contactsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Server error" });
});

module.exports = app;
