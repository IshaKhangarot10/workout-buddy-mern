require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')

const workoutesRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     next()
// })
app.use('/api/workouts',workoutesRoutes)

//route 
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
app.listen(process.env.PORT, () => {
    console.log('Connected to db and listening on port')
})
})
.catch((error)=>{
    console.log(error)
})

//listen for request
// app.listen(process.env.PORT, () => {
//     console.log('listening on port')
// })
