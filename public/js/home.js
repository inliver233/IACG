document.addEventListener('DOMContentLoaded', () => {
    const username = document.getElementById('username');
    const logoutButton = document.getElementById('logout');

    // 检查用户是否已登录
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login.html';
        return;
    }

    // 获取用户信息
    fetch('/api/users/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        username.textContent = data.username;
    })
    .catch(error => {
        console.error('获取用户信息失败:', error);
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    });

    // 处理登出
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    });

    // 这里可以添加获取和显示各个版块内容的代码
    // 例如:获取最新的动漫、漫画、游戏信息和论坛帖子
});
