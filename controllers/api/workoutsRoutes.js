const router = require('express').Router();
const { Workout } = require('../../models');
const db = require("../../models");


// router.get("/", (req, res) => {
//     db.Workout.find({})
//     .then(data => {
//         res.json(data)
//     })
// })

router.get("/", async(req, res) => {
    const workoutData = await Workout.find({})
    res.send(workoutData)
})

// router.post("/", async (req, res) => {
//     db.Workout.create(req.body)
// })

// router.post("/", async(req, res) => {
//     const workData = await Workout.create({body})
//     res.send(workData)
// })

module.exports = router;