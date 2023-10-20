const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080'
}));

mongoose.connect("mongodb+srv://mj-admin:JHpVLcfI32fhCVS1@cluster0.xtzciat.mongodb.net/", { dbName: 'Portfolio', useNewUrlParser: true, useUnifiedTopology: true });

const adminSchema = new mongoose.Schema({
  userName: { type: String },
  passWord: { type: String },
  loggedIn: { type: Boolean },
}, { collection: 'Admin' });

const Admin = mongoose.model('Admin', adminSchema);

app.post('/register', async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const hashedPassword = await bcrypt.hash(passWord, 10); // Hash the password
    const admin = new Admin({ userName, passWord: hashedPassword, loggedIn: true });
    await admin.save(); // Save admin credentials to MongoDB

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

app.post('/logout', async (req, res) => {
  try {
    // Update all admins and set loggedIn status to false
    await Admin.updateMany({}, { $set: { loggedIn: false } });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Logout failed' });
  }
});

app.get('/check-db-size', async (req, res) => {
  try {
    const adminCount = await Admin.countDocuments();
    res.status(200).json({ hasAdmin: adminCount > 0 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ hasAdmin: false, error: 'Error counting documents' });
  }
});

app.get('/api/login-status', async (req, res) => {
  try {
    const admin = await Admin.findOne({ loggedIn: true });
    res.status(200).json({ loggedIn: admin ? true : false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ loggedIn: false, error: 'Error checking login status' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const admin = await Admin.findOne({ userName });

    if (admin && bcrypt.compareSync(passWord, admin.passWord)) {
      // Successful login
      admin.loggedIn = true;
      await admin.save(); // Update the loggedIn status in the database
      res.status(200).json({ success: true });
    } else {
      // Failed login
      res.status(401).json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
}, { collection: 'BlogPosts' });

const BlogPosts = mongoose.model('BlogPosts', blogPostSchema);

// Get existing blog posts
app.get('/api/blogposts', async (req, res) => {
  try {
    const posts = await BlogPosts.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Save a new blog post
app.post('/api/blogposts', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = new BlogPosts({ title, content });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
