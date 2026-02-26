  import React, { useState } from 'react';
  import { Link, useLocation } from 'react-router-dom';

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // --- DATA ---
    const menuItems = [
      { name: 'Beranda', icon: '🏠', path: '/' },
      { name: 'Sejarah Kami', icon: '🧵', path: '/tentang' },
      { name: 'Koleksi Ulos', icon: '✨', path: '/produk' },
      { name: 'Proses Pembuatan', icon: '📖', path: '/proses-pembuatan' },
      { name: 'Kontak', icon: '📞', path: '/kontak' },
    ];

    const offers = ["🎉 Diskon 20% Pembelian Pertama", "🎁 Paket Wedding Spesial"];
    const heroImage = '/images/hero/ulos-hero-banner.jpg';

    // Fungsi menutup menu saat link diklik
    const closeMenu = () => setIsOpen(false);

    return (
      <header className="header-wrapper">
        
        {/* 1. ANNOUNCEMENT BAR */}
        <div className="announcement-bar">
          <div className="announcement-content">
            <span className="announcement-badge">🎊 BUDAYA INDONESIA</span>
            <div className="announcement-text">
              {offers.map((offer, i) => <span key={i} className="offer-text">{offer}</span>)}
            </div>
          </div>
        </div>

        {/* 2. HERO SECTION */}
        <div className="header-hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              <span className="title-main">Dame</span>
              <span className="title-sub">Ulos</span>
            </h1>
            <p className="hero-tagline">Melestarikan Tenun Tradisional Batak dari Tarutung</p>
            
            <div className="hero-badges">
              <span className="badge">🎯 Warisan Budaya</span>
              <span className="badge">👵🏻 Tenun Tangan</span>
              <span className="badge">❤️ 100% Authentic</span>
            </div>
            
            <Link to="/produk" className="hero-button">🧵 Jelajahi Koleksi</Link>
          </div>
        </div>

        {/* 3. NAVIGATION (STICKY) */}
        <nav className="navbar sticky-nav">
          <div className="nav-container">          
            {/* Desktop Menu */}
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Button */}
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path}
                className="mobile-menu-item"
                onClick={closeMenu} // Menu otomatis tutup saat diklik
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </nav>

      </header>
    );
  };

  export default Header;