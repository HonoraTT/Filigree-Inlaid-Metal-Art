import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './store.css';

const products = [
  { id: 1, name: '花丝头饰', price: 25.0, category: '首饰', image:  '/images/文创商店/花丝头饰.png' },
  { id: 2, name: '花丝扣包', price: 38.0, category: '手工艺品', image:'/images/文创商店/花丝扣包.png' },
  { id: 3, name: '手工花丝花', price: 30.0, category: '手工艺品', image: '/images/文创商店/手工花丝花.png' },
  { id: 4, name: '花丝宝石戒指', price: 28.0, category: '首饰', image: '/images/文创商店/花丝宝石戒指.png'},
  { id: 5, name: '花丝发钗', price: 50.0, category: '首饰', image: '/images/文创商店/花丝发钗.png'},
  { id: 6, name: '花丝地毯', price: 35.0, category: '家居装饰', image: '/images/文创商店/花丝地毯.png' },
  { id: 7, name: '龙图腾摆件', price: 45.0, category: '手工艺品', image:'/images/文创商店/龙图腾摆件.png' },
  { id: 8, name: '花丝蝴蝶', price: 40.0, category: '手工艺品', image: '/images/文创商店/花丝蝴蝶.png' },
  { id: 9, name: '花丝车载挂件', price: 60.0, category: '家居装饰', image: '/images/文创商店/花丝车载挂件.png' },
];

const StoreShop = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState('所有');
  const [priceRange, setPriceRange] = useState([18, 130]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // 从 localStorage 获取购物车数据
  const [cart, setCart] = useState(() => {
    if (user) {
      const cartKey = `cart_${user.id}`;
      const savedCart = localStorage.getItem(cartKey);
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // 当购物车数据改变时，保存到 localStorage
  useEffect(() => {
    if (user) {
      const cartKey = `cart_${user.id}`;
      localStorage.setItem(cartKey, JSON.stringify(cart));
    }
  }, [cart, user]);

  // 处理加入购物车
  const handleAddToCart = (product) => {
    if (!user) {
      // 如果用户未登录，跳转到登录页面
      navigate('/login?from=shop');
      return;
    }

    // 检查商品是否已在购物车中
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // 如果商品已存在，增加数量
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // 如果商品不存在，添加新商品
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} 已加入购物车！`);
  };

  // 跳转到购物车页面
  const goToCart = () => {
    navigate('/cart');
  };

  // 计算购物车中的总商品数量
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // 根据分类、价格和搜索条件筛选商品
  const filteredProducts = products.filter((product) => {
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const inCategory = selectedCategory === '所有' || product.category === selectedCategory;
    const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return inPriceRange && inCategory && matchesSearchQuery;
  });

  return (
    <div className="store-shop">
      <div className="top-bar">
        <div className="search-cart">
          <input
            type="text"
            className="search-input"
            placeholder="搜索商品"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="cart-button" onClick={goToCart}>
            <i className="fas fa-shopping-cart"></i>
            购物车 ({cartItemCount})
          </button>
        </div>
      </div>

      <div className="store-shop-content">
        {/* 侧边栏 */}
        <aside className="sidebar">
          <h3>分类</h3>
          <ul>
            <li onClick={() => setSelectedCategory('所有')}>所有</li>
            <li onClick={() => setSelectedCategory('首饰')}>首饰</li>
            <li onClick={() => setSelectedCategory('家居装饰')}>家居装饰</li>
            <li onClick={() => setSelectedCategory('手工艺品')}>手工艺品</li>
          </ul>
          <h3>筛选</h3>
          <p>价格：¥{priceRange[0]} - ¥{priceRange[1]}</p>
          <input
            type="range"
            min="18"
            max="130"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
          />
          <input
            type="range"
            min="18"
            max="130"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          />
        </aside>

        {/* 商品展示区域 */}
        <main className="products-container">
          {/* 显示分类标题 */}
          <h2 className="category-title">{selectedCategory === '所有' ? '所有商品' : selectedCategory}</h2>

          <div className="products">
            {filteredProducts.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>¥{item.price}</p>
                <button 
                  onClick={() => handleAddToCart(item)}
                  className={!user ? 'login-required' : ''}
                >
                  {user ? '加入购物车' : '请登录后添加购物车'}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreShop;
