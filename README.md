# 🏋️‍♂️ Workout Buddy

![MERN Stack](https://img.shields.io/badge/MERN_Stack-5D3FD3?style=for-the-badge&logo=react&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-00008B?style=for-the-badge)

Workout Buddy is a full-stack web application designed to help users track their fitness routines. Users can easily add, view, and delete their daily workouts, including specific exercises, loads, and repetitions. 

This project was built to demonstrate a complete understanding of RESTful API development, database management, and frontend state management.

## Tech Stack
Frontend:
* React.js
* Context API (State Management)
* CSS 
Backend:
* Node.js
* Express.js
* MongoDB & Mongoose

## Features

* Create Workouts: Add new exercises with specific sets, reps, and weights.
* Read Data: View a chronological feed of all past workouts.
* Delete Workouts: Remove outdated or incorrect entries from the database.
* Responsive Design: A clean, dark-themed user interface that works across devices.

## Local Setup Instructions
To run this project on your own local machine, follow these steps:

Clone the repository:
   
   git clone [https://github.com/IshaKhangarot10/workout-buddy-mern.git](https://github.com/IshaKhangarot10/workout-buddy-mern.git)

Install backend dependencies:
   cd backend
   npm install

Install frontend dependencies:
   cd ../frontend
   npm install

Environment Variables:
   MONGO_URI=your_mongodb_connection_string
   PORT=4000

Run the application:
In terminal 1 (Backend): npm run dev
In terminal 2 (Frontend): npm start

## Acknowledgments
This foundational project was built by following the comprehensive MERN Stack tutorial series by The Net Ninja. It served as an excellent practical application of full-stack development principles.
