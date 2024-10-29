import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css';
// 修改这一行
import backgroundImage from '../../images/background.jpg';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  category: string;
  tags: string[];
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // 从后端 API 获取初始帖子列表
    // 这里使用模拟数据
    const initialPosts: Post[] = [
      {
        id: 1,
        title: '第一篇帖子',
        content: '这是第一篇帖子的内容...',
        author: '用户1',
        createdAt: '2024-10-13T10:00:00Z',
        category: 'anime',
        tags: ['新人', '介绍']
      },
      {
        id: 2,
        title: '讨论动漫',
        content: '最近有什么好看的动漫推荐吗？',
        author: '动漫迷',
        createdAt: '2024-10-13T11:30:00Z',
        category: 'anime',
        tags: ['推荐', '讨论']
      },
    ];
    setPosts(initialPosts);
  }, []);

  const addNewPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image src={backgroundImage} layout="fill" objectFit="cover" alt="Background" />
      </div>
      <PostForm onPostSubmit={addNewPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
