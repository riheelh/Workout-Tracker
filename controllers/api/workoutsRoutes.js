const router = require('express').Router();
// const { Workout } = require('../../models');
const db = require("../../models");

router.get("/", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data)
    })
})

module.exports = router;