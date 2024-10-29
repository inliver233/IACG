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
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(postsFilePath, '[]');
=======
    console.log('数据文件已准备就绪'); // 文件存在
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(postsFilePath, '[]');
      console.log('数据文件创建成功'); // 文件创建成功
>>>>>>> 47bbfa4 (调整界面和ui)
=======
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(postsFilePath, '[]');
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
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
<<<<<<< HEAD
<<<<<<< HEAD
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
=======
    console.log('读取帖子数据成功'); // 读取数据成功
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('数据文件不存在返回空数组'); // 文件不存在，返回空数组
>>>>>>> 47bbfa4 (调整界面和ui)
=======
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
      return [];
    }
    throw error;
  }
}

// 写入帖子数据
async function writePosts(posts) {
  await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log('帖子数据写入成功'); // 写入数据成功
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
}

// 获取所有帖子
router.get('/', async (req, res) => {
  const posts = await readPosts();
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log('获取到所有帖子', posts); // 打印获取到的帖子
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  res.json(posts);
});

// 创建新帖子
router.post('/', auth, async (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
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
<<<<<<< HEAD
=======
  console.log('收到创建新帖子请求');
  console.log('用户信息:', req.user);
  const { title, content, category } = req.body;
  console.log('帖子数据:', { title, content, category });

  try {
    const posts = await readPosts();
    console.log('当前帖子数量:', posts.length);

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      category,
      author: req.user.username,
      createdAt: new Date().toISOString(),
      comments: []
    };

    posts.push(newPost);
    await writePosts(posts);
    console.log('新帖子创建成功, ID:', newPost.id);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('创建帖子时发生错误:', error);
    res.status(500).json({ message: '服务器错误', error: error.message });
  }
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
});

// 获取单个帖子
router.get('/:id', async (req, res) => {
  const posts = await readPosts();
  const post = posts.find(p => p.id === parseInt(req.params.id));
  
  if (post) {
<<<<<<< HEAD
<<<<<<< HEAD
    res.json(post);
  } else {
=======
    console.log('获取到单个帖子', post); // 打印获取到的帖子
    res.json(post);
  } else {
    console.log('未找到帖子，ID:', req.params.id); // 打印未找到的帖子 ID
>>>>>>> 47bbfa4 (调整界面和ui)
=======
    res.json(post);
  } else {
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
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
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(201).json(newComment);
  } else {
=======
    console.log('新评论添加成功', newComment); // 打印添加成功的评论
    res.status(201).json(newComment);
  } else {
    console.log('添加评论失败，未找到帖子，ID:', req.params.id); // 打印未找到的帖子 ID
>>>>>>> 47bbfa4 (调整界面和ui)
=======
    res.status(201).json(newComment);
  } else {
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
    res.status(404).json({ message: '帖子不存在' });
  }
});

// 搜索帖子
router.get('/search/:query', async (req, res) => {
  const posts = await readPosts();
  const query = req.params.query.toLowerCase();
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log('搜索帖子，关键词:', query); // 打印搜索关键词
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  const results = posts.filter(post => 
    post.title.toLowerCase().includes(query) || 
    post.content.toLowerCase().includes(query)
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log('搜索结果', results); // 打印搜索结果
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  res.json(results);
});

module.exports = router;
