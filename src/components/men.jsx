import React, { useState } from "react";
import "./men.css";

const menuData = {
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
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">Spice Garden</h1>
        <p className="menu-subtitle">Authentic Indian Cuisine</p>
      </div>
      
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
              <span className="toggle-icon">
                {openCategory === category ? "−" : "+"}
              </span>
            </div>
            <div className={`menu-items-container ${openCategory === category ? 'open' : ''}`}>
              <ul className="menu-items">
                {items.map((item, index) => (
                  <li key={index} className="menu-item">
                    <span className="item-name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;