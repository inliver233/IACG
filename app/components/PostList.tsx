import React from 'react';
import Link from 'next/link';
import styles from './PostList.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  category: string;
  tags: string[];
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postListContainer}>
      <h2>最新帖子</h2>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`/post/${post.id}`}>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
            <div className={styles.postMeta}>
              <span className={styles.postAuthor}>{post.author}</span>
              <span className={styles.postDate}>{new Date(post.createdAt).toLocaleString()}</span>
            </div>
            <div className={styles.postCategory}>{post.category}</div>
            <p className={styles.postContent}>{post.content.substring(0, 100)}...</p>
            <div className={styles.postTags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
