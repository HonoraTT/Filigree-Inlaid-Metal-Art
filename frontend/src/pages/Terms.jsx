import React, { useState } from 'react';
import './Terms.css';

const termsData = [
  { term: '镶石', definition: '把宝石、玉石等镶嵌到金银器物上。常见的镶石方法有爪镶、包镶、槽镶等。' },
  { term: '嵌宝', definition: '与镶石类似，但更强调宝石的珍贵性和装饰效果。常用于制作高档的首饰或工艺品。' },
  { term: '错金银', definition: '在金属器物表面錾刻出图案或文字，然后将金银丝或金银片嵌入其中，再打磨平整，使器物呈现出华丽的装饰效果。' },
  { term: '镀层', definition: '对金属表面进行涂覆，以提高其外观或防止氧化。' },
  { term: '攒焊', definition: '把制作好的各种花丝部件，通过焊接的方式组合在一起，形成完整的器物造型。' },
  { term: '尊', definition: '一种庄重的器物造型，多为敞口、高颈、圈足，常用于祭祀或陈列。' },
];

const Terms = () => {
  const [hoveredTerm, setHoveredTerm] = useState(null);

  return (
    <div className="terms-container">
      <h1>术语解释</h1>
      <div className="terms-list">
        {termsData.map((item, index) => (
          <div
            key={index}
            className={`term-item ${hoveredTerm === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredTerm(index)}
            onMouseLeave={() => setHoveredTerm(null)}
          >
            <div className="term-name">{item.term}</div>
            {hoveredTerm === index && (
              <div className="term-definition">{item.definition}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
