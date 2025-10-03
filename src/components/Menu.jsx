import React, { useState } from "react";
import "./Menu.css";

const initialMenuData = {
  Biryani: [
    "Chicken Biryani",
    "Mutton Biryani",
    "Gongura Biryani",
    "Veg Biryani",
    "Dindigul Chicken and Mutton Biryani",
    "Chicken Dum Biryani",
    "Pachi Mirchi Kodi Pulav",
  ],
  "Veg Entree": [
    "Dal Tadka",
    "Gongura Dal Tadka",
    "Vankaya Curry",
    "Beetroot Kurma",
    "Bendakaya Masala",
    "Chole Masala",
    "Saag Channa",
    "Gongura Channa Masala",
    "Aloo Dum Masala",
    "Saag Paneer",
    "Shahi Paneer Kurma",
    "Aloo Changezi",
  ],
  "Non Veg Entree": [
    "Nellur Chapala Pulusu",
    "Gongura Chicken / Mutton",
    "Aatukodi Kura",
    "Mutton Curry",
    "Chicken Chukka Masala",
    "Prawns Masala",
    "Chicken Curry Sesame",
    "Aslam Butter Chicken",
    "Pachi Mirchi Kodi Kura",
    "Keema Chicken Curry",
    "Roghan Josh Mutton",
  ],
  "Non Veg Appetizers": [
    "Ribbon chicken pakoda",
    "Green chilli chicken",
    "Mutton fry with kaju/peanut",
    "Crispy kaju/peanut chicken fry curry leaves powder",
    "Chilli chicken balls",
    "Chicken popcorn 65",
    "Chicken Manchurian balls",
    "Chef special Devil Egg crispy",
    "Chicken majestic",
    "Chicken kabab",
    "Dry chilli garlic chicken",
    "Chicken lollypop",
    "Garlic chicken",
  ],
  "Veg Appetizers": [
    "Onion pakoda",
    "Crispy brinjal",
    "Green chilli gobi",
    "Chilli gobi",
    "Curry leaves potato fry",
    "Chilli paneer",
    "Green chilli paneer",
    "Samosa",
    "Samosa chat",
    "Pani puri",
    "Potato balls with peanut chutney",
    "Bendakaya vellulli karam",
  ],
  "Veg Fry": ["Aloo Fry", "Bendakaya Fry", "Beetroot Fry"],
  "Non Veg Fry": ["Fish Fry Masala"],
  Rice: [
    "White Rice",
    "Veg and Non-Veg Fried Rice",
    "Curry Leaves Rice",
    "Coconut Rice",
    "Chicken Bhurtha Balls with Rice",
    "Tomato Bhurtha Balls with Rice",
    "Peanut Garlic Podi Rice",
    "Sambar Rice with Brinjal",
    "Lemon Rice",
    "Butter Jeera Rice",
    "Rasam Rice with Omelet",
  ],
  "Tandoori Breads": [
    "Garlic Naan",
    "Butter Naan",
    "Chilli Butter Naan",
    "Chilli Naan",
    "Cheese Naan",
    "Garlic Cheese Naan",
    "Chicken Kulcha",
    "Peshwari Naan",
    "Onion Kulcha",
    "Butter Roti",
  ],
  Tandoori: [
    "Tandoori Chicken",
    "Cilantro Lime Chicken",
    "Chicken Tikka",
    "Hariyali Tikka",
    "Tandoori Fish",
  ],
  Soup: ["Rasam", "Mutton Soup", "Chicken Soup", "Veg Soup"],
};

function Menu() {
  const [menuData, setMenuData] = useState(initialMenuData);
  const [openCategory, setOpenCategory] = useState(null);
  const [newItemInputs, setNewItemInputs] = useState({});
  const [newCategoryInput, setNewCategoryInput] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const addItem = (category, itemName) => {
    if (itemName.trim() === "") return;
    
    setMenuData(prev => ({
      ...prev,
      [category]: [...prev[category], itemName.trim()]
    }));
    
    // Clear the input
    setNewItemInputs(prev => ({
      ...prev,
      [category]: ""
    }));
  };

  const addCategory = () => {
    if (newCategoryInput.trim() === "") return;
    
    setMenuData(prev => ({
      ...prev,
      [newCategoryInput.trim()]: []
    }));
    
    setNewCategoryInput("");
    setIsAddingCategory(false);
  };

  const removeItem = (category, index) => {
    setMenuData(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const removeCategory = (category) => {
    const newData = { ...menuData };
    delete newData[category];
    setMenuData(newData);
    if (openCategory === category) {
      setOpenCategory(null);
    }
  };

  const handleNewItemInputChange = (category, value) => {
    setNewItemInputs(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="header-content">
          <h1 className="menu-title">Spice Garden</h1>
          <p className="menu-subtitle">Authentic Indian Cuisine</p>
          <div className="header-actions">
            <button 
              className="btn-primary"
              onClick={() => setIsAddingCategory(true)}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
      
      {isAddingCategory && (
        <div className="add-category-modal">
          <div className="modal-content">
            <h3>Add New Category</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter category name"
                value={newCategoryInput}
                onChange={(e) => setNewCategoryInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCategory()}
              />
              <div className="modal-actions">
                <button className="btn-primary" onClick={addCategory}>
                  Add
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => setIsAddingCategory(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="menu-content">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="menu-section">
            <div
              className={`menu-category ${openCategory === category ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              <div className="category-header">
                <h2 className="category-title">{category}</h2>
                <span className="item-count">{items.length} items</span>
              </div>
              <div className="category-actions">
                <button 
                  className="btn-icon danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm(`Delete ${category} category?`)) {
                      removeCategory(category);
                    }
                  }}
                  title="Delete Category"
                >
                  ×
                </button>
                <span className="toggle-icon">
                  {openCategory === category ? "−" : "+"}
                </span>
              </div>
            </div>
            <div className={`menu-items-container ${openCategory === category ? 'open' : ''}`}>
              <ul className="menu-items">
                {items.map((item, index) => (
                  <li key={index} className="menu-item">
                    <span className="item-name">{item}</span>
                    <button 
                      className="btn-icon small danger"
                      onClick={() => removeItem(category, index)}
                      title="Remove Item"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="add-item-section">
                <input
                  type="text"
                  placeholder="Add new item..."
                  value={newItemInputs[category] || ""}
                  onChange={(e) => handleNewItemInputChange(category, e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addItem(category, newItemInputs[category] || "")}
                />
                <button 
                  className="btn-primary small"
                  onClick={() => addItem(category, newItemInputs[category] || "")}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;