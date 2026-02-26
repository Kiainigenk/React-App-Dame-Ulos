import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProcessList.css';
// Data yang sama (supaya halaman ini tahu ada produk apa saja)
const productsData = [
  { id: 1, name: 'Ragidup Silingom', image: '/images/Ragidup.jpeg', category: 'Ragidup' },
  { id: 2, name: 'Sadum Gusting Sabulun', image: '/images/Sadum Gusting Sabulun.jpeg', category: 'Sibolang' },
  { id: 3, name: 'Ragihuting-Namarsimata', image: '/images/26.-Ragihuting-Namarsimata_1.jpg', category: 'Ragidup' },
  { id: 4, name: 'Sigumang Marpinarhalak', image: '/images/Sigumang Marpinarhalak.jpeg', category: 'Sadum' },
  { id: 5, name: 'Ulutorus-Simarsungsang-Sabulung', image: '/images/25.-Ulutorus-Simarsungsang-Sabulung_1.jpg', category: 'Mangiring' },
  { id: 6, name: 'Bintik Tumtuman-Margatip', image: '/images/27.-Bintik-Tumtuman-Margatip-Simarpisoran_2.jpg', category: 'Ragidup' },
  { id: 7, name: 'Tumtuman Hasiksak Najolo', image: '/images/28.-Tumtuman-Hasiksak-Najolo_2.jpg', category: 'Ragidup' },
  { id: 8, name: 'Sibolang-Rasta-Marjungkit', image: '/images/29._Sibolang-Rasta-Marjungkit_3.jpg', category: 'Ragidup' },
  { id: 9, name: 'Sadum-Namarsimata', image: '/images/31.-Sadum-Namarsimata_2.jpg', category: 'Ragidup' },
];

const ProcessList = () => {
  const navigate = useNavigate();

  return (
    <div className="process-list-page">
      <div className="list-header">
        <h1>Dapur Pembuatan Ulos</h1>
        <p>Pilih salah satu motif di bawah untuk melihat detail bahan, alat, dan teknik rumit di balik pembuatannya.</p>
      </div>

      <div className="process-list-grid">
        {productsData.map((item) => (
          <div key={item.id} className="list-card" onClick={() => navigate(`/proses-pembuatan/${item.id}`)}>
            <div className="list-img-wrapper">
               <img src={item.image} alt={item.name} onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Ulos'} />
            </div>
            <div className="list-content">
              <span className="list-cat">{item.category}</span>
              <h3>{item.name}</h3>
              <button className="read-more-btn">Lihat Detail Proses →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessList;