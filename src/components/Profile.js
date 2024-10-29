import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return;
      }

      try {
        const response = await fetch('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('获取个人资料失败');
      }
    };

    fetchProfile();
  }, [history]);

  if (!profile) {
    return <div>加载中...</div>;
  }

  return (
    <div className="profile-page">
      <h2>个人资料</h2>
      <div className="profile-info">
        <p><strong>用户名:</strong> {profile.username}</p>
        <p><strong>邮箱:</strong> {profile.email}</p>
        <p><strong>注册日期:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
      </div>
      {/* 这里可以添加编辑个人资料的功能 */}
    </div>
  );
};

export default Profile;
