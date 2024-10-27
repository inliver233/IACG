const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const auth = require('../middleware/auth');

const dataDir = path.join(__dirname, '../data');
const postsFilePath = path.join(dataDir, 'posts.json');

// 确保数据目录和posts.json文件存在
async function ensurePostsFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.access(postsFilePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(postsFilePath, '[]');
    } else {
      throw error;
    }
  }
}

// 在服务器启动时调用这个函数
ensurePostsFile().catch(console.error);

// 读取帖子数据
async function readPosts() {
  try {
    const data = await fs.readFile(postsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

// 写入帖子数据
async function writePosts(posts) {
  await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
}

// 获取所有帖子
router.get('/', async (req, res) => {
  const posts = await readPosts();
  res.json(posts);
});

// 创建新帖子
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const posts = await readPosts();
  
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author: req.user.username,
    createdAt: new Date().toISOString(),
    comments: []
  };
  
  posts.push(newPost);
  await writePosts(posts);
  
  res.status(201).json(newPost);
});

// 获取单个帖子
router.get('/:id', async (req, res) => {
  const posts = await readPosts();
  const post = posts.find(p => p.id === parseInt(req.params.id));
  
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: '帖子不存在' });
  }
});

// 添加评论
router.post('/:id/comments', auth, async (req, res) => {
  const { content } = req.body;
  const posts = await readPosts();
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

  if (postIndex !== -1) {
    const newComment = {
      id: posts[postIndex].comments.length + 1,
      content,
      author: req.user.username,
      createdAt: new Date().toISOString()
    };
    posts[postIndex].comments.push(newComment);
    await writePosts(posts);
    res.status(201).json(newComment);
  } else {
    res.status(404).json({ message: '帖子不存在' });
  }
});

// 搜索帖子
router.get('/search/:query', async (req, res) => {
  const posts = await readPosts();
  const query = req.params.query.toLowerCase();
  const results = posts.filter(post => 
    post.title.toLowerCase().includes(query) || 
    post.content.toLowerCase().includes(query)
  );
  res.json(results);
});

module.exports = router;
