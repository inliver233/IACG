import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    // 使用模拟数据
    const mockPosts = [
      { id: 1, title: `${getCategoryName(category)}热门话题1`, author: '用户1', createdAt: '2023-06-01', likes: 15, comments: 5, image: `/images/${category}1.jpg` },
      { id: 2, title: `${getCategoryName(category)}最新动态`, author: '用户2', createdAt: '2023-06-02', likes: 20, comments: 8, image: `/images/${category}2.jpg` },
      { id: 3, title: `${getCategoryName(category)}讨论专区`, author: '用户3', createdAt: '2023-06-03', likes: 10, comments: 3, image: `/images/${category}3.jpg` },
      { id: 4, title: `${getCategoryName(category)}推荐`, author: '用户4', createdAt: '2023-06-04', likes: 25, comments: 12, image: `/images/${category}4.jpg` },
      { id: 5, title: `${getCategoryName(category)}新闻`, author: '用户5', createdAt: '2023-06-05', likes: 18, comments: 7, image: `/images/${category}5.jpg` },
    ];
    setPosts(mockPosts);
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
              <img src={post.image} alt={post.title} />
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

export default CategoryPage;
