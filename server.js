const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');
const db = require("./models");
const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// app.get("/api/workouts", (req, res) => {
//   db.Workout.find({})
//     .then(data => {
//       res.json(data)
//     })
// })
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
