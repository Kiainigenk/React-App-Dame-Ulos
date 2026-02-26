import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* SECTION 1: HERO / PENDAHULUAN */}
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-title">Mengenal <span>Dame Ulos</span></h1>
          <p className="hero-desc">
            Pusat kerajinan tenun Ulos tradisional Batak Toba yang berlokasi di Tarutung. 
            Sejak 1985, kami berdedikasi melestarikan warisan leluhur melalui setiap helai benang yang ditenun dengan hati.
          </p>
        </div>
      </section>

      {/* SECTION 2: CERITA KAMI (SEJARAH) */}
      <section className="our-story">
        <div className="container story-wrapper">
          {/* Gambar Ilustrasi */}
          <div className="story-image">
            <img 
              src="Dame_Ulos_bangunan.png" 
              alt="Proses Tenun Ulos di Dame Ulos" 
              className="img-fluid"
            />
          </div>

          {/* Teks Cerita */}
          <div className="story-content">
            <h2 className="section-title">Perjalanan Kami</h2>
            <p>
              <strong>Dame Ulos</strong> bermula dari usaha rumahan kecil di Tapanuli Utara. 
              Berawal dari kecintaan terhadap budaya Batak, pendiri kami memulai menenun menggunakan 
              alat tenun tradisional (Gedogan) untuk memenuhi kebutuhan adat masyarakat setempat.
            </p>
            <p>
              Nama <strong>"Dame"</strong> berarti <em>Damai</em>. Harapan kami, setiap Ulos yang kami hasilkan 
              membawa kedamaian dan kehangatan bagi pemakainya, baik dalam upacara adat sukacita maupun dukacita.
            </p>
            <p>
              Kini, Dame Ulos telah berkembang menjadi galeri yang tidak hanya melayani pasar lokal, 
              tetapi juga mengirimkan keindahan Ulos ke seluruh Indonesia hingga mancanegara.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: NILAI & KEUNGGULAN */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title center">Mengapa Memilih Dame Ulos?</h2>
          
          <div className="values-grid">
            {/* Value 1 */}
            <div className="value-card">
              <div className="value-icon">🧵</div>
              <h3>100% Tenun Tangan</h3>
              <p>Kami menjamin keaslian proses pembuatan. Bukan mesin, melainkan keterampilan tangan pengrajin berpengalaman.</p>
            </div>

            {/* Value 2 */}
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Kualitas Premium</h3>
              <p>Menggunakan benang pilihan (Sutera, Katun) dan pewarna yang tahan lama serta nyaman dipakai.</p>
            </div>

            {/* Value 3 */}
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Memberdayakan Lokal</h3>
              <p>Setiap pembelian Anda turut membantu perekonomian ibu-ibu penenun di desa sekitar Tarutung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="cta-section">
        <div className="container center">
          <h2>Ingin Melihat Koleksi Kami?</h2>
          <p>Kami mengundang Anda untuk melihat langsung keindahan Motif Ulos kami.</p>
          
          <div className="cta-buttons">
            <Link to="/produk" className="btn btn-primary">Lihat Katalog Online</Link>
            <Link to="/kontak" className="btn btn-secondary">Hubungi Kami</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;