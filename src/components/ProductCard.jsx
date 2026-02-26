import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import ini

const ProductCard = ({ product }) => {
  const navigate = useNavigate(); // 2. Inisialisasi navigasi

  // ... (Logika gambar tetap sama seperti sebelumnya) ...
  const getImageSrc = () => {
    if (product.image && product.image.startsWith('/images/')) {
      return product.image;
    } else if (product.image) {
      return `/${product.image}`;
    }
    return null;
  };
  const imageSrc = getImageSrc();

  // 3. Fungsi handle click
  const handleDetailClick = () => {
    // Kita arahkan ke URL /produk/id_produk
    // Pastikan data product punya id, misal: product.id
    navigate(`/produk/${product.id}`); 
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {/* ... (kode gambar tetap sama) ... */}
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={product.name} 
            className="product-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.querySelector('.product-emoji-fallback').style.display = 'block';
            }}
          />
        ) : null}
         <div 
          className="product-emoji-fallback" 
          style={{ 
            display: imageSrc ? 'none' : 'block',
            fontSize: '5rem',
            zIndex: 1,
            position: 'relative'
          }}
        >
          {product.emoji}
        </div>
      </div>
      
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc">
        Ulos tradisional berkualitas tinggi dengan motif autentik
      </p>
      
      <div className="product-footer">
        <span className="product-price">{product.price}</span>
        
        {/* 4. Update tombol dengan onClick */}
        <button className="detail-btn" onClick={handleDetailClick}>
          Lihat Detail <span style={{ marginLeft: '5px' }}>→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;