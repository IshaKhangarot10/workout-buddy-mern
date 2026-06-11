# 🏋️ Workout Buddy

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-1A1A5C?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-2E004F?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-001033?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users track their fitness routines, log exercises, and manage their workout data seamlessly.

## Features

* User Authentication: Secure signup, login, and logout functionality using JSON Web Tokens (JWT).
* Data Privacy: Protected API routes ensure users can only access and manage their own specific workout logs.
* Workout Management: Easily add, view, update, and delete daily workout routines (load, reps, and exercise titles).
* State Management: Utilizes React Context for efficient global state handling (AuthContext & WorkoutContext).

## Tech Stack


### Frontend
* React.js: UI components and frontend routing.
* CSS: Custom styling.

### Backend
* Node.js & Express.js: RESTful API creation and server logic.
* MongoDB & Mongoose: NoSQL database and object data modeling.
* Bcrypt & JWT: Password hashing and secure user authentication.

## Getting Started

Follow these instructions to set up the project locally on your machine.

1. Clone the repository

git clone [https://github.com/IshaKhangarot10/workout-buddy-mern.git](https://github.com/IshaKhangarot10/workout-buddy-mern.git)

2. Install Dependencies
You will need to install the dependencies for both the frontend and backend.

* For Backend:
cd Backend
npm install

* For Frontend:
cd frontend
npm install

3. Environment Variables
Create a .env file in the Backend directory and add the following variables:
Code snippet
* PORT=4000
* MONGO_URI=your_mongodb_connection_string
* SECRET=your_jwt_secret_string

4. Run the Application
Open two separate terminal windows.
* Start the Backend server:
cd Backend
npm run dev
* Start the Frontend server:
cd frontend
npm start
