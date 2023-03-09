// const express = require("express");
// const router = express.Router();
// const students = require("./routes/student.js");
// const app = express();

import express from 'express'

const app = express()



/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});







module.exports = app;