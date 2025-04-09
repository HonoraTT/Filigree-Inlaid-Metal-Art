import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api'; // 使用封装后的 axios 实例
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const [loginType, setLoginType] = useState('username');
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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

      if (rememberMe) {
        payload.rememberMe = true;
      }

      const response = await api.post(endpoint, payload); //  替换为封装后的 api 调用
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || (isRegister ? '注册失败，请检查信息' : '登录失败，请重试'));
    }
  };

  const handleThirdPartyLogin = (provider) => {
    window.location.href = `http://localhost:5000/api/auth/${provider}`;
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isRegister ? '注册' : '登录'}</h2>

        <div className="third-party-login">
          <button className="third-party-btn" onClick={() => handleThirdPartyLogin('google')}>
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            <span>Google {isRegister ? '注册' : '登录'}</span>
          </button>
          <button className="third-party-btn" onClick={() => handleThirdPartyLogin('github')}>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <span>GitHub {isRegister ? '注册' : '登录'}</span>
          </button>
          <div className="divider">
            <span>其他{isRegister ? '注册' : '登录'}方式</span>
          </div>
        </div>

        {error && <div className="alert">{error}</div>}

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
              <input
                type="text"
                name="username"
                placeholder="用户名"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {loginType === 'phone' && (
            <div className="form-group">
              <div className="phone-input">
                <select className="country-code">
                  <option>+86</option>
                  <option>+1</option>
                  <option>+81</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="手机号"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {loginType === 'email' && (
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="邮箱"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="remember-me">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">记住我</label>
          </div>

          <div className="form-actions">
            {!isRegister && (
              <span className="forgot-password" onClick={() => navigate('/forgot-password')}>
                忘记密码?
              </span>
            )}
            <button type="submit" className="btn">
              {isRegister ? '注册' : '登录'}
            </button>
          </div>
        </form>

        <div className="toggle-auth">
          {isRegister ? '已有账号?' : '没有账号?'}
          <span onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? '去登录' : '去注册'}
          </span>
        </div>
      </div>
    </div>
  );
}
