<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 提供静态文件
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/images', express.static(path.join(__dirname, '../images')));

// 路由
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

// 处理SPA路由
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// 启动服务器
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
<<<<<<< HEAD
=======
require('dotenv').config();

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // 引入 jsonwebtoken

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// 导入 users 路由
const usersRouter = require('./routes/users'); 
// 导入 posts 路由
const postsRouter = require('./routes/posts');

// 连接数据库
const db = new sqlite3.Database('./acgbbs.db', (err) => {
  if (err) {
    console.error('连接数据库出错:', err.message);
  } else {
    console.log('已连接到 SQLite 数据库');

    // 创建 posts 表
    db.run(`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        category TEXT NOT NULL,
        userId INTEGER, 
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// 使用 users 路由
app.use('/api/users', usersRouter);
// 使用 posts 路由
app.use('/api/posts', postsRouter); // 注意这里使用了 /api/posts 路径

// ... 其他路由 ...

console.log('JWT_SECRET:', process.env.JWT_SECRET ? '已设置' : '未设置');

app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
});
