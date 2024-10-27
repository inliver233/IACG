import React, { useState, useEffect } from 'react';
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
    </div>
  );
};

export default PostList;
