import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('userData');
        
        // 安全解析userData
        if (token && userData) {
          try {
            const parsedData = JSON.parse(userData);
            if (parsedData && typeof parsedData === 'object') {
              setUser(parsedData);
            }
          } catch (e) {
            console.error('解析用户数据失败:', e);
            localStorage.removeItem('userData'); // 自动清理损坏数据
          }
        }
      } catch (error) {
        console.error('认证初始化失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData, token) => {
    try {
      if (!userData || !token) {
        throw new Error('登录参数不完整');
      }
      setUser(userData);
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('登录失败:', error);
      throw error; // 允许调用处捕获
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      if (!user) {
        localStorage.removeItem('cart');
      }
    } catch (error) {
      console.error('登出失败:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};