const nodemailer = require('nodemailer');
const validator = require('validator');

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    console.log('收到订阅请求:', email);

    // 验证邮箱格式
    if (!validator.isEmail(email)) {
      console.log('邮箱格式无效:', email);
      return res.status(400).json({
        success: false,
        message: '请输入有效的邮箱地址'
      });
    }

    // 验证邮箱域名
    const domain = email.split('@')[1];
    const validDomains = ['qq.com', 'gmail.com', '163.com', '126.com', 'outlook.com'];
    if (!validDomains.includes(domain)) {
      console.log('邮箱域名无效:', domain);
      return res.status(400).json({
        success: false,
        message: '请使用常用邮箱服务商的邮箱地址'
      });
    }

    // HTML邮件模板
    const htmlTemplate = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h2 style="color: #333; text-align: center;">订阅确认</h2>
        <p style="color: #666; line-height: 1.6;">亲爱的订阅者：</p>
        <p style="color: #666; line-height: 1.6;">感谢您订阅我们的新闻通讯！我们会定期为您发送最新的艺术资讯和展览信息。</p>
        <div style="background: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <p style="margin: 0; color: #888;">您的订阅邮箱：${email}</p>
        </div>
        <p style="color: #666; line-height: 1.6;">如果您有任何问题，随时可以回复此邮件与我们联系。</p>
        <p style="color: #666; line-height: 1.6;">祝您有愉快的一天！</p>
      </div>
    `;

    // 发送确认邮件
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: '订阅确认 - 金属艺术展览',
      html: htmlTemplate
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('邮件发送成功到:', email);
      
      res.json({
        success: true,
        message: '感谢您的订阅！确认邮件已发送到您的邮箱。'
      });
    } catch (emailError) {
      console.error('邮件发送失败:', emailError);
      res.status(500).json({
        success: false,
        message: '发送确认邮件失败，请稍后重试'
      });
    }
  } catch (error) {
    console.error('订阅处理失败:', error);
    res.status(500).json({
      success: false,
      message: '订阅失败，请稍后重试'
    });
  }
};

module.exports = {
  subscribe
};