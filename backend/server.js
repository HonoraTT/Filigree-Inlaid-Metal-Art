require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json()); // 使用 express 内置的 JSON 解析器

// 数据库连接
connectDB(); // 确保在路由前连接数据库

// 路由
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// 测试路由
app.get("/", (req, res) => {
  res.send("Hello, Express server is running!");
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});