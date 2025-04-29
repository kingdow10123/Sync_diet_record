import React, { useState } from 'react';
import FoodCategoryPage from './FoodCategoryPage';
import Toast from './Toast';
import './FoodRecord.css';

const categories = [
  { title: '水果類', image: 'https://i.imgur.com/ZlIQcX4.png' },
  { title: '蔬菜類', image: 'https://i.imgur.com/C15YzDv.png' },
  { title: '豆蛋魚肉類', image: 'https://i.imgur.com/eimBNj3.png' },
  { title: '全穀雜糧類', image: 'https://i.imgur.com/5rkQkQI.png' },
  { title: '乳品類', image: 'https://i.imgur.com/7cU5msC.png' },
  { title: '堅果種子類', image: 'https://i.imgur.com/vSpMlnq.png' }
];

function FoodRecord() {
  const [page, setPage] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setPage('detail');
  };

  const handleSave = () => {
    setToastMessage(`已儲存 ${selectedCategory.title} 紀錄！`);
    setPage('main');
    setTimeout(() => setToastMessage(''), 2000);
  };

  return (
    <div className="container fade-in">
      {page === 'main' && (
        <>
          <h1>飲食記錄</h1>
          <p className="subtitle">選擇要記錄的飲食類別</p>
          <div className="food-grid">
            {categories.map((cat) => (
              <div className="food-card" key={cat.title} onClick={() => handleSelectCategory(cat)}>
                <img src={cat.image} alt={cat.title} />
                <div className="label">{cat.title}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {page === 'detail' && selectedCategory && (
        <FoodCategoryPage category={selectedCategory} onSave={handleSave} />
      )}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default FoodRecord;
