const router = require('express').Router();
const workoutRoutes = require('./workoutsRoutes');

router.use('/workouts', workoutRoutes);

module.exports = router;