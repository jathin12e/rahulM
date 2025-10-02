import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuData = {
    appetizers: {
      title: "Appetizers & Starters",
      icon: "🥗",
      veg: [
        "Onion Pakoda",
        "Crispy Corn Peanut",
        "Baby Green Chili Lobb",
        "Chilli Lobb",
        "Curry Leaf Potato Fry",
        "Chilli Panzer",
        "Green Chili Panzer",
        "Samosa",
        "Samosa Chaat",
        "Pani Puri",
        "Potato Balls with Peanut Chunky",
        "Bendakaya Fry",
        "Aloo Fry"
      ],
      nonVeg: [
        "Ribbon Chicken Pakoda",
        "Green Chili Chicken",
        "Mutton Fry with Kaju Peanut",
        "Crispy Kaju Peanut Chicken Fry",
        "Corn Leaves Chili Chicken Balls",
        "Chicken B65 Popcorn",
        "Chicken Manchurian",
        "Dry Chili Chef Special",
        "Devil Egg Crisp",
        "Spark Chicken",
        "Chicken Majestic",
        "Fish Fry Masala"
      ]
    },
    biryanis: {
      title: "Biryanis & Rice",
      icon: "🍛",
      items: [
        "Chicken Biryani",
        "Mutton Biryani",
        "Prawn Biryani",
        "Veg Biryani",
        "Bendakaya Biryani",
        "Dindigul Chicken Biryani",
        "Dindigul Mutton Biryani",
        "Chef's Special Dum Biryani",
        "Pachi Machi Biryani",
        "Kodi Puttu Biryani",
        "White Rice",
        "Veg Fried Rice",
        "Jeera Rice",
        "Coconut Rice",
        "Chicken Curry with Rice",
        "Tomato Curry with Rice",
        "Peanut Garlic Rice",
        "Sambar Rice with Fruits",
        "Lemon Rice",
        "Butter Jeera Rice"
      ]
    },
    mainCourse: {
      title: "Main Course",
      icon: "🍽️",
      veg: [
        "Dal Tadka",
        "Tomato Dal Tadka",
        "Bendakaya Curry",
        "Beetroot Fry",
        "Bendakaya Masala",
        "Chana Masala",
        "Soya Chana",
        "Tomato Chana Masala",
        "Aloo Dum Masala",
        "Soya Panzer",
        "Aloo Chana Masala",
        "Aloo Veg Fry"
      ],
      nonVeg: [
        "Fish Curry Andhra Style",
        "Chicken Curry Traditional",
        "Andhra Kodi Kura",
        "Mutton Curry",
        "Chicken Chettinad Masala",
        "Prawns Masala",
        "Chicken Curry Sesame",
        "Asian Butter Chicken",
        "Andhra Style Chicken Curry",
        "Kerala Chicken Curry",
        "Hyderabadi Mutton",
        "Fish Fry Masala",
        "Bendakaya Fry",
        "Beetroot Fry"
      ]
    },
    desserts: {
      title: "Desserts & Beverages",
      icon: "🍨",
      items: [
        "Gulab Jamun",
        "Rasmalai",
        "Kheer",
        "Fruit Salad with Ice Cream",
        "Chocolate Brownie",
        "Mango Lassi",
        "Sweet Lassi",
        "Masala Chai",
        "Cold Coffee",
        "Fresh Lime Soda",
        "Mango Shake",
        "Badam Milk"
      ]
    }
  };

  const MenuColumn = ({ title, items, type = 'default', icon }) => (
    <div className="menu-column">
      <div className={`menu-header ${type}-header`}>
        <div className="header-content">
          <span className="header-icon">{icon}</span>
          <h3>{title}</h3>
        </div>
        <div className="header-decoration"></div>
      </div>
      <div className="menu-items">
        {items.map((item, index) => (
          <div key={index} className="menu-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="item-content">
              <span className="item-name">{item}</span>
              <div className="item-dots"></div>
              <div className="item-indicator">
                {type === 'veg' && <span className="veg-indicator">🟢</span>}
                {type === 'nonveg' && <span className="nonveg-indicator">🔴</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-header-section">
          <h2 className="menu-title">Culinary Portfolio</h2>
          <p className="menu-subtitle">
            A showcase of exquisite dishes crafted with authentic flavors and premium ingredients
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {Object.entries(menuData).map(([key, category]) => (
            <button
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="btn-icon">{category.icon}</span>
              <span className="btn-text">{category.title}</span>
              <div className="btn-glow"></div>
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          {activeCategory === 'appetizers' && (
            <div className="menu-grid">
              <MenuColumn
                title="Vegetarian Appetizers"
                items={menuData.appetizers.veg}
                type="veg"
                icon="🟢"
              />
              <MenuColumn
                title="Non-Vegetarian Appetizers"
                items={menuData.appetizers.nonVeg}
                type="nonveg"
                icon="🔴"
              />
            </div>
          )}

          {activeCategory === 'biryanis' && (
            <div className="menu-grid single-column">
              <MenuColumn
                title="Biryanis & Rice Specialties"
                items={menuData.biryanis.items}
                type="biryani"
                icon="🍛"
              />
            </div>
          )}

          {activeCategory === 'mainCourse' && (
            <div className="menu-grid">
              <MenuColumn
                title="Vegetarian Main Course"
                items={menuData.mainCourse.veg}
                type="veg"
                icon="🟢"
              />
              <MenuColumn
                title="Non-Vegetarian Main Course"
                items={menuData.mainCourse.nonVeg}
                type="nonveg"
                icon="🔴"
              />
            </div>
          )}

          {activeCategory === 'desserts' && (
            <div className="menu-grid single-column">
              <MenuColumn
                title="Desserts & Beverages"
                items={menuData.desserts.items}
                type="dessert"
                icon="🍨"
              />
            </div>
          )}
        </div>

        {/* Special Note */}
        <div className="special-note">
          <div className="note-content">
            <div className="note-icon">👨‍🍳</div>
            <div className="note-text">
              <h4>Chef's Promise</h4>
              <p>All dishes are prepared with fresh, locally-sourced ingredients and authentic spices. 
                 Customization available to suit your dietary preferences and spice levels.</p>
            </div>
          </div>
          <div className="note-decoration"></div>
        </div>
      </div>
    </section>
  );
};

export default Menu;