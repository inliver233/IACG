import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 这里应该从API获取帖子列表
    // 暂时使用模拟数据
    const mockPosts = [
      { id: 1, title: '帖子1', author: '用户1', createdAt: '2023-05-01', comments: 5, likes: 10 },
      { id: 2, title: '帖子2', author: '用户2', createdAt: '2023-05-02', comments: 3, likes: 8 },
      // ... 更多帖子
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className="post-list">
      <h2>帖子列表</h2>
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p>作者: {post.author} | 发布时间: {post.createdAt}</p>
          <p>评论: {post.comments} | 点赞: {post.likes}</p>
        </div>
      ))}
<<<<<<< HEAD
=======
import { Link, useLocation } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('获取帖子列表出错:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    // 检查是否从创建帖子页面跳转过来，并且是否添加了新帖子
    if (location.state && location.state.isNewPostAdded) {
      fetchPosts();
      // 重置 location.state，避免重复刷新
      history.replace('/posts', null);
    }
  }, [location.state]); 

  return (
    <div className="post-list">
      <h2>帖子列表</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
            <p>{post.content}</p>
            <p>分类: {post.category}</p>
          </li>
        ))}
      </ul>
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
    </div>
  );
};

export default PostList;
