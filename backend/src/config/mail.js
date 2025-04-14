const nodemailer = require('nodemailer');

// 创建邮件传输对象
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '2843422418@qq.com',
    pass: 'nwfklkmqearvddaf' // QQ邮箱授权码
  }
});

// 验证邮件传输对象配置
transporter.verify(function(error, success) {
  if (error) {
    console.log('邮件服务器配置错误:', error);
  } else {
    console.log('邮件服务器连接成功!');
  }
});

const sendSubscriptionEmail = async (email) => {
  try {
    console.log('开始发送邮件到:', email);
    
    const mailOptions = {
      from: '"花丝镶嵌工艺" <2843422418@qq.com>',
      to: email,
      subject: '感谢订阅花丝镶嵌工艺动态',
      text: '感谢您的订阅',
      html: `
        <div style="font-family: 'Microsoft YaHei', sans-serif; padding: 20px;">
          <h2 style="color: #704214;">感谢您的订阅！</h2>
          <p>您已成功订阅花丝镶嵌工艺动态，我们将为您推送最新资讯。</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('邮件发送成功:', info.messageId);
    return true;
  } catch (error) {
    console.error('发送邮件失败:', error);
    throw error;
  }
};

module.exports = {
  sendSubscriptionEmail
}; 