import React from 'react';
import styled from 'styled-components';

// 联系方式部分样式
const ContactContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 15px; /* 圆角边框 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  margin: 30px auto;
  max-width: 1000px;
  border: 1px solid #ddd; /* 边框 */
  background: linear-gradient(to bottom, #ffffff, #f0f0f0); /* 渐变背景 */
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  border-bottom: 2px solid #007bff; /* 添加下划线 */
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ContactItem = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 为每个项添加阴影 */
  background-color: #fff;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* 悬停时向上浮动 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

// 联系表单部分样式
const FormContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 150px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Google/百度地图容器样式
const MapContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PageName = () => {
  return (
    <div>
      {/* 页面标题 */}
      <h1 style={{ textAlign: 'center', marginTop: '50px', fontSize: '2.5rem' }}>联系我们</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>欢迎来到联系我们页面。</p>

      {/* 联系方式部分 */}
      <ContactContainer>
        <ContactHeader>联系方式</ContactHeader>

        <ContactDetails>
          <ContactItem>
            <h4>电话</h4>
            <p><ContactLink href="tel:+123456789">+123 456 789</ContactLink></p>
          </ContactItem>
          <ContactItem>
            <h4>地址</h4>
            <p>123 工作室街, 北京市</p>
          </ContactItem>
          <ContactItem>
            <h4>邮箱</h4>
            <p><ContactLink href="mailto:example@example.com">example@example.com</ContactLink></p>
          </ContactItem>
          <ContactItem>
            <h4>微信公众号</h4>
            <p>扫描二维码关注</p>
            <img src="wechat-qr-code.png" alt="微信二维码" width="150" />
          </ContactItem>
        </ContactDetails>

        {/* 联系表单部分 */}
        <FormContainer>
          <FormTitle>联系表单</FormTitle>
          <Form>
            <Input type="text" placeholder="您的姓名" required />
            <Input type="email" placeholder="您的邮箱" required />
            <Textarea placeholder="留言内容" required />
            <SubmitButton type="submit">提交</SubmitButton>
          </Form>
        </FormContainer>

        {/* 嵌入地图部分 */}
        <MapContainer>
          <h3>我们的位置</h3>
          {/* Google地图嵌入代码 */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </ContactContainer>
    </div>
  );
};

export default PageName;
