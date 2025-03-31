import React from 'react';
import styled from 'styled-components';

// 联系方式部分样式
const ContactContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgb(239, 162, 162);
  margin: 30px auto;
  max-width: 100%;   /* 让容器最大宽度占满整个页面 */
  width: 95%;        /* 实际显示宽度为页面的 95% */
  border: 1px solid #ddd;
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
`;


const ContactHeader = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  border-bottom: 2px rgb(239, 162, 162); /* 添加下划线 */
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
  box-shadow: 0 2px 8px rgb(239, 162, 162); /* 为每个项添加阴影 */
  background-color: #fff;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* 悬停时向上浮动 */
    box-shadow: 0 4px 12px rgb(239, 162, 162);
  }
`;

const ContactLink = styled.a`
  color:rgb(237, 203, 118);
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
  box-shadow: 0 4px 12px rgb(239, 162, 162);
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
    border-color:rgb(237, 203, 118);
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
    border-color:rgb(237, 203, 118);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: rgb(237, 203, 118);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(237, 203, 118);
  }
`;

// Google/百度地图容器样式
const MapContainer = styled.div`
  margin-top: 40px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgb(239, 162, 162);
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
            <p><ContactLink href="tel:+123456789">+86 139 7233 3676</ContactLink></p>
          </ContactItem>
          <ContactItem>
            <h4>地址</h4>
            <p>中国上海市黄浦区成都南路110号</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.967311986267!2d121.46760800000001!3d31.221635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2700d3adbb2c9%3A0x1f4be94660cb7fa!2z6Iqx5Lid6ZW25bWM!5e0!3m2!1szh-CN!2sjp!4v1743422468642!5m2!1szh-CN!2sjp"
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
