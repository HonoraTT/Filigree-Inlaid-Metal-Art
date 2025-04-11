import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './store.css';

// 假设这是静态数据
const productsData = [
  { id: 1, name: '花丝头饰', price: 25.0, image: '/images/文创商店/花丝头饰.png', description: '这款花丝头饰以精细的金属花丝工艺为基础，呈现出细腻的线条和繁复的花卉图案。每一根花丝都经过精心打磨与编织，展现出优雅的艺术感，适合婚礼、宴会等正式场合佩戴，突显佩戴者的高贵与精致。' },
  { id: 2, name: '花丝扣包', price: 38.0, image:'/images/文创商店/花丝扣包.png', description: '花丝扣包将传统工艺与现代设计完美结合，金属花丝编织而成的包扣设计，令整体包包既具独特艺术感，又富有传统韵味。其精致细腻的工艺，适合搭配各类衣物，成为点亮整体造型的亮点。' },
  { id: 3, name: '手工花丝花', price: 25.0, image:'/images/文创商店/手工花丝花.png', description: '这款手工花丝花采用花丝编织工艺，每一朵花瓣都用金丝或银丝精心雕刻而成，栩栩如生，色彩丰富。无论是作为室内装饰，还是佩戴在服饰上，都能展现出独特的艺术魅力。' },
  { id: 4, name: '花丝宝石戒指', price: 25.0, image:'/images/文创商店/花丝宝石戒指.png', description: '这款花丝宝石戒指以精美的花丝编织工艺为基础，搭配一颗璀璨的宝石。金属丝线经过精细工艺编织成优雅的花形，宝石镶嵌其中，呈现出光辉夺目的效果，完美体现了奢华与精致。' },
  { id: 5, name: '花丝发钗', price: 25.0, image:'/images/文创商店/花丝发钗.png', description: '这款花丝发钗以精美的金属丝工艺编织而成，设计灵感来源于古典花卉图案。每一根花丝都经过巧妙的编织与打磨，搭配精致的装饰，佩戴后能够为发型增添高贵典雅的气质，展现出细腻的工艺美感。' },
  { id: 6, name: '花丝地毯', price: 25.0, image: '/images/文创商店/花丝地毯.png', description: '花丝地毯采用传统花丝编织工艺，凭借细致的线条和图案的巧妙搭配，呈现出独特的艺术感。无论是铺设在地面，还是挂在墙上作为装饰，花丝地毯都能为空间增添一份高贵典雅的氛围。' },
  { id: 7, name: '龙图腾摆件', price: 25.0, image: '/images/文创商店/龙图腾摆件.png', description: '这款龙图腾摆件融合了花丝工艺和传统文化中的龙元素，通过精细的金属丝编织呈现出神秘而威严的龙形图腾。每一根花丝都表现出龙鳞的层次感和灵动，使得这件摆件在家居装饰中增添了浓厚的文化气息。' },
  { id: 8, name: '花丝蝴蝶', price: 25.0, image:'/images/文创商店/花丝蝴蝶.png', description: '花丝蝴蝶通过花丝工艺精心制作，蝴蝶的翅膀通过细腻的金属丝线勾勒出动态感，栩栩如生。细致的编织与丰富的色彩使得这款饰品成为一种精美的艺术表现，既适合作为佩饰，也可作为艺术收藏品。' },
  { id: 9, name: '花丝车载挂件', price: 25.0, image: '/images/文创商店/花丝车载挂件.png', description: '这款花丝车载摆件采用花丝工艺打造，设计上融合了现代元素与传统手工艺术，精致的金属花丝线条使得摆件独具魅力。无论是车内摆放还是作为礼品赠送，它都能为车主带来一份独特的优雅气质。' },

  // 添加更多商品
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
    
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      // 如果用户未登录，跳转到登录页面
      navigate('/login?from=product');
      return;
    }

    // 获取当前用户的购物车
    const cartKey = `cart_${user.id}`;
    const savedCart = localStorage.getItem(cartKey);
    const currentCart = savedCart ? JSON.parse(savedCart) : [];

    // 检查商品是否已在购物车中
    const existingItem = currentCart.find(item => item.id === product.id);
    
    let updatedCart;
    if (existingItem) {
      // 如果商品已存在，增加数量
      updatedCart = currentCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // 如果商品不存在，添加新商品
      updatedCart = [...currentCart, { ...product, quantity: 1 }];
    }

    // 保存更新后的购物车
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    alert(`${product.name} 已加入购物车！`);
  };

  if (!product) {
    return <div>加载中...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">¥{product.price}</p>
          <p className="description">{product.description}</p>
          <button 
            className={`add-to-cart ${!user ? 'login-required' : ''}`}
            onClick={handleAddToCart}
          >
            {user ? '加入购物车' : '请登录后添加购物车'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
