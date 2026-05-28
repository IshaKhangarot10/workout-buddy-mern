// const express = require('express')
// const {createWorkout,
// getWorkouts, getWorkout,
// deleteWorkout,updateWorkout
// } = require('../controllers/workoutController')
// const router = express.Router()

// //GET all workouts
// router.get('/',(req,res)=>{
//     res.json({mssg:'GET all workouts'})
// })

// // GET a single workout
// router.get('/:id',(req,res)=>{
//     res.json({mssg:'GET a single workout'})
// })
// // POST a new workout
// router.post('/', createWorkout)

// // DELETE a workout
// router.delete('/:id', (req, res) => {
//   res.json({mssg: 'DELETE a workout'})
// })

// // UPDATE a workout
// router.patch('/:id', (req, res) => {
//   res.json({mssg: 'UPDATE a workout'})
// })
// module.exports = router

const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router