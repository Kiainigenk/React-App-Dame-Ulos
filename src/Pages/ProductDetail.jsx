import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from '../context/CartContext';

const productsData = [
  { id: 1, name: 'Ragidup Silingom', price: 'Rp 1.250.000', badge: 'KLASIK', emoji: '❤️', color: '#8B0000', image: '/images/Ragidup.jpeg', category: 'Ragidup' },
  { id: 2, name: 'Sadum Gusting Sabulun', price: 'Rp 950.000', badge: 'TRADISIONAL', emoji: '⚫', color: '#000000', image: '/images/Sadum Gusting Sabulun.jpeg', category: 'Sibolang' },
  { id: 3, name: 'Ragihuting-Namarsimata', price: 'Rp 1.100.000', badge: 'PREMIUM', emoji: '🌿', color: '#006400', image: '/images/26.-Ragihuting-Namarsimata_1.jpg', category: 'Ragidup' },
  { id: 4, name: 'Sigumang Marpinarhalak', price: 'Rp 850.000', badge: 'POPULER', emoji: '🎨', color: '#8B4513', image: '/images/Sigumang Marpinarhalak.jpeg', category: 'Sadum' },
  { id: 5, name: 'Ulutorus-Simarsungsang-Sabulung', price: 'Rp 1.500.000', badge: 'KLASIK', emoji: '🌀', color: '#00008B', image: '/images/25.-Ulutorus-Simarsungsang-Sabulung_1.jpg', category: 'Mangiring' },
  { id: 6, name: 'Bintik Tumtuman-Margatip Simarpisoran', price: 'Rp 1.350.000', badge: 'PREMIUM', emoji: '⭐', color: '#FFD700', image: '/images/27.-Bintik-Tumtuman-Margatip-Simarpisoran_2.jpg', category: 'Ragidup' },
  { id: 7, name: 'Tumtuman Hasiksak Najolo', price: 'Rp 1.350.000', badge: 'PREMIUM', emoji: '⭐', color: '#FFD700', image: '/images/28.-Tumtuman-Hasiksak-Najolo_2.jpg', category: 'Ragidup' },
  { id: 8, name: 'Sibolang-Rasta-Marjungkit', price: 'Rp 1.350.000', badge: 'PREMIUM', emoji: '⭐', color: '#FFD700', image: '/images/29._Sibolang-Rasta-Marjungkit_3.jpg', category: 'Ragidup' },
  { id: 9, name: 'Sadum-Namarsimata', price: 'Rp 1.350.000', badge: 'PREMIUM', emoji: '⭐', color: '#FFD700', image: '/images/31.-Sadum-Namarsimata_2.jpg', category: 'Ragidup' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    if (foundProduct) setProduct(foundProduct);
  }, [id]);

  if (!product) return <div className="loading" style={{ textAlign: 'center', marginTop: '50px' }}>Memuat Produk...</div>;

  const handleWhatsApp = () => {
    const phoneNumber = "6283199386794";
    const message = `Halo Admin Dame Ulos, saya tertarik dengan *${product.name}* (Kategori: ${product.category}) seharga ${product.price}. Apakah stok tersedia?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
      setIsCartOpen(true);
    }, 800);
  };

  const description = product.description || `Ulos ${product.name} merupakan salah satu koleksi terbaik kami dari kategori ${product.category}. Ditenun dengan penuh ketelitian menggunakan alat tenun tradisional, menghasilkan motif yang autentik dan bernilai seni tinggi.`;
  const material = "Benang Katun Pilihan (Grade A)";
  const size = "Standar Ulos Besar (± 200cm x 75cm)";
  const process = "Tenun Tangan Tradisional (Handmade)";

  return (
    <div className="product-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      <div className="detail-container">
        {/* Kolom Kiri: Gambar */}
        <div className="detail-image-section">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="detail-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.querySelector('.detail-emoji-fallback').style.display = 'block';
              }}
            />
          ) : null}
          <div className="detail-emoji-fallback" style={{ display: product.image ? 'none' : 'block', fontSize: '8rem' }}>
            {product.emoji}
          </div>
        </div>

        {/* Kolom Kanan: Info */}
        <div className="detail-info-section">
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <span style={{ background: product.color || '#333', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              {product.badge}
            </span>
            <span style={{ background: '#EDF2F7', color: '#4A5568', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
              {product.category}
            </span>
          </div>

          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-price">{product.price}</p>

          <div className="detail-divider"></div>

          <p className="detail-desc">{description}</p>

          <div className="detail-specs">
            <div className="spec-item">
              <span className="spec-label">Bahan:</span>
              <span className="spec-value">{material}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Ukuran:</span>
              <span className="spec-value">{size}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Pengerjaan:</span>
              <span className="spec-value">{process}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Warna Dominan:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: product.color, border: '1px solid #ddd' }}></div>
                <span className="spec-value" style={{ textTransform: 'uppercase' }}>{product.color}</span>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="detail-actions" style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            {/* Tombol Tambah ke Keranjang */}
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              style={{
                background: addedToCart
                  ? 'linear-gradient(135deg, #38A169, #48BB78)'
                  : 'linear-gradient(135deg, #D69E2E, #F6C344)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(214, 158, 46, 0.35)',
                transition: 'all 0.2s',
                flex: '1',
                justifyContent: 'center',
                minWidth: '180px',
              }}
            >
              <span>{addedToCart ? '✓' : '🛒'}</span>
              {addedToCart ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
            </button>

            {/* Tombol WhatsApp (Beli Langsung 1 Produk) */}
            <button
              className="whatsapp-btn"
              onClick={handleWhatsApp}
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.2s',
                flex: '1',
                justifyContent: 'center',
                minWidth: '180px',
              }}
            >
              <FaWhatsapp />
              Pesan via WhatsApp
            </button>
          </div>

          <p className="detail-note">*Motif dan warna asli mungkin sedikit berbeda karena pencahayaan foto dan proses tenun tangan.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;