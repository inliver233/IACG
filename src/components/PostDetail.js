import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // 这里应该从API获取帖子详情
    // 暂时使用模拟数据
    const mockPost = {
      id: id,
      title: `帖子${id}`,
      content: '这是帖子的详细内容...',
      author: '用户1',
      createdAt: '2023-05-01',
      comments: [
        { id: 1, author: '评论者1', content: '评论内容1', createdAt: '2023-05-02' },
        { id: 2, author: '评论者2', content: '评论内容2', createdAt: '2023-05-03' },
      ],
      likes: 10
    };
    setPost(mockPost);
  }, [id]);

  if (!post) return <div>加载中...</div>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>作者: {post.author} | 发布时间: {post.createdAt}</p>
      <div className="post-content">{post.content}</div>
      <p>点赞: {post.likes}</p>
      <h3>评论</h3>
      {post.comments.map(comment => (
        <div key={comment.id} className="comment">
          <p>{comment.content}</p>
          <p>评论者: {comment.author} | 时间: {comment.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
