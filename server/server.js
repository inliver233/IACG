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
});
