<<<<<<< HEAD
<<<<<<< HEAD
=======
// routes/users.js

>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
<<<<<<< HEAD
<<<<<<< HEAD
const { registerUser, getUserByUsername } = require('../db');
=======
const { registerUser, getUserByUsername, getUserById } = require('../db'); 
const auth = require('../middleware/auth');
>>>>>>> 47bbfa4 (调整界面和ui)
=======
const { registerUser, getUserByUsername } = require('../db');
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf

// 注册路由
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await registerUser(username, email, password);
    res.status(201).json({ message: '用户注册成功' });
  } catch (error) {
    console.error('注册错误:', error);
    if (error.message.includes('UNIQUE constraint failed')) {
      res.status(400).json({ message: '用户名或邮箱已存在' });
    } else {
      res.status(500).json({ message: '注册失败,请稍后再试' });
    }
  }
});

// 登录路由
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    
    if (!user) {
      return res.status(400).json({ message: '用户名或密码错误' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: '用户名或密码错误' });
    }

<<<<<<< HEAD
<<<<<<< HEAD
    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
=======
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
>>>>>>> 47bbfa4 (调整界面和ui)
=======
    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
    res.json({ token });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ message: '登录失败，请稍后再试' });
  }
});

// 获取当前用户信息路由
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/me', (req, res) => {
  // 这里需要实现认证中间件
  res.json({ username: 'test_user' });
=======
router.get('/me', auth, async (req, res) => { 
  try {
    const user = await getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: '用户不存在' });
    }

    res.json({ 
      id: user.id,
      username: user.username,
      email: user.email 
    });
  } catch (error) {
    console.error('获取用户信息错误:', error);
    res.status(500).json({ message: '获取用户信息失败，请稍后再试' });
  }
>>>>>>> 47bbfa4 (调整界面和ui)
=======
router.get('/me', (req, res) => {
  // 这里需要实现认证中间件
  res.json({ username: 'test_user' });
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
});

module.exports = router;
