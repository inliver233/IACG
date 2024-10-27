import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/acgbbs.css';
 // 确保正确引入 CSS 文件

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const videoRef = useRef(null);

  useEffect(() => {
    // 模拟数据
    
    
    const mockUser = { name: "用户名", avatar: "/images/default-avatar.png" };
    setUser(mockUser);

    const mockFeaturedPosts = [
      { id: 1, title: "精选帖子1", image: "/images/featured1.jpg" },
      { id: 2, title: "精选帖子2", image: "/images/featured2.jpg" },
      { id: 3, title: "精选帖子3", image: "/images/featured3.jpg" },
    ];
    setFeaturedPosts(mockFeaturedPosts);

    const mockLatestPosts = [
      { id: 1, title: "最新帖子1", author: "作者1", category: "动漫", comments: 10, likes: 20 },
      { id: 2, title: "最新帖子2", author: "作者2", category: "漫画", comments: 15, likes: 25 },
      { id: 3, title: "最新帖子3", author: "作者3", category: "游戏", comments: 8, likes: 18 },
    ];
    setLatestPosts(mockLatestPosts);

    // 尝试播放视频，捕获错误
    if (videoRef.current) {
      videoRef.current.muted = true; // 确保视频被静音
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // 模拟搜索结果
    const mockResults = [
      { id: 1, title: '搜索结果1', type: 'post' },
      { id: 2, title: '搜索结果2', type: 'user' },
    ];
    setSearchResults(mockResults);
  };

  const handleLogout = () => {
    setUser(null);
    history.push('/');
  };

  return (
    <div className="site">
      <header className="top-bar">
        <div className="wrapper">
          <div className="left-section">
            <div className="logo">
              <Link to="/"><img src="/images/logo.png" alt="ACGBBS.CN" /></Link>
            </div>
            <nav className="top-menu">
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/anime">动漫</Link></li>
                <li><Link to="/comic">漫画</Link></li>
                <li><Link to="/game">游戏</Link></li>
                <li><Link to="/novel">轻小说</Link></li>
                <li><Link to="/cosplay">漫展</Link></li>
                <li><Link to="/figure">手办</Link></li>
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/more">更多</Link></li>
              </ul>
            </nav>
          </div>
          <div className="right-section">
            <div className="top-search">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="输入关键词搜索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">搜索</button>
              </form>
            </div>
            {user ? (
              <div className="user-info">
                <Link to="/profile">
                  <img src={user.avatar} alt="用户头像" className="user-avatar" />
                </Link>
                <Link to="/create-post" className="create-post-btn">发帖</Link>
                <button onClick={handleLogout} className="logout-btn">登出</button>
              </div>
            ) : (
              <div className="login-register">
                <Link to="/login" className="login-btn">登录</Link>
                <span>/</span>
                <Link to="/register" className="register-btn">注册</Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="hero-banner">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/images/background.mp4" type="video/mp4" />

          您的浏览器不支持视频标签。
        </video>
        <div className="wrapper">
          <h1>ACGBBS综合同人社区</h1>
          <p>提供ACGBBS一站式全方位的同人社区</p>
        </div>
      </div>
      <nav className="category-nav">
        <div className="wrapper">
          <Link to="/anime" className="category-item">
            <img src="/images/anime-icon.png" alt="动漫" />
            <span>动漫</span>
          </Link>
          <Link to="/comic" className="category-item">
            <img src="/images/comic-icon.png" alt="漫画" />
            <span>漫画</span>
          </Link>
          <Link to="/game" className="category-item">
            <img src="/images/game-icon.png" alt="游戏" />
            <span>游戏</span>
          </Link>
          <Link to="/novel" className="category-item">
            <img src="/images/novel-icon.png" alt="轻小说" />
            <span>轻小说</span>
          </Link>
          <Link to="/cosplay" className="category-item">
            <img src="/images/cosplay-icon.png" alt="漫展" />
            <span>漫展</span>
          </Link>
          <Link to="/figure" className="category-item">
            <img src="/images/figure-icon.png" alt="手办" />
            <span>手办</span>
          </Link>
          <Link to="/app" className="category-item">
            <img src="/images/app.png" alt="APP下载" />
            <span>APP下载</span>
          </Link>
          <Link to="/more" className="category-item">
            <img src="/images/more-icon.png" alt="更多" />
            <span>更多</span>
          </Link>
        </div>
      </nav>
      <main className="content-area">
        <div className="wrapper">
          {/* 精选内容轮播 */}
          <section className="featured-carousel">
            <h2>精选内容</h2>
            <div className="carousel-container">
              {featuredPosts.map(post => (
                <div key={post.id} className="carousel-item">
                  <img src={post.image} alt={post.title} />
                  <h3>{post.title}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* 最新帖子列表 */}
          <section className="latest-posts">
            <h2>最新帖子</h2>
            <div className="post-list">
              {latestPosts.map(post => (
                <div key={post.id} className="post-item">
                  <h3>{post.title}</h3>
                  <p>作者: {post.author} | 分类: {post.category}</p>
                  <p>评论: {post.comments} | 点赞: {post.likes}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrapper">
          <div className="footer-content">
            <div className="footer-section">
              <h3>关于我们</h3>
              <p>ACGBBS综合同人社区是一个专注于动漫、漫画、游戏和小说的在线社区。</p>
            </div>
            <div className="footer-section">
              <h3>快速链接</h3>
              <ul>
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/terms">使用条款</Link></li>
                <li><Link to="/privacy">隐私政策</Link></li>
                <li><Link to="/contact">联系我们</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>关注我们</h3>
              <div className="social-icons">
                {/* 添加社交媒体图标和链接 */}
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2023 ACGBBS综合同人社区. 保留所有权利。</p>
          </div>
        </div>
      </footer>
      <div className="search-results">
        {searchResults.map(result => (
          <div key={result.id} className="search-result-item">
            <Link to={result.type === 'post' ? `/post/${result.id}` : `/user/${result.id}`}>
              {result.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
