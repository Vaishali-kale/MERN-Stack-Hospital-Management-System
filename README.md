🏥  Hospital Management System
A comprehensive Hospital Management System built with the MERN stack, providing separate interfaces for patients and administrators to manage appointments, doctors, and medical services efficiently.

Node.js React MongoDB Express.js

📋 Table of Contents
Features
Tech Stack
Project Structure
Prerequisites
Installation
Environment Variables
Database Schema
API Endpoints
Authentication & Authorization
Usage
Screenshots
Contributing
License
Contact
✨ Features
🔐 Authentication & Authorization
Multi-role Authentication: Separate login systems for Patients, Doctors, and Admins
JWT Token-based Security: Secure authentication with HTTP-only cookies
Role-based Access Control: Different permissions for different user types
👨‍⚕️ Admin Dashboard Features
Doctor Management: Add, view, and manage doctor profiles with avatar uploads
Admin Management: Create new admin accounts
Appointment Management: View, accept, reject, and track all appointments
Message Center: View and manage patient inquiries
Real-time Statistics: Dashboard with appointment and doctor counts
👤 Patient Portal Features
User Registration & Login: Secure patient account creation
Appointment Booking: Schedule appointments with preferred doctors
Department Selection: Choose from 9 medical departments
Doctor Selection: View available doctors by department
Medical History: Track previous visits and appointments
Contact Form: Send messages to hospital administration
🏥 Medical Departments
Pediatrics
Orthopedics
Cardiology
Neurology
Oncology
Radiology
Physical Therapy
Dermatology
ENT (Ear, Nose, Throat)
🚀 Tech Stack
Backend
Node.js - JavaScript runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
JWT - JSON Web Tokens for authentication
bcrypt - Password hashing
Cloudinary - Image upload and storage
CORS - Cross-origin resource sharing
Cookie Parser - Parse HTTP cookies
Frontend
React 19 - User interface library
React Router DOM - Client-side routing
Axios - HTTP client for API calls
React Toastify - Toast notifications
React Icons - Icon library
React Multi Carousel - Carousel component
Vite - Build tool and development server
Development Tools
Nodemon - Auto-restart development server
ESLint - Code linting
dotenv - Environment variable management
📁 Project Structure
hospital-management-system/
├── Backend/
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── catchAsyncErrors.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── appointmentSchema.js
│   │   ├── messageSchema.js
│   │   └── userSchema.js
│   ├── router/
│   │   ├── appointmentRouter.js
│   │   ├── messageRouter.js
│   │   └── userRouter.js
│   ├── utils/
│   │   └── jwtToken.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── dashboard/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddNewAdmin.jsx
│   │   │   ├── AddNewDoctor.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Messages.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── Biography.jsx
│   │   │   ├── Departments.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MessageForm.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Pages/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
└── README.md
📋 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v16 or higher)
npm or yarn
MongoDB (local installation or MongoDB Atlas)
Git
🛠 Installation
1. Clone the Repository
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system
2. Backend Setup
cd Backend
npm install
3. Frontend Setup
cd ../frontend
npm install
4. Dashboard Setup
cd ../dashboard
npm install
🔧 Environment Variables
Create a .env file in the Backend/config/ directory:

# Database
MONGO_URI=mongodb://localhost:27017/hospital_management
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hospital_management

# JWT Configuration
JWT_SECRET_KEY=your-super-secret-jwt-key-here
JWT_EXPIRES=7d
COOKIE_EXPIRE=7

# Server Configuration
PORT=4000

# Frontend URLs
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
🗄 Database Schema
User Schema
{
  firstName: String (required, min: 2)
  lastName: String (required, min: 2)
  email: String (required, unique, validated)
  phone: String (required, exactly 10 digits)
  nic: String (required, exactly 12 digits)
  dob: Date (required)
  gender: Enum ["Male", "Female", "Others"]
  password: String (required, min: 8, hashed)
  role: Enum ["Admin", "Patient", "Doctor"]
  doctorDepartment: String (for doctors only)
  docAvatar: {
    public_id: String
    url: String
  }
}
Appointment Schema
{
  firstName: String (required, min: 3)
  lastName: String (required, min: 3)
  email: String (required, validated)
  phone: String (required, exactly 11 digits)
  nic: String (required, exactly 13 digits)
  dob: Date (required)
  gender: Enum ["Male", "Female"]
  appointment_date: String (required)
  department: String (required)
  doctor: {
    firstName: String (required)
    lastName: String (required)
  }
  hasVisited: Boolean (default: false)
  address: String (required)
  doctorId: ObjectId (required)
  patientId: ObjectId (required, ref: "User")
  status: Enum ["Pending", "Accepted", "Rejected"] (default: "Pending")
}
Message Schema
{
  firstName: String (required, min: 2)
  lastName: String (required, min: 2)
  email: String (required, validated)
  phone: String (required, min: 10)
  message: String (required)
}
🔗 API Endpoints
User Routes (/api/v1/user)
Method	Endpoint	Description	Auth Required
POST	/patient/register	Register new patient	No
POST	/login	User login (all roles)	No
POST	/admin/addnew	Add new admin	Admin
POST	/doctor/addnew	Add new doctor	Admin
GET	/doctors	Get all doctors	No
GET	/patient/me	Get patient profile	Patient
GET	/admin/me	Get admin profile	Admin
GET	/patient/logout	Logout patient	Patient
GET	/admin/logout	Logout admin	Admin
Appointment Routes (/api/v1/appointment)
Method	Endpoint	Description	Auth Required
POST	/post	Create new appointment	Patient
GET	/getall	Get all appointments	Admin
PUT	/update/:id	Update appointment status	Admin
DELETE	/delete/:id	Delete appointment	Admin
Message Routes (/api/v1/message)
Method	Endpoint	Description	Auth Required
POST	/send	Send message	No
GET	/getall	Get all messages	Admin
🔐 Authentication & Authorization
JWT Token System
Patient Token: Stored in patientToken cookie
Admin Token: Stored in adminToken cookie
Token Expiry: 7 days (configurable)
HTTP-Only Cookies: Prevents XSS attacks
Middleware Protection
isPatientAuthenticated: Protects patient routes
isAdminAuthenticated: Protects admin routes
isAuthorized: Role-based access control
Password Security
Passwords hashed using bcrypt with salt rounds of 10
Password comparison using bcrypt.compare()
🚀 Usage
1. Start the Backend Server
cd Backend
npm run dev
# Server runs on http://localhost:4000
2. Start the Frontend (Patient Portal)
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
3. Start the Dashboard (Admin Panel)
cd dashboard
npm run dev
# Dashboard runs on http://localhost:5174
4. Access the Applications
Patient Portal: http://localhost:5173
Admin Dashboard: http://localhost:5174
API Server: http://localhost:4000
👥 User Roles & Access
🏥 Admin Features
Login to admin dashboard
View Dashboard with statistics
Manage Appointments (view, accept, reject, delete)
Add New Doctors with profile pictures
Add New Admins
View All Doctors
Read Patient Messages
👤 Patient Features
Register new account
Login to patient portal
Book Appointments with doctor selection
Browse Departments and services
Send Messages to administration
View Hospital Information
👨‍⚕️ Doctor Features
Doctors are added by admins
Profile management through admin dashboard
Department assignment and specialization
🖼 Screenshots

### Patient Portal
![Home Page](screenshots/patient-home.png)
![Appointment Booking](screenshots/appointment-form.png)

### Admin Dashboard  
![Dashboard](screenshots/admin-dashboard.png)
![Doctor Management](screenshots/doctor-management.png)
