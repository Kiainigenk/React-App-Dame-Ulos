import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTools, FaLayerGroup, FaPalette, FaClock, FaHands } from "react-icons/fa";
import './ProcessDetail.css';

// === DATA PRODUK (Sama dengan sebelumnya, tapi fokus ke detail) ===
const productsData = [
  { 
    id: 1, 
    name: 'Ragidup Silingom', 
    image: '/images/Ragidup.jpeg',
    category: 'Ragidup',
    details: {
      material: "Benang Katun 100% (Grade A) serat padat.",
      colorDesc: "Merah Marun Gelap (Silingom) dengan aksen hitam pekat.",
      tool: "Alat Tenun Gedogan Tradisional (Backstrap Loom).",
      technique: "Teknik 'Ihot' (Penyambungan 3 bagian: sisi kiri, kanan, dan tengah).",
      processTime: "3 - 4 Minggu",
      care: "Dry Clean Only / Angin-anginkan saja."
    }
  },
  { 
    id: 2, 
    name: 'Sadum Gusting Sabulun', 
    image: '/images/Sadum Gusting Sabulun.jpeg',
    category: 'Sibolang',
    details: {
      material: "Benang Katun Mercerized (Halus & Berkilau).",
      colorDesc: "Dominan Hitam dengan motif garis warna-warni cerah.",
      tool: "ATBM (Alat Tenun Bukan Mesin) Kayu.",
      technique: "Tenun Ikat dengan tambahan manik-manik di ujung rambu.",
      processTime: "2 Minggu",
      care: "Cuci tangan lembut tanpa dikucek keras."
    }
  },
  { 
    id: 3, 
    name: 'Ragihuting-Namarsimata', 
    image: '/images/26.-Ragihuting-Namarsimata_1.jpg',
    category: 'Ragidup',
    details: {
      material: "Benang Sutra Sintetis mix Katun Premium.",
      colorDesc: "Hijau Lumut Tua dengan motif mata (simata) benang emas.",
      tool: "Gedogan Tarutung Asli.",
      technique: "Songket Jungkit (Motif timbul pada bagian 'Mata').",
      processTime: "3 Minggu",
      care: "Simpan digulung, hindari lipatan tajam."
    }
  },
  { 
    id: 4, 
    name: 'Sigumang Marpinarhalak', 
    image: '/images/Sigumang Marpinarhalak.jpeg',
    category: 'Sadum',
    details: {
      material: "Benang Katun Standar (Nyaman & Adem).",
      colorDesc: "Coklat Tanah (Earth Tone) dengan motif manusia (pinarhalak).",
      tool: "ATBM Kayu Standar.",
      technique: "Tenun Datar dengan motif pakan tambahan.",
      processTime: "10 - 14 Hari",
      care: "Cuci tangan dengan sabun lerak/lembut."
    }
  },
  { 
    id: 5, 
    name: 'Ulutorus-Simarsungsang-Sabulung', 
    image: '/images/25.-Ulutorus-Simarsungsang-Sabulung_1.jpg',
    category: 'Mangiring',
    details: {
      material: "Benang Katun Serat Panjang (High Tenacity).",
      colorDesc: "Biru Indigo (Nila) dengan motif zig-zag (sungsang).",
      tool: "Gedogan Presisi Tinggi.",
      technique: "Teknik Sungsang (Pola naik turun yang rumit).",
      processTime: "1 Bulan",
      care: "Hindari sinar matahari langsung."
    }
  },
  { 
    id: 6, 
    name: 'Bintik Tumtuman-Margatip Simarpisoran', 
    image: '/images/27.-Bintik-Tumtuman-Margatip-Simarpisoran_2.jpg',
    category: 'Ragidup',
    details: {
      material: "Benang Kristal & Benang Mas India.",
      colorDesc: "Kuning Emas dengan bintik-bintik halus (Margatip).",
      tool: "ATBM Khusus Songket.",
      technique: "Full Jungkit (Penuh benang mas di kepala sarung).",
      processTime: "3 - 4 Minggu",
      care: "Dry Clean Only (Jangan disetrika langsung)."
    }
  },
  { 
    id: 7, 
    name: 'Tumtuman Hasiksak Najolo', 
    image: '/images/28.-Tumtuman-Hasiksak-Najolo_2.jpg',
    category: 'Ragidup',
    details: {
      material: "Benang Sutra Alam (Natural Silk).",
      colorDesc: "Kuning Kunyit Klasik (Warna Raja).",
      tool: "Gedogan Warisan.",
      technique: "Hasiksak (Penenunan sangat rapat dan detail).",
      processTime: "1 Bulan Full",
      care: "Simpan dengan silica gel di lemari kering."
    }
  },
  { 
    id: 8, 
    name: 'Sibolang-Rasta-Marjungkit', 
    image: '/images/29._Sibolang-Rasta-Marjungkit_3.jpg',
    category: 'Ragidup',
    details: {
      material: "Benang Katun mix Polyester (Kuat).",
      colorDesc: "Dasar Gelap dengan garis Rasta (Merah-Putih-Hitam) & Emas.",
      tool: "ATBM.",
      technique: "Marjungkit (Menambah benang pakan hias di atas dasar).",
      processTime: "3 Minggu",
      care: "Cuci halus, setrika suhu rendah."
    }
  },
  { 
    id: 9, 
    name: 'Sadum-Namarsimata', 
    image: '/images/31.-Sadum-Namarsimata_2.jpg',
    category: 'Ragidup',
    details: {
      material: "Benang Mercery No.1 (Sangat Halus).",
      colorDesc: "Merah/Emas Cerah dengan hiasan manik 'Mata'.",
      tool: "Gedogan.",
      technique: "Songket Batak dengan aplikasi manik tanam.",
      processTime: "3 Minggu",
      care: "Jangan dicuci mesin, manik bisa lepas."
    }
  },
];

const ProcessDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = productsData.find(p => p.id === parseInt(id));
    if (found) setProduct(found);
  }, [id]);

  if (!product) return <div className="loading-state">Memuat Data...</div>;

  return (
    <div className="process-page">
      <div className="process-header">
        <button className="back-link" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Kembali ke Produk
        </button>
        <h1 className="process-title">Detail Pembuatan</h1>
        <h2 className="product-name">{product.name}</h2>
      </div>

      <div className="process-container">
        {/* GAMBAR HERO */}
        <div className="process-hero">
           <img src={product.image} alt={product.name} onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=No+Image'} />
        </div>

        {/* GRID DETAIL */}
        <div className="process-grid">
          
          {/* Card 1: Bahan */}
          <div className="process-card">
            <div className="card-icon"><FaLayerGroup /></div>
            <h3>Bahan Utama</h3>
            <p>{product.details.material}</p>
          </div>

          {/* Card 2: Alat */}
          <div className="process-card">
            <div className="card-icon"><FaTools /></div>
            <h3>Alat Tenun</h3>
            <p>{product.details.tool}</p>
          </div>

          {/* Card 3: Warna */}
          <div className="process-card">
            <div className="card-icon"><FaPalette /></div>
            <h3>Warna & Motif</h3>
            <p>{product.details.colorDesc}</p>
          </div>

           {/* Card 4: Teknik */}
           <div className="process-card">
            <div className="card-icon"><FaHands /></div>
            <h3>Teknik Pengerjaan</h3>
            <p>{product.details.technique}</p>
          </div>

           {/* Card 5: Waktu */}
           <div className="process-card">
            <div className="card-icon"><FaClock /></div>
            <h3>Waktu Pembuatan</h3>
            <p>{product.details.processTime}</p>
          </div>

          {/* Card 6: Kategori */}
          <div className="process-card highlight">
            <div className="card-icon">🏷️</div>
            <h3>Kategori Adat</h3>
            <p>Jenis <strong>{product.category}</strong>. Biasanya digunakan untuk acara sukacita atau upacara adat resmi.</p>
          </div>

        </div>

        {/* INFO TAMBAHAN / CARE */}
        <div className="care-section">
          <h3>🧺 Tips Perawatan (Care Instruction)</h3>
          <p>{product.details.care}</p>
        </div>

      </div>
    </div>
  );
};

export default ProcessDetail;