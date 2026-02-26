import React from 'react'; // useState dihapus karena tidak dipakai lagi
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Data Produk Tetap Ada
  const allProducts = [
    { 
      id: 1, 
      name: 'Ragidup Silingom', 
      price: 'Rp 1.250.000', 
      badge: 'KLASIK', 
      emoji: '❤️', 
      color: '#8B0000',
      image: '/images/Ragidup.jpeg',
      category: 'ragidup'
      
    },
    { 
      id: 2, 
      name: 'Sadum Gusting Sabulun', 
      price: 'Rp 950.000', 
      badge: 'TRADISIONAL', 
      emoji: '⚫', 
      color: '#000000',
      image: '/images/Sadum Gusting Sabulun.jpeg',
      category: 'sibolang'
    },
    { 
      id: 3, 
      name: 'Ragihuting-Namarsimata', 
      price: 'Rp 1.100.000', 
      badge: 'PREMIUM', 
      emoji: '🌿', 
      color: '#006400',
      image: '/images/26.-Ragihuting-Namarsimata_1.jpg',
      category: 'ragidup'
    },
    { 
      id: 4, 
      name: 'Sigumang Marpinarhalak', 
      price: 'Rp 850.000', 
      badge: 'POPULER', 
      emoji: '🎨', 
      color: '#8B4513d',
      image: '/images/Sigumang Marpinarhalak.jpeg',
      category: 'sadum'
    },
    { 
      id: 5, 
      name: 'Ulutorus-Simarsungsang-Sabulung', 
      price: 'Rp 1.500.000', 
      badge: 'KLASIK', 
      emoji: '🌀', 
      color: '#00008B',
      image: '/images/25.-Ulutorus-Simarsungsang-Sabulung_1.jpg',
      category: 'mangiring'
    },
    { 
      id: 6, 
      name: 'Bintik Tumtuman-Margatip Simarpisoran', 
      price: 'Rp 1.350.000', 
      badge: 'PREMIUM', 
      emoji: '⭐', 
      color: '#FFD700',
      image: '/images/27.-Bintik-Tumtuman-Margatip-Simarpisoran_2.jpg',
      category: 'ragidup'
    },
    { 
      id: 7, 
      name: 'Tumtuman Hasiksak Najolo', 
      price: 'Rp 1.350.000', 
      badge: 'PREMIUM', 
      emoji: '⭐', 
      color: '#FFD700',
      image: '/images/28.-Tumtuman-Hasiksak-Najolo_2.jpg',
      category: 'ragidup'
    },
    { 
      id: 8, 
      name: 'Sibolang-Rasta-Marjungkit', 
      price: 'Rp 1.350.000', 
      badge: 'PREMIUM', 
      emoji: '⭐', 
      color: '#FFD700',
      image: '/images/29._Sibolang-Rasta-Marjungkit_3.jpg',
      category: 'ragidup'
    },
    { 
      id: 9, 
      name: 'Sadum-Namarsimata', 
      price: 'Rp 1.350.000', 
      badge: 'PREMIUM', 
      emoji: '⭐', 
      color: '#FFD700',
      image: '/images/31.-Sadum-Namarsimata_2.jpg',
      category: 'ragidup'
    },

  ];

  return (
    <div className="products-page">
      <div className="section-header">
        <h2 className="section-title">🧵 Koleksi Ulos Lengkap</h2>
        <p className="section-subtitle">Pilih ulos terbaik untuk kebutuhan Anda</p>
      </div>

      {/* Bagian Filter Category SUDAH DIHAPUS */}

      {/* Products Grid - Langsung menampilkan allProducts */}
      <div className="products-grid">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State (Hanya muncul jika data kosong) */}
      {allProducts.length === 0 && (
        <div className="empty-state">
          <div className="empty-emoji">😔</div>
          <h3>Belum ada produk saat ini</h3>
        </div>
      )}
    </div>
  );
};

export default Products;