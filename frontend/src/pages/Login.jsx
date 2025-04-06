import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const [loginType, setLoginType] = useState('username'); // username, phone, email
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
      let payload;
      
      if (loginType === 'username') {
        payload = { username: formData.username, password: formData.password };
      } else if (loginType === 'phone') {
        payload = { phone: formData.phone, password: formData.password };
      } else {
        payload = { email: formData.email, password: formData.password };
      }

      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      localStorage.setItem('token', response.data.token);
      navigate('/artisan-detail');
    } catch (err) {
      setError(err.response?.data?.error || (isRegister ? 'Registration failed' : 'Login failed'));
    }
  };

  const handleThirdPartyLogin = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/${provider}`;
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>花丝镶嵌工艺{isRegister ? '注册' : '登录'}</h2>
        
        <div className="third-party-login">
          <button className="third-party-btn google" onClick={() => handleThirdPartyLogin('google')}>
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            <span>Google登录</span>
          </button>
          <button className="third-party-btn github" onClick={() => handleThirdPartyLogin('github')}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <span>GitHub登录</span>
          </button>
          <div className="divider">
            <span>其他登录/注册方式</span>
          </div>
        </div>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="login-types">
            <button 
              type="button" 
              className={loginType === 'username' ? 'active' : ''}
              onClick={() => setLoginType('username')}
            >
              用户名
            </button>
            <button 
              type="button" 
              className={loginType === 'phone' ? 'active' : ''}
              onClick={() => setLoginType('phone')}
            >
              手机
            </button>
            <button 
              type="button" 
              className={loginType === 'email' ? 'active' : ''}
              onClick={() => setLoginType('email')}
            >
              邮箱
            </button>
          </div>
          
          {loginType === 'username' && (
            <div className="form-group">
              <label>用户名</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          {loginType === 'phone' && (
            <div className="form-group">
              <label>手机号</label>
              <div className="phone-input">
                <select className="country-code">
                  <option>+86</option>
                  <option>+1</option>
                  <option>+81</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
          
          {loginType === 'email' && (
            <div className="form-group">
              <label>邮箱</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-actions">
            {!isRegister && (
              <span className="forgot-password" onClick={() => navigate('/forgot-password')}>
                忘记密码
              </span>
            )}
            <button type="submit" className="btn btn-primary">
              {isRegister ? '注册' : '登录'}
            </button>
          </div>
        </form>
        
        <div className="toggle-auth">
          {isRegister ? '已有账号？' : '没有账号？'}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? '去登录' : '去注册'}
          </span>
        </div>
        
        <div className="browser-trial">
          <span>在浏览器中试用</span>
        </div>
      </div>
    </div>
  );
}