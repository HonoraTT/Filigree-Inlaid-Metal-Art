require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // 你可以修改为任何端口

// 使用 CORS 中间件
app.use(cors());

// 使用 body-parser 解析 JSON 格式的请求体
app.use(bodyParser.json());

// 设置一个简单的 GET 路由
app.get("/", (req, res) => {
    res.send("Hello, Express server is running!");
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const connectDB = require("./config/db");
connectDB();
