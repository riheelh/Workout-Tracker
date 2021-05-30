const router = require('express').Router();
const path = require("path");
// const { Workout } = require('../models');

router.get("/exercise", async (req, res)=> {
    await res.redirect('./exercise.html')
});

router.get("/stats", async (req, res)=> {
        await res.redirect('./stats.html')
});

module.exports = router;