import React, { useState } from 'react';
import './store.css';

const products = [
  { id: 1, name: '花丝杯', price: 25.0, category: '家居装饰', image: '/images/文创商店/cup1.png' },
  { id: 2, name: '镶嵌杯', price: 38.0, category: '首饰', image: '/images/文创商店/cup2.png' },
  { id: 3, name: '艺术杯', price: 30.0, category: '家居装饰', image: '/images/文创商店/cup3.png' },
  { id: 4, name: '陶瓷碗', price: 28.0, category: '家居装饰', image: '/images/文创商店/cup4.png' },
  { id: 5, name: '艺术壶', price: 50.0, category: '家居装饰', image: '/images/文创商店/cup5.png' },
  { id: 6, name: '花丝盘', price: 35.0, category: '手工艺品', image: '/images/文创商店/cup6.png' },
  { id: 7, name: '陶瓷壶', price: 45.0, category: '家居装饰', image: '/images/文创商店/cup7.png' },
  { id: 8, name: '手工碗', price: 40.0, category: '家居装饰', image: '/images/文创商店/cup8.png' },
  { id: 9, name: '工艺瓶', price: 60.0, category: '家居装饰', image: '/images/文创商店/cup9.png' },
];

const StoreShop = () => {
  // 设置状态用于管理分类筛选、价格筛选、搜索框和购物车
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('所有');
  const [priceRange, setPriceRange] = useState([18, 130]);
  const [searchQuery, setSearchQuery] = useState("");

  // 处理加入购物车
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} 已加入购物车！`);
  };

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
          <button className="cart-button" onClick={() => alert(`购物车共有 ${cart.length} 件商品`)}>
            购物车 ({cart.length})
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
                <button onClick={() => handleAddToCart(item)}>加入购物车</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoreShop;
