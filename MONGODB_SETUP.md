# MongoDB Atlas Setup Complete! ✅

## Your MongoDB Credentials

**Username:** `rajadi7599_db_user`  
**Password:** `H4aqtrJbDx4ay0K0`  
**Cluster ID:** `cluster0.ytruutc.mongodb.net`

## Network Access Configuration ✅
- **IP Address:** `0.0.0.0/0` (Allow access from anywhere)
- This allows connections from Render, Vercel, and your local machine

---

## 🔧 Setup Instructions

### Step 1: Create Backend .env File

Navigate to the `backend` folder and create a `.env` file with this content:

```env
PORT=5000
MONGODB_URI=mongodb+srv://rajadi7599_db_user:H4aqtrJbDx4ay0K0@cluster0.ytruutc.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
NODE_ENV=development
```

**To create the file:**

```bash
cd backend
echo PORT=5000 > .env
echo MONGODB_URI=mongodb+srv://rajadi7599_db_user:H4aqtrJbDx4ay0K0@cluster0.ytruutc.mongodb.net/taskmanager?retryWrites=true^&w=majority^&appName=Cluster0 >> .env
echo JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345 >> .env
echo NODE_ENV=development >> .env
```

Or manually create `backend/.env` and copy the content above.

---

### Step 2: Test Local Connection

Start your backend server:

```bash
cd backend
npm install
npm start
```

You should see:
```
✅ MongoDB Connected: cluster0.o8rtxfs.mongodb.net
🚀 Server running on port 5000
```

---

### Step 3: Update Render Environment Variables

When deploying to Render, use these environment variables:

| Key | Value |
|-----|-------|
| `PORT` | `5000` |
| `MONGODB_URI` | `mongodb+srv://rajadi7599_db_user:H4aqtrJbDx4ay0K0@cluster0.ytruutc.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `your_super_secret_jwt_key_change_this_in_production_12345` |
| `NODE_ENV` | `production` |

---

## ✅ Checklist

- [x] MongoDB Atlas cluster created
- [x] Database user created (`rajadi7599_db_user`)
- [x] Network access configured (0.0.0.0/0)
- [ ] Backend `.env` file created
- [ ] Local backend tested
- [ ] Render environment variables updated

---

## 🔒 Security Notes

- ✅ `.env` file is in `.gitignore` (never commit it!)
- ✅ Network access allows 0.0.0.0/0 for deployment
- ⚠️ For production, consider using a stronger JWT_SECRET
- ⚠️ Keep your MongoDB password secure

---

## 📝 Connection String Breakdown

```
mongodb+srv://rajadi7599_db_user:H4aqtrJbDx4ay0K0@cluster0.ytruutc.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0
```

- **Protocol:** `mongodb+srv://` (MongoDB Atlas connection)
- **Username:** `rajadi7599_db_user`
- **Password:** `H4aqtrJbDx4ay0K0`
- **Cluster:** `cluster0.ytruutc.mongodb.net`
- **Database:** `taskmanager`
- **Options:** `retryWrites=true&w=majority&appName=Cluster0`
