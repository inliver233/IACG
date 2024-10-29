import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/CategoryManager.css';

const CategoryManager = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();
  console.log("CategoryManager rendered for category:", category);

  useEffect(() => {
    // 从本地存储获取帖子
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    // 过滤出当前分类的帖子
    const categoryPosts = storedPosts.filter(post => post.category === category);
    
    // 如果没有足够的帖子,添加一些模拟数据
    const mockPosts = [
      { id: `mock-${category}-1`, title: `${getCategoryName(category)}热门话题1`, author: '用户1', createdAt: '2023-06-01', likes: 15, comments: 5, image: `/images/${category}1.jpg` },
      { id: `mock-${category}-2`, title: `${getCategoryName(category)}最新动态`, author: '用户2', createdAt: '2023-06-02', likes: 20, comments: 8, image: `/images/${category}2.jpg` },
      { id: `mock-${category}-3`, title: `${getCategoryName(category)}讨论专区`, author: '用户3', createdAt: '2023-06-03', likes: 10, comments: 3, image: `/images/${category}3.jpg` },
    ];

    const combinedPosts = [...categoryPosts, ...mockPosts].slice(0, 5);
    setPosts(combinedPosts);
  }, [category]);

  return (
    <div className="category-page">
      <h1>{getCategoryName(category)}论坛</h1>
      <div className="category-description">
        <p>欢迎来到{getCategoryName(category)}专区,这里汇集了最新最热的{getCategoryName(category)}相关讨论。</p>
      </div>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <div className="post-image">
              <img src={post.image || `/images/${category}-default.jpg`} alt={post.title} />
            </div>
            <div className="post-content">
              <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
              <div className="post-meta">
                <span className="post-author">作者: {post.author}</span>
                <span className="post-date">发布时间: {post.createdAt}</span>
              </div>
              <div className="post-stats">
                <span className="post-likes">👍 {post.likes}</span>
                <span className="post-comments">💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function getCategoryName(slug) {
  const categories = {
    anime: '动漫',
    comic: '漫画',
    game: '游戏',
    novel: '轻小说',
    cosplay: '漫展',
    figure: '手办'
  };
  return categories[slug] || slug;
}

export default CategoryManager;
