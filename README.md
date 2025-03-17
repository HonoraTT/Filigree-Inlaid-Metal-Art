# Filigree-Inlaid-Metal-Art
It's a website that introducing and exhibiting China's Filigree Inlaid Metal Art.
（这是一个介绍和展示中国花丝镶嵌艺术的网站）

网站目录结构示例：
```plaintext
📦 filigree-website  # 项目根目录
├── 📂 frontend      # 前端代码（React 应用）
│   ├── 📂 public    # 公共静态资源（图片、字体、图标）
│   │   ├── images/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── favicon.ico
│   │   ├── index.html
│   ├── 📂 src       # 主要的 React 代码
│   │   ├── 📂 assets       # 资源文件（样式、图片）
│   │   ├── 📂 components   # 复用组件（如导航栏、页脚）
│   │   ├── 📂 pages        # 页面级组件（如首页、详情页）
│   │   ├── 📂 hooks        # 自定义 React hooks
│   │   ├── 📂 utils        # 工具函数
│   │   ├── 📂 context      # 全局状态管理（如果使用 Context API）
│   │   ├── App.js          # React 主组件
│   │   ├── main.jsx        # 入口文件（Vite）
│   │   ├── index.css       # 全局 CSS
│   ├── package.json        # 前端依赖
│   ├── vite.config.js      # Vite 配置（或 Webpack 配置）
│   ├── README.md           # 说明文档
│
├── 📂 backend       # 后端代码（Node.js + Express）
│   ├── 📂 routes    # API 路由
│   ├── 📂 controllers # 逻辑处理
│   ├── 📂 models    # 数据库模型（MongoDB 或 MySQL）
│   ├── app.js       # 后端入口
│   ├── package.json # 后端依赖
│
├── 📂 database      # 数据库相关（SQL 脚本或 MongoDB 结构）
│
├── 📂 docs          # 项目文档
│   ├── README.md
│   ├── API.md
│
├── .gitignore       # 忽略 Git 提交的文件（如 node_modules）
├── README.md        # 项目总介绍
```
