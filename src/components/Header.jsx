import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    languages: false,
    interests: false
  });

  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'menu', 'education', 'experience', 'skills', 'languages', 'interests', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    const handleClickOutside = (event) => {
      // Close mobile menu when clicking outside
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          mobileToggleRef.current &&
          !mobileToggleRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
      
      // Close dropdowns when clicking outside
      if (dropdownOpen.languages || dropdownOpen.interests) {
        setDropdownOpen({ languages: false, interests: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen, dropdownOpen]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    setDropdownOpen({ languages: false, interests: false });
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDropdownOpen({ languages: false, interests: false });
  };

  const toggleDropdown = (dropdown, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setDropdownOpen(prev => ({
      languages: dropdown === 'languages' ? !prev.languages : false,
      interests: dropdown === 'interests' ? !prev.interests : false
    }));
  };

  const navItems = [
    { href: 'about', label: 'About' },
    { href: 'menu', label: 'Menu' },
    { href: 'education', label: 'Education' },
    { href: 'experience', label: 'Experience' },
    { href: 'skills', label: 'Skills' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo" onClick={() => handleNavClick('about')} style={{cursor: 'pointer'}}>
            <span className="logo-text">M.U. RAHUL</span>
            <span className="logo-subtitle">Hospitality Professional</span>
          </div>
          
          <div className={`nav-content ${mobileMenuOpen ? 'mobile-open' : ''}`} ref={mobileMenuRef}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={`#${item.href}`}
                    className={activeSection === item.href ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span className="nav-icon">▶</span>
                    <span className="nav-text">{item.label}</span>
                    <span className="nav-underline"></span>
                  </a>
                </li>
              ))}
              
              {/* Languages Dropdown */}
              <li className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${dropdownOpen.languages ? 'open' : ''} ${activeSection === 'languages' ? 'active' : ''}`}
                  onClick={(e) => toggleDropdown('languages', e)}
                >
                  <span className="nav-icon">▶</span>
                  <span className="nav-text">Languages</span>
                  <span className="dropdown-arrow">▼</span>
                  <span className="nav-underline"></span>
                </button>
                <ul className={`dropdown-menu ${dropdownOpen.languages ? 'active' : ''}`}>
                  <li><a href="#languages" onClick={(e) => { e.preventDefault(); handleNavClick('languages'); }}>English - Fluent</a></li>
                  <li><a href="#languages" onClick={(e) => { e.preventDefault(); handleNavClick('languages'); }}>Hindi - Native</a></li>
                  <li><a href="#languages" onClick={(e) => { e.preventDefault(); handleNavClick('languages'); }}>Telugu - Native</a></li>
                </ul>
              </li>

              {/* Interests Dropdown */}
              <li className="dropdown-container">
                <button 
                  className={`dropdown-toggle ${dropdownOpen.interests ? 'open' : ''} ${activeSection === 'interests' ? 'active' : ''}`}
                  onClick={(e) => toggleDropdown('interests', e)}
                >
                  <span className="nav-icon">▶</span>
                  <span className="nav-text">Interests</span>
                  <span className="dropdown-arrow">▼</span>
                  <span className="nav-underline"></span>
                </button>
                <ul className={`dropdown-menu ${dropdownOpen.interests ? 'active' : ''}`}>
                  <li><a href="#interests" onClick={(e) => { e.preventDefault(); handleNavClick('interests'); }}>Culinary Arts</a></li>
                  <li><a href="#interests" onClick={(e) => { e.preventDefault(); handleNavClick('interests'); }}>Photography</a></li>
                  <li><a href="#interests" onClick={(e) => { e.preventDefault(); handleNavClick('interests'); }}>Creative Writing</a></li>
                </ul>
              </li>

              <li>
                <a 
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  <span className="nav-icon">▶</span>
                  <span className="nav-text">Contact</span>
                  <span className="nav-underline"></span>
                </a>
              </li>
            </ul>

            <div className="nav-actions">
              <a 
                href="#contact" 
                className="cta-button"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                <span>Hire Me</span>
                <div className="button-glow"></div>
              </a>
            </div>
          </div>

          <button 
            ref={mobileToggleRef}
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;