import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/acgbbs.css';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [posts, setPosts] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const videoRef = useRef(null);

  const categories = [
    { name: '动漫', slug: 'anime' },
    { name: '漫画', slug: 'comic' },
    { name: '游戏', slug: 'game' },
    { name: '轻小说', slug: 'novel' },
    { name: '漫展', slug: 'cosplay' },
    { name: '手办', slug: 'figure' },
  ];

  useEffect(() => {
    const mockUser = { name: '用户名', avatar: '/images/default-avatar.png' };
    setUser(mockUser);

    const mockFeaturedPosts = [
      { id: 1, title: '精选帖子1', image: '/images/featured1.jpg' },
      { id: 2, title: '精选帖子2', image: '/images/featured2.jpg' },
      { id: 3, title: '精选帖子3', image: '/images/featured3.jpg' },
    ];
    setFeaturedPosts(mockFeaturedPosts);

    const mockPosts = {};
    categories.forEach(category => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
      mockPosts[category.slug] = [
        {
          id: 1,
          title: `${category.name}帖子1`,
          author: '作者1',
          category: category.name,
<<<<<<< HEAD
=======
      mockPosts[category.slug] = [];
    });

    // 从 localStorage 获取新帖子
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    // 将新帖子添加到对应的分类中
    storedPosts.forEach(post => {
      if (mockPosts[post.category]) {
        mockPosts[post.category].push(post);
      }
    });

    // 为每个分类添加默认帖子，如果不足3个
    categories.forEach(category => {
      const defaultPosts = [
        {
          id: `default-${category.slug}-1`,
          title: `${category.name}帖子1`,
          author: '作者1',
          category: category.slug,
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          comments: 10,
          likes: 20,
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          id: 2,
          title: `${category.name}帖子2`,
          author: '作者2',
          category: category.name,
<<<<<<< HEAD
=======
          id: `default-${category.slug}-2`,
          title: `${category.name}帖子2`,
          author: '作者2',
          category: category.slug,
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          comments: 15,
          likes: 25,
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          id: 3,
          title: `${category.name}帖子3`,
          author: '作者3',
          category: category.name,
<<<<<<< HEAD
=======
          id: `default-${category.slug}-3`,
          title: `${category.name}帖子3`,
          author: '作者3',
          category: category.slug,
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          comments: 8,
          likes: 18,
        },
      ];
<<<<<<< HEAD
<<<<<<< HEAD
    });
=======

      while (mockPosts[category.slug].length < 3) {
        mockPosts[category.slug].push(defaultPosts[mockPosts[category.slug].length]);
      }

      // 只保留最新的3个帖子
      mockPosts[category.slug] = mockPosts[category.slug].slice(0, 3);
    });

>>>>>>> 47bbfa4 (调整界面和ui)
=======
    });
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
    setPosts(mockPosts);

    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error('Video playback failed:', error);
      });
    }
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const mockResults = [
      { id: 1, title: '搜索结果1', type: 'post' },
      { id: 2, title: '搜索结果2', type: 'user' },
    ];
    setSearchResults(mockResults);
  };

  const handleLogout = () => {
<<<<<<< HEAD
<<<<<<< HEAD
    setUser(null);
    history.push('/');
=======
    localStorage.removeItem('token'); // 删除本地存储的 token
    setUser(null); // 清除用户信息
    history.push('/auth'); // 重定向到登录页面，你也可以根据需要修改为其他页面
>>>>>>> 47bbfa4 (调整界面和ui)
=======
    setUser(null);
    history.push('/');
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
                <li>
                  <Link to="/">首页</Link>
                </li>
                {categories.map(category => (
                  <li key={category.slug}>
                    <Link to={`/${category.slug}`}>{category.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/about">关于我们</Link>
                </li>
                <li>
                  <Link to="/more">更多</Link>
<<<<<<< HEAD
=======
                <li><Link to="/">首页</Link></li>
                <li><Link to="/figure">分类</Link></li> 
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/more">更多</Link>
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
                </li>
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
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <button type="submit">搜索</button>
              </form>
            </div>
            {user ? (
              <div className="user-info">
                <Link to="/profile">
                  <img src={user.avatar} alt="用户头像" className="user-avatar" />
                </Link>
                <Link to="/create-post" className="create-post-btn">
                  发帖
                </Link>
                <button onClick={handleLogout} className="logout-btn">
                  登出
                </button>
              </div>
            ) : (
              <div className="login-register">
                <Link to="/login" className="login-btn">
                  登录
                </Link>
                <span>/</span>
                <Link to="/register" className="register-btn">
                  注册
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="hero-banner">
        <video ref={videoRef} autoPlay loop muted playsInline className="hero-video">
          <source src="/images/background.mp4" type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
        <div className="wrapper">
          <h1>ACGBBS综合同人社区</h1>
          <p>提供ACGBBS一站式全方位的同人社区</p>
        </div>
        <nav className="category-nav">
          <div className="wrapper">
            {categories.map(category => (
              <Link key={category.slug} to={`/${category.slug}`} className="category-item">
                <img src={`/images/${category.slug}-icon.png`} alt={category.name} />
                <span>{category.name}</span>
              </Link>
            ))}
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
      </div>
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

          {/* 各个分类的帖子列表 */}
          {categories.map(category => (
            <div key={category.slug} className={`post-category-container ${category.slug}`}>
              <h2 className="post-category-title">
                {category.name}
              </h2>
              <div className="post-list">
                {posts[category.slug]?.map(post => (
                  <Link key={post.id} to={`/post/${post.id}`} className="post-item">
                    <img src={`/images/${category.slug}-icon.png`} alt={post.title} />
                    <h3>{post.title}</h3>
                    <div className="post-info">
                      <span>作者: {post.author}</span>
                      <span>评论: {post.comments}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
                <li>
                  <Link to="/about">关于我们</Link>
                </li>
                <li>
                  <Link to="/terms">使用条款</Link>
                </li>
                <li>
                  <Link to="/privacy">隐私政策</Link>
                </li>
                <li>
                  <Link to="/contact">联系我们</Link>
                </li>
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
