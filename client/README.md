Store Rating App

This is a full-stack web application where users can register, log in, and rate different stores. The app includes role-based access control so that only Store Owners and System Administrators can create stores.

Tech Stack Used

Frontend: React, Axios, React Router  
Backend: Node.js, Express  
Database: PostgreSQL  
ORM: Sequelize  
Authentication: Token-based (simulated with dummy tokens)  
User Roles: Normal User, Store Owner, System Administrator

Main Features

- Register as a new user with a specific role
- Log in and receive a token (dummy-based or JWT)
- Store Owners and Admins can create stores
- All users can view the list of rated stores
- Role-based access control to restrict certain actions
- Fully RESTful API using Express and Sequelize
- React frontend with route protection

How to Run This Project Locally

1. Clone this repository to your system

2. Start the Backend

   - Open terminal and navigate to the server folder:
     cd server
   - Install dependencies:
     npm install
   - Start the server:
     npm run dev

3. Start the Frontend

   - Open a second terminal and navigate to the client folder:
     cd client
   - Install dependencies:
     npm install
   - Start the React app:
     npm start

4. Backend runs at http://localhost:5000  
   Frontend runs at http://localhost:3000

Project Structure

The codebase is divided into two main parts:

store-rating-app/
├── client/
│ ├── pages/
│ │ ├── SignUp.jsx
│ │ ├── SignIn.jsx
│ │ ├── AddStore.jsx
│ │ └── AllStores.jsx
│ └── App.jsx
│
├── server/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── index.js

Screenshots

1. Stores List  
   Displays all stores available in the system. Accessible to all users.

![Stores List](Project%20Screenshots/Stores%20List.png)

2. Register Form  
   Simple registration form with name, email, password, and role selector.

![Register Form](Project%20Screenshots/Register%20Form.png)

3. Register Form Scrollbar  
   Demonstrates smooth scrolling with styled dropdown for selecting roles.

![Register Form Scrollbar](Project%20Screenshots/Register%20Form%20Scrollbar.png)

4. Login Page  
   Allows registered users to sign in with their email and password.

![Login Page](Project%20Screenshots/Login%20Page.png)

5. Store Creation  
   Restricted access form for Store Owners and System Admins to add new stores.

![Store Creation](Project%20Screenshots/Store%20Creation.png)

6. Backend and Server Connection  
   Backend server running successfully with Sequelize and Express.

![Backend And Server Connection](Project%20Screenshots/Backend%20And%20Server%20Connection.png)

About the Developer

Developed by Harsh Behere — passionate about clean UI, scalable backend architecture, and building real-world full-stack applications with focus and fun.
