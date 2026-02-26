import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nama lengkap harus diisi';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Format email tidak valid';
    }
    
    if (!formData.subject) {
      errors.subject = 'Silakan pilih subjek';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Pesan harus diisi';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('✅ Pesan Anda telah dikirim! Kami akan menghubungi Anda segera.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
      
    } catch (error) {
      alert('❌ Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: '📍', 
      title: 'Alamat', 
      info: 'Jl. Tenun No. 45, Tarutung, Sumatera Utara',
      description: 'Workshop dan Galeri Utama'
    },
    { 
      icon: '📞', 
      title: 'Telepon', 
      info: '0895-2756-2952',
      description: 'Senin - Sabtu, 08:00 - 16:00 WIB'
    },
    { 
      icon: '✉️', 
      title: 'Email', 
      info: 'info@dameulos.com',
      description: 'Respon dalam 1x24 jam'
    },
    { 
      icon: '🕐', 
      title: 'Jam Operasional', 
      info: 'Senin - Jumat',
      description: '08:00 - 16:00 WIB'
    },
  ];

  const subjects = [
    { value: '', label: 'Pilih subjek' },
    { value: 'pemesanan', label: '📦 Pemesanan Produk' },
    { value: 'kustomisasi', label: '🎨 Kustomisasi Motif' },
    { value: 'informasi', label: 'ℹ️ Informasi Produk' },
    { value: 'kerjasama', label: '🤝 Kerjasama & Distribusi' },
    { value: 'keluhan', label: '😔 Keluhan & Saran' },
    { value: 'lainnya', label: '📝 Lainnya' },
  ];

  const faqItems = [
    {
      question: '🛍️ Berapa lama waktu pengiriman?',
      answer: 'Pengiriman dalam kota Tarutung 1-2 hari, luar kota Sumatera Utara 3-5 hari, dan luar pulau 5-7 hari kerja. Pengiriman ekspres tersedia dengan biaya tambahan.'
    },
    {
      question: '🎨 Apakah bisa kustomisasi motif?',
      answer: 'Ya, kami menerima pesanan kustom dengan konsultasi terlebih dahulu. Minimal pemesanan 5 meter dengan waktu pengerjaan 2-3 minggu tergantung kompleksitas motif.'
    },
    {
      question: '🧵 Bagaimana cara merawat ulos?',
      answer: 'Direkomendasikan dry cleaning atau cuci tangan dengan deterjen lembut. Hindari penjemuran langsung di bawah matahari dan setrika dengan suhu rendah menggunakan alas kain.'
    },
    {
      question: '💳 Metode pembayaran apa saja yang tersedia?',
      answer: 'Transfer bank (BCA, Mandiri, BRI), QRIS, COD (hanya untuk wilayah Tarutung), dan pembayaran di tempat untuk pembelian langsung di galeri.'
    },
    {
      question: '📦 Apakah ada garansi untuk produk?',
      answer: 'Kami memberikan garansi 1 tahun untuk cacat produksi. Kerusakan karena penggunaan tidak normal atau perawatan yang salah tidak termasuk dalam garansi.'
    },
    {
      question: '🎁 Apakah menyediakan paket hadiah?',
      answer: 'Ya, kami menyediakan paket hadiah khusus untuk pernikahan, kelahiran, dan acara adat dengan kemasan eksklusif dan sertifikat keaslian.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="section-header">
          <h1 className="section-title">📞 Hubungi Dame Ulos</h1>
          <p className="section-subtitle">Kami siap membantu Anda dengan kebutuhan ulos terbaik dan memberikan solusi untuk setiap pertanyaan Anda</p>
        </div>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="section-card">
            <h3 className="section-title-sm">📋 Informasi Kontak</h3>
            <p className="section-description">
              Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia
            </p>
            
            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon-wrapper">
                    <div className="contact-icon">{item.icon}</div>
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-title">{item.title}</h4>
                    <p className="contact-info-main">{item.info}</p>
                    <p className="contact-info-desc">{item.description}</p>
                  </div>
                </div>  
              ))}
            </div>
          </div>

          {/* Map/Location Section */}
          <div className="section-card">
            <h3 className="section-title-sm">📍 Lokasi Workshop</h3>
            <div className="map-section">
              <div className="map-placeholder">
                <div className="map-illustration">
                  <div className="map-emoji">🏭</div>
                  <div className="map-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
                <div className="map-info">
                  <h4>Galeri & Workshop Dame Ulos</h4>
                  <p className="address">Jl. Tenun No. 45, Kec. Tarutung, Kab. Tapanuli Utara, Sumatera Utara 22411</p>
                  
                  <div className="location-features">
                    <div className="feature">
                      <span className="feature-icon">🏢</span>
                      <span>Workshop Tenun</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">🛍️</span>
                      <span>Galeri Showroom</span>
                    </div>
                    <div className="feature">
                      <span className="feature-icon">🎯</span>
                      <span>Pusat Pelatihan</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=Jl+Tenun+No+45+Tarutung+Tapanuli+Utara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link-btn"
                  >
                    <span className="map-link-icon">🗺️</span>
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="section-card">
            <h3 className="section-title-sm">📝 Kirim Pesan Langsung</h3>
            <p className="section-description">
              Isi formulir di bawah ini dan tim kami akan merespons secepatnya
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <span className="label-icon">👤</span>
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap Anda"
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.name && (
                  <div className="error-message">{formErrors.name}</div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-icon">📧</span>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <div className="error-message">{formErrors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <span className="label-icon">📱</span>
                    Nomor Telepon/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0812-3456-7890"
                    className="form-input"
                    disabled={isSubmitting}
                  />
                  <div className="input-hint">Opsional, untuk respon lebih cepat</div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <span className="label-icon">📋</span>
                  Subjek Pesan *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-select ${formErrors.subject ? 'error' : ''}`}
                  disabled={isSubmitting}
                >
                  {subjects.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {formErrors.subject && (
                  <div className="error-message">{formErrors.subject}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span className="label-icon">💬</span>
                  Pesan Anda *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda secara detail di sini..."
                  rows="6"
                  className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                  disabled={isSubmitting}
                />
                {formErrors.message && (
                  <div className="error-message">{formErrors.message}</div>
                )}
                <div className="textarea-hint">
                  Jelaskan kebutuhan Anda dengan detail untuk respon yang lebih akurat
                </div>
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <span className="submit-icon">📨</span>
                      Kirim Pesan Sekarang
                    </>
                  )}
                </button>
                <p className="form-note">
                  * Field bertanda bintang wajib diisi. Kami akan membalas maksimal 1x24 jam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="section-header">
          <h2 className="section-title">❓ Pertanyaan yang Sering Diajukan</h2>
          <p className="section-subtitle">Temukan jawaban untuk pertanyaan umum tentang Dame Ulos</p>
        </div>
        
        <div className="faq-grid">
          {faqItems.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <div className="faq-icon">?</div>
                <h4>{faq.question}</h4>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-footer">
          <p>Masih ada pertanyaan? <button className="faq-contact-btn" onClick={() => document.querySelector('.contact-form-section').scrollIntoView({ behavior: 'smooth' })}>
            Hubungi kami langsung →
          </button></p>
        </div>
      </div>

      </div>
  );
};

export default Contact;