import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tenun-border"></div>
      
      <div className="footer-container">
        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Produk</h4>
            <ul>
              <li><Link to="/produk">Semua Produk</Link></li>
              <li><Link to="/produk?kategori=ragidup">Ulos Ragidup</Link></li>
              <li><Link to="/produk?kategori=sibolang">Ulos Sibolang</Link></li>
              <li><Link to="/produk?kategori=sadum">Ulos Sadum</Link></li>
              <li><Link to="/produk?kategori=tumtuman">Ulos Tumtuman</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Informasi</h4>
            <ul>
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/motif">Motif Tradisional</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Bantuan</h4>
            <ul>
              <li><Link to="/bantuan/pemesanan">Cara Pemesanan</Link></li>
              <li><Link to="/bantuan/pengiriman">Pengiriman</Link></li>
              <li><Link to="/bantuan/perawatan">Perawatan Ulos</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Kontak</h4>
            <ul className="contact-info">
              <li>📍 Jl. Tenun No. 45, Tarutung</li>
              <li>📞 0812-3456-7890</li>
              <li>✉️ info@dameulos.com</li>
              <li>🕐 Buka: 08:00 - 16:00</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Ikuti Kami</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">📘 Facebook</a>
            <a href="#" className="social-icon">📸 Instagram</a>
            <a href="#" className="social-icon">🎬 TikTok</a>
            <a href="#" className="social-icon">▶️ YouTube</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="footer-logo-emoji">🧵</span>
            <span className="footer-logo-text">Dame Ulos - Pelestari Tenun Batak</span>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Dame Ulos. Warisan Budaya Indonesia.
          </p>
          <div className="footer-legal">
            <Link to="/syarat">Syarat & Ketentuan</Link>
            <Link to="/privasi">Kebijakan Privasi</Link>
            <Link to="/sitemap">Peta Situs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;