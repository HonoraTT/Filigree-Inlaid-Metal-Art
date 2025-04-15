const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {  // 使用环境变量
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,  // 5秒连接超时
      socketTimeoutMS: 45000,          // 45秒操作超时
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    
    // 生产环境下尝试自动重连
    if (process.env.NODE_ENV === "production") {
      console.log("Retrying connection in 5 seconds...");
      setTimeout(connectDB, 5000);
    } else {
      process.exit(1);  // 开发环境直接退出
    }
  }
};

// 监听连接事件
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

module.exports = connectDB;