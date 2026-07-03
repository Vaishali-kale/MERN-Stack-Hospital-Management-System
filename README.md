# 🏥 Hospital Management System (MERN Stack)

Welcome to the **Hospital Management System**, a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) architecture. This system streamlines hospital operations, allowing patients to book appointments, doctors to manage their schedules, and administrators to oversee the entire ecosystem.

---

## 📸 Project Screenshots

Here is a visual look at the application in action:

### User / Patient Frontend
![Patient Dashboard](./assets/patient_dashboard.png)

### Admin & Doctor Management Panel
![Admin Panel](./assets/admin_panel.png)

---

## ✨ Features

### 👤 Patient Portal
* **User Authentication:** Secure registration and login.
* **Appointment Booking:** Schedule appointments with specific doctors based on their department/specialty.
* **Real-time Status:** Track the status of booked appointments (Pending, Approved, Cancelled).
* **Profile Management:** View and manage personal medical details.

### 👑 Admin Dashboard
* **Doctor Management:** Add new doctors, assign specialties, and upload profile pictures via Cloudinary.
* **Appointment Moderation:** Approve, reschedule, or reject pending appointments.
* **Overview Analytics:** View total numbers of registered patients, doctors, and pending actions at a glance.
* **User Control:** Manage administrative roles and view comprehensive system logs.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS (or standard CSS)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud database)
* **Image Hosting:** Cloudinary (For doctor and profile image uploads)
* **Authentication:** JSON Web Tokens (JWT) & HTTP-Only Cookies

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
* Node.js installed on your machine
* A MongoDB Atlas account
* A Cloudinary account

### 1. Clone the Repository
```bash
git clone [https://github.com/Vaishali-kale/MERN-Stack-Hospital-Management-System.git](https://github.com/Vaishali-kale/MERN-Stack-Hospital-Management-System.git)
cd MERN-Stack-Hospital-Management-System

2. Configure Backend Environment Variables
Navigate to your backend folder and create a .env file:

Bash
cd backend

PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174
JWT_SECRET_KEY=choose_a_long_random_secret_string
JWT_EXPIRES=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret


Install the required modules and start the backend:

Bash
npm install
npm run dev

3. Start the Patient Frontend App
Open a new terminal window, navigate to the frontend directory, install dependencies, and run it:

Bash
cd frontend
npm install
npm run dev
The client app should now be running on http://localhost:5173.


4. Start the Admin Dashboard App
Open another terminal window, navigate to the dashboard directory, install dependencies, and run it:

Bash
cd dashboard
npm install
npm run dev
The admin dashboard app should now be running on http://localhost:5174.


📂 Repository Structure
Plaintext
├── backend/          # Express API server, Database schemas, and Auth logic
├── frontend/         # React app for patient registration and booking (Port 5173)
├── dashboard/        # React app for Admins and Doctors to manage data (Port 5174)
└── README.md         # Project documentation

🔒 Important Security Warning
Ensure that your .env file is included in your .gitignore file so that your database string, cloud API keys, and JWT secrets are never exposed publicly on GitHub
