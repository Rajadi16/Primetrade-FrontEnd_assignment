# TaskManager - Full Stack Web Application

A modern, scalable task management application with JWT authentication, built with Next.js and Express.

## 🚀 Features

- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Task Management**: Full CRUD operations on tasks
- **Search & Filter**: Real-time search and filtering by status and priority
- **User Profiles**: View and update user information
- **Responsive Design**: Mobile-friendly interface with TailwindCSS
- **Protected Routes**: Authentication-required pages with automatic redirects

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **HTTP Client**: Axios with interceptors
- **Routing**: Next.js App Router

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd Primetrade-FrontEnd_assignment
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

Start the backend server:

```bash
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.new@example.com"
}
```

### Task Endpoints

#### Get All Tasks
```http
GET /api/tasks?status=pending&priority=high&search=keyword
Authorization: Bearer <token>
```

#### Get Single Task
```http
GET /api/tasks/:id
Authorization: Bearer <token>
```

#### Create Task
```http
POST /api/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Complete assignment",
  "description": "Finish the frontend developer task",
  "status": "pending",
  "priority": "high"
}
```

#### Update Task
```http
PUT /api/tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated title",
  "status": "completed"
}
```

#### Delete Task
```http
DELETE /api/tasks/:id
Authorization: Bearer <token>
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Frontend routes automatically redirect unauthenticated users
- **Input Validation**: Both client-side and server-side validation
- **CORS Configuration**: Properly configured cross-origin requests
- **Error Handling**: Comprehensive error handling on both frontend and backend

## 📁 Project Structure

```
Primetrade-FrontEnd_assignment/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   └── api.ts
│   └── package.json
└── README.md
```

## 🚀 Scaling for Production

See [SCALING_NOTES.md](./SCALING_NOTES.md) for detailed information on scaling this application for production use.

### Quick Scaling Tips:

1. **Database**: Use MongoDB Atlas with replica sets
2. **Caching**: Implement Redis for session management
3. **Load Balancing**: Use Nginx or cloud load balancers
4. **CDN**: Serve static assets via CDN
5. **Environment Variables**: Use proper secret management
6. **Monitoring**: Implement logging and monitoring tools
7. **Containerization**: Use Docker for consistent deployments

## 🧪 Testing

### Backend Testing
```bash
cd backend
# Test health endpoint
curl http://localhost:5000/api/health
```

### Frontend Testing
Open `http://localhost:3000` in your browser and test:
1. Sign up with a new account
2. Login with credentials
3. Create, update, and delete tasks
4. Test search and filter functionality
5. Update profile information
6. Logout and verify redirect

## 📝 License

MIT

## 👨‍💻 Author

Created for PrimeTrade Frontend Developer Intern Assignment

## 📧 Contact

For questions or issues, please contact the development team.
