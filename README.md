# ACG社区网站项目

这是一个基于React和Express构建的ACG(动漫、漫画、游戏)社区网站项目。

## 项目结构

项目主要包含以下部分:

- `server/`: 后端服务器代码
  - `server.js`: Express服务器入口文件
  - `routes/`: 路由文件夹
    - `users.js`: 用户相关路由
    - `posts.js`: 帖子相关路由
- `src/`: React前端源代码
  - `components/`: React组件
  - `styles/`: CSS样式文件
- `public/`: 静态资源文件
- `dist/`: 构建输出目录

## 主要功能

- 用户注册和登录
- JWT认证
- 主页展示最新帖子
- 发布、查看和评论帖子
- 用户个人资料页面
- 响应式设计,适配多种设备

## 技术栈

- 前端: React, React Router, CSS
- 后端: Express.js, JWT
- 数据库: SQLite (可以根据需求更换)
- 开发工具: Webpack, Babel

## 开发环境要求

- Node.js 12+
- npm 6+

## 安装和运行

1. 克隆项目
   ```
   git clone [项目地址]
   ```

2. 安装依赖
   ```
   cd [项目文件夹]
   npm install
   ```

3. 运行项目
   - 后端服务器:
     ```
     npm run dev
     ```
   - 前端开发服务器:
     ```
     npm run client
     ```

默认情况下,后端服务器将在 http://localhost:5000 运行,前端开发服务器在 http://localhost:8080 运行。



## 待实现功能

- 用户头像上传
- 帖子分类和标签
- 用户关注系统
- 私信功能
- 通知系统

## 贡献

欢迎提交问题和拉取请求。对于重大更改,请先开issue讨论您想要更改的内容。

