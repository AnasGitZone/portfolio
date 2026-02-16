# Portfolio Website

A full-stack portfolio website with blog functionality, built with React and Node.js.

## Tech Stack

### Frontend
- React 19 + Vite
- TailwindCSS
- Mantine UI
- Framer Motion
- TipTap Editor
- React Router DOM

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Upload)
- Nodemailer

## Project Structure

```
Dipak/
├── client/          # React frontend
└── server/          # Node.js backend
```

## Setup

### Prerequisites
- Node.js (v16+)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Dipak
```

2. Install dependencies

**Client:**
```bash
cd client
npm install
```

**Server:**
```bash
cd server
npm install
```

3. Configure environment variables

**Client (.env):**
```env
VITE_API_URL=http://localhost:5000
```

**Server (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

4. Run the application

**Development mode:**

Terminal 1 (Server):
```bash
cd server
npm run dev
```

Terminal 2 (Client):
```bash
cd client
npm run dev
```

## Features

- Portfolio showcase
- Blog management system
- Contact form with email notifications
- Admin authentication
- Rich text editor for blog posts
- Image upload functionality
- Responsive design

## Deployment

Both client and server are configured for Vercel deployment (vercel.json included).

## License

MIT
