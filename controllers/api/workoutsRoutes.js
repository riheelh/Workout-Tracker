const router = require('express').Router();
const { Workout } = require('../../models');
const db = require("../../models");


router.get("/", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
});

router.post("/", (req, res) => {
    db.Workout.create(req.body)
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put("/:workoutId", (req, res) => {
    const id = req.params.workoutId
    Workout.findByIdAndUpdate( id, {$push: {exercises: req.body}}, {new: true})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }) 
})

module.exports = router;
