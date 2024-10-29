import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 这里应该有实际的发帖逻辑,与后端API交互
    console.log('发帖:', { title, content, category });
    // 假设发帖成功,跳转到帖子列表页面
    history.push('/posts');
  };

<<<<<<< HEAD
=======
// 创建帖子组件
const CreatePost = () => {
  // 使用 useState 钩子管理组件状态
  // title：帖子标题，初始为空字符串
  const [title, setTitle] = useState('');
  // content：帖子内容，初始为空字符串
  const [content, setContent] = useState('');
  // category：帖子分类，初始为空字符串
  const [category, setCategory] = useState('');
  // error：错误信息，初始为 null
  const [error, setError] = useState(null);

  // 获取 useHistory 钩子实例，用于跳转路由
  const history = useHistory();

  // 表单提交处理函数
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('开始创建新帖子...');

    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      author: 'Anonymous', // 使用匿名作者
      createdAt: new Date().toISOString(),
    };

    // 获取现有的帖子
    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    // 添加新帖子
    const updatedPosts = [newPost, ...existingPosts];
    
    // 保存到 localStorage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    console.log('新帖子创建成功:', newPost);

    // 重定向到主界面
    history.push('/main'); // 修改这里，确保返回主界面
  };

  // 渲染组件
  if (error) {
    return <div className="error-message">{error}</div>;
  }

>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  return (
    <div className="create-post">
      <h2>发布新帖子</h2>
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
        <div className="form-group">
          <label htmlFor="title">标题</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">分类</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
<<<<<<< HEAD
=======
        {/* 标题输入框 */}
        <div className="form-group">
          <label htmlFor="title">标题:</label>
          <input
            type="text"
            id="title"
            value={title} // 绑定输入框的值到 title 状态
            onChange={(e) => setTitle(e.target.value)} // 当输入框的值改变时更新 title 状态
            required // 设置为必填字段
          />
        </div>

        {/* 分类选择框 */}
        <div className="form-group">
          <label htmlFor="category">分类:</label>
          <select
            id="category"
            value={category} // 绑定选择框的值到 category 状态
            onChange={(e) => setCategory(e.target.value)} // 当选择框的值改变时更新 category 状态
            required // 设置为必填字段
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          >
            <option value="">选择分类</option>
            <option value="anime">动漫</option>
            <option value="manga">漫画</option>
            <option value="game">游戏</option>
            <option value="novel">轻小说</option>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">内容</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
<<<<<<< HEAD
=======
            {/* 根据您的实际分类添加更多选项 */}
          </select>
        </div>

        {/* 内容文本域 */}
        <div className="form-group">
          <label htmlFor="content">内容:</label>
          <textarea
            id="content"
            value={content} // 绑定文本域的值到 content 状态
            onChange={(e) => setContent(e.target.value)} // 当文本域的值改变时更新 content 状态
            required // 设置为必填字段
          ></textarea>
        </div>

        {/* 提交按钮 */}
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
        <button type="submit" className="submit-btn">发布</button>
      </form>
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
// 导出组件
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
export default CreatePost;
