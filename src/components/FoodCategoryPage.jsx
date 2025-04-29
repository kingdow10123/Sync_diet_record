import React, { useState } from 'react';

function FoodCategoryPage({ category, onSave }) {
  const [inputs, setInputs] = useState([{ name: '', amount: '' }]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const addRow = () => {
    setInputs([...inputs, { name: '', amount: '' }]);
  };

  const handleSaveClick = () => {
    console.log(`儲存的 ${category.title} 紀錄:`, inputs);
    onSave();
  };

  return (
    <div className="container fade-in">
      <div className="image-wrapper">
        <img src={category.image} alt={`${category.title}圖片`} />
      </div>
      <h1>{category.title}</h1>
      <div className="form-container">
        {inputs.map((input, index) => (
          <div className="form-group-pair" key={index}>
            <div className="form-group">
              <label>今天吃了什麼</label>
              <input
                type="text"
                value={input.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                placeholder="請輸入名稱"
              />
            </div>
            <div className="form-group">
              <label>今天吃了多少量</label>
              <input
                type="text"
                value={input.amount}
                onChange={(e) => handleChange(index, 'amount', e.target.value)}
                placeholder="請輸入量值"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="button-group">
        <button className="secondary" onClick={addRow}>新增</button>
        <button className="primary" onClick={handleSaveClick}>儲存</button>
      </div>
    </div>
  );
}

export default FoodCategoryPage;
