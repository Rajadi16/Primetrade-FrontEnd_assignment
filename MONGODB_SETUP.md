# MongoDB Atlas Setup Instructions

## Step 1: Get Your Connection String

1. In MongoDB Atlas, click the **"Connect"** button on your Cluster0
2. Choose **"Drivers"** or **"Connect your application"**
3. Select **Driver: Node.js** and **Version: 5.5 or later**
4. Copy the connection string - it will look like:
   ```
   mongodb+srv://rajadi7599_db_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 2: Create Your Connection String

Replace `<password>` with: `0KHSz1DUCjKHJIPI`
Add `/taskmanager` after `.net`

Your final connection string should be:
```
mongodb+srv://rajadi7599_db_user:0KHSz1DUCjKHJIPI@cluster0.XXXXX.mongodb.net/taskmanager?retryWrites=true&w=majority
```

**Note:** Replace `XXXXX` with your actual cluster ID from MongoDB Atlas

## Step 3: Update Backend .env File

Create a file named `.env` in the `backend` folder with:

```
PORT=5000
MONGODB_URI=mongodb+srv://rajadi7599_db_user:0KHSz1DUCjKHJIPI@cluster0.XXXXX.mongodb.net/taskmanager?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
NODE_ENV=development
```

## Step 4: Whitelist Your IP

In MongoDB Atlas:
1. Go to **Network Access** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
4. Click **"Confirm"**

## Step 5: Restart Backend Server

After updating the `.env` file:
```bash
cd backend
npm start
```

The backend should now connect to MongoDB Atlas successfully!
