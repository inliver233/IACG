import { useState, FormEvent } from 'react';
import styles from './PostForm.module.css';

// 删除这行，我们将直接在 CSS 中使用背景图片
// import backgroundImage from '../../../images/background.jpg';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  category: string;
  tags: string[];
}

interface PostFormProps {
  onPostSubmit: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      author: '当前用户', // 这里应该使用实际的用户名
      createdAt: new Date().toISOString(),
      category,
      tags: tags.split(',').map(tag => tag.trim()),
    };
    onPostSubmit(newPost);
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
  };

  return (
    <div className={styles.postFormContainer}>
      <div className={styles.postFormBackground}></div>
      <form onSubmit={handleSubmit} className={styles.postForm}>
        <h2>发布新帖子</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="标题"
          required
          className={styles.input}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className={styles.select}
        >
          <option value="">选择分类</option>
          <option value="anime">动漫</option>
          <option value="manga">漫画</option>
          <option value="game">游戏</option>
          <option value="novel">小说</option>
        </select>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="标签 (用逗号分隔)"
          className={styles.input}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="内容"
          required
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>发布</button>
      </form>
    </div>
  );
};

export default PostForm;
