import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

  return (
    <div className="create-post">
      <h2>发布新帖子</h2>
      <form onSubmit={handleSubmit}>
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
          >
            <option value="">选择分类</option>
            <option value="anime">动漫</option>
            <option value="manga">漫画</option>
            <option value="game">游戏</option>
            <option value="novel">轻小说</option>
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
        <button type="submit" className="submit-btn">发布</button>
      </form>
    </div>
  );
};

export default CreatePost;
