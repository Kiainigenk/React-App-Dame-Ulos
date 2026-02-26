import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="section-header">
        <h2 className="section-title">📖 Our History</h2>
        <p className="section-subtitle">Melestarikan Warisan Tenun Batak sejak 1985</p>
      </div>

      <div className="about-hero">
        <img 
          src="our_history.jpg" 
          alt="Dame Ulos"
          className="about-hero-image"
        />
      </div>

      <div className="about-content-detailed">
        <div className="about-text-detailed">
          <h3>Sejarah Dame Ulos</h3>
          <p>
            Dame Ulos didirikan pada tahun 1985 oleh Ibu Dame Silitonga di Tarutung, 
            Sumatera Utara. Berawal dari kecintaan terhadap budaya Batak dan kekhawatiran 
            akan punahnya tradisi tenun, Ibu Dame memulai perjalanan untuk melestarikan 
            Warisan Budaya Tak Benda: "Ulos dan Mandar Tarutung".
            Dame Ulos merupakan brand lokal asal Silindung (Tarutung) yang fokus dalam melestarikan “Warisan Budaya Takbenda” yaitu “Ulos dan Mandar Tarutung”. 
            Masing-masing ulos dan mandar dibuat dengan konsep “Revitalisasi” 
            menggunakan pewarna alami dan melestarikan tradisi tenun tradisional (gedog) dengan mengikuti motif aslinya sehingga nilai filosofis 
            yang terkandung dalam kain tetap terjaga. Kini Dame Ulos berkolaborasi dengan 150 perajin/penenun terbaik di Silindung dan sekitarnya.
            Karya mereka diapresiasi dan dihargai dengan nilai yang pantas untuk membantu para perajin menjalani kehidupan yang lebih baik dan
            mengelola sumber dayanya secara berkelanjutan serta meneruskan tradisi Batak.
          </p>
          
          <h3>Misi Kami</h3>
          <p>
            Misi kami adalah menjaga kelestarian tenun tradisional Batak melalui:
          </p>
          <ul className="mission-list">
            <li>📜 <strong>Revitalisasi Motif</strong>: Menjaga motif asli dan filosofi kain ulos</li>
            <li>🌿 <strong>Pewarna Alami</strong>: Menggunakan bahan alam tanpa kimia</li>
            <li>👵🏻 <strong>Pemberdayaan Penenun</strong>: Bekerja dengan 90 artisan terbaik</li>
            <li>🎓 <strong>Edukasi</strong>: Memperkenalkan filosofi ulos kepada generasi muda</li>
          </ul>

          <h3>Visi</h3>
          <p>
            Menjadikan Dame Ulos sebagai pusat pelestarian tenun Batak yang diakui 
            secara nasional dan internasional, sambil memberikan nilai ekonomi yang 
            layak bagi para penenun tradisional.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">90+</div>
            <div className="stat-label">Penenun Ahli</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">35+</div>
            <div className="stat-label">Tahun Pengalaman</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Kain Terjual</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">Motif Tradisional</div>
          </div>
        </div>
      </div>

      <div className="about-team">
        <h3 className="section-subtitle">👥 Tim Kami</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👵🏻</div>
            <h4>Ibu Dame Silitonga</h4>
            <p>Pendiri & Master Penenun</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🧵</div>
            <h4>Tim Penenun</h4>
            <p>90 Artisan Terampil</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">🎨</div>
            <h4>Desainer Motif</h4>
            <p>Ahli Motif Tradisional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;