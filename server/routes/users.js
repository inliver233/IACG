const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { registerUser, getUserByUsername } = require('../db');

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

    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ message: '登录失败，请稍后再试' });
  }
});

// 获取当前用户信息路由
router.get('/me', (req, res) => {
  // 这里需要实现认证中间件
  res.json({ username: 'test_user' });
});

module.exports = router;
