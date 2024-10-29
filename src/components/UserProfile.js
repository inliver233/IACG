import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 这里应该从后端API获取用户信息和用户的帖子
    // 暂时使用模拟数据
    const mockUser = {
      id: 1,
      username: '用户名',
      avatar: '/images/default-avatar.png',
      joinDate: '2023-01-01',
      postCount: 10,
      followersCount: 50,
      followingCount: 30
    };
    setUser(mockUser);

    const mockPosts = [
      { id: 1, title: '我的第一个帖子', createdAt: '2023-05-01', likes: 15, comments: 5 },
      { id: 2, title: '关于最新动漫的讨论', createdAt: '2023-05-15', likes: 20, comments: 8 },
    ];
    setPosts(mockPosts);
  }, []);

  if (!user) {
    return <div>加载中...</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar} alt={user.username} className="user-avatar" />
        <h2>{user.username}</h2>
        <p>加入时间: {user.joinDate}</p>
        <div className="user-stats">
          <span>帖子: {user.postCount}</span>
          <span>关注者: {user.followersCount}</span>
          <span>关注中: {user.followingCount}</span>
        </div>
      </div>
      <div className="user-posts">
        <h3>最近的帖子</h3>
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p>发布时间: {post.createdAt}</p>
            <p>点赞: {post.likes} | 评论: {post.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
