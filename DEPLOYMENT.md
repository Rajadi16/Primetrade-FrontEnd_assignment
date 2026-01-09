# Deployment Guide - Render & Vercel

## 🚀 Backend Deployment (Render)

### Step 1: Prepare Your Repository

Make sure all code is pushed to GitHub:
```bash
git add .
git commit -m "prepare for deployment"
git push origin main
```

### Step 2: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### Step 3: Create New Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository: `Primetrade-FrontEnd_assignment`
3. Configure the service:

**Basic Settings:**
- **Name**: `taskmanager-backend` (or any name you prefer)
- **Region**: Choose closest to you (Singapore for India)
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type:**
- Select **"Free"** (for development/testing)

### Step 4: Add Environment Variables

In the **Environment Variables** section, add these:

| Key | Value |
|-----|-------|
| `PORT` | `5000` |
| `MONGODB_URI` | `mongodb+srv://rajadi7599_db_user:0KHSz1DUCjKHJIPI@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority` |
| `JWT_SECRET` | `your_super_secret_jwt_key_change_this_in_production_12345` |
| `NODE_ENV` | `production` |

**Important**: Replace the MongoDB URI with your actual connection string from MongoDB Atlas!

### Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (takes 2-3 minutes)
3. Once deployed, you'll get a URL like: `https://taskmanager-backend.onrender.com`

### Step 6: Test Your Backend

Test the health endpoint:
```
https://taskmanager-backend.onrender.com/api/health
```

You should see: `{"status":"OK","message":"Server is running"}`

---

## 🌐 Frontend Deployment (Vercel)

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Sign up with GitHub
3. Authorize Vercel

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Import your GitHub repository
3. Configure:

**Framework Preset**: Next.js (auto-detected)
**Root Directory**: `frontend`
**Build Command**: `npm run build` (auto-filled)
**Output Directory**: `.next` (auto-filled)

### Step 3: Add Environment Variable

In **Environment Variables**, add:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_API_URL` | `https://taskmanager-backend.onrender.com/api` |

**Important**: Use your actual Render backend URL!

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for deployment (1-2 minutes)
3. You'll get a URL like: `https://taskmanager-xyz.vercel.app`

---

## ✅ Post-Deployment Checklist

- [ ] Backend is running on Render
- [ ] Backend health check returns OK
- [ ] Frontend is running on Vercel
- [ ] Frontend can connect to backend
- [ ] Can sign up for an account
- [ ] Can login
- [ ] Can create/edit/delete tasks

---

## 🔧 Troubleshooting

### Backend Issues:

**Problem**: "Application failed to respond"
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

**Problem**: "MongooseError: connect ECONNREFUSED"
- Go to MongoDB Atlas → Network Access
- Click "Add IP Address" → "Allow Access from Anywhere"

### Frontend Issues:

**Problem**: "Failed to fetch" or CORS errors
- Verify `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- Check that backend URL is accessible
- Ensure backend has CORS enabled (already done in our code)

---

## 📝 Important Notes

1. **Free Tier Limitations**:
   - Render free tier: Server sleeps after 15 min of inactivity (first request takes ~30s)
   - MongoDB Atlas free tier: 512MB storage
   - Vercel free tier: Unlimited bandwidth

2. **Environment Variables**:
   - Never commit `.env` files to GitHub
   - Always set environment variables in the deployment platform's dashboard
   - Use different secrets for production vs development

3. **MongoDB Atlas**:
   - Make sure to whitelist Render's IP or allow all IPs (0.0.0.0/0) for development
   - For production, use specific IP whitelisting

---

## 🎯 Quick Start Commands

**Push latest changes:**
```bash
git add .
git commit -m "ready for deployment"
git push origin main
```

**Update environment variables** (if needed):
- Render: Dashboard → Environment → Edit
- Vercel: Settings → Environment Variables → Edit

Both platforms auto-redeploy when you push to GitHub!
